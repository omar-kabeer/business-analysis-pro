# Requirements (maintained) Evaluation Rubric

A repeatable rubric for judging whether maintained requirements are accurate, current, and reusable. Maintained requirements are defined once and kept available for long-term use by the organization. Used by the requirements and quality skills. Based on BABOK Maintain Requirements (5.2).

## Scoring scale

For each dimension score 0 to 3: 0 absent, 1 weak, 2 adequate, 3 strong.

## Dimensions

| # | Dimension | What good looks like |
| --- | --- | --- |
| 1 | Accurate | The requirements reflect the current stated needs. |
| 2 | Current | They are kept up to date as the context changes. |
| 3 | Consistent | They remain internally consistent after edits. |
| 4 | Reusable | They are named, defined, and stored so they can be reused for the long term. |
| 5 | Attributes maintained | Status and attributes are kept current. |
| 6 | Traceability preserved | Relationships remain valid after maintenance. |
| 7 | Repository | They are stored where other business analysts can access them. |
| 8 | Change discipline | Changes are made through the governance process, not silently. |

## Scoring anchors

Anchors describe the extreme scores; 1 and 2 interpolate between them.

| # | Score 0 (absent) | Score 3 (strong) |
| --- | --- | --- |
| 1 | No longer reflects the stated needs. | Reflects the current stated needs. |
| 2 | Left stale as context changed. | Kept up to date as the context changes. |
| 3 | Edits introduced conflicts. | Remains internally consistent after edits. |
| 4 | Not named or stored for reuse. | Named, defined, and stored for long-term reuse. |
| 5 | Status and attributes are stale. | Status and attributes are kept current. |
| 6 | Traceability broke after edits. | Relationships remain valid after maintenance. |
| 7 | Stored where others cannot reach them. | Stored where other analysts can access them. |
| 8 | Changed silently, off-process. | Changes made through the governance process. |

## Common failure modes

- Drift: the requirements no longer match what the business actually needs.
- Broken trace: an edit invalidated the traceability and no one repaired it.
- Silent edit: a requirement changed outside change control, so history is lost.
- Stale attributes: status still says "proposed" long after approval.
- Local copy: the current version lives on someone's laptop, not the shared repository.

## Result

Total the scores (maximum 24):

- Pass: 20 or higher with no dimension at 0.
- Pass with changes: 14 to 19, or a single quick-to-fix dimension at 1.
- Fail: below 14, or any dimension at 0.

Record findings by severity with a specific fix, and route material issues back to the requirements skill.

## Findings template

| Dimension | Score | Evidence | Gap and fix |
| --- | --- | --- | --- |
|  |  |  |  |
