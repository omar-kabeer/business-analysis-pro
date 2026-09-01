# Decision Model Evaluation Rubric

A repeatable rubric for judging whether a decision model captures decision logic completely and correctly. A decision model, using decision tables or trees, represents the logic by which a decision is made. Used by the decision-analysis and visual-modelling skills. Based on BABOK Decision Modelling (10.17).

## Scoring scale

For each dimension score 0 to 3: 0 absent, 1 weak, 2 adequate, 3 strong.

## Dimensions

| # | Dimension | What good looks like |
| --- | --- | --- |
| 1 | Decision defined | The decision the model represents, and its inputs and output, are defined. |
| 2 | Rules complete | The rules cover every combination of inputs; no case is undefined. |
| 3 | No overlap | No two rules give conflicting outcomes for the same case. |
| 4 | Conditions clear | The conditions and their values are stated precisely. |
| 5 | Outcomes | Each rule states its outcome unambiguously. |
| 6 | Notation valid | The decision table or tree follows a valid notation, such as DMN. |
| 7 | Traceable | The rules trace to the business rules or policy behind them. |

## Result

Total the scores (maximum 21):

- Pass: 17 or higher with no dimension at 0.
- Pass with changes: 12 to 16, or a single quick-to-fix dimension at 1.
- Fail: below 12, or any dimension at 0.

Record findings by severity with a specific fix, and route material issues back to the decision-analysis skill.

## Findings template

| Dimension | Score | Evidence | Gap and fix |
| --- | --- | --- | --- |
|  |  |  |  |
