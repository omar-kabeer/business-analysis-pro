# Coverage Backlog Closure Plan

Plan version: 1.1.0
Plan status: Phase 6 in progress (6a-6c: 30 KA11 rubrics)
Source of truth for scope: [`COVERAGE_BACKLOG.md`](../COVERAGE_BACKLOG.md) (generated 2026-09-01 from `BABOK_v3_Artefacts_Register.xlsx`)
Authoring reference: [`BABOK_v3_Deliverables_Artefacts_Documents_Catalogue.md`](../BABOK_v3_Deliverables_Artefacts_Documents_Catalogue.md)
Primary source (copyrighted, consult sparingly): `sources/babok/babok-3.0-2015.pdf`
Owner: BA OS content track (separate release track from Kryterea app PRs)

## Purpose

Close the coverage gaps recorded in `COVERAGE_BACKLOG.md` by authoring the missing declarative OS content: evaluation rubrics, output templates, and skill bindings. This document is the standing plan for that work. It is written to be executed in sequenced phases, to survive regeneration of the backlog, and to be extended when the register grows or the format evolves.

This plan authors versioned OS data only. It does not touch app or runtime code, and it does not add any artefact, framework, rubric, or scope that is not already listed in `COVERAGE_BACKLOG.md`. The one true agent-ownership gap (the six KA5 requirements-lifecycle outputs) is an app-design change handled in the ecosystem seam spec, so it is out of scope here; the rubrics and templates for those outputs are still authored in this repo.

## Scope at a glance

The backlog has three sections. This plan closes all three.

| Section | What it is | Volume in the backlog | Deliverable in this repo |
| --- | --- | --- | --- |
| A. Rubrics | Rubric-able artefacts with no rubric file | 217 register rows across 13 knowledge-area groups | Evaluation rubric files under `evaluation/` |
| B. Templates | Producible outputs with no OS template | 25 artefacts | Template files under `templates/` |
| C. Skills | Register skill refs absent from compiled capabilities | 18 rows, 9 distinct refs | 2 authored capabilities plus 7 external plugin bindings |

Five rubric files exist today (`brd`, `business-case`, `discovery`, `prd`, `product-brief`) and roughly 56 templates exist. Everything below is additive.

## How to read this plan

Sections in order: the conventions every file must follow, the de-duplication rule that turns 217 rows into a smaller set of canonical files, the phase-by-phase sequence, the concrete first batch, the Section C skill decisions, the definition of done, and the upgrade and regeneration procedures. The tracking ledger at the end is updated as batches land, so this file doubles as the live status board.

---

## Source inputs and how the plan uses them

Four source files sit behind this plan, in a hierarchy from primary source to working scope list. Each has a distinct job, and the plan factors all four.

`sources/babok/babok-3.0-2015.pdf` is the primary source: the IIBA guide itself, copyrighted. The catalogue is its verified extraction, so the catalogue is the working proxy for day-to-day authoring and the PDF is consulted sparingly. Its role is definition of record and tiebreaker: open it, by page range, only when the catalogue's paraphrase is too thin to write a precise rubric dimension or template section, or to confirm a BABOK section citation. Copyright guardrail: never reproduce guide prose into a rubric or template. Rubrics and templates state what good looks like in our own words and cite the BABOK section by number. This matches the catalogue's own disclaimer, which paraphrases the source and directs readers to the guide for full definitions, and it matches the house editorial standard.

`BABOK_v3_Artefacts_Register.xlsx` is the machine source. It is the join that `parse_register.py` turns into `COVERAGE_BACKLOG.md`, and its column N supplies the starter pass/fail criteria that seed each rubric. It is the authority on scope and on what regenerates.

`COVERAGE_BACKLOG.md` is the working scope list, derived from the register. It is the single source of truth for what this plan closes. Nothing is authored that is not in it.

`BABOK_v3_Deliverables_Artefacts_Documents_Catalogue.md` is the human-readable BABOK companion, a line-by-line extraction of every deliverable, artefact, and document across the guide's 514 pages, verified over five passes plus an Appendix B cross-check. The plan uses it three ways. First, as the de-duplication authority: its Section 3 master list (34 distinct core artefacts) and its named-form, technique, and perspective cross-references show which backlog rows are the same concept under different lenses, which is exactly what the canonical manifest in section 2 resolves. Second, as the BABOK-citation lookup: its task-to-output-to-section mapping is where each rubric and template header gets the BABOK section it traces to, so authors cite rather than guess. Third, as a batch-ordering signal: its Appendix B technique-to-task frequency (for example Interviews in 21 tasks, Workshops in 19, Survey in 15, Risk Analysis in 14) is evidence for ordering batches within a phase toward the artefacts BABOK work touches most.

