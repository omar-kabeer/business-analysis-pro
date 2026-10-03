---
type: deliverable
domain: product-management
status: draft
version: 2.0.0
---

# Prioritization Matrix

> **How to use this template.** Filled rows and "Example" lines illustrate one scenario so the expected depth is clear. Replace them with the facts of the work at hand: never carry example names, figures, or IDs into a real document, and say plainly when a fact is not yet known. Include every other section by default, and leave one out only when the user asks. Include these sections only when their condition applies or the user asks for them: Value versus effort view (light governance); MoSCoW for scope agreement (predictive or hybrid approach); Weighted scoring for governed decisions (formal governance, or written for executive readers). The full rules are in `templates/prioritization-matrix.toc.json`.

## Purpose

Rank opportunities, features, or backlog items transparently with one consistent method, tied to the outcome you are trying to move. The matrix makes trade-offs visible so scope decisions are defensible rather than driven by whoever asked last. This is the working form of Prioritization in Prioritize Requirements. Graded by `evaluation/prioritization-matrix-rubric.md`.

This template is a superset. Its table-of-contents manifest, `templates/prioritization-matrix.toc.json`, marks which sections are core, standard, or extended and when each applies.

## Document Control

| Field | Value |
| --- | --- |
| Product or backlog | Supplier payment status portal |
| Decision owner | Maya Okafor, product manager |
| Method used | RICE |
| Version | 1.0.0 |
| Status | Agreed |
| Last updated | 2026-06-24 |

## Scope

State the decision this matrix informs and the candidate set being ranked, so nobody can argue items were left out.

Example: which features form the portal's first release. Candidates: every item in the discovery backlog tagged "release 1 candidate" on 2026-06-20 (six items).

## Inputs

List what the scores draw on: the target outcome, research findings, usage data, estimates from the team, and dependencies.

Example: north star "share of status queries answered by self-service"; AP call log March to May; team estimates from refinement on 2026-06-19.

## Target outcome

Name the outcome the ranking serves. Every score is a judgement about this outcome.

Example: raise self-service status answers from 0 to 60 percent within 12 months.

## Method selection

Choose one primary method for the decision and say why it fits.

| Method | Best for |
| --- | --- |
| RICE | Comparing many items on expected value per unit of effort |
| Value vs effort | Quick, coarse triage |
| Kano | Balancing basic, performance, and delight needs |
| MoSCoW | Agreeing scope for a fixed release |
| WSJF | Flow-based ordering by cost of delay over job size |

Chosen: RICE, because the six items differ widely in reach and effort and the team has data for both.

## Scales

State what each factor means here, so another reviewer could reproduce the ranking.

| Factor | Definition | Scale |
| --- | --- | --- |
| Reach | Suppliers affected per quarter | Count, from the AP call log |
| Impact | Effect on self-service answers | 3 massive, 2 high, 1 medium, 0.5 low |
| Confidence | How sure we are of reach and impact | 100, 80, or 50 percent |
| Effort | Team weeks | Estimate from refinement |

## Scoring

Score every candidate the same way. Label estimates as estimates.

| ID | Item | Reach | Impact | Confidence | Effort | Score | Rank |
| --- | --- | --- | --- | --- | --- | --- | --- |
| ITEM-001 | Invoice status lookup by invoice number | 1,800 | 3 | 80 percent | 4 | 1,080 | 1 |
| ITEM-002 | Expected payment date | 1,500 | 2 | 50 percent | 3 | 500 | 2 |
| ITEM-003 | Remittance download | 600 | 1 | 80 percent | 2 | 240 | 3 |

Score is Reach times Impact times Confidence, divided by Effort. Reach for ITEM-002 is an estimate; ITEM-001 and ITEM-003 are from the call log.

## Decision

State the resulting order or cut, and anything overridden with its reason.

| Decision | Items | Reason |
| --- | --- | --- |
| Release 1 | ITEM-001, ITEM-002 | Top two scores; together cover 85 percent of status calls |
| Later | ITEM-003 | Lower reach |

## Assumptions

Record what the scores take as true, with the effect if wrong.

| ID | Assumption | Effect if wrong |
| --- | --- | --- |
| A-031 | Treasury dates are accurate enough to show | ITEM-002 impact drops; re-rank |

## Risks

Risks that the ranking is wrong or is ignored.

| Risk | Response | Owner |
| --- | --- | --- |
| A senior request is added after scoring | New items are scored the same way before joining the plan | Maya Okafor |

## Value versus effort view

For quick triage or a stakeholder workshop, place items in quadrants.

| ID | Value | Effort | Quadrant |
| --- | --- | --- | --- |
| ITEM-001 | High | Medium | Plan now |

Quadrants: high value and low effort (do now), high value and high effort (plan), low value and low effort (fill in), low value and high effort (avoid).

## MoSCoW for scope agreement

For fixed-date releases, agree scope in MoSCoW terms after ranking.

| ID | Priority | Rationale |
| --- | --- | --- |
| ITEM-001 | Must | Answers the most common status call |

## Weighted scoring for governed decisions

For formal decisions with several criteria, weight criteria explicitly and record who agreed the weights.

| Criterion | Weight | Agreed by |
| --- | --- | --- |
| Outcome impact | 50 percent | Steering group, 2026-06-18 |

## Outputs

A reproducible ranking of the full candidate set against one outcome, a decision on what goes first, and the assumptions that would change it.

## Review criteria

- One method fits the decision and is applied to every item.
- Scales are defined so the ranking can be reproduced.
- The candidate set is complete for the decision.
- The ranking ties to the target outcome, not request order.
- The final decision follows from the scores, and overrides are explained.
- Estimates are labelled as estimates.

## Practice anchor

Prioritization; Prioritize Requirements; Backlog Management. Owned by the product-manager skill; see `skills/product-manager/references/product-discovery.md`.

## House style

Write the narrative with the natural-prose-editor pass and no em dashes. See `docs/methodology/editorial-style.md`.
