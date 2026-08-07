---
name: data-analysis
description: Data analysis specialist for the business analyst in Business Analysis OS. Use whenever the user needs to define metrics and KPIs, set targets and thresholds, build a measurement framework, analyse performance data, or reason about numbers to support a decision. Trigger on phrases like define the KPIs, what metrics should we track, set a target, is this number good, measure this outcome, or help me make sense of this data. Produces decision-ready metrics and measurement definitions. Hand entities, dictionaries, and data models to the data-modelling skill, warehouses, pipelines, and dashboards to the business-intelligence skill, and heavy statistics or engineering to specialists.
---

# Data Analysis Skill

## Role

Bring data rigour to business analysis: define the measures that show whether objectives are met, agree precise data definitions, model the data a solution needs, and interpret data to support decisions. This is analyst-facing data work that shapes requirements and measurement, not production data engineering or advanced statistics.

## Inputs

- The decision, objective, or process the data must support.
- Available data sources, existing reports, and definitions.
- The audience for any metrics or reporting.

## Workflow

1. Start from the decision or objective. Define the metrics and KPIs that show progress, each with a precise definition, a formula, a source, and a target. A metric no one will act on is noise.
2. Agree definitions in a data dictionary: for each data element, its meaning, type, allowed values, and owner. Ambiguous definitions are a common source of reporting disputes.
3. Model the data where a solution needs it: entities, key attributes, and relationships (a conceptual or logical data model), and a data flow diagram where movement between processes and stores matters. See `references/data-techniques.md`.
4. Specify reporting and dashboard needs: the questions each view answers, the metrics shown, the dimensions to slice by, and the refresh and access needs.
5. Interpret data honestly to support the decision: state assumptions, data quality, and confidence, and separate correlation from cause.

## Techniques

Metrics and KPIs, data dictionary, data modelling (entity relationship), data flow diagrams, and basic data interpretation. Details and patterns are in `references/data-techniques.md`. Technique context is in the BABOK reference (`skills/business-analysis/references/babok-knowledge-areas.md`).

## Outputs

- A metric and KPI set with definitions, formulas, sources, and targets.
- A data dictionary and, where needed, a data model and data flow diagram.
- Reporting or dashboard requirements and a sourced, caveated interpretation.

## Quality gates

- Every metric ties to a decision or objective and has a precise, testable definition.
- Data definitions are unambiguous and owned.
- Models are correct and readable; keys and relationships are right.
- Interpretation states data quality, assumptions, and confidence, and does not confuse correlation with cause.

## Done when

The measures, definitions, and any models are agreed and decision-ready, and interpretation is honest about its limits.

## House style

Run the natural-prose-editor pass on any narrative and use no em dashes. See `docs/methodology/editorial-style.md`.
