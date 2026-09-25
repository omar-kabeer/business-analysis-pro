# Class Model / Class Diagram Evaluation Rubric

A repeatable rubric for judging whether a class model represents the domain structure correctly. A class model shows classes, their attributes, and the associations between them. Used by the data-modelling and visual-modelling skills. Based on BABOK Data Modelling (10.15).

## Scoring scale

For each dimension score 0 to 3: 0 absent, 1 weak, 2 adequate, 3 strong.

## Dimensions

| # | Dimension | What good looks like |
| --- | --- | --- |
| 1 | Classes complete | The classes relevant to the domain are present, with none missing or spurious. |
| 2 | Attributes | Each class carries the attributes it needs, with types where relevant. |
| 3 | Associations | Associations between classes are correct and named. |
| 4 | Multiplicities | Multiplicities on each association end are stated and correct. |
| 5 | Generalization | Inheritance and generalization are used correctly where they apply. |
| 6 | Notation valid | UML class notation is used consistently. |
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
