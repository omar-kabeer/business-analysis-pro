import { createHash } from 'node:crypto'
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs'
import { join, basename } from 'node:path'
import { noteFor, withNote } from './sync-template-notes.mjs'

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

// Quality profiles: every artefact type (template stem) has one profile naming its template,
// its gate, and any reviewer agents. An own-name rubric wins when one exists, and every
// playbook slot must grade its template with the rubric its profile names.
function validateQualityProfiles() {
  const profilesPath = 'evaluation/quality-profiles.json'
  if (!existsSync(join(root, profilesPath))) {
    errors.push(`${profilesPath}: missing quality profiles`)
    return
  }
  let doc
  try {
    doc = JSON.parse(readText(join(root, profilesPath)))
  } catch (error) {
    errors.push(`${profilesPath}: invalid JSON (${error.message})`)
    return
  }
  if (doc.schemaVersion !== 1) errors.push(`${profilesPath}: schemaVersion must be 1`)
  const modes = new Set(doc.gateModes ?? [])
  const profiles = doc.profiles ?? {}

  const types = readdirSync(join(root, 'templates'))
    .filter((entry) => entry.endsWith('.md') && entry !== 'README.md')
    .map((entry) => basename(entry, '.md'))
  for (const type of types) {
    const profile = profiles[type]
    if (!profile) {
      errors.push(`${profilesPath}: ${type} has no quality profile`)
      continue
    }
    if (profile.template !== `templates/${type}.md`) {
      errors.push(`${profilesPath}: ${type} must name template templates/${type}.md`)
    }
    const gate = profile.gate ?? {}
    if (!modes.has(gate.mode)) errors.push(`${profilesPath}: ${type} has unknown gate mode "${gate.mode}"`)
    if (gate.mode === 'rubric') {
      if (!/^evaluation\/[a-z0-9-]+-rubric\.md$/.test(gate.rubric ?? '') || !existsSync(join(root, gate.rubric))) {
        errors.push(`${profilesPath}: ${type} names missing rubric ${gate.rubric}`)
      }
      const ownName = `evaluation/${type}-rubric.md`
      if (existsSync(join(root, ownName)) && gate.rubric !== ownName) {
        errors.push(`${profilesPath}: ${type} must use its own-name rubric ${ownName}`)
      }
    } else if (gate.rubric) {
      errors.push(`${profilesPath}: ${type} names a rubric but its gate mode is ${gate.mode}`)
    }
    for (const reviewer of profile.reviewers ?? []) {
      if (!existsSync(join(root, 'agents', `${reviewer}.md`))) {
        errors.push(`${profilesPath}: ${type} names unknown reviewer agent ${reviewer}`)
      }
    }
  }
  for (const type of Object.keys(profiles)) {
    if (!types.includes(type)) errors.push(`${profilesPath}: profile for unknown artefact type ${type}`)
  }

  const playbooksDir = join(root, 'playbooks')
  if (!existsSync(playbooksDir)) return
  for (const entry of readdirSync(playbooksDir).filter((name) => name.endsWith('.json'))) {
    const playbook = JSON.parse(readText(join(playbooksDir, entry)))
    // Every pinned source must hash to the file on disk, or Kryterea rejects the playbook.
    const pins = []
    const collectPins = (node) => {
      if (Array.isArray(node)) node.forEach(collectPins)
      else if (node && typeof node === 'object') {
        if (typeof node.key === 'string' && typeof node.contentHash === 'string') pins.push(node)
        Object.values(node).forEach(collectPins)
      }
    }
    collectPins(playbook)
    for (const pin of pins) {
      const path = pin.key.split('.').slice(2).join('.')
      const file = join(root, path)
      if (!existsSync(file)) {
        errors.push(`playbooks/${entry}: pins missing file ${path}`)
      } else if (createHash('sha256').update(readFileSync(file)).digest('hex') !== pin.contentHash) {
        errors.push(`playbooks/${entry}: stale pin for ${path}; regenerate the playbook`)
      }
    }
    const slots = playbook.slots ?? []
    for (const slot of slots) {
      if (slot.quality?.mode !== 'rubric') continue
      const profile = profiles[slot.artefactType]
      const rubric = slot.quality.reference?.key?.split('.rubric.')[1]
      if (profile?.gate?.rubric && rubric !== profile.gate.rubric) {
        errors.push(`playbooks/${entry}: ${slot.slotId} grades ${slot.artefactType} with ${rubric}, but its profile names ${profile.gate.rubric}`)
      }
    }
  }
}

