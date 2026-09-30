# Financial Analysis Playbook

How to build the financial case for a change, following BABOK Financial Analysis (10.20) and Business Cases (10.7). Use it with `business-case-methods.md`, which holds the formulas. Cite BABOK by section and paraphrase; do not copy guide text.

## What the numbers must answer

A financial analysis answers four questions for each option: what it costs, what it returns, when, and how sure we are. Every figure needs a source, a period, and an owner who stands behind it.

## Costs

- Cost of change: one-off costs to acquire, build, configure, migrate, train, and transition.
- Total cost of ownership: the cost of change plus running costs over the solution's life: licences, hosting, support, maintenance, upgrades, and eventual retirement.
- Opportunity cost: what the organisation gives up by funding this option instead of another.

Include the costs people forget: internal staff time, parallel running, data cleansing, change management, and decommissioning the old solution.

## Benefits

- Financial: revenue gained, cost avoided, cost reduced, working capital released.
- Non-financial: risk reduced, compliance achieved, satisfaction, strategic position. Quantify where a credible method exists; otherwise describe and rate them, and never convert them to money with invented rates.
- Value realisation: when each benefit starts, how it ramps up, and who is accountable for delivering it. A benefit with no owner is a hope.

## Core calculations

Worked example: one option costs 500,000 at the start (year 0) and delivers net benefits of 200,000 a year for four years. The discount rate is 10 percent.

| Year | Cash flow | Discount factor at 10% | Present value |
| --- | --- | --- | --- |
| 0 | -500,000 | 1.0000 | -500,000 |
| 1 | 200,000 | 0.9091 | 181,818 |
| 2 | 200,000 | 0.8264 | 165,289 |
| 3 | 200,000 | 0.7513 | 150,263 |
| 4 | 200,000 | 0.6830 | 136,603 |
| Total | 300,000 |  | 133,973 |

- Net present value: 133,973. Positive, so the option returns more than the 10 percent cost of capital.
- Internal rate of return: the rate at which NPV is zero, about 21.9 percent here. Compare it with the organisation's hurdle rate, not with zero.
- Payback period: cumulative undiscounted cash reaches 500,000 halfway through year 3, so 2.5 years. Discounted payback is longer: cumulative present value turns positive just after the end of year 3.
- Return on investment: net benefit over cost, (800,000 minus 500,000) divided by 500,000, which is 60 percent over four years. State the period, because ROI without a period cannot be compared.

Use the discount rate the finance function sets. If none is set, state the rate used and show the result at a higher and a lower rate.

## Comparing options

Always compare at least two options, one of which is the baseline (do nothing or minimum change), over the same period and at the same discount rate. Present NPV, IRR, payback, and TCO side by side, with the non-financial benefits and risks alongside. The option with the highest NPV is not automatically the recommendation: risk, readiness, and strategic fit can outweigh it, and the recommendation must say so explicitly when they do.

## Sensitivity and risk

1. Identify the three to five assumptions that drive the result, such as adoption rate, benefit size, cost overrun, and delay.
2. Vary each one at a time across a plausible range and show the effect on NPV. Present it as a table or a tornado chart.
3. Find the break-even point for the most uncertain assumption: how wrong it can be before NPV turns negative.
4. Where uncertainty is large, present low, expected, and high scenarios rather than a single figure.

A business case that shows only the expected case hides its risk.

## Business case structure

1. Need: the problem or opportunity, quantified, from Analyze Current State (6.1).
2. Desired outcomes: the objectives and how they will be measured (6.2).
3. Alternatives: the options assessed, including the baseline, with costs, benefits, risks, and readiness for each.
4. Recommendation: the chosen option, why, and the conditions under which the recommendation would change.
5. Benefits realisation: owners, timeline, and measures.

## Common failure modes

- Benefits counted twice, for example time saved and headcount reduced for the same hours.
- Costs of change only, with running costs left out.
- Non-financial benefits converted into large sums with no method.
- A single point estimate with no sensitivity.
- No baseline option, so the comparison flatters the recommendation.
- Discount rate, period, or currency not stated.

## Quality gates

Grade the business case with the rubric named in its quality profile (`evaluation/quality-profiles.json`), `business-case`, and the estimates behind it with `estimation-basis`. The deliverable-critic agent pressure-tests the case as a CFO would, and the solution-value-auditor agent checks value claims against objectives.
