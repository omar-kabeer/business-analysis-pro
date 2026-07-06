import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs'
import { join } from 'node:path'

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
      if (!fields[required]) {
        errors.push(`${skillPath}: missing required "${required}" frontmatter`)
      }
    }

    for (const key of keys) {
      if (!['name', 'description'].includes(key)) {
        errors.push(`${skillPath}: unsupported frontmatter field "${key}"`)
      }
    }

    if (fields.name !== skillName) {
      errors.push(`${skillPath}: frontmatter name must match folder name`)
    }

    if (fields.name && fields.name.length > 64) {
      errors.push(`${skillPath}: name must be 64 characters or fewer`)
    }

    if (fields.description && fields.description.length > 1024) {
      errors.push(`${skillPath}: description must be 1024 characters or fewer`)
    }

    if (fields.description && !/\b(use|when|asks|mentions|request|requests)\b/i.test(fields.description)) {
      errors.push(`${skillPath}: description should include trigger conditions`)
    }
  }
}

function validateTemplates() {
  const templatesDir = join(root, 'templates')
  const allowedStatus = new Set(['draft', 'in-review', 'approved', 'final', 'deprecated'])
  const files = walkMarkdown(templatesDir, []).filter((f) => !f.endsWith('README.md'))

  if (files.length === 0) {
    errors.push(`${templatesDir}: no template files found`)
    return
  }

  for (const path of files) {
    const fields = parseFrontmatter(path)
    for (const required of ['type', 'domain', 'status', 'version']) {
      if (!fields[required]) {
        errors.push(`${path}: missing required "${required}" frontmatter`)
      }
    }
    if (fields.type && fields.type !== 'deliverable') {
      errors.push(`${path}: type must be "deliverable"`)
    }
    if (fields.status && !allowedStatus.has(fields.status)) {
      errors.push(`${path}: status must be one of ${[...allowedStatus].join(', ')}`)
    }
    if (fields.version && !/^\d+\.\d+\.\d+$/.test(fields.version)) {
      errors.push(`${path}: version must be semantic (for example 1.0.0)`)
    }
  }
}

// House style: the em dash (U+2014) is banned in produced artifacts.
// Scoped to deliverable/template markdown so instructional docs and skills
// (which must name the character to explain the rule) are not flagged.
function validateEditorialStyle() {
  const scanDirs = ['templates', 'deliverables']
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

validateSkills()
validateTemplates()
validateEditorialStyle()

if (errors.length) {
  console.error('Validation failed:')
  for (const error of errors) {
    console.error(`- ${error}`)
  }
  process.exit(1)
}

console.log('Validation passed: skills and templates are structurally sound.')
