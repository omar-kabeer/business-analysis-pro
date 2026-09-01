# Data Warehouse Design Evaluation Rubric

A repeatable rubric for judging whether a data warehouse design is sound. The design defines how source data is consolidated into a warehouse for analysis and reporting. Used by the business-intelligence and data-modelling skills. Based on BABOK Business Intelligence Perspective (11.2).

## Scoring scale

For each dimension score 0 to 3: 0 absent, 1 weak, 2 adequate, 3 strong.

## Dimensions

| # | Dimension | What good looks like |
| --- | --- | --- |
| 1 | Sources mapped | The source systems and their data are mapped to the warehouse. |
| 2 | Model | The warehouse model, such as star or snowflake, fits the reporting needs. |
| 3 | Grain | The grain of the fact tables is defined and appropriate. |
| 4 | Conformed dimensions | Dimensions are conformed so measures compare across subject areas. |
| 5 | Quality rules | Data quality rules are defined for what enters the warehouse. |
| 6 | Lineage | The lineage from source to warehouse is traceable. |
| 7 | Performance | The design supports the query and load performance required. |

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
