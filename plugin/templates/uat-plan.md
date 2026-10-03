---
type: deliverable
domain: quality
status: draft
version: 2.0.0
---

# User Acceptance Test Plan

> **How to use this template.** Filled rows and "Example" lines illustrate one scenario so the expected depth is clear. Replace them with the facts of the work at hand: never carry example names, figures, or IDs into a real document, and say plainly when a fact is not yet known. Include every other section by default, and leave one out only when the user asks. Include these sections only when their condition applies or the user asks for them: Non-functional acceptance (medium or high risk, or the Information Technology perspective); Operational readiness checks (formal governance, or high risk); Regulatory evidence (written for regulators, or regulated work). The full rules are in `templates/uat-plan.toc.json`.

## Purpose

Define how the business will prove that the delivered solution meets the agreed requirements, and the conditions under which it will be accepted. User acceptance testing is the business's decision, backed by evidence: this plan says what will be tested, by whom, against which requirements, and what result earns acceptance. Graded by `evaluation/uat-plan-rubric.md`.

This template is a superset. Its table-of-contents manifest, `templates/uat-plan.toc.json`, marks which sections are core, standard, or extended and when each applies.

## Document Control

| Field | Value |
| --- | --- |
| Initiative or release | Supplier invoice approval, release 1 |
| Business acceptance owner | Finance Director |
| Test lead | Omar Haddad |
| Version | 1.0.0 |
| Status | Approved for execution |

## Scope

State what is tested and what is deliberately not, and why.

| In scope | Out of scope | Reason |
| --- | --- | --- |
| Approval routing, exceptions, ERP posting | Payroll and expenses | Not changed by this release |

## Inputs

List what the plan is built from: the baselined requirements and acceptance criteria, business process models, the release scope, non-functional requirements, and known defects from system testing.

## Approach

Test through end-to-end business scenarios that mirror real work, supported by rule-level cases for boundaries and exceptions and a time-boxed exploratory session. Business testers run the scenarios; the test lead coordinates and reports.

## Roles

Name people, not teams. The acceptance owner must have the authority to accept the solution on the business's behalf.

| Role | Name | Responsibility |
| --- | --- | --- |
| Business acceptance owner | Finance Director | Signs acceptance |
| Test lead | Omar Haddad | Coordinates execution and reporting |
| Business testers | Four AP clerks, three approvers | Execute scenarios |
| Defect triage | Omar Haddad, Tom Reyes | Set severity and priority |

## Environment and data

Test in an environment and with data close enough to production that a pass means something, and mask personal or financial data.

| Item | Detail |
| --- | --- |
| Environment | UAT, isolated from production |
| Build or release version | 1.0.0-rc2 |
| Data source and volume | June production snapshot, 5,000 invoices |
| Masking or anonymisation applied | Supplier bank details masked |
| Refresh policy | Refreshed before each cycle |

## Entry criteria

Testing starts only when these hold: requirements baselined; build deployed and smoke-tested; environment stable; data loaded; cases reviewed and approved; testers trained and available; defect process agreed.

| Criterion | Status | Evidence |
| --- | --- | --- |
| Build smoke-tested | Met | Smoke report SR-09 |

## Exit criteria

Testing ends, and acceptance can be recommended, when planned coverage is executed; there are zero open critical defects; zero open high defects or a written accepted exception for each; all medium defects triaged with owners and dates; non-functional requirements verified; and the named business owner signs off.

## Coverage matrix

Every in-scope requirement maps to at least one scenario or case, so coverage can be proven.

| Requirement ID | Requirement summary | Scenario IDs | Case IDs | Result | Evidence |
| --- | --- | --- | --- | --- | --- |
| STORY-021 | Show why match failed | SCN-02 | TC-011, TC-012 | Pass | Run log UAT-C1 |

## Test scenarios

Write each scenario as a business task a tester would recognise from their own work, and name the requirements it covers.

