# Requirements Architecture

## Describe how the requirements are organised, for example by level, by capability, or by viewpoint, so each requirement has one clear home.

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
