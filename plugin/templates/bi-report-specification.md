---
type: deliverable
domain: data
status: draft
version: 1.0.0
---

# Report and Dashboard Specification

## Purpose

Specify a reporting or dashboard deliverable so that it answers a real decision, uses definitions everyone agrees with, and can be built and reconciled without further interpretation.

## Document Control

| Field | Value |
| --- | --- |
| Report or dashboard name |  |
| Business owner |  |
| Technical owner |  |
| Version | 1.0.0 |
| Status | Draft |

## Decision frame

| Field | Value |
| --- | --- |
| Audience |  |
| Decision this supports |  |
| Question it answers |  |
| Cadence of the decision |  |
| Action threshold (what value triggers what action) |  |

If the action threshold cannot be filled in, the report is decoration.

## Delivery type

Standard report / ad hoc query / dashboard / scorecard / analytic / embedded operational. State why this type fits the decision cadence.

## Measures

| Measure | Business definition | Formula (numerator, denominator, exclusions) | Grain | Aggregation rule when rolled up | Source lineage | Definition owner |
| --- | --- | --- | --- | --- | --- | --- |

Additive, semi-additive, and non-additive measures behave differently when rolled up. Mark which is which.

## Dimensions and filters

| Dimension | Attributes used | Default filter | User-changeable | Notes |
| --- | --- | --- | --- | --- |

## Layout

Describe the elements top to bottom or left to right, what each shows, and the drill path from each. Hand visual design to the dataviz skill.

## Data sources

| Source system | Owner | Extraction method | Refresh window | Authoritative for | Known quality issues |
| --- | --- | --- | --- | --- | --- |

## Refresh and latency

| Field | Value |
| --- | --- |
| Required latency |  |
| Achievable given source windows |  |
| Refresh schedule |  |
| Refresh time shown to the user | Yes / No |

## Access

| Role | Rows visible | Columns restricted | Export permitted |
| --- | --- | --- | --- |

## Data quality rules

| Field | Dimension | Rule | Threshold | On breach |
| --- | --- | --- | --- | --- |

## Reconciliation

How a number in this report is proved against the source system: the control total, its frequency, and where the result is visible.

## Conventions

Currency, timezone, fiscal calendar, rounding, and null presentation. State these explicitly for any multi-country or multi-entity report.
