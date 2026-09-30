# Release Readiness Checklist Evaluation Rubric

Assess a completed Release Readiness Checklist against `templates/release-readiness-checklist.md`, BABOK Verify Requirements (7.2), Validate Requirements (7.3), Assess Enterprise Limitations (8.4), and Acceptance and Evaluation Criteria (10.1). The checklist is an auditable gate, so each criterion is judged on evidence, and the decision on whether it follows from that evidence. Used by the governance, acceptance-testing, and quality skills.

## Scoring scale

For each dimension score 0 to 3: 0 absent or misleading, 1 weak, 2 adequate for the stated stage, 3 strong and well supported.

## Dimensions

| # | Dimension | What good looks like |
| --- | --- | --- |
| 1 | Criteria completeness | Scope, testing, quality, non-functional, data, operations, support, compliance, and stakeholder criteria are all present, with any Not applicable marking justified. |
| 2 | Evidence behind each status | Each Met status cites evidence such as a test report, defect list, sign-off, or review record, rather than an unsupported tick. |
| 3 | Non-functional coverage | Performance, security, and accessibility are verified against stated targets, not assumed from functional testing. |
| 4 | Defect position | Open defects are stated by severity, and no critical or high severity defect is open without an explicit, accepted exception. |
| 5 | Operational readiness | Monitoring, alerting, and support are in place, and the rollback plan has been tested, not merely written. |
| 6 | Organisational readiness | Training, documentation, and business adoption readiness are checked, so the organisation can use the release, not only receive it. |
| 7 | Outstanding items | Every unmet criterion appears as an outstanding item with severity, owner, plan, and date. |
| 8 | Decision integrity | The go, no-go, or conditional-go decision follows from the criteria, names the decision maker and date, and records each condition with an owner. |

## Result

Total the scores (maximum 24):

- Pass: 20 or higher with no dimension at 0.
- Pass with changes: 14 to 19, or 20 or higher with a dimension at 0.
- Fail: below 14.

Record findings by severity with specific fixes. Route material issues back to the governance skill for revision. An artefact that does not pass may still be useful as a draft; its quality state must remain visible.

## Findings template

| Dimension | Score | Evidence | Gap and fix |
| --- | --- | --- | --- |
|  |  |  |  |
