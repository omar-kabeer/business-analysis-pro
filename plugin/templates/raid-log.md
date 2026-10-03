---
type: deliverable
domain: governance
status: draft
version: 2.0.0
---

# RAID Log

> **How to use this template.** Filled rows and "Example" lines illustrate one scenario so the expected depth is clear. Replace them with the facts of the work at hand: never carry example names, figures, or IDs into a real document, and say plainly when a fact is not yet known. Include every other section by default, and leave one out only when the user asks. Include these sections only when their condition applies or the user asks for them: Top items for the steering group (written for executive readers, or high risk); Regulatory and audit trail (formal governance, or written for regulators, or regulated work). The full rules are in `templates/raid-log.toc.json`.

## Purpose

Track the four things that most often derail delivery in one place: Risks, Assumptions, Issues, and Dependencies. The log keeps each item visible, owned, dated, and acted on, so nothing important is lost between meetings. It is the working form of Item Tracking (10.26) and feeds Risk Analysis and Management (10.38). Graded by `evaluation/raid-log-rubric.md`.

This template is a superset. Its table-of-contents manifest, `templates/raid-log.toc.json`, marks which sections are core, standard, or extended and when the extended ones apply, so a light internal log and a regulated programme log come from the same source.

## Document Control

| Field | Value |
| --- | --- |
| Initiative | Supplier invoice approval |
| Log owner | Priya Shah, delivery lead |
| Review cadence | Weekly, Tuesday stand-up |
| Version | 1.3.0 |
| Status | Active |
| Last reviewed | 2026-06-16 |

## Scope

State what the log covers and what it does not. Name the initiative, the workstreams or teams included, and any items tracked elsewhere (for example detailed risk scoring in the risk register, or defects in the test tool), so no item is tracked twice or not at all.

Example: covers the invoice approval release 1 workstreams (process, workflow tool, ERP integration, change and training). Detailed quantitative risk scoring lives in `risk-register`; defects live in the test management tool.

## Inputs

List where items come from: the plan and change strategy, elicitation results, the stakeholder engagement approach, status reports, the decision log, test and defect reports, and supplier or vendor updates. An item without a known source is harder to verify and close.

## How to use this log

Classify each item before writing it. A **risk** is an uncertain future event that would affect the outcome. An **assumption** is something taken as true without proof. An **issue** has already happened and needs action now. A **dependency** is reliance on another team, system, supplier, or event.

Give every item one owner who can act on it (a person, not a team), a date, and a status. Review the whole log at the stated cadence. Close items by marking them closed with the outcome, never by deleting them. When an assumption proves false, close it and raise a risk or an issue in its place, linked to the original.

## Risks

Uncertain future events that could affect the outcome. Write each as cause, event, and effect. Rate probability and impact, choose a response, and name the trigger that would turn the risk into an issue. Carry high-scoring risks into the risk register for detailed scoring.

| ID | Risk (cause, event, effect) | Probability | Impact | Response | Trigger | Owner | Due | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| R-001 | Because approvers are not trained on the new tool, they may keep approving by email, so invoices bypass the workflow and the cycle-time target is missed | Medium | High | Reduce: role-based training and email approvals switched off at go-live | More than 10 percent of approvals by email in pilot week 1 | Priya Shah | 2026-07-01 | Open |

Probability and impact use High, Medium, or Low. Response is Avoid, Reduce, Transfer, or Accept.

## Assumptions

Things taken as true that the plan depends on. Record why each is believed, the impact if it proves wrong, who can confirm it, and by when.

| ID | Assumption | Basis | Impact if wrong | Confirmed by | Confirm by | Validation status |
| --- | --- | --- | --- | --- | --- | --- |
| A-001 | The ERP API supports posting approval status in real time | Vendor documentation v12 | Integration redesign, about 4 weeks | Tom Reyes, ERP architect | 2026-06-20 | Unconfirmed |

Validation status is Unconfirmed, Confirmed, or Invalidated. An invalidated assumption links to the risk or issue raised from it.

## Issues

Problems that have already happened and need action now. State the impact, the action being taken, and when it will be resolved.

| ID | Issue | Impact | Action | Owner | Target date | Status |
| --- | --- | --- | --- | --- | --- | --- |
| I-001 | Test environment ERP data is 6 months old, so three-way match tests fail on closed purchase orders | UAT start at risk by one week | Refresh test data from the June production snapshot | Tom Reyes | 2026-06-18 | In progress |

## Dependencies

Reliance on another team, system, supplier, or event. State the direction, the other party, what is needed, and when.

| ID | Dependency | Direction | Other party | Needed by | Status |
| --- | --- | --- | --- | --- | --- |
| D-001 | Single sign-on configured for the workflow tool | We depend on them | Identity team | 2026-06-25 | At risk |

Direction is "We depend on them" or "They depend on us". A dependency at risk of missing its date is also raised as a risk.

## Review and escalation

State the review cadence, who attends, and the escalation rule. For example, any item that is overdue, or any risk rated High and High, is escalated to the steering group within two working days.

| Review date | Reviewed by | Items added | Items closed | Escalated |
| --- | --- | --- | --- | --- |
| 2026-06-16 | Priya Shah, Tom Reyes, Ana Costa | R-004, I-002 | A-003 | D-001 to steering |

## Links to other artefacts

Record where RAID items drive or depend on other governed artefacts, so the log feeds governance rather than sitting apart from it.

| Item | Linked artefact | Relationship |
| --- | --- | --- |
| R-001 | `risk-register` RR-012 | Detailed scoring |
| A-001 | `decision-log` DEC-007 | Decision rests on this assumption |

## Closed items

Keep closed items here, with the outcome and the closing date, rather than deleting them.

| ID | Type | Outcome | Closed on |
| --- | --- | --- | --- |
| A-003 | Assumption | Confirmed: finance holds the approval matrix and signed it off | 2026-06-12 |

## Top items for the steering group

For an executive audience, summarise the three to five items most likely to change the outcome, each with its owner and the decision or support needed.

| ID | Why it matters | Owner | Decision or support needed |
| --- | --- | --- | --- |
| D-001 | Go-live slips one week per week of delay | Identity team lead | Prioritise SSO over the HR portal work |

## Regulatory and audit trail

For regulated or formally governed work, record which items relate to a regulatory obligation or audit finding, and keep the evidence reference, so the log can show how compliance risks were handled.

| Item | Obligation or finding | Evidence reference |
| --- | --- | --- |
| R-003 | Segregation of duties in approvals (FIN-POL-07 section 3) | Control test CT-14 |

## Outputs

The maintained log, the escalations raised from it, the items carried into the risk register and decision log, and the top items reported in status reports.

## Review criteria

- Every item is in the right category, has one named owner, a date, and a status.
- Risks are written as cause, event, and effect, with a response and a trigger.
- Assumptions carry their basis, impact if wrong, who confirms them, and by when.
- Issues state an action and a target date; dependencies state direction, the other party, and the date needed.
- The log was reviewed at its stated cadence, and closed items are kept with their outcome.
- Items link to the risks, decisions, and other artefacts they affect.

## Practice anchor

Item Tracking (10.26); Risk Analysis and Management (10.38); Plan Business Analysis Governance (3.3). Pairs with `risk-register` and `decision-log`.

## House style

Write any narrative with the natural-prose-editor pass and no em dashes. See `docs/methodology/editorial-style.md`.
