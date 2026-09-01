---
name: ba-planning
description: Business analysis planning and monitoring specialist for Business Analysis OS, covering BABOK knowledge area 3. Owns the business analysis approach, the stakeholder engagement approach, the design of requirements governance and decision rights, the information management approach, the estimate of the analysis effort itself, and the measures by which that effort is monitored and improved. Use it before the analysis work starts, and again when it is not working. Trigger on phrases like how should we run the BA work, plan the analysis approach, predictive or agile or hybrid, who signs off requirements, design the change control process, stakeholder engagement plan, how much BA effort will this take, how deep should our traceability go, our requirements process is too heavy, or why does every decision take three weeks. Hand repository structure, naming, versioning, and baselines to information-management, the running of governance to governance, and delivery team practice to agile-coach.
---

# Business Analysis Planning and Monitoring Skill

## Role

Decide how the analysis work will be done before doing it, and keep deciding as evidence arrives. Set the approach, the engagement, the decision rights, the information discipline, and the measures, each proportionate to what the initiative actually risks. Over-governing a small change wastes effort; under-governing a large one is how requirements defects reach production.

## Inputs

- The need, the initiative's size, risk profile, novelty, and regulatory exposure.
- The delivery approach the team will use, and the organisational standards and methodologies already mandated.
- The stakeholders, their authority, and the decisions each must make.
- Prior performance evidence: what went wrong last time, and what the lessons learned said.

## Workflow

1. Size the problem before choosing a process. Rate the initiative on scale, uncertainty, regulatory exposure, number of parties, and cost of getting it wrong. The answers set the rigour; skipping this step is what produces one-size-fits-all process. See `references/approach-selection.md`.
2. Choose the analysis approach: predictive, adaptive, or an explicit hybrid with the boundary named. State the deliverables, the activities, the timing, the formality, and what will deliberately not be produced.
3. Identify stakeholders and analyse them on authority, interest, influence, attitude, and availability. Plan engagement per group rather than per person, and state the cadence and the medium. See `references/stakeholder-engagement-planning.md`.
4. Design the governance: who decides what, on what evidence, within what time, and what happens when they do not. Define the prioritisation basis and the change control path before there is a change to control. See `references/governance-and-information-planning.md`.
5. Set the information approach: what is recorded, at what level of detail, traced how far, retained how long, and reused where. Depth follows risk and regulatory need, not habit.
6. Estimate the analysis effort with a stated method and a stated confidence, not a single number. See `references/performance-and-estimation.md`.
7. Define how the analysis work will be monitored: a small set of measures with targets, tied to outcomes rather than to output volume.
8. Review the plan against evidence at agreed points, and change it. A plan written once and never revised has stopped being a plan.

## Outputs

- A business analysis approach stating rigour, deliverables, activities, timing, and deliberate exclusions.
- A stakeholder engagement approach with groups, decisions owned, cadence, and medium.
- A governance design: decision rights, prioritisation basis, approval path, change control, and escalation.
- An information management approach covering detail level, traceability depth, retention, and reuse.
- An estimate of the analysis effort with method, assumptions, and confidence range.
- A performance measure set with targets and review points.

## Quality gates

- The rigour chosen is justified against the initiative's assessed scale, uncertainty, and regulatory exposure, and the assessment is recorded.
- The approach states what will not be produced, not only what will.
- Every decision the initiative needs has a named owner with the authority to make it, and a stated time within which it will be made.
- Traceability depth is set deliberately with a reason, rather than defaulting to everything or nothing.
- The effort estimate names its method, its assumptions, and a range with confidence, never a single unqualified number.
- Performance measures count outcomes and rework, not pages, documents, or hours logged.
- A review point is scheduled at which the plan itself is reconsidered against evidence.
- Where the initiative involves automated decision-making, the additional impact assessment and audit obligations are identified and routed to `regulatory-compliance`.

## Done when

The approach, engagement, governance, information, estimate, and measures are set and proportionate, every needed decision has an owner and a clock, and a date exists on which the plan will be tested against what actually happened. See `references/failure-modes.md`.

## House style

Sources and the checks they impose are in `references/sources.md`. Run the `natural-prose-editor` pass on narrative and use no em dashes. See `docs/methodology/editorial-style.md`.

## Operating standard

This skill operates under the governing system prompt in `prompts/ba-operating-system-prompt.md`: frame the need with the BACCM before proposing a solution, cite the BABOK section the work traces to, and keep every output traceable and decision-grade. Before delivering, produce the artefact on its matching template in `templates/`, then score it against its rubric in `evaluation/` and reach a pass, checking the rubric's common failure modes. Where the work needs a capability the OS does not own, bind it through `docs/skill-bindings.md`.
