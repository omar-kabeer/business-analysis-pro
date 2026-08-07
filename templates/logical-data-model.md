---
type: deliverable
domain: data
status: draft
version: 1.0.0
---

# Logical Data Model

## Purpose

Define the things the business cares about, what they mean, how they relate, and the rules that bind them, at a level independent of any platform.

## Document Control

| Field | Value |
| --- | --- |
| Domain or subject area |  |
| Data owner |  |
| Modeller |  |
| Version | 1.0.0 |
| Status | Draft |

## Concept definitions

| Concept | Business definition (one sentence) | Agreed with | Synonyms in use | Notes |
| --- | --- | --- | --- | --- |

Agree definitions before drawing anything. Most modelling disputes are definition disputes.

## Entities

| Entity | Definition | Identifier | Volume estimate | Owner system | Notes |
| --- | --- | --- | --- | --- | --- |

Entity names are singular. Every entity has exactly one identifier that is unique, stable, and never reused.

## Attributes

| Entity | Attribute | Definition | Type | Format and length | Mandatory | Valid values | Default | Derived (formula) | Privacy class |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

## Relationships

| From | Verb phrase | To | Cardinality (from side) | Cardinality (to side) | Optionality | Rule it enforces |
| --- | --- | --- | --- | --- | --- | --- |

Read every relationship aloud in both directions. If either sentence is false or ambiguous, the model is wrong.

## Normalisation notes

State the normal form reached, and record every deliberate denormalisation with its reason and the consistency risk it introduces.

## CRUD matrix

| Entity | Process or role | Create | Read | Update | Delete |
| --- | --- | --- | --- | --- | --- |

Aim for exactly one creator per entity. More than one is a data ownership problem waiting to surface.

## Business rules bound to data

| Rule ID | Rule | Entities and attributes affected | Enforcement point |
| --- | --- | --- | --- |

## Source to target mapping

| Target entity.attribute | Source system | Source field | Transformation rule | Default when empty | Reconciliation check |
| --- | --- | --- | --- | --- | --- |

## Migration gaps

| Type | Item | Question to resolve | Owner |
| --- | --- | --- | --- |
| Target with no source |  | Who will produce this data |  |
| Source with no target |  | Obsolete, or an unwritten requirement |  |

## Diagram

Rendered by the visual-modelling skill. Reference the diagram file and its version here.
