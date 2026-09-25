# Stakeholder Requirements Evaluation Rubric

A repeatable rubric for judging whether a set of stakeholder requirements is ready to decompose into solution requirements. Stakeholder requirements describe the needs of stakeholders that must be met to achieve the business requirements, and they bridge business requirements and solution requirements. They are also known as user requirements. Used by the quality and requirements skills and applied to stakeholder requirements in a BRD or requirements package. Based on BABOK Requirements Classification Schema (2.3).

## Scoring scale

For each dimension score 0 to 3: 0 absent, 1 weak, 2 adequate, 3 strong.

## Dimensions

| # | Dimension | What good looks like |
| --- | --- | --- |
| 1 | Stakeholder owned | Each requirement names the stakeholder or role whose need it expresses. |
| 2 | Bridges business to solution | Each traces up to a business requirement or objective and can be decomposed into solution requirements. |
| 3 | Need not solution | Each expresses what the stakeholder needs, not a solution already chosen for them. |
| 4 | Atomic and unambiguous | Each is self-contained and admits one interpretation. |
| 5 | Testable | Success for each is verifiable against a stated condition. |
| 6 | Complete coverage | All affected stakeholder groups are represented, with no missing constituency. |
| 7 | Consistent | Conflicts between stakeholders are surfaced and resolved or explicitly flagged. |
| 8 | Prioritised | Requirements are ranked with stakeholder agreement. |
| 9 | Feasible | Each is achievable within the agreed risk, schedule, and budget. |

## Scoring anchors

Anchors describe the extreme scores; 1 and 2 interpolate between them.

| # | Score 0 (absent) | Score 3 (strong) |
| --- | --- | --- |
| 1 | No stakeholder is named against the need. | Each requirement names the stakeholder or role whose need it expresses. |
| 2 | No link up to business or down to solution. | Traces up to a business objective and decomposes to solution requirements. |
| 3 | States a chosen solution, not the need. | Expresses what the stakeholder needs, not a solution imposed on them. |
| 4 | Compound and ambiguous. | Self-contained and admits one interpretation. |
| 5 | Success cannot be verified. | Success is verifiable against a stated condition. |
| 6 | Whole stakeholder groups are missing. | All affected stakeholder groups are represented. |
| 7 | Stakeholder conflicts are hidden. | Conflicts between stakeholders are surfaced and resolved or flagged. |
| 8 | Unranked, or ranked without stakeholders. | Ranked with stakeholder agreement. |
| 9 | Not achievable within the constraints. | Achievable within the agreed risk, schedule, and budget. |

## Common failure modes

- Missing constituency: a group the change affects has no requirements captured.
- Solution smuggling: a chosen tool or design written as if it were the stakeholder's need.
- Unowned need: a requirement with no stakeholder or role attached, so priority cannot be judged.
- Hidden conflict: two stakeholders' needs contradict, and the rubric is silent on it.
- Business-only or solution-only: the bridge role is skipped, leaving a gap between goals and the solution.

## Result

Total the scores (maximum 27):

- Pass: 22 or higher with no dimension at 0.
- Pass with changes: 16 to 21, or a single quick-to-fix dimension at 1.
- Fail: below 16, or any dimension at 0.

Record findings by severity with a specific fix, and route material issues back to the requirements and elicitation skills.

## Findings template

| Dimension | Score | Evidence | Gap and fix |
| --- | --- | --- | --- |
|  |  |  |  |
