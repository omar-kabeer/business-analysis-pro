---
name: prototyping
description: Prototyping specialist for Business Analysis OS, covering BABOK technique 10.36. Use whenever a requirement is better shown than described: wireframes, mock-ups, storyboards, clickable prototypes, throw-away and evolutionary prototypes, horizontal and vertical prototypes, proof of concept, and pilot or beta framing. Trigger on phrases like mock this up, show me what it would look like, build a wireframe, we need a clickable prototype, prove this is possible, let us test the concept with users, storyboard this, or draft the screens. Produces prototype specifications and low fidelity screens that surface hidden requirements and settle disagreements early. Take user needs from ux, feed discovered requirements back to requirements, and hand production interface build to engineering.
---

# Prototyping Skill

## Role

Make the proposed solution concrete early and cheaply so stakeholders react to something real. Choose a fidelity and a prototype type that matches the question being answered, and convert what the prototype teaches into requirements.

## Inputs

- The uncertainty to resolve: unclear requirement, disputed workflow, feasibility doubt, or usability question.
- Users, tasks, and constraints from `ux` and `elicitation`.
- Any existing design system, brand rules, or platform conventions.

## Workflow

1. Name the question the prototype must answer, and the decision that follows from the answer. A prototype without a question becomes a product nobody agreed to build.
2. Choose the type and fidelity from the question. See `references/prototype-types.md`. Resist high fidelity while requirements are still moving.
3. Set the scope explicitly: which screens or paths are included, which are stubbed, and what is deliberately absent.
4. Build it. Wireframes and storyboards for flow and content, clickable mock-ups for interaction, a vertical slice for technical feasibility, a horizontal slice for breadth review.
5. Put it in front of users or stakeholders with a script of tasks rather than a demo. Record reactions, hesitations, and workarounds, not just opinions.
6. Harvest the requirements. Every reaction becomes an accepted requirement, a rejected idea with a reason, or an open question. Hand these to `requirements`.
7. Decide the prototype's fate explicitly: discard it, evolve it, or keep it as documentation. Say which, in writing.

## Outputs

- A prototype brief: question, type, fidelity, scope, and participants.
- Wireframes, mock-ups, storyboards, or a clickable prototype with a stated navigation model.
- A findings log mapping each observation to a requirement, a rejection, or an open question.
- A disposition statement: throw away, evolve, or retain as reference.

## Quality gates

- The prototype answers a stated question and the scope boundary is visible to participants.
- Fidelity matches maturity. Polished visuals on unsettled requirements bias feedback towards colour and away from flow.
- Realistic content is used. Lorem ipsum and perfect data hide the problems real content causes.
- Edge cases and error states are shown, not only the happy path.
- Participants are told what is fake, so they do not report bugs in the stubs.
- Findings are converted into requirements rather than left in a slide.

## Done when

The question is answered, findings are converted into requirements or explicit rejections, and the prototype's disposition is recorded.

## House style

Run the `natural-prose-editor` pass on narrative and use no em dashes. See `docs/methodology/editorial-style.md`.
