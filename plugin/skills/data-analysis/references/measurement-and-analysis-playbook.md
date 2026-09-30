# Measurement and Analysis Playbook

How to decide what to measure, set baselines and targets that mean something, and analyse the numbers honestly enough to support a decision. This playbook applies BABOK Metrics and Key Performance Indicators (10.28), Data Mining (10.14), Measure Solution Performance (8.1), Analyze Performance Measures (8.2), and Define Future State (6.2). The analysis cycle follows CRISP-DM (`crisp-dm-1.0`), with the critiques in `datasciencepm-evaluating-crisp-dm` and the teaching treatment in `horvath-crisp-dm-lecture`.

## When this playbook applies

Use it when someone asks what to measure, whether a number is good, what target to set, or what the data says. Use the business-intelligence skill when the question is how to build the pipeline or dashboard, and the data-modelling skill when it is how the data is structured.

## Step 1: Start from the decision, not the data

Ask what decision the measure will inform and who makes it. A measure no one will act on is reporting, not measurement. Write the decision down: "The Financial Controller decides each month whether the workflow rollout needs intervention."

## Step 2: Derive measures from objectives

For each business objective, choose the measure that best reflects whether it is being met (Metrics and KPIs, 10.28). Separate three kinds:

| Kind | Tells you | Example |
| --- | --- | --- |
| Outcome (lagging) | Whether the objective is met | Share of invoices paid within terms |
| Driver (leading) | Whether the outcome is likely to move | Share of approvals made in the tool |
| Health | Whether something is going wrong | Failed postings per day |

Name the few outcome measures that matter most as KPIs. More than five KPIs for one initiative usually means nobody chose.

## Step 3: Define each measure precisely

A measure is defined when two analysts would compute the same number from the same data. Write down the formula, the unit, the population included and excluded, the time window, the data source, and the owner. "Approval time" is not defined; "median working days from invoice receipt to approval, for UK invoices, excluding credit notes, by calendar month, from the ERP workflow log" is.

## Step 4: Establish a baseline before setting a target

Measure the current value over a representative period before choosing any target. Look at the spread, not only the average: a median of 9 days with a long tail of 40-day invoices calls for a different target than a tight 9. Where no data exists, say so and plan how the baseline will be captured; never invent one.

## Step 5: Set targets with a basis

A target needs a reason: a benchmark, a regulation, a contractual term, a business case assumption, or a capability limit. Set a date, and set a threshold that triggers action, not just a goal. Check the target is achievable against constraints; an unachievable target teaches people to ignore the measure.

## Step 6: Test validity and guard against gaming

Ask how the measure could mislead (Analyze Performance Measures, 8.2):

- Could people improve the number without improving the outcome? (Rejecting and resubmitting to reset a clock.)
- Is it a proxy that drifts from what matters? (Logins instead of completed approvals.)
- Does it hide a population? (An average that masks one failing department.)

Add a guard for each: measure from the first event, pair the proxy with the outcome, or break the figure down by segment.

## Step 7: Analyse with the CRISP-DM cycle

For analysis beyond simple reporting, work through the CRISP-DM phases: business understanding (the decision from step 1), data understanding (profile completeness, accuracy, and timeliness), data preparation, modelling or analysis, evaluation against the business question, and deployment into the decision. Loop back when evaluation shows the question was wrong. Report data quality problems as findings, not footnotes.

## Step 8: Report so the reader can act

Show the measure against its baseline and target, with the trend, the variation, and any segment that behaves differently. State what the number means and what action it suggests, and say plainly what the data cannot tell you. Correlation found in the data is a hypothesis to test, not a cause.

## Stop rules

A measurement framework is complete when every objective has an outcome measure, each measure is defined precisely with a baseline, a target, a basis, and an owner, validity guards are in place, and reporting is agreed. An analysis is complete when it answers the decision it started from, with its limits stated.

## Common failures

- Measuring what is easy to count rather than what matters.
- Targets set before any baseline is measured.
- Averages that hide the cases in trouble.
- Correlation reported as cause.
- Data quality problems left out of the findings.

## Worked example

Supplier invoice approval: measurement framework.

Decision: each month the Financial Controller decides whether the rollout needs intervention.

| ID | Measure | Kind | Definition | Baseline | Target | Basis |
| --- | --- | --- | --- | --- | --- | --- |
| SPM-001 | Days to approval | Outcome (KPI) | Median working days from receipt to approval, UK, excluding credit notes, monthly, ERP log | 14 (January to April 2026) | 5 by December 2026 | Business case benefit assumption |
| SPM-003 | In-tool approval share | Driver | Approvals made in the workflow divided by all approvals, weekly | 0 | 95 percent by September 2026 | Needed for SPM-001 to move |

Validity guard for SPM-001: measure from the first receipt, not the latest routing, so rejecting and resubmitting cannot reset the clock.

Analysis note: the baseline median of 14 hides a tail; 12 percent of invoices took over 30 days, all from three departments. The finding went to the change lead as a targeted adoption risk rather than being averaged away.

The framework uses `templates/solution-performance-measures.md`.

## Sources

- `babok-3.0-2015`: techniques 10.14 and 10.28 and tasks 6.2, 8.1, and 8.2.
- `crisp-dm-1.0`: the analysis cycle.
- `datasciencepm-evaluating-crisp-dm`: where CRISP-DM needs adapting for iterative work.
- `horvath-crisp-dm-lecture`: a teaching treatment of the phases for business analysts.
