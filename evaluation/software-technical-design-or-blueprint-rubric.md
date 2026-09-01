# Software / Technical Design or Blueprint Evaluation Rubric

A repeatable rubric for judging whether a software or technical design is sound and buildable. The design or blueprint describes how a solution will be built, with its components, data, and interfaces. Used by the architecture skill. Based on BABOK Information Technology Perspective (11.3).

## Scoring scale

For each dimension score 0 to 3: 0 absent, 1 weak, 2 adequate, 3 strong.

## Dimensions

| # | Dimension | What good looks like |
| --- | --- | --- |
| 1 | Meets requirements | The design satisfies the functional and non-functional requirements. |
| 2 | Components | The components and their responsibilities are defined. |
| 3 | Interfaces and data | The interfaces, data structures, and integrations are defined. |
| 4 | Non-functional | Performance, security, and reliability are addressed. |
| 5 | Trade-offs | The design decisions and their trade-offs are recorded. |
| 6 | Buildable | The design is detailed enough to build from. |
| 7 | Traceable | The components trace to the requirements they realize. |

## Result

Total the scores (maximum 21):

- Pass: 17 or higher with no dimension at 0.
- Pass with changes: 12 to 16, or a single quick-to-fix dimension at 1.
- Fail: below 12, or any dimension at 0.

Record findings by severity with a specific fix, and route material issues back to the architecture skill.

## Findings template

| Dimension | Score | Evidence | Gap and fix |
| --- | --- | --- | --- |
|  |  |  |  |
