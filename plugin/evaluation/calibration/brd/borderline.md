# Business Requirements Document: Invoice Approval

Summary: approvals are slow, so suppliers are paid late. We propose using the ERP workflow module.

Objectives: approve invoices within 5 days; pay 95 percent of invoices on time.
Scope: UK invoice approvals. Out of scope: payroll.
Stakeholders: Finance Director (sponsor), budget holders, AP team.

Requirements:
- BRQ-001 Invoices are approved within 5 working days.
- FR-021 The system routes invoices to the right approver. Acceptance: routed to the cost centre's budget holder within 1 minute. Traces to OBJ-001.
- FR-022 The system sends reminders.
- NFR-002 Pages load quickly.
- CR-002 Segregation of duties is enforced.

Assumptions: the ERP API supports real-time posting (owner Tom Reyes; if false, posting moves to release 2).
Risks: approvers may not adopt the tool; mitigate with training.
Approval: Finance Director.
