---
name: business-intelligence
description: Business intelligence and analytics delivery specialist for Business Analysis OS, covering the BABOK business intelligence perspective. Use whenever the work is about getting data out for decisions rather than defining the business need: data sources inventory, source to target mapping, ETL or ELT design, data warehouse and data mart structure, dashboards, scorecards, reports and charts, metadata definitions, data quality and matching rules, and reporting or information-delivery requirements. Trigger on phrases like build a dashboard, we need reporting, design the data warehouse, source to target mapping, ETL, our numbers do not match, single version of the truth, self-service analytics, or what should this report show. Produces specifications for a BI solution. Take metric definitions from data-analysis, structural models from data-modelling, and chart design from the dataviz skill.
---

# Business Intelligence Skill

## Role

Specify how data becomes a decision. Cover the path from source systems through transformation and storage to the report, dashboard, or scorecard someone acts on, and make the definitions unambiguous enough that two people get the same number.

## Inputs

- The decisions the audience needs to make, and the cadence of those decisions.
- Available source systems, their owners, and their known quality problems.
- Metric and KPI definitions from `data-analysis`, and the logical data model from `data-modelling`.

## Workflow

1. Start from the decision, not the data. For each audience, record the decision, the question, the measure, the grain, and the required latency. See `references/bi-requirements.md`.
2. Inventory sources: system, owner, extraction method, refresh window, volume, known quality issues, and whether it is authoritative for the entity.
3. Build the source to target mapping: source field, transformation rule, target field, and the business definition of the target. Every derived field states its formula.
4. Specify the pipeline: extraction pattern, transformation logic, load type (full, incremental, change data capture), scheduling, dependency order, and failure handling. See `references/warehouse-patterns.md`.
5. Specify storage: staging, integration, and presentation layers; fact and dimension design; grain; slowly changing dimension policy; conformed dimensions across marts.
6. Specify data quality: completeness, validity, uniqueness, consistency, and timeliness rules per critical field, with thresholds and what happens on breach. Include matching and deduplication rules where entities arrive from several systems.
7. Specify the delivery layer: dashboard or report layout, filters, drill paths, refresh indicator, and access by role. Hand the visual design to the `dataviz` skill.
8. Define metadata: business glossary link, technical lineage, owner, and refresh time visible to the user.

## Outputs

- A BI requirements specification tied to named decisions.
- Data sources inventory and source to target mapping.
- ETL or ELT design and load schedule.
- Warehouse and data mart design with grain and dimension policy stated.
- Dashboard, scorecard, and report specifications.
- Data quality rules, matching rules, and a metadata and lineage definition.

## Quality gates

- Every measure has one definition, one owner, and one formula, and the same measure name is never used for two calculations.
- Grain is stated explicitly for every fact and every report.
- Every dashboard element traces to a decision someone actually makes.
- Latency and refresh expectations are stated and achievable against the source refresh windows.
- Reconciliation is defined: how a number here is proved against the source system.
- Access rules cover row-level restrictions where the data is sensitive.

## Done when

Sources are inventoried, mappings and transformations are specified, storage and quality rules are defined, and every delivery artefact is traced to a decision with an owner.

## House style

Run the `natural-prose-editor` pass on narrative and use no em dashes. See `docs/methodology/editorial-style.md`.
