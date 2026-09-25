# BRD Evaluation Rubric

A repeatable rubric for judging whether a Business Requirements Document is ready for sign-off. It is used by the quality skill and applied to any BRD produced from `templates/brd.md`. Score each dimension, note evidence and gaps, then give a verdict.

## Scoring scale

For each dimension score 0 to 3:

- 0 Absent: not present or unusable.
- 1 Weak: present but with material gaps.
- 2 Adequate: meets the bar with minor gaps.
- 3 Strong: complete and high quality.

## Dimensions

| # | Dimension | What good looks like |
| --- | --- | --- |
| 1 | Completeness | All template sections are present and populated: context, objectives, scope, stakeholders, current and future state, the requirement types, rules, assumptions, dependencies, risks, traceability, and sign-off. |
| 2 | Clarity | The executive summary states the need, recommendation, and decision. Language is clear and unambiguous, and a reader can act without asking the author. |
| 3 | Objectives and measures | Objectives are outcome-focused and each has a measurable success measure and target. |
| 4 | Requirement quality | Requirements are atomic, unambiguous, and testable, with acceptance criteria on functional items and quantified non-functional requirements. |
| 5 | Traceability | Requirements trace to objectives and to a source, and the traceability section links them. |
| 6 | Assumptions and dependencies | Assumptions and dependencies are explicit, owned, and carry an impact if wrong. |
| 7 | Risks | Key risks are identified with impact and a mitigation or action. |
| 8 | Compliance and control | Relevant policy and regulatory needs are captured with the evidence required and an owner. |
| 9 | Sign-off readiness | The decision required is explicit, and the sign-off section names the approvers. |

## Scoring anchors

Anchors describe the extreme scores; 1 and 2 interpolate between them.

| # | Score 0 (absent) | Score 3 (strong) |
| --- | --- | --- |
| 1 | Whole template sections missing or empty. | Every section present and populated, from context to sign-off. |
| 2 | The reader must ask the author what is meant. | Executive summary states need, recommendation, and decision; a reader can act unaided. |
| 3 | Objectives are activities, or have no measure. | Outcome-focused objectives, each with a measure and target. |
| 4 | Requirements are vague and untestable. | Atomic, unambiguous, testable, with acceptance criteria and quantified NFRs. |
| 5 | No traceability. | Requirements trace to objectives and to a source, linked in the traceability section. |
| 6 | Assumptions and dependencies are hidden. | Explicit, owned, each with an impact if wrong. |
| 7 | Risks absent or unmitigated. | Key risks identified with impact and a mitigation or action. |
| 8 | Policy and regulatory needs ignored. | Captured with the evidence required and an owner. |
| 9 | The decision and approvers are unstated. | The decision required is explicit and the sign-off names the approvers. |

## Common failure modes

- Template filled, not thought through: every heading has text, but the content is generic boilerplate.
- Solution-first: the BRD specifies a chosen system instead of the business requirements.
- Unmeasurable objectives: "improve efficiency" with no measure, baseline, or target.
- Requirements without acceptance criteria: functional items that cannot be tested.
- Traceability gap: requirements that serve no objective, or objectives no requirement meets.
- Unowned assumptions: assumptions listed with no owner and no impact if they prove false.
- Sign-off vacuum: the document is "ready" but no decision or approver is named.

## Result

Total the scores (maximum 27). Record a verdict:

- Pass: 22 or higher with no dimension at 0.
- Pass with changes: 16 to 21, or any single dimension at 1 that is quick to fix.
- Fail: below 16, or any dimension at 0.

Record findings by severity with a specific fix, and route material issues back to the requirements skill.

## Findings template

| Dimension | Score | Evidence | Gap and fix |
| --- | --- | --- | --- |
|  |  |  |  |
