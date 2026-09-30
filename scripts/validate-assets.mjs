import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs'
import { join, basename } from 'node:path'

const root = process.cwd()
const errors = []

function readText(path) {
  return readFileSync(path, 'utf8')
}

function parseFrontmatter(path) {
  const text = readText(path)
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/)
  if (!match) {
    errors.push(`${path}: missing YAML frontmatter`)
    return {}
  }

  const fields = {}
  for (const line of match[1].split(/\r?\n/)) {
    if (!line.trim()) continue
    const field = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/)
    if (!field) {
      errors.push(`${path}: invalid frontmatter line "${line}"`)
      continue
    }
    fields[field[1]] = field[2].replace(/^["']|["']$/g, '')
  }
  return fields
}

function walkMarkdown(dir, acc) {
  if (!existsSync(dir)) return acc
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    if (statSync(full).isDirectory()) {
      walkMarkdown(full, acc)
    } else if (entry.endsWith('.md')) {
      acc.push(full)
    }
  }
  return acc
}

const allowedStatus = new Set(['draft', 'in-review', 'approved', 'final', 'deprecated'])

function validateSkills() {
  const skillsDir = join(root, 'skills')
  const skillNames = readdirSync(skillsDir).filter((entry) =>
    statSync(join(skillsDir, entry)).isDirectory(),
  )

  for (const skillName of skillNames) {
    const skillDir = join(skillsDir, skillName)
    const skillPath = join(skillDir, 'SKILL.md')
    const files = readdirSync(skillDir)

    if (!/^[a-z0-9-]+$/.test(skillName)) {
      errors.push(`${skillDir}: skill folder must use kebab-case`)
    }
    if (files.includes('README.md')) {
      errors.push(`${skillDir}: README.md is not allowed for runtime skill content`)
    }
    if (!files.includes('SKILL.md')) {
      errors.push(`${skillDir}: missing SKILL.md`)
      continue
    }

    const fields = parseFrontmatter(skillPath)
    const keys = Object.keys(fields)
    for (const required of ['name', 'description']) {
      if (!fields[required]) errors.push(`${skillPath}: missing required "${required}" frontmatter`)
    }
    for (const key of keys) {
      if (!['name', 'description'].includes(key)) {
        errors.push(`${skillPath}: unsupported frontmatter field "${key}"`)
      }
    }
    if (fields.name !== skillName) errors.push(`${skillPath}: frontmatter name must match folder name`)
    if (fields.name && fields.name.length > 64) errors.push(`${skillPath}: name must be 64 characters or fewer`)
    if (fields.description && fields.description.length > 1024) errors.push(`${skillPath}: description must be 1024 characters or fewer`)
    if (fields.description && !/\b(use|when|asks|mentions|request|requests)\b/i.test(fields.description)) {
      errors.push(`${skillPath}: description should include trigger conditions`)
    }
  }
}

function validateFrontmatterDir(dir, expectedType) {
  const files = walkMarkdown(join(root, dir), []).filter((f) => !f.endsWith('README.md'))
  if (files.length === 0) {
    errors.push(`${join(root, dir)}: no ${expectedType} files found`)
    return
  }
  for (const path of files) {
    const fields = parseFrontmatter(path)
    for (const required of ['type', 'domain', 'status', 'version']) {
      if (!fields[required]) errors.push(`${path}: missing required "${required}" frontmatter`)
    }
    if (fields.type && fields.type !== expectedType) errors.push(`${path}: type must be "${expectedType}"`)
    if (fields.status && !allowedStatus.has(fields.status)) errors.push(`${path}: status must be one of ${[...allowedStatus].join(', ')}`)
    if (fields.version && !/^\d+\.\d+\.\d+$/.test(fields.version)) errors.push(`${path}: version must be semantic (for example 1.0.0)`)
  }
}

// Subagents: agents/*.md with name + description frontmatter; name matches filename.
function validateAgents() {
  const dir = join(root, 'agents')
  if (!existsSync(dir)) return
  const files = readdirSync(dir).filter((f) => f.endsWith('.md') && f !== 'README.md')
  for (const file of files) {
    const path = join(dir, file)
    const fields = parseFrontmatter(path)
    const expected = basename(file, '.md')
    if (!fields.name) errors.push(`${path}: missing required "name" frontmatter`)
    if (!fields.description) errors.push(`${path}: missing required "description" frontmatter`)
    if (fields.name && fields.name !== expected) errors.push(`${path}: frontmatter name must match filename`)
    if (fields.name && !/^[a-z0-9-]+$/.test(fields.name)) errors.push(`${path}: agent name must be kebab-case`)
    if (fields.description && fields.description.length > 1024) errors.push(`${path}: description must be 1024 characters or fewer`)
  }
}

