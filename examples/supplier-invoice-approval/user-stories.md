---
type: deliverable
domain: product-ownership
status: draft
version: 1.0.0
---

# Epic and User Stories: Invoice Approval Workflow

## Epic

| Field | Content |
| --- | --- |
| Epic ID | EPIC-001 |
| Title | Automated supplier invoice approval |
| Outcome it serves | Faster approval and fewer bad payments (OUT-001, OUT-002) |
| In scope | Capture, PO match, amount-based routing, approval, posting, audit trail |
| Out of scope | Replacing the finance system; supplier onboarding |
| Success measure | Approval cycle time under 1 day; 90 percent fewer erroneous payments |

## Stories

### STORY-001

| Field | Content |
| --- | --- |
| ID | STORY-001 |
| Story | As an accounts payable clerk, I want invoices captured from email automatically, so that I do not key them by hand |
| Priority | Must |
| Traces to | EPIC-001 |

Acceptance criteria:

- Given an invoice PDF arrives at the mailbox, when it is received, then the invoice header and line data are captured and shown for review.
- Given a captured invoice, when a required field cannot be read, then it is flagged for manual correction.

### STORY-002

| Field | Content |
| --- | --- |
| ID | STORY-002 |
| Story | As accounts payable, I want each invoice matched to its purchase order, so that only valid invoices proceed |
| Priority | Must |
| Traces to | EPIC-001 |

Acceptance criteria:

- Given a captured invoice with a PO number, when it is matched, then quantities and amounts are compared within the agreed tolerance and a match result is recorded.
- Given a mismatch outside tolerance, when matching runs, then the invoice is routed to exception handling.

### STORY-003

| Field | Content |
| --- | --- |
| ID | STORY-003 |
| Story | As a manager, I want invoices routed to the right approver by amount, so that approvals follow policy |
| Priority | Must |
| Traces to | EPIC-001 |

Acceptance criteria:

- Given a matched invoice, when it needs approval, then it is routed to the approver whose authority covers the amount, per the approval policy.
- Given an approval or rejection, when the approver acts, then the decision, approver, and timestamp are recorded in the audit trail.
