---
type: deliverable
domain: requirements
status: draft
version: 2.0.0
---

# Non-Functional Requirements Specification

> **How to use this template.** Filled rows and "Example" lines illustrate one scenario so the expected depth is clear. Replace them with the facts of the work at hand: never carry example names, figures, or IDs into a real document, and say plainly when a fact is not yet known. Include every other section by default, and leave one out only when the user asks. Include these sections only when their condition applies or the user asks for them: Service level detail (formal governance); Security and privacy controls (written for regulators, or regulated work); Capacity model (high risk). The full rules are in `templates/nfr-specification.toc.json`.

## Purpose

Specify how well the solution must perform, as distinct from what it must do. Non-functional requirements (also called quality attributes or quality of service) are declarative statements with a constraining factor, quantified, with the conditions they are measured under and a way to verify them. The categories follow Non-Functional Requirements Analysis. An unquantified non-functional requirement is not testable and does not belong here. Graded by `evaluation/nfr-specification-rubric.md`.

This template is a superset. Its table-of-contents manifest, `templates/nfr-specification.toc.json`, marks which sections are core, standard, or extended and when each applies.

## Document Control

| Field | Value |
| --- | --- |
| Solution or component | Invoice approval workflow |
| Business analyst | Ana Costa |
| Architecture reviewer | Sam Patel |
| Version | 1.2.0 |
| Status | In review |
| Last updated | 2026-06-12 |

## Scope

