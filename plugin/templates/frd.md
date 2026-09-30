---
type: deliverable
domain: requirements
status: draft
version: 2.0.0
---

# Functional Requirements Document (FRD)

## Purpose

Specify in detail what the solution must do: the behaviours, business rules, and interactions that deliver the business and stakeholder requirements. The FRD sits below the BRD and PRD and above design. Every functional requirement is atomic, testable, and traceable, per the BABOK quality characteristics (Verify Requirements, 7.2). Graded by `evaluation/functional-requirements-rubric.md`.

This template is a superset. Its table-of-contents manifest, `templates/frd.toc.json`, marks which sections are core, standard, or extended and when each applies.

## Document Control

| Field | Value |
| --- | --- |
| Initiative | Supplier invoice approval |
| Business analyst | Omar Haddad |
| Product owner | Priya Shah |
| Version | 1.0.0 |
| Status | Baselined |
| Last updated | 2026-06-20 |

## Scope

State the solution or component this FRD covers, what is in and out, and the actors that interact with it.

| Actor | Type | Role in the solution |
| --- | --- | --- |
| Budget holder | Human | Approves or rejects invoices |
| ERP | System | Supplies matched invoices; receives approval status |

Out of scope: invoice capture, payment runs, and the supplier portal.

## Inputs

List what the requirements derive from: the BRD, stakeholder requirements, use cases, process models, and business rules.

Example: BRD 1.0.0 (SR-003, BRQ-001, CR-002); use cases UC-004 and UC-005; process model PM-002.

## Functional requirements

Each requirement describes one behaviour the solution performs. State it unambiguously, give it a priority and acceptance criteria, and trace it to its source and a test.

| ID | Functional requirement | Priority | Acceptance criteria | Source | Test |
| --- | --- | --- | --- | --- | --- |
| FR-021 | The system routes each matched invoice to the approver for its cost centre and amount band | Must | Given a matched invoice for cost centre 410 under 5,000 pounds, when matching completes, then it is routed to that cost centre's budget holder within 1 minute | SR-003 | TC-011 |
| FR-022 | The system sends a reminder when an invoice has waited 2 working days | Must | Given an invoice unactioned for 2 working days, then the approver receives one reminder; after 4 days it escalates to their manager | BRQ-001 | TC-014 |
| FR-023 | The system blocks approval by the person who raised the PO | Must | Given the approver raised the PO, when they try to approve, then approval is blocked and the next approver is notified | CR-002 | TC-040 |

## Business rules

Capture the rules that govern behaviour, separately from the requirements that enforce them, so a rule can change without rewriting every requirement.

| ID | Business rule | Type | Related requirements |
| --- | --- | --- | --- |
| BR-015 | Nobody approves an invoice for a PO they raised | Constraint | FR-023 |
| BR-016 | Invoices of 5,000 pounds or more also need the department head | Constraint | FR-021 |

## Use cases

Summarise the use cases that realise these requirements; detail them in their own specifications.

| Use case | Name | Primary actor | Requirements |
| --- | --- | --- | --- |
| UC-004 | Approve a supplier invoice | Budget holder | FR-021, FR-023 |

## Data requirements

Describe the key data the solution creates, reads, updates, or deletes. Reference a data dictionary where one exists.

| Entity | Key attributes | Relationships | Operation |
| --- | --- | --- | --- |
| Approval | Invoice ID, approver, decision, reason, timestamp | One invoice has many approvals | Create, read |

## Interface requirements

Describe the interfaces the solution needs at a functional level.

| ID | Interface | Type | Purpose | Data exchanged |
| --- | --- | --- | --- | --- |
| IF-001 | ERP invoice API | System | Receive matched invoices; post approval status | Invoice ID, status, approver |

## Priorities and agreement

Record how requirements were prioritised and who agreed the priorities.

Example: MoSCoW, agreed at workshop WS-02 on 2026-06-16 by the product owner, AP manager, and ERP lead.

## Assumptions

Record assumptions (flag for confirmation) and constraints on the solution.

| ID | Assumption or constraint | Effect if wrong |
| --- | --- | --- |
| A-001 | The ERP API supports real-time posting | FR-021 falls back to batch posting every 15 minutes |

## Risks

Risks to the requirements being right and deliverable.

| ID | Risk | Response | Owner |
| --- | --- | --- | --- |
| RSK-012 | Amount bands for BR-016 differ by department | Confirm bands with each department head before build | Omar Haddad |

## Dependencies

What the requirements rely on from other teams or systems, with dates.

| ID | Dependency | Owner | Needed by |
| --- | --- | --- | --- |
| DEP-001 | ERP invoice API available in test | Tom Reyes | 2026-07-15 |

## Feasibility check

Record which requirements were checked for feasibility, and any flagged for investigation.

| Requirement | Checked with | Result |
| --- | --- | --- |
| FR-021 | ERP lead | Feasible with the workflow module |

## User interface requirements

For solutions with significant user interaction, state the functional needs of each screen, without design.

| Screen | Must show | Must allow |
| --- | --- | --- |
| Invoice approval | Supplier, amount, PO, receipt, match result | Approve; reject with reason |

## Reporting requirements

For solutions that must produce reports, state each report's content and audience.

| ID | Report | Content | Audience |
| --- | --- | --- | --- |
| RPT-001 | Approval times | Average days by department, weekly | Finance leadership |

## Outputs

A baselined set of atomic, testable functional requirements with separated business rules, data and interface needs, and traces to sources and tests, ready for design and test planning.

## Quality gate

Every functional requirement is atomic, complete, consistent, concise, feasible, unambiguous, testable, prioritised, and understandable, with acceptance criteria that cover the main path, alternate flows, and exceptions.

## Review criteria

- Each requirement states a behaviour, not a quality or a design.
- Each is atomic and understandable on its own.
- Inputs, outputs, flows, and rules are present for each capability.
- Each admits one interpretation.
- Each has acceptance criteria.
- Requirements are consistent with each other and the need.
- Each traces to a source and a test.
- Requirements are prioritised with stakeholder agreement.
- Each is feasible, or flagged for investigation.

## BABOK anchor

Requirements Classification Schema (2.3); Specify and Model Requirements (7.1); Verify Requirements (7.2); Use Cases and Scenarios (10.47); Business Rules Analysis (10.9). Validate with the quality skill.

## House style

Write the narrative with the natural-prose-editor pass and no em dashes. See `docs/methodology/editorial-style.md`.
