#!/usr/bin/env node
// Writes the "Templates and rubrics" section of every skill from
// docs/template-ownership.json and evaluation/quality-profiles.json, so each skill
// names the templates it owns and the rubrics that grade them. Run after changing
// either file; the validator fails when a section is stale.
import { existsSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

export const SECTION_HEADING = '## Templates and rubrics'

export function sectionFor(skill, ownership, profiles) {
  const owned = Object.entries(ownership)
    .filter(([, owners]) => owners.includes(skill))
    .sort(([a], [b]) => a.localeCompare(b))
  if (!owned.length) {
    return [
      SECTION_HEADING,
      '',
      'This skill owns no artefact type. The deliverables it helps produce are graded by the rubric their own quality profile names in `evaluation/quality-profiles.json`, and their templates are listed with their owning skills in `docs/template-ownership.json`.',
    ].join('\n')
  }
  const rows = owned.map(([type, owners]) => {
    const profile = profiles[type] ?? {}
    const gate = profile.gate ?? {}
    const rubric = gate.mode === 'rubric' && gate.rubric ? `\`${gate.rubric}\`` : `None (gate: ${gate.mode ?? 'unset'})`
    const role = owners[0] === skill ? 'Primary' : 'Shared'
    return `| ${type} | \`${profile.template ?? `templates/${type}.md`}\` | ${rubric} | ${role} |`
  })
  return [
    SECTION_HEADING,
    '',
    "This skill owns the artefact types below. Produce each on its template, tailor it with the template's table-of-contents manifest, and grade it with the rubric its quality profile names in `evaluation/quality-profiles.json`.",
    '',
    '| Artefact type | Template | Rubric | Role |',
    '| --- | --- | --- | --- |',
    ...rows,
  ].join('\n')
}

// Returns the skill text with the section inserted before "## Operating standard"
// (or appended), replacing any earlier copy.
export function withSection(text, section) {
  const lines = text.replace(/\n+$/, '').split('\n')
  const start = lines.indexOf(SECTION_HEADING)
  let body = lines
  if (start >= 0) {
    let end = start + 1
    while (end < lines.length && !lines[end].startsWith('## ')) end += 1
    body = [...lines.slice(0, start), ...lines.slice(end)]
    while (body.length && body.at(-1).trim() === '') body.pop()
  }
  const anchor = body.indexOf('## Operating standard')
  const parts = section.split('\n')
  if (anchor < 0) return `${[...body, '', ...parts].join('\n')}\n`
  const before = body.slice(0, anchor)
  while (before.length && before.at(-1).trim() === '') before.pop()
  return `${[...before, '', ...parts, '', ...body.slice(anchor)].join('\n')}\n`
}

export function loadInputs(root) {
  const ownership = JSON.parse(readFileSync(join(root, 'docs', 'template-ownership.json'), 'utf8')).owners
  const profiles = JSON.parse(readFileSync(join(root, 'evaluation', 'quality-profiles.json'), 'utf8')).profiles
  return { ownership, profiles }
}

function main() {
  const root = join(fileURLToPath(new URL('.', import.meta.url)), '..')
  const { ownership, profiles } = loadInputs(root)
  const dir = join(root, 'skills')
  let changed = 0
  for (const skill of readdirSync(dir).filter((name) => statSync(join(dir, name)).isDirectory())) {
    const path = join(dir, skill, 'SKILL.md')
    if (!existsSync(path)) continue
    const text = readFileSync(path, 'utf8')
    const next = withSection(text, sectionFor(skill, ownership, profiles))
    if (next !== text) {
      writeFileSync(path, next)
      changed += 1
    }
  }
  console.log(`Skill artefact sections: ${changed} updated.`)
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) main()
