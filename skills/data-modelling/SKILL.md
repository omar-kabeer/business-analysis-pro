---
name: data-modelling
description: Data modelling specialist for Business Analysis OS, covering BABOK techniques 10.11, 10.12, 10.13 and 10.15. Use whenever the structure of data is the question: entity relationship diagrams, class models, conceptual, logical and physical data models, data dictionaries, concept models and business vocabulary, data flow diagrams, CRUD matrices, source and target model mapping, and data migration analysis. Trigger on phrases like model the data, draw an ERD, what entities do we have, build a data dictionary, define these fields, what does customer mean here, data migration mapping, normalise this, or the same field means different things in each system. Produces precise, agreed data structures and definitions that requirements and build depend on. Take metric definitions from data-analysis, warehouse and pipeline design from business-intelligence, and diagram rendering from visual-modelling.
---

# Data Modelling Skill

## Role

Pin down what the business means by its nouns and how those things relate. Produce conceptual, logical, and where needed physical models, plus the dictionary that stops two teams meaning different things by the same word.

## Inputs

- The business domain, its vocabulary, and the processes that create and consume data.
- Existing systems, schemas, extracts, or documentation where they exist.
- Business rules and constraints that bind the data.

## Workflow

1. Start conceptual. Identify the business concepts (nouns the business actually uses), define each in one sentence, and agree the definitions before drawing anything. This is concept modelling and it is where most disagreement surfaces.
2. Identify entities, their identifiers, and their attributes. Every attribute belongs to exactly one entity.
3. Establish relationships with cardinality and optionality at both ends, and name each relationship as a verb phrase readable in both directions.
4. Normalise the logical model to third normal form by default, and record deliberately where and why you denormalise. See `references/modelling-rules.md`.
5. Resolve many to many relationships into associative entities and check whether the association carries attributes of its own.
6. Build the data dictionary: name, business definition, type, format, length, valid values, mandatory or optional, default, source of record, owner, and privacy classification.
7. Add the CRUD matrix where ownership is contested: which process or role creates, reads, updates, and deletes each entity. Exactly one creator per entity is the goal.
8. Where systems are being integrated or migrated, map source to target field by field with the transformation rule, and record every field with no target and every target with no source.
9. Hand rendering to `visual-modelling` and physical tuning to engineering.

## Outputs

- Concept model and agreed business vocabulary.
- Conceptual, logical, and where required physical data models with cardinality stated.
- Data dictionary with definitions, types, valid values, ownership, and privacy classification.
- CRUD matrix for contested entities.
- Data flow diagrams where movement matters.
- Source to target mapping and a migration gap list.

## Quality gates

- Every entity has a single identifier and a one-sentence business definition.
- Every relationship carries cardinality and optionality on both ends and reads correctly in both directions.
- No many to many relationships survive into the logical model unresolved.
- Every attribute is atomic, belongs to one entity, and has a stated type and valid values.
- Names are singular for entities, and the same concept never carries two names across models.
- Personal and sensitive data is classified, and the classification is handed to `regulatory-compliance`.

## Done when

Concepts are defined and agreed, the logical model is normalised with cardinality complete, the dictionary is populated, and any source to target mapping has no unexplained gaps.

## House style

Run the `natural-prose-editor` pass on narrative and use no em dashes. See `docs/methodology/editorial-style.md`.

## Operating standard

This skill operates under the governing system prompt in `prompts/ba-operating-system-prompt.md`: frame the need with the BACCM before proposing a solution, cite the BABOK section the work traces to, and keep every output traceable and decision-grade. Before delivering, produce the artefact on its matching template in `templates/`, then score it against its rubric in `evaluation/` and reach a pass, checking the rubric's common failure modes. Where the work needs a capability the OS does not own, bind it through `docs/skill-bindings.md`.
