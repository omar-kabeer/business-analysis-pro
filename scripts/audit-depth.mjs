#!/usr/bin/env node
/**
 * Depth audit (docs/depth-standard.md). Scores every template, every rubric a
 * quality profile uses, and every skill against the depth standard, and
 * compares each score with evaluation/depth-baseline.json. Fails when any
 * asset scores lower than its baseline, so depth can only go up.
 *
 *   node scripts/audit-depth.mjs            report and check against the baseline
 *   node scripts/audit-depth.mjs --update   also write the current scores as the baseline
 *   node scripts/audit-depth.mjs --verbose  also list each asset's failing checks
 */
import { existsSync, readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const root = process.cwd()
const read = (rel) => readFileSync(join(root, rel), 'utf8')
const exists = (rel) => existsSync(join(root, rel))
const json = (rel) => JSON.parse(read(rel))

const profiles = json('evaluation/quality-profiles.json').profiles
const owned = exists('docs/register-ownership.json') ? json('docs/register-ownership.json').owned : {}
const sources = json('sources/manifest.json').sources
const ELEMENTS = ['purpose', 'scope', 'inputs', 'outputs', 'assumptions', 'risks', 'review-criteria']
const ELEMENT_HEADING = {
  purpose: /purpose/i,
  scope: /scope/i,
  inputs: /inputs?|sources/i,
  outputs: /outputs?/i,
  assumptions: /assumptions?/i,
  risks: /risks?/i,
  'review-criteria': /review criteria/i,
}

function sectionsOf(markdown) {
  const out = []
  let current = null
  for (const line of markdown.split(/\r?\n/)) {
    const heading = line.match(/^## (.+?)\s*$/)
    if (heading) {
      current = { heading: heading[1], lines: [] }
      out.push(current)
    } else if (current) current.lines.push(line)
  }
  return out
}

function tablesOf(markdown) {
  const tables = []
  let rows = []
  for (const line of [...markdown.split(/\r?\n/), '']) {
    if (/^\|.*\|\s*$/.test(line)) rows.push(line)
    else if (rows.length) {
      tables.push(rows)
      rows = []
    }
  }
  return tables.map((table) =>
    table
      .slice(2)
      .map((row) => row.trim().slice(1, -1).split('|').map((cell) => cell.trim())),
  )
}

function auditTemplate(type) {
  const text = read(`templates/${type}.md`)
  const tocPath = `templates/${type}.toc.json`
  const toc = exists(tocPath) ? json(tocPath) : null
  const sections = sectionsOf(text)
  const rubric = profiles[type]?.gate?.rubric
  const checks = {
    T1: Boolean(toc),
    T2: toc
      ? ELEMENTS.every((e) => toc.sections.some((s) => s.tier === 'core' && s.artefactStandard === e))
      : ELEMENTS.every((e) => sections.some((s) => ELEMENT_HEADING[e].test(s.heading))),
    T3: sections
      .filter((s) => s.heading !== 'Document Control')
      .every((s) => s.lines.some((l) => l.trim() && !l.startsWith('|') && !l.startsWith('#'))),
    T4: tablesOf(text).every((rows) =>
      rows.some((cells) => cells.filter(Boolean).length > cells.length / 2),
    ),
    T5: /\b[A-Z]{1,6}-\d{3}\b/.test(text),
    T6: /BABOK/.test(text) && /\b\d{1,2}\.\d{1,2}\b/.test(text),
    T7: Boolean(rubric) && (text.includes(rubric) || (toc && JSON.stringify(toc).includes(rubric))),
  }
  return checks
}

function auditRubric(path) {
  const text = read(path)
  const users = Object.entries(profiles).filter(([, p]) => p.gate?.rubric === path)
  const numbered = [...text.matchAll(/^\|\s*(\d+)\s*\|/gm)].length
  let dimensions = 0
  for (const line of text.split(/\r?\n/)) {
    if (/^\|\s*\d+\s*\|/.test(line)) dimensions += 1
    else if (dimensions && !line.startsWith('|')) break
  }
  const dims = Array.from({ length: dimensions }, (_, i) => i + 1)
  const checks = {
    R1: users.every(([type]) => text.includes(`templates/${type}.md`)),
    R2: dimensions >= 7 && dimensions <= 9,
    R3: numbered >= dimensions * 2,
    R4: /^## Common failure modes/m.test(text),
    R5: users.some(([, p]) => Array.isArray(p.gate.blocking) && p.gate.blocking.length > 0),
    R6: users.every(([type]) => {
      if (!exists(`templates/${type}.toc.json`)) return false
      const toc = json(`templates/${type}.toc.json`)
      return dims.every((d) => toc.sections.some((s) => (s.evidences ?? []).includes(d)))
    }),
    R7: users.some(([type]) => exists(`evaluation/calibration/${type}/scores.json`)),
    R8: users.some(
      ([type]) =>
        exists(`evaluation/calibration/${type}/scores.json`) &&
        json(`evaluation/calibration/${type}/scores.json`).status === 'confirmed',
    ),
  }
  return checks
}

function auditSkill(name) {
  const dir = `skills/${name}`
  const refs = exists(`${dir}/references`) ? readdirSync(join(root, dir, 'references')) : []
  const refText = refs.map((f) => read(`${dir}/references/${f}`)).join('\n')
  const body = read(`${dir}/SKILL.md`)
  const words = refText.split(/\s+/).filter(Boolean).length
  const all = `${body}\n${refText}`
  return {
    S1: refs.some((f) => f.endsWith('-playbook.md')),
    S2: sources.filter((s) => (s.skills ?? []).includes(name) || (s.skills ?? []).includes('*')).length >= 3,
    S3: words >= Math.max(800, 60 * (owned[name] ?? 0)),
    S4: /worked example|^#+ .*example/im.test(all) || /examples\/[a-z0-9-]+\//.test(all),
    S5: /templates\/[a-z0-9-]+\.md|quality-profiles\.json/.test(all) && /evaluation\/|quality-profiles\.json/.test(all),
    S6: refs.length > 0,
  }
}

const results = { templates: {}, rubrics: {}, skills: {} }
for (const f of readdirSync(join(root, 'templates')).filter((f) => f.endsWith('.md') && f !== 'README.md')) {
  results.templates[f.slice(0, -3)] = auditTemplate(f.slice(0, -3))
}
for (const path of [...new Set(Object.values(profiles).map((p) => p.gate?.rubric).filter(Boolean))].sort()) {
  results.rubrics[path.replace(/^evaluation\//, '').replace(/-rubric\.md$/, '')] = auditRubric(path)
}
for (const name of readdirSync(join(root, 'skills')).sort()) {
  if (exists(`skills/${name}/SKILL.md`)) results.skills[name] = auditSkill(name)
}

const score = (checks) => Object.values(checks).filter(Boolean).length
const scores = Object.fromEntries(
  Object.entries(results).map(([kind, assets]) => [
    kind,
    Object.fromEntries(Object.entries(assets).map(([name, checks]) => [name, score(checks)])),
  ]),
)

console.log('Depth audit (docs/depth-standard.md)\n')
for (const [kind, assets] of Object.entries(results)) {
  const entries = Object.entries(assets)
  const total = entries.length ? Object.keys(entries[0][1]).length : 0
  const atBar = entries.filter(([, c]) => score(c) === total).length
  const perCheck = total
    ? Object.keys(entries[0][1])
        .map((id) => `${id} ${entries.filter(([, c]) => c[id]).length}`)
        .join(', ')
    : ''
  console.log(`${kind}: ${atBar} of ${entries.length} at the bar (${total} checks). Passing per check: ${perCheck}`)
  if (process.argv.includes('--verbose')) {
    for (const [name, checks] of entries) {
      const failing = Object.entries(checks)
        .filter(([, ok]) => !ok)
        .map(([id]) => id)
      if (failing.length) console.log(`  ${name}: ${score(checks)}/${total}, failing ${failing.join(' ')}`)
    }
  }
}

const baselinePath = 'evaluation/depth-baseline.json'
if (process.argv.includes('--update')) {
  writeFileSync(
    join(root, baselinePath),
    `${JSON.stringify({ $comment: 'Written by scripts/audit-depth.mjs --update. Scores may only go up.', standardVersion: '1.0.0', scores }, null, 2)}\n`,
  )
  console.log(`\nBaseline written to ${baselinePath}.`)
  process.exit(0)
}
if (!exists(baselinePath)) {
  console.error(`\n${baselinePath} is missing; run with --update to create it.`)
  process.exit(1)
}
const baseline = json(baselinePath).scores
const regressions = []
for (const [kind, assets] of Object.entries(scores)) {
  for (const [name, value] of Object.entries(assets)) {
    const before = baseline[kind]?.[name]
    if (before !== undefined && value < before) regressions.push(`${kind}/${name}: ${value} < baseline ${before}`)
  }
}
if (regressions.length) {
  console.error(`\nDepth regressed:\n- ${regressions.join('\n- ')}`)
  process.exit(1)
}
const raised = Object.entries(scores).some(([kind, assets]) =>
  Object.entries(assets).some(([name, value]) => value > (baseline[kind]?.[name] ?? -1)),
)
console.log(raised ? '\nNo regressions. Some scores rose: run with --update to raise the baseline.' : '\nNo regressions.')
