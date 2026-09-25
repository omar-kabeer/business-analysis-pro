# Requirements Traceability Matrix Evaluation Rubric

A repeatable rubric for judging whether a requirements traceability matrix links requirements soundly. The matrix records the relationships between requirements and their sources, designs, tests, and releases. Used by the requirements and visual-modelling skills. Based on BABOK Trace Requirements (5.1).

## Scoring scale

For each dimension score 0 to 3: 0 absent, 1 weak, 2 adequate, 3 strong.

## Dimensions

| # | Dimension | What good looks like |
| --- | --- | --- |
| 1 | Bidirectional | Each requirement traces backward to its source and forward to design, test, and release. |
| 2 | No orphans | Every requirement is linked; none is left untraced. |
| 3 | Coverage | Every objective is covered by a requirement and every requirement by a test. |
| 4 | Relationship correct | The link recorded for each pair is the correct relationship. |
| 5 | Current | The matrix reflects the current requirements and their links. |
| 6 | Complete columns | The trace targets, such as source, design, and test, are all present. |
| 7 | Usable | The matrix is legible and can be used to assess impact. |

## Result

Total the scores (maximum 21):

- Pass: 17 or higher with no dimension at 0.
- Pass with changes: 12 to 16, or a single quick-to-fix dimension at 1.
- Fail: below 12, or any dimension at 0.

Record findings by severity with a specific fix, and route material issues back to the requirements skill.

## Findings template

| Dimension | Score | Evidence | Gap and fix |
| --- | --- | --- | --- |
|  |  |  |  |
