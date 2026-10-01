# World-Class Content Plan

Plan version: 1.0.0
Plan status: Phases 0 to 2 shipped; Phase 3 in progress (30 of 43 skills at the bar on 2026-09-30, after #34). The app re-pins to each OS merge; see kryterea-app #216.
Date: 2026-09-30
Scope: Business Analysis OS (this repository) and the Kryterea app that consumes it (`kryterea/kryterea-app`)

## Purpose

This plan takes the OS from complete coverage to world-class depth, and brings every open item from the September 2026 review into one place. The review found that every artefact now has a template, a rubric, and a quality profile, but that most of them are shallow. No template meets the repository's own artefact standard, only 13 of the 77 rubrics in use have score anchors, and 35 of 43 skills have no method playbook. It also asks for a new capability: templates whose table of contents adapts to the use case and the user's preferences.

## Baseline (measured 2026-09-30 on `main` at 864b4a2)

| Asset | Measure | Baseline |
| --- | --- | --- |
| Playbooks | Planned output slots graded by a profile rubric | 600 of 600 (92 playbooks, 13 shipped) |
| Playbooks | Shipped optional slots still marked `no_applicable_check` | 4 |
| Templates | Meet all seven CLAUDE.md artefact elements | 0 of 80 |
| Templates | Carry scope / inputs / outputs / assumptions / risks / review criteria | 17 / 29 / 2 / 25 / 33 / 45 of 80 |
| Templates | Carry guidance or a filled example | 17 / 12 of 80 |
| Templates | Median length | 288 words (thinnest 129) |
| Templates | Machine-readable table of contents | 0 of 80 |
| Rubrics | In use with score anchors / failure modes / calibration set | 13 / 13 / 6 of 77 |
| Rubrics | Cross-named pairings written for the BABOK artefact rather than the template they grade | 20 of 24 |
| Skills | Method playbook | 8 of 43 |
| Skills | Curated sources in `sources/manifest.json` | 8 skills have none |
| Skills | Reference files | 4 skills have none |
| Examples | Worked end-to-end examples | 2 |

## The world-class bar

A standard that is not measured drifts, so Phase 1 writes each bar below into `scripts/audit-depth.mjs`. That script checks the bar and ratchets a baseline, so depth can only go up.

**Template.** Every template has the seven CLAUDE.md elements: purpose, scope, inputs, outputs, assumptions, risks, and review criteria. It also has how-to guidance for each section, at least one filled example row per table, stable IDs for traceable items, its BABOK anchor, and a table-of-contents manifest (below). Section guidance says what good looks like, not only what to fill in.

**Rubric.** Every rubric is written for the template it grades and names it. It has seven to nine dimensions specific to the artefact, anchors for scores 0 and 3 on every dimension, a common failure modes section, and a list of blocking dimensions: those that fail the gate at 0 whatever the total. It maps each dimension to the template sections that evidence it, so grading can mark a dimension not applicable when a tailored table of contents leaves its section out. It has a calibration set with confirmed scores.

**Skill.** Every skill has a method playbook grounded in its BABOK tasks and techniques, at least three curated sources in the manifest, a worked example, and explicit links to the templates and rubrics it owns. It also names its reviewer agents through the quality profiles. Skills that own many register rows get more depth, in proportion.

## New capability: dynamic table of contents

### What it is

Each template becomes a superset: every section a practitioner could need for that artefact, across delivery approaches, formality levels, audiences, and domains. A table-of-contents manifest says which sections apply when. The app, or a person using the plugin, resolves the manifest against the use case and the user's preferences to produce a tailored template. The tailored template includes only the sections that matter, keeps the mandatory ones, and still grades fairly.

### Manifest format

One sidecar file per template: `templates/<type>.toc.json`. Keeping it beside the template, rather than in frontmatter, means a tailoring change does not rewrite the template's bytes. Each section entry carries:

| Field | Meaning |
| --- | --- |
| `id` | Stable section ID. The manifest also carries the exact `heading` text, so templates need no anchor syntax |
| `title`, `purpose` | Heading and one line on why the section exists |
| `tier` | `core` (always included), `standard` (included by default), or `extended` (included only when a condition or preference asks for it) |
| `when` | Conditions that include the section: approach (`predictive`, `adaptive`, `hybrid`), formality (`light`, `standard`, `formal`), audience (`executive`, `delivery`, `regulator`, `customer`), risk or size (`low`, `medium`, `high`), regulated (`true`), domain pack (for example `payments-iso20022`), BABOK perspective |
| `requires` | Other section IDs this one depends on |
| `evidences` | Rubric dimension numbers this section provides evidence for |
| `artefactStandard` | Which CLAUDE.md element it satisfies, when it satisfies one |

### Resolution rules

1. Core sections are always included. Together they must satisfy all seven CLAUDE.md elements, so a tailored template can never drop below the standard.
2. Standard sections are included unless the user's preferences turn them off.
3. Extended sections are included when a `when` condition matches the use case (from the playbook, the project profile, or the approach adviser) or when the user turns them on.
4. `requires` is applied transitively, so an included section brings the sections it depends on.
5. Grading marks as not applicable any rubric dimension whose only evidencing sections were left out. The maximum score and the bands scale to the applicable dimensions. Blocking dimensions must always map to a core section, so tailoring can never switch a blocking check off.
6. The chosen section set is recorded with the output (section IDs plus the manifest hash), so a re-run reproduces it and provenance shows what was tailored away.

### Validation

`scripts/validate-assets.mjs` fails when:
- a manifest section's heading is not in the template, or a template heading has no manifest entry;
- core sections miss a CLAUDE.md element;
- a rubric dimension maps to no section;
- a blocking dimension maps only to non-core sections;
- a `requires` cycle exists.

A worked tailoring example ships per template family.

### App side

- **Resolver:** `packages/capabilities` resolves the manifest from the registry by hash, next to the template.
- **Tailoring:** a pure function `tailorTemplate(manifest, context, preferences)` returns the section set.
- **Generation:** the generator renders only those sections, with a generated table of contents.
- **Grading:** the quality gate receives the applicable dimensions.
- **Preferences:** preferences (depth: brief, standard, or comprehensive; audience; explicit section toggles) are stored per user and per project, and editable in the UI before generation.
- **Records:** the chosen set is recorded in output provenance.

An ADR records the decision.

## Workstreams and phases

Each phase lands as its own pull request per repository. After each OS merge, Kryterea re-pins to the merge commit, rebuilds its registry, and regenerates any playbook pins whose template or rubric bytes changed.

### Phase 0: Ship-safety carry-overs (small, first)

| # | Task | Repo | Done when |
| --- | --- | --- | --- |
| 0.1 | Turn on rubric grading for the 4 optional slots (`decision-log`, `meeting-notes`, `opportunity-solution-tree`) by regenerating those playbooks from the app's `starting-specifications.json` | both | No shipped slot is `no_applicable_check` where a rubric exists |
| 0.2 | Refresh the app's `tasks/ba-playbooks-agent-system/quality-coverage` audit and mark the 13 new rubrics shipped in `docs/coverage-backlog-manifest.md` | both | Both documents match the profiles |
| 0.3 | Confirm `check` is green on kryterea-app `main` after the ADR-0009 merge, and apply migration 0137 in each environment | app | Green run recorded; migration applied |
| 0.4 | Rebuild `registry/release.json` and refresh `os-snapshot/` (both stale since before this work) | app | Release manifest and snapshot match the pinned OS |
| 0.5 | Hand the red `main` baseline to its owners: the Cloudflare Workers build (log `341bd056`) and the 11 integration failures in route authorization, usage ceilings, turn cancellation, subject export, and the verifier pool | app | Tracked with owners in `tasks/todo.md`; not blocking content work |

### Phase 1: Depth standard and audit gate

| # | Task | Repo | Done when |
| --- | --- | --- | --- |
| 1.1 | Write `docs/depth-standard.md` with the bars above | OS | Reviewed and merged |
| 1.2 | Add `scripts/audit-depth.mjs`: scores every template, rubric, and skill against the bar and writes `evaluation/depth-baseline.json` | OS | Runs in CI; fails when any score drops below baseline |
| 1.3 | Define the table-of-contents manifest schema (`schemas/template-toc.json`) and its validator rules, with the resolution rules above | OS | Schema and validator merged with one pilot manifest |
| 1.4 | Extend the rubric format with dimension-to-section mapping and blocking dimensions; update `docs/rubric-authoring-guide.md` | OS | Guide and validator updated |

### Phase 2: First wave of template and rubric pairs (highest traffic)

The 32 artefact types used by the 13 shipped playbooks, most-used first: `experiment-log`, `product-vision-brief`, `nfr-specification`, `prototype-brief`, `stakeholder-register`, `user-story-epic`, `interview-guide`, `solution-scope`, `uat-plan`, `business-objectives`, `risk-register`, `current-state-assessment`, `elicitation-activity-plan`, `journey-map`, `prd`, `prioritization-matrix`, `use-case-specification`, `brd`, `business-case`, `decision-log`, `estimation-basis`, `frd`, `meeting-notes`, `opportunity-solution-tree`, `persona`, `process-model`, `product-roadmap`, `release-plan-and-notes`, `requirements-architecture`, `solution-performance-measures`, `srs`, `workshop-plan`.

For each type, in batches of about eight:

1. Rewrite the template as a superset that meets the template bar, with its table-of-contents manifest.
2. Write or rewrite the rubric to the rubric bar, named for this template. This replaces the 20 cross-named pairings with rubrics written for the template, and keeps the BABOK-named rubrics for the BABOK artefacts themselves.
3. Update the quality profile.
4. Add a calibration set with provisional scores.
5. Re-pin playbooks.

Done when every first-wave type passes the audit gate.

### Phase 3: Skill depth

| # | Task | Repo | Done when |
| --- | --- | --- | --- |
| 3.1 | Method playbooks for the ten weakest skills by reference depth per register row owned: architecture, process-modelling, product-owner, governance, data-analysis, communication, market-research, business-intelligence, data-modelling, information-management | OS | Each passes the skill bar except for sources |
| 3.2 | Reference files for deliverable-packager, reference-standards, technical-writer, and proposal-writer | OS | No skill without references |
| 3.3 | Curate at least three sources for each of the eight source-less skills and record them in `sources/manifest.json` with conformance notes | OS | No skill without sources |
| 3.4 | Run the skill upgrader (`docs/skill-upgrade-program.md`) across all methodology skills in layer batches, the eight already deepened first | OS | Every skill passes the skill bar |

### Phase 4: Remaining templates and rubrics

Take the other templates, and their rubrics, to the bar with table-of-contents manifests, family by family: strategy, planning, requirements life cycle states, solution evaluation, product, and procurement. Done when all 80 pass the audit gate.

### Phase 5: Dynamic table of contents in Kryterea

| # | Task | Repo | Done when |
| --- | --- | --- | --- |
| 5.1 | ADR for tailored templates; resolve manifests by hash; `tailorTemplate` with tests covering every resolution rule | app | Merged with unit tests |
| 5.2 | Generation renders the tailored section set with a generated table of contents; grading scales to applicable dimensions | app | A tailored and an untailored run grade consistently |
| 5.3 | User and project preferences (depth, audience, toggles) with a pre-generation section picker in the UI | app | Preferences persist and change the output |
| 5.4 | Record the chosen section set in provenance | app | Visible on the output record |

### Phase 6: Quality evidence

| # | Task | Repo | Done when |
| --- | --- | --- | --- |
| 6.1 | A BA reviewer confirms the calibration scores; sets move from `provisional` to `confirmed` | OS | All sets confirmed |
| 6.2 | Calibration sets for every type any playbook grades | OS | 74 of 74 planned types calibrated |
| 6.3 | Run `scripts/eval/rubric-calibration.ts --confirm` (owner approves spend, about $0.65 per 18 references) and fix any rubric below the bar | app | Every rubric meets the 90 percent agreement bar |
| 6.4 | Run the `strategy-analyst` agent eval and raise its rollout from 0 when it meets the bar | app | Rollout decision recorded |

### Phase 7: Agents, knowledge, and tools

| # | Task | Repo | Done when |
| --- | --- | --- | --- |
| 7.1 | Perspective reviewer agents for business intelligence, business process management, and business architecture (61 register rows), bound at rollout 0 | both | Agents validated and bound |
| 7.2 | Generate `agent_binding` rows from the profiles' reviewers instead of hand-written migrations (ADR-0009 follow-up) | app | One source of truth for reviewers |
| 7.3 | Playbook additions read the live release's profiles rather than the build-time catalogue (ADR-0009 follow-up) | app | `ponytail:` note removed |
| 7.4 | Embed the 19 conformance notes into the shared knowledge base so semantic retrieval finds them | app | Retrieval returns them for a standards query |
| 7.5 | Decide which of the 110 tool-use register rows get real MCP or tool integrations, and build the first ones | both | Decision recorded; first integrations shipped |

### Phase 8: Examples and domain packs

| # | Task | Repo | Done when |
| --- | --- | --- | --- |
| 8.1 | Worked end-to-end examples for Strategy Analysis and Solution Evaluation, then one per remaining knowledge area, each showing a tailored table of contents | OS | One example per knowledge area |
| 8.2 | New domain packs as client work requires them, each adding table-of-contents conditions for its domain | OS | Driven by demand |

## Sequencing and dependencies

Phase 0 goes first because it is small and removes known inaccuracies. Phase 1 must land before Phases 2 and 4, so every upgraded template and rubric is written to one measured standard, including its manifest. Phase 5 can start once the manifest schema (1.3) and one pilot manifest exist. It does not need Phase 2 finished. Phase 6.1 and 6.3 need a human reviewer and an approved spend respectively. Phase 3 can run alongside Phase 2 because it touches different files. Every OS change to template or rubric bytes triggers a playbook re-pin in Kryterea, so batches should be sized to keep re-pins reviewable.

## Decisions needed

- **Depth tiers:** approve the `brief`, `standard`, and `comprehensive` user presets, and whether `brief` may drop standard sections that carry rubric evidence. The recommendation is yes, with those dimensions marked not applicable.
- **Calibration reviewer:** name the BA reviewer who confirms calibration scores (6.1).
- **Calibration spend:** approve the calibration eval spend (6.3) and the `strategy-analyst` agent eval (6.4).
- **Table-of-contents location:** confirm the sidecar manifest format over frontmatter. The recommendation is the sidecar, so tailoring changes never alter template bytes or playbook pins.
