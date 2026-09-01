# Worked Example: A Team That Runs Scrum and Delivers Late

A claims platform team of nine. Two-week sprints, all ceremonies running, velocity averaging 34 points and stable. Leadership reports that delivery is unpredictable and wants the team to "commit better". The scrum master has been asked to improve velocity by 20 percent.

## Diagnosis before prescription

Velocity is stable, so the presented problem is not velocity. Pulling cycle time from the tracker for the last 90 days gives a different picture: median 9 days, 85th percentile 34 days, longest 61. The distribution is not stable enough to forecast from, and the mean everyone quotes sits well below what stakeholders actually experience.

Adding waiting states to the board for two sprints shows where the time goes. Active work averages 3.5 days against a lead time of 21. Flow efficiency is around 17 percent. Four fifths of every item's life is queueing.

The largest queue sits in front of a single security review step owned by one person outside the team, averaging 11 days. The second largest is a shared pre-production environment with a booking sheet.

The constraint is not the team. Improving velocity by 20 percent would put more work into a queue that is already the bottleneck, which would lengthen lead times.

## What was changed

**Subordinate to the constraint.** Work in progress limited to 6 items across the board, down from 19 in flight. The team resisted, on the grounds that people would be idle. The first blocked day surfaced two undocumented dependencies, which was the point.

**Exploit the constraint.** The security reviewer was given a fixed daily slot and a pre-submission checklist agreed with them, which removed the back-and-forth that had been consuming most of the 11 days. Review time fell to 4 days without adding capacity.

**Elevate it, later.** Automating the routine portion of the review was proposed and funded in the following quarter. Deliberately sequenced after exploitation, so the automation was built for the process as it should be rather than as it was.

**Ceremonies.** Refinement had become a specification phase, producing documents two sprints ahead that were stale on arrival. It was cut to one hour and restructured around worked examples agreed by analyst, developer, and tester together. The daily scrum was a status round to the scrum master; it was re-pointed at the sprint goal, and the scrum master stopped attending for three weeks to break the pattern.

**Metrics.** Story points were removed from the leadership report and replaced with throughput, cycle time percentiles, and change failure rate. This required a conversation with leadership about the need behind the request, which was forecast confidence, not productivity. A service level expectation of "85 percent within 12 days" was published in its place, derived from the team's own history.

**Retrospective.** Actions capped at two per cycle with owners and dates, and the previous cycle's actions reviewed first. Three of the standing issues sat outside the team's authority and were escalated as impediments with the queue cost attached rather than being re-discussed monthly.

## After twelve weeks

Median cycle time 6 days, 85th percentile 14. Flow efficiency 34 percent. Throughput rose from an average of 7 items per sprint to 11, without any change in team size and without touching velocity, which is now not measured. Change failure rate unchanged, so the speed was not bought with quality.

## What this illustrates

The presented problem, the diagnosed problem, and the constraint were three different things. The requested intervention, raising velocity, would have made delivery worse by feeding a queue. And the durable fix was partly structural and partly a conversation with leadership about what they actually needed, neither of which is a ceremony change.

The failure mode this narrowly avoided is recorded in `references/anti-patterns.md` under optimising the non-constraint and velocity as a management metric.
