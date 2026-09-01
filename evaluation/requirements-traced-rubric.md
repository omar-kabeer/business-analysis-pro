# Requirements (traced) Evaluation Rubric

A repeatable rubric for judging whether traced requirements have relationships defined well enough to manage coverage and change. Traced requirements have clearly defined relationships to other requirements, solution components, and releases, so coverage and the effects of change are clear. Used by the requirements and quality skills. Based on BABOK Trace Requirements (5.1).

## Scoring scale

For each dimension score 0 to 3: 0 absent, 1 weak, 2 adequate, 3 strong.

## Dimensions

| # | Dimension | What good looks like |
| --- | --- | --- |
| 1 | Relationships defined | Each requirement has defined relationships to other requirements, components, or releases. |
| 2 | Bidirectional | The trace runs both ways: back to the need and forward to design, test, and release. |
| 3 | Coverage | Every requirement is traced, with no orphans. |
| 4 | Effects of change | The traceability makes the impact of a change visible. |
| 5 | Release allocation | Allocation to releases, phases, or iterations is captured. |
| 6 | Relationship types | The type of each relationship, such as derive, depend, satisfy, or validate, is correct. |
| 7 | Repository | The traces are held in a maintainable repository rather than ad hoc. |
| 8 | Stakeholder agreement | Key relationships are approved by the sponsor or accountable owner. |

## Scoring anchors

Anchors describe the extreme scores; 1 and 2 interpolate between them.

| # | Score 0 (absent) | Score 3 (strong) |
| --- | --- | --- |
| 1 | No relationships defined. | Each requirement has defined relationships to requirements, components, or releases. |
| 2 | Trace runs one way only. | Runs back to the need and forward to design, test, and release. |
| 3 | Orphan requirements exist. | Every requirement is traced, no orphans. |
| 4 | Change impact is invisible. | The traceability makes the impact of a change visible. |
| 5 | No release allocation. | Allocation to releases, phases, or iterations is captured. |
| 6 | Relationship types are wrong or absent. | The type of each relationship is correct. |
| 7 | Traces kept ad hoc. | Held in a maintainable repository. |
| 8 | Key links unapproved. | Key relationships approved by the sponsor or owner. |

## Common failure modes

- One-way trace: forward links only, so backward impact analysis is impossible.
- Orphan requirement: no link up to a need, so its purpose is unknown.
- Coverage illusion: links exist but point at the wrong targets, giving false confidence.
- Stale trace: the matrix was built once and never maintained as requirements changed.
- Wrong relationship type: "derives" where "satisfies" was meant, corrupting impact analysis.

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
