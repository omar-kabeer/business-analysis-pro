# Ceremony Design and Coaching Stance

## Designing an event

Every retained event needs four things stated: purpose, participants, timebox, and the signal that says it has stopped working. The fourth is the one usually missing, and without it a dead ceremony persists for years because nobody has a criterion for killing it.

| Event | Purpose | Timebox guide | Failure signal |
| --- | --- | --- | --- |
| Sprint planning | Agree a sprint goal and enough of a plan to start | Up to 2 hours per week of sprint | The output is a list of tickets with no goal, or the plan is a manager assigning work |
| Daily scrum | Developers re-plan the day against the goal and surface blockers | 15 minutes | It is a status round to the scrum master or manager, or blockers are reported and nothing changes |
| Refinement | Make upcoming items understood and small enough to start | Up to 10 percent of capacity | It becomes a specification-writing phase, or the same items are refined repeatedly |
| Review | Show working output, gather feedback, adapt the backlog | Up to 1 hour per week of sprint | It is a presentation with no working software, or no stakeholder attends |
| Retrospective | Inspect how the team worked and change one or two things | 45 to 90 minutes | Actions from the last one were not done, or the same issue recurs unaddressed |

An event that fires its failure signal twice gets redesigned or removed. Say that out loud when you set it up, so removal is a planned outcome rather than a defeat.

## Making retrospectives produce change

Most retrospectives fail on output, not on format. Three disciplines fix the majority.

Cap actions at two or three per cycle, each with a named owner and a date. Ten actions produce zero. Start each retrospective by reviewing the previous actions, because an unreviewed action teaches the team that the meeting is theatre. And separate the systemic causes from the incidents; a team that lists events without asking why will generate the same list next cycle.

Rotate formats to keep attention, but the format is not the lever. What went well and what to improve, start and stop and continue, the sailboat with wind and anchors, or a timeline of the period all work. Use a timeline when the team disagrees about what happened, and a systemic format when they agree about what happened and nothing changes.

Where the same issue recurs across several cycles and sits outside the team's authority, stop retrospecting it and escalate it as an impediment with the cost attached. Repeatedly asking a team to solve a problem it cannot solve corrodes the practice.

## Psychological safety and performance

Safety and accountability are two axes, not a trade-off, and reading them as a trade-off produces the two worst quadrants.

| | Low safety | High safety |
| --- | --- | --- |
| **High standards** | Anxiety. Defects get hidden, risk is avoided, people burn out | Learning. High performance with transparent problems and real experimentation |
| **Low standards** | Apathy. Passive compliance and minimal engagement | Comfort. Pleasant, and it delivers nothing |

Diagnose by what happens after a failure. If the first response is to find who did it, safety is low and every metric you introduce will be gamed. Raise safety before raising standards, because standards imposed without safety land in the anxiety quadrant and produce hidden defects rather than better work.

Practical signals worth watching: whether anyone disagrees with the most senior person in the room, whether bad news travels up before it becomes visible, and whether people admit not knowing something.

## Coaching stance

Match the stance to maturity. Using the wrong one is the most common coaching error, and non-directive coaching applied to a team that simply does not know the mechanics wastes everyone's time.

| Stance | Use when | Looks like |
| --- | --- | --- |
| Teaching | The team lacks the mechanics. Early maturity | Explaining the framework, the practice, the technique, and why it exists |
| Mentoring | The team knows the mechanics and struggles with situational judgement | Sharing your own experience of a comparable decision, then letting them decide |
| Facilitation | The team is competent and needs a neutral process to reach a decision | Designing and running the session, holding neutrality on content |
| Professional coaching | Competence is high and the friction is motivational, cultural, or interpersonal | Non-directive questions, no advice, the answer comes from them |
| Consulting | Genuine expertise is required and the team cannot reasonably acquire it in time | Recommending a design, structure, or governance model directly |

Two guardrails. Announce the stance when it changes, because a team that expects coaching and receives consulting will treat the recommendation as an instruction. And avoid consulting on decisions the team must own long after you leave, since the dependency you create is the outcome you are measured on.

## Facilitating the difficult sessions

For an executive alignment session, the deliverable is a small number of outcomes with owners and measures, not a framework endorsement. Start from the business objective and work down to what must change, and refuse to leave with a decision that has no owner.

For a technical practice session, coach by demonstration rather than by explanation. A refactoring or test-driven development kata run with the team's own code changes behaviour in a way that a slide about engineering excellence never has.

For a conflict between teams, make the dependency and its cost visible in numbers before discussing behaviour. Most inter-team conflict is a structural dependency being litigated as a personal one, and the structural fix belongs in `references/framework-selection.md`.
