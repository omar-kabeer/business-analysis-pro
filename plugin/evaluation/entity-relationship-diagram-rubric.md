# Entity Relationship Diagram (ERD) Evaluation Rubric

A repeatable rubric for judging whether an entity relationship diagram models data correctly. An ERD shows the entities in a domain, their attributes, and the relationships between them. Used by the data-modelling and visual-modelling skills. Based on BABOK Data Modelling (10.15).

## Scoring scale

For each dimension score 0 to 3: 0 absent, 1 weak, 2 adequate, 3 strong.

## Dimensions

| # | Dimension | What good looks like |
| --- | --- | --- |
| 1 | Entities complete | The entities relevant to the domain are present, with none missing or spurious. |
| 2 | Attributes | Each entity carries its attributes, with data types or domains where relevant. |
| 3 | Keys | Primary keys, and foreign keys where used, are defined. |
| 4 | Relationships | Relationships between entities are correct and named. |
| 5 | Cardinality | The cardinality and optionality of each relationship are stated and correct. |
| 6 | Normalized | The model is normalized to an appropriate level, with no unjustified redundancy. |
| 7 | Readable | The diagram is legible and labelled so a reader can follow it unaided. |

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
