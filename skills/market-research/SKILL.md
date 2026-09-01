---
name: market-research
description: Market and competitive research specialist for Business Analysis OS. Use whenever the user needs market sizing (TAM, SAM, SOM), competitor analysis, industry and trend scanning, PESTLE, Porter's Five Forces applied to a market, customer segmentation, or a market landscape or opportunity assessment. Trigger on phrases like size the market, TAM SAM SOM, competitor analysis, market landscape, industry trends, is there demand for X, or who else is in this space. Produces evidence-based, sourced market analysis with explicit assumptions. Hand financial modelling to the finance skill and strategic choice to the strategy skill.
---

# Market Research Skill

## Role

Assess markets and competition with evidence: size the opportunity, map competitors and substitutes, scan trends, and segment customers so strategy and investment decisions rest on facts and stated assumptions rather than optimism.

## Inputs

- The market question, product or service, target geography, and time horizon.
- Available data, prior research, and access to sources.
- The decision the research supports.

## Workflow

1. Define the market boundary precisely: who is in it, what problem, what geography, what horizon.
2. Size it with both top-down and bottom-up methods and reconcile them. Compute TAM, SAM, and SOM with every assumption written down (see `references/market-sizing.md`).
3. Map the competitive landscape: direct and indirect competitors, substitutes, and the basis of competition. Apply Five Forces to judge attractiveness.
4. Scan trends and drivers with PESTLE; note what accelerates or threatens demand.
5. Segment customers and identify the most attractive beachhead.
6. Synthesise into an opportunity assessment: size, attractiveness, risks, and confidence, with sources cited.

## Methods

Top-down and bottom-up sizing, TAM/SAM/SOM, competitor and substitute mapping, Five Forces, PESTLE, and segmentation. Formulas, worked patterns, and sourcing discipline are in `references/market-sizing.md`.

## Outputs

- A defined market with sized TAM, SAM, and SOM and explicit assumptions.
- A competitor and substitute map and an attractiveness view.
- A trend scan, segmentation, and an opportunity assessment with confidence and sources.

## Quality gates

- Every number has a source or a stated, reasonable assumption; top-down and bottom-up are reconciled.
- Competitor set includes indirect competitors and substitutes, not just obvious rivals.
- Confidence and data quality are stated; the analysis does not present estimates as certainties.
- Conclusions follow from evidence and tie to the decision at hand.

## Done when

The market is bounded and sized with reconciled methods, competition and trends are mapped, and an opportunity assessment with sources and confidence is ready to inform strategy or finance.

## House style

Run the `natural-prose-editor` pass on narrative and use no em dashes. See `docs/methodology/editorial-style.md`.

## Operating standard

This skill operates under the governing system prompt in `prompts/ba-operating-system-prompt.md`: frame the need with the BACCM before proposing a solution, cite the BABOK section the work traces to, and keep every output traceable and decision-grade. Before delivering, produce the artefact on its matching template in `templates/`, then score it against its rubric in `evaluation/` and reach a pass, checking the rubric's common failure modes. Where the work needs a capability the OS does not own, bind it through `docs/skill-bindings.md`.
