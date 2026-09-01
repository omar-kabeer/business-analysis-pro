# Physical Data Models Evaluation Rubric

A repeatable rubric for judging whether a physical data model implements the logical model soundly. A physical data model defines how data is stored in a specific technology, with tables, columns, keys, and indexes. Used by the data-modelling and architecture skills. Based on BABOK Business Intelligence Perspective (11.2) and Data Modelling (10.15).

## Scoring scale

For each dimension score 0 to 3: 0 absent, 1 weak, 2 adequate, 3 strong.

## Dimensions

| # | Dimension | What good looks like |
| --- | --- | --- |
| 1 | Implements logical | The physical model realizes the logical data model faithfully. |
| 2 | Tables and columns | Tables, columns, and data types are defined for the target platform. |
| 3 | Keys | Primary and foreign keys, and constraints, are defined. |
| 4 | Indexes | Indexes support the expected access patterns. |
| 5 | Normalization or denormalization | The level of normalization or denormalization is justified for the workload. |
| 6 | Naming | Naming follows a consistent convention. |
| 7 | Performance and integrity | The model balances performance with referential integrity. |

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
