# Personas Evaluation Rubric

A repeatable rubric for judging whether personas represent real users soundly. A persona is an evidence-based archetype of a user, capturing their goals, context, and pain points. Used by the ux and elicitation skills and applied to personas produced from `templates/persona.md`. Based on BABOK Agile Perspective (11.1) and Stakeholder List, Map, or Personas (10.43).

## Scoring scale

For each dimension score 0 to 3: 0 absent or misleading, 1 weak, 2 adequate for the stated stage, 3 strong and well supported.

## Dimensions

| # | Dimension | What good looks like |
| --- | --- | --- |
| 1 | Evidence-based | Each persona is grounded in research, not invented. |
| 2 | Goals | The persona's goals and motivations are captured. |
| 3 | Pain points | The persona's pain points and frustrations are captured. |
| 4 | Context | The persona's context, behaviour, and environment are described. |
| 5 | Representative | The set of personas covers the real user population. |
| 6 | Distinct | The personas are distinct, not near-duplicates. |
| 7 | Useful | The personas are specific enough to guide design and prioritization. |

## Scoring anchors

Anchors describe the extreme scores; 1 and 2 interpolate between them.

| # | Score 0 (absent) | Score 3 (strong) |
| --- | --- | --- |
| 1 | The persona is invented, with no research behind it. | Each persona is grounded in research, not invented. |
| 2 | No goals or motivations. | The persona's goals and motivations are captured. |
| 3 | No pains or frustrations. | The persona's pain points and frustrations are captured. |
| 4 | No context or behaviour, only demographics. | The persona's context, behaviour, and environment are described. |
| 5 | The set misses whole user groups. | The set of personas covers the real user population. |
| 6 | Personas are near-duplicates. | The personas are distinct, not near-duplicates. |
| 7 | Too generic to change any design or priority decision. | The personas are specific enough to guide design and prioritization. |

## Common failure modes

- Demographic detail (age, hobbies) that does not affect design.
- A persona per stakeholder request rather than per researched segment.
- Personas made once and never checked against new research.
- Stock photos and names doing the work evidence should do.

## Result

Total the scores (maximum 21):

- Pass: 17 or higher with no dimension at 0.
- Pass with changes: 12 to 16, or 17 or higher with a dimension at 0.
- Fail: below 12.

Dimensions 1 (evidence-based) and 7 (useful) are blocking: a score of 0 on either fails the document whatever the total. Record findings by severity with specific fixes, and route material issues back to the ux skill. A draft that does not pass may still be useful; its quality state must remain visible.

## Findings template

| Dimension | Score | Evidence | Gap and fix |
| --- | --- | --- | --- |
|  |  |  |  |
