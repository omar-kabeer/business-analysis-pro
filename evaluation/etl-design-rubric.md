# ETL Design Evaluation Rubric

A repeatable rubric for judging whether an extract, transform, and load design is sound. An ETL design defines how data is extracted from sources, transformed, and loaded into a target. Used by the business-intelligence and data-modelling skills. Based on BABOK Business Intelligence Perspective (11.2).

## Scoring scale

For each dimension score 0 to 3: 0 absent, 1 weak, 2 adequate, 3 strong.

## Dimensions

| # | Dimension | What good looks like |
| --- | --- | --- |
| 1 | Sources mapped | The source data and its extraction method are defined. |
| 2 | Transformations correct | The transformation rules are specified and correct. |
| 3 | Target mapping | The mapping from transformed data to the target is complete. |
| 4 | Quality rules | Data quality and cleansing rules are defined. |
| 5 | Error handling | How rejects and failures are handled and reprocessed is defined. |
| 6 | Lineage | The lineage from source to target is traceable. |
| 7 | Schedule and volume | The load schedule and expected volumes are stated. |

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
