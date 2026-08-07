# Conformance checks: babok-3.0-2015

Source id: `babok-3.0-2015`
Standard: A Guide to the Business Analysis Body of Knowledge (BABOK Guide).
Edition held: Version 3.0, 2015.
Publisher: IIBA.
Authority: normative.
Identity: confirmed from the title page on 2026-08-07. BABOK Guide v3.0.
Licence: licensed copy, no redistribution; paraphrase only.
Scope: BABOK constrains every artefact type (`*`) and anchors every skill. These are the cross-cutting baseline checks that apply to any business-analysis deliverable, layered underneath the artefact-specific sources. Where an artefact type also has a specific source (for example a process model under BPMN), both apply: the specific source governs the notation, BABOK governs the general quality.
Extraction note: this is a 511-page guide. Full-text extraction was delegated to a subagent working from a pdftotext dump, so the raw text stayed out of the main working context.
Modality note: BABOK states the quality characteristics as ones acceptable requirements and designs "exhibit many of", not as a list every artefact must satisfy in full. We therefore gate on the load-bearing, testable characteristics and treat the rest as advisory, so no reader mistakes the full list for hard gates. Traceability, approval, classification, and validation are stated as task purposes and are gated.
Artefact types constrained: `*` (all).
Owning skills: `*` (all); the primary reference for requirement quality is `requirements`.
Locator style: BABOK v3, task or section number (for example 7.2.4.1).

## How to read this file

Three layers, kept separate: Source (S) with locator, labelled Inference (I), and the Check (C), answerable yes or no from the finished artefact.

## Checks: requirements and designs quality (any artefact)

BABOK's quality characteristics (Verify Requirements, 7.2.4.1). BABOK says acceptable requirements and designs exhibit many of these; we gate the load-bearing ones and keep the rest advisory.

| Check id | Question (yes = pass) | Severity | Locator | How the reviewer confirms |
| --- | --- | --- | --- | --- |
| BABOK-QC-01 | Is the content complete, with enough detail to guide the next step of work and no unresolved placeholders? | blocking | 7.2.4.1 | Check for sufficient detail and no open TBDs. |
| BABOK-QC-02 | Is it consistent, aligned to stakeholder needs and free of internal conflict? | blocking | 7.2.4.1 | Cross-check for contradictions and need alignment. |
| BABOK-QC-03 | Is it unambiguous, stated so there is only one reasonable interpretation? | blocking | 7.2.4.1 | Confirm a single reading; remove vague terms. |
| BABOK-QC-04 | Is it testable, so its fulfilment can be verified? | blocking | 7.2.4.1 | Confirm an acceptance check can be devised. |
| BABOK-QC-05 | Is it atomic, understandable independently of other items? | advisory | 7.2.4.1 | Check each item stands alone. |
| BABOK-QC-06 | Is it concise, free of extraneous content? | advisory | 7.2.4.1 | Check for padding or duplication. |
| BABOK-QC-07 | Is it feasible within agreed risk, schedule, and budget? | advisory | 7.2.4.1 | Judge achievability within constraints. |
| BABOK-QC-08 | Is it prioritized, ranked by importance and value? | advisory | 7.2.4.1 | Look for a priority per item. |
| BABOK-QC-09 | Is it understandable, in the audience's common terminology? | advisory | 7.2.4.1 | Check language matches stakeholder vocabulary. |

## Checks: traceability, approval, and classification (any artefact)

| Check id | Question (yes = pass) | Severity | Locator | How the reviewer confirms |
| --- | --- | --- | --- | --- |
| BABOK-TR-01 | Does each requirement or design carry backward and forward traceability and typed relationships to related items? | blocking | 5.1 | Confirm each item links up, down, and to related items using defined relationship types (derive, depends, satisfy, validate). |
| BABOK-TR-02 | Does traceability show solution coverage, with no orphan requirement and no unsupported functionality? | blocking | 5.1 | Confirm every requirement is covered by a solution component and every component traces to a requirement. |
| BABOK-AP-01 | Are the requirements and designs formally approved by the responsible stakeholders before construction proceeds? | blocking | 5.5 | Look for a documented sign-off from the governance stakeholders. |
| BABOK-SP-01 | Is each requirement explicitly represented with enough detail to exhibit the quality characteristics? | blocking | 7.1.4 | Confirm requirements are stated explicitly, not merely implied. |
| BABOK-SP-02 | Is each requirement classified per the requirements classification schema (business, stakeholder, solution with functional and non-functional, transition)? | blocking | 2.3, 7.1.4 | Confirm each item is classified and traces across classes. |
| BABOK-VA-01 | Does the artefact trace to a business requirement or objective and the value it supports? | blocking | 7.3 | Confirm a line from the item to a business objective or value statement. |
| BABOK-MA-01 | Are requirements maintained current, named, defined, and retrievable for reuse? | advisory | 5.2 | Check the requirements are kept current and findable. |
| BABOK-SP-03 | Are appropriate models chosen for the audience, with intent preserved across viewpoints and abstraction levels? | advisory | 7.1.4 | Judge model suitability and cross-viewpoint consistency. |

