# Experiment and Post-Mortem Log Evaluation Rubric

Assess `templates/experiment-log.md` at the work's actual stage. A proposed experiment can be assessed before execution; it must not be scored down solely because results or a launch post-mortem do not yet exist. Unknown outcomes must never be presented as observed.

## Scoring scale

For each dimension score 0 to 3: 0 absent or misleading, 1 weak, 2 adequate for the stated stage, 3 strong and well supported.

## Dimensions

| # | Dimension | What good looks like |
| --- | --- | --- |
| 1 | Hypothesis and learning question | Each entry states a falsifiable belief or specific question and the learning sought. |
| 2 | Risk and method | The value, usability, feasibility or viability risk is named and the proposed method can test it. |
| 3 | Predeclared measure | The measure and decision threshold are set before results are interpreted, or the missing threshold is explicitly flagged as blocking execution. |
| 4 | Stage and traceability | Each entry makes clear whether the test is proposed, running or completed, with enough identity and dates to follow its history. |
| 5 | Result integrity | Completed tests distinguish observed evidence from interpretation; pending tests leave results unknown rather than inventing them. |
| 6 | Decision and learning | Completed tests record a reasoned persevere, pivot or drop decision and learning; proposed tests identify the decision to be made after evidence arrives. |
| 7 | Launch retrospective | If a launch has occurred, the post-mortem compares expectation with actual outcome and identifies root cause and a concrete change; otherwise it is clearly pending or not applicable. |

## Result

Total the scores (maximum 21):

- Pass: 17 or higher with no dimension at 0.
- Pass with changes: 12 to 16, or 17 or higher with a dimension at 0.
- Fail: below 12.

Record findings by severity with specific fixes. Passing a proposed experiment means its plan is reviewable; it does not assert that the experiment succeeded or produced evidence.

## Findings template

| Dimension | Score | Evidence | Gap and fix |
| --- | --- | --- | --- |
|  |  |  |  |
