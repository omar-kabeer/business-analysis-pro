# NFR Specification: Supplier Invoice Approval

Solution: invoice approval workflow for accounts payable. Version 1.2.0, in review.

| ID | Category | Requirement | Measure and target | Threshold | Conditions | Source | Priority |
| --- | --- | --- | --- | --- | --- | --- | --- |
| NFR-001 | Availability | The approval service is available to approvers during business hours. | Monthly availability 99.5 percent, 07:00 to 19:00 UK time, Monday to Friday | Below 99.0 percent in any month fails | Excludes announced maintenance of up to 2 hours a month, notified 5 days ahead | BR-004 (month-end close) | Must |
| NFR-002 | Performance efficiency | Opening an invoice for review is fast enough not to interrupt approval. | 95th percentile page load 2 seconds | Above 3 seconds at the 95th percentile fails | 150 concurrent approvers, invoices up to 20 lines with one PDF under 5 MB | STK-006 interview, 12 May | Must |
| NFR-003 | Scalability | The service handles month-end peaks without degradation. | 12,000 invoices a day with NFR-002 still met | NFR-002 breached at 12,000 a day fails | Load test with production-like data mix | Finance volume report FY25 | Should |
| NFR-004 | Security | Only authorised roles can approve, and every approval is attributable. | 100 percent of approvals carry an authenticated user ID and timestamp in an immutable log | Any approval without both fails | Tested by attempted approval from each non-approver role | Policy FIN-POL-07 section 3 | Must |
| NFR-005 | Usability | New approvers can approve without training. | 90 percent of first-time approvers complete an approval unaided within 3 minutes | Below 80 percent fails | Moderated test with 10 approvers who have not used the tool | Objective OBJ-2 (reduce training cost) | Should |
| NFR-006 | Compliance | Invoice records are retained for the statutory period. | Retained and retrievable for 6 years from the end of the financial year | Any record irretrievable within the period fails | Retrieval test on a sample of 50 archived invoices | Legal obligation OBL-003 | Must |

Trade-offs: NFR-003 raises hosting cost by an estimated 8 percent; the sponsor accepted this on 20 May (DEC-011). All six items were reviewed for feasibility with the platform lead, who confirmed NFR-002 is achievable on the current hosting tier.
