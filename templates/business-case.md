---
type: deliverable
domain: finance
status: draft
version: 2.0.0
---

# Business Case

> **How to use this template.** Filled rows and "Example" lines illustrate one scenario so the expected depth is clear. Replace them with the facts of the work at hand: never carry example names, figures, or IDs into a real document, and say plainly when a fact is not yet known. Include every other section by default, and leave one out only when the user asks. Include these sections only when their condition applies or the user asks for them: Benefits realisation plan (standard or formal governance, or written for executive readers); Funding and procurement (formal governance, or high risk). The full rules are in `templates/business-case.toc.json`.

## Purpose

Justify a course of action by comparing the benefits of a proposed solution against the cost, effort, and risk of acquiring and living with it. This is the working form of the Business Cases technique, with the financial section built on Financial Analysis (10.20). Keep the effort proportional to the size and importance of the decision, and give decision makers enough to approve without specifying the implementation method. Graded by `evaluation/business-case-rubric.md`.

This template is a superset. Its table-of-contents manifest, `templates/business-case.toc.json`, marks which sections are core, standard, or extended and when each applies.

## Document Control

| Field | Value |
| --- | --- |
| Initiative | Supplier invoice approval |
| Sponsor | Finance Director |
| Business analyst | Omar Haddad |
| Finance reviewer | Management accountant |
| Version | 1.0.0 |
| Status | For approval |

## Executive summary

Lead with the decision. State the situation, the complication that forces a choice, the recommended option, the quantified value, the main risks, and the approval requested. Draft it last, from the analysis below.

Example: invoices take 14 days to approve, so 38 percent are paid late and about 60,000 pounds a year of discount is lost. We recommend configuring the ERP's licensed workflow module (option A) for 150,000 pounds up front. Over three years it returns an NPV of about 82,000 pounds at 8 percent, with payback in about 20 months; the main risk is approvers bypassing the tool. We ask the sponsor to approve funding by 2026-06-30.

## Scope

State the decision this case supports and its boundary.

Example: funding for release 1 (UK approval workflow). EU entities and the supplier portal will need their own cases.

## Inputs

List the sources behind the numbers, so each can be checked.

| ID | Source | Use |
| --- | --- | --- |
| IN-031 | ERP payment report, January to April 2026 | Discount lost; baseline |
| IN-032 | Estimation basis 1.0.0 | Internal effort |
| IN-034 | Vendor configuration quote VQ-07 | Configuration cost |
| IN-033 | AP time study, May 2026 | Staff time released |

## Need assessment

State the business need from the enterprise perspective, its link to strategy, and the cost of doing nothing.

| Item | Detail |
| --- | --- |
| Business need | Suppliers are paid late because approvals are slow |
| Strategic alignment | Finance strategy goal 2: be a customer suppliers want |
| Impact today | 38 percent paid late; about 60,000 pounds a year of lost discount; two supplier holds this year |
| Cost of doing nothing | Losses grow with volume; supply risk on critical parts |

## Desired outcomes

Outcomes are measurable and independent of any solution.

| ID | Desired outcome | Measure | Baseline | Target | Review point |
| --- | --- | --- | --- | --- | --- |
| OUT-001 | Suppliers are approved quickly | Average days to approval | 14 | 5 | 2026-12-31 |
| OUT-002 | Suppliers are paid on terms | Share paid within terms | 62 percent | 95 percent | 2027-03-31 |

## Options considered

Always include doing nothing. Assess each option on scope, feasibility, and its assumptions, risks, and constraints.

| Option | Scope | Feasibility | Key assumptions and risks | Indicative cost (3 years) | Indicative benefit (3 years) |
| --- | --- | --- | --- | --- | --- |
| Do nothing | Email approvals continue | Not applicable | Losses continue and grow | 0 | 0 |
| A: ERP workflow module | Routing, reminders, escalation, posting | High: licensed, vendor-supported | Real-time API (A-001); adoption (RSK-001) | 210,000 pounds | 330,000 pounds |
| B: Standalone workflow tool | As A, plus a separate interface | Medium: needs integration | Integration effort; second system to support | 320,000 pounds | 330,000 pounds |

## Financial assumptions

State every assumption so the numbers can be reviewed and challenged.

| Assumption | Value | Source or basis |
| --- | --- | --- |
| Discount rate | 8 percent | Group hurdle rate |
| Time horizon | 3 years | Useful life before the ERP upgrade |
| Discount captured | 60,000 pounds a year | IN-031: discounts missed on late invoices |
| AP time released | 50,000 pounds a year | IN-033: about 1.4 FTE at 35,000 pounds |

## Cost-benefit analysis

Benefits and costs by year for option A, in thousands of pounds.

