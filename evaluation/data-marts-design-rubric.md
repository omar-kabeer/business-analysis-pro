# Data Marts Design Evaluation Rubric

A repeatable rubric for judging whether a data mart design serves its subject area soundly. A data mart is a subject-focused subset of the warehouse designed for a particular audience. Used by the business-intelligence and data-modelling skills. Based on BABOK Business Intelligence Perspective (11.2).

## Scoring scale

For each dimension score 0 to 3: 0 absent, 1 weak, 2 adequate, 3 strong.

## Dimensions

| # | Dimension | What good looks like |
| --- | --- | --- |
| 1 | Subject scope | The subject area and audience of the mart are defined. |
| 2 | Sources mapped | The sources feeding the mart are mapped. |
| 3 | Model | The dimensional model fits the questions the mart must answer. |
| 4 | Conformance | Dimensions conform with the warehouse and other marts. |
| 5 | Quality rules | Data quality rules for the mart are defined. |
| 6 | Lineage | The lineage from source to mart is traceable. |
| 7 | Performance | The design meets the query performance the audience needs. |

## Result

Total the scores (maximum 21):

- Pass: 17 or higher with no dimension at 0.
- Pass with changes: 12 to 16, or a single quick-to-fix dimension at 1.
- Fail: below 12, or any dimension at 0.

Record findings by severity with a specific fix, and route material issues back to the business-intelligence skill.

## Findings template

| Dimension | Score | Evidence | Gap and fix |
| --- | --- | --- | --- |
|  |  |  |  |
