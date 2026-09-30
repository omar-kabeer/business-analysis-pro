# Epic and Stories: Invoice Exceptions

Epic EPIC-004: Resolve invoice exceptions without email. Outcome: reduce average exception resolution time from 6 days to 2 days by Q3 (OBJ-1). Out of scope: supplier-side dispute portal.

| ID | Story | Acceptance criteria | Priority | Estimate | Traces to |
| --- | --- | --- | --- | --- | --- |
| STORY-021 | As an AP clerk, I want to see why an invoice failed three-way match, so that I can route it to the right person without investigating. | Given an invoice fails matching, when I open it, then the failed rule and the mismatched values (PO, receipt, invoice) are shown. Given more than one rule fails, then all failing rules are listed. | Must | 3 points | EPIC-004, BR-12 |

Notes: STORY-021 has no dependency on other stories in the epic; the matching rules already exist in the ERP. The display format is left to the team. Sized with the team in refinement on 3 June.
