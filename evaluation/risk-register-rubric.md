# Risk Register Evaluation Rubric

A repeatable rubric for judging whether a risk register is complete and well-managed. A risk register records risks with their assessment, response, and owner. Used by the risk-analysis skill. Based on BABOK Risk Analysis and Management (10.38). Applied to registers produced from `templates/risk-register.md`.

## Scoring scale

For each dimension score 0 to 3: 0 absent or misleading, 1 weak, 2 adequate for the stated stage, 3 strong and well supported.

## Dimensions

| # | Dimension | What good looks like |
| --- | --- | --- |
| 1 | Risks well-formed | Each risk states its condition and its effect on value. |
| 2 | Likelihood and impact | Each risk is scored for likelihood and impact. |
| 3 | Prioritised | Risks are ranked by exposure. |
| 4 | Response | Each significant risk has a response strategy. |
| 5 | Owned | Each risk has an owner. |
| 6 | Status | The status of each risk and its response is current. |
| 7 | Complete | The register covers the main sources of risk. |

## Scoring anchors

Anchors describe the extreme scores; 1 and 2 interpolate between them.

| # | Score 0 (absent) | Score 3 (strong) |
| --- | --- | --- |
| 1 | Risks are one-word labels, issues, or causes with no effect. | Each risk states its condition and its effect on value. |
| 2 | No probability or impact scores, or no agreed scale. | Each risk is scored for likelihood and impact. |
| 3 | Risks are not ranked, so the worst are not visible. | Risks are ranked by exposure. |
| 4 | No responses, or "monitor" for everything. | Each significant risk has a response strategy. |
| 5 | No owner, or a team named instead of a person. | Each risk has an owner. |
| 6 | Status and dates are stale or missing. | The status of each risk and its response is current. |
| 7 | Whole sources of risk (adoption, benefit, regulatory) are absent. | The register covers the main sources of risk. |

## Common failure modes

- Issues that have already happened logged as risks.
- Scores that never change between reviews.
- Every response is accept, with no contingency.
- A register built for the business case and never reviewed again.
- Residual risk left blank, so responses cannot be judged.

## Result

Total the scores (maximum 21):

- Pass: 17 or higher with no dimension at 0.
- Pass with changes: 12 to 16, or 17 or higher with a dimension at 0.
- Fail: below 12.

Dimensions 1 (risks well-formed) and 5 (owned) are blocking: a score of 0 on either fails the document whatever the total. Record findings by severity with specific fixes, and route material issues back to the risk-analysis skill. A draft that does not pass may still be useful; its quality state must remain visible.

## Findings template

| Dimension | Score | Evidence | Gap and fix |
| --- | --- | --- | --- |
|  |  |  |  |