// Rubric bands, parsed the way Kryterea's rubric ingest parses them.
function parseRubricBands(markdown) {
  const dimensions = []
  for (const line of markdown.split(/\r?\n/)) {
    const row = line.match(/^\|\s*(\d+)\s*\|/)
    if (!row) {
      if (dimensions.length) break
      continue
    }
    dimensions.push(row[1])
  }
  return {
    dimensions,
    scaleMax: Number(markdown.match(/score\s+0\s+to\s+(\d+)/i)?.[1] ?? 3),
    pass: Number(markdown.match(/Pass:\s*(\d+)\s+or higher/i)?.[1] ?? 0),
    partial: Number(markdown.match(/(?:Pass with changes|changes):\s*(\d+)\s+to/i)?.[1] ?? 0),
    noZeroForPass: /no dimension at 0/i.test(markdown),
  }
}

function verdictFor(bands, scores, blocking = []) {
  const total = scores.reduce((sum, score) => sum + score, 0)
  const hasZero = scores.includes(0)
  // A blocking dimension at 0 fails the artefact whatever the total (docs/depth-standard.md).
  if (blocking.some((dimension) => scores[dimension - 1] === 0)) return 'fail'
  if (total >= bands.pass && !(bands.noZeroForPass && hasZero)) return 'pass'
  if (total >= bands.partial) return 'pass_with_changes'
  return 'fail'
}

// Calibration sets: scored reference outputs that prove a rubric grades as an expert would.
// Each set pins its rubric by SHA-256, so editing the rubric forces recalibration.
function validateCalibration() {
  const dir = join(root, 'evaluation', 'calibration')
  if (!existsSync(dir)) return
  const profiles = JSON.parse(readText(join(root, 'evaluation', 'quality-profiles.json'))).profiles ?? {}
  for (const type of readdirSync(dir).filter((entry) => statSync(join(dir, entry)).isDirectory())) {
    const scoresPath = join('evaluation', 'calibration', type, 'scores.json')
    if (!existsSync(join(root, scoresPath))) {
      errors.push(`${scoresPath}: missing`)
      continue
    }
    const set = JSON.parse(readText(join(root, scoresPath)))
    const profileRubric = profiles[type]?.gate?.rubric
    if (!profileRubric) errors.push(`${scoresPath}: ${type} has no rubric gate in its quality profile`)
    if (set.artefactType !== type) errors.push(`${scoresPath}: artefactType must be ${type}`)
    if (set.rubric !== profileRubric) errors.push(`${scoresPath}: rubric ${set.rubric} is not the profile rubric ${profileRubric}`)
    if (!['provisional', 'confirmed'].includes(set.status)) errors.push(`${scoresPath}: status must be provisional or confirmed`)
    if (!set.rubric || !existsSync(join(root, set.rubric))) continue
    const rubricBytes = readFileSync(join(root, set.rubric))
    if (createHash('sha256').update(rubricBytes).digest('hex') !== set.rubricSha256) {
      errors.push(`${scoresPath}: ${set.rubric} changed since calibration; rescore the references and update rubricSha256`)
    }
    const bands = parseRubricBands(rubricBytes.toString('utf8'))
    const verdicts = new Set()
    for (const reference of set.references ?? []) {
      const label = `${scoresPath} (${reference.file})`
      if (!existsSync(join(root, 'evaluation', 'calibration', type, reference.file))) errors.push(`${label}: reference file missing`)
      const keys = Object.keys(reference.scores ?? {})
      if (keys.sort().join() !== [...bands.dimensions].sort().join()) {
        errors.push(`${label}: scores must cover exactly dimensions ${bands.dimensions.join(', ')}`)
        continue
      }
      const scores = bands.dimensions.map((key) => reference.scores[key])
      if (scores.some((score) => !Number.isInteger(score) || score < 0 || score > bands.scaleMax)) {
        errors.push(`${label}: every score must be an integer from 0 to ${bands.scaleMax}`)
        continue
      }
      const verdict = verdictFor(bands, scores, profiles[type]?.gate?.blocking ?? [])
      if (verdict !== reference.expectedVerdict) {
        errors.push(`${label}: scores give ${verdict}, but expectedVerdict is ${reference.expectedVerdict}`)
      }
      verdicts.add(reference.expectedVerdict)
    }
    for (const needed of ['pass', 'pass_with_changes', 'fail']) {
      if (!verdicts.has(needed)) errors.push(`${scoresPath}: needs at least one ${needed} reference`)
    }
  }
}

