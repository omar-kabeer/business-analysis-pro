---
type: deliverable
domain: strategy
status: draft
version: 2.0.0
---

# Business Objectives

> **How to use this template.** Filled rows and "Example" lines illustrate one scenario so the expected depth is clear. Replace them with the facts of the work at hand: never carry example names, figures, or IDs into a real document, and say plainly when a fact is not yet known. Include every other section by default, and leave one out only when the user asks. Include these sections only when their condition applies or the user asks for them: Objectives and key results (adaptive approach); Benefits link (written for executive readers). The full rules are in `templates/business-objectives.toc.json`.

## Purpose

State the direction the business wants to pursue to reach the future state, as measurable objectives that the solution, the roadmap, and benefits tracking can all trace to. This is the working form of the Business Objectives output of Define Future State. Each objective is an outcome, not a solution. Graded by `evaluation/business-objectives-rubric.md`.

This template is a superset. Its table-of-contents manifest, `templates/business-objectives.toc.json`, marks which sections are core, standard, or extended and when each applies.

## Document Control

| Field | Value |
| --- | --- |
| Initiative | Supplier invoice approval |
| Sponsor | Finance Director |
| Business analyst | Omar Haddad |
| Version | 1.0.0 |
| Status | Approved |
| Last updated | 2026-05-27 |

## Scope

State which initiative, business area, and time horizon the objectives cover, and what they deliberately do not address.

Example: UK accounts payable, the next 12 months. Treasury and procurement objectives are set elsewhere.

## Inputs

List what the objectives come from: the business need, the current state description and its baseline, the enterprise strategy, and stakeholder goals.

Example: current state assessment 1.1.0 (baseline of 14 days and 62 percent on terms); Finance strategy 2026 to 2028, goal 2 (supplier trust).

## Objectives

State each objective as a measurable outcome with a baseline, a target, a date, and one accountable owner. Use SMART as a check: specific, measurable, achievable, relevant, time-bound.

| ID | Objective (outcome) | Measure | Baseline | Target | By | Owner |
| --- | --- | --- | --- | --- | --- | --- |
| OBJ-001 | Suppliers are approved for payment quickly | Average days from invoice receipt to approval | 14 days | 5 days | 2026-12-31 | Financial Controller |
| OBJ-002 | Suppliers are paid on the terms we agreed | Share of invoices paid within terms | 62 percent | 95 percent | 2027-03-31 | Financial Controller |

## Alignment to strategy

Show how each objective advances the enterprise strategy and the underlying need, so it is clear why it matters.

| Objective | Strategy goal or need it serves | How |
| --- | --- | --- |
| OBJ-002 | Finance strategy goal 2: be a customer suppliers want | On-time payment is the top supplier complaint |

## Priority and trade-offs

Record the relative importance of the objectives and how conflicts between them are resolved, so later scope decisions have a rule to follow.

| Rank | Objective | Rationale |
| --- | --- | --- |
| 1 | OBJ-002 | Supplier holds are the most severe consequence |
| 2 | OBJ-001 | The main lever for OBJ-002 |

## Achievability check

Show the objectives were tested against known constraints: budget, capacity, systems, and regulation.

| Objective | Constraint checked | Result |
| --- | --- | --- |
| OBJ-001 | ERP workflow module capacity | Confirmed by ERP lead, 2026-05-22 |

## Measurement plan

State how, how often, and by whom each measure will be collected, so progress is visible.

| Measure | Data source | Frequency | Reported to |
| --- | --- | --- | --- |
| Days to approval | ERP workflow log | Weekly | Finance leadership meeting |

## Assumptions

Record what the objectives take as true, with the effect if wrong.

| ID | Assumption | Effect if wrong |
| --- | --- | --- |
| A-003 | Invoice volume stays within 10 percent of 2025 | Targets may need rebasing |

## Risks

Risks to achieving the objectives, each with a response and an owner.

| Risk | Response | Owner |
| --- | --- | --- |
| Approvers keep approving by email alongside the tool | Switch off email approval at go-live | Financial Controller |

## Objectives and key results

For teams using OKRs, express each objective as a qualitative objective with two to four measurable key results.

| Objective | Key result | Target |
| --- | --- | --- |
| Suppliers trust us to pay on time | Invoices paid within terms | 95 percent |

## Benefits link

For a business case audience, link each objective to the benefit it releases and its value.

| Objective | Benefit | Annual value |
| --- | --- | --- |
| OBJ-002 | Early-payment discounts captured | About 60,000 pounds |

## Outputs

A prioritised, owned, measurable set of objectives that the future state, solution scope, business case, and benefits tracking trace to.

## Review criteria

- Each objective states an outcome, not a solution.
- Each has a measure, a baseline, a target, and a date.
- Each aligns to the strategy and the business need.
- Objectives support the defined future state.
- Achievability was checked against known constraints.
- Each has one accountable owner.
- Relative priority is clear.

## Practice anchor

Define Future State; Business Objectives output; Balanced Scorecard and Metrics and KPIs for measures. Owned by the strategy skill.

## House style

Write the narrative with the natural-prose-editor pass and no em dashes. See `docs/methodology/editorial-style.md`.
