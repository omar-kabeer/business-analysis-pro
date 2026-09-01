# State Model Evaluation Rubric

A repeatable rubric for judging whether a state model represents an object's states and transitions correctly. A state model, whether a state diagram or a state table, shows the states an entity can hold and the transitions between them. Used by the visual-modelling skill. Based on BABOK State Modelling (10.44).

## Scoring scale

For each dimension score 0 to 3: 0 absent, 1 weak, 2 adequate, 3 strong.

## Dimensions

| # | Dimension | What good looks like |
| --- | --- | --- |
| 1 | States exhaustive | All valid states of the entity are represented. |
| 2 | Initial and final | The initial state and any final states are shown. |
| 3 | Transitions valid | Each transition is triggered by a defined event and leads to a valid state. |
| 4 | No unreachable states | Every state can be reached, and none is a dead end unless it is a final state. |
| 5 | Guards and actions | Guard conditions and actions on transitions are correct where used. |
| 6 | Completeness | Every state and event combination is accounted for, in a diagram or a state table. |
| 7 | Readable | The model is legible and labelled so a reader can follow it unaided. |

## Result

Total the scores (maximum 21):

- Pass: 17 or higher with no dimension at 0.
- Pass with changes: 12 to 16, or a single quick-to-fix dimension at 1.
- Fail: below 12, or any dimension at 0.

Record findings by severity with a specific fix, and route material issues back to the visual-modelling skill.

## Findings template

| Dimension | Score | Evidence | Gap and fix |
| --- | --- | --- | --- |
|  |  |  |  |
