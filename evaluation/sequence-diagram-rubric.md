# Sequence Diagram Evaluation Rubric

A repeatable rubric for judging whether a sequence diagram models an interaction correctly. A sequence diagram shows the ordered messages exchanged between actors and components to accomplish a scenario. Used by the visual-modelling skill. Based on BABOK Sequence Diagrams (10.42).

## Scoring scale

For each dimension score 0 to 3: 0 absent, 1 weak, 2 adequate, 3 strong.

## Dimensions

| # | Dimension | What good looks like |
| --- | --- | --- |
| 1 | Actors and lifelines | The participating actors and components are present as lifelines. |
| 2 | Messages ordered | The messages are ordered in time and reflect the real interaction. |
| 3 | Matches scenario | The sequence matches the use case or scenario it represents. |
| 4 | Returns and responses | Return messages and responses are shown where they matter. |
| 5 | Alternatives | Alternative and loop fragments are used correctly where the scenario branches. |
| 6 | Notation valid | UML sequence notation is used consistently. |
| 7 | Readable | The diagram is legible and labelled so a reader can follow it unaided. |

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
