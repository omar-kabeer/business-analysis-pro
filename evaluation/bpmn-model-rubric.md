# BPMN Model Evaluation Rubric

A repeatable rubric for judging whether a BPMN model is valid and complete. A BPMN model represents a business process using Business Process Model and Notation. Used by the process-modelling and visual-modelling skills. Based on BABOK Process Modelling (10.35).

## Scoring scale

For each dimension score 0 to 3: 0 absent, 1 weak, 2 adequate, 3 strong.

## Dimensions

| # | Dimension | What good looks like |
| --- | --- | --- |
| 1 | Notation valid | The model uses BPMN elements correctly: events, activities, gateways, and flows. |
| 2 | Start and end events | Every process and sub-process has a start event and at least one end event. |
| 3 | Gateways correct | Gateways split and merge flow correctly, with complete and exclusive conditions where required. |
| 4 | Pools and lanes | Pools and lanes represent the participants and roles, and message flows cross pools correctly. |
| 5 | No dangling paths | Every sequence flow connects valid elements; there are no orphan or dead-end nodes. |
| 6 | Sequence correct | The flow reflects the real or intended process. |
| 7 | Readable | The model is legible and labelled so a reader can follow it unaided. |

## Result

Total the scores (maximum 21):

- Pass: 17 or higher with no dimension at 0.
- Pass with changes: 12 to 16, or a single quick-to-fix dimension at 1.
- Fail: below 12, or any dimension at 0.

Record findings by severity with a specific fix, and route material issues back to the process-modelling skill.

## Findings template

| Dimension | Score | Evidence | Gap and fix |
| --- | --- | --- | --- |
|  |  |  |  |
