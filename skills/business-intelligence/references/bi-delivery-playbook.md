# Business Intelligence Delivery Playbook

How to take a business question through to a trusted report or dashboard: what decision it serves, what data it needs, how that data is sourced, shaped, and checked, and how the result is delivered and governed. This playbook applies the BABOK Business Intelligence Perspective (11.2) with Metrics and KPIs (10.28), Data Modelling (10.15), Data Dictionary (10.12), Data Mining (10.14), and Non-Functional Requirements Analysis (10.30). The analysis cycle follows CRISP-DM (`crisp-dm-1.0`, with `datasciencepm-evaluating-crisp-dm` and `horvath-crisp-dm-lecture`); dimensional design follows Kimball (`kimball-dimensional-modelling`).

## When this playbook applies

Use it when the work is getting data out for decisions: reports, dashboards, scorecards, data marts, or a warehouse change. Use the data-analysis skill to decide what to measure, and the data-modelling skill for operational data structures.

## Step 1: Start from decisions and questions

For each audience, list the decisions they make and the questions they need answered to make them (Business Intelligence Perspective, 11.2). A dashboard specified as "show the approvals data" will be built, used once, and abandoned. One specified as "tell the Financial Controller each Monday which departments are behind on approvals, so she can intervene" will be used.

## Step 2: Define the measures precisely

For each question, define the measures with formula, grain, filters, time window, and owner (Metrics and KPIs, 10.28). Agree the definitions with the people who will be held to them before any build. Disputes about "which number is right" are almost always disputes about definitions that were never written down.

## Step 3: Inventory and profile the sources

List the source systems for each measure: owner, refresh frequency, access route, and known quality issues. Profile the data before designing anything: completeness, validity, consistency across systems, and timeliness. Record quality issues as findings with an owner; a dashboard built on unexamined data inherits every flaw silently.

## Step 4: Design the dimensional model

Use Kimball's four-step design:

1. Choose the business process (for example, invoice approval).
2. Declare the grain: exactly what one row of the fact table represents (one approval decision).
3. Identify the dimensions that describe it (date, department, approver, supplier, amount band).
4. Identify the facts measured at that grain (days to approve, count).

Conform shared dimensions (date, department) across facts so reports agree. Handle history deliberately: decide for each dimension attribute whether a change overwrites (type 1) or keeps history (type 2).

## Step 5: Map source to target

For each target field, record the source field, the transformation, the business rule applied, and how nulls and errors are handled. This source-to-target mapping is the requirement for the ETL or ELT build, and the reference when a number is questioned later. Keep it in the data dictionary (10.12) alongside the definitions.

## Step 6: Specify the output

Describe each report or dashboard: audience, questions answered, measures, filters, drill paths, refresh frequency, and the action a reader should take at each threshold. Choose chart types that suit the comparison (trend over time, part of a whole, ranking) and state targets on the visual. Use `templates/bi-report-specification.md`.

## Step 7: Specify the non-functional requirements

State freshness (how old the data may be), availability, query performance, retention, and access control, each with a measure (10.30). Row-level security is a requirement, not a detail: a department head seeing another department's figures is a data breach.

## Step 8: Test and reconcile

Reconcile every measure to its source for a known period before release: totals match, counts match, and differences are explained. Have the measure owners sign off the reconciliation. Then test with real users against the questions from step 1.

## Step 9: Govern after release

Name an owner for each measure and each dataset. Version measure definitions and announce changes. Monitor refresh failures and data quality, and retire reports nobody opens. A BI estate without ownership decays into conflicting numbers.

## Stop rules

A BI deliverable is ready when each measure is defined and agreed, sources are profiled with issues owned, the grain is declared, the mapping is complete, the output is specified against real questions, non-functional needs are measured, and numbers reconcile to source with owner sign-off.

## Common failures

- Dashboards specified from available data rather than decisions.
- Measures with no written definition, so every team computes its own.
- An undeclared grain, which causes double counting.
- No reconciliation to source before release.
- Row-level access left out of the requirements.

## Worked example

Supplier invoice approval: weekly approval performance dashboard.

Decision: each Monday the Financial Controller decides which departments need intervention on approvals.

Measure: median working days from receipt to approval by department, for the last full week, UK invoices only, excluding credit notes. Owner: Financial Controller.

Sources: the ERP workflow log (refreshed hourly; owner Tom Reyes) and the HR department table (daily). Profiling found 2 percent of approvals with no department, owing to cost centres closed mid-year; the finding went to the ERP team to map closed cost centres to their successor.

Model: fact table at the grain of one approval decision; dimensions for date, department (type 2, so reorganisations keep history), approver, supplier, and amount band.

Output: a ranked bar chart of departments against the 5-day target, with a red flag over 7 days for two weeks running, and a drill to the invoices waiting longest. Freshness: data no older than 24 hours on Monday at 08:00. Access: each department head sees only their own department; finance leadership sees all.

Reconciliation: April 2026 totals matched the ERP approval count exactly; median values matched within rounding. Signed off by the Financial Controller.

## Sources

- `babok-3.0-2015`: the Business Intelligence Perspective (11.2) and techniques 10.12, 10.14, 10.15, 10.28, and 10.30.
- `kimball-dimensional-modelling`: four-step dimensional design, conformed dimensions, and slowly changing dimensions.
- `crisp-dm-1.0`: the analysis cycle from business understanding to deployment.
- `datasciencepm-evaluating-crisp-dm` and `horvath-crisp-dm-lecture`: adapting and teaching the cycle.
