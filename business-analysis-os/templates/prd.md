---
type: deliverable
domain: product-management
status: draft
version: 1.0.0
---

# Product Requirements Document (PRD)

## Purpose

Define what a product or feature must do and why, framed around the customer problem and the outcome it should move, so a team can design, build, and measure it. The PRD leads with problem and outcome, not a feature list. Requirements follow the BABOK classification (business, stakeholder, solution functional and non-functional, transition) and the quality characteristics in the quality gate below.

## Document Control

| Field | Value |
| --- | --- |
| Product or feature |  |
| Product Manager |  |
| Product Owner |  |
| Business Analyst |  |
| Engineering lead |  |
| Version | 1.0.0 |
| Status | Draft |
| Last Updated |  |

## 1. Problem and context

State the customer problem, who has it, and why solving it now matters. Summarise the evidence (research, data, support signals) behind the direction.

## 2. Target users and jobs

| Segment or persona | Job to be done (when [situation], I want [motivation], so I can [outcome]) | Current pain |
| --- | --- | --- |
|  |  |  |

## 3. Goals, non-goals, and success metrics

Name the outcome, not the output. Define a primary success metric and supporting signals, and state explicitly what this product will not do.

| Goal | Success metric | Baseline | Target | Time frame |
| --- | --- | --- | --- | --- |
|  |  |  |  |  |

Non-goals:

- 

## 4. Scope and release phases

Define what is in and out of scope, and how the work is phased (for example, a first release followed by later increments).

## 5. Requirements

Each requirement names the user value and carries testable acceptance criteria and a trace to a goal.

| ID | Requirement or feature | User value | Priority (MoSCoW) | Acceptance criteria | Traces to goal |
| --- | --- | --- | --- | --- | --- |
| PR-001 |  |  |  |  |  |

## 6. User experience and flows

Describe the key user flows, states, and the important edge and error cases. Link to designs or wireframes where they exist. Hand detailed interaction and accessibility work to the UX skill.

## 7. Non-functional requirements

Summarise the quality attributes that matter for this product (performance, availability, security, accessibility, and so on), and reference the full `nfr-specification` where detail is needed.

## 8. Dependencies and assumptions

List systems, teams, data, and decisions this depends on, and the assumptions made. Flag assumptions for confirmation.

## 9. Risks and mitigations

| ID | Risk | Impact | Mitigation | Owner |
| --- | --- | --- | --- | --- |
| RSK-001 |  |  |  |  |

## 10. Rollout and measurement

Describe the launch approach (for example, staged rollout or feature flag), the instrumentation needed to measure the success metrics, and the go and no-go criteria.

## 11. Open questions

| ID | Question | Owner | Needed by |
| --- | --- | --- | --- |
| OQ-001 |  |  |  |

## Quality gate (BABOK requirement quality)

Each requirement should be atomic, complete, consistent, concise, feasible, unambiguous, testable, prioritized, and understandable. In addition for a PRD: the customer problem and outcome metric are named, user and business value are clear, edge cases and non-goals are stated, and the riskiest assumptions have a test.

## Review criteria

- Problem and target outcome are explicit and evidence-based.
- Every requirement is testable, prioritised, and traces to a goal.
- Non-goals and edge cases are stated.
- Success metrics are measurable and instrumented.

## BABOK anchor

Requirements Classification Schema; Specify and Model Requirements (7.1); Verify Requirements quality characteristics (7.2). Product direction from the product-manager skill; backlog from the product-owner skill.

## House style

Write the narrative with the natural-prose-editor pass and no em dashes. See `docs/methodology/editorial-style.md`.
