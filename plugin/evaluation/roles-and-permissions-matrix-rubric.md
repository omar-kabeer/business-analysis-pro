# Roles and Permissions Matrix Evaluation Rubric

A repeatable rubric for judging whether a roles and permissions matrix assigns access soundly. The matrix maps roles against the activities or data they may access, often in a RACI or access form. Used by the visual-modelling and architecture skills. Based on BABOK Roles and Permissions Matrix (10.39).

## Scoring scale

For each dimension score 0 to 3: 0 absent, 1 weak, 2 adequate, 3 strong.

## Dimensions

| # | Dimension | What good looks like |
| --- | --- | --- |
| 1 | Roles and activities | The roles and the activities or data they act on are complete. |
| 2 | Responsibility assigned | Every activity has a Responsible and an Accountable where a RACI form is used. |
| 3 | No gaps | No activity is left without an owner. |
| 4 | No overlaps | Conflicting or duplicate assignments are resolved. |
| 5 | Least privilege | Access follows least privilege, with separation of duties where needed. |
| 6 | Consistent | The matrix is consistent with the org model and the process model. |
| 7 | Usable | The matrix is legible and can be applied unaided. |

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