The register and the backlog bound scope. The catalogue and the guide inform authoring quality, dedup, and citation. Neither widens scope: an artefact defined in the guide or listed in the catalogue but not in the backlog stays out of scope until it enters the register and the backlog regenerates (section 7.4).

Making the guide searchable (reproducible). So authors can check wording against the real BABOK without paging a 514-page PDF by hand, extract the guide to text and index it by page. The extraction uses `pdftotext` (already present with Git for Windows; `pdftoppm` for page images needs an elevated `choco install poppler`). Steps: run `pdftotext sources/babok/babok-3.0-2015.pdf <scratch>/babok-full.txt`, split the text on form-feed page breaks, prepend a `## Page N` heading to each page and append the detected BABOK section number to the heading where one is found on the page, then index the result into the retrieval store as a page-indexed source. A page-level query then returns the exact section (for example a query for 7.2 Verify Requirements returns page 153 with the nine quality characteristics). This index is a local authoring aid, not a repo artefact, and it never licenses reproducing guide prose into OS content.

---

## 1. Conventions (single source of truth for format)

Every authored file matches the existing house format exactly. These rules are copied from the five existing rubrics and the existing templates so that any future author, human or agent, can produce a conforming file without re-deriving the format. When the format changes, change it here first, then roll it forward.

### 1.1 Rubric format

Modelled on [`evaluation/brd-rubric.md`](../evaluation/brd-rubric.md), [`evaluation/business-case-rubric.md`](../evaluation/business-case-rubric.md), and [`evaluation/prd-rubric.md`](../evaluation/prd-rubric.md).

A rubric file has this structure, in order:

1. `# {Artefact Name} Evaluation Rubric`
2. One or two sentences: what the rubric judges, which skill uses it, and which template or artefact it applies to. Where the artefact traces to a specific BABOK section, name it, as the business-case rubric does; take the section reference from the catalogue's task-to-output mapping rather than deriving it.
3. `## Scoring scale`, stating the 0 to 3 scale: 0 absent, 1 weak, 2 adequate, 3 strong.
4. `## Dimensions`, a table with columns `#`, `Dimension`, `What good looks like`. Seven to nine dimensions. Each dimension is one testable quality of the artefact, phrased as what strong looks like.
5. `## Result`, stating the verdict bands against a maximum equal to three times the dimension count. For nine dimensions the maximum is 27, with pass at 22 or higher and no dimension at 0, pass with changes at 16 to 21 or a single quick-to-fix dimension at 1, and fail below 16 or any dimension at 0. When the dimension count differs from nine, scale the bands proportionally and state the maximum explicitly.
6. A closing sentence routing material issues back to the owning skill by name.
7. `## Findings template`, a table with columns `Dimension`, `Score`, `Evidence`, `Gap and fix`, with one empty row.

Rubric quality bar: the starter pass/fail criteria copied from register column N are a starting point, not the finished dimension set. Each rubric is refined so the dimensions express full BABOK verify quality for that artefact. The verify characteristics to draw from are atomic, complete, consistent, concise, feasible, unambiguous, testable, prioritised, and understandable, applied as they fit the artefact. A rubric that simply pastes the register's one-line criterion into a single dimension does not meet the bar.

### 1.2 Template format

Modelled on [`templates/current-state-assessment.md`](../templates/current-state-assessment.md) and [`templates/artefact-register.md`](../templates/artefact-register.md).

A template file has this structure:

1. `# {Artefact Name}`
2. `## Purpose`, a short paragraph stating what the artefact is for and, where it maps to a BABOK task or output, naming it. Add the guidance to produce only as much detail as the change requires where that applies.
3. `## Document Control`, a two-column table with Initiative, the owning role, Version set to 1.0.0, Status set to Draft, and Last Updated. Match the role labels to the artefact (Business Analyst, Sponsor, Product Owner, and so on).
4. `## Inputs` where the artefact consumes upstream information, naming the inputs.
5. Numbered content sections (`## 1. ...`, `## 2. ...`) that carry the working structure of the artefact, using placeholder tables where the artefact is inherently tabular and prose guidance where it is narrative.
6. Cross-references to the matching rubric and to related templates where useful.

