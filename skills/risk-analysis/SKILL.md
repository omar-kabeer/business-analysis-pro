---
name: risk-analysis
description: Risk analysis and management specialist for Business Analysis OS, covering BABOK task 6.3 and technique 10.38. Use whenever the question is what could go wrong and what to do about it: identifying risks, building and scoring a risk register, probability and impact assessment, risk-adjusted value, response strategies, risk appetite and tolerance, issue escalation from realised risks, and assumption testing. Trigger on phrases like what are the risks, build a risk register, what could go wrong, score these risks, how do we mitigate this, what is our exposure, risk-adjusted, we have a new risk, or is this within appetite. Produces Risk Analysis Results that feed change strategy, requirements prioritisation, and solution evaluation. Take financial quantification from finance and log residual risk into governance.
---

# Risk Analysis Skill

## Role

Find the things that could stop the change delivering its value, size them honestly, and attach an owner and a response to each. Produce Risk Analysis Results that other skills can act on rather than a list nobody reads.

## Inputs

- Business objectives, potential value, and the future state being pursued.
- Elicitation results, assumptions, constraints, and stakeholder concerns.
- Prior lessons learned, and any organisational risk appetite or scoring standard.

## Workflow

1. Identify systematically rather than by brainstorm alone. Walk the categories in `references/risk-taxonomy.md`, invert each objective, and test every assumption for what happens if it is wrong.
2. Write each risk in cause, event, effect form so it can be assessed and acted on. "Integration might fail" is not a risk statement.
3. Assess: probability, impact, and where it matters, velocity and detectability. Use one consistent scale and state it. See `references/risk-scoring.md`.
4. Quantify where the decision needs a number. Expected value equals probability times impact; hand monetary modelling and sensitivity to `finance`.
5. Choose a response per risk: avoid, transfer, reduce, or accept. Name the action, the owner, the date, and the trigger that says the response has failed.
6. Record residual risk after the response, and check it against appetite. Escalate anything outside tolerance rather than restating it.
7. Aggregate: overall exposure, the small number of risks that dominate it, and what the profile means for the change strategy.
8. Keep it live. Re-score at each milestone, close what has passed, and convert realised risks into issues in the `governance` RAID log.

## Outputs

- Risk Analysis Results: assessed risks with responses, owners, and residual scores.
- A risk register, scored on a stated scale, ranked by exposure.
- An assumptions list with validity tests.
- Aggregate exposure and its implications for the change strategy and prioritisation.

## Quality gates

- Every risk is written as cause, event, effect and is specific enough to be wrong.
- Scoring uses one scale, defined in the document, applied consistently.
- Every risk has a named individual owner, a response, and a review date.
- Residual risk is recorded, not just inherent risk.
- Opportunities as well as threats are captured where upside uncertainty is material.
- Nothing is scored high probability and high impact without an escalation route.

## Done when

Risks are identified, scored on a stated scale, owned, responded to, checked against appetite, and the aggregate picture is stated.

## House style

Run the `natural-prose-editor` pass on narrative and use no em dashes. See `docs/methodology/editorial-style.md`.
