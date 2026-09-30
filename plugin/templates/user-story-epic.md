---
type: deliverable
domain: product
status: draft
version: 2.0.0
---

# Epic and User Stories

## Purpose

Express a need from the user's perspective as an epic and its stories, sliced so a team can deliver value in small increments. Stories follow the INVEST qualities and carry acceptance criteria someone other than the author can verify. This is the working form of BABOK User Stories (10.48) with Acceptance and Evaluation Criteria (10.1). Graded by `evaluation/user-story-epic-rubric.md`.

This template is a superset. Its table-of-contents manifest, `templates/user-story-epic.toc.json`, marks which sections are core, standard, or extended and when each applies.

## Document Control

| Field | Value |
| --- | --- |
| Product or area | Invoice exceptions |
| Product owner | Priya Shah |
| Version | 1.1.0 |
| Status | Ready for refinement |
| Last updated | 2026-06-09 |

## Scope

State which epic this document covers and where its boundary sits with neighbouring epics, so stories are not written twice or not at all.

## Inputs

List what the stories come from: the product vision and roadmap, business objectives, confirmed elicitation results, process models, business rules, and research findings.

## Epic

State the outcome the epic serves as a measurable change, and draw its boundary so neighbouring epics do not overlap it.

| Field | Content |
| --- | --- |
| Epic ID | EPIC-004 |
| Title | Resolve invoice exceptions without email |
| Outcome it serves | Cut average exception resolution time from 6 days to 2 days by Q3 (OBJ-1) |
| In scope | Showing why a match failed; routing the exception; recording its resolution |
| Out of scope | Supplier dispute portal |
| Success measure | Median resolution time, measured weekly from the workflow tool |

## Stories

Write each story as: As a [role], I want [capability], so that [benefit]. Give each one acceptance criteria in Given, When, Then form covering the main path, key alternate paths, and at least one failure or edge case.

### Story STORY-021

| Field | Content |
| --- | --- |
| ID | STORY-021 |
| Story | As an AP clerk, I want to see why an invoice failed three-way match, so that I can route it to the right person without investigating |
| Priority (MoSCoW) | Must |
| Estimate | 3 points |
| Traces to | EPIC-004; BR-12 (match tolerance rule) |
| Dependencies | None |

Acceptance criteria:
- Given an invoice fails matching, when I open it, then the failed rule and the mismatched values (PO, receipt, invoice) are shown.
- Given more than one rule fails, when I open the invoice, then every failing rule is listed.
- Given the receipt is missing, when I open the invoice, then the reason reads "No goods receipt" and names the PO.

Repeat the story block for each story in the epic.

## Story map

Arrange the stories under the steps of the user's journey, so gaps in the flow and the smallest valuable release are visible.

| Journey step | Release 1 | Later |
| --- | --- | --- |
| See the exception | STORY-021 | STORY-025 (bulk view) |
| Route it | STORY-022 | STORY-026 (auto-route by rule) |

## Story splitting patterns

When a story is too big for one iteration, split it vertically so each slice still delivers observable value:
- by workflow step;
- by business rule variation (simple rule first, exceptions later);
- happy path first, then error handling;
- by data type or variation;
- by interface or platform, one first.

## INVEST checklist

- **Independent:** can be built and delivered on its own.
- **Negotiable:** describes the need, not a fixed implementation.
- **Valuable:** delivers value to a user or the business.
- **Estimable:** the team can size it.
- **Small:** fits in one iteration.
- **Testable:** has acceptance criteria someone else can verify.

## Non-functional and business rule links

Link each story to the non-functional requirements and business rules it must respect, rather than restating them in every story.

| Story | Non-functional requirements | Business rules |
| --- | --- | --- |
| STORY-021 | NFR-002 (page load) | BR-12 (match tolerance 2 percent) |

## Definition of Ready and Definition of Done

Before a story enters an iteration it meets the Definition of Ready, and before it is accepted it meets the Definition of Done. Reference the team's definitions (`checklists/definition-of-ready.md`, `checklists/definition-of-done.md`) rather than restating them per story.

## Assumptions

Record what the stories take as true, each with the effect if wrong.

| ID | Assumption | Effect if wrong |
| --- | --- | --- |
| A-011 | Match results are available from the ERP within 1 minute of receipt | STORY-021 shows stale reasons; needs a refresh action |

## Risks

Risks to delivering the epic's outcome: dependencies, unknowns, and stories that may not be estimable yet.

| Risk | Response | Owner |
| --- | --- | --- |
| Rule logic for partial receipts is unclear | Spike STORY-S01 before estimating STORY-023 | Priya Shah |

## Spikes

For uncertain work, record time-boxed investigation stories and the question each answers.

| ID | Question | Time box | Outcome |
| --- | --- | --- | --- |
| STORY-S01 | How does the ERP flag partial receipts? | 2 days | Pending |

## Release slicing

For adaptive delivery, show which stories form each release and the outcome each release moves.

| Release | Stories | Outcome moved |
| --- | --- | --- |
| R1 | STORY-021, STORY-022 | Exceptions reach the right person on day 1 |

## Outputs

A refined epic and set of stories, each ready to estimate and plan, traced to the outcome, to business rules and non-functional requirements, and to tests through their acceptance criteria.

## Review criteria

- The epic states the outcome it serves, its boundary, and how success is measured.
- Every story names a real user role, a capability, and a benefit.
- Every story meets INVEST, and large stories are split vertically.
- Acceptance criteria cover the main path, alternates, and at least one failure case, and can be verified by someone else.
- Stories trace to the epic and to the business rules and non-functional requirements they depend on.
- Priority reflects value and risk.
- Assumptions, dependencies, and spikes are visible.

## BABOK anchor

User Stories (10.48); Acceptance and Evaluation Criteria (10.1); Backlog Management (10.2); the Agile Perspective (11.1). Take direction from the product-manager skill and validate with the quality skill.

## House style

Write the narrative with the natural-prose-editor pass and no em dashes. See `docs/methodology/editorial-style.md`.
