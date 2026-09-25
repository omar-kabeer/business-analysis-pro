# Requirements Architecture Evaluation Rubric

A repeatable rubric for judging whether a requirements architecture structures the requirements soundly. The requirements architecture is the requirements of an initiative and the interrelationships among them, together with the contextual information recorded. Used by the requirements and architecture skills and applied to any architecture produced from `templates/requirements-architecture.md`. Based on BABOK Define Requirements Architecture (7.4).

## Scoring scale

For each dimension score 0 to 3: 0 absent, 1 weak, 2 adequate, 3 strong.

## Dimensions

| # | Dimension | What good looks like |
| --- | --- | --- |
| 1 | Structure defined | The requirements are organized into a coherent structure. |
| 2 | Relationships | The interrelationships among requirements are defined and correct. |
| 3 | Viewpoints | The relevant viewpoints are represented, using models and frameworks where useful. |
| 4 | Completeness | The architecture can be used to assess whether the requirements are complete, with no gaps. |
| 5 | Consistency | The relationships and viewpoints are internally consistent, with no conflicts. |
| 6 | Contextual information | The contextual information needed to interpret the structure is recorded. |
| 7 | Traceable | The structure supports tracing requirements to needs, designs, and releases. |

## Scoring anchors

Anchors describe the extreme scores; 1 and 2 interpolate between them.

| # | Score 0 (absent) | Score 3 (strong) |
| --- | --- | --- |
| 1 | Requirements are an unstructured pile. | Organized into a coherent structure. |
| 2 | Relationships between requirements are unstated. | Interrelationships are defined and correct. |
| 3 | Only one viewpoint, where several are needed. | The relevant viewpoints are represented. |
| 4 | Cannot be used to judge completeness. | Can be used to confirm the requirements are complete, no gaps. |
| 5 | Viewpoints and relationships conflict. | Internally consistent, no conflicts. |
| 6 | Structure cannot be interpreted without the author. | The contextual information needed to interpret it is recorded. |
| 7 | Does not support tracing. | Supports tracing to needs, designs, and releases. |

## Common failure modes

- Flat list dressed up: a list of requirements relabelled as an architecture, with no relationships.
- Single viewpoint: one model where the audience needs data, process, and rule views.
- Untestable completeness: the structure cannot answer "is anything missing".
- Context-free: the diagram cannot be read without the author in the room.
- Inconsistent viewpoints: two views of the same requirements disagree.

## Result

Total the scores (maximum 21):

- Pass: 17 or higher with no dimension at 0.
- Pass with changes: 12 to 16, or a single quick-to-fix dimension at 1.
- Fail: below 12, or any dimension at 0.

Record findings by severity with a specific fix, and route material issues back to the architecture skill.

## Findings template

| Dimension | Score | Evidence | Gap and fix |
| --- | --- | --- | --- |
|  |  |  |  |
