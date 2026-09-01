# Requirements (specified and modelled) Evaluation Rubric

A repeatable rubric for judging whether specified and modelled requirements are analysed and represented well enough to verify. Specified and modelled requirements are analysed, captured, and represented in text, matrix, or diagram form at an appropriate level of abstraction. Used by the requirements and visual-modelling skills. Based on BABOK Specify and Model Requirements (7.1).

## Scoring scale

For each dimension score 0 to 3: 0 absent, 1 weak, 2 adequate, 3 strong.

## Dimensions

| # | Dimension | What good looks like |
| --- | --- | --- |
| 1 | Analysed | The requirements are analysed, not just captured verbatim from elicitation. |
| 2 | Representation fit | The form used, whether text, matrix, or diagram, suits the requirement. |
| 3 | Level of abstraction | The requirements sit at a level of abstraction appropriate to the audience and stage. |
| 4 | Atomic and unambiguous | Each requirement is atomic and admits one interpretation. |
| 5 | Complete | The models and text cover the scope, with no silent gaps. |
| 6 | Consistent | The requirements and models are internally consistent. |
| 7 | Attributes | Requirement attributes such as source, priority, and status are captured. |
| 8 | Traceable | The requirements trace to their source and to each other. |

## Scoring anchors

Anchors describe the extreme scores; 1 and 2 interpolate between them.

| # | Score 0 (absent) | Score 3 (strong) |
| --- | --- | --- |
| 1 | Elicitation notes copied verbatim, unanalysed. | Requirements are analysed, not just captured. |
| 2 | Form fights the content, such as prose for a state machine. | The form used, text, matrix, or diagram, suits the requirement. |
| 3 | Detail is at the wrong altitude for the audience. | The abstraction level suits the audience and stage. |
| 4 | Compound and ambiguous. | Atomic and admits one interpretation. |
| 5 | Silent gaps in the models or text. | Models and text cover the scope, no silent gaps. |
| 6 | Text and models contradict each other. | Requirements and models are internally consistent. |
| 7 | No attributes captured. | Source, priority, and status attributes are captured. |
| 8 | No links to source or between requirements. | Requirements trace to their source and to each other. |

## Common failure modes

- Transcription, not analysis: raw elicitation notes presented as specified requirements.
- Wrong representation: a complex rule written as prose where a decision table would be unambiguous.
- Model and text disagree: a diagram says one thing, the text another, with no reconciliation.
- Altitude mismatch: implementation detail where an intent was wanted, or the reverse.
- Attribute void: no source, priority, or status, so the requirement cannot be managed downstream.

## Result

Total the scores (maximum 24):

- Pass: 20 or higher with no dimension at 0.
- Pass with changes: 14 to 19, or a single quick-to-fix dimension at 1.
- Fail: below 14, or any dimension at 0.

Record findings by severity with a specific fix, and route material issues back to the requirements skill.

## Findings template

| Dimension | Score | Evidence | Gap and fix |
| --- | --- | --- | --- |
|  |  |  |  |
