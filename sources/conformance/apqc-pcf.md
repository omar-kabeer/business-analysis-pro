# Conformance checks: apqc-pcf

Source id: `apqc-pcf`
Standard: APQC Process Classification Framework (PCF), Cross-Industry.
Edition held: Version 8.0, February 2026.
Publisher: APQC.
Authority: normative.
Identity: confirmed from the cover and copyright page on 2026-08-07. Cross-Industry PCF, version 8.0. The manifest previously recorded the version as unrecorded; it is v8.0.
Licence: open standard. APQC grants a perpetual, worldwide, royalty-free licence to use, copy, publish, modify, and create derivative works, provided every copy and derivative carries the APQC attribution statement. Attribution is a condition of the licence, so it is testable and appears as a check below.
Modality caveat: the PCF is a taxonomy (a numbered, defined hierarchy of processes), not a prose standard with "shall" clauses. Its conformance is structural: an artefact conforms by using the PCF hierarchy, numbering, and reference identifiers correctly, and by carrying the required attribution. The blocking severities below are our house gate for a taxonomy that claims PCF alignment.
Artefact types constrained: `process-taxonomy`, `capability-map`. See the note under capability-map: the PCF is an ill-fitting authority for capability maps and produces no check for that type.
Owning skills: `business-architecture`, `process-modelling`.
Locator style: APQC PCF category `<n>` (or the 5-digit element reference number).

## How to read this file

Three layers, kept separate.

- Source (S). What the PCF states or defines, with the locator (category number or the element numbering rule).
- Inference (I). Our reasoning connecting the PCF to our artefacts, including any house-gate decision.
- Check (C). The reviewer question, answerable yes or no from the finished artefact.

## Checks: process-taxonomy

Applies to a process taxonomy that claims alignment with the APQC PCF.

| Check id | Question (yes = pass) | Severity | Locator | How the reviewer confirms |
| --- | --- | --- | --- | --- |
| APQC-PT-01 | Do the top-level categories align with the PCF's 13 cross-industry categories (1.0 Develop Vision and Strategy through 13.0 Develop and Manage Business Capabilities)? | blocking | PCF category 1.0 to 13.0 | Compare the taxonomy's top level to the 13 categories listed in the provenance. A taxonomy claiming PCF alignment whose top level does not map to the 13 fails. |
| APQC-PT-02 | Does the hierarchy follow the PCF's named levels and decimal decomposition (Category n.0, Process Group n.n, Process n.n.n, Activity n.n.n.n), each child extending its parent's number by one decimal segment? | blocking | PCF numbering scheme | Check that a child's number extends its parent's by one decimal segment and sits at the matching named level. Numbering that skips or crosses levels fails. Some branches extend a further decimal level; that is permitted. |
| APQC-PT-03 | Does each PCF-aligned element carry its unique 5-digit PCF reference number? | blocking | PCF numbering scheme (element numbering) | Confirm each element mapped to the PCF shows its 5-digit reference (for example 10002). An element claiming PCF identity with no reference number fails. |
| APQC-PT-04 | Does the artefact carry the APQC attribution statement required by the PCF licence? | blocking | Copyright and attribution page | Look for the APQC attribution text on the artefact. A PCF-derived taxonomy without it breaches the licence and fails. |
| APQC-PT-05 | Does each element carry a definition consistent with the PCF definition for that element? | advisory | PCF element definitions | Spot-check element definitions against the PCF. Divergent definitions are a quality flag. |
| APQC-PT-06 | Are PCF reference numbers preserved unchanged, not reused or renumbered, when an element is carried into the taxonomy? | advisory | PCF numbering scheme | The PCF assigns a new number only on a substantial definition change. Flag reused or altered reference numbers. |

## Checks: capability-map

No check produced. Reason recorded here to satisfy the forward cross-check.

