# PRD Evaluation Rubric

A repeatable rubric for judging whether a Product Requirements Document is ready to hand to a delivery team. Used by the quality and product-manager skills and applied to any PRD produced from `templates/prd.md`.

## Scoring scale

For each dimension score 0 to 3: 0 absent, 1 weak, 2 adequate, 3 strong.

## Dimensions

| # | Dimension | What good looks like |
| --- | --- | --- |
| 1 | Problem and evidence | The customer problem is clear, and the direction is backed by research or data, not opinion. |
| 2 | Users and jobs | Target users and their jobs to be done are named. |
| 3 | Outcomes and metrics | Goals are outcome-focused with a primary success metric, baseline, and target; non-goals are explicit. |
| 4 | Scope | In and out of scope and release phasing are clear. |
| 5 | Requirement quality | Requirements are atomic, unambiguous, and testable, with acceptance criteria and a trace to a goal. |
| 6 | Experience | Key user flows, states, and edge and error cases are covered. |
| 7 | Non-functional | Relevant quality attributes are stated, with detail referenced where needed. |
| 8 | Dependencies and risks | Dependencies, assumptions, and risks are explicit and owned. |
| 9 | Rollout and measurement | The launch approach and the instrumentation for the success metric are defined, with go and no-go criteria. |

## Scoring anchors

Anchors describe the extreme scores; 1 and 2 interpolate between them.

| # | Score 0 (absent) | Score 3 (strong) |
| --- | --- | --- |
| 1 | Direction rests on opinion. | The customer problem is clear and backed by research or data. |
| 2 | No named users or jobs. | Target users and their jobs to be done are named. |
| 3 | Goals are outputs, or have no metric; non-goals absent. | Outcome goals with a primary metric, baseline, and target; non-goals explicit. |
| 4 | Scope and phasing unclear. | In and out of scope and release phasing are clear. |
| 5 | Requirements vague, untraced. | Atomic, unambiguous, testable, with acceptance criteria and a trace to a goal. |
| 6 | Flows and edge cases ignored. | Key flows, states, and edge and error cases covered. |
| 7 | Quality attributes ignored. | Relevant non-functional attributes stated, detail referenced where needed. |
| 8 | Dependencies and risks hidden. | Dependencies, assumptions, and risks explicit and owned. |
| 9 | No launch or measurement plan. | Launch approach and instrumentation defined, with go and no-go criteria. |

## Common failure modes

- Feature list, not outcomes: the PRD lists what to build with no measurable goal behind it.
- Opinion as evidence: "users want this" with no research or data.
- Non-goals missing: nothing bounds the scope, so it expands in delivery.
- Happy-path experience: main flows covered, edge and error states ignored.
- Unmeasured launch: no instrumentation, so the success metric can never be read.
- Requirements without trace: features that serve no stated goal.

## Result

Total the scores (maximum 27):

- Pass: 22 or higher with no dimension at 0.
- Pass with changes: 16 to 21, or a single quick-to-fix dimension at 1.
- Fail: below 16, or any dimension at 0.

Record findings by severity with a specific fix, and route material issues back to the product-manager and requirements skills.

## Findings template

| Dimension | Score | Evidence | Gap and fix |
| --- | --- | --- | --- |
|  |  |  |  |
