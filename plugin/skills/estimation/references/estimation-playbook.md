# Estimation Playbook

How to produce an estimate that is honest about its uncertainty, fit for the decision it supports, and defensible when challenged. This playbook applies BABOK Estimation (10.19), within Plan Business Analysis Approach (3.1) and Analyze Potential Value and Recommend Solution (7.6). Parametric software estimation follows COCOMO II version 2.1 (`cocomo-ii-2.1`); contingency follows the risk guidance of ISO 31000 (`iso-31000-2018`). Record every estimate in `templates/estimation-basis.md`.

## When this playbook applies

Use it whenever effort, cost, duration, or size must be forecast: funding decisions, release plans, business cases, bids, and the business analysis effort itself. Use the finance skill to turn the estimate into a financial case.

## Step 1: Name the decision and the precision it needs

State what the estimate will decide and how precise it must be. An early funding decision can work with a wide range; a fixed-price bid cannot. Say where the work sits on the cone of uncertainty (concept, requirements, design, or build), because the achievable precision narrows as the work becomes clearer.

## Step 2: Define the scope, including exclusions

List what is included and, explicitly, what is not. Exclusions carry more weight than inclusions in any later dispute. Include non-build work: requirements and stakeholder time, reviews and rework, test preparation, environments, data migration, training, cutover, hypercare, and coordination.

## Step 3: Choose a method and a cross-check

| Method | How it works | Fits |
| --- | --- | --- |
| Analogous | Scale from a similar past piece of work | Early, when a good comparable exists |
| Parametric | Apply a model to measured size and drivers | Where a calibrated model and size measure exist |
| Bottom-up | Estimate each work package and sum | When the breakdown is known |
| Three-point | Optimistic, most likely, and pessimistic per item | Wherever uncertainty matters |
| Planning poker or wideband Delphi | Structured group judgement | When expertise is spread across a team |

Use one method as primary and a second as a cross-check, and explain any difference between them.

## Step 4: If using COCOMO II, apply it as defined

COCOMO II is a defined parametric model, so an estimate that claims to be COCOMO must follow it (see `sources/conformance/cocomo-ii-2.1.md`):

- effort equals a coefficient times size raised to an exponent, times the product of the effort multipliers (COCOMO-EE-01);
- state which model is used: Early Design with 6 effort multipliers, or Post-Architecture with 16, plus the five scale factors (EE-02);
- give size in thousands of source lines or unadjusted function points, converting reused or adapted code with the adaptation factors (EE-03);
- rate all five scale factors, which set the exponent (EE-04), and rate every effort multiplier rather than defaulting it silently (EE-05);
- express the result in person-months (EE-06).

For configuring a package rather than writing code, COCOMO's size measures rarely fit; say so, and use analogous or bottom-up methods instead.

## Step 5: Express uncertainty as a range

For three-point estimates, the PERT expected value is (optimistic plus four times most likely plus pessimistic) divided by six. Report the range, the expected value, and the figure quoted with its confidence level. A single number with no range invites it to be treated as a commitment.

## Step 6: Derive contingency from named risks

Size contingency from the risks that could move the estimate, not from a flat percentage. Following ISO 31000's guidance, analyse each risk's likelihood and consequence in effort or cost, and include its exposure (probability times impact) in the contingency. Show contingency separately from the estimate, with the risks it covers.

## Step 7: Plan to re-estimate

State when the estimate will be refined (for example, after design approval) and how wide the range is expected to be then. Record each revision and why it moved.

## Stop rules

The estimate is ready when the decision and required precision are stated, the scope names its exclusions and non-build work, a primary method and cross-check agree or their difference is explained, the result is a range with a confidence level, contingency is derived from named risks, and a re-estimation point is set.

## Common failures

- A single-point estimate quoted as a commitment at concept stage.
- Non-build work left out.
- A method named ("COCOMO") but not applied as defined.
- Contingency as a flat percentage.
- The first number never revisited as scope becomes clear.

## Worked example

Supplier invoice approval, release 1, at requirements stage, for the funding decision.

Precision: a range within about 30 percent is enough for funding; the design-stage estimate narrows it before commitment.

Method: three-point bottom-up as primary, cross-checked against the 2024 expenses workflow rollout (analogous). COCOMO II was not used, because the work is configuration of a package, not code, and COCOMO's size measures do not fit it.

Work breakdown in person-days:

| Package | Optimistic | Most likely | Pessimistic | Expected |
| --- | --- | --- | --- | --- |
| Workflow configuration | 20 | 30 | 50 | 31.7 |
| ERP integration | 25 | 40 | 70 | 42.5 |
| Testing and UAT support | 15 | 20 | 35 | 21.7 |
| Non-build work | 24 | 24 | 24 | 24.0 |

Result: expected about 120 person-days; range 84 to 179; quoted 140 person-days at about 80 percent confidence.

Contingency: RSK-002 (API rework, 20 percent likely, 30 person-days) contributes an exposure of 6 person-days, shown separately.

Cross-check: the analogous estimate was 15 percent higher; the expenses rollout had more approval rules, so the bottom-up figure stands.

Re-estimate after design approval, expected within 15 percent.

## Sources

- `babok-3.0-2015`: Estimation (10.19), within 3.1 and 7.6.
- `cocomo-ii-2.1`: the parametric model and the conditions for claiming a COCOMO estimate, paraphrased.
- `iso-31000-2018`: analysing risk likelihood and consequence to size contingency, as guidance.
