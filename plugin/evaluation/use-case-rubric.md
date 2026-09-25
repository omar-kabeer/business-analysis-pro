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

## Scoring anchors

Anchors describe the extreme scores; 1 and 2 interpolate between them.

| # | Score 0 (absent) | Score 3 (strong) |
| --- | --- | --- |
| 1 | No actor or goal stated. | The primary actor and the goal achieved are stated. |
| 2 | No preconditions or trigger. | Preconditions and any trigger are stated. |
| 3 | The main flow is vague or out of order. | The main success flow is a clear, ordered sequence. |
| 4 | Alternate paths are ignored. | The alternate paths are described. |
| 5 | Exception and error paths are ignored. | The exception and error paths are described. |
| 6 | No postconditions. | The postconditions on success are stated. |
| 7 | Too vague to derive tests. | Specific enough to derive test cases from. |
| 8 | No trace to a requirement or goal. | Traces to the requirements or goals it serves. |

## Common failure modes

- Happy-path only: the main flow is written, but alternates and exceptions are missing.
- System-centric: steps describe internal processing rather than the actor's interaction.
- Goal drift: the use case wanders across several goals instead of one.
- Untestable steps: vague steps from which no test case can be written.
- Missing preconditions: the flow assumes state that is never established.
- Essay, not steps: a paragraph of narrative instead of a numbered, followable flow.

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
