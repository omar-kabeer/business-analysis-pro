---
type: deliverable
domain: quality
status: draft
version: 1.0.0
---

# Release Readiness Checklist

## Purpose

Decide whether a release is ready to ship, against explicit criteria, and record a go, no-go, or conditional-go decision with any outstanding items. This gives a repeatable, auditable gate rather than a judgement call, and ties to the team's Definition of Done and the quality skill's validation.

## Document Control

| Field | Value |
| --- | --- |
| Release |  |
| Owner |  |
| Target release date |  |
| Version | 1.0.0 |
| Status | Draft |
| Last Updated |  |

## Readiness criteria

Mark each criterion Met, Not met, or Not applicable, with a note and owner for anything outstanding.

| Area | Criterion | Status | Owner | Note |
| --- | --- | --- | --- | --- |
| Scope | All must-have requirements delivered |  |  |  |
| Testing | Acceptance criteria met and tested |  |  |  |
| Quality | No open critical or high severity defects |  |  |  |
| Non-functional | Performance verified against targets |  |  |  |
| Non-functional | Security review passed |  |  |  |
| Non-functional | Accessibility checked (for example WCAG 2.1 AA) |  |  |  |
| Data | Data migration or conversion tested |  |  |  |
| Operations | Monitoring and alerting in place |  |  |  |
| Operations | Rollback plan defined and tested |  |  |  |
| Support | Documentation, training, and support ready |  |  |  |
| Compliance | Regulatory and legal sign-off obtained |  |  |  |
| Stakeholders | Business sign-off obtained |  |  |  |

## Outstanding items

| ID | Item | Severity | Owner | Plan and date |
| --- | --- | --- | --- | --- |
| OUT-001 |  |  |  |  |

## Decision

Record the outcome and the conditions attached.

| Field | Value |
| --- | --- |
| Decision (Go / No-go / Conditional-go) |  |
| Conditions (for conditional-go) |  |
| Decision maker |  |
| Date |  |

## Review criteria

- Every criterion is marked Met, Not met, or Not applicable, with owners for outstanding items.
- Non-functional checks (performance, security, accessibility) are included, not just functional.
- A rollback plan exists and has been tested.
- The decision is explicit and any conditions are recorded with owners and dates.

## BABOK anchor

Supports Verify Requirements (7.2), Validate Requirements (7.3), and solution acceptance. Pairs with the `requirements-traceability-matrix` and the quality skill.

## House style

Write any narrative with the natural-prose-editor pass and no em dashes. See `docs/methodology/editorial-style.md`.
