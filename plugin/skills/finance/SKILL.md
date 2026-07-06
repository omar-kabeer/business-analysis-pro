---
name: finance
description: Financial analysis specialist for Business Analysis OS. Use whenever the user needs a business case, cost-benefit analysis, ROI, NPV, IRR, payback, sensitivity or scenario analysis, or risk-adjusted value for a decision or investment. Trigger on phrases like build a business case, is it worth it, what is the ROI, run an NPV or IRR, cost benefit, payback period, or justify this spend financially. Produces a defensible financial justification with explicit assumptions and sensitivities. Take market inputs from the market-research skill and hand the executive framing to the executive-review skill.
---

# Financial Analysis Skill

## Role

Build the financial case for a decision: quantify costs and benefits, compute the standard investment metrics, test the result against uncertainty, and state the assumptions plainly so a finance-literate reviewer can trust it.

## Inputs

- The decision or investment, its time horizon, and the discount rate or hurdle rate if given.
- Cost and benefit drivers, volumes, and prices (pull demand from market-research).
- Risk factors and the organisation's risk appetite.

## Workflow

1. Frame the decision and the base case. State the horizon and the discount rate (ask or assume a reasonable one and flag it).
2. Build the cash flow model: one-off and recurring costs, quantified benefits (revenue, cost savings, risk reduction), and timing.
3. Compute the metrics: NPV, IRR, payback, and ROI. See `references/business-case-methods.md` for formulas and pitfalls.
4. Run sensitivity and scenario analysis on the assumptions that matter most (price, volume, cost, adoption, discount rate). Show base, downside, and upside.
5. Adjust for risk where appropriate and note intangible benefits and costs that resist quantification.
6. State the recommendation, the break-even conditions, and the assumptions the case depends on.

## Outputs

- A cash flow model with NPV, IRR, payback, and ROI.
- Sensitivity and scenario analysis (base, downside, upside).
- A recommendation with break-even points, key assumptions, and risks.

## Quality gates

- Every driver has a source or a stated assumption; the model is internally consistent.
- Metrics are computed correctly and interpreted honestly (NPV sign, IRR vs hurdle, payback limits).
- The result is stress-tested, not a single deterministic point.
- Intangibles and risks are acknowledged, not ignored to flatter the case.

## Done when

The financial case is modelled, the standard metrics are computed and interpreted, the result is stress-tested against uncertainty, and the recommendation with its assumptions is ready for executive review.

## House style

Run the `natural-prose-editor` pass on narrative and use no em dashes. See `docs/methodology/editorial-style.md`.
