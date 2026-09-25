# Designs (traced) Evaluation Rubric

A repeatable rubric for judging whether traced designs have relationships defined well enough to manage coverage and change. Traced designs have clearly defined relationships to the requirements they satisfy and to solution components and releases. Used by the architecture and quality skills. Based on BABOK Trace Requirements (5.1).

## Scoring scale

For each dimension score 0 to 3: 0 absent, 1 weak, 2 adequate, 3 strong.

## Dimensions

| # | Dimension | What good looks like |
| --- | --- | --- |
| 1 | Relationships defined | Each design traces to the requirements it satisfies and to the components and releases it belongs to. |
| 2 | Bidirectional | The trace runs back to the requirement and need and forward to build and test. |
| 3 | Coverage | Every design element is traced, with no orphans. |
| 4 | Effects of change | The traceability makes the impact of a change visible. |
| 5 | Component dependencies | Dependencies between solution components are captured. |
| 6 | Relationship types | The type of each relationship is correct. |
| 7 | Repository | The traces are held in a maintainable repository rather than ad hoc. |
| 8 | Stakeholder agreement | Key relationships are approved by the sponsor or accountable owner. |

## Result

Total the scores (maximum 24):

- Pass: 20 or higher with no dimension at 0.
- Pass with changes: 14 to 19, or a single quick-to-fix dimension at 1.
- Fail: below 14, or any dimension at 0.

Record findings by severity with a specific fix, and route material issues back to the architecture skill.

## Findings template

| Dimension | Score | Evidence | Gap and fix |
| --- | --- | --- | --- |
|  |  |  |  |
