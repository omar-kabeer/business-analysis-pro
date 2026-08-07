#!/usr/bin/env node
/**
 * Builds the generated tables in sources/index.md from sources/manifest.json,
 * and validates the library against the naming convention.
 *
 * Prose in index.md outside the <!-- generated:NAME --> ... <!-- /generated:NAME -->
 * markers is hand-written and is never touched.
 *
 * Usage: npm run sources:index         (write)
 *        npm run sources:check         (validate only, non-zero exit on error)
 */

import { readFileSync, writeFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { join, dirname, basename, extname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SOURCES = join(ROOT, 'sources');
const MANIFEST = join(SOURCES, 'manifest.json');
const INDEX = join(SOURCES, 'index.md');
const SKILLS = join(ROOT, 'skills');

const CHECK_ONLY = process.argv.includes('--check');
const STEM_RULE = /^[a-z0-9][a-z0-9.-]*$/;

/** Files that live in sources/ but are not sources. */
const NON_SOURCE_FILES = new Set([
  'manifest.json',
  'index.md',
  'naming-convention.md',
  'standards-mapping.md',
]);

const LICENCE_LABEL = {
  open: 'Open licence, redistributable',
  'free-to-obtain': 'Free to obtain, no redistribution',
  'licensed-copy': 'Licensed copy, no redistribution',
  restricted: 'Purchased or restricted, no redistribution',
  unknown: 'Unknown',
};

const errors = [];
const warnings = [];

/* ---------------------------------------------------------------- load */

if (!existsSync(MANIFEST)) {
  console.error(`No manifest at ${relative(ROOT, MANIFEST)}`);
  process.exit(1);
}

const manifest = JSON.parse(readFileSync(MANIFEST, 'utf8'));
const sources = manifest.sources ?? [];
const byId = new Map(sources.map((s) => [s.id, s]));

if (byId.size !== sources.length) {
  const seen = new Set();
  for (const s of sources) {
    if (seen.has(s.id)) errors.push(`Duplicate manifest id: ${s.id}`);
    seen.add(s.id);
  }
}

/* ------------------------------------------------------------- walk fs */

/** Every file under sources/, relative to sources/, excluding the non-source files. */
function walk(dir, acc = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    const rel = relative(SOURCES, full).split('\\').join('/');
    if (entry.isDirectory()) walk(full, acc);
    // conformance/ holds hand-written conformance checks derived from the sources,
    // not source documents, so it is not subject to the source path and stem rules.
    else if (!NON_SOURCE_FILES.has(rel) && !rel.startsWith('conformance/')) acc.push(rel);
  }
  return acc;
}

const onDisk = existsSync(SOURCES) ? walk(SOURCES) : [];

/** Manifest paths, normalised. A trailing slash marks a directory-backed set. */
const manifestPaths = new Map();
for (const s of sources) {
  const p = (s.path ?? '').split('\\').join('/');
  if (!p) {
    errors.push(`${s.id}: no path`);
    continue;
  }
  manifestPaths.set(p, s);
  const abs = join(SOURCES, p);
  if (!existsSync(abs)) {
    errors.push(`${s.id}: path does not exist, ${p}`);
    continue;
  }
  if (p.endsWith('/') !== statSync(abs).isDirectory()) {
    errors.push(`${s.id}: directory paths must end with a slash, ${p}`);
  }
}

/** Is this on-disk file covered by a manifest record, directly or via a set? */
function coveredBy(rel) {
  if (manifestPaths.has(rel)) return manifestPaths.get(rel);
  for (const [p, s] of manifestPaths) {
    if (p.endsWith('/') && rel.startsWith(p)) return s;
  }
  return null;
}

for (const rel of onDisk) {
  const owner = coveredBy(rel);
  if (!owner) {
    errors.push(`Unregistered file, add a manifest record: ${rel}`);
    continue;
  }
  // Stem rule applies to every file in the library.
  const stem = basename(rel, extname(rel));
  if (!STEM_RULE.test(stem)) {
    errors.push(`Filename breaks the stem rule, see naming-convention.md: ${rel}`);
  }
  // A single-file record must have id === stem, so citations survive a move.
  if (manifestPaths.get(rel) && owner.id !== stem) {
    errors.push(`Id must equal the filename stem: id "${owner.id}" but file "${rel}"`);
  }
}

/* ----------------------------------------------------------- skill map */

const skillNames = existsSync(SKILLS)
  ? readdirSync(SKILLS, { withFileTypes: true })
      .filter((d) => d.isDirectory() && !d.name.startsWith('.'))
      .map((d) => d.name)
  : [];

/** Skills the program upgrades. skill-upgrader drives it and is not a target. */
const targets = skillNames.filter((n) => n !== 'skill-upgrader').sort();
const bySkill = new Map(targets.map((n) => [n, []]));

for (const s of sources) {
  for (const skill of s.skills ?? []) {
    if (skill === '*') continue; // BABOK anchors everything; not counted as curation
    if (!bySkill.has(skill)) {
      errors.push(`${s.id}: unknown skill "${skill}"`);
      continue;
    }
    bySkill.get(skill).push(s);
  }
}

/* ------------------------------------------------------------- reports */

const unverified = sources.filter((s) => !s.identityVerified);
const normative = sources.filter((s) => s.authority === 'normative');
const artefacts = [...new Set(normative.flatMap((s) => s.constrains ?? []))].filter((a) => a !== '*').sort();
const provisional = sources.filter((s) => /-[a-z]$/.test(s.id) && s.notes?.includes('Provisional'));
const empty = targets.filter((n) => bySkill.get(n).length === 0);
const noNorm = targets.filter((n) => !bySkill.get(n).some((x) => x.authority === 'normative'));

/* --------------------------------------------------------- table build */

const esc = (v) => String(v ?? '').replace(/\|/g, '\\|');
const AUTHORITY_LABEL = {
  normative: 'Normative, outputs must pass',
  supporting: 'Supporting, informs but does not gate',
  illustrative: 'Illustrative only',
};

function tierTable(tier) {
  const rows = sources
    .filter((s) => s.tier === tier)
    .sort((a, b) => a.id.localeCompare(b.id))
    .map((s) => {
      const version = s.version && s.version !== 'unrecorded' ? ` ${s.version}` : '';
      const pub = s.publisher && s.publisher !== 'unrecorded' ? ` (${s.publisher})` : '';
      const authority = AUTHORITY_LABEL[s.authority] ?? 'Unclassified';
      const gates = (s.constrains ?? []).filter((a) => a !== '*').join(', ') || 'nothing';
      const flag = s.identityVerified ? '' : ' Identity unconfirmed.';
      return `| \`${esc(s.id)}\` | ${esc(s.title + version + pub)} | ${esc(authority + flag)} | ${esc(gates)} | ${esc((s.skills ?? []).join(', ') || 'none')} |`;
    });
  return [
    '| Id | Source | Authority | Gates | Skills served |',
    '| --- | --- | --- | --- | --- |',
    ...rows,
  ].join('\n');
}

function skillTable() {
  const rows = targets.map((name) => {
    const items = bySkill.get(name);
    const norm = items.filter((s) => s.authority === 'normative');
    const ids = items.map((s) => `\`${s.id}\``).join(', ') || 'none';
    return `| ${esc(name)} | ${norm.length} | ${items.length - norm.length} | ${ids} |`;
  });
  return [
    '| Skill | Normative standards | Supporting material | Ids |',
    '| --- | --- | --- | --- |',
    ...rows,
  ].join('\n');
}

/** Artefact types gated by at least one normative standard. */
function artefactTable() {
  const rows = artefacts.map((a) => {
    const gov = normative.filter((s) => (s.constrains ?? []).includes(a));
    return `| ${esc(a)} | ${gov.map((s) => `\`${s.id}\``).join(', ')} |`;
  });
  return ['| Artefact type | Governed by |', '| --- | --- |', ...rows].join('\n');
}

function summary() {
  const lines = [
    `Generated by \`scripts/build-source-index.mjs\`. Do not hand-edit the generated blocks.`,
    ``,
    `| Measure | Count |`,
    `| --- | --- |`,
    `| Sources registered | ${sources.length} |`,
    `| Files on disk | ${onDisk.length} |`,
    `| Normative standards, outputs must pass | ${normative.length} |`,
    `| Supporting and illustrative material | ${sources.length - normative.length} |`,
    `| Artefact types under a conformance gate | ${artefacts.length} |`,
    `| Skills under upgrade | ${targets.length} |`,
    `| Skills with no normative standard | ${noNorm.length} |`,
    `| Sources whose identity is unconfirmed | ${unverified.length} |`,
  ];
  if (noNorm.length) {
    lines.push(
      '',
      `No normative standard governs these skills, so their outputs are gated by BABOK and our own research only: ${noNorm.join(', ')}.`,
    );
  }
  if (unverified.length) {
    lines.push(
      '',
      `Identity unconfirmed, do not treat as an authority until checked: ${unverified.map((s) => `\`${s.id}\``).join(', ')}.`,
    );
  }
  if (provisional.length) {
    lines.push('', `Provisional ids outstanding: ${provisional.map((s) => `\`${s.id}\``).join(', ')}.`);
  }
  return lines.join('\n');
}

/* --------------------------------------------------------------- write */

const BLOCKS = {
  summary: summary(),
  standards: tierTable('standard'),
  practice: tierTable('practice'),
  skills: skillTable(),
  artefacts: artefactTable(),
};

if (errors.length) {
  console.error('Source library validation failed:\n');
  for (const e of errors) console.error(`  ${e}`);
  console.error(`\n${errors.length} error(s). Index not written.`);
  process.exit(1);
}

for (const w of warnings) console.warn(`  warning: ${w}`);

if (CHECK_ONLY) {
  console.log(`Source library valid. ${sources.length} sources, ${onDisk.length} files.`);
  process.exit(0);
}

let index = readFileSync(INDEX, 'utf8');
for (const [name, body] of Object.entries(BLOCKS)) {
  const re = new RegExp(
    `(<!-- generated:${name} -->)[\\s\\S]*?(<!-- /generated:${name} -->)`,
    'g',
  );
  if (!re.test(index)) {
    errors.push(`index.md has no <!-- generated:${name} --> block`);
    continue;
  }
  index = index.replace(re, `$1\n\n${body}\n\n$2`);
}

if (errors.length) {
  console.error('Source library validation failed:\n');
  for (const e of errors) console.error(`  ${e}`);
  process.exit(1);
}

writeFileSync(INDEX, index);
console.log(
  `Wrote ${relative(ROOT, INDEX)}: ${sources.length} sources, ${targets.length} skills, ` +
    `${empty.length} unsourced, ${unverified.length} unverified.`,
);
