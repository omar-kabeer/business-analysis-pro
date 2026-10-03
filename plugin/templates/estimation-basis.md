---
type: deliverable
domain: planning
status: draft
version: 2.0.0
---

# Estimation Basis

> **How to use this template.** Filled rows and "Example" lines illustrate one scenario so the expected depth is clear. Replace them with the facts of the work at hand: never carry example names, figures, or IDs into a real document, and say plainly when a fact is not yet known. Include every other section by default, and leave one out only when the user asks. Include these sections only when their condition applies or the user asks for them: Monte Carlo analysis (formal governance, or high risk); Cost conversion (formal governance, or written for executive readers). The full rules are in `templates/estimation-basis.toc.json`.

## Purpose

Record what was estimated, by what method, on what assumptions, and with what confidence, so the number can be defended, challenged, and re-estimated as knowledge improves. Based on Estimation. Graded by `evaluation/estimate-cost-effort-forecasts-with-ranges-rubric.md`.

This template is a superset. Its table-of-contents manifest, `templates/estimation-basis.toc.json`, marks which sections are core, standard, or extended and when each applies.

## Document Control

| Field | Value |
| --- | --- |
| Initiative | Supplier invoice approval, release 1 |
| Estimate purpose | Funding decision |
| Prepared by | Tom Reyes, with Omar Haddad |
| Date | 2026-06-10 |
| Point on the cone of uncertainty | Requirements |
| Version | 1.0.0 |

## Scope

State exactly what is included, and list what is excluded. Exclusions carry more weight than inclusions in any later dispute.

| Included | Excluded |
| --- | --- |
| Workflow configuration, ERP integration, testing, training, go-live support | EU entities; supplier portal; licence cost (already paid) |

## Inputs

List the reference data and sources the estimate uses.

| ID | Source | Use |
| --- | --- | --- |
| REF-001 | 2024 ERP workflow rollout for expenses (actuals) | Analogous basis |
| REF-002 | Vendor configuration effort guide 3.2 | Cross-check |

## Method

State the primary method and the cross-check, and explain any divergence between them.

| Field | Value |
| --- | --- |
| Primary method | Three-point bottom-up |
| Cross-check method | Analogous, from REF-001 scaled by rule count |
| Divergence and explanation | Analogous gives 15 percent more; expenses had more approval rules, so the bottom-up figure stands |

## Work breakdown

Estimate each deliverable with optimistic, most likely, and pessimistic values in person-days.

| WBS ID | Deliverable | Owner | Optimistic | Most likely | Pessimistic | Expected |
| --- | --- | --- | --- | --- | --- | --- |
| WBS-001 | Workflow configuration | Tom Reyes | 20 | 30 | 50 | 31.7 |
| WBS-002 | ERP integration | Tom Reyes | 25 | 40 | 70 | 42.5 |
| WBS-003 | Testing and UAT support | Omar Haddad | 15 | 20 | 35 | 21.7 |

Expected equals (optimistic plus four times most likely plus pessimistic) divided by six.

## Non-build work

Show that non-build work is included, not assumed away.

| Item | Included | Person-days |
| --- | --- | --- |
| Requirements and stakeholder time | Yes | 10 |
| Training delivery | Yes | 6 |
| Cutover and hypercare | Yes | 8 |

## Result

Report the expected value, the range, and the confidence of the figure quoted.

| Measure | Value |
| --- | --- |
| Expected effort | 120 person-days |
| Range | 84 to 179 person-days |
| Figure quoted and its confidence | 140 person-days at about 80 percent confidence |
| Duration implied | About 9 weeks with a team of three at 90 percent availability |

## Fit for the decision

State why this precision suits the decision it supports.

Example: a funding decision at requirements stage needs a range within about 30 percent; the design-stage estimate will narrow it before commitment.

## Assumptions

What the document takes as true, each with the effect if it proves wrong.

| ID | Assumption | Consequence if false | Owner to confirm |
| --- | --- | --- | --- |
| A-001 | The ERP API supports real-time posting | Integration rises to about 60 person-days, plus about 18 | Tom Reyes |

## Risks and contingency

Derive contingency from named risks, not a flat percentage, and show it apart from the estimate.

| Risk ID | Description | Probability | Impact (person-days) | Exposure |
| --- | --- | --- | --- | --- |
| RSK-002 | API fails at volume and needs rework | 20 percent | 30 | 6 |

## What would make this wrong

Name the three things most likely to move the number, and by how much.

| Driver | Effect |
| --- | --- |
| Real-time posting not supported | Plus about 18 person-days |

## Re-estimation plan

State when the estimate will be refined, so it improves as knowledge does.

| Stage | Trigger | Expected range width |
| --- | --- | --- |
| Design | Design approved | Within 15 percent |

## Re-estimation history

Record each revision, with why it moved.

| Date | Stage | Expected | Range | Reason for movement |
| --- | --- | --- | --- | --- |
| 2026-06-10 | Requirements | 120 | 84 to 179 | First estimate |

## Monte Carlo analysis

For large or high-risk estimates, simulate the combined range and report percentiles.

| Percentile | Person-days |
| --- | --- |
| P50 | 118 |
| P80 | 140 |

## Cost conversion

For funding decisions, convert effort to cost with the rates used.

| Role | Rate per day | Days | Cost |
| --- | --- | --- | --- |
| ERP developer | 600 pounds | 90 | 54,000 pounds |

## Outputs

A defended estimate with a range and confidence, its basis, assumptions, and contingency, and a plan to refine it.

## Review criteria

- The basis and method are stated.
- Assumptions are explicit, with consequences and owners.
- Uncertainty is shown as a range with a confidence level.
- The estimate covers the full scope, including non-build work.
- Inputs and reference data are sourced.
- The precision fits the decision.
- The estimate is set up to be refined.

## Practice anchor

Estimation; Plan Business Analysis Approach; Risk Analysis and Management for contingency. Owned by the estimation skill.

## House style

Write the narrative with the natural-prose-editor pass and no em dashes. See `docs/methodology/editorial-style.md`.
