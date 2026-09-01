# Use Case Evaluation Rubric

A repeatable rubric for judging whether a use case describes an interaction completely and testably. A use case describes the observable interaction between actors and a solution that achieves a goal, including its main, alternate, and exception flows. Used by the requirements and visual-modelling skills. Based on BABOK Use Cases and Scenarios (10.47).

## Scoring scale

For each dimension score 0 to 3: 0 absent, 1 weak, 2 adequate, 3 strong.

## Dimensions

| # | Dimension | What good looks like |
| --- | --- | --- |
| 1 | Actor and goal | The primary actor and the goal the use case achieves are stated. |
| 2 | Preconditions | The preconditions and any triggers are stated. |
| 3 | Main flow | The main success flow is a clear, ordered sequence of steps. |
| 4 | Alternate flows | The alternate paths are described. |
| 5 | Exception flows | The exception and error paths are described. |
| 6 | Postconditions | The postconditions or guarantees on success are stated. |
| 7 | Testable | The use case is specific enough to derive test cases from. |
| 8 | Traceable | The use case traces to the requirements or goals it serves. |

## Result

Total the scores (maximum 24):

- Pass: 20 or higher with no dimension at 0.
- Pass with changes: 14 to 19, or a single quick-to-fix dimension at 1.
- Fail: below 14, or any dimension at 0.

Record findings by severity with a specific fix, and route material issues back to the requirements skill.

## Findings template

| Dimension | Score | Evidence | Gap and fix |
| --- | --- | --- | --- |
|  |  |  |  |
