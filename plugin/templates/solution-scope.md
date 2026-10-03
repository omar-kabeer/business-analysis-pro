---
type: deliverable
domain: strategy
status: draft
version: 2.0.0
---

# Solution Scope

> **How to use this template.** Filled rows and "Example" lines illustrate one scenario so the expected depth is clear. Replace them with the facts of the work at hand: never carry example names, figures, or IDs into a real document, and say plainly when a fact is not yet known. Include every other section by default, and leave one out only when the user asks. Include these sections only when their condition applies or the user asks for them: Release and transition boundaries (adaptive or hybrid approach); Context diagram (formal governance, or the Information Technology perspective). The full rules are in `templates/solution-scope.toc.json`.

## Purpose

Define the boundary of the solution: the capabilities the change will deliver, what it will not, and how the in-scope solution enables the future state's goals. This is the working form of the Solution Scope output of Define Change Strategy. A scope with a stated out-of-scope list prevents most scope disputes before they start. Graded by `evaluation/solution-scope-rubric.md`.

This template is a superset. Its table-of-contents manifest, `templates/solution-scope.toc.json`, marks which sections are core, standard, or extended and when each applies.

## Document Control

| Field | Value |
| --- | --- |
| Initiative | Supplier invoice approval |
| Sponsor | Finance Director |
| Business analyst | Ana Costa |
| Version | 1.2.0 |
| Status | Baselined |
| Last updated | 2026-06-10 |

## Document scope

Say which change this scope belongs to and which release or phase it defines, if the change is delivered in stages.

Example: release 1 of the supplier invoice approval change, covering the UK entity.

## Inputs

List what the scope is built from: the future state description, the business objectives, the change strategy, the gap analysis, and any constraints (budget, time, regulation, technology).

## In scope

Describe the capabilities the change will deliver. Use the views that fit the change, and give each element an ID so requirements can trace to it.

| ID | Scope element | View | Description | Objective served |
| --- | --- | --- | --- | --- |
| SC-001 | Invoice approval routing | Capability | Route each invoice to the right approver by cost centre and amount | OBJ-1 |
| SC-002 | Three-way match exceptions | Process | Show why a match failed and route the exception | OBJ-1 |

## Out of scope

State what is deliberately not in the solution, and why, so the boundary is not one-sided.

| ID | Excluded element | Reason | Where it is handled |
| --- | --- | --- | --- |
| OS-001 | Supplier invoice submission portal | Owned by the e-invoicing programme | Separate initiative |

## Scope views

Where a single table is not enough, describe the scope through further views: processes, data, locations, organisational units, systems, or business rules. Use the view that makes the boundary unambiguous for the audience.

| View | In scope | Out of scope |
| --- | --- | --- |
| Locations | UK entity | EU entities (release 2) |
| Systems | Workflow tool, ERP invoice module | Payroll, expenses |

## How the scope enables the future state

Explain, for each objective, which scope elements move it and how. An element that serves no objective is scope creep or a missing objective.

| Objective | Scope elements | How they enable it |
| --- | --- | --- |
| OBJ-1 Cut approval time from 14 to 5 days | SC-001, SC-002 | Removes email routing and manual exception chasing |

## Alignment with the change strategy

State how the scope fits the chosen change strategy and its transition states, and confirm it respects the constraints the strategy set.

## Release and transition boundaries

For adaptive or staged delivery, show which scope elements land in which release or transition state, and the smallest slice that delivers value.

| Release | Scope elements | Value delivered |
| --- | --- | --- |
| R1 (MVP) | SC-001 | Routing replaces email approvals |
| R2 | SC-002 | Exceptions resolved in the tool |

## Assumptions and constraints

Record what the scope takes as true and the limits it works within, each with the impact if it changes.

| ID | Assumption or constraint | Impact if it changes | Owner |
| --- | --- | --- | --- |
| A-001 | ERP API supports real-time status posting | SC-002 moves to R3 | Tom Reyes |

## Risks

Risks to the scope: ambiguity, dependencies on other programmes, and elements likely to grow.

| Risk | Response | Owner |
| --- | --- | --- |
| E-invoicing programme slips and suppliers expect this change to fill the gap | Communicate OS-001 to suppliers at kickoff | Ana Costa |

## Scope change control

State how the scope may change: who can request a change, who decides, and how it is recorded. The scope is expected to evolve as discovery continues; control makes that evolution visible.

## Context diagram

For formally governed or integration-heavy work, attach or link a context diagram showing the solution boundary and the external actors and systems it exchanges data with.

## Outputs

A baselined solution scope that requirements, the release plan, and the business case trace to.

## Review criteria

- The in-scope boundary is defined through capabilities or other suitable views, with IDs.
- Out-of-scope elements are stated with reasons.
- Every scope element traces to a future-state objective.
- The scope is consistent with the change strategy and its constraints.
- The level of detail lets stakeholders act without over-specifying design.
- Nothing is ambiguous about what is in and what is out.
- The scope is controlled and expected to evolve.

## Practice anchor

Define Change Strategy; Define Future State; Scope Modelling. Owned by the strategy skill.

## House style

Write any narrative with the natural-prose-editor pass and no em dashes. See `docs/methodology/editorial-style.md`.
