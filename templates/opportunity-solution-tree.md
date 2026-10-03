---
type: deliverable
domain: product-management
status: draft
version: 2.0.0
---

# Opportunity Solution Tree

> **How to use this template.** Filled rows and "Example" lines illustrate one scenario so the expected depth is clear. Replace them with the facts of the work at hand: never carry example names, figures, or IDs into a real document, and say plainly when a fact is not yet known. Include every other section by default, and leave one out only when the user asks. Include these sections only when their condition applies or the user asks for them: Opportunity sizing detail (written for executive readers); Outcome alignment (formal governance, or written for executive readers). The full rules are in `templates/opportunity-solution-tree.toc.json`.

## Purpose

Connect a desired outcome to the opportunities that could move it, the solutions that address those opportunities, and the experiments that test the solutions. The tree keeps solutions tied to a real, evidence-based opportunity and to the outcome, so the team explores the problem space before committing to build. This is Teresa Torres' continuous discovery structure, applied within the Agile Perspective and Define Future State (6.2). Graded by `evaluation/opportunity-solution-tree-rubric.md`.

This template is a superset. Its table-of-contents manifest, `templates/opportunity-solution-tree.toc.json`, marks which sections are core, standard, or extended and when each applies.

## Document Control

| Field | Value |
| --- | --- |
| Product or initiative | Supplier payment status portal |
| Product manager | Maya Okafor |
| Version | 1.3.0 |
| Status | Live; updated weekly |
| Last updated | 2026-06-26 |

## Scope

State the product area and the time box the tree covers, and which outcomes belong to other trees.

Example: the supplier status experience for the next two quarters. AP internal tooling has its own tree.

## Inputs

List the discovery evidence behind the opportunities: interviews, support data, analytics, and experiment results.

| ID | Source | Date |
| --- | --- | --- |
| RES-001 | 12 supplier interviews | May 2026 |
| RES-002 | AP call log, 2,600 status calls | March to May 2026 |

## Structure

The tree has four levels. Work top down, and let discovery evidence populate the opportunities.

- Outcome: the measurable result to move (the root).
- Opportunities: unmet needs, pains, and desires uncovered in research (branches).
- Solutions: ideas that address one specific opportunity.
- Experiments: quick tests of the assumptions a solution depends on.

## Desired outcome

State one outcome with its metric, baseline, and target. An outcome is a change in behaviour, not a feature.

| Outcome | Metric | Baseline | Target |
| --- | --- | --- | --- |
| Suppliers answer status questions themselves | Share of status queries answered by self-service | 0 percent | 60 percent by June 2027 |

## Opportunities

Each opportunity is a customer need, pain, or desire, in the customer's terms, with its evidence. Explore several before converging, and size them.

| ID | Opportunity | Evidence | Importance |
| --- | --- | --- | --- |
| OPP-001 | "I don't know whether my invoice arrived" | RES-001 (9 of 12) | High |
| OPP-002 | "I can't plan cash because I don't know when I'll be paid" | RES-001 (10 of 12); RES-002 | High |
| OPP-003 | "I can't match payments to invoices" | RES-001 (5 of 12) | Medium |

## Solutions

Each solution addresses one opportunity. Priority opportunities have more than one candidate, so the team compares options.

| ID | Solution | Addresses | Assumptions (value, usability, feasibility, viability) |
| --- | --- | --- | --- |
| SOL-001 | Status lookup page without login | OPP-001 | Suppliers will use it (value); ERP gives status in real time (feasibility) |
| SOL-002 | Expected payment date on the lookup page | OPP-002 | Dates are accurate enough to trust (feasibility) |
| SOL-003 | Weekly payment forecast email | OPP-002 | Suppliers read the email (value) |

## Experiments

Test the riskiest assumption first with the smallest test that could disprove it. Record the result and what it changed.

| ID | Tests | Assumption | Type | Result | Tree change |
| --- | --- | --- | --- | --- | --- |
| EXP-003 | SOL-001 | Suppliers will use self-service | Fake door link in remittance email | 31 percent click-through | SOL-001 kept |
| EXP-004 | SOL-002 | Dates are accurate enough | Compare 8 weeks of forecast and actual dates | 91 percent within 1 day | SOL-002 kept, shown as a range |

## Learning log

Record what each round of evidence changed in the tree, including solutions and opportunities dropped.

| Date | Change | Because |
| --- | --- | --- |
| 2026-06-19 | SOL-003 parked | EXP-005: 8 percent of suppliers opened the forecast email |

## Assumptions

Record assumptions about the tree itself, such as whether the outcome is the right one.

| ID | Assumption | Effect if wrong |
| --- | --- | --- |
| A-091 | Self-service answers reduce AP calls one for one | The outcome may not release AP time as expected |

## Risks

Risks to the discovery process.

| Risk | Response | Owner |
| --- | --- | --- |
| Team converges on SOL-001 before testing alternatives | Every high opportunity needs two solutions before build | Maya Okafor |

## Opportunity sizing detail

For investment decisions, show how each opportunity was sized.

| ID | Customers affected | Frequency | Size |
| --- | --- | --- | --- |
| OPP-002 | 1,500 suppliers | Every invoice | Large |

## Outcome alignment

For leadership audiences, show how the tree's outcome ladders to business objectives.

| Tree outcome | Business objective |
| --- | --- |
| Self-service status answers | OBJ-002 paid on terms (supplier trust) |

## Outputs

A current tree whose solutions all trace to an evidenced opportunity and the outcome, with experiment results that show which ideas survived and why.

## Review criteria

- The root is one measurable outcome.
- Opportunities are customer needs with cited evidence.
- Several opportunities are explored and sized.
- Every solution addresses one named opportunity.
- Priority opportunities have more than one solution.
- Each solution's assumptions are explicit.
- The riskiest assumptions have the smallest useful experiment.
- Results update the tree, and dropped ideas are marked.

## Practice anchor

Agile Perspective (11.1); Define Future State (6.2); Prototyping (10.36) and Survey or Questionnaire (10.45) as experiment techniques. Owned by the product-manager skill; see `skills/product-manager/references/product-discovery.md`.

## House style

Write the narrative with the natural-prose-editor pass and no em dashes. See `docs/methodology/editorial-style.md`.
