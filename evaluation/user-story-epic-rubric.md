# Epic and User Stories Evaluation Rubric

Assess an Epic and User Stories document built from `templates/user-story-epic.md`, against BABOK User Stories (10.48), Acceptance and Evaluation Criteria (10.1), and Backlog Management (10.2). It judges the epic and its stories together: whether they deliver a stated outcome in small, testable slices. The BABOK-named `user-story-rubric.md` remains for judging a single story.

## Scoring scale

For each dimension score 0 to 3: 0 absent or misleading, 1 weak, 2 adequate for the stated stage, 3 strong and well supported.

## Dimensions

| # | Dimension | What good looks like |
| --- | --- | --- |
| 1 | Epic outcome and boundary | The epic states the outcome it serves, its in-scope and out-of-scope boundary, and how success will be measured. |
| 2 | Story form | Every story names a real user role, a capability, and the benefit to that user or the business. |
| 3 | INVEST and slicing | Every story is independent, negotiable, valuable, estimable, small, and testable, and large stories are split vertically so each slice delivers value. |
| 4 | Acceptance criteria | Every story has acceptance criteria covering the main path, key alternates, and at least one failure case, verifiable by someone other than the author. |
| 5 | Traceability | Stories trace to the epic and to the business rules and non-functional requirements they depend on. |
| 6 | Priority and value | Priority reflects value, risk, and dependencies, and the first release slice delivers the outcome's first step. |
| 7 | Uncertainty visible | Assumptions, dependencies, and spikes are recorded with owners, so unknowns are planned rather than discovered late. |

## Scoring anchors

Anchors describe the extreme scores; 1 and 2 interpolate between them.

| # | Score 0 (absent) | Score 3 (strong) |
| --- | --- | --- |
| 1 | The epic is a title with no outcome or boundary. | The epic states the outcome it serves, its in-scope and out-of-scope boundary, and how success will be measured. |
| 2 | Stories are tasks or system actions ("As the system...") with no user or benefit. | Every story names a real user role, a capability, and the benefit to that user or the business. |
| 3 | Stories are horizontal layers (database, API, screen) or too big for an iteration. | Every story is independent, negotiable, valuable, estimable, small, and testable, and large stories are split vertically so each slice delivers value. |
| 4 | Stories have no acceptance criteria, or criteria such as "works as expected". | Every story has acceptance criteria covering the main path, key alternates, and at least one failure case, verifiable by someone other than the author. |
| 5 | No link from stories to the epic, rules, or quality requirements. | Stories trace to the epic and to the business rules and non-functional requirements they depend on. |
| 6 | Priority is request order, or everything is Must. | Priority reflects value, risk, and dependencies, and the first release slice delivers the outcome's first step. |
| 7 | Unknowns and dependencies are hidden until they block the iteration. | Assumptions, dependencies, and spikes are recorded with owners, so unknowns are planned rather than discovered late. |

## Common failure modes

- Stories written as tasks for developers.
- Acceptance criteria that restate the story.
- An epic with forty stories and no slicing into releases.
- Non-functional requirements repeated in every story instead of linked.
- Story points used as a promise rather than an estimate.

## Result

Total the scores (maximum 21):

- Pass: 17 or higher with no dimension at 0.
- Pass with changes: 12 to 16, or 17 or higher with a dimension at 0.
- Fail: below 12.

Dimensions 2 (story form) and 4 (acceptance criteria) are blocking: a score of 0 on either fails the document whatever the total. Record findings by severity with specific fixes, and route material issues back to the product-owner skill. A draft that does not pass may still be useful; its quality state must remain visible.

## Findings template

| Dimension | Score | Evidence | Gap and fix |
| --- | --- | --- | --- |
|  |  |  |  |
