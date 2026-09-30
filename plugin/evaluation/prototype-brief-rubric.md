# Prototype Brief and Findings Evaluation Rubric

Assess a Prototype Brief and Findings document built from `templates/prototype-brief.md`, against BABOK Prototyping (10.36), Observation (10.31), and Validate Requirements (7.3). It judges whether the prototype was set up to answer a real question and whether what it taught was turned into requirements and decisions. The BABOK-named `prototype-rubric.md` remains for judging a prototype itself.

## Scoring scale

For each dimension score 0 to 3: 0 absent or misleading, 1 weak, 2 adequate for the stated stage, 3 strong and well supported.

## Dimensions

| # | Dimension | What good looks like |
| --- | --- | --- |
| 1 | Question and decision | The uncertainty, the question the prototype must answer, the decision that follows, and how the answer will be recognised are all stated before building. |
| 2 | Type and fidelity fit | The prototype type and fidelity are the cheapest that can answer the question, and the choice is justified. |
| 3 | Honest scope | Included, stubbed, and absent parts are stated, and participants were told what is fake. |
| 4 | Realistic sessions | Sessions use the right participants and real tasks with realistic content, including edge cases, and consent is recorded. |
| 5 | Findings integrity | Observations are recorded apart from interpretation, and every finding converts to an accepted requirement, a rejected idea with a reason, or an open question. |
| 6 | Traceability | Findings trace to the requirements the prototype explored, and changed requirements are identified. |
| 7 | Disposition and risk | The disposition (discard, evolve, retain) is explicit, with what must be rebuilt if it evolves, and the risks of the prototype being mistaken for the product are handled. |

## Scoring anchors

Anchors describe the extreme scores; 1 and 2 interpolate between them.

| # | Score 0 (absent) | Score 3 (strong) |
| --- | --- | --- |
| 1 | No question or decision; the prototype is a demo in search of a purpose. | The uncertainty, the question the prototype must answer, the decision that follows, and how the answer will be recognised are all stated before building. |
| 2 | Fidelity is far higher or lower than the question needs, with no reason given. | The prototype type and fidelity are the cheapest that can answer the question, and the choice is justified. |
| 3 | Scope is unstated, so participants report stub defects and reviewers over-read the result. | Included, stubbed, and absent parts are stated, and participants were told what is fake. |
| 4 | Colleagues are shown a walkthrough and asked if they like it. | Sessions use the right participants and real tasks with realistic content, including edge cases, and consent is recorded. |
| 5 | Findings are opinions with no observation behind them, or they convert to nothing. | Observations are recorded apart from interpretation, and every finding converts to an accepted requirement, a rejected idea with a reason, or an open question. |
| 6 | No link between the prototype and any requirement. | Findings trace to the requirements the prototype explored, and changed requirements are identified. |
| 7 | No disposition, so a throw-away prototype drifts toward production. | The disposition (discard, evolve, retain) is explicit, with what must be rebuilt if it evolves, and the risks of the prototype being mistaken for the product are handled. |

## Common failure modes

- A beautiful high-fidelity mock-up built to answer a question a sketch could answer.
- Five internal colleagues as the only participants.
- Findings that are all positive because the tasks were a guided demo.
- No disposition, so the prototype code ships.
- Open questions with no owner.

## Result

Total the scores (maximum 21):

- Pass: 17 or higher with no dimension at 0.
- Pass with changes: 12 to 16, or 17 or higher with a dimension at 0.
- Fail: below 12.

Dimensions 1 (question and decision) and 5 (findings integrity) are blocking: a score of 0 on either fails the document whatever the total. Record findings by severity with specific fixes, and route material issues back to the prototyping skill. A draft that does not pass may still be useful; its quality state must remain visible.

## Findings template

| Dimension | Score | Evidence | Gap and fix |
| --- | --- | --- | --- |
|  |  |  |  |
