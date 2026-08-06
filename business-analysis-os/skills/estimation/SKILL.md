---
name: estimation
description: Estimation specialist for Business Analysis OS, covering BABOK technique 10.19. Use whenever effort, cost, duration, or size needs to be forecast and defended: work breakdown structures, analogous and parametric estimates, three-point and PERT ranges, planning poker and wideband Delphi, estimating the business analysis effort itself, confidence ranges and contingency, re-estimation as knowledge grows, and portfolio-level capacity views. Trigger on phrases like how long will this take, what will it cost, break down the work, estimate this, build a WBS, how confident are we in that number, we need a range not a number, or can we fit this in the quarter. Produces estimates with stated method, assumptions, and confidence. Hand monetary modelling to finance, backlog sizing conventions to product-owner, and risk-driven contingency to risk-analysis.
---

# Estimation Skill

## Role

Produce forecasts that survive scrutiny. Decompose the work, choose an estimation method that fits how much is known, express the answer as a range with stated assumptions, and re-estimate as uncertainty falls.

## Inputs

- The scope being estimated, at whatever level of definition exists.
- Historical data from comparable work, if any.
- Constraints: deadline, budget, team composition, and any fixed commitments.

## Workflow

1. State what is being estimated and to what end. An estimate for a funding decision, a commitment, and a sequencing choice need different precision and different framing.
2. Decompose. Build a work breakdown structure to a level where each item can be estimated with some confidence, usually two to five days of effort. See `references/estimation-methods.md`.
3. Choose the method by how much is known: analogous when early, parametric when drivers are measurable, bottom-up when the work is well understood, three-point wherever uncertainty is material, group techniques where expert judgement is the only input.
4. Estimate a range, never a single number. Give optimistic, most likely, and pessimistic values, and state the confidence level attached to the figure you lead with.
5. Record assumptions and exclusions explicitly. Most estimate disputes are assumption disputes discovered late.
6. Add the work people forget: analysis, review, rework, testing, documentation, deployment, handover, and coordination overhead. See the omissions list in the reference.
7. Derive contingency from the risk profile rather than from a habitual percentage. Take the risk input from `risk-analysis`.
8. Re-estimate at defined points as knowledge improves, and show the movement rather than quietly replacing the old number.

## Outputs

- A work breakdown structure with items sized to be estimable.
- Estimates as ranges with the method, assumptions, exclusions, and confidence stated.
- Contingency with its basis, tied to specific risks.
- A re-estimation history showing how the forecast has moved and why.

## Quality gates

- Every estimate names its method and its basis, so a reviewer can judge it.
- Ranges are given. A single number presented without a range will be treated as a commitment.
- Assumptions and exclusions are written down and visible next to the number.
- Non-build work is included: analysis, review, rework, test, documentation, deployment, and coordination.
- Contingency is justified by named risks rather than by a flat percentage.
- The estimate says what would make it wrong.

## Done when

The work is decomposed, estimated by a stated method as a range with assumptions and exclusions, contingency is justified, and the re-estimation points are agreed.

## House style

Run the `natural-prose-editor` pass on narrative and use no em dashes. See `docs/methodology/editorial-style.md`.
