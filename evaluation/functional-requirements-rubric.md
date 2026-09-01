# Functional Requirements Evaluation Rubric

A repeatable rubric for judging whether a set of functional requirements is ready to hand to design and build. Functional requirements describe the behaviour and information the solution manages. Used by the quality and requirements skills and applied to functional requirements captured in a BRD, FRD, or SRS. Based on BABOK Requirements Classification Schema (2.3), Specify and Model Requirements (7.1), and Verify Requirements (7.2).

## Scoring scale

For each dimension score 0 to 3: 0 absent, 1 weak, 2 adequate, 3 strong.

## Dimensions

| # | Dimension | What good looks like |
| --- | --- | --- |
| 1 | Behaviour focus | Each requirement states a behaviour the solution performs or information it manages, not a quality level or a design choice. |
| 2 | Atomic | Each requirement is self-contained, carries a single requirement, and can be understood independently of the others. |
| 3 | Complete | The functional scope is covered: inputs, outputs, flows, and rules for each capability are present, with no silent gaps. |
| 4 | Unambiguous | Each requirement admits one interpretation, so it is clear whether a solution does or does not meet it. |
| 5 | Testable | Each has acceptance criteria and can be verified as met or not met. |
| 6 | Consistent | Requirements align with the stakeholder needs and do not conflict with each other. |
| 7 | Traceability | Each traces up to a stakeholder requirement or objective and back to a source. |
| 8 | Prioritised | Requirements are ranked or grouped by value or importance, with stakeholder agreement. |
| 9 | Feasible | Each is achievable within the agreed risk, schedule, and budget, or is flagged for further investigation. |

## Scoring anchors

Anchors describe the extreme scores; 1 and 2 interpolate between them.

| # | Score 0 (absent) | Score 3 (strong) |
| --- | --- | --- |
| 1 | Requirements state qualities or designs, not behaviour. | Every requirement names a behaviour the solution performs or information it manages. |
| 2 | Requirements bundle several needs joined by "and" or "or". | One requirement per statement, understandable on its own. |
| 3 | Major flows, inputs, or rules for a capability are missing. | Inputs, outputs, flows, and rules are present for each capability. |
| 4 | Wording admits more than one reading. | One interpretation; whether a solution meets it is clear. |
| 5 | No acceptance criteria; fulfilment cannot be checked. | Each requirement has acceptance criteria and is verifiable. |
| 6 | Requirements conflict with each other or with the need. | Aligned with the stakeholder needs, no conflicts. |
| 7 | No link to a need or a source. | Each traces up to a stakeholder requirement and back to a source. |
| 8 | Flat list, nothing ranked. | Ranked or grouped by value, with stakeholder agreement. |
| 9 | Infeasible within the constraints, and not flagged. | Achievable within risk, schedule, and budget, or flagged for investigation. |

## Common failure modes

- Solutioning: the requirement prescribes a screen or technology instead of the behaviour needed.
- Compound requirement: "and", "or", or "including" hides several requirements in one statement.
- Untestable adjective: "user-friendly", "fast", or "flexible" with no measure, which is a non-functional requirement in disguise.
- Silent gap: the happy path is specified but the error, empty, and boundary behaviour is not.
- Orphan: no trace to a stakeholder need, so no one can say why the requirement exists.
- Gold-plating: behaviour no stakeholder asked for and no objective needs.
- Implementation leak: the statement describes how the system works internally rather than what it must do.

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