The APQC PCF is a classification of business processes, not a model of business capabilities. Although PCF category 13.0 is named "Develop and Manage Business Capabilities", the PCF represents that as a set of processes, not as the capability elements, relationships, and levels a capability map is made of. Gating a capability map on a process taxonomy would test the wrong structure. The manifest assigns `capability-map` to this source, but the PCF cannot serve as its conformance authority.

The better-fitting authority for capability maps is the ArchiMate capability element (Strategy layer). The held ArchiMate file is the Reference Cards, not the specification (see `iso-31000` batch note and the `archimate-3.1` manifest record), so no ArchiMate checks exist yet either. `capability-map` therefore has no usable normative source at present. Logged in gap-analysis, not resolved here.

### Provenance, process-taxonomy

- PT-01. S: The PCF organizes operating and management processes into 13 enterprise-level categories: 1.0 Develop Vision and Strategy, 2.0 Develop and Manage Products and Services, 3.0 Market and Sell Products and Services, 4.0 Manage Supply Chain for Physical Products, 5.0 Deliver Services, 6.0 Manage Customer Service, 7.0 Develop and Manage Human Resources, 8.0 Manage Information Technology, 9.0 Manage Financial Resources, 10.0 Acquire, Construct, and Manage Assets, 11.0 Manage Enterprise Risk, Compliance, Remediation, and Resiliency, 12.0 Manage External Relationships, 13.0 Develop and Manage Business Capabilities (Content Organization). I: A taxonomy claiming PCF alignment must reconcile to these 13 at the top.
- PT-02. S: The PCF organizes processes into categories, process groups, processes, and associated activities, numbered by decimal extension (Overview; observable throughout, for example 1.0, 1.1, 1.1.1, 1.1.1.1). I: The PCF names four levels (Category, Process Group, Process, Activity). Some branches carry a further decimal level in the data; we do not assert a name for it, since the source does not name a fifth level. We treat the four named levels plus decimal decomposition as the structural test.
- PT-03. S: The PCF identifies each process element using a unique 5-digit reference number following the name; the number always refers to the conceptual definition; a new number is assigned if the definition substantially changes (PCF Levels Explained, Process Element Numbering Scheme). I: We require the reference number to be present on PCF-aligned elements, since it is the PCF's identity mechanism.
- PT-04. S: APQC grants a royalty-free licence to use, copy, publish, and create derivative works of the PCF provided all copies and derivatives carry the APQC attribution statement (Copyright and Attribution). I: Attribution is a licence condition, so a delivered PCF-derived taxonomy must carry it. Gated because omission breaches the licence.
- PT-05. S: The PCF, its associated measures, and definitions are published for each element (Overview; element definitions throughout). I: Advisory alignment of definitions.
- PT-06. S: A new 5-digit number is assigned only if a definition substantially changes; otherwise the number is stable (Process Element Numbering Scheme). I: We read this as a stability rule for carried elements; advisory.

## Not-testable obligations

| Obligation (paraphrase) | Locator | Why not testable on a finished artefact |
| --- | --- | --- |
| The PCF is an evolving model; APQC invites comments and enhancement suggestions. | Looking Forward | An invitation about the framework's maintenance, not a property of an artefact. |
| The PCF enables benchmarking against APQC's Open Standards Benchmarking database. | Overview | Describes a use of the PCF, not a pass-or-fail property of a taxonomy. |

## Coverage

- `process-taxonomy`: 4 blocking checks (PT-01 to PT-04), 2 advisory (PT-05, PT-06).
- `capability-map`: 0 checks, with a recorded reason (the PCF is a process taxonomy, not a capability model; the fitting source, the ArchiMate specification, is not held). This satisfies the forward cross-check's "at least one blocking check or a recorded reason it has none".

Boundary note: `capability-map` is constrained in the manifest by both `apqc-pcf` and `archimate-3.1`. Neither currently yields a check: the PCF is ill-fitting, and the ArchiMate holding is the reference cards, not the specification. Logged in gap-analysis.
