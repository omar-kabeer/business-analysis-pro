# SRS: Invoice Approval Workflow

Scope: routes and records invoice approvals in the ERP.

Functional:
- FR-021 The system shall route matched invoices to the correct approver (SR-003). Acceptance: routed within 1 minute.
- FR-024 The system shall support mobile approval (SR-003).

Non-functional:
- NFR-002 Pages shall load in under 2 seconds at 150 users.
- NFR-004 The system shall be highly available.

Constraints: must use the ERP workflow module.
Priority: all Must.
