# Decomposition Diagram / Breakdown Structure Evaluation Rubric

A repeatable rubric for judging whether a decomposition breaks a whole into its parts soundly. A decomposition diagram breaks an organizational unit, product scope, or problem into its component parts. Used by the business-analysis and visual-modelling skills. Based on BABOK Functional Decomposition (10.22).

## Scoring scale

For each dimension score 0 to 3: 0 absent, 1 weak, 2 adequate, 3 strong.

## Dimensions

| # | Dimension | What good looks like |
| --- | --- | --- |
| 1 | Root clear | The whole being decomposed is stated at the root. |
| 2 | MECE | The children of each node are mutually exclusive and collectively exhaustive. |
| 3 | Leaf nodes atomic | The lowest-level nodes are atomic and meaningful. |
| 4 | Consistent basis | Each level decomposes on a consistent basis. |
| 5 | Complete coverage | The parts together account for the whole. |
| 6 | Depth appropriate | The decomposition goes to a depth that suits its purpose. |
| 7 | Readable | The diagram is legible and labelled so a reader can use it unaided. |

## Result

Total the scores (maximum 21):

- Pass: 17 or higher with no dimension at 0.
- Pass with changes: 12 to 16, or a single quick-to-fix dimension at 1.
- Fail: below 12, or any dimension at 0.

Record findings by severity with a specific fix, and route material issues back to the business-analysis skill.

## Findings template

| Dimension | Score | Evidence | Gap and fix |
| --- | --- | --- | --- |
|  |  |  |  |