| Line | Year 0 | Year 1 | Year 2 | Year 3 |
| --- | --- | --- | --- | --- |
| Benefit: discount captured | 0 | 60 | 60 | 60 |
| Benefit: AP time released | 0 | 50 | 50 | 50 |
| Total benefits | 0 | 110 | 110 | 110 |
| Cost: configuration and integration (IN-032, IN-034) | 120 | 0 | 0 | 0 |
| Cost: transition (training, cutover) | 30 | 0 | 0 | 0 |
| Cost: support and operation | 0 | 20 | 20 | 20 |
| Total costs | 150 | 20 | 20 | 20 |
| Net benefit | -150 | 90 | 90 | 90 |
| Cumulative net benefit | -150 | -60 | 30 | 120 |

## Investment metrics

Use several measures, since each gives a different view, and interpret them honestly.

| Metric | Definition | Result | Interpretation |
| --- | --- | --- | --- |
| Total cost of ownership | All costs over the horizon | 210,000 pounds | Includes support, not only the project |
| ROI | (Total benefits minus total costs) divided by total costs | 57 percent over 3 years | Compare options over the same period |
| Payback | Time until cumulative net benefit turns positive | About 20 months | A secondary lens: ignores value after payback |
| NPV | Discounted net benefits minus the investment, at 8 percent | About 82,000 pounds | Positive, so the case beats the hurdle rate; primary metric |
| IRR | Rate at which NPV is zero | About 36 percent | Well above the 8 percent hurdle |

## Sensitivity and scenario analysis

Test the result against the assumptions that matter most, and state the break-even for the key driver.

| Scenario | Changed assumption | NPV | IRR | Payback |
| --- | --- | --- | --- | --- |
| Base | As above | About 82,000 pounds | About 36 percent | About 20 months |
| Downside | Discount captured halves to 30,000 pounds a year | About 5,000 pounds | About 10 percent | 30 months |
| Upside | Discount captured rises to 80,000 pounds a year | About 134,000 pounds | About 53 percent | About 16 months |

Break-even: NPV is zero when discount captured falls to about 28,000 pounds a year, 47 percent of the base assumption.

## Non-financial value

Record benefits and costs that resist counting, tied to strategy.

Example: better supplier relationships and published payment performance (strategy goal 2); an audit trail for segregation of duties that closes finding AF-2025-04.

## Recommended solution

Say why the recommended option wins on outcomes, value, feasibility, and risk.

Example: option A delivers the same benefits as B for 110,000 pounds less over three years, uses a licensed and supported module, and avoids a second system.

## Risks and mitigations

Key risks to the case's value, each scored, with a response and an owner.

| ID | Risk | Probability | Impact | Response | Owner |
| --- | --- | --- | --- | --- | --- |
| RSK-001 | Approvers keep approving by email, so benefits slip | Likely | Major | Reduce: disable email approval at go-live | Financial Controller |
| RSK-002 | ERP API fails at month-end volume | Unlikely | Severe | Reduce: load test at 3 times peak | Tom Reyes |

## Assumptions

List the assumptions the case depends on, beyond the financial ones, with who confirms them.

| ID | Assumption | Effect if wrong | Confirm with |
| --- | --- | --- | --- |
| A-001 | The ERP API supports real-time posting | Integration cost rises by about 11,000 pounds | Tom Reyes |

## Implementation overview

Give a high-level view of delivery: phases, timeline, and major dependencies.

Example: configure and integrate in July and August; UAT in early September; go live mid September; benefits tracked from October.

## Decision required

State exactly what is asked of whom and by when, with any conditions.

Example: the Finance Director is asked to approve 150,000 pounds for release 1 by 2026-06-30, on condition that the load test passes before go-live.

## Benefits realisation plan

For funded cases, say who tracks each benefit, how, and when.

| Benefit | Owner | Measure | First review |
| --- | --- | --- | --- |
| Discount captured | Financial Controller | Monthly discount report | 2026-12-31 |

## Funding and procurement

For cases that trigger procurement or phased funding, state the funding stages and gates.

| Stage | Amount | Gate |
| --- | --- | --- |
| Release 1 | 150,000 pounds | Load test passed |

## Outputs

A decision-ready case, with a recommendation that follows from the analysis, an explicit ask, and outcomes that benefits tracking can measure after go-live.

## Review criteria

- The need is stated from the enterprise perspective, linked to strategy, and the cost of doing nothing is quantified.
- Desired outcomes are measurable and solution-independent.
- Real alternatives, including doing nothing, are assessed on scope, feasibility, and risk.
- Every cost and benefit has a stated assumption and source, and the model is internally consistent.
- NPV, IRR, payback, ROI, and total cost of ownership are computed correctly and interpreted honestly.
- Sensitivity is tested, with a break-even for the key driver.
- Non-financial value is recorded and tied to strategy.
- Key risks have responses and owners.
- The recommendation follows from the analysis, and the decision and approver are explicit.

## Practice anchor

Business Cases (10.7); Financial Analysis (10.20); Define Future State (6.2); Analyze Potential Value and Recommend Solution (7.6). Owned by the finance skill.

## House style

Write the narrative with the natural-prose-editor pass and no em dashes. See `docs/methodology/editorial-style.md`.
