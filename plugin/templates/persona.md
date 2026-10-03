---
type: deliverable
domain: ux
status: draft
version: 2.0.0
---

# Persona

> **How to use this template.** Filled rows and "Example" lines illustrate one scenario so the expected depth is clear. Replace them with the facts of the work at hand: never carry example names, figures, or IDs into a real document, and say plainly when a fact is not yet known. Include every other section by default, and leave one out only when the user asks. Include these sections only when their condition applies or the user asks for them: Persona set overview (standard or formal governance); Accessibility needs (written for customers, or regulated work). The full rules are in `templates/persona.toc.json`.

## Purpose

Describe an evidence-based archetype of a user segment so the team designs for a real person, not an average. Base it on research and label anything assumed. Based on Stakeholder List, Map, or Personas and the UX artefacts reference. Graded by `evaluation/personas-rubric.md`.

This template is a superset. Its table-of-contents manifest, `templates/persona.toc.json`, marks which sections are core, standard, or extended and when each applies.

## Document Control

| Field | Value |
| --- | --- |
| Persona ID and name | PER-002, Dana, the solo finance contact |
| Segment represented | Suppliers with under 50 staff and one person handling finance |
| Owner | Leah Brown, UX lead |
| Version | 1.1.0 |
| Status | Validated |

## Scope

State which segment the persona represents, what share of users it covers, and which segments other personas cover, and how this persona differs from them.

Example: covers about 70 percent of our 1,800 active suppliers. Large suppliers with AP teams are PER-003, who want bulk data rather than a lookup page.

## Inputs

List the research the persona rests on.

| ID | Source | Date |
| --- | --- | --- |
| RES-001 | 12 supplier interviews (9 matched this segment) | May 2026 |
| RES-002 | AP call log, calls by supplier size | March to May 2026 |

## Profile

Give each attribute its evidence, so readers can tell research from assumption.

| Field | Value | Evidence |
| --- | --- | --- |
| Role | Office manager who also does the books | RES-001 (7 of 9) |
| Context | Works from a laptop at the office and a phone on site visits; checks finance twice a week | RES-001 |
| Goals | Know when money will arrive so payroll is safe | RES-001 (9 of 9) |
| Tasks | Sends invoices, chases payments, reconciles the bank | RES-001 |
| Frustrations | No status after sending; phone callbacks take 2 days | RES-001; RES-002 |
| Expertise | Comfortable with online banking; no accounting qualification | RES-001 |

## Behaviours and attitudes

Describe how this persona behaves and what shapes their decisions, drawn from research.

Example: Dana would rather check a website at 7 in the morning than phone during the day. Trust matters more than speed: a wrong date is worse than no date (RES-001, 6 of 9).

## Scenarios of use

Show the persona in the situations that matter for design.

| Scenario | What Dana needs |
| --- | --- |
| Payroll is due Friday; a large invoice is 40 days old | Status and expected date in under a minute, on a phone |

## Design implications

State what the persona means for design and priority, so it guides decisions.

| Implication | Applies to |
| --- | --- |
| No login: Dana will not manage another account | SOL-001 |
| Show a date range until dates are proven accurate | PR-002 |

## Assumptions

Label what is assumed rather than researched, with how it will be tested.

| ID | Assumption | How to test |
| --- | --- | --- |
| A-101 | Dana uses a phone more than a laptop for status checks | Analytics after launch |

## Risks

Risks that the persona misleads design.

| Risk | Response | Owner |
| --- | --- | --- |
| Persona treated as the whole supplier base | Always show segment share with the persona | Leah Brown |

## Persona set overview

When several personas exist, show how they cover the user population and how they differ.

| Persona | Segment | Share | Key difference |
| --- | --- | --- | --- |
| PER-002 Dana | Small suppliers | 70 percent | No AP team; phone first |
| PER-003 Raj | Large suppliers | 30 percent | Wants bulk data or an API |

## Accessibility needs

For public or customer-facing products, record the access needs found in research.

| Need | Evidence | Design response |
| --- | --- | --- |
| Uses screen magnification | RES-001 (1 of 9) | Layout works at 200 percent zoom |

## Outputs

A validated persona, with evidence for each attribute and clear design implications, that the team uses to make and defend design and priority choices.

## Review criteria

- Each attribute is grounded in research, and assumptions are labelled.
- Goals and motivations are captured.
- Pains and frustrations are captured.
- Context and behaviour are described.
- The persona set covers the real user population.
- Personas are distinct, not near-duplicates.
- The persona is specific enough to guide design and priority.

## Practice anchor

Stakeholder List, Map, or Personas; Interviews; Observation. Owned by the ux skill; see `skills/ux/references/ux-artifacts.md`.

## House style

Write the narrative with the natural-prose-editor pass and no em dashes. See `docs/methodology/editorial-style.md`.
