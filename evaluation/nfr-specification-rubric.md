# Non-Functional Requirements Specification Evaluation Rubric

Assess a Non-Functional Requirements Specification built from `templates/nfr-specification.md`, against BABOK Non-Functional Requirements Analysis (10.30), Verify Requirements (7.2), and Validate Requirements (7.3). It judges the specification as a whole: whether each quality the solution needs is stated so it can be built, tested, and accepted. The BABOK-named `non-functional-requirements-rubric.md` remains for the register artefact.

## Scoring scale

For each dimension score 0 to 3: 0 absent or misleading, 1 weak, 2 adequate for the stated stage, 3 strong and well supported.

## Dimensions

| # | Dimension | What good looks like |
| --- | --- | --- |
| 1 | Category coverage | Every quality category relevant to the solution is addressed, and each one that does not apply is marked not applicable with a reason. |
| 2 | Measurable targets | Every requirement has a measure, a target, and a failure threshold. |
| 3 | Conditions of measurement | Load, period, environment, and user population are stated for each measured requirement. |
| 4 | Verification method | Every requirement names how and when it will be verified, and by whom. |
| 5 | Justified targets | Every target traces to a business need, SLA, benchmark, policy, or regulation. |
| 6 | Quality, not behaviour | Each requirement states how well the solution performs, with no hidden functional behaviour or design choice. |
| 7 | Priority and trade-offs | Requirements are prioritised, and conflicts between qualities or with cost are resolved and recorded with the decision maker. |
| 8 | Feasibility and ownership | Feasibility and cost are confirmed with an architecture or operations owner, and assumptions and risks to meeting targets are recorded. |

## Scoring anchors

Anchors describe the extreme scores; 1 and 2 interpolate between them.

| # | Score 0 (absent) | Score 3 (strong) |
| --- | --- | --- |
| 1 | Categories are silently missing, so nobody can tell whether security or accessibility was considered. | Every quality category relevant to the solution is addressed, and each one that does not apply is marked not applicable with a reason. |
| 2 | Requirements use adjectives such as fast, secure, or easy, with no number. | Every requirement has a measure, a target, and a failure threshold. |
| 3 | Targets have no conditions, so a test can pass or fail as convenient. | Load, period, environment, and user population are stated for each measured requirement. |
| 4 | No verification method; nobody knows how the requirement will be proven. | Every requirement names how and when it will be verified, and by whom. |
| 5 | Targets are arbitrary or copied, with no source. | Every target traces to a business need, SLA, benchmark, policy, or regulation. |
| 6 | Functional behaviour or named technologies are written as non-functional requirements. | Each requirement states how well the solution performs, with no hidden functional behaviour or design choice. |
| 7 | Everything is Must, and conflicting qualities are left unresolved. | Requirements are prioritised, and conflicts between qualities or with cost are resolved and recorded with the decision maker. |
| 8 | Targets were never checked with anyone who has to meet them. | Feasibility and cost are confirmed with an architecture or operations owner, and assumptions and risks to meeting targets are recorded. |

## Common failure modes

- Aspirational requirements with no numbers.
- A single availability figure with no measurement window or exclusions.
- Security written as a list of technologies rather than protections and evidence.
- Non-functional requirements duplicated inside every user story instead of linked.
- Targets set once and never checked against the platform's real capability.

## Result

Total the scores (maximum 24):

- Pass: 20 or higher with no dimension at 0.
- Pass with changes: 14 to 19, or 20 or higher with a dimension at 0.
- Fail: below 14.

Dimensions 2 (measurable targets) and 4 (verification method) are blocking: a score of 0 on either fails the document whatever the total. Record findings by severity with specific fixes, and route material issues back to the requirements skill. A draft that does not pass may still be useful; its quality state must remain visible.

## Findings template

| Dimension | Score | Evidence | Gap and fix |
| --- | --- | --- | --- |
|  |  |  |  |
