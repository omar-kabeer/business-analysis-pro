# Risk Scoring and Response Reference

## Scales

Define the scale in the document. An unlabelled one to five scale means different things to every reader.

**Probability**

| Score | Label | Meaning |
| --- | --- | --- |
| 1 | Rare | Under 10 percent within the horizon |
| 2 | Unlikely | 10 to 30 percent |
| 3 | Possible | 30 to 60 percent |
| 4 | Likely | 60 to 85 percent |
| 5 | Almost certain | Over 85 percent |

**Impact** should be defined per dimension so scoring is not a matter of taste.

| Score | Cost | Schedule | Value or benefit | Compliance |
| --- | --- | --- | --- | --- |
| 1 | Under 1 percent of budget | Under 1 week | Negligible | Internal observation |
| 3 | 5 to 10 percent | 1 month | 10 to 25 percent of benefit at risk | Reportable finding |
| 5 | Over 25 percent | Over 3 months | Over half the benefit at risk | Licence or penalty exposure |

Take the highest dimension, do not average across them. A risk that is trivial on cost and severe on compliance is severe.

## Beyond probability times impact

- Velocity: how fast the impact arrives once the event occurs. High velocity risks need pre-agreed responses because there is no time to convene a meeting.
- Detectability: whether you would notice it happening. Low detectability risks need a monitoring control, not just a mitigation.
- Proximity: when it could occur. A high score two years out is managed differently from the same score next month.

## The heat map caution

A five by five grid is useful for conversation and misleading for decisions. Two risks scoring twelve can differ by an order of magnitude in expected loss. Where the decision matters, quantify: expected value, or a range with a stated confidence, and hand it to `finance` for risk-adjusted value.

## Responses

**Threats**

- Avoid: change the plan so the risk cannot occur. The only response that removes probability entirely, and usually the most expensive.
- Transfer: move the consequence to a party better placed to carry it. Insurance, contract terms, supplier warranties. Note that transfer moves consequence, not accountability.
- Reduce: act on probability, impact, or both. State which one the action targets, because most mitigations only touch probability.
- Accept: decide to carry it, with or without a contingency. Acceptance is a legitimate response when it is a decision rather than a silence.

**Opportunities**: exploit, share, enhance, accept.

## Response quality

A usable response names: the action, the owner, the due date, the cost, whether it targets probability or impact, the expected residual score, and the trigger that shows the response is failing.

"Monitor closely" is not a response. "Weekly vendor status call with escalation to the sponsor if the environment date slips again" is.

## Residual and secondary risk

Residual risk is what remains after the response. Score it. If residual still exceeds appetite, the response is inadequate and the risk escalates.

Secondary risk is the new risk the response creates. Transferring a risk to a supplier creates supplier concentration risk. Record it.

## Contingency

For accepted risks with material impact, set aside a contingency and state the trigger that releases it. Contingency without a trigger gets spent on something else.

## Review cadence

Re-score at every milestone and whenever a trigger fires. Close risks that have passed their horizon with a note on what happened. A register where nothing ever closes is not being used.
