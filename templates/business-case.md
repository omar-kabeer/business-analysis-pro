---
type: deliverable
domain: finance
status: draft
version: 1.0.0
---

# Business Case

## Purpose

Justify a course of action by comparing the benefits of a proposed solution against the cost, effort, and risk of acquiring and living with it. This is the working form of the BABOK Business Cases technique (10.7), with the financial section built on Financial Analysis (10.20). Keep the effort proportional to the size and importance of the decision. Give decision makers enough to approve without specifying the implementation method.

## Document Control

| Field | Value |
| --- | --- |
| Initiative |  |
| Sponsor |  |
| Business Analyst |  |
| Finance reviewer |  |
| Version | 1.0.0 |
| Status | Draft |
| Last Updated |  |

## 1. Executive summary

Lead with the decision. State the situation, the complication that forces a choice, the recommended option, the quantified value, the main risks, and the specific approval requested. A reader should grasp the ask from this section alone. Draft it last, from the analysis below.

## 2. Need assessment

State the business need that drives the case: the problem or opportunity, expressed from the enterprise perspective, and its link to strategy. Quantify the impact of the current situation and the cost of doing nothing.

| Item | Detail |
| --- | --- |
| Business need |  |
| Strategic alignment (goal or objective) |  |
| Problem or opportunity |  |
| Impact today (quantified) |  |
| Cost of doing nothing |  |

## 3. Desired outcomes

Describe the state that should result if the need is met. Outcomes must be measurable and independent of any specific solution, so they can be used to compare options and to judge success after delivery.

| ID | Desired outcome | Measure | Baseline | Target | Review point |
| --- | --- | --- | --- | --- | --- |
| OUT-001 |  |  |  |  |  |

## 4. Options considered

Identify and assess alternative solutions. Always include the do-nothing option. Assess each option on scope, feasibility, and its assumptions, risks, and constraints, with an indicative cost and benefit.

| Option | Scope (in and out) | Feasibility (organisational and technical) | Key assumptions, risks, constraints | Indicative cost | Indicative benefit |
| --- | --- | --- | --- | --- | --- |
| Do nothing |  |  |  |  |  |
| Option A |  |  |  |  |  |
| Option B |  |  |  |  |  |

## 5. Financial analysis

Run the financial analysis for the recommended option and any close alternative, over a time horizon long enough for the solution to be in full use and the value to be realised.

### 5.1 Assumptions

State every assumption so the numbers can be reviewed and challenged. At minimum record the discount rate, the time horizon, and the total cost of ownership period.

| Assumption | Value | Source or basis |
| --- | --- | --- |
| Discount rate (hurdle rate) |  |  |
| Time horizon (years) |  |  |
| Total cost of ownership period |  |  |
| Key volume, price, or adoption assumptions |  |  |

### 5.2 Cost-benefit analysis

Lay out benefits and costs by period. Net benefit is benefits minus costs; cumulative net benefit shows when the investment turns positive (the payback point).

| Line | Year 0 | Year 1 | Year 2 | Year 3 |
| --- | --- | --- | --- | --- |
| Benefit: new or protected revenue |  |  |  |  |
| Benefit: reduced operating cost |  |  |  |  |
| Benefit: time savings |  |  |  |  |
| Benefit: reduced cost of errors or risk |  |  |  |  |
| Total benefits |  |  |  |  |
| Cost: build or acquire (project) |  |  |  |  |
| Cost: ongoing support and operation |  |  |  |  |
| Cost: transition (data, training, rollout) |  |  |  |  |
| Total costs |  |  |  |  |
| Net benefit |  |  |  |  |
| Cumulative net benefit |  |  |  |  |

### 5.3 Investment metrics

Use a combination of measures, since each gives a different view. Interpret them honestly.

| Metric | Definition | Result | Interpretation |
| --- | --- | --- | --- |
| Total cost of ownership | Cost to acquire, use, and support the solution over the horizon |  |  |
| ROI | (Total benefits minus cost of investment) divided by cost of investment |  | Higher is better; compare options over the same period |
| Payback period | Time until cumulative net benefit turns positive |  | Ignores value after payback; use as a secondary lens |
| Present value | Sum of net benefit per period divided by (1 plus discount rate) to the power of the period |  | In today's currency |
| NPV | Present value minus cost of investment |  | Greater than zero beats the discount rate; primary metric |
| IRR | The rate at which NPV equals zero |  | Compare to the hurdle rate; below it, do not invest |

### 5.4 Sensitivity and scenario analysis

Test the result against the assumptions that matter most. Show a base, downside, and upside case, and state the break-even point for the key driver.

| Scenario | Key changed assumptions | NPV | IRR | Payback |
| --- | --- | --- | --- | --- |
| Base |  |  |  |  |
| Downside |  |  |  |  |
| Upside |  |  |  |  |

Break-even: state the value of the critical driver (price, volume, adoption, cost) at which NPV equals zero.

### 5.5 Non-financial value

Record benefits and costs that resist quantification (reputation, staff morale, flexibility, customer satisfaction, reduced risk exposure, compliance). Relate them back to strategic goals so they are not lost in a numbers-only view.

## 6. Recommended solution

Describe the most desirable option and why it wins on outcomes, value, feasibility, and risk. Include an estimate of cost and duration to implement, and the measurable benefits and outcomes that will be tracked after go-live.

## 7. Risks and mitigations

| ID | Risk | Probability | Impact | Response (avoid, reduce, transfer, accept) | Owner |
| --- | --- | --- | --- | --- | --- |
| RSK-001 |  |  |  |  |  |

## 8. Assumptions and constraints

List the assumptions the case depends on and the constraints on any solution (budget, time, technology, policy, regulatory). Flag assumptions for confirmation.

## 9. Implementation overview

Give a high-level view of how the change would be delivered (phases, timeline, major dependencies). Do not specify the detailed method; that belongs to delivery.

## 10. Decision required

State exactly what is being asked of whom and by when (approve funding, approve to proceed to the next stage, or decline), and the conditions attached.

## Review criteria

- The need is stated from the enterprise perspective and linked to strategy.
- Desired outcomes are measurable and solution-independent.
- Alternatives, including do-nothing, are assessed on scope, feasibility, and risk.
- Every cost and benefit has a stated assumption; the model is internally consistent.
- Metrics are computed correctly and interpreted honestly, and the result is stress-tested.
- Non-financial value and risks are acknowledged, not omitted to flatter the case.
- The recommendation follows from the analysis and the ask is explicit.

## BABOK anchor

Business Cases (10.7); Financial Analysis (10.20); desired outcomes trace to Define Future State (6.2) and Analyze Potential Value and Recommend Solution (7.6).

## House style

Write the narrative with the natural-prose-editor pass and no em dashes. See `docs/methodology/editorial-style.md`.
