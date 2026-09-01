# Framework Selection and Team Structure

## Match the method to the problem domain

The first decision is not Scrum against Kanban. It is what kind of problem the team faces, because method effectiveness is domain-dependent and most failed adoptions are a method applied to the wrong domain.

| Domain | Cause and effect | What works | What fails |
| --- | --- | --- | --- |
| Clear | Obvious and repeatable | Standard procedure, checklists, automation. Agile ceremony is overhead | Treating routine work as if it needed discovery |
| Complicated | Knowable with expertise | Analysis, expert judgement, good practice. Plans hold if the experts are good | Assuming everyone can contribute equally to the design decision |
| Complex | Only visible in retrospect | Probe, sense, respond. Small safe-to-fail experiments, short feedback loops. This is where Scrum and continuous discovery earn their keep | Demanding a fixed scope and date up front, or importing a best practice from another organisation |
| Chaotic | No discernible pattern | Act to stabilise first, then reassess | Convening a workshop |

The practical test: if the team can tell you with confidence what the right answer is and just needs time to build it, the work is complicated and you should reduce ceremony. If they cannot know until they try, it is complex and you should shorten the loop.

## Selecting the delivery method

| Method | Choose when | Stop condition |
| --- | --- | --- |
| Scrum | Work benefits from a cadence and a shared goal, the team can commit to a period, and there is a product owner who can decide | Demand is interrupt-driven, so the sprint goal is broken most weeks. That team needs flow, not a cadence |
| Kanban | Demand arrives continuously and unpredictably, item sizes vary widely, or the team runs a service (support, operations, platform requests) | Nobody sets or respects a work in progress limit, in which case you have a board, not Kanban |
| XP practices | Quality, rework, or fear of change is the binding constraint. Test-driven development, continuous integration, pairing, refactoring | Adopted as a mandate rather than by the engineers who must sustain it |
| Scaled framework | More than one team genuinely shares one product or value stream and their dependencies are real | One team, or several teams with separable products. Scaling adds coordination cost to a problem that did not need it |

Do not scale a problem you can solve by reducing dependencies. Splitting the architecture is usually cheaper than adding a coordination layer, and it removes the constraint rather than managing it.

## Scrum in brief

Roles: product owner decides what and why, scrum master owns the process and impediments, developers own how. Events: sprint of one to four weeks, planning, daily scrum, review, retrospective, plus continuous refinement. Artefacts: product backlog, sprint backlog, increment, each with its commitment (product goal, sprint goal, definition of done).

The commitments are the part usually dropped, and dropping them is what turns Scrum into a status cadence.

## Kanban in brief

Visualise the workflow as it actually is, including the queues between stages. Set explicit work in progress limits per stage as numbers. Manage flow by measuring cycle time and throughput. Make policies explicit, including what "ready" and "done" mean per column. Improve collaboratively using the data.

Kanban also carries a maturity path, from individual task visibility, through team-centric boards, to defined customer-facing workflows, end-to-end flow, and quantitative management. Locate the team on that path before recommending a practice from three levels above it, because practices adopted out of sequence do not stick.

## Team structure and cognitive load

Process symptoms are often structural. A team carrying more domains than it can hold will miss commitments, produce defects, and resist estimation, and no amount of ceremony redesign will fix it.

| Team type | Purpose | Signal it is the right answer |
| --- | --- | --- |
| Stream-aligned | Continuous flow of value for one customer workflow or product capability | The team can deliver most of its work without waiting on another team |
| Enabling | Domain experts who raise the capability of stream-aligned teams and then leave | A capability gap is blocking several teams and will recur |
| Complicated subsystem | Deep specialists owning a genuinely hard component | The component needs expertise that cannot reasonably be spread |
| Platform | Builds and runs the internal platform so stream-aligned teams are autonomous | Teams are repeatedly solving the same infrastructure problem |

Interaction between teams should be one of three modes and should be stated: collaboration for co-discovery of something new, service consumption through a documented interface, or facilitation where one team coaches another for a bounded period. Undeclared interaction is where dependency cost hides.

## Agile business analysis across three horizons

Analysis in an agile setting is not a phase, it is three synchronised horizons, and confusing them produces either paralysis or thrash.

The **strategic horizon** deals with enterprise objectives, value streams, and funding. That work belongs to `strategy` and `business-architecture`. The **initiative horizon** deals with minimum viable slices, feature decomposition, and journey mapping, and belongs to `product-manager` with `product-owner`. The **delivery horizon** deals with stories, examples, and automated acceptance, and belongs to `product-owner` and `acceptance-testing`.

This skill owns none of those artefacts. It owns whether the team has a working rhythm for moving between the horizons, and whether the documentation produced at each is barely sufficient for its audience rather than ceremonial.

## Tailoring and the documentation stance

Barely sufficient means enough to make the next decision safely, judged by the reader who must act on it, not by the author. Two tests. Would a new team member be able to act correctly without asking? Would a regulator or auditor accept the evidence trail this leaves? Where the second test bites, route the retention and evidence obligations to `regulatory-compliance` rather than reducing documentation on principle.
