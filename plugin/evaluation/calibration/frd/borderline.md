# FRD: Invoice Approval

Actors: budget holder, ERP.

| ID | Requirement | Priority | Acceptance criteria | Source |
| --- | --- | --- | --- | --- |
| FR-021 | Route each matched invoice to the approver for its cost centre | Must | Invoice appears in the right approver's queue | SR-003 |
| FR-022 | Remind approvers about waiting invoices | Must | Reminder is sent | BRQ-001 |
| FR-023 | Block approval by the PO raiser and notify the next approver | Must | Approval is blocked | CR-002 |

Rule: nobody approves an invoice for a PO they raised.
Data: approval records (invoice, approver, decision, time).
Interface: the ERP invoice API.
