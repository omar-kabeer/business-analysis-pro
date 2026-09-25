# Current State Description Evaluation Rubric

A repeatable rubric for judging whether a current state description gives the change enough context. The current state description captures the enterprise as it is today: its scope, capabilities, resources, performance, culture, dependencies, infrastructure, external influences, and the relationships between them. Used by the business-analysis and strategy skills and applied to any description produced from `templates/current-state-assessment.md`. Based on BABOK Analyze Current State (6.1).

## Scoring scale

For each dimension score 0 to 3: 0 absent, 1 weak, 2 adequate, 3 strong.

## Dimensions

| # | Dimension | What good looks like |
| --- | --- | --- |
| 1 | Business need context | The problem or need the current state gives context for is clear. |
| 2 | Scope and boundaries | The part of the enterprise described is scoped to what the change requires, not everything. |
| 3 | Capabilities and processes | The current capabilities and the processes that deliver them are described, with how well they perform. |
| 4 | Structure and culture | The formal and informal working relationships and the cultural factors are described. |
| 5 | Technology and infrastructure | The supporting systems, data, and infrastructure are described, with their constraints. |
| 6 | Policies and rules | The business policies and rules that govern the current state are captured. |
| 7 | External influences and dependencies | External influencers and dependencies on the current state are noted. |
| 8 | Performance | How well the current state performs today, with its pain points, is captured. |
| 9 | Evidence | The description is grounded in evidence, not assumed. |

## Scoring anchors

Anchors describe the extreme scores; 1 and 2 interpolate between them.

| # | Score 0 (absent) | Score 3 (strong) |
| --- | --- | --- |
| 1 | No link to a business need. | The need the current state contextualizes is clear. |
| 2 | Describes everything, or nothing relevant. | Scoped to what the change requires. |
| 3 | Capabilities and processes absent. | Described with their performance and pain points. |
| 4 | Structure and culture ignored. | Formal and informal relationships and culture described. |
| 5 | Technology and constraints ignored. | Systems, data, and infrastructure described with constraints. |
| 6 | Governing policies and rules omitted. | Business policies and rules captured. |
| 7 | External influences and dependencies missed. | External influencers and dependencies noted. |
| 8 | No sense of how the current state performs. | Performance and pain points captured. |
| 9 | Asserted from memory. | Grounded in evidence. |

## Common failure modes

- Boil the ocean: the whole enterprise is described where only the affected slice was needed.
- Assumed as-is: the current state is written from memory, with no evidence or measurement.
- Solution creep: the description drifts into the future state or a proposed solution.
- Process-only: activities are captured but the technology, policy, and culture around them are not.
- No performance baseline: the current state is described but not how well it works, so no gap can be measured later.
- Missing constraints: technical or policy constraints that will bind the solution are left out.

## Result

Total the scores (maximum 27):

- Pass: 22 or higher with no dimension at 0.
- Pass with changes: 16 to 21, or a single quick-to-fix dimension at 1.
- Fail: below 16, or any dimension at 0.

Record findings by severity with a specific fix, and route material issues back to the business-analysis skill.

## Findings template

| Dimension | Score | Evidence | Gap and fix |
| --- | --- | --- | --- |
|  |  |  |  |
