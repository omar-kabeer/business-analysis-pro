# Prototyping Playbook

How to use a prototype to answer one question for one decision, cheaply, and turn what it teaches into requirements rather than leaving it in a slide. This playbook applies BABOK Prototyping (10.36), with Observation (10.31) and Acceptance and Evaluation Criteria (10.1), in support of Validate Requirements (7.3) and Define Design Options (7.5). Evaluation practice follows ISO 9241-210:2010 (`iso-9241-210-2010`, the 2010 edition held), and accessibility checks follow WCAG 2.1 (`wcag-2.1`).

## When this playbook applies

Use it when a requirement is better shown than described, when stakeholders disagree about what they want, when usability is uncertain, or when a technical approach needs proving. Use the ux skill for the wider human-centred design process, and record each prototype in `templates/prototype-brief.md`.

## Step 1: State the question and the decision

Write, before building anything, the uncertainty, the question the prototype must answer, the decision that follows, and how you will know the question is answered. "Can a first-time approver approve a clean invoice within 3 minutes unaided? If yes, build the single-screen layout; if no, test the two-step layout. Answered when 8 of 10 participants complete the task."

## Step 2: Choose the type and the fidelity

| Type | Use |
| --- | --- |
| Throw-away | Learn something, then discard |
| Evolutionary | Grow the prototype into the product |
| Horizontal | Show breadth: many screens, little depth |
| Vertical | Show depth: one slice working end to end |
| Proof of concept | Prove a technical approach can work |

Choose the lowest fidelity that answers the question: sketch, wireframe, mock-up, clickable, or working slice. ISO 9241-210 advises that a prototype's detail and realism should suit the design issue being investigated (check ISO9241-PR-02). The reference `prototype-types.md` covers each type.

## Step 3: Be honest about scope

Record what is included, what is stubbed, and what is absent, and tell participants what is fake before they start. Otherwise they report defects in the stubs, and reviewers read more into the result than it supports.

## Step 4: Test with tasks, not a tour

Use the prototype to get user feedback through evaluation, not only to demonstrate the design (ISO9241-PR-01). Recruit people who match the users, give them real tasks, and watch them do the tasks rather than showing them a demonstration (PR-03). Use realistic content, including long names, missing values, and edge cases. Record consent before recording anything.

## Step 5: Record findings and convert them

Record what happened, verbatim where possible, apart from what it means. Then convert every finding into one of three things: an accepted requirement (new or changed), a rejected idea with its reason, or an open question with an owner. A finding that converts to nothing was not worth recording.

## Step 6: Check accessibility early

Where the prototype informs a customer-facing or public interface, check the design-time accessibility criteria while change is still cheap: contrast, labels, information conveyed by more than colour, reading order, and keyboard operability (WCAG21-DS-01). A prototype is a design artefact, so this is readiness for conformance, not conformance itself.

## Step 7: Decide the disposition

State whether the prototype is discarded, evolved, or kept as a reference, and if it evolves, what must be rebuilt properly before it ships. An unstated disposition is how throw-away code ends up in production.

## Stop rules

The prototype has done its job when the question it set out to answer has an answer, backed by observation of real tasks, every finding has converted to a requirement, a rejection, or an owned question, and the disposition is decided.

## Common failures

- A high-fidelity mock-up built to answer a question a sketch could answer.
- A guided demo mistaken for a test.
- Colleagues standing in for users.
- Findings that stay in the slide deck.
- No disposition, so a throw-away prototype drifts toward production.

## Worked example

Supplier invoice approval: the approver review screen.

Question: can a first-time approver approve a clean invoice within 3 minutes unaided on a phone? Decision: single-screen layout or two-step layout. Answered when 8 of 10 succeed.

Type and fidelity: throw-away, clickable mock-up, because layout and wording are the uncertainty, not the back end.

Scope: invoice summary, match status, line detail, and approve or reject with a reason were included; the PDF viewer was a static image (participants were told); delegation was absent.

Sessions: ten approvers from four departments, three real tasks each, screen and audio recorded with written consent.

Findings and conversions:
- F-01: 6 of 10 did not notice the match status badge below the fold. Converted to an accepted change: STORY-018 acceptance criterion 3 now requires the status at the top of the screen.
- F-02: "I just want the purchase order next to the invoice" (participant 4). Converted to an open question, Q-02, owned by the UX lead, for a round 2 variant test.
- The status badge used colour alone. Converted to an accepted change: add a text label.

Result: 7 of 10 met the 3-minute target in round 1, short of 8; round 2 with the changes reached 9 of 10, so the single-screen layout was chosen.

Disposition: discarded; the production screen is built fresh from the updated stories.

## Sources

- `babok-3.0-2015`: Prototyping (10.36), Observation (10.31), and Acceptance and Evaluation Criteria (10.1), within 7.3 and 7.5.
- `iso-9241-210-2010`: prototype use and evaluation checks, first edition 2010.
- `wcag-2.1`: design-time accessibility checks.
