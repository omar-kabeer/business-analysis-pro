# Control Mapping Reference

## The mapping chain

Obligation, requirement, control, evidence, owner, status. Every link must hold or the chain proves nothing in an audit.

| Column | Content | Failure mode if weak |
| --- | --- | --- |
| Obligation ID | Instrument and clause | "GDPR" alone is untraceable |
| Obligation summary | What is actually demanded, in one sentence | Copying the clause verbatim hides the demand |
| Requirement ID | The testable requirement derived from it | An obligation with no requirement never gets built |
| Control | The thing that makes it true | A control named as a policy document rather than a mechanism |
| Control type | Preventive, detective, corrective | All detective means breaches are only ever found late |
| Evidence | The artefact an auditor can inspect | "We do this" with nothing to show |
| Frequency | Continuous, daily, quarterly, annual | Evidence that is stale by the audit date |
| Owner | A named role | A team name is not an owner |
| Status | Designed, implemented, operating, gap | Marking a designed control as operating |

## Control types

- Preventive stops the breach: input validation, access control, segregation of duties, encryption at rest.
- Detective finds it: logging and alerting, reconciliation, monitoring, periodic review, exception reporting.
- Corrective fixes it: incident response, rollback, breach notification, remediation workflow.

A single obligation usually needs at least one preventive and one detective control. If everything is preventive, nothing tells you when prevention failed.

## Evidence that survives an audit

- System-generated over self-declared. A configuration export beats a statement in a policy.
- Timestamped and attributable.
- Sampled rather than exhaustive is acceptable if the sampling method is stated.
- Stored where the auditor can be given access without a manual scramble.

## Gap handling

Record a gap as a first-class item, not as a blank cell. Each gap gets: the obligation it leaves exposed, the residual risk, the interim mitigation, the target date, and the owner. Route the residual risk to the `risk-analysis` skill so it appears in the risk register rather than only in the compliance sheet.

## Handoffs

- Requirement wording and quality: `requirements`.
- Residual risk scoring and response: `risk-analysis`.
- Contract clauses, SLAs, and supplier obligations: `procurement-contracts`.
- Audit-facing narrative and board reporting: `communication` and `executive-review`.
- Evidence storage, versioning, and retrieval: `information-management`.
