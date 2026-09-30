# UAT Plan: Invoice Approval Release 1

Scope: approval routing, exceptions, ERP posting. Not tested: payroll and expenses, unchanged by this release.
Entry: build 1.0.0-rc2 smoke-tested; June data snapshot loaded and supplier bank details masked; 7 business testers trained. Exit: all in-scope requirements executed; no open critical or high defects; mediums triaged with owners; NFR-002 verified; Finance Director signs.
Coverage: 24 of 24 in-scope requirements mapped to 9 scenarios and 41 cases (matrix attached).
Scenarios are AP and approver tasks, for example SCN-02 "resolve a price mismatch", with boundary cases at the 2 percent tolerance and negative cases for missing receipts.
Risk: test data too clean; 50 known exceptions seeded from production.
Defects: DEF-031, severity Low, priority 3, owner vendor, workaround in place.
Recommendation: accept with one condition (fix DEF-031 in 1.1 by 2026-07-31, vendor). Coverage 100 percent. Signed Finance Director, 2026-07-11.
