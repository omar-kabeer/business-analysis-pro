---
type: deliverable
domain: business-analysis
status: draft
version: 2.0.0
---

# Current State Assessment

> **How to use this template.** Filled rows and "Example" lines illustrate one scenario so the expected depth is clear. Replace them with the facts of the work at hand: never carry example names, figures, or IDs into a real document, and say plainly when a fact is not yet known. Include every other section by default, and leave one out only when the user asks. Include these sections only when their condition applies or the user asks for them: Root cause analysis (formal governance, or high risk); Capability heat map (written for executive readers, or the Business Architecture perspective); Regulatory and control environment (regulated work). The full rules are in `templates/current-state-assessment.toc.json`.

## Purpose

Understand the business need in the context of the enterprise as it is today, so the change has enough context to define a sensible future state and change strategy. This is the working form of the Analyze Current State task and its output, the Current State Description. Describe only as much of the current state as the change requires; full detail everywhere is rarely needed. Graded by `evaluation/current-state-description-rubric.md`.

This template is a superset. Its table-of-contents manifest, `templates/current-state-assessment.toc.json`, marks which sections are core, standard, or extended and when each applies.

## Document Control

| Field | Value |
| --- | --- |
| Initiative | Supplier invoice approval |
| Business analyst | Omar Haddad |
| Sponsor | Finance Director |
| Version | 1.1.0 |
| Status | Draft for sponsor review |
| Last updated | 2026-05-20 |

## Scope

State which part of the enterprise this assessment describes and why that boundary is enough for the change. Name what is deliberately left out.

| In scope | Out of scope | Reason |
| --- | --- | --- |
| UK accounts payable: invoice receipt, matching, approval, and ERP posting | Payroll, expenses, and EU entities | Not affected by the need; EU follows in a later phase |

## Inputs

List the evidence the assessment rests on, so each claim can be checked: confirmed elicitation results, process documentation, system reports, performance data, policies, and the organisational strategy.

| ID | Input | Source | Date |
| --- | --- | --- | --- |
| IN-001 | AP process walkthrough with four clerks | Observation session | 2026-05-06 |
| IN-002 | Invoice cycle-time report, January to April | ERP workflow log | 2026-05-08 |

## Business need

State the problem or opportunity from the enterprise perspective rather than any single stakeholder's. Question any presumed solution buried in the statement so the real problem is solved, and quantify the impact.

| Item | Detail |
| --- | --- |
| Business need | Supplier invoices take too long to approve, so suppliers are paid late and early-payment discounts are lost |
| How it was triggered | Bottom-up: AP team escalation after two key suppliers put the account on hold |
| Adverse impact today | Average approval time 14 days; 38 percent of invoices paid after terms; about 60,000 pounds a year in lost discounts |
| Cost of doing nothing | Discount loss grows with volume; supplier hold risk on critical parts |
| Root cause | Approvals routed by email with no rule for who approves what; exceptions chased by hand |

## Capabilities and processes

List the capabilities and the processes that deliver them today, with a sense of how well each performs and where it hurts.

| ID | Capability or process | What it does today | Performance and pain points | Evidence |
| --- | --- | --- | --- | --- |
| CAP-001 | Invoice approval | Clerk emails the budget holder, who replies to approve | 14-day average; approvals lost in inboxes | IN-002 |
| CAP-002 | Exception handling | Clerk investigates failed matches by phone and email | 6 days per exception; 22 percent of invoices fail matching | IN-001 |

## Organisational structure and culture

Describe the formal reporting lines and the cultural factors (values, attitudes, ways of working) that could aid or limit the change.

Example: AP reports to the Financial Controller; budget holders sit in 12 departments and see approvals as an interruption. The AP team is keen for change; approvers are indifferent.

## Technology and infrastructure

Summarise the systems, data, and infrastructure that support the current state, with their known limits.

| System | Role today | Limitation |
| --- | --- | --- |
| ERP (finance module) | Holds POs, receipts, and invoices; runs matching | No approval workflow; match reasons not shown to users |

## Policies and business rules

Record the policies, rules, and standards that govern how work is done today and that a solution must respect or change.