// Template tables of contents (docs/depth-standard.md): a manifest per template names every
// section, its tier, when it applies, and the rubric dimensions it evidences.
const ARTEFACT_STANDARD = ['purpose', 'scope', 'inputs', 'outputs', 'assumptions', 'risks', 'review-criteria']
const TOC_WHEN = {
  approach: ['predictive', 'adaptive', 'hybrid'],
  formality: ['light', 'standard', 'formal'],
  audience: ['executive', 'delivery', 'regulator', 'customer'],
  risk: ['low', 'medium', 'high'],
  regulated: [true],
  domainPack: null,
  perspective: ['agile', 'business-intelligence', 'information-technology', 'business-architecture', 'business-process-management'],
}

function rubricDimensions(rubricPath) {
  if (!rubricPath || !existsSync(join(root, rubricPath))) return []
  return parseRubricBands(readText(join(root, rubricPath))).dimensions.map(Number)
}

// Kryterea's document catalogue reads each template's title and frontmatter domain
// (scripts/compile-document-catalogue.mjs in kryterea-app), so a change silently moves
// the type in the product. docs/template-identity.json pins both; change it on purpose.
function validateTemplateIdentity() {
  const path = join(root, 'docs', 'template-identity.json')
  if (!existsSync(path)) return
  const pinned = JSON.parse(readText(path)).templates ?? {}
  const dir = join(root, 'templates')
  const seen = new Set()
  for (const file of readdirSync(dir).filter((name) => name.endsWith('.md'))) {
    const type = file.slice(0, -'.md'.length)
    seen.add(type)
    const text = readText(join(dir, file))
    const front = /^---\n([\s\S]*?)\n---/.exec(text)?.[1] ?? ''
    const domain = /^domain:\s*(\S+)\s*$/m.exec(front)?.[1] ?? null
    const title = /^#\s+(.+?)\s*$/m.exec(text.slice(front ? front.length + 8 : 0))?.[1] ?? null
    const expected = pinned[type]
    if (!expected) {
      errors.push(`templates/${file}: not in docs/template-identity.json; add its title and domain`)
    } else if (expected.title !== title || expected.domain !== domain) {
      errors.push(
        `templates/${file}: title or domain changed (${JSON.stringify({ title, domain })}, pinned ${JSON.stringify(expected)}); this moves the type in Kryterea's catalogue, so update docs/template-identity.json only if intended`,
      )
    }
  }
  for (const type of Object.keys(pinned)) {
    if (!seen.has(type)) errors.push(`docs/template-identity.json: ${type} has no template`)
  }
}

