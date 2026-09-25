# Transition Requirements Evaluation Rubric

A repeatable rubric for judging whether a set of transition requirements is ready to guide the move from the current state to the future state. Transition requirements describe the capabilities the solution must have and the conditions it must meet to facilitate that move, and they are temporary: they are no longer needed once the change is complete. Used by the quality and requirements skills and applied to transition requirements captured in a BRD or SRS. Based on BABOK Requirements Classification Schema (2.3) and Define Change Strategy (6.4).

## Scoring scale

For each dimension score 0 to 3: 0 absent, 1 weak, 2 adequate, 3 strong.

## Dimensions

| # | Dimension | What good looks like |
| --- | --- | --- |
| 1 | Temporary by design | Each requirement addresses only the move from current to future state, not the ongoing solution. |
| 2 | Current-to-future bridge | The from-state and to-state each requirement bridges are named and correct. |
| 3 | Completeness | Data migration, cutover, coexistence, training, and decommissioning are covered where relevant. |
| 4 | Atomic and testable | Each requirement is atomic, unambiguous, and has an acceptance condition. |
| 5 | Retirement | The point at which each transition requirement is no longer needed is stated. |
| 6 | Traceability | Each traces to the change strategy and to the current and future state it connects. |
| 7 | Dependencies and sequence | Ordering and dependencies between transition steps are explicit. |
| 8 | Risk | Cutover and migration risks are identified with responses and owners. |

## Scoring anchors

Anchors describe the extreme scores; 1 and 2 interpolate between them.

| # | Score 0 (absent) | Score 3 (strong) |
| --- | --- | --- |
| 1 | Ongoing-solution requirements are mixed in. | Each requirement addresses only the move from current to future state. |
| 2 | The states being bridged are unstated. | The from-state and to-state each requirement bridges are named and correct. |
| 3 | Migration, cutover, or training is missing. | Data migration, cutover, coexistence, training, and decommissioning are covered where relevant. |
| 4 | Compound, and no acceptance condition. | Atomic, unambiguous, with an acceptance condition. |
| 5 | No end point for the requirement. | The point at which each is no longer needed is stated. |
| 6 | No link to the change strategy. | Each traces to the change strategy and the states it connects. |
| 7 | Ordering and dependencies are implicit. | Ordering and dependencies between transition steps are explicit. |
| 8 | Cutover risks are unaddressed. | Cutover and migration risks are identified with responses and owners. |

## Common failure modes

- Permanent in disguise: an ongoing-solution requirement filed as transitional, so it is dropped after cutover.
- No retirement: the requirement never says when it stops applying, so it lingers.
- Cutover gap: data migration or coexistence during the switch is unspecified.
- Sequence risk: dependent steps are listed without their order, so cutover can be run wrong.
- Rollback silence: no plan for backing out a failed transition.
- Training and decommissioning forgotten: people and legacy systems are left out of the move.

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
