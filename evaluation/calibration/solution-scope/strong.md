# Solution Scope: Supplier Invoice Approval, Release 1

In scope:
| ID | Element | View | Objective |
| --- | --- | --- | --- |
| SC-001 | Route each invoice to the right approver by cost centre and amount | Capability | OBJ-1 |
| SC-002 | Show why three-way match failed and route the exception | Process | OBJ-1 |
| SC-003 | Post approval status to the ERP | System | OBJ-2 |

Out of scope: supplier invoice submission (e-invoicing programme); EU entities (release 2); payroll and expenses (unchanged).

How it enables the future state: SC-001 and SC-002 remove email routing and manual exception chasing, the two causes of the 14-day approval time (OBJ-1: 5 days). SC-003 removes rekeying (OBJ-2).

Fits the chosen change strategy (configure the vendor workflow tool, phased by entity) and its budget cap. Assumption: the ERP API supports real-time posting; if not, SC-003 moves to release 2. Changes go through the change request process; the sponsor decides.
