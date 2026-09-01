# Flow, Constraints, and Metrics

## Little's Law and what follows from it

In a stable system, average work in progress equals average throughput multiplied by average lead time. Rearranged, lead time equals work in progress divided by throughput.

Two consequences do the work in practice.

To shorten lead time without adding capacity, reduce work in progress. This is the only lever most teams actually control, and it is free. Adding people raises throughput slowly, raises coordination cost immediately, and does nothing this quarter.

Raising work in progress does not raise throughput. It lowers it, because context switching consumes capacity, and lead time then inflates faster than linearly. A team that feels busy and delivers little is almost always describing this.

The law holds only for a stable system. If arrival rate exceeds completion rate, the queue grows without bound and no forecast made from the average is trustworthy. Check stability before forecasting.

## Flow efficiency

Flow efficiency is active work time divided by total lead time, expressed as a percentage. It measures how much of an item's life was spent being worked on rather than waiting.

Unoptimised enterprise delivery routinely sits in single digits. An item takes six weeks and receives four days of actual work; the rest is queues, handoffs, approvals, and waiting for someone else. Improvement work aimed at the four days is aimed at the wrong number.

Measuring it requires tracking blocked and waiting states explicitly on the board. If the board has no waiting columns, flow efficiency cannot be measured and the queues stay invisible, which is usually why they persist.

## Theory of constraints

System throughput is set by its narrowest point. Improving anything else increases work in progress without increasing delivery, and frequently makes things worse by feeding the bottleneck faster.

Run the loop in order:

1. **Identify** the constraint. Look for the stage where queues accumulate in front and starvation appears behind. Common ones are a single approver, a shared environment, a security or compliance review, or one person who is the only one who can do something.
2. **Exploit** it. Remove non-essential work from the constraint, protect its time, and ensure it never idles waiting for inputs.
3. **Subordinate** everything else to it. Throttle upstream work generation to the constraint's rate. This feels wrong and is the step teams skip.
4. **Elevate** it. Add capacity, automate, or decouple the architecture so the dependency disappears.
5. **Repeat.** The constraint moves once broken. A policy built around the old constraint becomes the new problem.

## Work in progress limits

Set a number. "We will try to focus more" is not a limit.

A reasonable starting point is one to one and a half items per person for a team new to limits, tightened once the board stabilises. Set limits per stage rather than for the board as a whole, because a single global limit hides where the queue actually is. Expect the limit to feel uncomfortable, because the discomfort is the bottleneck becoming visible; a limit that never blocks anyone is not doing anything.

Pair the limit with an explicit policy for what happens when it is hit: swarm on the blocked item, and do not start new work. Without that policy the limit is decorative.

## Service level expectations

A service level expectation is a probabilistic statement derived from historical cycle time, not a promise. Take completed items over a rolling window, typically 90 days, and read the percentile.

If 85 percent of items completed within 8 calendar days, the expectation is "85 percent confidence of completion within 8 days". State the confidence with the number. A single average with no distribution is the most common forecasting error in agile delivery, because cycle time distributions are right-skewed and the mean sits well below the number stakeholders actually need.

This is also the honest replacement for date commitments derived from story points.

## The metric set

Track a small set across three categories and read them together.

| Category | Metric | Definition | Direction |
| --- | --- | --- | --- |
| Flow | Throughput | Items completed per period | Steady or rising |
| Flow | Cycle time distribution | Percentiles, not the mean | Shorter and tighter |
| Flow | Flow efficiency | Active time over lead time | Rising, with a target set against the current baseline |
| Flow | Predictability | Variance of cycle time or delivery against forecast | Falling |
| Delivery | Deployment frequency | Successful releases per period | Rising |
| Delivery | Lead time for changes | Commit to production | Falling |
| Delivery | Change failure rate | Releases needing a fix, rollback, or patch | Falling |
| Delivery | Time to restore | Detection to service restored | Falling |
| Outcome | The business measure the work was funded to move | Set with `product-manager` | Per the objective |

Deployment frequency and lead time read together with change failure rate and time to restore. Speed alone is not the claim; speed without a rising failure rate is.

## Metrics that must not become targets

State the prohibition explicitly when handing over a metric set, because an unstated prohibition will be violated within a quarter.

Story points and velocity are a team's internal planning aid. They must not be compared across teams, reported to management as productivity, or given an improvement target. The unit is not calibrated between teams, so cross-team comparison is arithmetic on incompatible scales, and setting a target produces inflation rather than delivery. Where leadership needs delivery reporting, give them throughput, cycle time percentiles, and the delivery metrics above, which are counted in items and days and cannot be inflated by redefining the unit.

Utilisation is the other one. Pushing a team past roughly 80 percent sustained utilisation causes queue length to grow sharply, because there is no slack to absorb variability. High utilisation and long lead times are the same finding.

Any measure attached to individual performance stops measuring the system and starts measuring what people are willing to report. If a metric can be improved by changing the recording rather than the work, it will be.
