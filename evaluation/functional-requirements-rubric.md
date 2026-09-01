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
