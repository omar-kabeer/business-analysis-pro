# Data Modelling Rules Reference

## The three levels

| Level | Audience | Contains | Excludes |
| --- | --- | --- | --- |
| Conceptual | Business | Concepts, definitions, key relationships | Attributes, keys, types |
| Logical | Analysts and designers | Entities, all attributes, keys, cardinality, normalisation | Platform, indexes, storage |
| Physical | Engineers | Tables, columns, types, indexes, partitions | Nothing platform-specific is excluded |

Do not skip conceptual. The arguments that surface while defining "customer" are the requirements work; skipping to entities buries them until build.

## Normalisation

- First normal form: atomic values, no repeating groups. A field holding a comma-separated list fails.
- Second: no partial dependency on part of a composite key.
- Third: no attribute depends on another non-key attribute. Storing both date of birth and age fails.

Denormalise deliberately, never accidentally, and record the reason and the consistency risk it introduces. Reporting structures are a legitimate reason; convenience during build is not.

## Relationship discipline

Read every relationship aloud in both directions:

> Each Customer may hold one or more Accounts.
> Each Account must be held by exactly one Customer.

If either sentence is false or ambiguous, the cardinality or the entity boundary is wrong. Capture optionality (may or must) as carefully as cardinality (one or many); most missed rules live in optionality.

## Identifiers

- Every entity needs an identifier that is unique, stable, and never reused.
- Prefer a natural key where one genuinely exists and never changes. Most natural keys change eventually, which is why surrogate keys dominate.
- Composite keys are legitimate in associative entities and awkward everywhere else.
- Never encode meaning into an identifier. Meaningful keys break when the meaning changes.

## Attributes

- Atomic. Split anything a user might want to search or sort on separately, such as address parts and name parts.
- One definition per attribute, and the definition explains the business meaning, not the storage format.
- Valid values enumerated where a list exists, with a rule for what happens when the list grows.
- Derived attributes are marked as derived with their formula, and are not stored unless there is a stated reason.
- Nullability is a business decision, not a technical one. Ask what it means for the value to be absent.

## Data dictionary entry

```
Attribute: settlement_currency
Entity: Payment Instruction
Business definition: The currency in which the beneficiary is credited.
Type: string, 3 characters
Valid values: ISO 4217 alpha-3 codes active at the value date
Mandatory: yes
Default: none
Source of record: Payments core
Owner: Head of Payments Operations
Privacy classification: not personal
Notes: differs from instruction_currency where FX is applied
```

The notes line matters. Most dictionary disputes are between two attributes that look identical and are not.

## Concept modelling versus data modelling

Concept modelling captures what the business means, including concepts that will never be stored. Data modelling captures what will be held. Keep them distinct; the concept model is the vocabulary that keeps requirements, rules, and the data model using the same words.

## Migration mapping

For each target field record: source system, source field, transformation rule, default when the source is empty, and the reconciliation check. Then produce two lists that are always more revealing than the mapping itself:

- Target fields with no source. These are new data that someone must produce, and they are usually discovered too late.
- Source fields with no target. Each one is either genuinely obsolete or a requirement nobody wrote down. Do not delete without asking.

## Handoffs

- Rendering the ERD, class model, or DFD: `visual-modelling`.
- Metrics, KPIs, and analytical definitions: `data-analysis`.
- Warehouse, marts, pipelines, and data quality thresholds: `business-intelligence`.
- Retention, residency, and lawful basis for personal data: `regulatory-compliance`.
- Interface and integration contracts: `architecture`.
