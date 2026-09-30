# Backlog Management Playbook

How to turn a product goal into a backlog a team can deliver in small, valuable, testable slices, and keep it that way. This playbook applies BABOK Backlog Management (10.2), User Stories (10.48), Acceptance and Evaluation Criteria (10.1), and Prioritization (10.33), within Prioritize Requirements (5.3) and the Agile Perspective (11.1). Roles and events follow the Scrum Guide (`scrum-guide-2020`); broader agile practice follows the Agile Practice Guide (`agile-practice-guide`); story craft follows `effective-user-stories`.

## When this playbook applies

Use it whenever work is delivered in iterations and someone must decide what the team does next: writing epics and stories, splitting work, refining the backlog, setting a definition of ready or done, or planning a release. Use the requirements skill instead when the deliverable is a baselined specification for a predictive project.

## Step 1: Anchor the backlog to a product goal

Every backlog serves one product goal at a time, stated as an outcome with a measure. Write it at the top of the backlog. An item that does not move the goal, or protect something that does, does not belong near the top. The Scrum Guide makes the product goal the commitment for the product backlog; treat it as the test for every item.

## Step 2: Write epics as outcomes with a boundary

An epic states the outcome it serves, what is in and out, and how success will be measured. Without a boundary, epics grow until they cannot be delivered. Use `templates/user-story-epic.md`.

## Step 3: Write stories that pass INVEST

Each story names a real user role, the capability they need, and the benefit: "As an approver, I want to see why an invoice failed matching, so that I can decide without investigating." Check each against INVEST:

| Quality | Test |
| --- | --- |
| Independent | Can be built and released without waiting on another story |
| Negotiable | Describes the need, not a fixed design |
| Valuable | A user or the business gains something observable |
| Estimable | The team can size it |
| Small | Fits comfortably in one iteration |
| Testable | Someone other than the author can verify it |

A story that fails "Valuable" is usually a task; a story that fails "Estimable" usually needs a spike.

## Step 4: Write acceptance criteria that can fail

Give every story criteria in Given, When, Then form covering the main path, at least one alternate path, and at least one failure case (Acceptance and Evaluation Criteria, 10.1). Criteria that restate the story ("the feature works") cannot fail and so verify nothing. Link non-functional requirements and business rules rather than repeating them in every story.

## Step 5: Split vertically

When a story is too big, split it so each slice still delivers observable value end to end. Useful splitting patterns:

- by workflow step, delivering the first step fully before the next;
- by business rule, simple case first and exceptions later;
- happy path first, then error handling;
- by data variation, one type first;
- by interface, one channel first.

Never split by layer (database, then API, then screen): no slice is usable until all are done.

## Step 6: Prioritise by value, risk, and dependency

Order the backlog with one method at a time (Prioritization, 10.33). MoSCoW works for release scope; weighted shortest job first (cost of delay over size) works for flow. Bring risky and uncertain items forward so the team learns early, and respect real dependencies. Record why the top items are at the top; "the sponsor asked" is a reason to discuss, not to rank.

## Step 7: Refine continuously and gate with ready and done

Refinement keeps the top of the backlog ready: stories there are understood, sized, and have criteria. A definition of ready says what a story needs before it enters an iteration; a definition of done says what "finished" means for every item (tested, reviewed, documented, deployable). Use `checklists/definition-of-ready.md` and `checklists/definition-of-done.md`. Items further down can stay coarse; detail spent on items that may never be built is waste.

## Step 8: Plan releases as coherent increments

Group the top of the backlog into releases that deliver a usable increment toward the goal, checked against the team's capacity with a margin, and with dependencies and readiness criteria stated. Use `templates/release-plan-and-notes.md`.

## Stop rules

The backlog is healthy when the goal is stated, the top two iterations of stories are ready, every story at the top passes INVEST and has criteria that can fail, and the order has a recorded reason. Do not refine the whole backlog to that standard.

## Common failures

- Stories written as tasks for developers ("create the approval table").
- Acceptance criteria that cannot fail.
- Horizontal slicing, so nothing is usable until everything is done.
- Everything rated Must.
- A backlog with no product goal, so priority follows whoever asked last.

## Worked example

Supplier payment status portal, epic EPIC-004 "Suppliers know where their invoice is".

Product goal: share of status queries answered by self-service rises from 0 to 30 percent by the end of 2026.

Story STORY-041: "As a supplier finance contact, I want to look up an invoice by its number and my reference, so that I know its status without calling AP."

Acceptance criteria:
- Given a valid invoice number and reference, when I search, then I see the status within 2 seconds.
- Given an unknown pair, when I search, then I see a neutral "not found" and no data about any other supplier.
- Given an invoice on hold, when I search, then I see "On hold: we will contact you" and the AP email.

Split: the original story "see everything about my invoices" was split by workflow step into lookup (STORY-041), payment date (STORY-042), and remittance download (later). STORY-042 depends on STORY-041 and follows it.

Priority: MoSCoW for release 1, with STORY-041 and STORY-042 as Must, because together they cover 85 percent of status calls; remittance download is Could.

## Sources

- `babok-3.0-2015`: techniques 10.1, 10.2, 10.33, and 10.48, task 5.3, and the Agile Perspective (11.1).
- `scrum-guide-2020`: product goal, product backlog, refinement, and the definition of done.
- `agile-practice-guide`: iteration planning, release planning, and flow-based prioritisation. The identity of the held copy is not yet verified in `sources/manifest.json`; paraphrase only.
- `effective-user-stories`: story form, INVEST, and splitting patterns. A one-page reference with no named author, so it supports rather than governs.
