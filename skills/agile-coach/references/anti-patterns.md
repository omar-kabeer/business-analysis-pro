# Anti-Patterns and Failure Modes

Diagnosis matters more than the label. Each entry names what you observe, why it happens, what it costs, and what actually shifts it. Treating the symptom is the usual mistake.

## The feature factory

**Observed.** The backlog is a list of requested features with dates. Nobody can say what business measure the last quarter moved. Success is reported as items shipped.

**Root cause.** Incentives above the team reward shipping rather than outcomes, so the team is doing exactly what it is paid to do.

**Cost.** Engineering effort spent on features nobody uses, platform bloat, and a team that stops thinking because thinking is not rewarded.

**Shift.** Attach a business measure to a small number of items and report against it. Move funding from projects to durable teams with objectives. This is an executive intervention, not a team one; coaching the team harder will not touch it. Route the outcome framing to `product-manager`.

## Cargo cult ceremony

**Observed.** All the events run on schedule. None of them changes a decision. The retrospective produces actions that are never done.

**Root cause.** The framework was adopted as a set of meetings rather than as empirical process control, usually by mandate.

**Cost.** Meeting overhead with no compensating benefit, and a team that concludes agile means more meetings.

**Shift.** Stop the events that fail their signal, and rebuild from the feedback loop the team actually lacks. Introduce flow metrics so inspection has something to inspect. Do not add ceremonies.

## Velocity as a management metric

**Observed.** Velocity is reported upward, compared across teams, or given an improvement target.

**Root cause.** Applying a manufacturing output measure to knowledge work, combined with a genuine leadership need for delivery visibility that nobody has met another way.

**Cost.** Point inflation, gamed estimates, quality traded for throughput, and eroded trust. The number rises while delivery does not.

**Shift.** Remove story points from management reporting entirely and replace them with throughput, cycle time percentiles, and the delivery metrics. Meet the underlying need rather than only banning the metric, because the need will otherwise reassert itself.

## Definition of ready as a phase gate

**Observed.** The team refuses items without exhaustive upfront specification. Refinement has become a requirements phase, and analysts are working two sprints ahead in a queue.

**Root cause.** Low trust plus punitive responses to missed commitments. The gate is the team protecting itself.

**Cost.** Waterfall inside the sprint, long lead times, and analysis work that is obsolete by the time it is built.

**Shift.** Address the punishment first; the gate is a rational response to it. Then replace the checklist with continuous refinement, collaborative story mapping, and worked examples agreed with the tester and developer together. Keep readiness as a conversation, not a form.

## Scaling as recentralised planning

**Observed.** A scaling framework is adopted, and scope is now locked months ahead in large planning events. Teams have less autonomy than before.

**Root cause.** Middle management adopting the ceremony of decentralisation while retaining centralised control, often because the funding model still allocates by project.

**Cost.** The coordination cost of scaling with none of the adaptability, and slower response than before adoption.

**Shift.** Attack the dependencies rather than coordinating them: split the architecture, move to durable value-stream funding, and push decisions down. If dependencies fall far enough, the scaling layer can be removed.

## Optimising the non-constraint

**Observed.** A team automates, hires, or improves a stage, and total delivery does not change. Work piles up somewhere else.

**Root cause.** Improvement targeted where it was easy or visible rather than where the system was limited.

**Cost.** Investment with no throughput gain, and rising work in progress, which makes lead times worse.

**Shift.** Find the constraint by looking for the queue, then subordinate the rest of the system to it. See `references/flow-and-metrics.md`.

## Board without limits

**Observed.** Work is visualised, everything is in progress, and cycle time is long and highly variable.

**Root cause.** Visualisation adopted without the limiting policy, because the limit is the uncomfortable part.

**Cost.** All the overhead of a board with none of the flow benefit.

**Shift.** Set a numeric limit per stage and an explicit policy for what happens when it is hit. Expect resistance, and expect the first blocked day to reveal the real bottleneck.

## Cognitive overload misread as process failure

**Observed.** A team misses commitments, resists estimating, and produces defects across several unrelated domains. Ceremony redesign changes nothing.

**Root cause.** The team owns more domains than it can hold. This is a structural problem wearing process clothing.

**Cost.** Repeated failed process interventions, and a team told it is underperforming when it is overloaded.

**Shift.** Reduce the domain surface, split the team, or move a subsystem to a specialist or platform team. See the topology guidance in `references/framework-selection.md`.

## Agile as an excuse for no documentation

**Observed.** Nothing is written down. Onboarding takes months, decisions are re-litigated, and an audit cannot be answered.

**Root cause.** Barely sufficient read as a licence rather than as a judgement about the reader.

**Cost.** Knowledge loss, repeated decisions, and, in regulated settings, a finding.

**Shift.** Apply the two tests: could a new joiner act correctly without asking, and would an auditor accept this trail. Where the second bites, route the evidence and retention obligations to `regulatory-compliance` and the decision record to `governance`.

## Handoffs

| Situation | Route to |
| --- | --- |
| Backlog content, stories, splitting, prioritisation, definition of ready and done as artefacts | `product-owner` |
| Product strategy, outcomes, roadmap, discovery | `product-manager` |
| How the analysis work itself is planned and governed | `ba-planning` |
| Estimation method, forecasting technique, capacity modelling | `estimation` |
| Engineering practice depth: test-driven development, continuous integration, trunk strategy | engineering |
| Evidence, retention, and audit obligations on a lightweight documentation stance | `regulatory-compliance` |
| Recording an organisational decision arising from a coaching recommendation | `governance` |
| Whether the delivered work moved the business measure | `solution-evaluation` |
