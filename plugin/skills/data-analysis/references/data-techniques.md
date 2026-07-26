# Data Techniques Reference

## Metrics and KPIs

A metric is a measure; a KPI is a metric tied to an objective with a target. For each, capture: name, precise definition, formula, unit, data source, owner, baseline, target, and reporting frequency. Prefer a small set of leading indicators (that predict) over many lagging ones (that only report). Every metric should drive a decision or action.

Guard against: vanity metrics (look good, change nothing), unclear definitions (two people compute it differently), and metrics with no owner.

## Data dictionary

A shared definition of each data element so reports and systems agree. For each element: name, business definition, data type, format, allowed values or range, source, and owner. This is the cheapest way to prevent reporting disputes.

## Data modelling (entity relationship)

Describe the data a domain needs:

- Entities: the things of interest (customer, order, account).
- Attributes: the facts about each entity (order date, amount).
- Relationships: how entities relate, with cardinality (one customer has many orders).
- Keys: the attribute or attributes that uniquely identify an entity.

Levels: conceptual (entities and relationships, business language), logical (attributes and keys, normalised), physical (implementation detail, usually engineering). Business analysts usually work at conceptual and logical levels.

## Data flow diagrams

Show how data moves: external entities (sources and sinks), processes (that transform data), data stores (where data rests), and data flows (arrows). Useful for understanding how information moves through a process or system and where it is created, read, updated, or deleted.

## Reporting and dashboards

For each report or dashboard view, capture: the question it answers, the audience and the decision it supports, the metrics shown, the dimensions to filter or group by, the level of detail, and the refresh and access requirements. A good dashboard answers a question and prompts an action, rather than showing every number available.

## Honest interpretation

State the data source, its quality and recency, and the assumptions behind any calculation. Distinguish correlation from causation. Give a confidence level rather than implying false precision. Flag where more or better data is needed before a decision should rely on the analysis.
