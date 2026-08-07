# Estimation Methods Reference

## Choosing a method

| Method | Use when | Accuracy | Cost to produce |
| --- | --- | --- | --- |
| Analogous (top-down) | Very early, a comparable exists | Low, wide range | Hours |
| Parametric | A measurable driver correlates with effort | Medium, improves with data | Hours to days |
| Bottom-up | Work is decomposed and understood | High, but over-confident if the WBS is incomplete | Days |
| Three-point and PERT | Uncertainty is material and needs to be expressed | Medium to high, honest about spread | Adds little to any of the above |
| Planning poker | Team-based relative sizing of backlog items | Good relative accuracy, poor absolute | Hours |
| Wideband Delphi | Experts disagree and anchoring must be avoided | High for novel work | Days |
| Historical velocity | An established team with a stable backlog unit | High for that team only | Minutes |

Use two independent methods for anything material. Where they diverge by more than about 30 percent, the difference is telling you something about scope understanding, and that conversation is worth more than either number.

## Work breakdown structure

- Decompose by deliverable, not by activity or by team. A WBS of nouns holds up; a WBS of verbs drifts into a plan.
- The 100 percent rule: children fully describe the parent, no more and no less.
- Stop decomposing when an item can be estimated with reasonable confidence and assigned to one owner. Two to five days is a common resting point.
- Every leaf gets an owner, an estimate, and an acceptance condition.
- Include the work packages people leave out: analysis, reviews, environments, data migration, training, and cutover.

## Three-point and PERT

- Expected value equals (optimistic plus four times most likely plus pessimistic) divided by six.
- Standard deviation approximates (pessimistic minus optimistic) divided by six.
- Aggregate across items by summing expected values and combining variances, not by summing the pessimistic cases. Summed worst cases produce a number nobody believes.
- Present the result as a range with a confidence, such as an 80 percent confidence figure, and say which one you are quoting.

## The cone of uncertainty

Early estimates are wrong by a factor, not by a percentage. At concept stage a range of roughly a quarter to four times actual is normal; it narrows as requirements, then design, then build progress. Say which point on the cone you are standing at. Presenting a concept-stage estimate with two decimal places is a credibility error.

## Commonly omitted work

Check every one of these before publishing a number:

- Requirements analysis and stakeholder time.
- Reviews, rework after review, and re-review.
- Test case design, test data preparation, and regression.
- Environment setup, access requests, and their waiting time.
- Data migration and reconciliation.
- Documentation, training material, and delivery of training.
- Deployment, cutover, hypercare, and handover to support.
- Coordination overhead, which grows faster than team size.
- Holidays, leave, and partial availability of shared people.

## Contingency

Derive it from the risk register rather than applying a habitual percentage. For each material risk take probability times cost or schedule impact, sum the exposures, and present that as the contingency with its basis. Contingency built this way survives challenge; a flat 20 percent does not.

Keep contingency visible and separate from the estimate. Contingency buried inside line items is spent invisibly and teaches everyone to pad.

## Estimating the analysis work itself

BABOK expects the analysis effort to be estimated like any other. Drivers: number and dispersion of stakeholders, novelty of the domain, quality of existing documentation, number of interfaces, regulatory load, and how settled the problem is. Where the problem is still fuzzy, estimate the discovery phase only, and commit to estimating the rest at its end.

## Presenting an estimate

Lead with the range and the confidence. Then the method, the assumptions, the exclusions, and what would change the answer. Never present a single figure with no context; it will become a commitment before the end of the meeting.
