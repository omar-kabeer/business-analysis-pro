# NFR Specification: Supplier Invoice Approval

| ID | Category | Requirement | Target | Conditions | Source | Priority |
| --- | --- | --- | --- | --- | --- | --- |
| NFR-001 | Availability | The approval service is available during business hours. | 99.5 percent a month | 07:00 to 19:00, weekdays | BR-004 | Must |
| NFR-002 | Performance efficiency | Invoice review pages load quickly. | 2 seconds at the 95th percentile, 3 seconds maximum | Normal load | STK-006 interview | Must |
| NFR-003 | Security | Only approvers can approve invoices, and approvals are logged. | 100 percent of approvals logged with user and time | | FIN-POL-07 | Must |
| NFR-004 | Usability | The screen should be intuitive for new users. | Most users approve without help | | | Should |
| NFR-005 | Compliance | Records are kept for 6 years. | 6 years | | OBL-003 | Must |
| NFR-006 | Scalability | The service copes with month-end. | 12,000 invoices a day | | Volume report | Must |
