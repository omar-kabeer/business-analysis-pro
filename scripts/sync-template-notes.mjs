#!/usr/bin/env node
// Writes the usage note under the title of every template that has a manifest
// (templates/<type>.toc.json). Generators and graders may see the template text
// without its manifest, so the note carries the two rules they must not miss:
// examples are illustrations, and extended sections apply only on a condition.
// See docs/depth-standard.md. Run after changing a manifest; the validator fails
// when a note is missing or stale.
import { readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

export const NOTE_PREFIX = '> **How to use this template.**'

const PERSPECTIVES = {
  agile: 'Agile',
  'business-intelligence': 'Business Intelligence',
  'information-technology': 'Information Technology',
  'business-architecture': 'Business Architecture',
  'business-process-management': 'Business Process Management',
}
const AUDIENCES = {
  executive: 'executive readers',
  delivery: 'delivery teams',
  regulator: 'regulators',
  customer: 'customers',
}

const either = (values) =>
  values.length === 1 ? values[0] : `${values.slice(0, -1).join(', ')} or ${values.at(-1)}`

function describe(when) {
  const parts = []
  if (when.approach) parts.push(`${either(when.approach)} approach`)
  if (when.formality) parts.push(`${either(when.formality)} governance`)
  if (when.audience) parts.push(`written for ${either(when.audience.map((a) => AUDIENCES[a] ?? a))}`)
  if (when.risk) parts.push(`${either(when.risk)} risk`)
  if (when.regulated) parts.push('regulated work')
  if (when.domainPack) parts.push(`the ${either(when.domainPack)} domain pack`)
  if (when.perspective) {
    parts.push(`the ${either(when.perspective.map((p) => PERSPECTIVES[p] ?? p))} perspective`)
  }
  return parts.join(', or ')
}

export function noteFor(toc, type) {
  const extended = toc.sections.filter((section) => section.tier === 'extended')
  const conditional = extended.length
    ? ` Include these sections only when their condition applies or the user asks for them: ${extended
        .map((section) => `${section.heading} (${describe(section.when ?? {})})`)
        .join('; ')}.`
    : ''
  return (
    `${NOTE_PREFIX} Filled rows and "Example" lines illustrate one scenario so the expected depth is clear. ` +
    'Replace them with the facts of the work at hand: never carry example names, figures, or IDs into a real document, and say plainly when a fact is not yet known. ' +
    `Include every other section by default, and leave one out only when the user asks.${conditional} ` +
    `The full rules are in \`templates/${type}.toc.json\`.`
  )
}

// Returns the template text with its note inserted or replaced under the title.
export function withNote(text, note) {
  const lines = text.split('\n')
  const title = lines.findIndex((line) => /^#\s+/.test(line))
  if (title < 0) throw new Error('template has no title')
  let rest = lines.slice(title + 1)
  while (rest.length && rest[0].trim() === '') rest = rest.slice(1)
  if (rest[0]?.startsWith(NOTE_PREFIX)) {
    rest = rest.slice(1)
    while (rest.length && rest[0].trim() === '') rest = rest.slice(1)
  }
  return [...lines.slice(0, title + 1), '', note, '', ...rest].join('\n')
}

function main() {
  const root = join(fileURLToPath(new URL('.', import.meta.url)), '..')
  const dir = join(root, 'templates')
  let changed = 0
  for (const file of readdirSync(dir).filter((name) => name.endsWith('.toc.json'))) {
    const type = file.replace(/\.toc\.json$/, '')
    const toc = JSON.parse(readFileSync(join(dir, file), 'utf8'))
    const path = join(dir, `${type}.md`)
    const text = readFileSync(path, 'utf8')
    const next = withNote(text, noteFor(toc, type))
    if (next !== text) {
      writeFileSync(path, next)
      changed += 1
    }
  }
  console.log(`Template notes: ${changed} updated.`)
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) main()
