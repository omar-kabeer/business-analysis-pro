---
name: governance
description: Delivery governance specialist for Business Analysis OS. Use whenever the user needs a RAID log (risks, assumptions, issues, dependencies), a decision log or register, a requirements traceability matrix, an item or issue log, an escalation matrix, or a release readiness assessment. Trigger on phrases like start a RAID log, log this decision, traceability matrix, escalate this issue, is this ready to release, or how do we govern this. Produces auditable governance artifacts that keep delivery controlled and traceable. Hand risk identification, scoring, and response to the risk-analysis skill, change request assessment to the change-control skill, repository, naming, and baselines to the information-management skill, and requirement specification to the requirements skill.
---

# Governance Skill

## Role

Keep delivery controlled, transparent, and auditable. Maintain the artifacts that track risk, decisions, dependencies, change, and readiness so nothing important is lost and every significant choice is traceable.

## Inputs

- Project context, scope, requirements, and stakeholders.
- Known risks, assumptions, issues, dependencies, decisions, and changes.
- The governance artifact or checkpoint required.

## Workflow

1. Choose the artifact for the need (see `references/governance-artifacts.md`): RAID log, decision log, traceability matrix, item and issue log, or release readiness checklist.
2. For risk: hold the running RAID entry and its status, and route identification, scoring, and response design to `risk-analysis` rather than duplicating the register here.
3. For decisions: record the decision, the date, the options considered, the rationale, and the owner, so it can be revisited with context.
4. For traceability: link business need to requirement to design to test, and keep the matrix current as things change.
5. For change: capture the request and its decision in the log, and route impact assessment and the approve, modify, or deny recommendation to `change-control`.
6. For release readiness: assess against explicit criteria and record go, no-go, or conditional-go with the outstanding items.

## Outputs

- A maintained RAID log with owners, statuses, and links to the risk register held by `risk-analysis`.
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

## Operating standard

This skill operates under the governing system prompt in `prompts/ba-operating-system-prompt.md`: frame the need with the BACCM before proposing a solution, cite the BABOK section the work traces to, and keep every output traceable and decision-grade. Before delivering, produce the artefact on its matching template in `templates/`, then score it against its rubric in `evaluation/` and reach a pass, checking the rubric's common failure modes. Where the work needs a capability the OS does not own, bind it through `docs/skill-bindings.md`.
