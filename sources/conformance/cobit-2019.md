# Conformance checks: cobit-2019

Source id: `cobit-2019`
Standard: COBIT 2019, a framework for the governance and management of enterprise information and technology.
Edition held: COBIT 2019 documentation set, ISACA, copyright 2018. Eight files: executive summary, overview, differences from COBIT 5, FAQ, laminate, an objectives/practices/activities workbook, a management-awareness diagnostic, and a RACI-by-role workbook.
Publisher: ISACA.
Authority: normative.
Identity: confirmed from the file set on 2026-08-07. COBIT 2019, ISACA. The concepts below are drawn from the overview and laminate; the workbooks are treated as reference data, not prose to paraphrase.
Licence: ISACA, free to obtain, no redistribution; paraphrase only.
Modality note: COBIT 2019 is a governance framework. Its governance system principles are stated with "should", and it is a design-and-tailoring framework rather than a certifiable "shall" standard. The blocking severities below are our house gate that a governance or change artefact evidences the named COBIT element.
Artefact types constrained: `governance-approach`, `change-assessment`.
Owning skills: `governance` (governance-approach), `change-control` (change-assessment).
Locator style: COBIT 2019, `<objective code>` or the named principle.

## How to read this file

Three layers, kept separate: Source (S) with locator, labelled Inference (I), and the Check (C). Severity here reflects a house-gate decision (see the modality note).

## Checks: governance-approach

Applies to a governance approach or governance system design for information and technology.

| Check id | Question (yes = pass) | Severity | Locator | How the reviewer confirms |
| --- | --- | --- | --- | --- |
| COBIT-GA-01 | Does the approach clearly distinguish governance activities and structures from management ones (governance in the EDM domain, management in APO, BAI, DSS, MEA)? | blocking | Principle 4; Core Model domains | Confirm governance and management are separated. An approach that blurs them fails. |
| COBIT-GA-02 | Is the approach built from the governance system components (processes; organizational structures; principles, policies and frameworks; information; culture, ethics and behaviour; people, skills and competencies; services, infrastructure and applications), working together? | blocking | Principle 2; Components of a Governance System | Confirm the component types are addressed, not processes alone. Missing whole component types fails. |
| COBIT-GA-03 | Does the approach identify the governance and management objectives it covers, each relating to a process in the Core Model (EDM, APO, BAI, DSS, MEA)? | blocking | Governance and Management Objectives | Confirm named objectives with their domain. An approach naming no objectives fails. |
| COBIT-GA-04 | Is the governance system tailored to the enterprise using design factors as parameters? | blocking | Principle 5; Design Factors | Confirm design factors were applied to prioritise and customise the system. An untailored, generic copy fails. |
| COBIT-GA-05 | Does the approach cover the enterprise end to end, not only the IT function? | blocking | Principle 6 | Confirm scope spans all technology and information processing, not just IT. An IT-only scope fails. |
| COBIT-GA-06 | Is the governance system treated as dynamic, revisited when design factors change? | advisory | Principle 3 | Look for a review trigger on design-factor change. Advisory: hard to see in a static artefact. |
| COBIT-GA-07 | Does the approach trace to stakeholder value through the goals cascade (enterprise goals, alignment goals)? | advisory | Principle 1; Goals Cascade | Look for a line from objectives to enterprise goals. Advisory. |

## Checks: change-assessment

Applies to an IT change assessment.

| Check id | Question (yes = pass) | Severity | Locator | How the reviewer confirms |
| --- | --- | --- | --- | --- |
| COBIT-CA-01 | Is the change assessed against the relevant COBIT change objective (BAI06 Managed IT Changes, or BAI07 Managed IT Change Acceptance and Transitioning)? | blocking | BAI06, BAI07 | Confirm the assessment references the change management objective and its practices. An assessment untethered from BAI06/BAI07 fails. |
| COBIT-CA-02 | Does the assessment evaluate the change's impact and the governance components it affects (processes, structures, information, services, and the rest)? | blocking | BAI06; Components | Confirm an impact assessment across the affected components. A change with no impact analysis fails. |
| COBIT-CA-03 | Is the change prioritised and formally authorised before implementation? | blocking | BAI06 | Confirm a recorded authorisation and priority. An unauthorised change fails. |
| COBIT-CA-04 | Are emergency changes handled through a defined route with post-implementation review? | advisory | BAI06 | Check emergency-change handling where applicable. Advisory. |
| COBIT-CA-05 | Is the organizational change impact of the change considered? | advisory | BAI05 | Look for people and organizational impact. Advisory. |

