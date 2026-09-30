# RAID Log Evaluation Rubric

Assess a RAID Log built from `templates/raid-log.md`, BABOK Item Tracking (10.26), and Risk Analysis and Management (10.38). The log is judged on whether each risk, assumption, issue, and dependency is correctly classified, owned, current, and acted on. Used by the governance and risk-analysis skills.

## Scoring scale

For each dimension score 0 to 3: 0 absent or misleading, 1 weak, 2 adequate for the stated stage, 3 strong and well supported.

## Dimensions

| # | Dimension | What good looks like |
| --- | --- | --- |
| 1 | Correct classification | Each item sits in the right category: risks are uncertain future events, issues have already happened, assumptions are taken as true, and dependencies are reliance on another party. |
| 2 | Risk quality | Risks are written as cause, event, and effect, with probability, impact, and a response strategy, and high-scoring risks are carried into the risk register. |
| 3 | Assumption validation | Each assumption states the impact if it proves wrong, who can confirm it, and its validation status, and invalidated assumptions become risks or issues. |
| 4 | Issue action | Each issue states its impact and a concrete action with an owner, and open issues show progress rather than a static status. |
| 5 | Dependency clarity | Each dependency states its direction, the other party, and the date it is needed, and at-risk dependencies are escalated. |
| 6 | Ownership | Every item has a named owner who can act on it, not a team name or a placeholder. |
| 7 | Currency and cadence | Items carry dates and statuses that reflect a stated review cadence, and closed items are marked closed, not deleted. |
| 8 | Linkage | Items link to the decisions, changes, requirements, or risk register entries they drive, so the log feeds governance rather than sitting apart from it. |

## Scoring anchors

Anchors describe the extreme scores; 1 and 2 interpolate between them.

| # | Score 0 (absent) | Score 3 (strong) |
| --- | --- | --- |
| 1 | Risks, issues, and assumptions are mixed up, for example a problem that has already happened logged as a risk. | Every item sits in the right category, and classification rules are stated. |
| 2 | Risks are one-word labels with no rating or response. | Every risk has cause, event, and effect, a probability and impact, a response, and a trigger. |
| 3 | Assumptions are listed with no basis or way to confirm them. | Every assumption has a basis, an impact if wrong, a named confirmer, and a date, and invalidated ones link to the risk or issue raised from them. |
| 4 | Issues have no action or date. | Every issue states its impact, a concrete action, an owner, and a target date, and open issues show progress. |
| 5 | Dependencies name no other party or date. | Every dependency states direction, the other party, what is needed, and by when, and at-risk dependencies are also raised as risks. |
| 6 | Items have no owner, or a team is named instead of a person. | Every item has one named person who can act on it. |
| 7 | No dates or statuses, or items deleted when closed. | Every item is dated and current against a stated cadence, and closed items are kept with their outcome. |
| 8 | The log links to nothing. | Items link to the risk register, decision log, and other artefacts they drive or depend on. |

## Common failure modes

- A risk register copied in as the risk section, with no assumptions, issues, or dependencies.
- "Ongoing" as a status with no date or next action.
- Team names as owners, so no one acts.
- Assumptions that were never confirmed quietly becoming facts in the plan.
- Closed items deleted, so the history of why the plan changed is lost.

## Result

Total the scores (maximum 24):

- Pass: 20 or higher with no dimension at 0.
- Pass with changes: 14 to 19, or 20 or higher with a dimension at 0.
- Fail: below 14.

Dimensions 2 (risk quality) and 6 (ownership) are blocking: a score of 0 on either fails the log whatever the total. Record findings by severity with specific fixes. Route material issues back to the governance skill for revision. An artefact that does not pass may still be useful as a draft; its quality state must remain visible.

## Findings template

| Dimension | Score | Evidence | Gap and fix |
| --- | --- | --- | --- |
|  |  |  |  |
