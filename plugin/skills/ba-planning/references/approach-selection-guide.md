# Approach Selection Guide

How to choose and justify a business analysis approach (predictive, adaptive, or hybrid) and tailor it to the initiative, so the analysis is neither heavier nor lighter than the change needs. This guide expands Plan Business Analysis Approach (3.1) in BABOK, and the Agile Perspective (11.1). Adaptive practice follows the Scrum Guide (`scrum-guide-2020`); governance choices follow COBIT 2019 (`cobit-2019`).

## What the approach decides

BABOK 3.1 asks the analyst to decide, and record, how the business analysis work itself will be done:

- the planning approach: predictive, adaptive, or a mix;
- the formality and level of detail of deliverables;
- which business analysis activities are needed, and in what order;
- when the work happens relative to delivery;
- how complexity and risk shape the amount of analysis;
- who must accept the approach.

The approach is a choice with consequences, so it needs reasons a stakeholder could challenge.

## The two ends of the spectrum

| Aspect | Predictive | Adaptive |
| --- | --- | --- |
| When requirements are defined | Mostly before build | Continuously, just before each increment |
| Deliverables | Formal documents, baselined and approved | Lighter, evolving artefacts: backlog, stories, models |
| Change | Controlled against a baseline | Expected and absorbed through reprioritisation |
| Stakeholder involvement | Concentrated at requirements and acceptance | Continuous, every iteration |
| Best when | Requirements are stable, stakes of error are high, regulation demands evidence | The need is uncertain, feedback is cheap, and value comes from learning |

Most real initiatives are hybrid: some things must be decided and baselined early, others are better discovered.

## Deciding factors

Score each factor for the initiative, then choose where each part of the work sits:

| Factor | Pushes toward predictive | Pushes toward adaptive |
| --- | --- | --- |
| Clarity of the need | Well understood and stable | Uncertain, or likely to change with learning |
| Cost of a late change | High: contracts, integrations, hardware, regulation | Low: configurable software, internal users |
| Regulatory or audit evidence | Required, with approvals and traceability | Not required beyond good practice |
| Stakeholder availability | Limited, needs scheduled sessions | Available to review every iteration |
| Team and delivery model | Fixed scope contract, phased delivery | Stable team working in iterations |
| Size and number of interfaces | Many parties and dependencies | Few, within one team's control |

The factors apply to parts of the work, not only to the whole: the interface to a finance system may need a baselined specification while the user experience on top of it evolves.

## Tailoring formality

Formality follows risk and audience, not habit. Formal, approved deliverables are justified where decisions are expensive to reverse, where approval is a control, or where someone will rely on the document after the team has gone. Everywhere else, prefer the lightest artefact that does the job. The templates in `templates/` are supersets, and their manifests (`templates/*.toc.json`) mark which sections apply at each level of formality, so tailoring is a documented choice rather than an omission.

## Governance choices within the approach

The approach must fit the governance around it (3.3): who approves requirements and changes, and how. COBIT's view is that governance is designed for the context from components that work together: processes, structures, information, and people. Match the approval path to the approach: a predictive part needs formal approval and a baseline; an adaptive part needs a product owner with authority to reprioritise and a definition of done.

## Adaptive practice

Where work is adaptive, align the analysis with the delivery rhythm. The Scrum Guide gives the events: refine the product backlog continuously, bring ready items to sprint planning, show the increment at the sprint review, and improve how the team works at the retrospective. The analyst's work is continuous refinement: keeping the top of the backlog understood, sized, and testable.

## Recording and accepting the approach

Write the approach down in `templates/business-analysis-approach.md`: the choice for each part of the work, the reasons from the factor table, the deliverables and their formality, the activities and their timing, and who accepted it. Revisit it when a deciding factor changes, for example when a regulator becomes involved or a key stakeholder becomes unavailable.

## Common failures

- An approach chosen by organisational habit, with no stated reasons.
- One approach forced on every part of the work.
- Formal documents produced for work nobody will rely on.
- Adaptive work with no one authorised to prioritise.
- An approach never revisited after the facts changed.

## Worked example

Supplier invoice approval, deciding the approach.

Factor scores:

| Factor | Finding | Leaning |
| --- | --- | --- |
| Clarity of the need | Clear: approval is slow and why is known | Predictive |
| Cost of late change: ERP integration | High: vendor work, month-end risk | Predictive |
| Cost of late change: approver screens | Low: configurable | Adaptive |
| Regulatory evidence | Segregation of duties is audited | Predictive for the control |
| Stakeholder availability | Budget holders busy; AP available weekly | Mixed |

Decision: hybrid. The integration, the control, and the routing rules are specified and baselined in the BRD and FRD, approved by the sponsor. The approver experience is refined in two-week iterations with prototypes, prioritised by the product owner. Accepted by the sponsor and the product owner on 2 May 2026, and recorded in the business analysis approach.

## Sources

- `babok-3.0-2015`: Plan Business Analysis Approach (3.1), Plan Business Analysis Governance (3.3), and the Agile Perspective (11.1).
- `scrum-guide-2020`: backlog refinement, sprint events, and the definition of done for the adaptive parts.
- `cobit-2019`: designing governance for the context from components that work together.
