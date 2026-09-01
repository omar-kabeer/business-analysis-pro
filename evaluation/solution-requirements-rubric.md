# Solution Requirements Evaluation Rubric

A repeatable rubric for judging whether a set of solution requirements is ready to take into design. Solution requirements describe the capabilities and qualities of a solution that meets the stakeholder requirements, and they divide into functional and non-functional requirements. Used by the quality and requirements skills and applied to solution requirements in a BRD, SRS, or requirements package. Based on BABOK Requirements Classification Schema (2.3) and Specify and Model Requirements (7.1).

## Scoring scale

For each dimension score 0 to 3: 0 absent, 1 weak, 2 adequate, 3 strong.

## Dimensions

| # | Dimension | What good looks like |
| --- | --- | --- |
| 1 | Both types present | Functional and non-functional requirements are both covered and clearly distinguished. |
| 2 | Meets stakeholder requirements | Each solution requirement traces to a stakeholder requirement it satisfies, with no orphan solution requirement. |
| 3 | Complete coverage | Every stakeholder requirement is satisfied by one or more solution requirements, with no uncovered need. |
| 4 | Atomic and unambiguous | Each is self-contained and admits one interpretation. |
| 5 | Testable | Functional items carry acceptance criteria and non-functional items are quantified and verifiable. |
| 6 | Consistent | The set is internally consistent, with no conflicting requirements. |
| 7 | Appropriate altitude | Each states a capability or quality at the need level and avoids premature design, unless design is the intended output. |
| 8 | Prioritised | Requirements are ranked or grouped by value, with stakeholder agreement. |
| 9 | Feasible | The set is achievable within the agreed risk, schedule, and budget. |

## Scoring anchors

Anchors describe the extreme scores; 1 and 2 interpolate between them.

| # | Score 0 (absent) | Score 3 (strong) |
| --- | --- | --- |
| 1 | Only one type present, or the two are not distinguished. | Functional and non-functional requirements both covered and clearly distinguished. |
| 2 | Solution requirements float free of stakeholder needs. | Each traces to a stakeholder requirement it satisfies, no orphans. |
| 3 | Stakeholder requirements are left uncovered. | Every stakeholder requirement is satisfied by one or more solution requirements. |
| 4 | Compound and ambiguous statements. | Each is self-contained and admits one interpretation. |
| 5 | No acceptance criteria and unquantified NFRs. | Functional items carry acceptance criteria and NFRs are quantified. |
| 6 | The set conflicts internally. | The set is internally consistent. |
| 7 | Premature design where a need was wanted. | Stated at need-level capability, avoiding premature design unless design is intended. |
| 8 | Unranked. | Ranked or grouped by value, with stakeholder agreement. |
| 9 | Not achievable within the constraints. | Achievable within the agreed risk, schedule, and budget. |

## Common failure modes

- Coverage gap: a stakeholder requirement with no solution requirement satisfying it.
- Orphan solution requirement: a capability no stakeholder need traces to.
- Type confusion: functional and non-functional requirements mixed without distinction.
- Premature design: a specific technology chosen where the need-level capability was wanted.
- Double-counting: the same need restated as several solution requirements, inflating scope.
- Untestable set: functional items without acceptance criteria, NFRs without numbers.

## Result

Total the scores (maximum 27):

- Pass: 22 or higher with no dimension at 0.
- Pass with changes: 16 to 21, or a single quick-to-fix dimension at 1.
- Fail: below 16, or any dimension at 0.

Record findings by severity with a specific fix, and route material issues back to the requirements skill.

## Findings template

| Dimension | Score | Evidence | Gap and fix |
| --- | --- | --- | --- |
|  |  |  |  |
