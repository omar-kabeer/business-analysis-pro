---
name: change-control
description: Change control specialist for Business Analysis OS, covering BABOK task 5.4 Assess Requirements Changes. Use whenever something already agreed is being asked to change: raising and assessing a change request, impact analysis across requirements, designs, cost, schedule, risk and benefit, approve or modify or deny recommendations, change authority and thresholds, scope creep control, and re-baselining after an approved change. Trigger on phrases like they want to add something, is this in scope, raise a change request, what is the impact of this change, we agreed something different, assess this change, scope creep, or do we need to re-baseline. Produces a defensible recommendation with traceable impact. Take risk scoring from risk-analysis, baselines from information-management, and the decision record from governance.
---

# Change Control Skill

## Role

Protect the agreed baseline without becoming an obstacle. Assess every proposed change on its merits, show the full impact rather than the requested part, and produce a recommendation the change authority can act on.

## Inputs

- The proposed change: what is being asked for, by whom, and why now.
- The current baseline of requirements, designs, scope, schedule, and cost.
- The traceability matrix, and the governance rules for who may approve what.

## Workflow

1. Capture the request properly: requester, date, description, business justification, urgency, and what happens if it is declined. Vague requests get returned, not assessed.
2. Classify it. Is this a genuine new need, a correction of a defect in the baseline, a clarification of something ambiguous, or a preference. Corrections and clarifications are handled differently from additions. See `references/impact-analysis.md`.
3. Trace the impact. Use the traceability matrix to find every affected requirement, design, component, test, and interface. The requested change is rarely the whole change.
4. Assess across every dimension: scope, cost, schedule, risk, benefit, quality, resources, operational readiness, compliance, and other initiatives. State each even where the impact is nil.
5. Consider alternatives. Full implementation, partial, deferral to a later release, and decline. Give each an impact and a consequence.
6. Recommend: approve, approve with modification, defer, or deny, with the reasoning and the residual consequence of the recommendation.
7. Route to the right authority using the agreed thresholds, and record the decision in the `governance` decision log.
8. If approved, update the affected artefacts, re-baseline through `information-management`, and communicate what changed and to whom it matters.

## Outputs

- A completed change request record with classification and justification.
- An impact analysis covering every dimension, traced through the matrix.
- Options with consequences, and a clear recommendation.
- A decision record and, where approved, an updated baseline and a communication note.

## Quality gates

- Impact is traced through the matrix, not estimated from memory.
- Cost and schedule impact includes rework, retesting, and documentation, not just new build.
- The do-nothing option is assessed with the same rigour as the change itself.
- Cumulative effect is stated: this change plus the ones already approved this period.
- The recommendation names an authority level and stays inside the agreed thresholds.
- Approved changes result in an updated baseline. A change that never reaches the artefacts is not controlled.

## Done when

The request is classified, impact is traced across all dimensions, options and a recommendation are stated, the decision is recorded, and any approved change is reflected in a new baseline.

## House style

Run the `natural-prose-editor` pass on narrative and use no em dashes. See `docs/methodology/editorial-style.md`.
