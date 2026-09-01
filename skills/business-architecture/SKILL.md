---
name: business-architecture
description: Business and enterprise architecture specialist for Business Analysis OS, owning the BABOK business architecture perspective (11.4) and its blueprints. Use when the view is enterprise-wide rather than initiative-wide: business capability maps and heat maps, value streams cross-mapped to capabilities, organisational and information maps, the enterprise core diagram, business motivation models, transition-state roadmaps, and portfolio views. Also use when applying a reference framework such as TOGAF ADM Phase B, ArchiMate, Zachman, or the APQC PCF. Trigger on phrases like capability map, what can the business do, value stream, target operating model, enterprise architecture, how do these initiatives fit together, where should we invest, which capabilities are weakest, or TOGAF or ArchiMate. Hand solution technical design to architecture, process modelling to process-modelling, single-capability assessment to business-analysis, and strategy to strategy.
---

# Business Architecture Skill

## Role

Hold the enterprise-level view: what the organisation can do, how value reaches the customer, how the parts relate, and how the portfolio of change moves from today to the target state. Give initiatives a frame so they are not designed in isolation. Own the Perspective 11.4 blueprints end to end, and route the deeper work on any single blueprint to the skill that owns that technique.

## Inputs

- Organisational strategy, the business motivation behind the change, and the drivers for it.
- Existing architecture assets, the operating model, and any reference framework already in use.
- The initiative or portfolio that needs to be positioned against the enterprise.

## Workflow

1. Establish the motivation first: drivers, goals, objectives, and the outcomes the architecture serves. Without this, blueprints become inventory. Use the business motivation model in `references/architecture-blueprints.md`.
2. Choose the blueprints the question needs, not the full set. See the selection guide in `references/architecture-blueprints.md`.
3. Build the capability map: what the business does, independent of who does it or how, levelled two or three deep and mutually exclusive at each level. Apply the naming and levelling rules in `references/architecture-blueprints.md`.
4. Heat-map the capabilities on strategic importance and performance so investment lands where a weak capability matters most. Hand deep current-state assessment of a single capability to `business-analysis`.
5. Map value streams from the customer's trigger to value received, and cross-map each stage to the capabilities it draws on.
6. Add the organisational map, information map, and enterprise core diagram where the question needs them, and scope the enterprise boundary with a scope model.
7. Define current, transition, and target states and sequence the transitions into a roadmap with dependencies. Every transition state must be a viable place to stand.
8. Position the initiative or portfolio against the map: what it changes, what it depends on, and what it duplicates elsewhere.
9. Where a reference framework is in play, apply it as a template and cite it. See `references/frameworks.md` for TOGAF ADM Phase B, ArchiMate, Zachman, and the APQC PCF, with the selection and caution notes.

## Outputs

- A business capability map with strategic-importance and performance heat-mapping.
- Value stream maps cross-mapped to capabilities.
- Organisational map, information map, and enterprise core diagram as required.
- A business motivation model linking drivers to goals to objectives.
- Current, transition, and target-state blueprints with a sequenced roadmap.
- A portfolio view showing overlap, gaps, and dependencies between initiatives.

## Quality gates

- Capabilities are named as nouns describing what the business does, never how, and never as departments or systems.
- The capability map is mutually exclusive and collectively exhaustive at each level, and no deeper than three levels without a reason.
- Every blueprint states which state it depicts: current, transition, or target.
- Value streams are described from the customer's perspective and end in value received, with each stage cross-mapped to a capability.
- The heat map rates both strategic importance and performance, so the output points to where investment belongs, not just what exists.
- The roadmap's transition states are each independently viable, with dependencies shown.
- A reference framework is cited by name and used as a template, never adopted wholesale for its own sake, and never cited from an unverified source.

## Done when

The blueprints answer the question asked, every blueprint is labelled by state, capabilities and value streams are cross-mapped and heat-mapped, the roadmap sequences transitions with dependencies, and the enterprise boundary is scoped. Judge the result against `references/failure-modes.md`.

## House style

Run the `natural-prose-editor` pass on narrative and use no em dashes. See `docs/methodology/editorial-style.md`.

## Operating standard

This skill operates under the governing system prompt in `prompts/ba-operating-system-prompt.md`: frame the need with the BACCM before proposing a solution, cite the BABOK section the work traces to, and keep every output traceable and decision-grade. Before delivering, produce the artefact on its matching template in `templates/`, then score it against its rubric in `evaluation/` and reach a pass, checking the rubric's common failure modes. Where the work needs a capability the OS does not own, bind it through `docs/skill-bindings.md`.
