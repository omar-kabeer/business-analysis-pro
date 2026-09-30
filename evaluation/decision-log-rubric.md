# Decision Log Evaluation Rubric

Assess a Decision Log against `templates/decision-log.md`, BABOK Plan Business Analysis Governance (3.3), Decision Analysis (10.16), and Assess Requirements Changes (5.4). A strong log lets a newcomer see what was decided, why, by whom, and when it would be revisited, so settled questions are not reopened. Used by the governance and decision-analysis skills.

## Scoring scale

For each dimension score 0 to 3: 0 absent or misleading, 1 weak, 2 adequate for the stated stage, 3 strong and well supported.

## Dimensions

| # | Dimension | What good looks like |
| --- | --- | --- |
| 1 | Significance and scope | The log holds the decisions that shape scope, approach, requirements, or design, not trivia, and nothing significant known from other artefacts is missing. |
| 2 | Decision statement | Each decision is stated as a single, unambiguous choice that someone could act on, not as a topic or a discussion summary. |
| 3 | Options considered | The real alternatives, including the chosen one, are listed so the trade-off is visible, rather than only the winning option. |
| 4 | Rationale and evidence | The reasoning, the evidence relied on, and the assumptions behind the choice are recorded, and assumptions link to where they are tracked. |
| 5 | Authority and consultation | The decision maker holds the authority the governance approach assigns for that kind of decision, and consulted stakeholders are named. |
| 6 | Reversal conditions | Decisions likely to be revisited state the new information or change that would trigger a review. |
| 7 | Status and supersession | Each entry has a date and status, and superseded decisions are marked and linked to their replacement rather than deleted. |
| 8 | Traceability | Decisions link to the requirements, changes, risks, or RAID items they affect, so the downstream impact of a decision can be followed. |

## Scoring anchors

Anchors describe the extreme scores; 1 and 2 interpolate between them.

| # | Score 0 (absent) | Score 3 (strong) |
| --- | --- | --- |
| 1 | The log holds trivia, or significant decisions known elsewhere are missing. | The log holds the decisions that shape scope, approach, requirements, or design, not trivia, and nothing significant known from other artefacts is missing. |
| 2 | Entries are topics or discussion summaries, not choices. | Each decision is stated as a single, unambiguous choice that someone could act on, not as a topic or a discussion summary. |
| 3 | Only the winning option is recorded. | The real alternatives, including the chosen one, are listed so the trade-off is visible, rather than only the winning option. |
| 4 | No reasoning or evidence; the decision cannot be defended. | The reasoning, the evidence relied on, and the assumptions behind the choice are recorded, and assumptions link to where they are tracked. |
| 5 | The decision maker lacked authority, or nobody was consulted. | The decision maker holds the authority the governance approach assigns for that kind of decision, and consulted stakeholders are named. |
| 6 | No conditions for revisiting a decision that will obviously be revisited. | Decisions likely to be revisited state the new information or change that would trigger a review. |
| 7 | Entries have no date or status, or superseded decisions were deleted. | Each entry has a date and status, and superseded decisions are marked and linked to their replacement rather than deleted. |
| 8 | No link to the requirements, changes, or risks the decision affects. | Decisions link to the requirements, changes, risks, or RAID items they affect, so the downstream impact of a decision can be followed. |

## Common failure modes

- Decisions recorded as "discussed approach" with no outcome.
- A log written up after the fact from memory.
- Superseded decisions overwritten, so history is lost.
- Every decision attributed to "the project team".

## Result

Total the scores (maximum 24):

- Pass: 20 or higher with no dimension at 0.
- Pass with changes: 14 to 19, or 20 or higher with a dimension at 0.
- Fail: below 14.

Dimensions 2 (decision statement) and 4 (rationale and evidence) are blocking: a score of 0 on either fails the document whatever the total. Record findings by severity with specific fixes, and route material issues back to the governance skill. A draft that does not pass may still be useful; its quality state must remain visible.

## Findings template

| Dimension | Score | Evidence | Gap and fix |
| --- | --- | --- | --- |
|  |  |  |  |
