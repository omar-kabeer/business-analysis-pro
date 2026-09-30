# User Acceptance Test Plan Evaluation Rubric

Assess a User Acceptance Test Plan built from `templates/uat-plan.md`, against BABOK Acceptance and Evaluation Criteria (10.1), Validate Requirements (7.3), and Assess Solution Limitations (8.3). It judges whether the plan, and the results recorded in it, let the business make an evidence-based acceptance decision. The BABOK-named `user-acceptance-test-rubric.md` remains for the register artefact.

## Scoring scale

For each dimension score 0 to 3: 0 absent or misleading, 1 weak, 2 adequate for the stated stage, 3 strong and well supported.

## Dimensions

| # | Dimension | What good looks like |
| --- | --- | --- |
| 1 | Scope clarity | What is and is not tested is stated, with reasons. |
| 2 | Entry and exit criteria | Entry and exit criteria are explicit and measurable, and the plan records whether they were met. |
| 3 | Requirement coverage | Every in-scope requirement maps to at least one scenario or case, and coverage is reported. |
| 4 | Realistic scenarios and cases | Scenarios are real business tasks run by business testers, supported by boundary, negative, and exception cases. |
| 5 | Environment, data, and risks | The environment and data are realistic and safe (masked where needed), and the assumptions and risks to testing are recorded. |
| 6 | Defect discipline | Every defect records business severity separately from fix priority, with an owner and a status. |
| 7 | Evidence-based recommendation | The recommendation follows from the coverage and defect evidence, conditions have owners and dates, and the named business owner signs. |

## Scoring anchors

Anchors describe the extreme scores; 1 and 2 interpolate between them.

| # | Score 0 (absent) | Score 3 (strong) |
| --- | --- | --- |
| 1 | Scope is unstated, so gaps in testing are invisible. | What is and is not tested is stated, with reasons. |
| 2 | Testing starts and ends by date, with no criteria. | Entry and exit criteria are explicit and measurable, and the plan records whether they were met. |
| 3 | No coverage matrix; nobody can say which requirements were tested. | Every in-scope requirement maps to at least one scenario or case, and coverage is reported. |
| 4 | Tests are system test scripts replayed by IT. | Scenarios are real business tasks run by business testers, supported by boundary, negative, and exception cases. |
| 5 | Unrealistic or unmasked production data, or no mention of data at all. | The environment and data are realistic and safe (masked where needed), and the assumptions and risks to testing are recorded. |
| 6 | Defects have no severity or owner, or severity and priority are merged. | Every defect records business severity separately from fix priority, with an owner and a status. |
| 7 | Acceptance is signed with no evidence or with open critical defects unexplained. | The recommendation follows from the coverage and defect evidence, conditions have owners and dates, and the named business owner signs. |

## Common failure modes

- UAT run by the delivery team instead of the business.
- Only the happy path tested.
- Exit criteria quietly relaxed to hit the date.
- Defects closed as "works as designed" with no business agreement.
- Sign-off by someone without the authority to accept.

## Result

Total the scores (maximum 21):

- Pass: 17 or higher with no dimension at 0.
- Pass with changes: 12 to 16, or 17 or higher with a dimension at 0.
- Fail: below 12.

Dimensions 3 (requirement coverage) and 7 (evidence-based recommendation) are blocking: a score of 0 on either fails the document whatever the total. Record findings by severity with specific fixes, and route material issues back to the acceptance-testing skill. A draft that does not pass may still be useful; its quality state must remain visible.

## Findings template

| Dimension | Score | Evidence | Gap and fix |
| --- | --- | --- | --- |
|  |  |  |  |
