---
type: deliverable
domain: ux
status: draft
version: 2.0.0
---

# Customer Journey Map

> **How to use this template.** Filled rows and "Example" lines illustrate one scenario so the expected depth is clear. Replace them with the facts of the work at hand: never carry example names, figures, or IDs into a real document, and say plainly when a fact is not yet known. Include every other section by default, and leave one out only when the user asks. Include these sections only when their condition applies or the user asks for them: Back-stage view (the Business Process Management perspective); Future-state journey (adaptive or hybrid approach); Journey metrics (the Business Intelligence perspective). The full rules are in `templates/journey-map.toc.json`.

## Purpose

Map a customer's experience across the stages of a task or relationship, from their point of view, to expose where it breaks and where the opportunities are. Use a current-state map to understand and a future-state map to design. Grounded in Stakeholder List, Map, or Personas (10.43), Process Analysis (10.34), and the UX artefacts reference. Graded by `evaluation/customer-journey-map-rubric.md`.

This template is a superset. Its table-of-contents manifest, `templates/journey-map.toc.json`, marks which sections are core, standard, or extended and when each applies.

## Document Control

| Field | Value |
| --- | --- |
| Persona or segment | Small supplier finance contact (persona PER-002) |
| Journey | From sending an invoice to receiving payment |
| State | Current state |
| Owner | Leah Brown, UX lead |
| Version | 1.0.0 |
| Status | Validated with suppliers |

## Scope

State where the journey starts and ends and which channels it covers, so the map is complete within its frame.

Example: from the supplier sending an invoice to the payment arriving in their bank. Channels: email, phone, and remittance advice. Contract negotiation is out of scope.

## Inputs

List the research the map rests on, so emotions and pains can be traced to evidence.

| ID | Source | Date |
| --- | --- | --- |
| RES-001 | 12 supplier interviews | May 2026 |
| RES-002 | AP call log, 2,600 status calls | March to May 2026 |

## Persona summary

State who this journey is for: their goal, context, and the pains that matter here.

Example: PER-002 runs finance for a 20-person supplier, alone. Goal: know when money will arrive so payroll is safe. Pain: no visibility after the invoice is sent.

## Journey stages

For each stage, capture what the customer does, the touchpoint, what they think and feel, the pain points, and the evidence.

| Stage | Customer actions | Touchpoints | Thoughts | Emotion (1 low to 5 high) | Pain points | Evidence |
| --- | --- | --- | --- | --- | --- | --- |
| Send invoice | Emails PDF to AP inbox | Email | "Did it arrive?" | 3 | No acknowledgement | RES-001 (9 of 12) |
| Wait | Checks bank daily | Bank | "Is it approved yet?" | 2 | No status anywhere | RES-001 |
| Chase | Phones AP | Phone | "I'm wasting a morning" | 1 | 2-day callback; answer often "don't know" | RES-002 |
| Get paid | Receives remittance | Email | "Which invoices is this for?" | 3 | Remittance lacks invoice numbers | RES-001 (5 of 12) |

## Moments that matter

Name the few moments that most shape the experience: first impression, a decision point, or a failure and recovery. Say what good looks like at each.

| Moment | Why it matters | What good looks like |
| --- | --- | --- |
| Chase call | The lowest point and the biggest cost for both sides | The supplier never needs to call |

## Opportunities

Draw out specific opportunities, prioritised, and say where each hands off.

| ID | Opportunity | Stage | Priority | Hands off to |
| --- | --- | --- | --- | --- |
| OPP-001 | Show invoice status and expected payment date without login | Wait | High | Product: portal PRD |
| OPP-002 | Acknowledge every invoice on receipt | Send invoice | Medium | AP process owner |

## Assumptions

Record what the map takes as true where evidence is thin, labelled so it is not read as research.

| ID | Assumption | Effect if wrong | How to test |
| --- | --- | --- | --- |
| A-051 | Large suppliers share this journey | Map may not apply to top-20 suppliers | Four interviews with large suppliers |

## Risks

Risks that the map misleads.

| Risk | Response | Owner |
| --- | --- | --- |
| Map is read as the whole supplier base | State the segment on every page | Leah Brown |

## Back-stage view

For service design, show the internal actions and systems behind each stage, so fixes reach the cause.

| Stage | Back-stage action | System | Owner |
| --- | --- | --- | --- |
| Wait | Budget holder approves by email | Email | Budget holders |

## Future-state journey

When designing, map the intended journey with target emotions and the change that delivers each.

| Stage | Future experience | Target emotion | Enabled by |
| --- | --- | --- | --- |
| Wait | Checks status link in the acknowledgement email | 4 | OPP-001 |

## Journey metrics

For measured journeys, give the metric at each stage, with baseline and target.

| Stage | Metric | Baseline | Target |
| --- | --- | --- | --- |
| Chase | Status calls per week | 210 | 90 |

## Outputs

A validated journey map with evidence for each stage, the moments that matter, and prioritised opportunities handed to requirements, product, or process owners.

## Review criteria

- Stages cover the journey end to end from the customer's view.
- Touchpoints are complete for each stage.
- Actions and goals are captured at each stage.
- Emotions and pains are backed by evidence; assumptions are labelled.
- Moments that matter and drop-off points are identified.
- Opportunities are specific, prioritised, and handed off.
- The map is grounded in research, not assumption.

## Practice anchor

Stakeholder List, Map, or Personas (10.43); Process Analysis (10.34); Observation (10.31); Analyze Current State (6.1). Owned by the ux skill; see `skills/ux/references/ux-artifacts.md`.

## House style

Write the narrative with the natural-prose-editor pass and no em dashes. See `docs/methodology/editorial-style.md`.
