# Release Plan and Notes

## State the outcome the release serves, not just its features.

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
