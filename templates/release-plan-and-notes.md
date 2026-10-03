---
type: deliverable
domain: product-management
status: draft
version: 2.0.0
---

# Release Plan and Notes

> **How to use this template.** Filled rows and "Example" lines illustrate one scenario so the expected depth is clear. Replace them with the facts of the work at hand: never carry example names, figures, or IDs into a real document, and say plainly when a fact is not yet known. Include every other section by default, and leave one out only when the user asks. Include these sections only when their condition applies or the user asks for them: Internal communication (standard or formal governance, or written for delivery teams); Regulatory release record (regulated work). The full rules are in `templates/release-plan-and-notes.toc.json`.

## Purpose

Define the goal, scope, sequence, and readiness criteria of a release for the team, and the customer-facing notes that explain what changed. One document, two audiences: internal planning and external communication. Based on Backlog Management (10.2) and Prioritization (10.33). Graded by `evaluation/release-plan-release-backlog-rubric.md`.

This template is a superset. Its table-of-contents manifest, `templates/release-plan-and-notes.toc.json`, marks which sections are core, standard, or extended and when each applies.

## Document Control

| Field | Value |
| --- | --- |
| Product and release | Supplier payment status portal, R1 |
| Product manager | Maya Okafor |
| Target release date | 2026-09-15 |
| Version | 1.1.0 |
| Status | Approved |

## Scope

State what the release includes and what it deliberately leaves out.

| In the release | Out of the release |
| --- | --- |
| Status lookup (PR-001); expected payment date (PR-002); top 200 suppliers | Login; notifications; disputes |

## Inputs

List what the plan draws on: the roadmap, the ranked backlog, team capacity, dependencies, and the definition of ready.

Example: product roadmap 1.2 (Now: status visibility); backlog ranked on 2026-07-20; team velocity 24 points per sprint.

## Release goal

State the outcome the release serves, not just its features.

Example: the top 200 suppliers can answer "where is my invoice and when will I be paid" without calling AP (G-001).

## Release backlog

List the items in the release in priority order, each ready and estimated, with its dependencies.

| Rank | ID | Item | Estimate | Ready | Depends on |
| --- | --- | --- | --- | --- | --- |
| 1 | STORY-041 | Look up an invoice by number and supplier reference | 8 | Yes | DEP-001 ERP status API |
| 2 | STORY-042 | Show the expected payment date as a range | 5 | Yes | STORY-041 |
| 3 | STORY-043 | Neutral "not found" with no data leak | 3 | Yes | STORY-041 |

## Capacity check

Show that the scope fits the team's capacity, with a margin.

| Item | Points |
| --- | --- |
| Committed scope | 42 |
| Capacity (2 sprints at 24, less 10 percent for support) | 43 |
| Margin | 1 |

## Dependencies and risks

Name each dependency and risk to the release, with an owner, a date, and a response.

| ID | Dependency or risk | Owner | Needed by | Response |
| --- | --- | --- | --- | --- |
| DEP-001 | ERP status API in production | Tom Reyes | 2026-08-15 | Weekly check; fallback is batch status every hour |
| RSK-011 | Lookup exposes another supplier's data | Tom Reyes | Before launch | Penetration test; two-factor match |

## Increment

Describe what a user can do end to end once the release ships, so it is a usable, coherent increment rather than a set of parts.

Example: a supplier opens the link in a remittance email, enters an invoice number and their reference, and sees status and a payment date range.

## Readiness criteria

State the go and no-go criteria, and how the release rolls out and rolls back.

| Criterion | Status |
| --- | --- |
| All stories meet the definition of done | Met |
| Penetration test passed | Met |
| Payment dates within 1 day for 90 percent of invoices over 4 weeks | Met |

Rollout: behind a feature flag for the top 200 suppliers by call volume. Rollback: switch the flag off; no data migration to reverse.

## Milestones

Key dates on the way to release, each with an owner.

| Milestone | Date | Owner |
| --- | --- | --- |
| Code complete | 2026-09-01 | Tom Reyes |
| Go or no-go decision | 2026-09-12 | Maya Okafor |

## Release notes

Write for the customer, in plain language, leading with the value.

| Change | What it does for you | Type |
| --- | --- | --- |
| Invoice status lookup | See whether your invoice is received, approved, or on hold, any time | New |
| Expected payment date | Plan your cash with a payment date range for approved invoices | New |

Known issues: payment dates show as a range until accuracy is confirmed. Help: ap-help@example.com.

## Assumptions

What the document takes as true, each with the effect if it proves wrong.

| ID | Assumption | Effect if wrong |
| --- | --- | --- |
| A-141 | Velocity holds at 24 points | Drop STORY-043 to R1.1 |

## Risks to the plan

Risks to delivering the plan as scoped, with a response and an owner.

| Risk | Response | Owner |
| --- | --- | --- |
| API slips past 15 August | Go live with hourly batch status | Maya Okafor |

## Internal communication

For releases that change how internal teams work, state who needs to know what and when.

| Audience | Message | When |
| --- | --- | --- |
| AP team | Point status callers to the portal | Launch day |

## Regulatory release record

For regulated products, record the approvals and evidence for release.

| Approval | By | Evidence |
| --- | --- | --- |
| Data protection sign-off | DPO | DPIA-014 |

## Outputs

An approved plan whose items, capacity, dependencies, and readiness criteria support a go decision, and release notes ready to publish.

## Review criteria

- The release goal names the outcome.
- Items are ready and estimated.
- Items are ranked by value and dependency.
- The scope fits capacity with a margin.
- Dependencies and risks are identified with owners.
- The release delivers a usable, coherent increment.
- Readiness criteria, rollout, and rollback are defined.
- Customer notes lead with value in plain language.

## Practice anchor

Backlog Management (10.2); Prioritization (10.33); Plan Business Analysis Approach (3.1) for release cadence. Owned by the product-manager and product-owner skills. Pairs with the go-to-market plan and release readiness checklist.

## House style

Write the narrative with the natural-prose-editor pass and no em dashes. See `docs/methodology/editorial-style.md`.
