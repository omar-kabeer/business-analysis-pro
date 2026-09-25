# Design Options Evaluation Rubric

A repeatable rubric for judging whether a set of design options is defined well enough to choose between. Design options are alternative ways to satisfy the need, each with a solution approach, components, and improvement opportunities. Used by the architecture and solution-evaluation skills and applied to options produced from `templates/design-options.md`. Based on BABOK Define Design Options (7.5).

## Scoring scale

For each dimension score 0 to 3: 0 absent, 1 weak, 2 adequate, 3 strong.

## Dimensions

| # | Dimension | What good looks like |
| --- | --- | --- |
| 1 | Distinct options | The options are genuinely distinct and each is viable. |
| 2 | Solution approach | Each option states whether components are created, purchased, or a combination. |
| 3 | Components | The solution components of each option are defined. |
| 4 | Improvement opportunities | Opportunities to improve the operation of the business are identified and compared. |
| 5 | Integration | The proposed integration of components is considered in each option. |
| 6 | Pros, cons, and cost | The advantages, disadvantages, and costs of each option are set out. |
| 7 | Feasible | Each option is feasible within the constraints. |
| 8 | Traceable | The options address the requirements and needs. |

## Scoring anchors

Anchors describe the extreme scores; 1 and 2 interpolate between them.

| # | Score 0 (absent) | Score 3 (strong) |
| --- | --- | --- |
| 1 | One option, or near-identical variants. | Genuinely distinct and viable options. |
| 2 | No make-or-buy approach stated. | Each states create, purchase, or a combination. |
| 3 | Components undefined. | The solution components of each option are defined. |
| 4 | No improvement opportunities considered. | Opportunities to improve the business are identified and compared. |
| 5 | Integration ignored. | Proposed integration of components is considered. |
| 6 | No pros, cons, or costs. | Advantages, disadvantages, and costs are set out. |
| 7 | Options not feasible within constraints. | Each option is feasible within the constraints. |
| 8 | No link to requirements. | The options address the requirements and needs. |

## Common failure modes

- Straw options: one real option padded with alternatives no one would pick.
- No do-nothing: the baseline of keeping the current state is missing.
- Approach unstated: create versus buy left implicit, hiding cost and risk.
- Cost-free comparison: advantages listed with no cost or downside, so the choice looks obvious for the wrong reason.
- Integration blind spot: each option works alone but its fit with existing systems is unexamined.

## Result

Total the scores (maximum 24):

- Pass: 20 or higher with no dimension at 0.
- Pass with changes: 14 to 19, or a single quick-to-fix dimension at 1.
- Fail: below 14, or any dimension at 0.

Record findings by severity with a specific fix, and route material issues back to the architecture skill.

## Findings template

| Dimension | Score | Evidence | Gap and fix |
| --- | --- | --- | --- |
|  |  |  |  |
