# Skill Upgrade Program

A plan for taking all 40 skills in Business Analysis OS from correct to comprehensive, using BABOK v3 and a curated library of research papers and standards as primary sources. Execution happens in Claude Code, driven by the `skill-upgrader` skill.

## Why this pass exists

Version 1.15.0 closed the plugin against the BABOK v3 artefact register: every artefact now has exactly one owning skill. That is coverage, not depth. A skill can own an artefact family and still tell a practitioner nothing they did not already know. This program raises depth, skill by skill, against evidence.

The measure of success is simple. After the upgrade, a competent business analyst reading a skill's references should be able to do the work at a professional standard without opening another book.

## Shape of the work

| Dimension | Decision |
| --- | --- |
| Sources | BABOK v3 PDF plus a curated library of papers, standards, and practitioner material, held in `sources/` at the repository root |
| Depth model | Lean `SKILL.md` of 50 to 90 lines, depth in 3 to 6 reference files per skill |
| Batching | By MECE layer, 3 to 7 skills per session, 9 sessions plus a pilot |
| Driver | The `skill-upgrader` skill, invoked in Claude Code |
| Control | Branch per batch, commit per skill, coverage report per skill |

## Before the first session

1. Create `sources/` at the repository root with the layout in `skills/skill-upgrader/references/source-protocol.md`.
2. Place the BABOK v3 PDF at `sources/babok/babok-v3.pdf`.
3. Curate papers per skill into `sources/papers/<skill-name>/`. Aim for three to six items per skill. A skill with no external sources will be upgraded from BABOK alone and will come out correct and shallow, so mark those explicitly rather than discovering it mid-session.
4. Add the standards you already rely on to `sources/standards/`: BPMN 2.0, UML, DMN, WCAG, ISO 31000, ISO 27001, TOGAF, ArchiMate, ISO 20022 if payments matter to you.
5. Write `sources/index.md` listing each item and its licence position, so the reuse question is settled once rather than per session.
6. Add `sources/` to `.gitignore` if the material cannot be redistributed. The skills cite it; they do not ship it.

## Session sequence

| Session | Batch | Skills | Count |
| --- | --- | --- | --- |
| 0 | Pilot | risk-analysis | 1 |
| 1 | Frame | ba-planning, business-analysis, strategy, business-architecture | 4 |
| 2 | Input and evidence | elicitation, document-analysis, market-research | 3 |
| 3 | Specify | requirements, product-manager, product-owner, agile-coach, ux | 5 |
| 4 | Represent | visual-modelling, process-modelling, data-modelling, data-analysis, business-intelligence, architecture, prototyping | 7 |
| 5 | Decide | decision-analysis, estimation, finance, vendor-evaluation, procurement-contracts | 5 |
| 6 | Evaluate | quality, acceptance-testing, solution-evaluation | 3 |
| 7 | Control | risk-analysis (revisit only if the pilot predates the spec), change-control, regulatory-compliance, information-management, governance | 4 to 5 |
| 8 | Communicate | communication, executive-review, technical-writer, proposal-writer, natural-prose-editor, prompt-master, orchestrator | 7 |
| 9 | Consolidation | No skill upgrades; cross-cutting reconciliation and release | 0 |

Per-skill BABOK anchors and neighbour lists for every batch are in `skills/skill-upgrader/references/layer-batches.md`.

Batching by layer rather than alphabetically is deliberate. Skills in a layer share sources, so the reading is done once, and they share boundaries, so the handoffs can be settled inside a single session instead of drifting between them.

## Running a session in Claude Code

Start the session at the repository root and give it the batch. The `skill-upgrader` skill carries the method, so the prompt only has to carry the assignment.

```
Upgrade the Frame batch using the skill-upgrader skill: ba-planning,
business-analysis, strategy, business-architecture.

Sources are in sources/. Work the skills in the order listed. For each one:
build the coverage table before rewriting, check boundaries in both
directions, rewrite SKILL.md and its references to the upgrade spec, write
references/sources.md, validate, and commit.

Open a branch upgrade/frame first. Commit per skill. At the end, give me the
consolidated batch report with open items and any boundary conflicts.
```

Expect a session to take a while and to run long on context. If it does, finish the current skill, commit, and start a fresh session for the remainder of the batch rather than letting quality drift as the window fills.

## Definition of done, per skill

The full standard is in `skills/skill-upgrader/references/upgrade-spec.md`. In short:

- Coverage table complete, no obligation left at absent without a recorded decision.
- `SKILL.md` within 50 to 90 lines, description 400 to 1024 characters with at least eight realistic triggers and two explicit handoffs.
- Three to six reference files, always including a method reference, a quality reference, and `sources.md`.
- Boundaries stated in both directions with every neighbour.
- Validation clean, including the em dash rule and the repository validator.
- Reviewed by the `deliverable-critic` agent and the `quality` skill, both verdicts recorded.

## Definition of done, per batch

- Every skill in the batch meets the per-skill standard.
- Boundary conflicts inside the batch are resolved; conflicts with skills outside it are logged for Session 9.
- The batch branch is merged.
- The consolidated batch report is committed under `docs/upgrade-reports/`.

## Risks in this program, and how to hold them

| Risk | Response |
| --- | --- |
| Copyright exposure from reproducing BABOK text | Paraphrase and cite by section; the source protocol makes this a hard rule and the reviewer checks it |
| Bloat: skills grow without becoming more capable | Length caps in the spec, and the anti-pattern list that removes advice which would be identical for any skill |
| Inconsistent voice across nine sessions | The spec fixes the structure; the `natural-prose-editor` pass fixes the prose; Session 9 reconciles |
| Boundary drift as skills deepen | Boundaries checked in both directions per skill, conflicts escalated rather than resolved unilaterally, and Session 9 rebuilds the routing map |
| Context exhaustion mid-batch | Commit per skill so a session can end cleanly at any skill boundary |
| Thin source library for some skills | Curate before the session and mark BABOK-only skills explicitly, so shallowness is a known state rather than a surprise |

## Sequencing rationale

Frame first, because the enterprise and strategy skills set vocabulary the rest inherit. Input and evidence second, because they feed everything downstream. Specify third. Represent fourth, once there is settled content to represent. Decide and Evaluate next, since they consume specified and represented work. Control after that, because it governs artefacts that must already be stable. Communicate last, and the orchestrator last within it, so the routing map is written against the finished set rather than a moving one.

## After the program

Re-run the register coverage check, rebuild `docs/babok-coverage.md`, tag the release, and consider a standing cadence: one layer revisited per quarter, driven by the same skill against a refreshed source library. Skills decay against practice, not against BABOK.