// House style: the em dash (U+2014) is banned in produced artifacts.
function validateEditorialStyle() {
  const scanDirs = ['templates', 'checklists', 'deliverables', 'examples', 'evaluation', 'frameworks', 'domain-packs', 'memory', 'prompts']
  for (const rel of scanDirs) {
    for (const file of walkMarkdown(join(root, rel), [])) {
      const lines = readText(file).split(/\r?\n/)
      lines.forEach((line, index) => {
        if (line.includes('—')) {
          errors.push(`${file}:${index + 1}: em dash (U+2014) is banned by house style; recast the sentence`)
        }
      })
    }
  }
}

// MVP proof: the operating system must be demonstrable end to end.
function validateMvp() {
  const required = [
    'skills/orchestrator/SKILL.md',
    'skills/business-analysis/SKILL.md',
    'templates/brd.md',
    'evaluation/brd-rubric.md',
    'examples/customer-self-service-portal/scenario.md',
    'examples/customer-self-service-portal/brd.md',
    'examples/customer-self-service-portal/evaluation.md',
  ]
  for (const rel of required) {
    if (!existsSync(join(root, rel))) errors.push(`MVP asset missing: ${rel}`)
  }
}

// Template to rubric bindings: every template is graded by exactly one existing rubric,
// its own-name rubric wins when one exists, and every playbook slot agrees with the binding.
function validateRubricBindings() {
  const bindingsPath = 'evaluation/template-rubric-bindings.json'
  if (!existsSync(join(root, bindingsPath))) {
    errors.push(`${bindingsPath}: missing template to rubric bindings`)
    return
  }
  let bindings
  try {
    bindings = JSON.parse(readText(join(root, bindingsPath))).bindings ?? {}
  } catch (error) {
    errors.push(`${bindingsPath}: invalid JSON (${error.message})`)
    return
  }

  const templates = readdirSync(join(root, 'templates'))
    .filter((entry) => entry.endsWith('.md') && entry !== 'README.md')
    .map((entry) => `templates/${entry}`)
  for (const template of templates) {
    const rubric = bindings[template]
    if (!rubric) {
      errors.push(`${bindingsPath}: ${template} has no rubric binding`)
      continue
    }
    if (!/^evaluation\/[a-z0-9-]+-rubric\.md$/.test(rubric) || !existsSync(join(root, rubric))) {
      errors.push(`${bindingsPath}: ${template} binds to missing rubric ${rubric}`)
    }
    const ownName = `evaluation/${basename(template, '.md')}-rubric.md`
    if (existsSync(join(root, ownName)) && rubric !== ownName) {
      errors.push(`${bindingsPath}: ${template} must bind to its own-name rubric ${ownName}`)
    }
  }
  for (const template of Object.keys(bindings)) {
    if (!templates.includes(template)) errors.push(`${bindingsPath}: binding for unknown template ${template}`)
  }

  const playbooksDir = join(root, 'playbooks')
  if (!existsSync(playbooksDir)) return
  for (const entry of readdirSync(playbooksDir).filter((name) => name.endsWith('.json'))) {
    const slots = JSON.parse(readText(join(playbooksDir, entry))).slots ?? []
    for (const slot of slots) {
      if (slot.quality?.mode !== 'rubric') continue
      const template = slot.template?.key?.split('.template.')[1]
      const rubric = slot.quality.reference?.key?.split('.rubric.')[1]
      if (template && bindings[template] && rubric !== bindings[template]) {
        errors.push(`playbooks/${entry}: ${slot.slotId} grades ${template} with ${rubric}, but the binding is ${bindings[template]}`)
      }
    }
  }
}

validateSkills()
validateFrontmatterDir('templates', 'deliverable')
validateRubricBindings()
validateFrontmatterDir('checklists', 'checklist')
validateAgents()
validateEditorialStyle()
validateMvp()

if (errors.length) {
  console.error('Validation failed:')
  for (const error of errors) console.error(`- ${error}`)
  process.exit(1)
}

console.log('Validation passed: skills, agents, templates, rubric bindings, checklists, and MVP assets are sound.')