Templates require YAML frontmatter, unlike rubrics. Every template opens with a frontmatter block carrying `type: deliverable`, a `domain` matching the owning skill, `status: draft`, and a semantic `version` (for example 1.0.0), then the `# {Artefact Name}` heading. This is enforced: `scripts/validate-assets.mjs` fails any file under `templates/` that is missing `type`, `domain`, `status`, or a semantic `version`. Rubrics under `evaluation/` are not subject to this frontmatter check.

### 1.3 Naming and placement

Rubric files: `evaluation/{slug}-rubric.md`. Template files: `templates/{slug}.md`.

Slugs are lowercase, hyphenated, and content-descriptive, with no version in the filename, matching the artefact-register naming convention already documented in `templates/artefact-register.md`. The slug is assigned once in the manifest (section 2) and never changed after a file ships, because downstream skills reference it. Acronyms are spelled in the slug only where the acronym is the common name, for example `rfp`, `sla`, `wbs`, `erd`, `crud-matrix`.

### 1.4 House editorial style (non-negotiable)

Every file obeys `docs/methodology/editorial-style.md`. The rule that fails the build is the em dash ban: no em dash character anywhere, no spaced hyphen or doubled hyphen or en dash standing in for one, and plain hyphens inside numeric ranges. Prose sections run the `natural-prose-editor` pass before a batch is committed. `scripts/validate-assets.mjs` is the gate: a single em dash fails it, so the validator runs on every batch before commit.

---

## 2. The canonical artefact manifest (de-duplication backbone)

The backlog lists 217 register rows, but many rows name the same artefact concept under different knowledge areas or perspective lenses. Process model, acceptance criteria, personas, data dictionary, stakeholder analysis, risk register, use cases, and the reference-model and prototype families all recur. Authoring one rubric per row would create duplicate files that drift apart.

Rule: the rubric set is keyed by canonical artefact concept, not by register row. Where the same artefact appears under several knowledge areas or lenses, author one rubric file and reference it from each place. A perspective lens that genuinely changes the quality bar (for example a BI-specific data model versus a generic ERD) earns its own file; a lens that only relabels the same artefact does not.

Dedup authority: the catalogue is what settles whether two backlog rows are the same concept. Its Section 3 master list names the 34 distinct core artefacts, its Section 7 maps each named diagram or matrix form to the technique that produces it, and its technique and perspective sections show where one artefact recurs. When two rows resolve to the same catalogue entry, they map to one canonical slug. When the catalogue gives a lens its own definition and quality bar, the manifest gives it its own slug. The manifest records the catalogue reference for each canonical slug so the dedup decision is auditable.

Mechanism: Phase 0 builds a manifest that maps every register row to a canonical slug. The manifest is the authority that resolves duplicates, assigns owning agents, links templates, and stamps the phase each file belongs to. It lives at `docs/coverage-backlog-manifest.md` (or as a machine-readable sidecar if `parse_register.py` is extended to emit one) and has these columns:

| Column | Meaning |
| --- | --- |
| Register row | The artefact name as it appears in `COVERAGE_BACKLOG.md` |
| Canonical slug | The one slug this row maps to |
| Kind | rubric, template, or both |
| Owning agent | From the backlog's owning-agent column |
| Template link | The `templates/{slug}.md` this rubric evaluates, if any |
| Catalogue ref | The catalogue section and BABOK task or technique this row resolves to (the dedup and citation anchor) |
| Phase | Which phase authors it |
| Status | not-started, drafted, validated, shipped |

The distinct-file count is whatever the manifest yields after de-duplication, which is fewer than 217. The manifest, not this prose, is the count of record. Building it is the first deliverable, because every later batch is defined by querying it.

---

## 3. Phase sequence

Eight phases. Phase 0 lays the foundation. Phases 1 through 6 author rubrics and templates together, grouped so that each knowledge area's rubrics and its templates land in the same phase. Phase 7 resolves the skill bindings. The order runs from the artefacts the runtime produces most often toward the specialised and reference forms, matching the backlog's stated priority order.

Batch size: 5 to 8 canonical files per batch. A batch is the unit of authoring, validation, and commit. A phase is the unit of pull request.

### Phase 0: Foundations

Deliverables: the canonical manifest (section 2), this plan committed, and a one-page rubric authoring guide extracted from section 1.1 that batch authors follow. No rubric or template content yet.

Acceptance: every register row in Section A and Section B maps to exactly one canonical slug with an owning agent and a phase; no slug collides with an existing file unless it is a deliberate extension of one; the manifest validates as well-formed.

