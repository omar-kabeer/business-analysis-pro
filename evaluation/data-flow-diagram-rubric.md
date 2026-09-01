# Data Flow Diagram (DFD) Evaluation Rubric

A repeatable rubric for judging whether a data flow diagram models data movement correctly. A DFD shows how data moves between processes, stores, and external entities. Used by the data-modelling and visual-modelling skills. Based on BABOK Data Flow Diagrams (10.13).

## Scoring scale

For each dimension score 0 to 3: 0 absent, 1 weak, 2 adequate, 3 strong.

## Dimensions

| # | Dimension | What good looks like |
| --- | --- | --- |
| 1 | Elements valid | Processes, data stores, external entities, and data flows are used correctly. |
| 2 | Balanced levels | The levels balance: the flows in and out of a process match its decomposition. |
| 3 | No black holes | No process has inputs but no outputs. |
| 4 | No miracles | No process has outputs with no inputs to produce them. |
| 5 | Stores and flows labelled | Every data store and data flow is labelled. |
| 6 | Boundary | The system boundary and external entities are clear. |
| 7 | Readable | The diagram is legible and labelled so a reader can follow it unaided. |

## Result

Total the scores (maximum 21):

- Pass: 17 or higher with no dimension at 0.
- Pass with changes: 12 to 16, or a single quick-to-fix dimension at 1.
- Fail: below 12, or any dimension at 0.

Record findings by severity with a specific fix, and route material issues back to the data-modelling skill.

## Findings template

| Dimension | Score | Evidence | Gap and fix |
| --- | --- | --- | --- |
|  |  |  |  |
