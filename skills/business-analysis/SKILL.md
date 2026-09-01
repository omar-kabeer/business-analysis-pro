---
name: business-analysis
description: BABOK-aligned business analysis engine for Business Analysis OS. Use whenever the user needs current-state and future-state analysis, gap and capability assessment, root-cause work, stakeholder analysis, business rules, requirements planning and monitoring, requirements life-cycle management, traceability, or solution evaluation. Trigger on phrases like analyse this business problem, map current vs future state, do a gap analysis, capability assessment, stakeholder map, business rules, or apply BABOK. Produces structured, traceable analysis rather than opinion. Hand off requirement specification to the requirements skill, framing interviews to the elicitation skill, drawing any model to the visual-modelling skill, decision tables and weighted option scoring to the decision-analysis skill, and enterprise-wide capability views to the business-architecture skill.
---

# Business Analysis Skill

## Role

Perform rigorous business analysis across the six BABOK knowledge areas: planning and monitoring, elicitation and collaboration, requirements life-cycle management, strategy analysis, requirements analysis and design definition, and solution evaluation. Bring structure and traceability to messy business problems so decisions rest on evidence.

## Inputs

- Problem statement, business context, goals, and constraints.
- Stakeholders, source documents, process descriptions, data, and prior decisions.
- The decision or deliverable the analysis must support.

## Workflow

Move through the OS reasoning arc: understand, clarify, research, challenge assumptions, identify risks, model options, evaluate tradeoffs, recommend, validate. For a full standards-based run, follow section 17 of `references/babok-knowledge-areas.md`.

1. Frame the change with the Business Analysis Core Concept Model: state the need, the value, the stakeholders, the context, and the change and solution under consideration. Flag any concept you cannot yet answer. Then separate symptom from root cause ("5 whys", fishbone, or a problem statement canvas).
2. Map the current state: processes, capabilities, stakeholders, pain points, and constraints. Anchor claims to sources.
3. Define the future state: target capabilities, measurable objectives, and the value expected.
4. Run a gap and capability assessment between current and future state, choosing techniques from the catalogue in `references/babok-knowledge-areas.md`.
5. Capture business rules, assumptions, dependencies, and risks as you go. Classify every requirement you surface (business, stakeholder, solution functional and non-functional, transition).
6. Recommend a solution approach and the requirements work needed next, with explicit traceability from need to capability to requirement.

## Frameworks and techniques

Operate to BABOK v3: the six knowledge areas and their tasks, the BACCM framing lens, the requirements classification schema, and the 50-technique catalogue, all detailed in `references/babok-knowledge-areas.md`. Core tools include stakeholder analysis (RACI, power/interest grid), current and future state modelling, gap analysis, capability mapping, root-cause analysis, business rules capture, decision analysis, and traceability. Signal the relevant BABOK perspective (agile, business intelligence, IT, business architecture, or business process management) when it shapes the approach.

## Outputs

- Current-state and future-state summaries with a gap and capability assessment.
- Stakeholder analysis, business rules, assumptions, dependencies, and risks.
- A recommended solution approach and a scoped hand-off to requirements.

## Quality gates

- Every finding traces to a source or a stated assumption.
- Analysis is MECE where it claims to be complete; overlaps and gaps are called out.
- Recommendations follow from the evidence, not from preference.
- Terminology matches the business glossary and surrounding artifacts.

## Done when

The problem is framed, current and future states are mapped, gaps and capabilities are assessed, and a traceable, evidence-based recommendation and next step are in place.

## House style

Run the `natural-prose-editor` pass on any narrative and use no em dashes. See `docs/methodology/editorial-style.md`.

## Operating standard

This skill operates under the governing system prompt in `prompts/ba-operating-system-prompt.md`: frame the need with the BACCM before proposing a solution, cite the BABOK section the work traces to, and keep every output traceable and decision-grade. Before delivering, produce the artefact on its matching template in `templates/`, then score it against its rubric in `evaluation/` and reach a pass, checking the rubric's common failure modes. Where the work needs a capability the OS does not own, bind it through `docs/skill-bindings.md`.
