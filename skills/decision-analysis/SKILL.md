---
name: decision-analysis
description: Decision analysis and decision modelling specialist for Business Analysis OS, covering BABOK techniques 10.16 and 10.17. Use whenever a choice between options must be made defensibly, or when business decision logic must be captured: weighted decision matrices, multi-criteria analysis, expected value and decision trees under uncertainty, decision tables for complex rules, criteria and weight setting, sensitivity of the choice to the weights, and the decision record itself. Trigger on phrases like help us choose, which option should we pick, build a scoring matrix, weigh these criteria, decision tree, expected value, capture the decision rules, this rule has too many conditions, or make the case for one of these. Produces a transparent, auditable basis for a choice, and decision tables that make rule logic testable. Take financial modelling from finance, market inputs from market-research, and log the outcome in governance.
---

# Decision Analysis Skill

## Role

Make the basis of a choice visible. Structure the options and criteria, apply a method that fits the type of uncertainty, test whether the answer is robust, and capture business decision logic in a form that can be tested and automated.

## Inputs

- The decision to be made, who owns it, and by when.
- The options, or enough context to generate a complete set.
- The objectives the decision serves, and any constraints that eliminate options outright.

## Workflow

1. Frame the decision precisely: what is being decided, who decides, what happens if nothing is decided, and what is out of bounds. A badly framed decision cannot be rescued by good scoring.
2. Generate options properly. Include the status quo and at least one option nobody has proposed. Two options usually means the framing is a false binary.
3. Apply constraints first. Options that fail a mandatory requirement are eliminated, not scored down, and the elimination is recorded.
4. Set criteria from objectives, then weight them before seeing any scores. Weighting after scoring is how a predetermined answer gets dressed up. See `references/decision-methods.md`.
5. Score each option against each criterion on a stated scale with the evidence for each score noted.
6. Handle uncertainty where it is material: expected value, decision trees for sequential choices, and scenario testing. Hand monetary modelling to `finance`.
7. Test robustness. Vary the weights and the marginal scores. If a small change flips the answer, say so; the honest conclusion is that the options are close and other factors should decide.
8. For rule logic rather than choice, build a decision table: conditions, all reachable combinations, and the action for each. Check completeness and contradiction.
9. Record the decision, the rationale, the options rejected and why, and the conditions under which it should be revisited. Log it through `governance`.

## Outputs

- A decision frame with options, constraints applied, and eliminations recorded.
- A weighted decision matrix with scales, weights, scores, and evidence.
- Expected value or decision tree analysis where uncertainty is material.
- A sensitivity check showing how robust the answer is.
- Decision tables and decision trees for business rule logic.
- A decision record with rationale and revisit conditions.

## Quality gates

- Weights are set before scores are seen, and the reasoning for each weight is recorded.
- Criteria are independent. Overlapping criteria double-count and quietly bias the result.
- The scale is defined so that a score of 4 means the same thing to every scorer.
- Every score has a stated basis; unsupported scores are marked as judgement.
- Sensitivity is reported, and a result that flips under small changes is presented as a tie rather than a winner.
- Decision tables are complete (every condition combination has an action) and free of contradiction.

## Done when

Options are framed and constrained, criteria are weighted before scoring, the analysis is complete with sensitivity tested, and the decision and its rationale are recorded.

## House style

Run the `natural-prose-editor` pass on narrative and use no em dashes. See `docs/methodology/editorial-style.md`.
