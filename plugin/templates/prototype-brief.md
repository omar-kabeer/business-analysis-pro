---
type: deliverable
domain: design
status: draft
version: 2.0.0
---

# Prototype Brief and Findings

> **How to use this template.** Filled rows and "Example" lines illustrate one scenario so the expected depth is clear. Replace them with the facts of the work at hand: never carry example names, figures, or IDs into a real document, and say plainly when a fact is not yet known. Include every other section by default, and leave one out only when the user asks. Include these sections only when their condition applies or the user asks for them: Technical proof of concept (high risk, or the Information Technology perspective); Accessibility check (written for customers, or regulated work). The full rules are in `templates/prototype-brief.toc.json`.

## Purpose

State what a prototype is being built to learn, keep its scope honest, and turn what it teaches into requirements rather than leaving it in a slide. A prototype answers one question for one decision; the brief makes both explicit before anything is built. Graded by `evaluation/prototype-brief-rubric.md`.

This template is a superset. Its table-of-contents manifest, `templates/prototype-brief.toc.json`, marks which sections are core, standard, or extended and when each applies.

## Document Control

| Field | Value |
| --- | --- |
| Initiative | Supplier invoice approval |
| Prototype name | Approver review screen |
| Owner | Leah Brown, UX lead |
| Version | 1.1.0 |
| Status | Findings recorded |

## Scope

State what the prototype covers and what it does not, so participants and reviewers judge it against the right question.

| Included | Stubbed | Deliberately absent |
| --- | --- | --- |
| Invoice summary, match status, line detail, approve and reject with reason | PDF viewer (static image) | Delegation, bulk approval |

Participants are told what is fake before they start, so they do not report bugs in the stubs.

## Inputs

List what the prototype is built from: the stories or requirements it explores, research findings, the current process, and design constraints.

Example: STORY-018 and STORY-019, NFR-004, and five approver interviews from May.

## The question

Write the question before building anything. If you cannot name the decision it informs, the prototype is not ready to build.

| Field | Value |
| --- | --- |
| Uncertainty being resolved | Whether approvers can find what to check without training |
| Question the prototype must answer | Can a first-time approver approve a clean invoice within 3 minutes unaided? |
| Decision that follows from the answer | Build the single-screen layout, or test the two-step layout |
| How we will know the question is answered | 8 of 10 participants complete the task unaided |

## Type and fidelity

| Field | Value |
| --- | --- |
| Type | Throw-away |
| Fidelity | Clickable mock-up |
| Why this fidelity is right for the current maturity | Layout and wording are the uncertainty; data and back end are not |
| Tooling | Figma prototype |

Types: throw-away, evolutionary, horizontal, vertical, or proof of concept. Fidelity: sketch, wireframe, mock-up, clickable, or working slice. Use the lowest fidelity that can answer the question.

## Content and data

Use realistic content, including long names, missing values, non-Latin characters, large amounts, and expired records, so the prototype meets the cases real users will.

Example: 20-line invoices, a supplier name of 60 characters, one invoice in euros, and one with a missing purchase order.

## Session plan

Give participants real tasks to complete, not a tour. Recruit people who match the users, and record consent before recording anything.

| Field | Value |
| --- | --- |
| Participants (role, number) | 10 approvers from 4 departments, none of whom used the pilot |
| Tasks given (not a demo) | Approve a clean invoice; reject a mismatched one; find the PO number |
| Facilitator | Leah Brown |
| Recording and consent | Screen and audio, written consent |
| Rounds planned | 2, with changes between rounds |

## Findings

Record what happened, verbatim where possible, separately from what it means, and what each finding becomes.

| ID | Observation | Interpretation | Converts to | Requirement or rejection ID |
| --- | --- | --- | --- | --- |
| F-01 | 6 of 10 did not notice the match status badge | The badge is below the fold on laptop screens | Accepted requirement | STORY-018 AC3 |
| F-02 | "I just want to see the PO next to the invoice" (participant 4) | Side-by-side view valued | Open question | Q-02 |

Converts to: accepted requirement, rejected idea with a reason, or open question.

## Traceability to requirements

Show which requirements the prototype explored and what happened to each.

| Requirement | Explored by task | Outcome |
| --- | --- | --- |
| STORY-018 | Task 1 | Confirmed with a change to AC3 |
| NFR-004 | Tasks 1 to 3 | 7 of 10 met the 3-minute target |

## Open questions

Every question that the sessions raised but did not answer gets an owner and a way to resolve it, so it is not lost when the prototype is discarded.

| ID | Question | Owner | How it will be resolved |
| --- | --- | --- | --- |
| Q-02 | Is a side-by-side PO view worth the screen space? | Leah Brown | Round 2 variant test |

## Assumptions

What the prototype takes as true, each with the effect if wrong.

| ID | Assumption | Effect if wrong |
| --- | --- | --- |
| A-01 | Approvers use laptops, not phones | Findings on layout do not transfer to mobile |

## Risks

Risks the prototype creates: that stakeholders mistake it for the product, that it is kept and shipped, or that a small sample is over-read.

| Risk | Response | Owner |
| --- | --- | --- |
| Sponsor treats the mock-up as a finished design | Label every screen "prototype, not final"; state disposition in the brief | Leah Brown |

## Disposition

| Field | Value |
| --- | --- |
| Decision | Discard |
| Reasoning | Built to answer a layout question, which it has |
| If evolving, what must be rebuilt properly before it ships | Not applicable |

An unstated disposition is how throw-away prototypes end up in production.

## Technical proof of concept

For a proof of concept or a working slice, record the technical question, the environment, and what was proven or disproven, with the evidence.

| Question | Environment | Result | Evidence |
| --- | --- | --- | --- |
| Can the vendor API post approval status in under 1 second? | Vendor sandbox | Yes, 400 ms median | Test log POC-02 |

## Accessibility check

Where the prototype will inform a customer-facing or public interface, record the accessibility issues found and how they will be handled.

| Issue | WCAG criterion | Handling |
| --- | --- | --- |
| Status shown by colour only | 1.4.1 Use of colour | Add a text label to the badge |

## Outputs

Findings converted into accepted requirements, rejected ideas with reasons, and open questions, plus a disposition decision for the prototype itself.

## Review criteria

- The question and the decision it informs are stated before building.
- The type and fidelity fit the question and are justified.
- Scope says what is included, stubbed, and absent, and participants were told.
- Sessions use real tasks with the right participants, not a demo.
- Findings separate observation from interpretation and each converts to a requirement, a rejection, or an open question.
- Findings trace to the requirements the prototype explored.
- The disposition is explicit.

## Practice anchor

Prototyping; Observation; Acceptance and Evaluation Criteria; Validate Requirements. Owned by the prototyping and ux skills.

## House style

Write the narrative with the natural-prose-editor pass and no em dashes. See `docs/methodology/editorial-style.md`.
