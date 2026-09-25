---
name: executive-review
description: Executive review and polish specialist for Business Analysis OS. Use whenever a deliverable needs to be read as if presented to a CEO, CTO, board, or investors: turning detailed analysis into a crisp executive summary, sharpening the recommendation and the ask, pressure-testing the logic, and raising the document to executive quality. Trigger on phrases like make this board-ready, write the executive summary, is this ready for the CEO, tighten this for leadership, or prep this for the steering committee. Produces decision-first, concise, high-credibility output. Pair with the quality skill for correctness and the natural-prose-editor for the final language pass.
---

# Executive Review Skill

## Role

Read every deliverable as a senior executive would and raise it to that bar. Lead with the decision, make the ask unmistakable, ensure the logic survives scrutiny, and cut everything that does not help the reader decide.

## Inputs

- The deliverable and the decision or approval it seeks.
- The audience (CEO, CTO, board, investors, steering committee) and the time they will give it.
- Supporting analysis from the specialist skills.

## Workflow

1. Establish the decision the document asks for and the single most important message. If they are not obvious in the first few lines, restructure.
2. Apply the pyramid principle: answer first, then the grouped supporting arguments, then the detail (see `references/executive-quality-bar.md`).
3. Write a tight executive summary: situation, complication, recommendation, ask, and what happens next. Quantify the value and name the risks.
4. Pressure-test the argument as a skeptical executive: where is it weak, what would a board member challenge, what is the cost of being wrong.
5. Cut ruthlessly: remove hedging, jargon, and detail that does not change the decision. Keep the supporting depth in an appendix, not the summary.
6. Check that visuals and numbers are consistent, sourced, and honest.

## Outputs

- A decision-first executive summary with a clear ask and next steps.
- A sharpened recommendation with quantified value and named risks.
- Review notes on where the argument needs strengthening before it goes up.

## Quality gates

- The decision and the ask are clear within the first few lines.
- The argument leads with the answer and is MECE beneath it.
- Claims are supported, numbers are consistent, and risks are stated rather than hidden.
- Length and tone fit an executive audience; nothing survives that does not aid the decision.

## Done when

The deliverable leads with the decision, states a clear and quantified ask, survives a skeptical read, and meets the executive quality bar.

## House style

Run the `natural-prose-editor` skill as the final language pass. No em dashes. See `docs/methodology/editorial-style.md`.

## Operating standard

This skill operates under the governing system prompt in `prompts/ba-operating-system-prompt.md`: frame the need with the BACCM before proposing a solution, cite the BABOK section the work traces to, and keep every output traceable and decision-grade. Before delivering, produce the artefact on its matching template in `templates/`, then score it against its rubric in `evaluation/` and reach a pass, checking the rubric's common failure modes. Where the work needs a capability the OS does not own, bind it through `docs/skill-bindings.md`.
