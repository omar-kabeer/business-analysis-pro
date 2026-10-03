---
type: deliverable
domain: business-analysis
status: draft
version: 2.0.0
---

# Business Requirements Document

> **How to use this template.** Filled rows and "Example" lines illustrate one scenario so the expected depth is clear. Replace them with the facts of the work at hand: never carry example names, figures, or IDs into a real document, and say plainly when a fact is not yet known. Include every other section by default, and leave one out only when the user asks. Include these sections only when their condition applies or the user asks for them: Glossary (formal governance, or written for executive readers or customers); Regulatory Impact Assessment (regulated work). The full rules are in `templates/brd.toc.json`.

## Purpose

State the business need, the outcome the business wants, and the requirements a solution must meet, so the sponsor can approve scope and delivery can begin. The BRD follows the Requirements Classification Schema (business, stakeholder, solution, and transition requirements) and the quality characteristics of Verify Requirements (7.2). Graded by `evaluation/brd-rubric.md`.

This template is a superset. Its table-of-contents manifest, `templates/brd.toc.json`, marks which sections are core, standard, or extended and when each applies.

## Document Control

| Field | Value |
| --- | --- |
| Initiative | Supplier invoice approval |
| Business owner | Finance Director |
| Product owner | Priya Shah |
| Business analyst | Omar Haddad |
| Version | 1.0.0 |
| Status | For approval |

## Executive Summary

Summarise the business need, the desired outcome, the recommendation, and the decision required, on half a page.

Example: supplier invoices take 14 days to approve, so 38 percent are paid late and about 60,000 pounds a year of discount is lost. We recommend routing approvals by rule in the ERP's workflow module, targeting 5-day approval and 95 percent on-terms payment. The sponsor is asked to approve release 1 scope and requirements.

## Business Context

Describe the current situation, the problem or opportunity, strategic alignment, and drivers for change.

Example: two key suppliers put the account on hold in April. Finance strategy goal 2 is to be a customer suppliers want to work with.

## Inputs

List the sources the requirements come from, so each can be traced.

| ID | Input | Date |
| --- | --- | --- |
| IN-001 | Current state assessment 1.1.0 | 2026-05-20 |
| IN-002 | Elicitation results INT-001 to INT-006, workshop WS-01 | May 2026 |

## Objectives and Success Measures

State each objective as an outcome with a measure, baseline, and target.

| ID | Objective | Success measure | Baseline | Target |
| --- | --- | --- | --- | --- |
| OBJ-001 | Suppliers are approved for payment quickly | Average days to approval | 14 days | 5 days by December 2026 |
| OBJ-002 | Suppliers are paid on agreed terms | Share paid within terms | 62 percent | 95 percent by March 2027 |

## Scope

State what is in and out, so reviewers judge the requirements against the right boundary.

| In scope | Out of scope |
| --- | --- |
| UK invoice approval routing, exceptions, ERP posting | Payroll, expenses, EU entities, supplier portal |

## Stakeholders

List who is affected or decides, with their interest and decision rights.

| Stakeholder | Role | Interest or need | Decision rights |
| --- | --- | --- | --- |
| Finance Director | Sponsor | On-time payment | Approves scope and sign-off |
| Budget holders | Approvers | Fewer interruptions | Consulted |

## Current State

Describe current processes, systems, policies, pain points, and constraints, or reference the current state assessment.

Example: approvals by email with no routing rule; exceptions chased by phone; see IN-001.

## Future State

Describe the desired capability, process, and experience.

Example: every matched invoice is routed by rule to the right approver, with reminders and escalation, and the decision posts to the ERP.

## Business Requirements

Requirements the business needs met, each traced to an objective.

| ID | Requirement | Rationale | Priority | Source |
| --- | --- | --- | --- | --- |
| BRQ-001 | Invoices are approved within 5 working days of receipt | Late approval causes late payment | Must | OBJ-001 |

## Stakeholder Requirements

Needs of specific stakeholders that bridge business requirements and the solution.

| ID | Requirement | Stakeholder | Priority | Source |
| --- | --- | --- | --- | --- |
| SR-003 | Approvers can act on invoices without using email | Budget holders | Must | INT-004 |

## Functional Requirements

Each is atomic and testable, with acceptance criteria.

| ID | Requirement | Acceptance criteria | Priority | Source |
| --- | --- | --- | --- | --- |
| FR-021 | The system routes each matched invoice to the approver for its cost centre and amount band | Given a matched invoice for cost centre 410 under 5,000 pounds, when matching completes, then it is routed to the cost centre 410 budget holder within 1 minute | Must | SR-003 |

