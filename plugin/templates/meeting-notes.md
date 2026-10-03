---
type: deliverable
domain: communication
status: draft
version: 2.0.0
---

# Meeting Notes

> **How to use this template.** Filled rows and "Example" lines illustrate one scenario so the expected depth is clear. Replace them with the facts of the work at hand: never carry example names, figures, or IDs into a real document, and say plainly when a fact is not yet known. Include every other section by default, and leave one out only when the user asks. Include these sections only when their condition applies or the user asks for them: Formal minutes (formal governance, or regulated work); Elicitation results (predictive, adaptive or hybrid approach, or standard or formal governance). The full rules are in `templates/meeting-notes.toc.json`.

## Purpose

Capture what a meeting decided and who owns what next, so decisions are not lost and actions are tracked. Circulate promptly while memory is fresh and confirm with participants. Supports Confirm Elicitation Results and Communicate Business Analysis Information. Graded by `evaluation/meeting-notes-rubric.md`.

This template is a superset. Its table-of-contents manifest, `templates/meeting-notes.toc.json`, marks which sections are core, standard, or extended and when each applies.

## Document Control

| Field | Value |
| --- | --- |
| Meeting | Invoice approval steering, meeting 6 |
| Date and time | 2026-06-02, 10:00 to 11:00 |
| Facilitator | Priya Shah |
| Note taker | Omar Haddad |
| Notes ID | MTG-006 |

## Scope

State the meeting's purpose and the agenda items covered, and note any items that were not reached.

| Agenda item | Covered |
| --- | --- |
| 1. Solution approach decision | Yes |
| 2. Release 1 scope | Yes |
| 3. Training plan | Not reached; moved to meeting 7 |

## Inputs

List the papers and evidence the meeting used, so the basis for decisions can be found.

Example: steering pack SP-06; vendor assessment VA-003; RAID log extract of 30 May.

## Attendees

Record who attended, so the authority of decisions can be judged.

| Name | Role | Present |
| --- | --- | --- |
| Finance Director | Sponsor | Yes |
| Tom Reyes | ERP lead | Yes |
| AP manager | Process owner | Apologies |

## Decisions

State each decision as an outcome, with its rationale and owner. Discussion that ended without a decision is not recorded as one.

| ID | Decision | Rationale | Owner | Logged as |
| --- | --- | --- | --- | --- |
| D-001 | Use the ERP workflow module for approvals | Licensed already; met 11 of 12 criteria | Finance Director | DEC-007 |

## Actions

Each action is specific, has one owner, and has a due date.

| ID | Action | Owner | Due |
| --- | --- | --- | --- |
| ACT-031 | Run the load test at 3 times peak volume | Tom Reyes | 2026-06-20 |

## Open questions and parking lot

Park what could not be resolved, with an owner and a next step.

| ID | Item | Owner | Next step |
| --- | --- | --- | --- |
| Q-006 | Should suppliers see rejected invoices? | Priya Shah | Raise as DEC-010 |

## Discussion summary

Summarise the discussion behind each decision briefly. Attribute a point where it matters who said it, and record what was said rather than an interpretation.

Example: Tom Reyes said the vendor had not tested month-end volumes; the Finance Director asked for a load test before go-live commitment.

## Assumptions

Record assumptions the meeting relied on.

| ID | Assumption | Effect if wrong |
| --- | --- | --- |
| A-081 | The AP manager agrees with D-001 in absence | Revisit at meeting 7 |

## Risks

Risks raised in the meeting, and where they are tracked.

| Risk | Tracked in | Owner |
| --- | --- | --- |
| Vendor API untested at volume | RAID log RSK-002 | Tom Reyes |

## Confirmation and circulation

Record when the notes were sent, who confirmed them, and any corrections.

| Sent | Confirmed by | Corrections |
| --- | --- | --- |
| 2026-06-02, 15:00 | Finance Director, Tom Reyes | ACT-031 date moved from 18 to 20 June |

## Formal minutes

For boards or regulated committees, record quorum, declarations of interest, and approval of the previous minutes.

| Item | Record |
| --- | --- |
| Quorum | Met: 4 of 5 members |
| Declarations of interest | None |

## Elicitation results

When the meeting is an elicitation session, record findings separately from decisions, with their source, for confirmation.

| ID | Finding | Source | Confirmed |
| --- | --- | --- | --- |
| N-011 | Month-end volume is 3 times a normal week | Tom Reyes | Yes |

## Outputs

Confirmed notes whose decisions are logged, whose actions are tracked, and whose open items have owners.

## Review criteria

- The meeting, date, facilitator, note taker, and attendance are recorded.
- Purpose and agenda are stated, and items not reached are noted.
- Each decision is a clear outcome with rationale and owner.
- Each action has one owner and a due date.
- Open items are parked with an owner and next step.
- Statements are attributed where it matters and not interpreted.
- The notes were circulated promptly and confirmed.
- Decisions, actions, and open items are carried into the logs they affect.

## Practice anchor

Confirm Elicitation Results; Communicate Business Analysis Information. Owned by the communication and elicitation skills.

## House style

Write the notes with the natural-prose-editor pass and no em dashes. See `docs/methodology/editorial-style.md`.
