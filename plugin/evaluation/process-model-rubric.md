# Process Model Evaluation Rubric

A repeatable rubric for judging whether a process model represents a process correctly and usably. A process model, in a notation such as a flowchart, BPMN, or swimlane, shows the steps, decisions, and flow of a process. Used by the process-modelling and visual-modelling skills. Based on BABOK Process Modelling (10.35).

## Scoring scale

For each dimension score 0 to 3: 0 absent, 1 weak, 2 adequate, 3 strong.

## Dimensions

| # | Dimension | What good looks like |
| --- | --- | --- |
| 1 | Notation valid | The chosen notation is used correctly and consistently. |
| 2 | Start and end events | The process has a clear start and defined end events. |
| 3 | No dangling paths | Every path connects and leads to an end; there are no orphan or dead-end steps. |
| 4 | Decisions complete | Every decision has mutually exclusive, complete branches. |
| 5 | Roles | Where the notation shows roles, each step is assigned to the right one, with handoffs clear. |
| 6 | Level of detail | The detail suits the audience and the purpose. |
| 7 | Readable | The model is legible and labelled so a reader can follow it unaided. |

## Scoring anchors

Anchors describe the extreme scores; 1 and 2 interpolate between them.

| # | Score 0 (absent) | Score 3 (strong) |
| --- | --- | --- |
| 1 | Notation misused or inconsistent. | The notation is used correctly and consistently. |
| 2 | No clear start or end. | A clear start and defined end events. |
| 3 | Orphan or dead-end steps. | Every path connects and leads to an end. |
| 4 | Decision branches incomplete or overlapping. | Every decision has mutually exclusive, complete branches. |
| 5 | Roles absent where the notation shows them. | Each step is assigned to the right role, handoffs clear. |
| 6 | Detail wrong for the audience. | Detail suits the audience and purpose. |
| 7 | Illegible or unlabelled. | Legible and labelled, followable unaided. |

## Common failure modes

- Dangling path: a branch that leads nowhere or a step with no exit.
- Incomplete decision: a gateway whose conditions do not cover every case, or overlap.
- Missing handoff: work crosses a role boundary with no explicit handoff.
- Mixed altitude: some steps are keystrokes, others are whole sub-processes.
- Implicit start or end: the reader cannot tell where the process begins or finishes.
- Notation soup: symbols used inconsistently, so the model reads differently to different people.

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
