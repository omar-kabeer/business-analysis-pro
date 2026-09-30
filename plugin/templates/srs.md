---
type: deliverable
domain: requirements
status: draft
version: 2.0.0
---

# Software Requirements Specification (SRS)

## Purpose

Provide a complete, formal specification of a software solution: what it must do, the qualities it must have, and the constraints it operates under. The section order follows ISO/IEC/IEEE 29148 (and the legacy IEEE 830 outline) and the BABOK Requirements Classification Schema. Every requirement is uniquely identified, atomic, testable, and traced to the stakeholder requirement it satisfies. Graded by `evaluation/solution-requirements-rubric.md`.

This template is a superset. Its table-of-contents manifest, `templates/srs.toc.json`, marks which sections are core, standard, or extended and when each applies.

## Document Control

| Field | Value |
| --- | --- |
| System | Invoice approval workflow |
| Business analyst | Omar Haddad |
| Technical lead | Tom Reyes |
| Version | 1.0.0 |
| Status | Baselined |
| Last updated | 2026-06-24 |

## Scope

Name the software product, what it will and will not do, and the objectives it serves.

Example: the invoice approval workflow within the ERP. It routes, reminds, escalates, and records approvals. It does not capture invoices or run payments. It serves OBJ-001 (5-day approval) and OBJ-002 (95 percent paid on terms).

## Inputs

List the documents this SRS depends on.

| ID | Document | Version |
| --- | --- | --- |
| IN-021 | BRD | 1.0.0 |
| IN-022 | NFR specification | 1.1.0 |
| IN-023 | ERP invoice API specification | 3.2 |

## Definitions

Define terms that a reader could misinterpret.

| Term | Definition |
| --- | --- |
| Amount band | A range of invoice values that sets which approvers are needed |

## Product perspective

Describe how the system fits with other systems, with a context view of external actors and interfaces.

Example: the workflow sits inside the ERP, receives matched invoices from the matching engine, and posts status to the ledger. Approvers reach it through single sign-on.

## User characteristics

Describe the classes of users and the differences that matter.

| User class | Frequency | Expertise | Privileges |
| --- | --- | --- | --- |
| Budget holder | Weekly | Low | Approve own cost centre |
| AP clerk | Daily | High | View all; reassign |

## Constraints

Record regulatory, software, interface, and design constraints.

| ID | Constraint | Source |
| --- | --- | --- |
| CON-001 | Must use the licensed ERP workflow module | DEC-007 |
| CON-002 | Segregation of duties must be enforced by the system | FIN-POL-07 |

## Stakeholder requirement coverage

Show that every stakeholder requirement is satisfied by one or more solution requirements, and that no solution requirement is an orphan.

| Stakeholder requirement | Solution requirements |
| --- | --- |
| SR-003 Approvers act without email | FR-021, FR-024, NFR-002 |
| SR-005 Suppliers are not paid late | FR-022, NFR-004 |

## External interface requirements

Specify user, hardware, software, and communications interfaces.

| ID | Interface | Type | Requirement |
| --- | --- | --- | --- |
| IF-001 | ERP invoice API | Software | The system shall post approval status within 1 minute of the decision |

## Functional requirements

Each requirement uses "shall", is atomic, has acceptance criteria, and names the stakeholder requirement it satisfies.

| ID | Requirement | Priority | Acceptance criteria | Satisfies | Test |
| --- | --- | --- | --- | --- | --- |
| FR-021 | The system shall route each matched invoice to the approver for its cost centre and amount band | Must | Given a matched invoice for cost centre 410 under 5,000 pounds, then it is routed to that budget holder within 1 minute | SR-003 | TC-011 |
| FR-024 | The system shall let an approver approve or reject from a mobile browser | Should | Approve and reject complete on the supported mobile browsers at 375 pixels wide | SR-003 | TC-018 |

## Non-functional requirements

Specify measurable quality attributes. Reference the NFR specification for full detail and verification methods.

| ID | Category | Requirement | Target | Verification |
| --- | --- | --- | --- | --- |
| NFR-002 | Performance | Invoice pages load quickly under peak load | 95th percentile under 2 seconds at 150 concurrent users | Load test LT-07 |
| NFR-004 | Availability | The workflow is available during business hours | 99.5 percent, 07:00 to 19:00 UK, monthly | Monitoring report |

## Other requirements

Data retention, security, compliance, localisation, and anything not covered above.

| ID | Requirement | Source |
| --- | --- | --- |
| OR-001 | Approval records are retained for 7 years | HMRC record-keeping rules |

## Priorities and agreement

State how priorities were set and who agreed them.

Example: MoSCoW at WS-02 on 2026-06-16, agreed by the product owner and the AP manager.

## Assumptions

Assumptions that affect the requirements, each with the effect if wrong.

| ID | Assumption | Effect if wrong |
| --- | --- | --- |
| A-001 | The ERP API supports real-time posting | IF-001 target becomes 15 minutes |

## Risks

Risks to delivering the requirements as specified.

| ID | Risk | Response | Owner |
| --- | --- | --- | --- |
| RSK-002 | The API fails at month-end volume | Load test at 3 times peak before go-live | Tom Reyes |

## Dependencies

External dependencies that affect the requirements, with owners and dates.

| ID | Dependency | Owner | Needed by |
| --- | --- | --- | --- |
| DEP-002 | Single sign-on from the identity team | Identity lead | 2026-07-15 |

## Feasibility and consistency check

Record the checks that the set is achievable and internally consistent.

| Check | By | Result |
| --- | --- | --- |
| Conflicting requirements review | Omar Haddad, Tom Reyes | FR-024 and NFR-002 reconciled on mobile page weight |

## Security requirements

For systems handling personal or financial data, specify access, audit, and protection requirements.

| ID | Requirement | Verification |
| --- | --- | --- |
| SEC-001 | Every approval decision is logged with user, time, and IP address | Audit log test TC-051 |

## State and behaviour models

For systems with complex states, add a state model of the key entities.

| State | Event | Next state |
| --- | --- | --- |
| Awaiting approval | Approve | Approved |

## Regulatory traceability

For regulated systems, trace each obligation to the requirements and tests that evidence it.

| Obligation | Requirements | Tests |
| --- | --- | --- |
| FIN-POL-07 segregation of duties | CON-002, FR-023 | TC-040 to TC-044 |

## Outputs

A baselined SRS whose functional and non-functional requirements cover every stakeholder requirement, ready for design, build, and test.

## Quality gate

Every requirement is atomic, complete, consistent, concise, feasible, unambiguous, testable, prioritised, and understandable, and is uniquely identified and traceable.

## Review criteria

- Functional and non-functional requirements are both covered and distinguished.
- Every solution requirement traces to a stakeholder requirement.
- Every stakeholder requirement is satisfied.
- Each requirement is atomic and unambiguous.
- Functional items have acceptance criteria, and non-functional items are quantified.
- The set is internally consistent.
- Requirements state capabilities and qualities, not premature design.
- Requirements are prioritised with stakeholder agreement.
- The set is achievable within the agreed constraints.

## BABOK anchor

Requirements Classification Schema (2.3); Specify and Model Requirements (7.1); Verify Requirements (7.2); Non-Functional Requirements Analysis (10.30); State Modelling (10.44). Aligned to ISO/IEC/IEEE 29148.

## House style

Write the narrative with the natural-prose-editor pass and no em dashes. See `docs/methodology/editorial-style.md`.
