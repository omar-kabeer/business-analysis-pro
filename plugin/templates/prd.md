---
type: deliverable
domain: product-management
status: draft
version: 2.0.0
---

# Product Requirements Document (PRD)

> **How to use this template.** Filled rows and "Example" lines illustrate one scenario so the expected depth is clear. Replace them with the facts of the work at hand: never carry example names, figures, or IDs into a real document, and say plainly when a fact is not yet known. Include every other section by default, and leave one out only when the user asks. Include these sections only when their condition applies or the user asks for them: Transition requirements (predictive or hybrid approach); Analytics and experimentation (adaptive approach); Compliance and privacy (regulated work). The full rules are in `templates/prd.toc.json`.

## Purpose

Define what a product or feature must do and why, framed around the customer problem and the outcome it should move, so a team can design, build, and measure it. The PRD leads with problem and outcome, not a feature list. Requirements follow the BABOK classification (business, stakeholder, solution functional and non-functional, transition) and the quality characteristics of Verify Requirements (7.2). Graded by `evaluation/prd-rubric.md`.

This template is a superset. Its table-of-contents manifest, `templates/prd.toc.json`, marks which sections are core, standard, or extended and when each applies.

## Document Control

| Field | Value |
| --- | --- |
| Product or feature | Supplier payment status portal, release 1 |
| Product manager | Maya Okafor |
| Product owner | Priya Shah |
| Engineering lead | Tom Reyes |
| Version | 1.2.0 |
| Status | Approved for build |

## Inputs

List what the PRD is built from, so each claim can be checked: the product vision, discovery research, experiment results, business objectives, and existing requirements.

| ID | Input | Source |
| --- | --- | --- |
| IN-011 | Supplier interviews (12) | Discovery, May 2026 |
| IN-012 | EXP-003 status link test: 31 percent click-through | Experiment log |

## Problem and context

State the customer problem, who has it, and why solving it now matters. Summarise the evidence behind the direction.

Example: suppliers cannot see whether an invoice is approved or when it will be paid, so they phone AP. Status queries are 40 percent of AP calls (2,600 in March to May), and 9 of 12 interviewed suppliers named "no visibility" as their top frustration.

## Target users and jobs

Name the users and their jobs to be done in their words.

| Segment or persona | Job to be done | Current pain |
| --- | --- | --- |
| Small supplier finance contact (PER-002) | When an invoice is outstanding, I want its status and payment date, so I can plan cash without chasing | Calls AP and waits 2 days |

## Goals, non-goals, and success metrics

Name the outcome, not the output. Define a primary metric and supporting signals, and say what this product will not do.

| ID | Goal | Metric | Baseline | Target | By |
| --- | --- | --- | --- | --- | --- |
| G-001 | Suppliers answer status questions themselves | Share of status queries answered by self-service | 0 percent | 60 percent | 2027-06-30 |
| G-002 | AP spends less time on status calls | Status calls per week | 210 | 90 | 2027-06-30 |

Non-goals: supplier invoice submission (owned by the e-invoicing programme); disputes (release 3).

## Scope and release phases

State what is in and out and how the work is phased.

| Release | In scope | Out of scope |
| --- | --- | --- |
| R1 | Status lookup, expected payment date, top 200 suppliers | Login, notifications |
| R2 | All suppliers, payment notices | Disputes |

## Requirements

Each requirement names the user value, has testable acceptance criteria, and traces to a goal.

| ID | Requirement | User value | Priority | Acceptance criteria | Traces to |
| --- | --- | --- | --- | --- | --- |
| PR-001 | A supplier can look up an invoice by invoice number and supplier reference | Knows status without calling | Must | Given a valid pair, status shows within 2 seconds; given an unknown pair, a neutral "not found" shows with no data leak | G-001 |
| PR-002 | The portal shows the expected payment date for approved invoices | Can plan cash | Must | Date equals the next scheduled payment run; shown as a range until accuracy is proven | G-001 |

## User experience and flows

Describe the key flows, states, and edge and error cases. Link to designs. Hand detailed interaction and accessibility work to the ux skill.

