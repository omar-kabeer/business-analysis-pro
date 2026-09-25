# Non-Functional Requirements Evaluation Rubric

A repeatable rubric for judging whether a set of non-functional requirements is ready to guide design and testing. Non-functional requirements, also known as quality attributes or quality of service requirements, define how well the functional requirements must perform. Used by the quality and requirements skills and applied to non-functional requirements in a BRD, SRS, or NFR specification. Based on BABOK Non-Functional Requirements Analysis (10.30) and Requirements Classification Schema (2.3).

## Scoring scale

For each dimension score 0 to 3: 0 absent, 1 weak, 2 adequate, 3 strong.

## Dimensions

| # | Dimension | What good looks like |
| --- | --- | --- |
| 1 | Quality-attribute focus | Each requirement defines how well the solution must perform, not what behaviour it carries out, and names the functional area or whole solution it qualifies. |
| 2 | Categorised | Each is assigned to a quality category such as performance, reliability, availability, security, usability, maintainability, or compliance. |
| 3 | Measurable | Each states a metric with a scale and unit, not a vague adjective such as fast or user-friendly. |
| 4 | Target and threshold | The required level is stated, with the acceptable minimum or maximum that constitutes pass or fail. |
| 5 | Testable | A method exists to verify the level objectively under defined conditions. |
| 6 | Operating conditions | The context and load under which the level must hold are stated. |
| 7 | Traceability | Each traces to a stakeholder need, a constraint, or a policy that requires it. |
| 8 | Prioritised | Requirements are ranked, and trade-offs between competing attributes are acknowledged. |
| 9 | Feasible | Each level is reasonable within the technology, risk, and budget available. |

## Scoring anchors

Anchors describe the extreme scores; 1 and 2 interpolate between them.

| # | Score 0 (absent) | Score 3 (strong) |
| --- | --- | --- |
| 1 | States a behaviour or is silent on how well the solution must perform. | Defines how well the solution must perform, tied to a functional area or the whole. |
| 2 | Uncategorised, so coverage cannot be judged. | Assigned to a quality category such as performance, security, or usability. |
| 3 | Uses a vague adjective with no metric. | States a metric with a scale and unit. |
| 4 | No required level or threshold. | Required level with an acceptable minimum or maximum that defines pass or fail. |
| 5 | No way to verify the level. | A method verifies the level objectively under defined conditions. |
| 6 | Conditions of measurement are unstated. | The context and load under which the level must hold are stated. |
| 7 | No link to a need, constraint, or policy. | Traces to a stakeholder need, a constraint, or a policy. |
| 8 | Unranked, and trade-offs unacknowledged. | Ranked, with trade-offs between competing attributes acknowledged. |
| 9 | Level is unreasonable for the technology or budget. | Level is reasonable within the technology, risk, and budget. |

## Common failure modes

- Unmeasurable quality: "fast", "secure", "scalable" with no metric, scale, or unit.
- Missing threshold: a target with no pass or fail boundary, so it cannot be tested.
- No conditions: a response-time target with no stated load, so it means nothing.
- Category gap: performance covered but security, availability, or accessibility silently omitted.
- Behaviour in disguise: a functional requirement filed as an NFR, or the reverse.
- Gold-plated level: five-nines availability demanded where the business needs three, at unjustified cost.
- Untraceable: a quality level with no policy, constraint, or stakeholder need behind it.

## Result

Total the scores (maximum 27):

- Pass: 22 or higher with no dimension at 0.
- Pass with changes: 16 to 21, or a single quick-to-fix dimension at 1.
- Fail: below 16, or any dimension at 0.

Record findings by severity with a specific fix, and route material issues back to the requirements skill.

## Findings template

| Dimension | Score | Evidence | Gap and fix |
| --- | --- | --- | --- |
|  |  |  |  |
