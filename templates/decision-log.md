---
type: deliverable
domain: governance
status: draft
version: 2.0.0
---

# Decision Log

## Purpose

Record significant decisions with enough context that a newcomer can understand what was decided, why, by whom, and under what conditions it would be revisited. A good log prevents relitigating settled questions and makes governance auditable. Supports BABOK Plan Business Analysis Governance (3.3), Decision Analysis (10.16), and Assess Requirements Changes (5.4). Graded by `evaluation/decision-log-rubric.md`.

This template is a superset. Its table-of-contents manifest, `templates/decision-log.toc.json`, marks which sections are core, standard, or extended and when each applies.

## Document Control

| Field | Value |
| --- | --- |
| Initiative | Supplier invoice approval |
| Owner | Priya Shah |
| Version | 1.4.0 |
| Status | Live |
| Last updated | 2026-06-18 |

## Scope

State which decisions belong in this log: those that shape scope, approach, requirements, or design. Day-to-day choices stay in meeting notes.

Example: decisions about release 1 scope, solution approach, requirements baselines, and changes. Enterprise finance policy decisions stay with the Finance policy board.

## Inputs

List where decisions come from: steering meetings, workshops, change requests, and design reviews.

## Decision rights

State who may make each kind of decision, from the governance approach, so authority can be checked.

| Decision type | Decision maker | Consulted |
| --- | --- | --- |
| Release scope | Sponsor (Finance Director) | Product owner, AP manager |
| Requirement changes within release | Product owner | Business analyst, delivery lead |

## Log

State each decision as one choice someone could act on. List the real alternatives, record the rationale and evidence, and say what would make you revisit it.

| ID | Date | Decision | Options considered | Rationale and evidence | Decision maker | Consulted | Reversal conditions | Status | Links |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DEC-007 | 2026-06-02 | Use the ERP's own workflow module, not a separate tool | ERP workflow module (chosen); standalone workflow tool; build in-house | Already licensed; no integration needed; vendor demo met 11 of 12 criteria (VA-003). Assumes A-001 (API supports real-time posting) | Finance Director | Tom Reyes, Priya Shah | Module fails the load test at 3 times peak | Agreed | RSK-002, SC-003 |
| DEC-004 | 2026-05-20 | Release 1 covers UK only | UK only (chosen); UK and EU together | EU tax rules not yet analysed; UK is 80 percent of volume | Finance Director | EU AP lead | Superseded by DEC-009 | Superseded | DEC-009 |

## Pending decisions

Decisions that are needed but not yet made, with who decides and by when.

| ID | Decision needed | Decision maker | Needed by | Blocking |
| --- | --- | --- | --- | --- |
| DEC-010 | Whether suppliers can see rejected invoices | Product owner | 2026-07-01 | PR-004 |

## Assumptions

Record the assumptions decisions rest on, and where each is tracked.

| ID | Assumption | Used by | Tracked in |
| --- | --- | --- | --- |
| A-001 | ERP API supports real-time posting | DEC-007 | RAID log |

## Risks

Risks to the log's usefulness.

| Risk | Response | Owner |
| --- | --- | --- |
| Decisions made in corridors never reach the log | Steering actions include "log it" for every decision | Priya Shah |

## Decision analysis detail

For high-impact or contested decisions, record the criteria, weights, and scores behind the choice.

| Option | Cost (30 percent) | Fit (50 percent) | Risk (20 percent) | Weighted score |
| --- | --- | --- | --- | --- |
| ERP workflow module | 4 | 4 | 3 | 3.8 |

## Audit trail

For regulated or formally governed work, record where each decision's evidence is stored and who approved the record.

| ID | Evidence location | Record approved by |
| --- | --- | --- |
| DEC-007 | Steering pack SP-06, slide 4 | Programme board secretary |

## Outputs

A current record of significant decisions, their rationale, authority, and links, that governance, change assessment, and newcomers can rely on.

## Review criteria

- The log holds the decisions that shape scope, approach, requirements, or design.
- Each decision is a single, actionable choice.
- The real alternatives are listed.
- Rationale, evidence, and assumptions are recorded.
- The decision maker had the authority, and consultation is recorded.
- Reversal conditions are stated where a decision may be revisited.
- Each entry has a date and status; superseded decisions are marked and linked.
- Decisions link to the requirements, changes, and risks they affect.

## BABOK anchor

Plan Business Analysis Governance (3.3); Decision Analysis (10.16); Assess Requirements Changes (5.4). Pairs with the RAID log and risk register.

## House style

Write any narrative with the natural-prose-editor pass and no em dashes. See `docs/methodology/editorial-style.md`.
