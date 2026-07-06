---
type: deliverable
domain: requirements
status: draft
version: 1.0.0
---

# Functional Requirements Document (FRD)

## Purpose

Specify in detail what the solution must do: the behaviours, business rules, and interactions that deliver the business and stakeholder requirements. The FRD sits below the BRD and PRD and above design. Every functional requirement is atomic, testable, and traceable, per the BABOK quality characteristics (Verify Requirements, 7.2).

## Document Control

| Field | Value |
| --- | --- |
| Initiative |  |
| Business Analyst |  |
| Product Owner |  |
| Version | 1.0.0 |
| Status | Draft |
| Last Updated |  |

## 1. Introduction and scope

State the purpose of this document, the solution or component it covers, and what is in and out of scope. List the actors (human and system) that interact with the solution.

| Actor | Type (human or system) | Role in the solution |
| --- | --- | --- |
|  |  |  |

## 2. Functional requirements

Each requirement describes a behaviour the solution performs. Keep one requirement per row (atomic), state it unambiguously, give it a priority and acceptance criteria, and trace it to its source and forward to a test.

| ID | Functional requirement | Description | Priority (MoSCoW) | Acceptance criteria | Source (need or stakeholder) | Trace (test ID) |
| --- | --- | --- | --- | --- | --- | --- |
| FR-001 |  |  |  |  |  |  |

## 3. Business rules

Capture the rules that govern decisions and behaviour, separately from the requirements that enforce them, so a rule can change without rewriting every requirement.

| ID | Business rule | Type (constraint, computation, inference) | Related requirements |
| --- | --- | --- | --- |
| BR-001 |  |  |  |

## 4. Use cases

Summarise the main use cases, then detail the significant ones using the template below.

| Use case ID | Name | Primary actor | Goal |
| --- | --- | --- | --- |
| UC-001 |  |  |  |

Detailed use case:

| Field | Content |
| --- | --- |
| Use case | UC-001 |
| Primary actor |  |
| Preconditions |  |
| Trigger |  |
| Main success scenario (steps) |  |
| Alternate flows |  |
| Exceptions |  |
| Postconditions |  |

## 5. Data requirements

Describe the key data the solution creates, reads, updates, or deletes: entities, important attributes, and relationships. Reference a data dictionary where one exists.

| Entity | Key attributes | Relationships | Notes |
| --- | --- | --- | --- |
|  |  |  |  |

## 6. Interface requirements

Describe the interfaces the solution needs: user interfaces (at a functional level), system-to-system interfaces, and external interfaces.

| Interface | Type (user, system, external) | Purpose | Data exchanged |
| --- | --- | --- | --- |
|  |  |  |  |

## 7. Assumptions, constraints, and dependencies

List assumptions (flag for confirmation), constraints on the solution, and dependencies on other systems or work.

## Quality gate (BABOK requirement quality)

Every functional requirement is atomic, complete, consistent, concise, feasible, unambiguous, testable, prioritized, and understandable, with acceptance criteria that cover the happy path, alternate flows, and exceptions.

## Review criteria

- Each requirement is atomic, testable, and traced to a source and a test.
- Business rules are separated from the requirements that enforce them.
- Use cases cover main, alternate, and exception flows.
- Terminology is consistent with the glossary.

## BABOK anchor

Functional requirements under the Requirements Classification Schema; Specify and Model Requirements (7.1); Verify Requirements (7.2); Use Cases and Scenarios (10.47); Business Rules Analysis (10.9). Validate with the quality skill.

## House style

Write the narrative with the natural-prose-editor pass and no em dashes. See `docs/methodology/editorial-style.md`.
