---
type: deliverable
domain: requirements
status: draft
version: 2.0.0
---

# Use Case Specification

## Purpose

Describe how an actor interacts with a solution to achieve a goal, including the main success scenario and the alternate and exception paths, precisely enough that requirements and tests can be built from it. Based on BABOK Use Cases and Scenarios (10.47). Graded by `evaluation/use-case-rubric.md`.

This template is a superset. Its table-of-contents manifest, `templates/use-case-specification.toc.json`, marks which sections are core, standard, or extended and when each applies.

## Document Control

| Field | Value |
| --- | --- |
| Use case ID | UC-004 |
| Name | Approve a supplier invoice |
| Business analyst | Omar Haddad |
| Version | 1.1.0 |
| Status | Baselined |
| Last updated | 2026-06-05 |

## Scope

State the system boundary the use case sits within and its level (summary, user goal, or subfunction), so it is clear what the solution does and what the actor does.

Example: system boundary is the invoice approval workflow; level is user goal. Invoice capture and payment runs are outside the boundary.

## Inputs

List what the use case is built from: stakeholder requirements, process models, business rules, and confirmed elicitation results.

Example: stakeholder requirement SR-003 (approvers act on invoices without email); process model PM-002; business rules BR-012 and BR-015.

## Summary

State the primary actor, goal, trigger, preconditions, and success guarantee.

| Field | Value |
| --- | --- |
| Primary actor | Budget holder |
| Goal | Approve or reject an invoice routed to them |
| Trigger | An invoice that passed matching is routed to the budget holder |
| Preconditions | The approver is signed in; the invoice status is Awaiting approval |
| Success guarantee | The decision, approver, and time are recorded, and the status is posted to the ERP |
| Stakeholders and interests | AP clerk: invoice not stuck; supplier: paid on time; auditor: segregation of duties kept |

## Main success scenario

Number the steps of the normal path. Each step is one actor action or one system response.

| Step | Actor action or system response |
| --- | --- |
| 1 | The system notifies the approver that an invoice awaits approval |
| 2 | The approver opens the invoice |
| 3 | The system shows supplier, amount, PO, receipt, cost centre, and match result |
| 4 | The approver approves the invoice |
| 5 | The system records the decision and posts Approved to the ERP |

## Alternate flows

Paths that still reach the goal by a different route.

| ID | At step | Condition | Steps |
| --- | --- | --- | --- |
| A1 | 4 | The approver rejects the invoice | Approver enters a reason; system records Rejected and returns the invoice to AP |
| A2 | 1 | The approver is on leave with a delegate set | System routes to the delegate, who continues from step 2 |

## Exceptions

Paths where the goal cannot be reached, and how the system responds.

| ID | At step | Condition | Response |
| --- | --- | --- | --- |
| E1 | 4 | The approver raised the purchase order | System blocks approval and routes to the next approver (BR-015) |
| E2 | 5 | ERP posting fails | System keeps the decision, flags the invoice, and retries every 15 minutes; AP is alerted after 3 failures |

## Business rules and data

List the business rules that govern this use case and the key data it reads or writes.

| ID | Rule or data | Use |
| --- | --- | --- |
| BR-015 | Nobody approves an invoice for a PO they raised | Exception E1 |
| Invoice status | Read at precondition; written at step 5 | ERP invoice record |

## Acceptance criteria

Pass conditions in Given, When, Then form, covering main, alternate, and exception flows.

| ID | Flow | Criterion |
| --- | --- | --- |
| AC-001 | Main | Given an invoice awaiting approval, when the approver approves, then the ERP shows Approved within 1 minute |
| AC-002 | E1 | Given the approver raised the PO, when they try to approve, then approval is blocked and the next approver is notified |

## Traceability

Link the use case to the requirements it realises and the tests that verify it.

| Use case element | Requirement | Test |
| --- | --- | --- |
| Main success scenario | SR-003, FR-021 | TC-011 |
| E1 | BR-015, CR-002 | TC-040 |

## Assumptions

Record what the use case takes as true, with the effect if wrong.

| ID | Assumption | Effect if wrong |
| --- | --- | --- |
| A-071 | Every approver has a delegate or none; no chains of delegates | A2 needs a loop guard |

## Risks

Risks that the use case is incomplete or misread.

| Risk | Response | Owner |
| --- | --- | --- |
| Edge cases from EU entities missed | Review with the EU AP lead before release 2 | Omar Haddad |

## Use case diagram

For systems with several related use cases, show the actors and use cases inside the system boundary.

| Actor | Use cases |
| --- | --- |
| Budget holder | UC-004 Approve invoice; UC-005 Set delegate |

## Non-functional notes

Where a use case carries specific quality needs, reference them rather than restating them.

| Step | Non-functional requirement |
| --- | --- |
| 3 | NFR-002 page load under 2 seconds |

## Outputs

A baselined use case with numbered flows, business rules, acceptance criteria, and traces, ready to derive functional requirements and test cases.

## Review criteria

- The primary actor and the goal are stated.
- Preconditions and the trigger are stated.
- The main success scenario is complete and ordered.
- Alternate flows are described.
- Exception flows are described with the system response.
- The success guarantee is stated.
- Acceptance criteria make the use case testable.
- The use case traces to requirements and tests.

## BABOK anchor

Use Cases and Scenarios (10.47); Specify and Model Requirements (7.1); Acceptance and Evaluation Criteria (10.1). Owned by the requirements skill; feeds the FRD and traceability.

## House style

Write the narrative with the natural-prose-editor pass and no em dashes. See `docs/methodology/editorial-style.md`.
