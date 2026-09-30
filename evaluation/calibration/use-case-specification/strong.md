# UC-004 Approve a Supplier Invoice

Primary actor: budget holder. Goal: approve or reject an invoice routed to them. Level: user goal, within the approval workflow.
Trigger: a matched invoice is routed to the budget holder. Preconditions: approver signed in; invoice Awaiting approval.
Success guarantee: decision, approver, and time recorded; status posted to the ERP.

Main success scenario:
1. System notifies the approver.
2. Approver opens the invoice.
3. System shows supplier, amount, PO, receipt, cost centre, and match result.
4. Approver approves.
5. System records the decision and posts Approved to the ERP.

Alternates: A1 at 4, approver rejects with a reason; system records Rejected and returns it to AP. A2 at 1, approver on leave with a delegate; system routes to the delegate.
Exceptions: E1 at 4, approver raised the PO; approval blocked and routed to the next approver (BR-015). E2 at 5, ERP posting fails; decision kept, retried every 15 minutes, AP alerted after 3 failures.

AC-001 Given an invoice awaiting approval, when approved, then the ERP shows Approved within 1 minute.
AC-002 Given the approver raised the PO, when they try to approve, then approval is blocked and the next approver is notified.
Traces: SR-003, FR-021 (TC-011); BR-015, CR-002 (TC-040).