### Phase 1: Core BA framework (KA2, KA3, KA4)

The outputs produced on nearly every engagement. Rubrics here give immediate quality-gate coverage.

Rubrics: the six requirement classes (KA2), the six planning and monitoring outputs (KA3), and the nine elicitation and collaboration outputs (KA4).

Templates (7): Business Analysis Approach, Stakeholder Engagement Approach, Governance Approach, Information Management Approach, Business Analysis Performance Assessment, Elicitation Activity Plan, Business Analysis Information (communicated).

### Phase 2: Lifecycle and strategy (KA5, KA6)

Rubrics: the ten requirements-lifecycle states, the two packaging and representation forms, and the ten strategy-analysis outputs.

Templates (10): Designs (traced), Designs (maintained), Designs (prioritized), Designs Change Assessment, Requirements Change Assessment, Designs (approved), Business Objectives, Potential Value, Change Strategy, Solution Scope.

Note: the six lifecycle-governance templates carry the "GAP: lifecycle governance" owning agent in the backlog. The templates and rubrics are authored here as OS data. The agent that owns them at runtime is settled in the app design, not in this repo.

### Phase 3: Specification and procurement (KA7, KA8, Named Forms)

Batch 3a: the Named Forms rubrics (activity diagram through wireframe), de-duplicated against any concept already authored in an earlier phase.
Batch 3b: the RADD rubrics, the procurement and agreement rubrics, and the solution-evaluation rubric.

Templates (8): Requirements Architecture, Design Options, Solution Recommendation, Solution Performance Measures, Solution Performance Analysis, Solution Limitation, Enterprise Limitation, Recommended Actions.

### Phase 4: Reviews and assessments (KA9)

Rubrics for the analysis, assessment, review, and test artefacts: competitive and cost-benefit analysis, feasibility, gap and impact analysis, force-field and root-cause forms, the prototype family, inspection, peer review, walkthrough, UAT, checklists, requirements attributes and defects, and the readiness and operational assessments. De-duplicate the prototype and analysis concepts against Section C, which binds their build tooling.

Templates: none. KA9 artefacts are evaluative outputs or already have templates.

### Phase 5: Techniques (KA10)

Batch 5a: Visual Modeling-owned technique outputs (concept model, data model, DFD, decision model and matrix, process model, scope model, state model, SWOT, use case, business model canvas, capability map, organisational model, and the diagram forms).
Batch 5b: Synthesis and Drafting and Elicitation-owned technique outputs (data dictionary, estimates, backlog, financial analysis, glossary, interface specifications, metrics and KPIs, risk register, user story, vendor assessment, business rules catalogue, and the elicitation records).

Templates: none.

### Phase 6: Perspectives (KA11)

Batch 6a: Agile and Product perspective artefacts (epics, features, personas, product backlog, product roadmap, product vision, release plan, SAFe artefacts, spikes, story map, user stories, value stream, and the MoSCoW and lightweight-documentation forms).
Batch 6b: BI and Data, IT and Architecture, and Business Process perspective artefacts (balanced scorecards, dashboards, data warehouse and marts, ETL and metadata, physical and logical data models, source and target dictionaries, reporting requirements, process architecture, BMM, information and organisational maps, enterprise core diagram, customer journey map, and the reference-model and notation families).

Templates: none.

### Phase 7: Skill bindings (Section C)

Resolve the nine distinct skill references. Two are authored as BA-OS capabilities; the rest are bound as external plugin pool members of their owning agents. Detail in section 5.

---

## 4. Concrete first batch

The first batch under Phase 1, proposed for approval as the pattern the rest follow.

Batch 1.1: the six requirement-class rubrics (KA2).

| Canonical slug | Register row | Owning agent |
| --- | --- | --- |
| `functional-requirements-rubric` | Functional requirements | Synthesis & Drafting |
| `non-functional-requirements-rubric` | Non-functional requirements | Synthesis & Drafting |
| `solution-requirements-rubric` | Solution requirements | Synthesis & Drafting |
| `stakeholder-requirements-rubric` | Stakeholder requirements | Synthesis & Drafting |
| `transition-requirements-rubric` | Transition requirements | Synthesis & Drafting |
| `designs-rubric` | Designs | Synthesis & Drafting |

These six share the BABOK verify criteria as their spine, but each is specialised: non-functional requirements score measurability and category coverage (performance, security, usability), transition requirements score the temporary bridge from current to future state and its retirement, stakeholder requirements score traceability to a named stakeholder need, and designs score whether the solution components and trade-offs are defined and feasible. The starter criterion in the register is one line; the finished rubric is a seven-to-nine dimension table.

