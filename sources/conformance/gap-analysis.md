# Conformance gap analysis

Scope of this pass: the pilot (`iso-29148`) plus batches 1 to 5. Sixteen normative sources have been processed: twelve produced conformance files, three were stopped on identity or tooling grounds, and one (WCAG 2.2) is blocked by an unreadable PDF. Batch 6 (`iso-29119-3`, `iso-20400`, `cobit-2019`, `crisp-dm-1.0`, `cocomo-ii-2.1`) and Batch 7 (`babok-3.0-2015`) are not yet processed; the questions below are answered for the sources handled so far and will be extended when those batches run.

## Sources processed

| Source | Outcome | Checks (blocking / advisory) |
| --- | --- | --- |
| `iso-29148` | conformance file | 14 / 9 |
| `iso-31000-2018` | conformance file (guidelines modality; unlicensed copy) | 8 / 6 |
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
| `iso-27002` | conformance file (code of practice; house-gate severities) | 3 / 4 |
| `iso-24495-1` | STOPPED, identity mismatch | 0 |
| `scrum-guide-2020` | conformance file | 6 / 4 |

## Artefact types with no blocking check, and why

Every artefact type that a produced conformance file governs carries at least one blocking check. Three artefact types have no blocking check because their assigned source could not serve as an authority:

- `enterprise-architecture-model`. Assigned to `archimate-3.1`, whose held file is the ArchiMate 3.1 Reference Cards, not the specification. No source.
- `capability-map`. Assigned to both `archimate-3.1` (reference cards, unusable) and `apqc-pcf` (a process taxonomy, ill-fitting for a capability model, recorded reason in its conformance file). No usable source.
- `prose-deliverable`. Assigned to `iso-24495-1`, whose held file is a third-party health-communication companion, not the standard. No source.

## Obligations found that no current skill owns

Several sources carry obligations that constrain a process, a management system, or an organization's conduct rather than the content of an artefact. They were recorded in each conformance file's not-testable table and are owned by no artefact-producing skill:

- Requirements process obligations (ISO/IEC/IEEE 29148 clause 6.1, 7, 6.5): implement the requirements processes, produce the specifications, manage requirements information.
- Risk management framework and principles (ISO 31000 clauses 4 and 5).
- ISMS management-system clauses (ISO/IEC 27001 clauses 4, 5, 7 to 10).
- Human-centred design planning judgements (ISO 9241-210 clause 5.2).
- Scrum events and team accountabilities (Scrum Guide).

These belong to process assurance or governance, not to the checks that gate a finished artefact. Whether the OS should own a "process assurance" artefact family is a decision for `ba-planning` or `governance`, logged not resolved.

## Skills whose governed artefacts have no normative source

- `architecture`. Known from the register brief: the TOGAF holding is a 2003 conference slide deck (illustrative), so architecture has no normative source. Unchanged.
- `business-architecture`. Its governed artefacts `enterprise-architecture-model` and `capability-map` have no usable source (ArchiMate reference cards, APQC ill-fit). It retains `process-taxonomy` via `apqc-pcf`.
- `communication`, `natural-prose-editor`, `executive-review`. Their `prose-deliverable` artefact has no source while the ISO 24495-1 holding is the wrong document.

A complete enumeration of unsourced skills needs batches 6 and 7 and is deferred. The generator reports the count in `index.md`.

## Checks resting on a source whose identity is unconfirmed

None. Every conformance file rests on a source whose identity was confirmed from its title page before extraction. Two carry a licence caveat (identity confirmed, but the copy is not licensed to us): `iso-31000-2018` (Clarivate/University of Toronto watermark) and `iso-27001-2022` (SNV/SQS Swiss stamp). Both must be replaced with owned copies before they underpin client deliverables. The register still holds other sources with unconfirmed identity in batches not yet processed.

## Sources that produced no checks

- `archimate-3.1`: held file is the Reference Cards (product N190), not the Specification (C197). Acquire the specification.
- `wcag-2.2`: held PDF is image-only (about 95 pages, no text layer); pdftoppm and OCR are unavailable, so it cannot be read or verified. Obtain a text-based copy. The three artefacts it would govern remain covered by `wcag-2.1` in the interim.
- `iso-24495-1`: held file is a health-communication companion that references the standard, not the standard. Acquire ISO 24495-1:2023.

## Conflicts where two standards constrain the same artefact type differently

Presented with the condition under which each applies. None are averaged.

- `compliance-matrix`: `iso-27001-2022` and `iso-27002`. Complementary, both apply. ISO/IEC 27001 (6.1.3) defines the Statement of Applicability structure (necessary controls, inclusion justification, implemented-or-not, Annex A comparison). ISO/IEC 27002 adds the controls' content and requires 27002-sourced controls to be identified by clause and title. A compliance matrix should satisfy both: the 27001 structure and, for any 27002-derived control, the 27002 identification.
- `prototype`: `wcag-2.1` and `iso-9241-210-2010`. Complementary. WCAG governs the prototype's accessibility (design-determinable success criteria); ISO 9241-210 governs the prototype's role in the human-centred design process (it must drive user-centred evaluation). Apply both.
- `ui-design`, `prototype`, `published-page`: `wcag-2.1` and `wcag-2.2`. A version relationship, not a contradiction. WCAG 2.2 is additive over 2.1 and is the current target; use 2.1 only where a policy or contract explicitly references 2.1. WCAG 2.2 is currently unextracted (unreadable PDF), so 2.1 is the operative source meanwhile.
- `capability-map`: `apqc-pcf` and `archimate-3.1`. Both are assigned but neither yields a check (APQC ill-fitting, ArchiMate holding wrong). Not a live conflict, a shared gap.

## Boundary discrepancies logged, not resolved

- `iso-29148`: `standards-mapping.md` assigns it to skills `requirements, quality`; the manifest lists `requirements` only. Binding to `requirements` is correct (it owns the requirement artefacts); whether `quality` should also reference the checks is an owner decision.

## Still to do

- Process batch 6 (`iso-29119-3`, `iso-20400`, `cobit-2019`, `crisp-dm-1.0`, `cocomo-ii-2.1`) and batch 7 (`babok-3.0-2015`).
- After those, complete the unsourced-skills enumeration and re-check for further cross-standard conflicts.
