---
type: deliverable
domain: payments
status: draft
version: 1.0.0
---

# Payments Reconciliation Requirements

## Purpose

Specify how payments are reconciled between systems and against bank reporting, using ISO 20022 cash-management messages (camt). Use it when a solution must match outgoing and incoming payments to statements and notifications.

## Document Control

| Field | Value |
| --- | --- |
| Scope of reconciliation |  |
| Reporting messages used (camt.053, camt.052, camt.054) |  |
| Business Analyst |  |
| Version | 1.0.0 |
| Status | Draft |
| Last Updated |  |

## Reconciliation model

Describe what is reconciled against what: internal ledger against the bank statement (camt.053), intraday positions (camt.052), and individual credit or debit notifications (camt.054). State the frequency and the cut-off times.

## Matching rules

| Rule ID | Match on | Tolerance | Action on match | Action on exception |
| --- | --- | --- | --- | --- |
| REC-001 | End-to-end reference or UETR | Exact |  |  |
| REC-002 | Amount and value date | Defined tolerance |  |  |
| REC-003 | Remittance or structured reference | Exact |  |  |

## Exceptions and breaks

Define how unmatched items (breaks) are surfaced, investigated, aged, and resolved, including who owns each step and the target time to clear.

| Break type | Detection | Owner | Target resolution |
| --- | --- | --- | --- |
| Unmatched credit |  |  |  |
| Unmatched debit |  |  |  |
| Amount mismatch |  |  |  |
| Duplicate |  |  |  |

## Controls and reporting

State the controls (segregation of duties, aged-break reporting, escalation) and the reconciliation reporting needed for finance and audit.

## Review criteria

- The reconciliation model names the messages, frequency, and cut-offs.
- Matching rules are precise, with tolerances and exception actions.
- Break handling has owners and target resolution times.
- Controls and reporting support finance and audit needs.

## Reference

`domain-packs/payments-iso20022/terminology.md`; the requirements, data-analysis, and governance skills.
