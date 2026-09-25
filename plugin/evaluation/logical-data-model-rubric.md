# Logical Data Model Evaluation Rubric

A repeatable rubric for judging whether a logical data model represents the data requirements soundly, independent of technology. A logical data model defines entities, attributes, and relationships without committing to a storage technology. Used by the data-modelling skill. Based on BABOK Data Modelling (10.15) and the Business Intelligence Perspective (11.2).

## Scoring scale

For each dimension score 0 to 3: 0 absent, 1 weak, 2 adequate, 3 strong.

## Dimensions

| # | Dimension | What good looks like |
| --- | --- | --- |
| 1 | Entities complete | The entities the domain requires are present, with none missing or spurious. |
| 2 | Attributes | Each entity carries its attributes, with logical types. |
| 3 | Keys | Identifiers are defined for each entity. |
| 4 | Relationships | Relationships and their cardinality are correct. |
| 5 | Normalized | The model is normalized, with no unjustified redundancy. |
| 6 | Technology-neutral | The model stays logical, without physical storage detail. |
| 7 | Consistent | The model is consistent with the concept model and data dictionary. |

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
