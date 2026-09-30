---
type: deliverable
domain: product
status: draft
version: 2.0.0
---

# Product Vision Brief

## Purpose

State why the product exists, who it serves, the outcome it targets, and how it wins, on a page or two that aligns the team and stakeholders. The vision is outcome-first and durable: it guides strategy and the roadmap without prescribing features. At discovery stage much of it is hypothesis, and the brief must say so. Graded by `evaluation/product-vision-brief-rubric.md`.

This template is a superset. Its table-of-contents manifest, `templates/product-vision-brief.toc.json`, marks which sections are core, standard, or extended and when each applies.

## Document Control

| Field | Value |
| --- | --- |
| Product | Supplier payment status portal |
| Product manager | Maya Okafor |
| Version | 1.1.0 |
| Status | Draft for sponsor review |
| Last updated | 2026-06-18 |

## Scope

State which product or initiative the brief covers, the time horizon it looks across, and what it deliberately leaves to other documents (for example detailed requirements in the PRD, sequencing in the roadmap).

Example: the supplier-facing status portal for the UK entity, across a 12 to 18 month horizon. Pricing and internal AP tooling are out of scope.

## Inputs

List what the brief is built from: discovery interviews, experiment results, support and call data, market research, the business strategy, and any existing product strategy. Cite each input so a reader can check the claims.

## Vision

One or two sentences describing the future the product works toward and the change it makes for customers. Describe an outcome, not a feature list.

Example: suppliers never have to ask when they will be paid.

## Target customer and job to be done

Name the primary customer precisely enough to find ten of them, and state the job in their words. Mark what is evidenced and what is still uncertain.

| Item | Detail |
| --- | --- |
| Primary customer or segment | Small and mid-size suppliers of a UK manufacturer |
| Job to be done | When an invoice is outstanding, I want to know its status and expected payment date, so I can plan cash flow without chasing |
| Evidence | 12 supplier interviews (May 2026); AP call log, March to May |
| Uncertainty | Whether large suppliers share the same job is unconfirmed |

## Current alternative and its shortfall

Describe what customers do today and why it falls short, in their terms.

| Alternative | Shortfall | Evidence |
| --- | --- | --- |
| Phone or email AP | Replies take 2 days on average; 40 percent of AP calls are status queries | AP call log |

## Value proposition

What value the product delivers and why it is different from the alternatives. Tie it to the customer's job, pains, and gains, and to the value for the business.

## North-star metric and supporting signals

Name the single measure that best captures the value customers receive, plus a few input signals that lead it. Mark any baseline or target that is proposed rather than measured.

| Metric | Definition | Baseline | Target | Status |
| --- | --- | --- | --- | --- |
| North star | Share of status queries answered by self-service | 0 percent | 60 percent within 12 months | Target proposed |
| Supporting signal | AP status calls per week | 210 | 90 | Baseline measured |

## Strategic pillars

The two to four durable bets the strategy rests on. Each pillar explains how it advances the vision.

| Pillar | Why it matters | How it advances the vision |
| --- | --- | --- |
| Accurate status from the ERP | A wrong date is worse than none | Suppliers trust the answer, so they stop calling |
| No login friction for suppliers | Small suppliers will not manage another account | Self-service is used by the suppliers who call most |

## Horizon outlook

A brief now, next, later view of how the product evolves toward the vision, at the level of outcomes rather than features.

| Horizon | Outcome |
| --- | --- |
| Now (0 to 6 months) | Top 200 suppliers can see status and payment date |
| Next | All suppliers, plus proactive payment notices |
| Later | Dispute submission and resolution |

## What we are not doing

State the deliberate exclusions that keep the product focused, each with the reason.

| Exclusion | Reason |
| --- | --- |
| Supplier invoice submission | Separate e-invoicing programme owns it |

## Assumptions and evidence

Separate what is known from what is believed. For each assumption, say how it will be tested.

| ID | Assumption | Type | Evidence so far | How it will be tested |
| --- | --- | --- | --- | --- |
| ASM-02 | Suppliers will use self-service if it exists | Value | EXP-003: 31 percent click-through | Pilot usage in the first 60 days |
| ASM-05 | ERP payment run dates are reliable enough to publish | Feasibility | Treasury says usually | Compare 8 weeks of forecast and actual dates |

## Risks

The risks to the vision: to its value, usability, feasibility, or viability. Name the owner and the response.

| Risk | Type | Response | Owner |
| --- | --- | --- | --- |
| Published dates prove wrong and trust drops | Feasibility | Publish a date range until accuracy is proven | Treasury lead |

## Competitive and market context

For a leadership or investment audience, summarise how comparable products and services answer the same job, and where this product is different.

| Alternative or competitor | How it answers the job | Our difference |
| --- | --- | --- |
| Supplier portals in AP suites | Status only after supplier login | No login; status links in every remittance |

## Business model and viability

For a funding decision, state how the product creates value for the business: cost avoided, revenue, or strategic position, and the investment it needs.

| Item | Detail |
| --- | --- |
| Value to the business | About 1.5 AP staff days a week released from status calls |
| Investment | Two engineers for two quarters |

## Alignment and sign-off

For formally governed work, record who has reviewed and endorsed the vision.

| Name | Role | Decision | Date |
| --- | --- | --- | --- |
| Finance Director | Sponsor | Endorsed with changes | 2026-06-20 |

## Outputs

An agreed vision that the product strategy, roadmap, and discovery backlog trace back to, and a list of assumptions to test next.

## Review criteria

- The vision describes a durable outcome and prescribes no features.
- The customer, situation, motivation, and desired outcome are clear, with uncertainty labelled.
- The current alternative and its shortfall connect to the value proposition.
- One north-star metric and supporting signals are defined; proposed baselines and targets are marked.
- Two to four pillars explain how the vision will be reached.
- Non-goals are explicit and reasoned.
- Assumptions are separated from evidence; no finding or metric is invented.
- The sections support one another without contradiction.

## BABOK anchor

Define Future State (6.2); Analyze Potential Value and Recommend Solution (7.6); the Agile Perspective (11.1); Business Model Canvas (10.8). Owned by the product-manager skill; see `skills/product-manager/references/product-discovery.md`.

## House style

Write the narrative with the natural-prose-editor pass and no em dashes. See `docs/methodology/editorial-style.md`.
