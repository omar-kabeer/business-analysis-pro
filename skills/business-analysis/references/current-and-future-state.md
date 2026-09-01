# Current State, Future State, Gap, and Change Strategy

BABOK 6.1, 6.2, and 6.4. Strategy analysis is shared with `strategy`: that skill owns the strategic frames and the business model question, this one owns the description of what is, what should be, and the route between them.

## Describing the current state

Describe what happens, not what the process documentation says happens. The gap between the two is frequently where the problem lives, and finding it is most of the value.

Cover six dimensions. Skipping any of them produces an analysis that later turns out to have missed the constraint.

| Dimension | What to establish | Common miss |
| --- | --- | --- |
| Capability | What the organisation can actually do, and how well | Describing systems instead of capabilities |
| Performance | The measures, their current values, and their variability | Averages without distributions, hiding the tail that people complain about |
| Structure | Who does what, reporting lines, and where handoffs occur | The informal structure that actually gets work done |
| Policy and rules | The rules in force, including the ones nobody can source | Rules being enforced that no longer have a policy behind them |
| Technology and information | Systems, data, and where information is duplicated or contested | Shadow systems, which are usually spreadsheets and usually load-bearing |
| Constraints | Contractual, regulatory, financial, cultural, and technical limits | Constraints assumed to be fixed that are actually preferences, and the reverse |

Anchor every claim. "Approval takes two days" needs a source: a measurement, a document, or a named person's statement, and it matters which. Where you cannot anchor it, mark it an assumption with an owner.

Two things reliably surface only when you look for them. **Workarounds** are the clearest evidence of where the current state fails, because people build them at their own cost. **Volumes and exceptions** distinguish the process everyone describes from the process that actually runs, since the exception path is often the majority path.

## Defining the future state

The future state is outcomes and capabilities. The moment it contains a technology or a product name, the analysis has skipped ahead and the option space has quietly closed.

State it as: the measurable outcomes the business wants, the capabilities required to produce them, the performance level each capability must reach, and the constraints the future state must still respect.

Every outcome needs a measure, a current baseline, a target, and a date. An outcome without a baseline cannot be evaluated later, which is how benefit claims become unfalsifiable. Capture the baseline now, while the current state work is fresh, and hand it to `solution-evaluation`.

Where the future state is genuinely uncertain, describe more than one and say what would distinguish them. A single confident future state produced under real uncertainty is a guess with formatting.

## Gap analysis that survives scrutiny

The gap is between capabilities, not between features. "We do not have a customer portal" is a missing feature and it presumes the solution. "We cannot let a customer see the status of their own request without a phone call" is a capability gap, and it leaves the solution open.

For each gap state the capability, its current level, its required level, the size and nature of the shortfall, the consequence of leaving it, and its dependencies on other gaps. That last column is what makes the gap list sequenceable rather than just long.

Not every gap must be closed, and not every gap must be closed by this initiative. Mark each as close now, close later, accept, or out of scope, and record the reason. A gap analysis with no accepted gaps has not been through a real prioritisation.

## Scope and its exclusions

Scope modelling defines the boundary: what is inside the change, what is outside, and what crosses the line. A context view showing the system or capability of interest with its external actors and flows is the fastest way to make the boundary arguable, which is the point.

Write exclusions explicitly, each with a reason. "Out of scope: migration of records older than seven years, because the retention obligation permits archive rather than migration." An exclusion without a reason gets reopened; an exclusion with a reason gets accepted or properly challenged.

Distinguish out of scope from deferred. Out of scope means not this initiative. Deferred means this initiative, later, and it needs a trigger. Conflating them is how phase two becomes a place where things are sent to die.

## Change strategy and transition states

The change strategy is the route, not the destination. It states how the enterprise gets from current to future state, what interim states it passes through, and what each one costs, risks, and releases.

Transition states are the part usually missing, and they are where the real cost sits. Between the current and future states the organisation may have to run two systems, reconcile between them, retrain staff, and maintain a manual bridge. Each transition state needs its own description: what operates, what does not, who is affected, what temporary capability is needed, and how long it is tolerable.

Assess each route on the value released and when, the risk carried, the cost including the transition states, the organisational disruption, and reversibility. Reversibility is undervalued: a route that can be stopped after step two is worth more under uncertainty than one that only pays out at the end.

Sequence by dependency and by value release, not by ease. Delivering the easy capabilities first is defensible only if it releases value or reduces risk, and it usually does neither.

The output is the solution scope, which is shared with `business-architecture` where the change spans the enterprise. Financial modelling of the options goes to `finance`, weighted scoring across criteria goes to `decision-analysis`, and risk assessment of the strategy goes to `risk-analysis`.
