# Risk Taxonomy and Identification Reference

## Categories to walk

Brainstorming alone finds the risks the room already fears. Walking categories finds the rest.

| Category | Prompts |
| --- | --- |
| Strategic | Wrong problem, shifting priorities, sponsor change, competitor move, benefit does not materialise |
| Stakeholder | Non-availability, conflicting objectives, resistance, unclear decision rights, key person dependency |
| Requirements | Volatility, ambiguity, gold plating, missing non-functional needs, scope creep |
| Solution and technical | Feasibility, integration, performance under load, data migration, technical debt, vendor lock-in |
| Data | Quality, availability, ownership, privacy, migration fidelity, reconciliation |
| Delivery | Estimation error, dependency slippage, resource contention, skills gap, team turnover |
| Operational | Readiness, training, support model, process change absorption, business continuity during cutover |
| Financial | Cost overrun, funding withdrawal, currency, benefit timing |
| Regulatory and legal | Rule change, non-compliance, contractual exposure, audit finding |
| External | Supplier failure, market shift, macro conditions, force majeure |

## Identification techniques

- Assumption inversion: list every assumption, ask what happens if it is false. This is the highest-yield technique and the most neglected.
- Objective inversion: for each business objective, ask what would prevent it.
- Pre-mortem: assume the initiative failed twelve months from now, and write the story of why.
- Lessons learned review: what went wrong on comparable work here before.
- Interface walk: every handoff between teams, systems, or organisations is a risk site.
- Constraint review: every constraint is a risk if it tightens.

## Writing a risk statement

Cause, event, effect:

> Because the payments vendor has not committed to a test environment date (cause), integration testing may start later than planned (event), which would push go-live past the regulatory deadline and expose the firm to penalty (effect).

Tests for a usable statement:

- Could a reasonable person disagree that this might happen? If not, it is a fact or an issue, not a risk.
- Has it already happened? Then it is an issue. Send it to the `governance` RAID log.
- Is the effect stated in terms someone senior cares about? Cost, time, value, reputation, compliance.
- Is it specific enough that you could tell whether it occurred?

## Risks, issues, assumptions, dependencies

- Risk: might happen, has a probability.
- Issue: has happened, needs action now.
- Assumption: taken as true without proof; each one is a risk in waiting.
- Dependency: reliance on someone else; each one is a risk site with a named counterparty.

`risk-analysis` owns risks and assumption testing. `governance` owns the RAID log as the running record, including issues and dependencies. Keep one register, not two.

## Opportunities

Uncertainty runs both ways. Capture upside with the same discipline and the same responses inverted: exploit, share, enhance, accept. Initiatives that record only threats systematically under-invest in the cheap upside.
