// Build the distributable Business Analysis OS plugin.
//
// The single source of truth is the repository itself (skills/, docs/, templates/).
// This script syncs the pieces a Claude Code plugin needs into plugin/, so the
// plugin never drifts from the source. Run it after changing any skill:
//
//   node scripts/build-plugin.mjs
//
// It preserves plugin/.claude-plugin/ and plugin/hooks/ (hand-authored) and
// refreshes plugin/skills/, plugin/docs/, and plugin/templates/.

import { cpSync, mkdirSync, rmSync, existsSync, readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

const root = process.cwd()
const pluginDir = join(root, 'plugin')

function resetDir(rel) {
  const target = join(pluginDir, rel)
  if (existsSync(target)) rmSync(target, { recursive: true, force: true })
  mkdirSync(target, { recursive: true })
  return target
}

// 1. Skills: the whole set, with their references/ intact.
const skillsOut = resetDir('skills')
cpSync(join(root, 'skills'), skillsOut, { recursive: true })

// 2. Cross-cutting docs the skills point to.
const docsOut = resetDir('docs')
cpSync(join(root, 'docs', 'methodology', 'editorial-style.md'), join(docsOut, 'editorial-style.md'))
cpSync(join(root, 'docs', 'methodology', 'sdlc-playbook.md'), join(docsOut, 'sdlc-playbook.md'))
cpSync(join(root, 'docs', 'methodology', 'technique-index.md'), join(docsOut, 'technique-index.md'))
cpSync(join(root, 'docs', 'methodology', 'skills-audit.md'), join(docsOut, 'skills-audit.md'))
cpSync(
  join(root, 'docs', 'architecture', 'skill-authoring-guidelines.md'),
  join(docsOut, 'skill-authoring-guidelines.md'),
)

// 3. Templates referenced by the requirements and business-analysis skills.
const templatesOut = resetDir('templates')
cpSync(join(root, 'templates'), templatesOut, { recursive: true })

// Checklists (DoR, DoD, review checklists).
const checklistsOut = resetDir('checklists')
cpSync(join(root, 'checklists'), checklistsOut, { recursive: true })

// Evaluation rubrics.
const evalOut = resetDir('evaluation')
cpSync(join(root, 'evaluation'), evalOut, { recursive: true })

// 4. Report what was built and guard the house-style rule.
// Imported third-party skills may keep em dashes inside their own authoring
// instructions; the ban is enforced on their generated output by the mandatory
// natural-prose-editor final pass, not on their instruction text.
const thirdParty = new Set([
  'natural-prose-editor',
  'technical-writer',
  'proposal-writer',
  'prompt-master',
])
const skillNames = readdirSync(skillsOut).filter((n) => existsSync(join(skillsOut, n, 'SKILL.md')))
let emDashHits = 0
for (const name of skillNames) {
  if (thirdParty.has(name)) continue
  const body = readFileSync(join(skillsOut, name, 'SKILL.md'), 'utf8')
  if (body.includes('—')) {
    emDashHits += 1
    console.error(`Em dash found in first-party skill: ${name}`)
  }
}

console.log(`Plugin built: ${skillNames.length} skills synced to plugin/skills/`)
console.log(`Skills: ${skillNames.sort().join(', ')}`)
if (emDashHits > 0) {
  console.error(`Warning: ${emDashHits} first-party skill file(s) contain an em dash. Recast before publishing.`)
  process.exit(1)
}
console.log('House style check passed: no em dashes in first-party skill bodies.')
