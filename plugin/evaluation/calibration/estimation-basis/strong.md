# Estimation Basis

## State exactly what is included, and list what is excluded. Exclusions carry more weight than inclusions in any later dispute.

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