| ID | Policy or rule | Source | Must the solution keep it? |
| --- | --- | --- | --- |
| BR-012 | Invoices within 2 percent of PO price match automatically | Finance policy FIN-POL-03 | Yes |

## Business architecture

Describe how the parts above fit together: value streams, information flows, and the relationships among capabilities, processes, and systems.

Example: the procure-to-pay value stream runs purchasing (ERP) to receipt (warehouse scanner) to invoice (post room scanning, then ERP) to approval (email) to payment (ERP run on Tuesdays). The break is between invoice and approval.

## Internal assets

Record what the enterprise can draw on: people, knowledge, money, systems, and intangible assets such as supplier goodwill.

Example: an experienced AP team, an ERP licence that includes an unused workflow module, and good relationships with most top-50 suppliers.

## External influencers

Scan the environment that shapes the current state. A PESTLE lens helps coverage; record only influencers that matter to the need.

| Influencer | Current effect on the enterprise |
| --- | --- |
| Legal (prompt payment reporting) | Payment performance is published twice a year; late payment is visible to customers |
| Industry and suppliers | Suppliers increasingly expect status self-service |

## Current performance baseline

Give the measures the future state will be compared with, with the period and source for each.

| Measure | Current value | Period | Source |
| --- | --- | --- | --- |
| Average approval time | 14 days | January to April 2026 | IN-002 |
| Invoices paid within terms | 62 percent | January to April 2026 | ERP payment report |

## Current state description

Summarise the above into a short statement of where the enterprise is today and why the need matters now. This is the baseline for future-state definition and gap analysis.

Example: UK AP matches invoices well but approves them slowly, because approval sits outside any system. The ERP already holds the data needed to route approvals, so the gap is workflow and visibility, not data.

## Assumptions

Record what the assessment takes as true, each with the effect if it proves wrong and who can confirm it.

| ID | Assumption | Effect if wrong | Confirm with |
| --- | --- | --- | --- |
| A-001 | The four clerks observed are typical of the team of nine | Pain points may be overstated or missed | AP manager |

## Risks

Risks the assessment itself carries. Anchoring on the current design can entrench today's solution; keep the need at the centre so the future state stays open.

| Risk | Response | Owner |
| --- | --- | --- |
| Documented process differs from practice | Observe work rather than rely on the procedure manual | Omar Haddad |

## Root cause analysis

Where the cause of the need is disputed or not obvious, show the analysis (fishbone, five whys, or a problem tree) that leads to the root cause stated above.

| Symptom | Why | Why | Root cause |
| --- | --- | --- | --- |
| Approvals take 14 days | Approvers miss emails | No reminder or escalation | Approval sits outside any system with rules |

## Capability heat map

For enterprise or portfolio audiences, rate each relevant capability for performance and strategic importance so investment can be targeted.

| Capability | Performance (low, medium, high) | Strategic importance | Investment signal |
| --- | --- | --- | --- |
| Invoice approval | Low | High | Invest |

## Regulatory and control environment

For regulated work, list the controls and obligations that apply to the current state, how they are evidenced today, and any known findings.

| Obligation or control | How evidenced today | Open findings |
| --- | --- | --- |
| Segregation of duties (FIN-POL-07) | Manual sample check each quarter | Audit finding AF-2025-04: approvals not always by budget holder |

## Outputs

A current state description with a measured baseline, stated business need and root cause, and the constraints the future state must respect, ready for Define Future State (6.2) and gap analysis.

## Review criteria

- The business need is stated from the enterprise perspective, its impact is quantified, and the root cause is explored.
- Scope is limited to what the change requires, and exclusions are stated.
- Capabilities and processes are described with their performance and pain points.
- Structure, culture, technology, policies, and external influences are covered to the depth the change needs.
- A performance baseline gives measures, periods, and sources.
- Claims cite evidence or are recorded as assumptions.
- The description gives a clear baseline for future-state work without prescribing a solution.

## Practice anchor

Analyze Current State (6.1); Business Capability Analysis (10.6); Process Analysis (10.34); Root Cause Analysis (10.40); PESTLE within Analyze Current State. Owned by the strategy skill.

## House style

Write the narrative with the natural-prose-editor pass and no em dashes. See `docs/methodology/editorial-style.md`.
