# Conformance gap analysis

Scope: the pilot (`iso-29148`) plus batches 1 to 7, that is all twenty sources in the run. Eighteen produced conformance files; three were stopped on identity or tooling grounds. Across the eighteen files there are 219 checks: 138 blocking and 81 advisory.

## Sources processed

| Source | Outcome | Checks (blocking / advisory) |
| --- | --- | --- |
| `iso-29148` | conformance file | 14 / 9 |
| `iso-31000-2018` | conformance file (guidelines; unlicensed copy) | 8 / 6 |
| `archimate-3.1` | STOPPED, identity mismatch | 0 |
| `apqc-pcf` | conformance file | 4 / 2 |
| `bmm-1.3` | conformance file | 7 / 6 |
| `wcag-2.1` | conformance file | 7 / 2 |
| `wcag-2.2` | BLOCKED, image-only PDF | 0 |
| `iso-9241-210-2010` | conformance file | 7 / 5 |
| `dmn-1.3` | conformance file | 9 / 4 |
| `bpmn-2.0` | conformance file (subagent extraction) | 9 / 4 |
| `uml-2.5` | conformance file (subagent extraction) | 16 / 7 |
| `iso-27001-2022` | conformance file (unlicensed copy) | 7 / 3 |
| `iso-27002` | conformance file (code of practice; house gate) | 3 / 4 |
| `iso-24495-1` | STOPPED, identity mismatch | 0 |
| `scrum-guide-2020` | conformance file | 6 / 4 |
| `iso-29119-3` | conformance file | 7 / 3 |
| `iso-20400` | conformance file (guidelines; house gate) | 5 / 4 |
| `cobit-2019` | conformance file (framework; house gate) | 8 / 4 |
| `crisp-dm-1.0` | conformance file (methodology; house gate) | 5 / 3 |
| `cocomo-ii-2.1` | conformance file | 6 / 3 |
| `babok-3.0-2015` | conformance file (subagent extraction; anchor, `*`) | 10 / 8 |

## Artefact types with no blocking check, and why

Every artefact type that a produced conformance file governs carries at least one blocking check, and BABOK adds a blocking baseline to every artefact type as the anchor. Three artefact types have no source-specific check because the source assigned to them could not serve as an authority; they retain only the BABOK baseline:

- `enterprise-architecture-model`. Assigned to `archimate-3.1`, whose held file is the ArchiMate 3.1 Reference Cards, not the specification.
- `capability-map`. Assigned to `archimate-3.1` (reference cards) and `apqc-pcf` (a process taxonomy, ill-fitting for a capability model). No fitting source.
- `prose-deliverable`. Assigned to `iso-24495-1`, whose held file is a health-communication companion, not the standard.

## Obligations found that no current skill owns

Process, management-system, and framework obligations were recorded in each file's not-testable table and are owned by no artefact-producing skill:

- Requirements process obligations (ISO/IEC/IEEE 29148 clauses 6, 7).
- Risk management framework and principles (ISO 31000 clauses 4, 5).
- ISMS management-system clauses (ISO/IEC 27001 clauses 4, 5, 7 to 10).
- Human-centred design planning judgements (ISO 9241-210 clause 5).
- Scrum events and team accountabilities (Scrum Guide).
- COBIT framework principles and implementation life cycle.
- Test conformance-claim assertion (ISO/IEC/IEEE 29119-3).

These belong to process assurance or governance, not to artefact checks. Whether the OS should own a process-assurance artefact family is a decision for `ba-planning` or `governance`, logged not resolved.

## Skills whose governed artefacts have no normative source

The generator now reports fourteen skills with no normative standard and ten with no source at all (see `index.md`). Of the fourteen, five are acceptable: `ba-planning`, `business-analysis`, and `solution-evaluation` are BABOK constructs and BABOK is normative for them; `prompt-master` and `orchestrator` have no external standard to conform to. The remaining gaps are real, and this run added detail to three of them:

- `architecture`. No normative source: the TOGAF holding is a 2003 slide deck (illustrative). Unchanged.
- `business-architecture`. `enterprise-architecture-model` and `capability-map` are unsourced (ArchiMate reference cards, APQC ill-fit); it keeps `process-taxonomy` via `apqc-pcf`.
- `communication`, `natural-prose-editor`, `executive-review`. `prose-deliverable` is unsourced while the ISO 24495-1 holding is the wrong document.

