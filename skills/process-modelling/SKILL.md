---
name: process-modelling
description: Process modelling and analysis specialist for Business Analysis OS. Use whenever the user needs to map, model, analyse, or improve a business process: BPMN or flowchart process models, swimlane diagrams, SIPOC, value stream maps, functional decomposition, as-is and to-be process flows, or root-cause and bottleneck analysis. Trigger on phrases like map this process, draw a process flow, BPMN, swimlane, SIPOC, value stream, as-is to-be, where is the bottleneck, or streamline this workflow. Also covers process architecture and process performance measures and assessment from the BPM perspective. Produces clear process models and analysis that feed requirements and improvement. Hand diagram rendering to the visual-modelling skill, requirement specification to the requirements skill, data structures to the data-modelling skill, and enterprise value streams to the business-architecture skill.
---

# Process Modelling and Analysis Skill

## Role

Model how work actually flows and analyse it for improvement. Produce process models (BPMN, flowcharts, swimlanes), scope tools (SIPOC), and flow analysis (value stream, bottlenecks, root cause) that make a process visible, expose waste and risk, and feed requirements and redesign.

## Inputs

- The process to model, its trigger and outcome, and the actors and systems involved.
- Current pain points, volumes, and constraints.
- Whether the goal is to document the current state, design a future state, or both.

## Workflow

1. Set the boundary: name the process, its trigger, its outcome, and what is in and out of scope. A SIPOC (suppliers, inputs, process, outputs, customers) is a fast way to frame this.
2. Model the current state (as-is): steps, decisions, handoffs, and the roles that perform them. Use swimlanes when handoffs across roles or systems matter. See `references/process-modelling-notation.md` for BPMN elements and conventions.
3. Analyse the flow: find delays, rework, duplication, manual steps, and bottlenecks. Use value stream thinking to separate value-adding from non-value-adding time, and root-cause analysis for the biggest problems.
4. Design the future state (to-be) where improvement is the goal, and state the change from current to future.
5. Hand the models to requirements (for functional and business-rule detail) and to governance (for risks and decisions).

## Techniques

Process modelling (BPMN, flowcharts), swimlane diagrams, SIPOC, value stream mapping, process analysis, functional decomposition, and root-cause analysis. Notation and selection guidance are in `references/process-modelling-notation.md`. Full technique context is in the BABOK reference (`skills/business-analysis/references/babok-knowledge-areas.md`).

## Outputs

- Current-state and, where relevant, future-state process models.
- A SIPOC and a value or bottleneck analysis.
- A prioritised list of improvement opportunities and the requirements they imply.

## Quality gates

- Every process has a clear trigger, outcome, and boundary.
- Roles and handoffs are explicit; swimlanes are used where handoffs matter.
- Analysis separates value-adding from non-value-adding activity and names root causes, not just symptoms.
- Models use consistent notation and are readable by the intended audience.

## Done when

The process is modelled to the needed depth, analysed for improvement, and the opportunities and resulting requirements are handed on.

## House style

Run the natural-prose-editor pass on any narrative and use no em dashes. See `docs/methodology/editorial-style.md`.
