# Depth Standard

Standard version: 1.0.0

The bar every template, rubric, and skill in the OS is held to. Each check has an ID that `scripts/audit-depth.mjs` reports, so a score in the audit maps back to a line here. The audit writes `evaluation/depth-baseline.json`, and CI fails when any asset scores lower than its baseline. Depth can only go up. Raising the bar is a change to this file, the script, and the baseline together.

Where a check is judged by a person rather than the script, it says so. The script checks for presence and structure, not quality. A rubric pass and a reviewer still judge whether the content is good.

## Template bar

A template is the working form of one artefact type. Its table-of-contents manifest (`templates/<type>.toc.json`, see [Template tables of contents](#template-tables-of-contents)) is the machine-readable list of its sections.

| ID | Check | How it is measured |
| --- | --- | --- |
| T1 | Has a table-of-contents manifest that validates | `templates/<type>.toc.json` exists and passes `scripts/validate-assets.mjs` |
| T2 | Covers the seven CLAUDE.md artefact elements in core sections: purpose, scope, inputs, outputs, assumptions, risks, review criteria | Manifest `artefactStandard` on core sections; without a manifest, headings are matched by name |
| T3 | Gives guidance for each section: what good looks like, not only what to fill in | At least one line of prose under every section heading |
| T4 | Shows at least one filled example row for every table | No table whose data rows are all empty |
| T5 | Gives traceable items stable IDs | An ID pattern (for example `R-001`, `NFR-001`) appears in the template |
| T6 | States its BABOK anchor | A BABOK section or technique number is cited |
| T7 | Names the rubric that grades it | The template or its manifest names the rubric from its quality profile |

## Rubric bar

| ID | Check | How it is measured |
| --- | --- | --- |
| R1 | Is written for the template it grades | The rubric names every template whose profile uses it |
| R2 | Has seven to nine artefact-specific dimensions | Count of rows in the first numbered table; specificity is a reviewer judgement |
| R3 | Anchors score 0 and score 3 for every dimension | A second numbered table with one row per dimension |
| R4 | Lists common failure modes | A `Common failure modes` section |
| R5 | Declares blocking dimensions | The quality profile's `gate.blocking` lists at least one dimension |
| R6 | Maps every dimension to the template sections that evidence it | Every dimension appears in some section's `evidences` in the paired template's manifest |
| R7 | Has a calibration set | `evaluation/calibration/<type>/scores.json` exists for a type the rubric grades |
| R8 | Has confirmed calibration scores | That set's `status` is `confirmed` (set by a BA reviewer) |

## Skill bar

| ID | Check | How it is measured |
| --- | --- | --- |
| S1 | Has a method playbook grounded in its BABOK tasks and techniques | A `references/*-playbook.md` file |
| S2 | Has at least three curated sources | Entries naming the skill in `sources/manifest.json` whose `identityVerified` is true; a source whose `skills` is `*` (BABOK) counts for every skill. A held file that is not the document it claims to be does not count |
| S3 | Has reference depth in proportion to what it owns | Reference words at least 800, and at least 60 per register row the skill owns |
| S4 | Has a worked example | A reference or linked example shows the skill's output filled in |
| S5 | Links the templates and rubrics it owns | SKILL.md or a reference names `templates/` and `evaluation/` paths |
| S6 | Has at least one reference file | `references/` is not empty |

## Scoring

Each asset's score is the number of checks it passes. The audit prints each asset's score and failing check IDs, plus the totals per asset type. An asset is at the bar when it passes every check. R8 needs a named reviewer, so an asset can be at the bar except R8 while its calibration waits for review.

## Template tables of contents

Each template is a superset: every section a practitioner could need for that artefact. Its manifest says which sections apply when. The app, or a person using the plugin, resolves the manifest against the use case and the user's preferences to produce a tailored template.

### Manifest fields

| Field | Required | Meaning |
| --- | --- | --- |
| `schemaVersion` | yes | `1` |
| `artefactType` | yes | The template stem, matching the file name |
| `sections[].id` | yes | Stable kebab-case ID |
| `sections[].heading` | yes | The exact text of a `##` or `###` heading in the template. Headings are matched by text so the template needs no special syntax |
| `sections[].tier` | yes | `core` (always included), `standard` (included by default), or `extended` (included only when a condition or preference asks for it) |
| `sections[].purpose` | yes | One line on why the section exists |
| `sections[].when` | no | Conditions that include an extended section. Keys: `approach` (`predictive`, `adaptive`, `hybrid`), `formality` (`light`, `standard`, `formal`), `audience` (`executive`, `delivery`, `regulator`, `customer`), `risk` (`low`, `medium`, `high`), `regulated` (`true`), `domainPack`, `perspective` (`agile`, `business-intelligence`, `information-technology`, `business-architecture`, `business-process-management`). Each key takes a list; a section is included when any listed value matches |
| `sections[].requires` | no | Section IDs this one depends on |
| `sections[].evidences` | no | Rubric dimension numbers this section provides evidence for |
| `sections[].artefactStandard` | no | The CLAUDE.md element this section satisfies: `purpose`, `scope`, `inputs`, `outputs`, `assumptions`, `risks`, or `review-criteria` |

The schema is `schemas/template-toc.json`.

### Resolution rules

1. Core sections are always included.
2. Standard sections are included unless the user's preferences turn them off.
3. Extended sections are included when a `when` condition matches the use case, or when the user turns them on.
4. `requires` is applied transitively.
5. A rubric dimension whose evidencing sections were all left out is scored not applicable, and the maximum score and bands scale to the applicable dimensions.
6. The chosen section IDs and the manifest's content hash are recorded with the output.

### What the validator enforces

- Every manifest `heading` exists in the template, and every `##` heading in the template is in the manifest.
- Section IDs are unique; `requires` names existing sections and has no cycles; `when` uses only the keys and values above.
- Core sections together cover all seven CLAUDE.md elements.
- Every `evidences` number is a dimension of the rubric the type's profile names, and every dimension of that rubric is evidenced by at least one section.
- Every blocking dimension in the profile is evidenced by at least one core section, so tailoring can never switch a blocking check off.
- Every rubric dimension is evidenced by at least one core or standard section, so the default resolution never leaves a dimension without evidence. This also protects graders that do not resolve the manifest, such as Kryterea today.
- Every template with a manifest opens with the usage note described below, and its list of conditional sections matches the manifest's extended sections.
- Every template's title and frontmatter `domain` match `docs/template-identity.json`. Kryterea's document catalogue reads both, so a rewrite must not change them by accident.

### The usage note

A grader or generator may receive the template text without its manifest. So each template carries a short note under its title, generated from the manifest by `scripts/sync-template-notes.mjs`. The note says three things. The filled rows are illustrations and must never be copied into a real document. Core and standard sections are included by default. Each extended section is listed with the conditions that bring it in. The validator fails if the note is missing or out of date, so run the script after changing a manifest.

## Blocking dimensions

A blocking dimension fails the gate at score 0 whatever the total. A quality profile lists them in `gate.blocking` as dimension numbers of its rubric. Choose the dimensions without which the artefact would mislead a decision: for example the measurability of a non-functional requirement, or the owner of a risk.
