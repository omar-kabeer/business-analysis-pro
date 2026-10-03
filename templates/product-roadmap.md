---
type: deliverable
domain: product-management
status: draft
version: 2.0.0
---

# Product Roadmap

> **How to use this template.** Filled rows and "Example" lines illustrate one scenario so the expected depth is clear. Replace them with the facts of the work at hand: never carry example names, figures, or IDs into a real document, and say plainly when a fact is not yet known. Include every other section by default, and leave one out only when the user asks. Include these sections only when their condition applies or the user asks for them: Change log (formal governance, or written for executive readers or customers); Portfolio view (written for executive readers). The full rules are in `templates/product-roadmap.toc.json`.

## Purpose

Communicate product direction as outcomes over time, not a dated list of features. A now, next, later roadmap sets expectations about what the team is working toward and how confident it is, and adapts as discovery changes the evidence. Based on the Agile Perspective, Define Change Strategy (6.4), and Prioritization (10.33). Graded by `evaluation/product-roadmap-rubric.md`.

This template is a superset. Its table-of-contents manifest, `templates/product-roadmap.toc.json`, marks which sections are core, standard, or extended and when each applies.

## Document Control

| Field | Value |
| --- | --- |
| Product | Supplier payment status portal |
| Product manager | Maya Okafor |
| Version | 1.2.0 |
| Status | Published |
| Last updated | 2026-07-20 |

## Scope

State which product and time horizon the roadmap covers.

Example: the supplier-facing portal, 18 months. AP internal tooling has its own roadmap.

## Inputs

List what the roadmap rests on: the product vision, business objectives, discovery evidence, team capacity, and dependencies.

Example: product vision brief 1.1.0; opportunity solution tree 1.3.0; team of four engineers.

## Vision link

State the vision and strategy the roadmap serves, so every theme can be checked against it.

Example: vision "suppliers never have to ask when they will be paid"; pillars: accurate status, no login friction.

## Principles

- Lead with outcomes and problems, not solutions.
- Communicate confidence, not false date precision; near-term items are more certain than later ones.
- Revisit the roadmap when discovery, data, or priorities change.

## Roadmap

Each item names the outcome it serves and how confident the team is.

| Horizon | Theme | Outcome (metric) | Problem or opportunity | Confidence | Status |
| --- | --- | --- | --- | --- | --- |
| Now (to Q4 2026) | Status visibility | Self-service status answers: 0 to 30 percent | OPP-001, OPP-002 | High | In progress |
| Next (H1 2027) | Proactive notices | Status calls: 150 to 90 a week | OPP-002 | Medium | Planned |
| Later (H2 2027) | Disputes | Dispute resolution time: 20 to 10 days | OPP-004 | Low | Under consideration |

## Sequencing rationale

Explain why the themes come in this order: value, dependency, and learning.

Example: notices need the status API built in Now; disputes wait for evidence that self-service is trusted.

## Dependencies

Show what each theme depends on, with the owner and the date it is needed.

| Theme | Depends on | Owner | Needed by |
| --- | --- | --- | --- |
| Status visibility | ERP status API (DEP-001) | Tom Reyes | 2026-08-15 |

## Capacity check

Show that Now and Next fit the team's capacity.

| Horizon | Estimated effort | Capacity | Fit |
| --- | --- | --- | --- |
| Now | 8 team weeks | 10 team weeks | Yes |

## Not on the roadmap

State what the team has decided not to do for now, and why.

| Item | Reason |
| --- | --- |
| Supplier invoice submission | Owned by the e-invoicing programme |

## Review cadence

State how often the roadmap is reviewed and what triggers an off-cycle change.

Example: monthly with the sponsor; off-cycle when an experiment disproves a theme's assumption.

## Assumptions

What the document takes as true, each with the effect if it proves wrong.

| ID | Assumption | Effect if wrong |
| --- | --- | --- |
| A-151 | Self-service use grows once suppliers see it in remittance emails | Next theme moves to onboarding |

## Risks

Risks to this work, each with a response and an owner.

| Risk | Response | Owner |
| --- | --- | --- |
| Stakeholders read Later as a commitment | Label confidence on every item; never show dates for Later | Maya Okafor |

## Change log

For roadmaps shared widely, record what changed since the last version and why.

| Date | Change | Reason |
| --- | --- | --- |
| 2026-07-20 | Disputes moved from Next to Later | EXP-006: few suppliers raise disputes online |

## Portfolio view

For executive audiences, show how this roadmap lines up with other products' roadmaps and the objectives they share.

| Objective | This product | Other products |
| --- | --- | --- |
| OBJ-002 paid on terms | Status visibility | AP workflow release 1 |

## Outputs

A published roadmap that aligns stakeholders on outcomes, sequence, and confidence, and that the team revisits as evidence changes.

## Review criteria

- The roadmap is organised around outcomes or themes.
- Horizons are clear, even if approximate.
- The sequence is justified by value and dependency.
- Key dependencies are shown.
- Themes align with the vision and strategy.
- Near-term horizons fit capacity.
- The roadmap is framed to adapt as learning occurs.

## Practice anchor

Agile Perspective (11.1); Define Change Strategy (6.4); Prioritization (10.33); Backlog Management (10.2). Owned by the product-manager skill; see `skills/product-manager/references/product-discovery.md`.

## House style

Write the narrative with the natural-prose-editor pass and no em dashes. See `docs/methodology/editorial-style.md`.
