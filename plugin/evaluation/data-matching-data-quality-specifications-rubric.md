# Data-Matching / Data-Quality Specifications Evaluation Rubric

A repeatable rubric for judging whether data-matching and data-quality specifications are sound. These specifications define how records are matched and how data quality is measured and enforced. Used by the business-intelligence and data-analysis skills. Based on BABOK Business Intelligence Perspective (11.2).

## Scoring scale

For each dimension score 0 to 3: 0 absent, 1 weak, 2 adequate, 3 strong.

## Dimensions

| # | Dimension | What good looks like |
| --- | --- | --- |
| 1 | Match rules | The rules for matching and de-duplicating records are defined. |
| 2 | Quality dimensions | The quality dimensions measured, such as completeness and accuracy, are stated. |
| 3 | Thresholds | Acceptable thresholds and what happens on breach are defined. |
| 4 | Survivorship | The rules for which record survives a merge are defined. |
| 5 | Measurable | The quality measures are measurable and reportable. |
| 6 | Exceptions | How exceptions and manual review are handled is defined. |
| 7 | Lineage | The rules trace to the sources and targets they govern. |

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
