---
type: deliverable
domain: product-ownership
status: draft
version: 1.0.0
---

# Epic and User Stories

## Purpose

Express need from the user's perspective as an epic and its stories, sized so a team can deliver value incrementally. Stories follow the INVEST qualities and carry testable acceptance criteria. This is the BABOK User Stories technique (10.48) with Acceptance and Evaluation Criteria (10.1).

## Document Control

| Field | Value |
| --- | --- |
| Product or area |  |
| Product Owner |  |
| Version | 1.0.0 |
| Status | Draft |
| Last Updated |  |

## Epic

| Field | Content |
| --- | --- |
| Epic ID | EPIC-001 |
| Title |  |
| Outcome it serves (goal or metric) |  |
| In scope |  |
| Out of scope |  |
| Success measure |  |

## Stories

Write each story as: As a [role], I want [capability], so that [benefit]. Add acceptance criteria in Given, When, Then form covering the happy path, alternate paths, and edge cases.

### Story STORY-001

| Field | Content |
| --- | --- |
| ID | STORY-001 |
| Story | As a [role], I want [capability], so that [benefit] |
| Priority (MoSCoW) |  |
| Estimate |  |
| Traces to | EPIC-001 |

Acceptance criteria:

- Given [context], when [action], then [outcome].
- Given [context], when [action], then [outcome].
- Given [edge case], when [action], then [outcome].

(Repeat the story block for each story in the epic.)

## Story splitting patterns

When a story is too big for one sprint, split it vertically so each slice still delivers observable value:

- by workflow step,
- by business rule variation (simple rule first, exceptions later),
- happy path first, then error handling,
- by data type or variation,
- by interface or platform (one first).

## INVEST checklist

- Independent: can be built and delivered on its own.
- Negotiable: describes the need, not a fixed contract of implementation.
- Valuable: delivers value to a user or the business.
- Estimable: the team can size it.
- Small: fits comfortably in a sprint.
- Testable: has clear acceptance criteria.

## Definition of Ready and Definition of Done

Before a story enters a sprint it should meet the Definition of Ready, and before it is accepted it should meet the Definition of Done. Reference the team's `release-readiness-checklist` and definitions; do not restate them per story.

## Review criteria

- Each story is INVEST-compliant and traces to the epic and its outcome.
- Acceptance criteria cover happy path, alternates, and edge cases and are independently verifiable.
- Large stories are split vertically so each slice delivers value.
- Priority reflects outcome value and risk, not request order.

## BABOK anchor

User Stories (10.48); Acceptance and Evaluation Criteria (10.1); stakeholder and solution requirements under the Requirements Classification Schema. Take direction from the product-manager skill; validate with the quality skill.

## House style

Write the narrative with the natural-prose-editor pass and no em dashes. See `docs/methodology/editorial-style.md`.