Worked specimen (the shape the batch produces, shown for `transition-requirements-rubric`):

```
# Transition Requirements Evaluation Rubric

A repeatable rubric for judging whether a set of transition requirements is ready to
guide the move from the current state to the future state. Used by the quality and
requirements skills and applied to transition requirements captured in a BRD or SRS.
Based on BABOK Requirements Classification (Key Concepts) and Requirements Analysis
and Design Definition (7).

## Scoring scale

For each dimension score 0 to 3: 0 absent, 1 weak, 2 adequate, 3 strong.

## Dimensions

| # | Dimension | What good looks like |
| --- | --- | --- |
| 1 | Temporary by design | Each requirement addresses only the move from current to future state, not the ongoing solution. |
| 2 | Current-to-future bridge | The from-state and to-state each requirement bridges are named and correct. |
| 3 | Completeness | Data migration, cutover, coexistence, training, and decommissioning are covered where relevant. |
| 4 | Atomic and testable | Each requirement is atomic, unambiguous, and has an acceptance condition. |
| 5 | Retirement | The point at which each transition requirement is no longer needed is stated. |
| 6 | Traceability | Each traces to the change strategy and to the current and future state it connects. |
| 7 | Dependencies and sequence | Ordering and dependencies between transition steps are explicit. |
| 8 | Risk | Cutover and migration risks are identified with responses and owners. |

## Result

Total the scores (maximum 24):

- Pass: 20 or higher with no dimension at 0.
- Pass with changes: 14 to 19, or a single quick-to-fix dimension at 1.
- Fail: below 14, or any dimension at 0.

Record findings by severity with a specific fix, and route material issues back to the
requirements skill.

## Findings template

| Dimension | Score | Evidence | Gap and fix |
| --- | --- | --- | --- |
|  |  |  |  |
```

Batch acceptance for 1.1: six files present at the named slugs; each matches section 1.1; each has seven to nine specialised dimensions, not a pasted starter line; the maximum and bands are correct for the dimension count; `natural-prose-editor` has run; `scripts/validate-assets.mjs` passes; the manifest rows for these six are marked shipped.

---

## 5. Section C: skill binding decisions

Each register skill reference is resolved one of two ways. Author a BA-OS capability where the capability is core methodology that the OS should own. Bind an external plugin as a pool member of the owning agent where the capability is specialist tooling outside the OS core, for example design, data science, front-end build, or legal review.

| Register skill ref | Decision | Owning agent | Artefacts it unblocks |
| --- | --- | --- | --- |
| Reference standard / knowledge base | Author BA-OS capability | Synthesis & Drafting, Visual Modeling (Perspectives lens) | Lightweight documentation, reference models and frameworks (Zachman, TOGAF, Archimate, APQC PCF, SCOR, VRM, FEA), repository of reference models, SAFe program and portfolio artefacts, supporting notations (BPMN, SIPOC, swimlane, FMEA) |
| Technique skill for estimates | Confirm existing `estimation` capability; extend only if it does not cover the technique-level artefact | Synthesis & Drafting | Estimates (cost and effort forecasts with ranges) |
| `data:statistical-analysis`, `data:analyze` | Bind external plugin as pool member | Visual Modeling | Data-mining model and findings |
| `design:user-research` | Bind external plugin as pool member | Visual Modeling (Perspectives lens) | Customer journey map |
| `figma:figma-generate-diagram` | Bind external plugin as pool member | Visual Modeling | Diagrams (representation form), mind map |
| `frontend-design` | Bind external plugin as pool member | Synthesis & Drafting | Horizontal prototype, vertical prototype |
| `frontend-design`, `engineering:architecture` | Bind both as pool members | Synthesis & Drafting | Proof of concept |
| `frontend-design`, `figma:figma-design-to-code` | Bind both as pool members | Synthesis & Drafting, Visual Modeling | Evolutionary prototype, prototype (mock-up, wireframe, storyboard), throw-away prototype, wireframe and mock-up and storyboard |
| `legal:review-contract` | Bind external plugin as pool member | Analytics & Performance | Service Level Agreement |

Authored capabilities follow `docs/skill-authoring-guidelines.md`. Bindings are declared as pool members of the owning agent, so an artefact that needs the tool routes to it while ownership stays with the BA-OS agent. Phase 7 produces the two capability files and the binding declarations; it does not modify app routing.