function validateTemplateTocs() {
  const profiles = JSON.parse(readText(join(root, 'evaluation', 'quality-profiles.json'))).profiles ?? {}
  for (const file of readdirSync(join(root, 'templates')).filter((name) => name.endsWith('.toc.json'))) {
    const type = file.slice(0, -'.toc.json'.length)
    const label = `templates/${file}`
    const templatePath = join(root, 'templates', `${type}.md`)
    if (!existsSync(templatePath)) {
      errors.push(`${label}: no template templates/${type}.md`)
      continue
    }
    let toc
    try {
      toc = JSON.parse(readText(join(root, 'templates', file)))
    } catch (error) {
      errors.push(`${label}: invalid JSON (${error.message})`)
      continue
    }
    if (toc.schemaVersion !== 1) errors.push(`${label}: schemaVersion must be 1`)
    if (toc.artefactType !== type) errors.push(`${label}: artefactType must be ${type}`)
    const sections = Array.isArray(toc.sections) ? toc.sections : []
    const templateText = readText(templatePath)
    if (sections.length && withNote(templateText, noteFor(toc, type)) !== templateText) {
      errors.push(`templates/${type}.md: usage note is missing or stale; run node scripts/sync-template-notes.mjs`)
    }
    const headings = [...readText(templatePath).matchAll(/^#{2,3} (.+?)\s*$/gm)].map((m) => m[1])
    const topHeadings = [...readText(templatePath).matchAll(/^## (.+?)\s*$/gm)].map((m) => m[1])
    const ids = new Map()
    for (const section of sections) {
      const where = `${label} (${section.id ?? '?'})`
      if (!/^[a-z0-9][a-z0-9-]*$/.test(section.id ?? '')) errors.push(`${where}: id must be kebab-case`)
      if (ids.has(section.id)) errors.push(`${where}: duplicate id`)
      ids.set(section.id, section)
      if (!headings.includes(section.heading)) errors.push(`${where}: heading "${section.heading}" is not in the template`)
      if (!['core', 'standard', 'extended'].includes(section.tier)) errors.push(`${where}: tier must be core, standard or extended`)
      if (!section.purpose) errors.push(`${where}: purpose is required`)
      if (section.artefactStandard && !ARTEFACT_STANDARD.includes(section.artefactStandard)) {
        errors.push(`${where}: unknown artefactStandard ${section.artefactStandard}`)
      }
      for (const [key, values] of Object.entries(section.when ?? {})) {
        if (!(key in TOC_WHEN)) errors.push(`${where}: unknown when key ${key}`)
        else if (!Array.isArray(values) || (TOC_WHEN[key] && values.some((v) => !TOC_WHEN[key].includes(v)))) {
          errors.push(`${where}: invalid when.${key} values`)
        }
      }
      if (section.tier === 'extended' && !section.when) errors.push(`${where}: an extended section needs a when condition`)
    }
    for (const heading of topHeadings) {
      if (!sections.some((section) => section.heading === heading)) errors.push(`${label}: template heading "${heading}" has no section`)
    }
    for (const section of sections) {
      for (const dependency of section.requires ?? []) {
        if (!ids.has(dependency)) errors.push(`${label} (${section.id}): requires unknown section ${dependency}`)
      }
    }
    const visiting = new Set()
    const done = new Set()
    const cyclic = (id) => {
      if (done.has(id)) return false
      if (visiting.has(id)) return true
      visiting.add(id)
      const found = (ids.get(id)?.requires ?? []).some(cyclic)
      visiting.delete(id)
      done.add(id)
      return found
    }
    if ([...ids.keys()].some(cyclic)) errors.push(`${label}: requires has a cycle`)
    const core = sections.filter((section) => section.tier === 'core')
    for (const element of ARTEFACT_STANDARD) {
      if (!core.some((section) => section.artefactStandard === element)) {
        errors.push(`${label}: core sections do not cover the artefact standard element "${element}"`)
      }
    }
    const gate = profiles[type]?.gate
    const dimensions = rubricDimensions(gate?.rubric)
    if (gate?.mode === 'rubric') {
      for (const section of sections) {
        for (const dimension of section.evidences ?? []) {
          if (!dimensions.includes(dimension)) errors.push(`${label} (${section.id}): evidences ${dimension}, not a dimension of ${gate.rubric}`)
        }
      }
      for (const dimension of dimensions) {
        if (!sections.some((section) => (section.evidences ?? []).includes(dimension))) {
          errors.push(`${label}: rubric dimension ${dimension} is evidenced by no section`)
        } else if (
          !sections.some((section) => section.tier !== 'extended' && (section.evidences ?? []).includes(dimension))
        ) {
          // The default resolution drops extended sections, and a grader that does not
          // resolve the manifest would then mark this dimension down.
          errors.push(`${label}: rubric dimension ${dimension} is evidenced only by extended sections`)
        }
      }
      for (const dimension of gate.blocking ?? []) {
        if (!core.some((section) => (section.evidences ?? []).includes(dimension))) {
          errors.push(`${label}: blocking dimension ${dimension} is evidenced by no core section`)
        }
      }
    }
  }
}

// Blocking dimensions: a profile may name rubric dimensions that fail the gate at 0.
function validateBlockingDimensions() {
  const profiles = JSON.parse(readText(join(root, 'evaluation', 'quality-profiles.json'))).profiles ?? {}
  for (const [type, profile] of Object.entries(profiles)) {
    const blocking = profile.gate?.blocking
    if (blocking === undefined) continue
    const dimensions = rubricDimensions(profile.gate?.rubric)
    if (!Array.isArray(blocking) || blocking.length === 0 || blocking.some((d) => !dimensions.includes(d))) {
      errors.push(`evaluation/quality-profiles.json: ${type} gate.blocking must list dimensions of ${profile.gate?.rubric}`)
    }
  }
}

validateSkills()
validateFrontmatterDir('templates', 'deliverable')
validateQualityProfiles()
validateCalibration()
validateTemplateTocs()
validateTemplateIdentity()
validateBlockingDimensions()
validateFrontmatterDir('checklists', 'checklist')
validateAgents()
validateEditorialStyle()
validateMvp()

if (errors.length) {
  console.error('Validation failed:')
  for (const error of errors) console.error(`- ${error}`)
  process.exit(1)
}

console.log('Validation passed: skills, agents, templates, quality profiles, calibration sets, tables of contents, checklists, and MVP assets are sound.')
