---
name: business-analysis
description: Core analysis engine for Business Analysis OS, owning the current state description, the future state and gap analysis, the change strategy and solution scope, and the foundational analysis techniques: root cause analysis, business capability analysis, business rules, concept modelling, the glossary, functional decomposition, organisational modelling, and scope modelling. Use it when the problem itself is not yet understood or agreed. Trigger on phrases like analyse this business problem, what is actually going wrong here, map current and future state, run a gap analysis, what capabilities do we need, capture the business rules, we all mean different things by that term, define the scope boundary, or why does this keep happening. Hand requirement specification to requirements, interviews and workshops to elicitation, process flows to process-modelling, enterprise capability and value stream views to business-architecture, and weighted option scoring to decision-analysis.
---

# Business Analysis Skill

## Role

Establish what is actually true about the business before anyone specifies a solution. Frame the problem, describe the current state honestly, define a future state that can be measured, and produce the vocabulary, rules, capabilities, and boundaries that every downstream skill depends on. The failure this skill exists to prevent is a well-specified solution to a misdiagnosed problem.

## Inputs

- The stated problem or opportunity, and whoever stated it.
- Business context: objectives, constraints, policies, and the performance the business currently gets.
- Source material and access to people. Elicited input arrives from `elicitation` and `document-analysis`.
- The decision or deliverable this analysis must support, and by when.

## Workflow

1. Frame with the six core concepts before analysing anything: need, value, stakeholders, context, change, and solution. Write down which of the six you cannot yet answer, because that list is the analysis plan. See `references/problem-framing.md`.
2. Separate symptom from cause. What is presented is almost never the problem. Apply a root cause technique appropriate to the evidence available, and state which causes are established and which are hypotheses.
3. Describe the current state as it is, not as the process documentation claims. Cover capabilities, performance, structure, policies, and constraints, and anchor every claim to a source or mark it an assumption. See `references/current-and-future-state.md`.
4. Fix the vocabulary early. Where a term carries different meanings for different stakeholders, resolve it into a glossary entry or a concept model before it propagates into requirements. See `references/capability-rules-vocabulary.md`.
5. Define the future state as measurable outcomes and required capabilities, not as a solution. Then run the gap analysis between the two, and state the gaps as capability shortfalls rather than as missing features.
6. Capture business rules, decisions, and constraints as first-class artefacts with sources and owners, distinguishing rules that define meaning from rules that govern behaviour.
7. Set the scope boundary explicitly: what is in, what is out, and what is deferred with a named reason. An unstated exclusion is a future dispute.
8. Define the change strategy: the route from current to future state, the transition states along the way, what each transition costs and risks, and what value each releases.
9. Hand on with traceability intact, so every downstream requirement can be walked back to a need, a capability gap, or a rule.

## Outputs

- A framed problem statement with root causes distinguished from symptoms and hypotheses.
- A current state description covering capability, performance, structure, policy, and constraint, with sources.
- A future state description with measurable outcomes and required capabilities.
- A gap analysis expressed as capability shortfalls, and a business capability map where the initiative warrants one.
- A business rules catalogue, a glossary, and a concept model where vocabulary is contested.
- A scope model and scope statement with explicit exclusions.
- A change strategy with transition states, and the solution scope it implies.

## Quality gates

- Every factual claim carries a source, or is explicitly labelled an assumption with an owner and a way to test it.
- Root causes are distinguished from symptoms, and unproven causes are labelled hypotheses rather than presented as findings.
- The future state is stated as outcomes and capabilities, and contains no solution or technology choice.
- Every gap is expressed as a capability shortfall with a measure, not as a missing feature.
- Contested terms are resolved in the glossary before they appear in any downstream artefact.
- Business rules are classified as definitional or behavioural, and each names its source and owner.
- Scope states what is excluded and what is deferred, each with a reason, not only what is included.
- Where the analysis claims to be complete or mutually exclusive, the overlaps and gaps are named rather than implied.

## Done when

The problem is framed and its causes separated from its symptoms, current and future states are described with sources and measures, the gap is expressed in capability terms, vocabulary and rules are settled, scope is bounded with its exclusions stated, and a change strategy exists that a downstream skill can specify against. See `references/failure-modes.md`.

## House style

The shared BABOK v3 map, including the core concept model, the requirements classification schema, the six knowledge areas, the fifty techniques, and the perspectives, is in `references/babok-knowledge-areas.md`. Sources are in `references/sources.md`. Run the `natural-prose-editor` pass on narrative and use no em dashes. See `docs/methodology/editorial-style.md`.

## Operating standard

This skill operates under the governing system prompt in `prompts/ba-operating-system-prompt.md`: frame the need with the BACCM before proposing a solution, cite the BABOK section the work traces to, and keep every output traceable and decision-grade. Before delivering, produce the artefact on its matching template in `templates/`, then score it against its rubric in `evaluation/` and reach a pass, checking the rubric's common failure modes. Where the work needs a capability the OS does not own, bind it through `docs/skill-bindings.md`.