---

## 6. Definition of done

The backlog is closed when:

1. Every canonical rubric slug in the manifest has a file under `evaluation/` that meets section 1.1 and the quality bar in 1.1.
2. All 25 Section B templates exist under `templates/` and meet section 1.2, including the optional requirement-class templates, which are authored standalone per the approved decision.
3. Section C is resolved: two capabilities authored, seven bindings declared, the estimation capability confirmed.
4. `scripts/validate-assets.mjs` passes across the whole repo.
5. The manifest shows every row shipped, and the tracking ledger in section 8 is complete.
6. Each phase shipped as its own pull request on the OS content track, reviewed against this plan.

Per-batch definition of done: files present at manifest slugs, format conformant, prose edited, validator green, manifest rows updated, one commit.

---

## 7. Upgrade and regeneration procedures

This plan is built to be re-run. The backlog is generated, the register changes, and the format may evolve. These procedures keep the plan and the content in step.

### 7.1 When the register or backlog regenerates

`COVERAGE_BACKLOG.md` is regenerated from the register by `parse_register.py`. After a regeneration:

1. Diff the new backlog against the manifest. New rows are unmapped; resolve each against the catalogue first to find its canonical slug and BABOK anchor, then author it into the phase its knowledge area belongs to. Removed rows point at files to retire. Changed owning agents update the manifest and any binding. If the catalogue itself is re-extracted, re-run the dedup pass so the manifest's canonical mapping stays current.
2. Never delete a shipped rubric or template silently. If an artefact leaves the register, mark its manifest row superseded with a pointer, matching the supersession convention in `templates/artefact-register.md`. IDs and slugs are not reused.
3. Re-run the validator and update the ledger.

### 7.2 When the rubric or template format changes

Change section 1 first, bump this plan's version, then roll the change across shipped files as its own batch. Section 1 is the authority; files conform to it, not the reverse. A format change is a plan version bump (for example 1.0.0 to 1.1.0).

### 7.3 When a new knowledge area or artefact family appears

Add a phase or a batch rather than stretching an existing one past the 5 to 8 file band. Give the new family its owning agent in the manifest and its slugs before authoring. The phase sequence is ordered by production frequency, so insert by that principle.

### 7.4 Adjusting scope

Scope is bounded by `COVERAGE_BACKLOG.md`. Adding an artefact that is not in the backlog requires adding it to the register and regenerating first, then following 7.1. This keeps the register the single source of scope and stops the OS content from drifting away from the BABOK join.

### 7.5 Versioning this plan

This document carries a semantic version at the top. Patch for wording and ledger updates, minor for format or procedure changes, major for a re-sequencing of the phases or a change to the de-duplication rule. Record notable changes in section 9.

---

## 8. Tracking ledger

Updated as batches land. Status values: not-started, in-progress, shipped. Counts are filled from the manifest once Phase 0 completes; the manifest is the count of record.

Counts are from `docs/coverage-backlog-manifest.md` v1.0.0: 217 register rows resolve to 201 canonical rubric slugs, of which 25 also need a template (kind = both). Phase is the earliest phase a concept appears in.

| Phase | Content | Canonical slugs | Status |
| --- | --- | --- | --- |
| 0 | Manifest, plan, authoring guide | 3 files | shipped |
| 1 | KA2, KA3, KA4 rubrics (7 also templates) | 21 | shipped (21 rubrics, 7 templates) |
| 2 | KA5, KA6 rubrics (some also templates) | 22 | shipped (22 rubrics, 10 templates) |
| 3 | KA7, KA8, Named Forms rubrics (some also templates) | 36 | shipped (36 rubrics, 8 templates) |
| 4 | KA9 rubrics | 30 | shipped (30 rubrics) |
| 5 | KA10 technique rubrics | 45 | shipped (41 rubrics, 4 aliased) |
| 6 | KA11 perspective rubrics | 47 | in-progress (6a: 10 rubrics) |
| 7 | 2 capabilities, 7 bindings | 9 refs | not-started |

---

## 9. Change log

| Plan version | Date | Change |
| --- | --- | --- |
| 1.0.0 | 2026-09-01 | Initial approved plan. |
| 1.1.0 | 2026-09-01 | Added the source-inputs section (register, backlog, catalogue, and the page-indexed guide) with the copyright guardrail and the reproducible page-index procedure. Phase 0 executed: canonical manifest and rubric authoring guide authored, ledger filled from the manifest. |