### Provenance, governance-approach

- GA-01. S: A governance system should clearly distinguish between governance and management activities and structures; governance objectives sit in the EDM domain, management objectives in APO, BAI, DSS, MEA (Principle 4; Core Model). I: We gate on that separation.
- GA-02. S: A governance system is built from a number of components that work together holistically; the component types are processes, organizational structures, principles/policies/frameworks, information, culture/ethics/behaviour, people/skills/competencies, and services/infrastructure/applications (Principle 2; Components of a Governance System). I: We gate on the component types being addressed.
- GA-03. S: A number of governance and management objectives should be achieved; each relates to one process and related components; they are grouped into five domains (Governance and Management Objectives). I: We gate on named objectives with their domain.
- GA-04. S: A governance system should be tailored to the enterprise's needs, using design factors as parameters to customise and prioritise components (Principle 5; Design Factors). I: We gate on design factors being applied.
- GA-05. S: A governance system should cover the enterprise end to end, focusing on all technology and information processing, not only the IT function (Principle 6). I: none.
- GA-06. S: A governance system should be dynamic; when design factors change, the impact on the system must be considered (Principle 3). I: Advisory, hard to see statically.
- GA-07. S: Each enterprise needs a governance system to satisfy stakeholder needs and generate value; enterprise and alignment goals connect through the goals cascade (Principle 1; Goals Cascade). I: Advisory trace.

### Provenance, change-assessment

- CA-01. S: The Core Model contains the change management objectives BAI06 Managed IT Changes and BAI07 Managed IT Change Acceptance and Transitioning (laminate; Core Model). I: We gate a change assessment on referencing the applicable change objective. Practice detail is in the objectives workbook, treated as reference data, not paraphrased here.
- CA-02. S: A governance or management objective relates to one process and a series of related components (Governance and Management Objectives). I: We read a COBIT-aligned change assessment as one that examines impact across the related components.
- CA-03. S: BAI06 Managed IT Changes covers assessing, prioritising, and authorising changes (BAI06). I: We gate on recorded prioritisation and authorisation, citing the objective; the practice text is in the workbook and not reproduced.
- CA-04. S: BAI06 covers emergency change handling (BAI06). I: Advisory.
- CA-05. S: BAI05 Managed Organizational Change addresses the people and organizational side of change (BAI05). I: Advisory.

## Not-testable obligations

| Obligation (paraphrase) | Locator | Why not testable on a finished artefact |
| --- | --- | --- |
| The three governance framework principles (conceptual model, open and flexible, aligned to major standards). | Governance Framework Principles | Constrain how a governance framework is built, not a delivered governance approach or change assessment. |
| The detailed practices, activities, capability levels, and RACI in the objectives and RACI workbooks. | objectives and RACI workbooks | Reference data used to build a governance system; not paraphrased, and their per-practice application is verified in operation, not on the artefact. |
| The COBIT implementation life cycle and performance management (capability and maturity levels). | Design Guide, Implementation Guide | Constrain the improvement programme over time, not the artefact under review. |

## Coverage

- `governance-approach`: 5 blocking checks (GA-01 to GA-05), 2 advisory (GA-06, GA-07).
- `change-assessment`: 3 blocking checks (CA-01 to CA-03), 2 advisory (CA-04, CA-05).

Both constrained artefact types carry blocking checks (forward cross-check satisfied). Every check maps to a declared artefact type, no orphans. No other normative source constrains these two types, so no conflict.