## Non-Functional Requirements

Qualities the solution must have, each quantified so it can be tested.

| ID | Requirement | Quality attribute | Acceptance criteria | Priority |
| --- | --- | --- | --- | --- |
| NFR-002 | Invoice pages load quickly under peak load | Performance | 95th percentile under 2 seconds at 150 concurrent users | Must |

## Transition Requirements

What is needed to move from the current state to the future state.

| ID | Requirement | Owner |
| --- | --- | --- |
| TR-001 | Invoices in flight at go-live are loaded into the workflow with their current approver | Tom Reyes |

## Data and Reporting Requirements

Data the solution must hold and the reports the business needs from it.

| ID | Requirement | Data or report | Acceptance criteria | Source |
| --- | --- | --- | --- | --- |
| DR-001 | Weekly approval time report by department | Approval cycle times | Report matches ERP log totals | OBJ-001 |

## Compliance and Control Requirements

Policy and regulatory needs, with the evidence each requires and its owner.

| ID | Requirement | Policy or regulation | Evidence needed | Owner |
| --- | --- | --- | --- | --- |
| CR-002 | Nobody approves an invoice for a PO they raised | FIN-POL-07 segregation of duties | UAT cases TC-040 to TC-044 | Financial Controller |

## Business Rules

Rules the solution must enforce, kept apart from the requirements so they can change on their own.

| ID | Rule | Applies to | Source |
| --- | --- | --- | --- |
| BR-012 | Invoices within 2 percent of PO price match automatically | Matching | FIN-POL-03 |

## Assumptions

What the requirements take as true, each with its impact if false and an owner.

| ID | Assumption | Impact if false | Owner |
| --- | --- | --- | --- |
| A-001 | The ERP API supports real-time posting | FR-021 posting moves to release 2 | Tom Reyes |

## Dependencies

What the initiative relies on from other teams or systems, with dates.

| ID | Dependency | Owner | Required by |
| --- | --- | --- | --- |
| DEP-002 | Single sign-on from the identity team | Identity lead | 2026-07-15 |

## Risks

Key risks with impact, mitigation, and an owner.

| ID | Description | Impact | Mitigation or action | Owner |
| --- | --- | --- | --- | --- |
| RSK-001 | Approvers keep approving by email, so the target is missed | High | Disable email approval at go-live | Financial Controller |

## Open Questions

Every open question has an owner and a date.

| ID | Question | Owner | Needed by |
| --- | --- | --- | --- |
| Q-006 | Should suppliers see rejected invoices? | Priya Shah | 2026-07-01 |

## Traceability

Link each requirement to its objective, source, and test.

| Requirement | Objective | Source | Test |
| --- | --- | --- | --- |
| FR-021 | OBJ-001 | SR-003 | TC-011 |
| CR-002 | OBJ-002 | FIN-POL-07 | TC-040 |

## Glossary

For documents read across departments, define terms that could be misread.

| Term | Definition |
| --- | --- |
| Three-way match | Invoice, purchase order, and goods receipt agree within tolerance |

## Regulatory Impact Assessment

For regulated initiatives, summarise the obligations affected and the assessment performed.

| Obligation | Impact | Assessment |
| --- | --- | --- |
| Prompt payment reporting | Positive: better published figures | Reviewed by Financial Controller |

## Outputs

An approved BRD whose requirements, traced to objectives and sources, form the baseline for solution design, the FRD, and acceptance testing.

## Review criteria

- Every section is present and populated, from context to sign-off.
- The executive summary states the need, recommendation, and decision; a reader can act unaided.
- Objectives are outcomes, each with a measure and target.
- Requirements are atomic, unambiguous, and testable, with acceptance criteria and quantified non-functional requirements.
- Requirements trace to objectives and sources.
- Assumptions and dependencies are explicit, owned, and carry an impact.
- Key risks have an impact and a mitigation.
- Policy and regulatory needs are captured with evidence and an owner.
- The decision required and the approvers are named.

## Sign-Off

Name the approvers and record their decisions.

| Name | Role | Decision | Date |
| --- | --- | --- | --- |
| Finance Director | Sponsor | Approve | 2026-06-12 |

## Practice anchor

Requirements Classification Schema (2.3); Specify and Model Requirements (7.1); Verify Requirements (7.2); Approve Requirements (5.5); Define Future State (6.2). Owned by the requirements skill.

## House style

Write the narrative with the natural-prose-editor pass and no em dashes. See `docs/methodology/editorial-style.md`.
