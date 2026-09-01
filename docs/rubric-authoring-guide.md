# Rubric Authoring Guide

Guide version: 1.0.0

A one-page checklist for authoring an evaluation rubric under `evaluation/`. It distils the conventions in `docs/coverage-backlog-closure-plan.md` section 1.1 into the steps to follow per file. The plan section is the authority; if the two disagree, the plan wins and this guide is corrected.

## Before you write

1. Find the artefact in `docs/coverage-backlog-manifest.md`. Use its canonical slug, owning agent, and phase. Do not invent a slug; the manifest assigns it once and downstream skills reference it.
2. Look up the BABOK section in the catalogue (`BABOK_v3_Deliverables_Artefacts_Documents_Catalogue.md`), and read the real wording in the page-indexed guide (search source `BABOK v3 2015 page-indexed`). Cite by section; never copy guide prose.
3. Read one shipped rubric (`evaluation/brd-rubric.md`, `evaluation/business-case-rubric.md`, `evaluation/prd-rubric.md`) so the new file matches tone and shape exactly.

## File structure (in order)

1. `# {Artefact Name} Evaluation Rubric`
2. One or two sentences: what it judges, which skill uses it, which template or artefact it applies to, and the BABOK section it traces to.
3. `## Scoring scale`: score each dimension 0 to 3: 0 absent, 1 weak, 2 adequate, 3 strong.
4. `## Dimensions`: a table with columns `#`, `Dimension`, `What good looks like`. Seven to nine dimensions, each a distinct testable quality phrased as what strong looks like.
5. `## Result`: verdict bands against a maximum of three times the dimension count. For nine dimensions the maximum is 27, pass at 22 or higher with no dimension at 0, pass with changes at 16 to 21 or a single quick-to-fix dimension at 1, fail below 16 or any dimension at 0. For a different dimension count, scale the bands proportionally and state the maximum.
6. A closing sentence routing material issues back to the owning skill by name.
7. `## Findings template`: a table with columns `Dimension`, `Score`, `Evidence`, `Gap and fix`, and one empty row.

## Quality bar

The starter criterion copied from the register is a seed, not a dimension set. Refine it into seven to nine dimensions that express full BABOK verify quality for this artefact, drawing from the characteristics that fit: atomic, complete, consistent, concise, feasible, unambiguous, testable, prioritised, understandable. A rubric that pastes the one-line starter into a single dimension does not pass.

Specialise the dimensions to the artefact. A process model scores notation validity, start and end events, and no dangling paths. A set of transition requirements scores the current-to-future bridge and the retirement point. Do not reuse a generic nine-row table across unlike artefacts.

## Naming, house style, validation

- File path: `evaluation/{slug}-rubric.md`, slug taken verbatim from the manifest.
- No em dashes anywhere. No spaced hyphen, doubled hyphen, or en dash standing in for one. Plain hyphens in numeric ranges. Recast with a period, comma, colon, parentheses, or a rewrite.
- Run the `natural-prose-editor` pass on the prose before commit.
- Run `scripts/validate-assets.mjs`; a single em dash fails it.
- Update the artefact's row in `docs/coverage-backlog-manifest.md` to `shipped`.
