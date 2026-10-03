---
type: deliverable
domain: business-analysis
status: draft
version: 2.0.0
---

# Workshop Plan

> **How to use this template.** Filled rows and "Example" lines illustrate one scenario so the expected depth is clear. Replace them with the facts of the work at hand: never carry example names, figures, or IDs into a real document, and say plainly when a fact is not yet known. Include every other section by default, and leave one out only when the user asks. Include these sections only when their condition applies or the user asks for them: Remote facilitation (adaptive or hybrid approach, or written for delivery teams); Decision method (formal governance, or medium or high risk). The full rules are in `templates/workshop-plan.toc.json`.

## Purpose

Plan and run a facilitated workshop that brings stakeholders together to elicit, refine, or decide, then confirm the results. This is the workshop form of the Elicitation Activity Plan (Prepare for Elicitation, 4.1), the Workshops technique (10.50), and Conduct and Confirm Elicitation Results (4.2 and 4.3). Graded by `evaluation/workshop-plan-rubric.md`.

This template is a superset. Its table-of-contents manifest, `templates/workshop-plan.toc.json`, marks which sections are core, standard, or extended and when each applies.

## Document Control

| Field | Value |
| --- | --- |
| Initiative | Supplier invoice approval |
| Workshop ID | WS-02 |
| Date and duration | 2026-06-16, 3 hours |
| Location or channel | Leeds office, room 4, with video link |
| Facilitator | Omar Haddad |
| Status | Held and confirmed |

## Scope

State the purpose, the desired outcomes, and what the workshop will not try to settle, so success can be judged against them.

| Desired outcome | Output |
| --- | --- |
| Agreed approval routing rules by cost centre and amount | Rule table BR-016 to BR-020 |
| Agreed priority for release 1 requirements | MoSCoW list signed by the product owner |

Not in scope: the supplier portal; EU rules.

## Inputs

List the pre-work and materials the session uses.

Example: current-state process model PM-002; draft FRD 0.9; cost centre list from Finance.

## Roles

Select participants from the stakeholder register to cover the knowledge and decision authority the outcomes need.

| Role | Name | Responsibility |
| --- | --- | --- |
| Sponsor | Finance Director (first 20 minutes) | Opens and confirms the decision rights |
| Facilitator | Omar Haddad | Guides the group, neutral on content |
| Scribe | Leah Brown | Records decisions, actions, and parked items |
| Timekeeper | Tom Reyes | Keeps the agenda to time |
| Participants | Priya Shah (product owner, decides priority); AP manager; three budget holders | Contribute knowledge; the product owner decides |

## Preparation

Send the agenda and pre-read in advance, confirm logistics, and prepare materials.

| Item | Owner | Sent or ready |
| --- | --- | --- |
| Agenda and pre-read (PM-002, draft rules) | Omar Haddad | 2026-06-12 |
| Printed rule cards for sorting | Leah Brown | 2026-06-15 |

## Agenda

Each item has a timebox, a technique, and an intended output.

| Time | Item | Technique | Intended output |
| --- | --- | --- | --- |
| 09:00 to 09:15 | Purpose, outcomes, ground rules | Opening | Shared goal |
| 09:15 to 09:45 | Walk the current process | Process model review | Common baseline |
| 09:45 to 10:45 | Draft routing rules | Business rules analysis, card sort | Candidate rules |
| 11:00 to 11:40 | Prioritise release 1 requirements | MoSCoW | Ranked list |
| 11:40 to 12:00 | Recap decisions, actions, parked items | Review | Agreed next steps |

## Ground rules

Agree a short set of rules at the start and keep a visible parking lot.

Example: one conversation at a time; the product owner decides priority after discussion; tangents go to the parking lot.

## Decisions

Record what the group actually decided, with rationale and owner.

| ID | Decision | Rationale | Owner |
| --- | --- | --- | --- |
| D-021 | Invoices of 5,000 pounds or more also need the department head | Matches delegated authority policy DAP-02 | Finance Director |

## Actions

Each action has one owner and a due date.

| ID | Action | Owner | Due |
| --- | --- | --- | --- |
| ACT-041 | Confirm amount bands with each department head | Omar Haddad | 2026-06-23 |

## Parking lot, assumptions, and risks

Park items that would derail the agenda, each with an owner and a next step.

| ID | Item | Type | Owner | Next step |
| --- | --- | --- | --- | --- |
| P-011 | Should delegates have a value limit? | Open question | Priya Shah | Raise as DEC-012 |

## What was not covered

State plainly what the agenda planned but the session did not reach or settle.

Example: rules for credit notes were not reached; carried to WS-03.

## Confirmation

Distribute the notes and confirm decisions and actions with participants before they are used.

| Sent | Confirmed by | Corrections |
| --- | --- | --- |
| 2026-06-16, 16:00 | All participants by 2026-06-18 | D-021 wording: "or more" added |

## Assumptions

What the document takes as true, each with the effect if it proves wrong.

| ID | Assumption | Effect if wrong |
| --- | --- | --- |
| A-161 | Budget holders present speak for their departments | Bands may need changing after ACT-041 |

## Risks

Risks to this work, each with a response and an owner.

| Risk | Response | Owner |
| --- | --- | --- |
| Senior voices dominate the card sort | Silent sorting first, then discussion | Omar Haddad |

## Remote facilitation

For hybrid or remote sessions, state the tools and how remote participants take part equally.

| Item | Plan |
| --- | --- |
| Card sort | Shared online board mirrored on screen |

## Decision method

For contested decisions, state the method agreed in advance.

| Decision | Method | Fallback |
| --- | --- | --- |
| Release 1 priority | Product owner decides after discussion | Sponsor decides |

## Outputs

Confirmed decisions, actions, and parked items with owners, and the work products the workshop fed, such as the rule table and the ranked requirements.

## Review criteria

- Desired outcomes and purpose were stated up front.
- Participants covered the knowledge and decision authority needed.
- Pre-work, materials, and the agenda were prepared and shared in advance.
- Each agenda item had a timebox, a technique, and an intended output.
- Ground rules were agreed and a parking lot was used.
- Decisions, actions, and parked items were captured with owners.
- Results were confirmed with participants afterward.
- The record shows what was actually decided, and what was not covered.

## Practice anchor

Prepare for Elicitation (4.1); Conduct Elicitation (4.2); Confirm Elicitation Results (4.3); Workshops (10.50). Owned by the elicitation skill.

## House style

Write the plan and the notes with the natural-prose-editor pass and no em dashes. See `docs/methodology/editorial-style.md`.
