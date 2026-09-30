# Release Plan / Release Backlog Evaluation Rubric

A repeatable rubric for judging whether a release plan sequences work into a deliverable release soundly. A release plan, or release backlog, defines the items to be delivered in a release and their order. Used by the product-owner and agile-coach skills. Based on BABOK Agile Perspective (11.1). Applied to plans produced from `templates/release-plan-and-notes.md`.

## Scoring scale

For each dimension score 0 to 3: 0 absent or misleading, 1 weak, 2 adequate for the stated stage, 3 strong and well supported.

## Dimensions

| # | Dimension | What good looks like |
| --- | --- | --- |
| 1 | Goal | The release has a clear goal or theme. |
| 2 | Items ready | The items in the release are ready and estimated. |
| 3 | Ranked by value | The items are ordered by value and dependency. |
| 4 | Capacity | The plan fits the team's capacity for the release. |
| 5 | Dependencies | Dependencies and risks to the release are identified. |
| 6 | Increment usable | The release delivers a usable, coherent increment. |
| 7 | Criteria | The release readiness or acceptance criteria are defined. |

## Scoring anchors

Anchors describe the extreme scores; 1 and 2 interpolate between them.

| # | Score 0 (absent) | Score 3 (strong) |
| --- | --- | --- |
| 1 | No goal, or a goal that is a feature list. | The release has a clear goal or theme. |
| 2 | Items are not ready or not estimated. | The items in the release are ready and estimated. |
| 3 | Items are in request order, not value and dependency order. | The items are ordered by value and dependency. |
| 4 | Scope exceeds capacity, or capacity is not considered. | The plan fits the team's capacity for the release. |
| 5 | Dependencies and risks are not identified. | Dependencies and risks to the release are identified. |
| 6 | The release is a set of parts no user can use end to end. | The release delivers a usable, coherent increment. |
| 7 | No readiness or acceptance criteria. | The release readiness or acceptance criteria are defined. |

## Common failure modes

- A release goal that restates the feature list.
- Scope set by date with no capacity check.
- Rollback left undefined until something goes wrong.
- Release notes written for the team, not the customer.

## Result

Total the scores (maximum 21):

- Pass: 17 or higher with no dimension at 0.
- Pass with changes: 12 to 16, or 17 or higher with a dimension at 0.
- Fail: below 12.

Dimensions 1 (goal) and 6 (increment usable) are blocking: a score of 0 on either fails the document whatever the total. Record findings by severity with specific fixes, and route material issues back to the product-owner skill. A draft that does not pass may still be useful; its quality state must remain visible.

## Findings template

| Dimension | Score | Evidence | Gap and fix |
| --- | --- | --- | --- |
|  |  |  |  |