State the solution, components, and interfaces the requirements apply to, and any that are covered by another specification (for example a vendor's standard SLA or an enterprise security baseline).

Example: the approval workflow and its ERP integration. Hosting platform controls are covered by the enterprise cloud baseline CB-2025.

## Inputs

List where the requirements come from: stakeholder interviews, business objectives, service level agreements, regulations and policies, enterprise architecture standards, current performance data, and benchmarks.

## How to write a good non-functional requirement

State it declaratively, with a measure, a target, the conditions it is measured under, and a verification method. For example: 95 percent of invoice review pages load within 2 seconds, with 3 seconds as the failure threshold, for up to 150 concurrent approvers, verified by load test before UAT. Write "how well", never "what": a requirement that describes a behaviour belongs in the functional requirements.

## Requirements by category

Write one or more quantified requirements for each relevant category. Mark a category not applicable, with the reason, rather than leaving it out.

| ID | Category | Requirement | Measure and target | Threshold | Conditions | Verification | Source | Priority |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| NFR-001 | Availability | The approval service is available during business hours | 99.5 percent a month, 07:00 to 19:00 UK time, weekdays | Below 99.0 percent in any month | Excludes notified maintenance up to 2 hours a month | Uptime monitoring report | BR-004 month-end close | Must |
| NFR-002 | Performance efficiency | Invoice review pages open fast enough not to interrupt approval | 95th percentile load within 2 seconds | Above 3 seconds at the 95th percentile | 150 concurrent approvers; invoices up to 20 lines and a 5 MB PDF | Load test before UAT | STK-006 interview | Must |
| NFR-003 | Security | Every approval is attributable to an authenticated approver | 100 percent of approvals carry user ID and timestamp in an immutable log | Any approval without both | All roles, all channels | Penetration test and log audit | FIN-POL-07 section 3 | Must |
| NFR-004 | Usability and accessibility | New approvers can approve without training | 90 percent of first-time approvers approve unaided within 3 minutes; WCAG 2.1 AA | Below 80 percent, or any AA failure | 10 approvers new to the tool | Moderated usability test; accessibility audit | OBJ-2 | Should |
| NFR-005 | Portability | Not applicable | Not applicable | Not applicable | Software-as-a-service on the vendor platform | Not applicable | Architecture decision DEC-004 | Not applicable |

Categories to consider: availability, compatibility, performance efficiency, maintainability, portability, reliability, scalability, security, usability and accessibility, certification and compliance, localization, and service level agreements.

## Category prompts

- **Availability:** percent of time the solution is operable when required, plus recovery time and recovery point objectives.
- **Compatibility:** how the solution operates with other components in its environment.
- **Performance efficiency:** response time, throughput, and resource use, by usage period (peak, normal, off-peak).
- **Maintainability:** ease of correcting faults and adapting to change.
- **Portability:** ease of moving between environments.
- **Reliability:** ability to perform under stated conditions for a period, for example mean time between failures.
- **Scalability:** ability to handle growth in users, data, or transactions.
- **Security:** protection from accidental or malicious access, use, change, destruction, or disclosure.
- **Usability and accessibility:** ease of learning and use; conformance to standards such as WCAG 2.1 AA.
- **Certification and compliance:** standards and regulatory, financial, or legal constraints by jurisdiction.
- **Localization:** languages, laws, currencies, cultures, and formats.
- **Service level agreements:** constraints formally agreed between provider and user.

## Verification plan

State how and when each requirement will be verified, who verifies it, and what evidence is kept.

| ID | Method | Phase | Verified by | Evidence |
| --- | --- | --- | --- | --- |
| NFR-002 | Load test at 150 concurrent users | Before UAT | Performance test lead | Load test report LT-07 |

## Trade-offs and conflicts

Record where quality attributes pull against each other or against cost (for example security against usability), how the conflict was resolved, and who decided.

| Conflict | Resolution | Decided by | Decision reference |
| --- | --- | --- | --- |
| Session timeout of 5 minutes (security) against approvers reviewing long invoices (usability) | 15-minute timeout with a warning at 12 minutes | Security lead and sponsor | DEC-011 |

## Service level detail

For formally agreed or contracted services, record the full service level terms each requirement depends on.

| ID | Service level | Measurement window | Reporting | Remedy if missed |
| --- | --- | --- | --- | --- |
| NFR-001 | 99.5 percent availability | Calendar month | Monthly vendor report | Service credit of 5 percent of the monthly fee |

## Security and privacy controls

For regulated work or personal data, map each security and privacy requirement to the obligation and the control that meets it.

| ID | Obligation | Control | Evidence |
| --- | --- | --- | --- |
| NFR-003 | Segregation of duties (FIN-POL-07) | Role-based approval limits | Control test CT-14 |

## Capacity model

For high-risk or high-growth solutions, show the demand assumptions behind the performance and scalability targets.

| Driver | Today | Peak | 3-year forecast | Source |
| --- | --- | --- | --- | --- |
| Invoices per day | 4,000 | 12,000 at month end | 18,000 | Finance volume report FY25 |

## Assumptions

Record what the requirements take as true, for example demand forecasts, hosting capacity, or user numbers, each with the impact if wrong and who confirms it.

| ID | Assumption | Impact if wrong | Confirm with |
| --- | --- | --- | --- |
| A-007 | Peak load stays below 12,000 invoices a day in year 1 | NFR-002 load test must be repeated at the higher volume | Finance operations |

## Risks

Risks that the requirements cannot be met, or cost more than expected to meet, with the response.

| Risk | Response | Owner |
| --- | --- | --- |
| Vendor platform cannot meet 2 seconds with PDF previews | Early spike on the vendor sandbox | Sam Patel |

## Outputs

A reviewed, prioritised set of non-functional requirements with verification methods, ready to trace to design and to test.

## Review criteria

- Every relevant category is covered, and categories that do not apply are marked with a reason.
- Every requirement has a measure, a target, and a failure threshold.
- The conditions of measurement (load, period, environment, users) are stated.
- Every requirement has a verification method and phase.
- Every target traces to a business need, SLA, benchmark, or regulation.
- No requirement describes a behaviour or a design choice.
- Requirements are prioritised, and conflicts between qualities are resolved and recorded.
- Feasibility is confirmed with an architecture or operations owner.

## Practice anchor

Non-Functional Requirements Analysis; the Requirements Classification Schema (solution requirements, non-functional); Verify Requirements; Validate Requirements. Owned by the requirements skill.

## House style

Write the narrative with the natural-prose-editor pass and no em dashes. See `docs/methodology/editorial-style.md`.
