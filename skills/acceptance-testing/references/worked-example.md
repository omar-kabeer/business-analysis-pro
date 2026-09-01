# Worked Example: Accepting a Payments Refund Release

A mid-size lender is replacing a manual refund process with an automated one inside its servicing platform. Two integrations, a migrated backlog of in-flight refunds, and a regulatory obligation to evidence dual control. Release window is three weeks.

## 1. Frame

Being accepted: the refund capability in release 24.3, covering initiation, approval, payment instruction, and reconciliation. Basis: FR-101 to FR-138, business rules BR-11 to BR-19, NFR-04 performance, NFR-09 audit retention. Owner of the decision: Head of Servicing Operations. Acceptance permits cutover of the manual queue and decommissioning of the spreadsheet log.

Types in scope: business acceptance, user acceptance, functional, data acceptance for the migrated backlog, integration acceptance for the payment gateway, operational acceptance for the overnight reconciliation job, and compliance acceptance for dual control. Security acceptance is ruled out at release level because no new external surface is exposed; recorded with that reason and countersigned by the security lead.

## 2. Risk scoring

Twelve feature areas scored. Three land high: dual approval enforcement (regulatory consequence, no workaround), payment instruction to the gateway (financial exposure, external dependency), and migration of in-flight refunds (data loss, irreversible). These get full boundary and negative coverage and independent execution. Reporting and the audit export land low and get sampled positive cases.

## 3. Derivation

BR-14, "refunds above 50,000 require dual approval", yields nine conditions and fourteen cases once the same-approver, insufficient-authority, and withdrawn-approval paths are included. FR-119, the gateway instruction, yields conditions for success, timeout, partial acknowledgement, duplicate submission, and gateway rejection with each of the four documented reason codes.

The migration is treated as its own acceptance: row counts by status, value reconciliation to two decimal places, and a rule that any in-flight refund whose approval was recorded under the old single-approval regime is flagged rather than silently converted. That rule surfaced during derivation and became a new requirement, routed to `requirements` and back.

## 4. Coverage

138 requirements in scope, 214 test conditions, 291 cases. Requirement coverage 100 percent before execution. Condition coverage 96 percent, with the eight uncovered conditions all in the low band and each recorded with the reason. Orphan cases: four, all found to be scope creep from a previous release and removed.

## 5. Entry and exit

Entry blocked for two days because the gateway sandbox returned stale reason codes. Recorded as an entry failure with an owner rather than absorbed into the schedule, which kept the three-week window honest.

Exit agreed and dated before execution: full high and medium band execution, zero open critical, zero open high without a written accepted exception, migration reconciliation clean to the penny, dual control evidenced end to end, and P95 approval-to-instruction under 3 seconds at peak volume.

## 6. Execution and defects

291 cases run. Three critical, eleven high, twenty-nine medium.

The most instructive defect was severity critical and would have passed a screen-derived test: the interface prevented the same user approving twice, but the API did not, so an integration client could bypass dual control. It was found because the case was derived from BR-14 rather than from the approval screen.

One dispute arose over whether refunds between 45,000 and 50,000 should require dual approval. The specification said above 50,000. Operations expected 45,000. This was logged as a change request to `change-control`, not as a defect, which kept the defect count clean and put the decision with the people who owned the threshold.

## 7. Recommendation

All three criticals fixed and retested. Two highs remained: a reconciliation report that mis-sorted by currency, and a gateway timeout that retried correctly but logged the retry ambiguously.

Recommendation: **accept with conditions**. Conditions: the reconciliation sort fixed within one release, owned by the platform lead, dated; the retry logging clarified before the next audit cycle, owned by the operations lead, dated. Residual risk: an auditor reviewing the retry log within the next quarter may raise a finding on evidential clarity. Rated low likelihood, medium impact, accepted by the Head of Servicing Operations and routed to `risk-analysis` for the register and to `governance` for the decision log.

Benefit baseline captured at cutover, twenty-two manual hours per week, so `solution-evaluation` can test the business case claim at six months rather than reconstructing it.
