# Conformance checks: scrum-guide-2020

Source id: `scrum-guide-2020`
Standard: The Scrum Guide, The Definitive Guide to Scrum: The Rules of the Game.
Edition held: November 2020.
Publisher: Ken Schwaber and Jeff Sutherland.
Authority: normative.
Identity: confirmed from the title page on 2026-08-07. The Scrum Guide, November 2020.
Licence: Creative Commons Attribution ShareAlike 4.0. Redistributable with attribution.
Modality note: the Scrum Guide defines the Scrum framework and states it is immutable: implementing only parts is "not Scrum". It uses "must" for several rules. We treat its definitional composition rules and "must" statements as blocking (conformance to Scrum), and softer practices as advisory. It is a framework definition, not an ISO-style "shall" standard.
Artefact types constrained: `sprint-artefact`, `product-backlog`.
Owning skills: `product-owner` (primary), `agile-coach`.
Locator style: Scrum Guide 2020, `<section>`.

## How to read this file

Three layers, kept separate: Source (S) with locator, labelled Inference (I), and the Check (C), answerable yes or no from the finished artefact.

## Checks: product-backlog

Applies to a Product Backlog.

| Check id | Question (yes = pass) | Severity | Locator | How the reviewer confirms |
| --- | --- | --- | --- | --- |
| SCRUM-PB-01 | Is the Product Backlog an ordered list of items describing what is needed to improve the product? | blocking | Product Backlog | Confirm items exist and are ordered. An unordered dump fails. |
| SCRUM-PB-02 | Does the Product Backlog contain a Product Goal that its items emerge to fulfil? | blocking | Commitment: Product Goal | Look for a stated Product Goal. A backlog with no goal to plan against fails. |
| SCRUM-PB-03 | Are items intended for an upcoming Sprint refined (broken down, with description, order, and size) so they are ready for selection? | advisory | Product Backlog | Check near-term items are sized and described. Advisory: refinement is ongoing. |
| SCRUM-PB-04 | Is the Product Backlog transparent, visible, and understood? | advisory | Product Owner accountabilities | Judge accessibility and shared understanding. Advisory. |

## Checks: sprint-artefact

Applies to the per-Sprint artefacts: the Sprint Backlog and the Increment (with its Definition of Done).

| Check id | Question (yes = pass) | Severity | Locator | How the reviewer confirms |
| --- | --- | --- | --- | --- |
| SCRUM-SA-01 | Does the Sprint Backlog comprise a Sprint Goal (why), the selected Product Backlog items (what), and an actionable plan to deliver the Increment (how)? | blocking | Sprint Backlog | Confirm all three parts are present. A task list with no goal or no selected items fails. |
| SCRUM-SA-02 | Is there a single Sprint Goal for the Sprint, finalized by the end of Sprint Planning? | blocking | Commitment: Sprint Goal | Confirm one Sprint Goal. Multiple or absent Sprint Goals fail. |
| SCRUM-SA-03 | Does a Definition of Done exist as a formal description of the quality state the Increment must meet? | blocking | Commitment: Definition of Done | Look for a stated Definition of Done. Its absence fails. |
| SCRUM-SA-04 | Does the Increment consist only of work that meets the Definition of Done? | blocking | Increment, Definition of Done | Confirm nothing is counted in the Increment that fails the Definition of Done. |
| SCRUM-SA-05 | Is the Increment usable and additive to prior Increments? | advisory | Increment | Judge usability and integration. Advisory. |
| SCRUM-SA-06 | Is the Sprint Backlog updated through the Sprint with enough detail to inspect progress daily? | advisory | Sprint Backlog | Look for a maintained, current plan. Advisory process check. |

### Provenance, product-backlog

- PB-01. S: The Product Backlog is an emergent, ordered list of what is needed to improve the product; it is the single source of work for the Scrum Team (Product Backlog). I: We gate on ordered items.
- PB-02. S: Each artifact contains a commitment; for the Product Backlog it is the Product Goal; the Product Goal is in the Product Backlog and the rest emerges to fulfil it (Commitment: Product Goal). I: We gate on a Product Goal being present.
- PB-03. S: Items that can be Done within one Sprint are ready for selection; refinement breaks items down and adds description, order, and size (Product Backlog). I: Advisory, refinement is ongoing.
- PB-04. S: The Product Owner ensures the Product Backlog is transparent, visible, and understood (Product Owner accountabilities). I: Advisory.

### Provenance, sprint-artefact

- SA-01. S: The Sprint Backlog is composed of the Sprint Goal (why), the set of Product Backlog items selected for the Sprint (what), and an actionable plan for delivering the Increment (how) (Sprint Backlog). I: We gate on all three parts.
- SA-02. S: The Sprint Goal is the single objective for the Sprint and must be finalized prior to the end of Sprint Planning (Commitment: Sprint Goal, Sprint Planning). I: none.
- SA-03. S: The Definition of Done is a formal description of the state of the Increment when it meets the quality measures required; the Scrum Team must create one if not an organizational standard (Commitment: Definition of Done). I: We gate on a Definition of Done existing.
- SA-04. S: Work cannot be considered part of an Increment unless it meets the Definition of Done; an item that does not meet it returns to the Product Backlog (Increment, Definition of Done). I: none.
- SA-05. S: In order to provide value the Increment must be usable, and each Increment is additive to all prior Increments (Increment). I: Advisory judgement.
- SA-06. S: The Sprint Backlog is updated throughout the Sprint and should have enough detail to inspect progress in the Daily Scrum (Sprint Backlog). I: Advisory process check.

## Not-testable obligations

| Obligation (paraphrase) | Locator | Why not testable on a finished artefact |
| --- | --- | --- |
| The Scrum events (Sprint, Sprint Planning, Daily Scrum, Sprint Review, Sprint Retrospective) and the Scrum Team accountabilities. | Scrum Events, Scrum Team | Constrain how the team works over time, not the content of a backlog or Sprint artefact. |
| Only the Product Owner has the authority to cancel a Sprint. | The Sprint | A governance rule about an action, not a property of an artefact. |
| The Developers are required to conform to the Definition of Done. | Definition of Done | A team conduct obligation; the artefact check (SA-04) tests the Increment's content instead. |

## Coverage

- `product-backlog`: 2 blocking checks (PB-01, PB-02), 2 advisory (PB-03, PB-04).
- `sprint-artefact`: 4 blocking checks (SA-01 to SA-04), 2 advisory (SA-05, SA-06).

Both constrained artefact types carry blocking checks (forward cross-check satisfied). Every check maps to a declared artefact type, no orphans. No other normative source constrains these two types, so no conflict.
