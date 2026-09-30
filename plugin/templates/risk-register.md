---
type: deliverable
domain: governance
status: draft
version: 2.0.0
---

# Risk Register

## Purpose

Identify, assess, and manage the risks to an initiative in a structured, auditable way: describe each risk, score its probability and impact on an agreed scale, choose a response, assign an owner, and track residual risk over time. This is the working form of BABOK Risk Analysis and Management (10.38) and Assess Risks (6.3). Graded by `evaluation/risk-register-rubric.md`.

This template is a superset. Its table-of-contents manifest, `templates/risk-register.toc.json`, marks which sections are core, standard, or extended and when each applies.

## Document Control

| Field | Value |
| --- | --- |
| Initiative | Supplier invoice approval |
| Register owner | Priya Shah |
| Review cadence | Fortnightly, and before each steering meeting |
| Version | 1.3.0 |
| Status | Live |
| Last updated | 2026-06-16 |

## Scope

State which initiative and which kinds of risk the register covers, and where other risks are tracked (for example the RAID log for day-to-day items, or the enterprise risk register).

Example: delivery, adoption, and benefit risks for release 1. Enterprise financial control risks stay on the Finance risk register.

## Inputs

List what risks are drawn from: the business case, assumptions, stakeholder analysis, the solution scope, lessons learned, and risk workshops.

## Scoring scales

Agree the scales before scoring, so risks are comparable. Severity is probability times impact (1 to 25).

| Score | Probability | Impact |
| --- | --- | --- |
| 1 | Rare (under 5 percent) | Negligible |
| 2 | Unlikely (5 to 25 percent) | Minor: under a week's slip |
| 3 | Possible (25 to 50 percent) | Moderate: objective delayed a month |
| 4 | Likely (50 to 80 percent) | Major: objective missed this year |
| 5 | Almost certain (over 80 percent) | Severe: initiative fails or regulatory breach |

Response strategies: avoid (remove the source), reduce (lower probability or impact), transfer (share with another party), or accept (tolerate, with a contingency and a trigger). Risk tolerance: severity 15 or more goes to the steering group.

## Register

Write each risk as cause, event, and effect. Name one person as owner. Record residual severity after the response.

| ID | Risk (cause, event, effect) | Category | P | I | Severity | Response | Actions and trigger | Owner | Residual | Status | Review date |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RSK-001 | Because approvers see approval as an interruption, they may keep approving by email, so the 5-day target is missed | Adoption | 4 | 4 | 16 | Reduce | Disable email approval at go-live; weekly usage report; trigger: under 70 percent in-tool approvals in week 2 | Financial Controller | 8 | Open | 2026-06-30 |
| RSK-002 | Because the ERP vendor API is untested at our volumes, posting may fail at month end, so invoices are paid late | Technical | 2 | 5 | 10 | Reduce | Load test at 3 times peak before go-live | Tom Reyes | 5 | Open | 2026-06-30 |

## Top risks summary

Summarise the highest-severity risks for the sponsor, with the current response and trend.

| ID | Risk | Severity | Trend | Response owner |
| --- | --- | --- | --- | --- |
| RSK-001 | Approvers bypass the tool | 16 | Stable | Financial Controller |

## Risk heat map

Plot open risks by probability and impact so concentration is visible at a glance.

| Probability or Impact | 1 to 2 | 3 | 4 to 5 |
| --- | --- | --- | --- |
| 4 to 5 | None | None | RSK-001 |
| 1 to 3 | None | None | RSK-002 |

## Assumptions

Record what the risk assessment takes as true.

| ID | Assumption | Effect if wrong |
| --- | --- | --- |
| A-021 | Scores reflect the release 1 scope only | Risks for later releases are not yet visible |

## Risks to the register itself

Name what would make this register unreliable, and how it is prevented.

| Risk | Response | Owner |
| --- | --- | --- |
| Register goes stale between steering meetings | Fortnightly review is a standing agenda item | Priya Shah |

## Closed risks

Keep closed risks, with how they closed, so the history is auditable.

| ID | Risk | Closed on | How it closed |
| --- | --- | --- | --- |
| RSK-004 | Sponsor may change before approval | 2026-06-02 | Sponsor confirmed for the full programme |

## Quantitative analysis

For high-value or high-uncertainty initiatives, record expected monetary value or simulation results for the top risks.

| ID | Probability | Cost impact | Expected value | Method |
| --- | --- | --- | --- | --- |
| RSK-001 | 60 percent | 45,000 pounds of lost discount | 27,000 pounds | Expected monetary value |

## Regulatory and compliance risks

For regulated work, list risks tied to obligations, with the control that manages each and its evidence.

| ID | Obligation | Control | Evidence |
| --- | --- | --- | --- |
| RSK-006 | Segregation of duties (FIN-POL-07) | Workflow blocks self-approval | UAT cases TC-040 to TC-044 |

## Outputs

A current, owned register of scored risks with responses and residual severity, a top-risk summary for governance, and escalations for any risk above tolerance.

## Review criteria

- Each risk states cause, event, and effect.
- Each is scored for probability and impact on the agreed scale.
- Risks are ranked by severity, and those above tolerance are escalated.
- Each significant risk has a response, actions, and a trigger.
- Each has one named owner.
- Status, residual severity, and review dates are current.
- The register covers delivery, adoption, technical, benefit, and regulatory sources of risk.

## BABOK anchor

Risk Analysis and Management (10.38); Assess Risks (6.3); Plan Business Analysis Approach (3.1) for cadence. Complements the RAID log. Owned by the risk-analysis skill.

## House style

Write the narrative with the natural-prose-editor pass and no em dashes. See `docs/methodology/editorial-style.md`.