## Checks: framing completeness (framing artefacts)

| Check id | Question (yes = pass) | Severity | Locator | How the reviewer confirms |
| --- | --- | --- | --- | --- |
| BABOK-CC-01 | Where the artefact frames an initiative, does it address all six BACCM core concepts (Change, Need, Solution, Stakeholder, Value, Context) as interrelated? | advisory | 2.1 | For a framing or analysis artefact, confirm all six concepts are covered and their relationships shown. Advisory, and not applicable to narrow notation artefacts. |

### Provenance

- QC-01 to QC-09. S: Verify Requirements lists the characteristics of requirements and designs quality: atomic, complete, consistent, concise, feasible, unambiguous, testable, prioritized, understandable; acceptable requirements and designs exhibit many of these (7.2.4.1). I: BABOK says "many of", so we gate the load-bearing four (complete, consistent, unambiguous, testable) and keep the remaining five advisory.
- TR-01. S: Trace Requirements maintains backward and forward traceability and relationships among requirements and designs, using defined relationship types derive, depends, satisfy, and validate (5.1). I: none.
- TR-02. S: Traceability ensures the solution conforms to the requirements and helps detect missing or unsupported functionality (5.1). I: We read this as a no-orphan, full-coverage check.
- AP-01. S: Approve Requirements obtains stakeholder agreement and formal approval of requirements and designs (5.5). I: We gate on documented approval before construction.
- SP-01. S: Specify and Model Requirements represents requirements explicitly with enough detail to exhibit the quality characteristics (7.1.4). I: none.
- SP-02. S: Requirements are categorized per the requirements classification schema: business, stakeholder, solution (functional and non-functional), and transition (2.3, 7.1.4). I: none.
- VA-01. S: Validate Requirements ensures requirements and designs align to business requirements and support delivery of value (7.3). I: none.
- MA-01. S: Maintain Requirements keeps requirements accurate, consistent, named, and reusable (5.2). I: Advisory.
- SP-03. S: Model Requirements selects appropriate models for the audience, at an appropriate level of abstraction, preserving intent across viewpoints (7.1.4). I: Advisory.
- CC-01. S: The Business Analysis Core Concept Model has six equal, interrelated core concepts, none understood in isolation, used to gauge the quality and completeness of the work (2.1). I: We apply this to framing artefacts and keep it advisory, since a narrow notation artefact need not address all six.

## Not-testable obligations

| Obligation (paraphrase) | Locator | Why not testable on a finished artefact |
| --- | --- | --- |
| The six knowledge areas and their tasks (planning and monitoring, elicitation and collaboration, RLCM, strategy analysis, RADD, solution evaluation). | 3 to 8 | Describe the business analysis work and its techniques, not properties of a single delivered artefact. |
| The underlying competencies and the perspectives (agile, BI, IT, business architecture, business process management). | 9, 11 | Practitioner competencies and lenses, not artefact properties. |
| Techniques (the 50 techniques in Chapter 10). | 10 | Methods a practitioner may choose, not obligations an artefact must satisfy. |

## Coverage

BABOK constrains every artefact type (`*`) as the baseline. It provides 10 blocking checks (QC-01 to QC-04, TR-01, TR-02, AP-01, SP-01, SP-02, VA-01) and 8 advisory (QC-05 to QC-09, MA-01, SP-03, CC-01) that apply to business-analysis deliverables generally. Every artefact type therefore has at least these blocking checks, in addition to any artefact-specific source. No conflict: BABOK is the general layer, the specific sources govern notation and structure. Where a specific source and BABOK both speak to quality (for example `iso-29148` on requirement statements), they are consistent, with the specific source the more detailed.
