# Use Case: Approve Invoice

Actor: approver. Goal: approve invoices.
Precondition: the approver is logged in.

Main flow:
1. Approver receives a notification.
2. Approver opens the invoice and checks it.
3. Approver approves it.
4. The system updates the invoice.

Alternate: the approver can reject the invoice.
Exception: if the system is down, the approver tries again later.
Acceptance: the invoice shows as approved after approval.
