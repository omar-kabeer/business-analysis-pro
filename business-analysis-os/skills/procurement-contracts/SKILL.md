---
name: procurement-contracts
description: Procurement and contract artefact specialist for Business Analysis OS. Use whenever the relationship with a supplier needs to be written down: statements of work, service level agreements and service credits, requests for quote and requests for tender, deliverable and acceptance schedules, pricing and payment structures, exit and transition terms, and translating requirements into contractual obligations a supplier can be held to. Trigger on phrases like draft the SOW, what should the SLA say, define the service levels, put this in the contract, acceptance criteria for the vendor, RFQ or RFT, what happens if they miss, or how do we exit this contract. Produces contract-ready schedules and obligation language from analysis output. It structures commercial artefacts and is not legal advice; take vendor selection from vendor-evaluation, cost modelling from finance, and legal review from qualified counsel.
---

# Procurement and Contracts Skill

## Role

Turn what the business needs into obligations a supplier can be measured against. Own the artefacts that sit between selection and delivery: the statement of work, the service levels, the acceptance schedule, and the terms that govern change and exit.

## Inputs

- Selected supplier and the evaluation basis from `vendor-evaluation`.
- Requirements, acceptance criteria, and non-functional needs.
- Commercial constraints: budget, term, approval thresholds, and the organisation's standard terms.

## Workflow

1. Establish the engagement model: fixed price, time and materials, capped time and materials, outcome-based, or managed service. The model determines where risk sits and how everything else is written. See `references/contract-artefacts.md`.
2. Write the statement of work: scope, deliverables, acceptance criteria per deliverable, milestones, assumptions, dependencies on the buyer, and explicit exclusions.
3. Define service levels only where they change behaviour: the measure, the target, the measurement method, the reporting cadence, exclusions, and the consequence of a miss.
4. Set acceptance: who accepts, against what criteria, within what period, what happens on rejection, and what deemed acceptance means if the buyer stays silent.
5. Structure pricing and payment: rates or fixed sums, what triggers each payment, retention, and how change is priced.
6. Write change and exit: how variations are agreed and priced, notice periods, termination rights, transition assistance, data return, and intellectual property on exit.
7. Cross-check obligations against requirements. Every requirement the supplier is responsible for must appear as an obligation, or it will not be delivered.
8. Route to legal and procurement for review before anything is signed, and say plainly what still needs their judgement.

## Outputs

- Statement of work with deliverables, acceptance criteria, and exclusions.
- Service level schedule with measures, targets, measurement method, and remedies.
- Requests for quote or tender where the market is being tested on price or solution.
- Payment and milestone schedule.
- Change, termination, transition, and data return terms.
- A requirement to obligation coverage check.

## Quality gates

- Every deliverable has an acceptance criterion that is objectively testable.
- Every service level states how it is measured, by whom, from what data, and what is excluded.
- Buyer-side dependencies and assumptions are stated. Unstated buyer obligations become supplier defences.
- Exclusions are explicit. What is not in scope is written down, not implied.
- Exit and data return terms exist before signature, not after the relationship sours.
- The output states that it is not legal advice and names the clauses that need counsel.

## Done when

The engagement model is set, the statement of work and service levels are written with testable criteria, change and exit terms exist, requirement coverage is checked, and the package has gone to legal review.

## House style

Run the `natural-prose-editor` pass on narrative and use no em dashes. See `docs/methodology/editorial-style.md`.
