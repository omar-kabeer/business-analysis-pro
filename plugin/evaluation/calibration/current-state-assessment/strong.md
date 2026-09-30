# Current State Assessment: UK Supplier Invoice Approval

Scope: UK accounts payable from invoice receipt to ERP posting. Payroll, expenses, and EU entities are out, as the need does not touch them.

Business need: invoices take 14 days on average to approve (ERP workflow log, January to April), so 38 percent are paid after terms and about 60,000 pounds a year of early-payment discount is lost. Triggered bottom-up after two suppliers put us on hold. Five whys trace the delay to approval sitting outside any system: approvers are emailed, with no routing rule, reminder, or escalation.

Capabilities: CAP-001 invoice approval (email to budget holder; 14 days; approvals lost in inboxes; observed 6 May). CAP-002 exception handling (clerks phone and email; 6 days per exception; 22 percent of invoices fail matching).
Structure and culture: AP reports to the Financial Controller; budget holders in 12 departments see approval as an interruption.
Technology: the ERP holds POs, receipts, and invoices and runs matching, but has no workflow in use and does not show match reasons. An unused workflow module is licensed.
Policies: BR-012, invoices within 2 percent of PO price match automatically (FIN-POL-03); segregation of duties (FIN-POL-07), with audit finding AF-2025-04.
External: prompt payment reporting makes late payment public twice a year.
Baseline: approval 14 days; 62 percent paid within terms (ERP payment report, January to April 2026).

Summary: matching works; approval is slow because it sits outside any system. The data needed to route approvals already exists.
Assumption A-001: the four clerks observed are typical of the nine (confirm with the AP manager).
