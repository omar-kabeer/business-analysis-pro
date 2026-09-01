# CRUD Matrix Evaluation Rubric

A repeatable rubric for judging whether a CRUD matrix maps data operations completely. A CRUD matrix maps entities against the create, read, update, and delete operations performed on them by processes or roles. Used by the data-modelling and visual-modelling skills. Based on BABOK Data Modelling (10.15) and Roles and Permissions Matrix (10.39).

## Scoring scale

For each dimension score 0 to 3: 0 absent, 1 weak, 2 adequate, 3 strong.

## Dimensions

| # | Dimension | What good looks like |
| --- | --- | --- |
| 1 | Entities and actors | The entities and the processes or roles that act on them are complete. |
| 2 | CRUD coverage | Every entity has at least one create, one read, one update, and one delete somewhere in the matrix. |
| 3 | No orphan entities | No entity is missing an operation that its life cycle requires. |
| 4 | No orphan operations | Every process or role has a defined operation, with no empty rows or columns that should be filled. |
| 5 | Correct assignments | Each create, read, update, or delete assignment is correct for the process or role. |
| 6 | Consistency | The matrix is consistent with the data model and the process model. |
| 7 | Readable | The matrix is legible and labelled so a reader can use it unaided. |

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
