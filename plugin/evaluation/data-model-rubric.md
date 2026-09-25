# Data Model Evaluation Rubric

A repeatable rubric for judging whether a data model represents the domain data correctly. A data model, such as an entity relationship or class model, shows the entities, attributes, and relationships of a domain. Used by the data-modelling and visual-modelling skills. Based on BABOK Data Modelling (10.15).

## Scoring scale

For each dimension score 0 to 3: 0 absent, 1 weak, 2 adequate, 3 strong.

## Dimensions

| # | Dimension | What good looks like |
| --- | --- | --- |
| 1 | Entities complete | The entities relevant to the domain are present, with none missing or spurious. |
| 2 | Attributes | Each entity carries its attributes, with types where relevant. |
| 3 | Relationships | Relationships between entities are correct and named. |
| 4 | Cardinality | Cardinality and optionality on relationships are stated and correct. |
| 5 | Keys | Identifiers and keys are defined. |
| 6 | Normalized | The model is normalized to an appropriate level, with no unjustified redundancy. |
| 7 | Consistent | The model is consistent with the concept model and the data dictionary. |

## Scoring anchors

Anchors describe the extreme scores; 1 and 2 interpolate between them.

| # | Score 0 (absent) | Score 3 (strong) |
| --- | --- | --- |
| 1 | Entities missing or spurious. | The entities the domain requires are present, none missing or spurious. |
| 2 | Attributes absent or untyped. | Each entity carries its attributes, with types where relevant. |
| 3 | Relationships wrong or unnamed. | Relationships between entities are correct and named. |
| 4 | Cardinality unstated or wrong. | Cardinality and optionality are stated and correct. |
| 5 | No identifiers or keys. | Identifiers and keys are defined. |
| 6 | Unjustified redundancy. | Normalized to an appropriate level, no unjustified redundancy. |
| 7 | Conflicts with the concept model or dictionary. | Consistent with the concept model and data dictionary. |

## Common failure modes

- Missing entity: a real domain thing has nowhere to live in the model.
- Many-to-many left unresolved: a relationship that needs an associative entity is drawn as a direct link.
- Cardinality guessed: one-to-many where the business allows many-to-many, or the reverse.
- Attribute in the wrong entity: data hung off the wrong thing, breaking normalization.
- Physical leak: table and column mechanics in a model that should be logical.
- Glossary drift: entity names that contradict the concept model or data dictionary.

## Result

Total the scores (maximum 21):

- Pass: 17 or higher with no dimension at 0.
- Pass with changes: 12 to 16, or a single quick-to-fix dimension at 1.
- Fail: below 12, or any dimension at 0.

Record findings by severity with a specific fix, and route material issues back to the data-modelling skill.

## Findings template

| Dimension | Score | Evidence | Gap and fix |
| --- | --- | --- | --- |
|  |  |  |  |
