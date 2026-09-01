# User Story Evaluation Rubric

A repeatable rubric for judging whether a user story is well-formed and ready. A user story is a brief statement of a need from the perspective of a user, with acceptance criteria. Used by the product-owner and requirements skills. Based on BABOK User Stories (10.48).

## Scoring scale

For each dimension score 0 to 3: 0 absent, 1 weak, 2 adequate, 3 strong.

## Dimensions

| # | Dimension | What good looks like |
| --- | --- | --- |
| 1 | Independent | The story stands on its own, with minimal dependence on others. |
| 2 | Negotiable | The story captures intent, leaving room to discuss the detail. |
| 3 | Valuable | The story delivers value to a user or customer, stated from their perspective. |
| 4 | Estimable | The team can estimate the story. |
| 5 | Small | The story is small enough to deliver in one iteration. |
| 6 | Testable | The story has acceptance criteria that make it testable. |
| 7 | Traceable | The story traces to a goal, epic, or feature. |

## Scoring anchors

Anchors describe the extreme scores; 1 and 2 interpolate between them.

| # | Score 0 (absent) | Score 3 (strong) |
| --- | --- | --- |
| 1 | Cannot ship without several other stories. | Stands on its own, with minimal dependence. |
| 2 | Locks in an implementation. | Captures intent, leaving room to discuss the detail. |
| 3 | No value to any user or the business. | Delivers value, stated from the user's perspective. |
| 4 | The team cannot estimate it. | The team can estimate it. |
| 5 | Too big for one iteration. | Small enough to deliver in one iteration. |
| 6 | No acceptance criteria. | Has acceptance criteria that make it testable. |
| 7 | No link to an epic, feature, or goal. | Traces to a goal, epic, or feature. |

## Common failure modes

- Technical task masquerading as a story: "add an index to the orders table" with no user value.
- Compound story: several user goals joined with "and", too big to finish in an iteration.
- Missing acceptance criteria: nothing states when the story is done.
- Design in the story: the solution is prescribed instead of the need, removing room to negotiate.
- Dependency chain: the story cannot ship without three others, breaking independence.
- No persona: "as a user" with no real role, so value cannot be judged.

## Result

Total the scores (maximum 21):

- Pass: 17 or higher with no dimension at 0.
- Pass with changes: 12 to 16, or a single quick-to-fix dimension at 1.
- Fail: below 12, or any dimension at 0.

Record findings by severity with a specific fix, and route material issues back to the product-owner skill.

## Findings template

| Dimension | Score | Evidence | Gap and fix |
| --- | --- | --- | --- |
|  |  |  |  |
