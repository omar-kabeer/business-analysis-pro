# Agile Delivery Playbook

How to help a team choose, run, and improve an agile way of working so it delivers usable increments, learns from them, and stays honest about progress. This playbook applies the BABOK Agile Perspective (11.1) and Plan Business Analysis Approach (3.1), with Backlog Management (10.2) and Lessons Learned (10.27). Scrum follows the Scrum Guide 2020 (`scrum-guide-2020`), whose conformance note lists its rules as checks; broader practice draws on the practitioner guide `europeanscrum-agile-guide-2025`.

## When this playbook applies

Use it when the question is how a team works: setting up Scrum or Kanban, running the events, tailoring for the context, fixing a team that is busy but not delivering, choosing metrics, or scaling across teams. Use the product-owner skill for the content of the backlog, and ba-planning for the business analysis approach itself.

## Step 1: Choose the framework for the work

| Framework | Fits when | Core mechanics |
| --- | --- | --- |
| Scrum | Complex product work where a team can commit to a goal for a fixed period | Sprints, a product goal, sprint goals, a definition of done, and four events |
| Kanban | Flow of varied, arriving work (support, operations, maintenance) | Visualised workflow, work-in-progress limits, managed flow |
| Scrum with Kanban practices | Product work with interruptions | Sprints, plus explicit WIP limits and flow measures |

Choose by the nature of the work, not by fashion. Record the reason, so it can be revisited.

## Step 2: Set Scrum up correctly

The Scrum Guide describes itself as immutable: implementing only parts of it is not Scrum. Its conformance note turns the essentials into checks:

- the product backlog is an ordered list with a product goal its items serve (SCRUM-PB-01, PB-02);
- each sprint backlog has one sprint goal (why), the selected items (what), and a plan (how) (SCRUM-SA-01, SA-02);
- a definition of done describes the quality an increment must meet (SA-03), and only done work counts as the increment (SA-04).

Name the three accountabilities: a product owner who orders the backlog, developers who build the increment, and a Scrum Master who serves the team's effectiveness. If one is missing, say so plainly rather than calling the result Scrum.

## Step 3: Run the events for their purpose

| Event | Purpose | Sign it is working |
| --- | --- | --- |
| Sprint planning | Agree the sprint goal and a plan | The team can state the goal in one sentence |
| Daily scrum | Inspect progress toward the goal and adapt the plan | Impediments surface within a day |
| Sprint review | Inspect the increment with stakeholders and adapt the backlog | Stakeholders change priorities based on what they saw |
| Sprint retrospective | Improve how the team works | Each retrospective produces one change the team actually makes |

Refinement is ongoing work, not an event: keep the top of the backlog understood, sized, and ready.

## Step 4: Measure flow and outcomes, not activity

Use measures the team can act on: cycle time (how long an item takes from start to done), throughput (items done per period), work in progress, and the share of sprint goals met. Pair them with the product outcome the work serves. Velocity is a planning aid for one team, not a performance target and not comparable across teams; treating it as a target inflates estimates.

## Step 5: Improve with retrospectives and lessons learned

Each retrospective chooses one improvement, names who will make it, and checks at the next retrospective whether it worked (Lessons Learned, 10.27). A retrospective that produces a list of complaints and no change is theatre.

## Step 6: Tailor and scale with care

Tailor practices to the context, but keep the parts that make feedback work: a goal, a done definition, frequent inspection of a real increment, and a retrospective. When several teams work on one product, coordinate on one product backlog and one definition of done before adopting a scaled framework; many scaling problems are backlog problems.

## Stop rules

The way of working is sound when the framework choice has a reason, its essential rules are in place (for Scrum, the checks above), events serve their purposes, measures are about flow and outcomes, and each retrospective produces a change the team makes.

## Common failures

- "Scrum" with no product goal, no sprint goal, or no definition of done.
- Stand-ups that report status to a manager instead of adapting the plan.
- Velocity used as a target or compared across teams.
- Retrospectives with no resulting change.
- Scaling frameworks adopted before the single-team basics work.

## Worked example

Supplier payment status portal team: four developers, a product owner, and a Scrum Master, two-week sprints. After three sprints, sprint goals are missed, and stakeholders say they "never see anything working".

Diagnosis against the Scrum checks:
- The product backlog is ordered but has no product goal (fails SCRUM-PB-02).
- Sprint backlogs have items but no sprint goal (fails SA-01 and SA-02).
- There is no definition of done; stories are "done" when code is merged, untested (fails SA-03 and SA-04).

Changes agreed at the retrospective:
1. Product goal: "Suppliers answer their own status questions: self-service share from 0 to 30 percent by the end of 2026."
2. Each sprint planning ends with a one-sentence sprint goal; the first is "A supplier can look up one invoice's status end to end in the test environment."
3. Definition of done: tested against acceptance criteria, reviewed, deployed to test, and demonstrated.

Measures: cycle time and sprint goal success, reviewed at each retrospective. Two sprints later, both sprint goals were met, and the sprint review showed a working lookup to the AP manager, who moved the payment date story up the backlog.

## Sources

- `babok-3.0-2015`: the Agile Perspective (11.1), Plan Business Analysis Approach (3.1), and techniques 10.2 and 10.27.
- `scrum-guide-2020`: accountabilities, events, artefacts, and commitments, with the checks in its conformance note.
- `europeanscrum-agile-guide-2025`: a practitioner guide to agile methods, used for the comparison of frameworks.
