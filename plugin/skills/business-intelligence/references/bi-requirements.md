# BI Requirements Reference

## The decision-first frame

A reporting request phrased as "we need a dashboard" is not a requirement. Convert it before doing anything else.

| Field | Example |
| --- | --- |
| Audience | Regional operations manager |
| Decision | Whether to reallocate agents between branches this week |
| Question | Which branches are missing the service level, and by how much |
| Measure | Percentage of transactions completed within target time |
| Grain | Branch by day |
| Comparison | Against target, and against the same week last month |
| Latency | Refreshed by 07:00 daily |
| Action threshold | Below 92 percent triggers a reallocation review |

If the action threshold cannot be filled in, the report is decoration. Say so and push back.

## Types of information delivery

- Standard reports: fixed layout, scheduled, known questions. Cheap to build, easy to over-produce.
- Ad hoc query: known data, unknown questions. Needs a well-modelled semantic layer more than it needs screens.
- Dashboards: monitoring against expectation, glanceable, few metrics, clear thresholds.
- Scorecards: performance against target across a balanced set of perspectives, usually periodic.
- Analytic and exploratory: hypothesis-driven, needs raw grain and history.
- Embedded and operational: a number inside a workflow at the moment of the decision.

Match the type to the decision cadence. A weekly reallocation decision does not need a real-time feed.

## Requirement checklist per element

For every metric on every screen:

1. Business definition in one sentence, agreed with the owner.
2. Formula, including numerator, denominator, and exclusions.
3. Grain and the aggregation rule when rolled up (sum, average, weighted average, last value).
4. Filters applied by default, and filters the user may change.
5. Source lineage back to the system of record.
6. Owner and review cadence for the definition itself.

## Common failures to design out

- Two dashboards showing the same metric name with different exclusion rules.
- Averages of averages when the grain is rolled up.
- Percentages with an unstated denominator.
- A refresh time that is not shown, so users cannot tell stale data from a flat trend.
- Currency, timezone, and fiscal calendar left implicit in a multi-country report.
- Row counts that change between runs because the extract has no cut-off timestamp.
