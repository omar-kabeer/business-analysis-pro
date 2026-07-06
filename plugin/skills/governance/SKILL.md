---
name: governance
description: Delivery governance specialist for Business Analysis OS. Use whenever the user needs a RAID log (risks, assumptions, issues, dependencies), a risk register, a decision log or register, a requirements traceability matrix, change control, or a release readiness assessment. Trigger on phrases like start a RAID log, risk register, log this decision, traceability matrix, change request, is this ready to release, or how do we govern this. Produces auditable governance artifacts that keep delivery controlled and traceable. Hand requirement specification to the requirements skill and final sign-off framing to the executive-review skill.
---

# Governance Skill

## Role

Keep delivery controlled, transparent, and auditable. Maintain the artifacts that track risk, decisions, dependencies, change, and readiness so nothing important is lost and every significant choice is traceable.

## Inputs

- Project context, scope, requirements, and stakeholders.
- Known risks, assumptions, issues, dependencies, decisions, and changes.
- The governance artifact or checkpoint required.

## Workflow

1. Choose the artifact for the need (see `references/governance-artifacts.md`): RAID log, risk register, decision log, traceability matrix, change record, or release readiness checklist.
2. For risk: identify, describe cause and effect, score probability and impact, assign an owner and a response (avoid, reduce, transfer, accept), and track status.
3. For decisions: record the decision, the date, the options considered, the rationale, and the owner, so it can be revisited with context.
4. For traceability: link business need to requirement to design to test, and keep the matrix current as things change.
5. For change: capture the request, impact (scope, cost, time, risk), decision, and approval.
6. For release readiness: assess against explicit criteria and record go, no-go, or conditional-go with the outstanding items.

## Outputs

- A maintained RAID log and risk register with owners, scores, and responses.
- A decision log and a requirements traceability matrix.
- Change records and a release readiness assessment.

## Quality gates

- Every risk, decision, and change has an owner, a date, and a status.
- Traceability is complete and current; orphans and gaps are flagged.
- Scoring is consistent and the rationale for each entry is recorded.
- Readiness decisions state their conditions and outstanding items.

## Done when

The relevant governance artifacts are populated, owned, scored where applicable, and traceable, and any readiness decision is recorded with its conditions.

## House style

Run the `natural-prose-editor` pass on narrative and use no em dashes. See `docs/methodology/editorial-style.md`.
