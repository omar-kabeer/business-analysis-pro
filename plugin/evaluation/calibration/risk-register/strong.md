# Risk Register: Supplier Invoice Approval, Release 1

Scale: probability and impact 1 to 5; severity is the product; 15 or more goes to steering. Reviewed fortnightly.

RSK-001 Because approvers see approval as an interruption, they may keep approving by email, so the 5-day target is missed. Adoption. P4 I4, severity 16 (escalated). Reduce: disable email approval at go-live; weekly usage report; trigger under 70 percent in-tool approvals in week 2. Owner: Financial Controller. Residual 8. Open, review 30 June.
RSK-002 Because the vendor API is untested at our volumes, posting may fail at month end, so invoices are paid late. Technical. P2 I5, severity 10. Reduce: load test at 3 times peak. Owner: Tom Reyes. Residual 5. Open, review 30 June.
RSK-003 Because benefits rely on discount capture, a change in supplier terms could erase the case. Benefit. P2 I3, severity 6. Accept, with a quarterly check. Owner: Treasury lead. Open.
RSK-006 Segregation of duties could be broken by delegation. Regulatory. P2 I5, severity 10. Reduce: workflow blocks self-approval. Owner: Financial Controller. Open.

Top risk: RSK-001 (16, stable).