| Flow or state | Behaviour | Design link |
| --- | --- | --- |
| Invoice on hold | Shows "On hold: we will contact you" and the AP email | Figma frame 12 |

## Non-functional requirements

Summarise the qualities that matter most here and reference the full specification.

| ID | Quality | Target |
| --- | --- | --- |
| NFR-002 | Response time | 95th percentile under 2 seconds at 150 concurrent users |
| NFR-007 | Accessibility | WCAG 2.2 AA |

Full detail: `nfr-specification` 1.1.0.

## Dependencies

List the systems, teams, data, and decisions this depends on, each with an owner and a date.

| ID | Dependency | Owner | Needed by |
| --- | --- | --- | --- |
| DEP-001 | ERP status API | Tom Reyes | 2026-08-15 |

## Assumptions

Record assumptions, especially the riskiest, and how each will be tested.

| ID | Assumption | Effect if wrong | Test |
| --- | --- | --- | --- |
| A-061 | Payment run dates are reliable enough to publish | Trust drops if dates are wrong | Compare 8 weeks of forecast and actual dates |

## Risks

Risks to the product's value, usability, feasibility, or viability, each with an owner.

| ID | Risk | Impact | Mitigation | Owner |
| --- | --- | --- | --- | --- |
| RSK-011 | Lookup exposes another supplier's data | Severe: data breach | Two-factor match; penetration test before launch | Tom Reyes |

## Rollout and measurement

Describe the launch approach, the instrumentation that measures the success metrics, and the go and no-go criteria.

| Item | Plan |
| --- | --- |
| Launch | Top 200 suppliers by call volume, behind a feature flag |
| Instrumentation | Lookup events and call-log tagging by reason |
| Go criteria | Penetration test passed; date accuracy within 1 day for 90 percent of invoices over 4 weeks |

## Open questions

Every question the team cannot yet answer has an owner and a date, so it is resolved before it blocks the build.

| ID | Question | Owner | Needed by |
| --- | --- | --- | --- |
| OQ-001 | Do large suppliers want an API instead of a portal? | Maya Okafor | 2026-07-31 |

## Transition requirements

For releases that replace a process or system, state what is needed to move from the current state: data migration, training, parallel running, and support.

| ID | Transition requirement | Owner |
| --- | --- | --- |
| TR-001 | AP call scripts point suppliers to the portal from launch day | AP manager |

## Analytics and experimentation

For outcome-driven products, list the experiments planned to test the riskiest assumptions and the decision each informs.

| ID | Hypothesis | Experiment | Decision |
| --- | --- | --- | --- |
| EXP-005 | Suppliers use a status link in the remittance email | A/B test link placement | Keep or drop the email link |

## Compliance and privacy

For regulated or personal data, record the obligations and how the product meets them.

| Obligation | How met | Evidence |
| --- | --- | --- |
| UK GDPR data minimisation | Only invoice status and date shown; no bank details | DPIA-014 |

## Outputs

An approved PRD that engineering, design, and testing can build and verify against, with goals the launch will measure and open questions owned.

## Quality gate

Each requirement is atomic, complete, consistent, concise, feasible, unambiguous, testable, prioritised, and understandable. For a PRD, also: the problem and outcome metric are named, value is clear, edge cases and non-goals are stated, and the riskiest assumptions have a test.

## Review criteria

- The problem is clear and backed by evidence.
- Target users and their jobs are named.
- Goals are outcomes with a primary metric, baseline, and target; non-goals are explicit.
- Scope and release phasing are clear.
- Requirements are atomic and testable, with acceptance criteria and a trace to a goal.
- Key flows and edge and error cases are covered.
- Relevant non-functional requirements are stated, with detail referenced.
- Dependencies, assumptions, and risks are explicit and owned.
- Launch, instrumentation, and go and no-go criteria are defined.

## BABOK anchor

Requirements Classification Schema (2.3); Specify and Model Requirements (7.1); Verify Requirements (7.2); Define Requirements Architecture (7.4); Acceptance and Evaluation Criteria (10.1). Product direction from the product-manager skill; backlog from the product-owner skill.

## House style

Write the narrative with the natural-prose-editor pass and no em dashes. See `docs/methodology/editorial-style.md`.