The other listed gaps (`elicitation`, `market-research`, `document-analysis`, `technical-writer`, `information-management`, `finance`, `proposal-writer`) want standards not held (ISO 20252, ISO/IEC 26514, ISO 15489, ISO 20022, the APMP standards). Their outputs are gated by BABOK and internal rubrics only, and should say so rather than imply external conformance.

## Checks resting on a source whose identity is unconfirmed

None. Every conformance file rests on a source confirmed from its title page before extraction. Two carry a licence caveat (identity confirmed, copy not licensed to us) and must be replaced with owned copies before client use: `iso-31000-2018` (Clarivate/University of Toronto watermark) and `iso-27001-2022` (SNV/SQS Swiss stamp).

## Sources that produced no checks

- `archimate-3.1`: the Reference Cards (N190), not the Specification (C197). Acquire the specification.
- `wcag-2.2`: image-only PDF (about 95 pages, no text layer); pdftoppm and OCR unavailable. Obtain a text-based copy. Its three artefacts stay covered by `wcag-2.1` meanwhile.
- `iso-24495-1`: a health-communication companion referencing the standard, not the standard. Acquire ISO 24495-1:2023.

## Conflicts where two standards constrain the same artefact type

Each with the condition under which it applies. None averaged.

- `compliance-matrix`: `iso-27001-2022` and `iso-27002`. Complementary, both apply. 27001 (6.1.3) defines the Statement of Applicability structure; 27002 adds the controls' content and clause-and-title identification.
- `prototype`: `wcag-2.1` and `iso-9241-210-2010`. Complementary. WCAG governs the prototype's accessibility; ISO 9241-210 governs its role in human-centred design.
- `ui-design`, `prototype`, `published-page`: `wcag-2.1` and `wcag-2.2`. Version relationship. 2.2 is additive and the current target; use 2.1 only where a policy references 2.1. 2.2 is currently unextracted, so 2.1 is operative.
- `capability-map`: `apqc-pcf` and `archimate-3.1`. Both assigned, neither yields a check (APQC ill-fitting, ArchiMate holding wrong). A shared gap, not a live conflict.
- Every artefact type: `babok-3.0-2015` (the `*` anchor) overlaps every artefact-specific source. Not a conflict but a deliberate layering: BABOK is the general baseline, the specific source governs notation and structure, and the two are consistent (for example BABOK and `iso-29148` on requirement quality, the latter more detailed).

## Modality note across the set

Six sources are not "shall" standards: ISO 31000, ISO 20400 (guidelines), ISO/IEC 27002 (code of practice), COBIT 2019 (framework), CRISP-DM (methodology), and in part the Scrum Guide and BMM. For these, the blocking severities are our house gate, stated in each file, not an external mandate. This distinction is preserved so a reader never mistakes a house gate for a certifiable requirement. The genuine "shall"/OCL/MUST standards (ISO/IEC/IEEE 29148, BPMN, UML, DMN, ISO/IEC 27001, ISO 9241-210, ISO/IEC/IEEE 29119-3) carry blocking checks grounded in the standard's own mandatory language.

## Boundary discrepancies logged, not resolved

- `iso-29148`: `standards-mapping.md` assigns it to skills `requirements, quality`; the manifest lists `requirements` only. Binding to `requirements` is correct; whether `quality` should also reference the checks is an owner decision.
- `babok-3.0-2015` binding: BABOK constrains `*`. Rather than duplicate a reference into all 39 skill folders, it is bound in the `requirements` skill (primary owner of requirement quality) and its universality is documented in its conformance file. If the register wants an explicit per-skill pointer, that is a follow-up.

## Acquisitions that would close the largest gaps

1. ArchiMate 3.1 Specification (C197): sources `enterprise-architecture-model` and, with a capability model, `capability-map`.
2. A text-based WCAG 2.2: completes the current accessibility target.
3. ISO 24495-1:2023: sources `prose-deliverable`.
4. Owned copies of ISO 31000:2018 and ISO/IEC 27001:2022: removes the licence caveats.
