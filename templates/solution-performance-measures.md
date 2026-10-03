---
type: deliverable
domain: solution-evaluation
status: draft
version: 2.0.0
---

# Solution Performance Measures

> **How to use this template.** Filled rows and "Example" lines illustrate one scenario so the expected depth is clear. Replace them with the facts of the work at hand: never carry example names, figures, or IDs into a real document, and say plainly when a fact is not yet known. Include every other section by default, and leave one out only when the user asks. Include these sections only when their condition applies or the user asks for them: Qualitative measures (written for customers, or the Business Intelligence perspective); Enterprise scorecard link (written for executive readers). The full rules are in `templates/solution-performance-measures.toc.json`.

## Purpose

Define the measures and indicators that show how the solution is performing against its goals, with baselines, targets, and practical collection, so performance can be judged on evidence. This is the working form of the Measure Solution Performance task and its output, the Solution Performance Measures. Graded by `evaluation/solution-performance-measures-rubric.md`.

This template is a superset. Its table-of-contents manifest, `templates/solution-performance-measures.toc.json`, marks which sections are core, standard, or extended and when each applies.

## Document Control

| Field | Value |
| --- | --- |
| Initiative | Supplier invoice approval |
| Business analyst | Omar Haddad |
| Measures owner | Financial Controller |
| Version | 1.0.0 |
| Status | Agreed |

## Scope

State which solution, or part of it, the measures cover, and over what period.

Example: the approval workflow in release 1, measured from go-live for 12 months.

## Inputs

List what the measures come from: business objectives, the future state description, the solution scope, and existing enterprise measures.

Example: business objectives OBJ-001 and OBJ-002; future state description 1.0; Finance scorecard FS-2026.

## Measures

Define each measure, what it indicates, and how it links to an objective. Mark which are key performance indicators.

| ID | Measure | Indicates | Objective | KPI |
| --- | --- | --- | --- | --- |
| SPM-001 | Median working days from invoice receipt to approval | Speed of the approval process | OBJ-001 | Yes |
| SPM-002 | Share of invoices paid within terms | Supplier payment performance | OBJ-002 | Yes |
| SPM-003 | Share of approvals made in the tool, not by email | Adoption, which drives SPM-001 | OBJ-001 | No |

## Baselines and targets

Give each measure a baseline, with its source and period, and a target with a date.

| ID | Baseline | Source and period | Target | By |
| --- | --- | --- | --- | --- |
| SPM-001 | 14 days | ERP log, January to April 2026 | 5 days | 2026-12-31 |
| SPM-002 | 62 percent | ERP payment report, January to April 2026 | 95 percent | 2027-03-31 |
| SPM-003 | 0 percent | Not yet in use | 95 percent | 2026-09-30 |

## Validity check

Check that each measure truly reflects performance and cannot be gamed or misread.

| ID | Could it mislead? | Guard |
| --- | --- | --- |
| SPM-001 | Approvers could reject and resubmit to reset the clock | Measure from first receipt, not last routing |

## Collection

State how each measure is collected, how often, by whom, and at what cost.

| ID | Data source | Frequency | Collected by | Effort |
| --- | --- | --- | --- | --- |
| SPM-001 | ERP workflow log, automated report | Weekly | ERP team | None after setup |

## Reporting

State how, when, and to whom the measures are reported, and what triggers action.

| Report | Audience | Frequency | Action trigger |
| --- | --- | --- | --- |
| Approval dashboard | Finance leadership | Weekly | SPM-001 above 7 days for 2 weeks |

## Assumptions

What the document takes as true, each with the effect if it proves wrong.

| ID | Assumption | Effect if wrong |
| --- | --- | --- |
| A-131 | Invoice volume stays within 10 percent of 2025 | Targets may need rebasing |

## Risks

Risks to this work, each with a response and an owner.

| Risk | Response | Owner |
| --- | --- | --- |
| Log data incomplete for invoices approved outside the tool | Report SPM-003 alongside SPM-001 so gaps are visible | ERP team |

## Qualitative measures

Where value is hard to count, record the qualitative evidence to be gathered.

| Measure | Method | Frequency |
| --- | --- | --- |
| Approver satisfaction | Five-question survey | Quarterly |

## Enterprise scorecard link

For executive audiences, show how the measures roll up to the enterprise scorecard.

| Measure | Scorecard perspective | Scorecard measure |
| --- | --- | --- |
| SPM-002 | Customer (supplier) | Supplier on-time payment |

## Outputs

An agreed set of valid, collectable measures with baselines, targets, and reporting, ready for Analyze Performance Measures.

## Review criteria

- The measures reflect the solution's performance.
- They align with the business objectives and enterprise measures.
- Each has a baseline and a target.
- The data can be collected practically.
- Each measure is valid, and gaming or misreading is guarded against.
- KPIs are identified for the strategic goals.
- Reporting audience, frequency, and triggers are defined.

## Practice anchor

Measure Solution Performance; Analyze Performance Measures; Metrics and Key Performance Indicators; Balanced Scorecard. Owned by the solution-evaluation skill.

## House style

Write the narrative with the natural-prose-editor pass and no em dashes. See `docs/methodology/editorial-style.md`.