| Scenario ID | Business task | Requirements covered | Tester | Preconditions | Expected outcome | Result |
| --- | --- | --- | --- | --- | --- | --- |
| SCN-02 | Resolve a price mismatch exception | STORY-021, STORY-022 | AP clerk 2 | Invoice 2 percent above PO price | Exception routed to buyer with reason shown | Pass |

## Test cases

| Case ID | Scenario | Type | Preconditions and data | Steps | Expected result | Actual | Status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| TC-012 | SCN-02 | Boundary | Invoice exactly at the 2 percent tolerance | Open invoice | Invoice matches; no exception | As expected | Pass |

Type is positive, boundary, negative, exception, or non-functional.

## Defect log

| Defect ID | Case ID | Description | Business severity | Priority | Workaround | Owner | Status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| DEF-031 | TC-011 | Reason text truncated at 80 characters | Low | 3 | Hover shows full text | Vendor | Open |

Severity is business impact; priority is fix order. Keep them separate.

## Schedule

Plan at least one retest cycle, so fixes for defects found in the first cycle can be confirmed before acceptance.

| Phase | Start | End | Owner |
| --- | --- | --- | --- |
| Cycle 1 | 2026-07-01 | 2026-07-05 | Omar Haddad |
| Cycle 2 (retest) | 2026-07-08 | 2026-07-10 | Omar Haddad |

## Assumptions

What the plan takes as true, each with the effect if wrong.

| ID | Assumption | Effect if wrong |
| --- | --- | --- |
| A-012 | Testers are released from normal duties for 50 percent of the cycle | Cycle 1 slips by up to a week |

## Risks

Risks to completing UAT on time with meaningful evidence.

| Risk | Response | Owner |
| --- | --- | --- |
| UAT data too clean to show real exceptions | Seed 50 known exception cases from June production | Tom Reyes |

## Non-functional acceptance

For releases with performance, security, or accessibility requirements, record how each is verified in acceptance and the result.

| Requirement | Verification | Result | Evidence |
| --- | --- | --- | --- |
| NFR-002 | Load test at 150 users | 95th percentile 1.8 seconds | LT-07 |

## Operational readiness checks

For formally governed or high-risk releases, confirm the business can run the solution: support, training, runbooks, and rollback.

| Check | Status | Owner |
| --- | --- | --- |
| Rollback tested in UAT | Met | Tom Reyes |

## Regulatory evidence

For regulated releases, record the tests that evidence each control or obligation, so acceptance evidence can be produced for audit.

| Obligation or control | Test cases | Evidence reference |
| --- | --- | --- |
| Segregation of duties (FIN-POL-07) | TC-040 to TC-044 | Audit pack AP-UAT-01 |

## Acceptance recommendation

Base the recommendation on the coverage and defect evidence above. Every condition has an owner and a date, and the named acceptance owner signs.

| Field | Value |
| --- | --- |
| Recommendation | Accept with conditions |
| Coverage achieved | 100 percent of in-scope requirements |
| Outstanding defects and their consequence | DEF-031, low; workaround in place |
| Conditions, each with an owner and a date | Fix DEF-031 in release 1.1 (vendor, 2026-07-31) |
| Residual risk | Low |
| Signed | Finance Director, 2026-07-11 |

## Outputs

Executed tests with evidence, a defect log with every defect triaged, and a signed acceptance recommendation.

## Review criteria

- Scope states what is and is not tested, and why.
- Entry and exit criteria are explicit and measurable.
- Every in-scope requirement maps to at least one scenario or case.
- Scenarios are real business tasks run by business testers, supported by boundary and negative cases.
- Environment and data are realistic and safe (masked where needed).
- Defects separate severity from priority and each has an owner.
- The recommendation follows from the evidence, and conditions have owners and dates.

## Practice anchor

Acceptance and Evaluation Criteria (10.1); Validate Requirements (7.3); Measure Solution Performance (8.1); Assess Solution Limitations (8.3). Owned by the acceptance-testing skill.

## House style

Write the narrative with the natural-prose-editor pass and no em dashes. See `docs/methodology/editorial-style.md`.
