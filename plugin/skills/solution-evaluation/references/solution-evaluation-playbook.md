# Solution Evaluation Playbook

How to run the five BABOK Solution Evaluation tasks (8.1 to 8.5) to judge whether a solution, or part of one, is delivering the value it was meant to, and what to do about it. The tasks apply to a live solution, a pilot, a release, or a prototype. Cite BABOK by section and paraphrase; do not copy guide text.

## Start from the promise

Solution evaluation compares delivered value with promised value. Before measuring anything, collect the promise: the business objectives (6.2), the potential value in the business case, and the solution performance goals. If the promise was never quantified, say so first. Evaluating against a promise invented afterwards is not evaluation.

## 8.1 Measure Solution Performance

1. Define performance measures that tie each objective to something observable. Use a mix of quantitative measures (volume, cycle time, error rate, cost, revenue, adoption) and qualitative ones (satisfaction, perceived ease). Each measure has a definition, a data source, a baseline, a target, and a collection cadence.
2. Validate the measures with stakeholders: agree that a change in the measure would mean what we think it means.
3. Collect the measures, recording the period, the sample, and any data quality problems.

Output: solution performance measures. The value-analyst agent can draft the measurement plan once objectives are adopted.

Watch for vanity measures that move without value moving, such as log-ins without completed transactions.

## 8.2 Analyze Performance Measures

Compare actual performance with the target and the baseline, then explain the difference:

- Solution performance versus desired value: is the gap real and material?
- Risks: what new risks does the performance reveal?
- Trends: is performance improving, stable, or degrading, over a long enough period to separate trend from noise?
- Accuracy: is the data trustworthy? A variance built on a broken data feed is not a finding about the solution.
- Performance variances: where performance departs from expectation, and the likely cause.

Output: solution performance analysis.

## 8.3 Assess Solution Limitations

Find what inside the solution stops it delivering value:

1. Identify internal dependencies between solution components that constrain performance.
2. Investigate problems: defects, performance bottlenecks, missing capability, poor usability. Use root cause analysis (10.40) rather than listing symptoms.
3. Assess impact: which objectives each limitation affects, by how much, and how often.

Output: solution limitations.

## 8.4 Assess Enterprise Limitations

Find what outside the solution stops it delivering value. Many shortfalls live here.

- Enterprise culture: do people believe in the change, and do incentives support it?
- Stakeholder impact: which groups are affected, and how their work changed.
- Organisational structure: do roles, reporting lines, and decision rights fit the new way of working?
- Operational assessment: are processes, support, training, and data ready to sustain the solution?

Output: enterprise limitations. Separating solution limitations from enterprise limitations matters because the fixes have different owners: the delivery team fixes the solution, the business fixes the enterprise.

## 8.5 Recommend Actions to Increase Solution Value

Recommend from the full range of options, not only more features:

| Action | When it fits |
| --- | --- |
| Do nothing | The variance is small, temporary, or cheaper to accept than to fix |
| Adjust measures | The measure, not the solution, is wrong |
| Organisational change | The limitation is in the enterprise, such as training, roles, or incentives |
| Reduce interface complexity | Hand-offs between components or systems cause errors or delay |
| Eliminate redundancy | Duplicate data entry or overlapping systems |
| Avoid waste | Steps that add no value |
| Add capability | A genuine capability gap blocks an objective |
| Retire the solution | Its cost exceeds its value and no fix is worth it |

Each recommendation states the limitation it addresses, the expected change in the measure, the cost, the owner, and how success will be checked.

Output: recommended actions.

## Evidence rules

- Distinguish correlation from cause. A measure that improved after launch did not necessarily improve because of it. Look for a comparison group, a before-and-after with other factors held steady, or a clear mechanism.
- State sample size and period, and flag when either is too small to conclude.
- Report negative findings as plainly as positive ones.

## Common failure modes

- Evaluating against goals that were never quantified.
- Measuring outputs (features shipped) instead of outcomes (value delivered).
- Blaming the solution for enterprise limitations, or the reverse.
- Recommending more features by default.
- Declaring success from a single month of data.

## Quality gates

Grade each output with the rubric named in its quality profile (`evaluation/quality-profiles.json`): `solution-performance-measures`, `solution-performance-analysis`, `solution-limitation`, `enterprise-limitation`, and `recommended-actions`. The solution-value-auditor agent checks that delivered value ties back to the objectives and potential value that justified the change.
