---
type: deliverable
domain: architecture
status: draft
version: 2.0.0
---

# Requirements Architecture

> **How to use this template.** Filled rows and "Example" lines illustrate one scenario so the expected depth is clear. Replace them with the facts of the work at hand: never carry example names, figures, or IDs into a real document, and say plainly when a fact is not yet known. Include every other section by default, and leave one out only when the user asks. Include these sections only when their condition applies or the user asks for them: Architecture framework alignment (formal governance, or the Business Architecture perspective); Requirements model inventory (formal governance, or high risk). The full rules are in `templates/requirements-architecture.toc.json`.

## Purpose

Structure the requirements of the initiative and the relationships among them, so the set can be understood and assessed as a whole: complete, consistent, and traceable to needs, designs, and releases. This is the working form of the BABOK Define Requirements Architecture task (7.4) and its output, the Requirements Architecture. Graded by `evaluation/requirements-architecture-rubric.md`.

This template is a superset. Its table-of-contents manifest, `templates/requirements-architecture.toc.json`, marks which sections are core, standard, or extended and when each applies.

## Document Control

| Field | Value |
| --- | --- |
| Initiative | Supplier invoice approval |
| Architect | Tom Reyes |
| Business analyst | Omar Haddad |
| Version | 1.0.0 |
| Status | Baselined |
| Last updated | 2026-06-22 |

## Scope

State which requirements the architecture covers and which it leaves to other architectures.

Example: all business, stakeholder, solution, and transition requirements for release 1 of invoice approval. The supplier portal has its own architecture.

## Inputs

List what the architecture is built from: the requirements in any state, the information management approach, the solution scope, and any architecture frameworks the organisation uses.

Example: BRD 1.0.0; FRD 1.0.0; NFR specification 1.1.0; solution scope 2.0.0; information management approach IMA-01.

## Structure

Describe how the requirements are organised, for example by level, by capability, or by viewpoint, so each requirement has one clear home.

| Level | Contains | Example IDs |
| --- | --- | --- |
| Business | What the organisation needs | BRQ-001 |
| Stakeholder | What each group needs | SR-003 |
| Solution: functional | What the solution does | FR-021 to FR-024 |
| Solution: non-functional | How well it does it | NFR-002, NFR-004 |
| Transition | What moving to the future state needs | TR-001 |

## Relationships

Record how requirements relate, using a small set of relationship types defined here.

| Requirement | Related requirement | Relationship | Meaning |
| --- | --- | --- | --- |
| FR-021 | SR-003 | Satisfies | FR-021 meets the stakeholder need |
| FR-023 | CR-002 | Implements | FR-023 enforces the control |
| FR-024 | NFR-002 | Constrained by | Mobile approval must still meet page load |

Relationship types: derives, satisfies, implements, depends on, constrained by, conflicts with.

## Viewpoints

List the viewpoints represented and the models used for each, so every stakeholder can see the requirements in the form they need.

| Viewpoint | For | Models |
| --- | --- | --- |
| Process | AP team | Process model PM-002 |
| Behaviour | Developers, testers | Use cases UC-004, UC-005 |
| Data | ERP team | Data dictionary DD-01 |

## Completeness check

Use the structure to confirm nothing is missing: every business requirement has stakeholder requirements, every stakeholder requirement is satisfied, and every capability has functional, data, and quality coverage.

| Check | Result | Gap and action |
| --- | --- | --- |
| Every SR satisfied by at least one FR or NFR | 11 of 12 | SR-009 (audit reporting) has no FR: add FR-031 by 2026-06-29 |

## Consistency check

Check the relationships and viewpoints against each other for conflicts.

| Conflict | Requirements | Resolution | Decided by |
| --- | --- | --- | --- |
| Mobile approval page weight against load target | FR-024, NFR-002 | Simplified mobile layout | DEC-011, product owner |

## Context

Record the contextual information needed to read the structure: the glossary, the domain boundaries, and the information management approach.

Example: terms follow the project glossary G-01; attributes and statuses follow IMA-01.

## Traceability

Show how the structure supports tracing to needs, designs, releases, and tests.

| Requirement | Traces up to | Design | Release | Test |
| --- | --- | --- | --- | --- |
| FR-021 | SR-003, BRQ-001, OBJ-001 | Workflow rule set WR-02 | R1 | TC-011 |

## Assumptions

What the document takes as true, each with the effect if it proves wrong.

| ID | Assumption | Effect if wrong |
| --- | --- | --- |
| A-111 | The ERP workflow module models approval rules as data, not code | Rule changes need a release; relationships to BR- rules change |

## Risks

Risks to this work, each with a response and an owner.

| Risk | Response | Owner |
| --- | --- | --- |
| Requirements added late bypass the architecture | Change process requires a home level and relationships for every new requirement | Omar Haddad |

## Architecture framework alignment

For enterprise or regulated initiatives, map the viewpoints to the organisation's architecture framework.

| Framework view | Requirements viewpoint |
| --- | --- |
| TOGAF business architecture | Process viewpoint |

## Requirements model inventory

For large initiatives, list every model, its owner, and its version, so the architecture can be kept current.

| Model | Owner | Version |
| --- | --- | --- |
| PM-002 invoice approval process | Omar Haddad | 1.2 |

## Outputs

A requirements architecture that shows where every requirement belongs, how requirements relate, and where gaps and conflicts were found and resolved, ready to support traceability and change assessment.

## Review criteria

- Requirements are organised into a coherent structure.
- Relationships are defined with stated types and are correct.
- The relevant viewpoints are represented with suitable models.
- The architecture is used to check completeness, and gaps are actioned.
- Relationships and viewpoints are consistent, and conflicts are resolved.
- The context needed to read the structure is recorded.
- The structure supports tracing to needs, designs, releases, and tests.

## BABOK anchor

Define Requirements Architecture (7.4); Trace Requirements (5.1); Specify and Model Requirements (7.1); Functional Decomposition (10.22). Owned by the requirements skill.

## House style

Write the narrative with the natural-prose-editor pass and no em dashes. See `docs/methodology/editorial-style.md`.
