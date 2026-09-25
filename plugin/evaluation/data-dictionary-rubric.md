# Data Dictionary Evaluation Rubric

A repeatable rubric for judging whether a data dictionary defines data elements completely. A data dictionary records the definitions, types, and domains of the data elements used by a solution. Used by the data-modelling and information-management skills. Based on BABOK Data Dictionary (10.12).

## Scoring scale

For each dimension score 0 to 3: 0 absent, 1 weak, 2 adequate, 3 strong.

## Dimensions

| # | Dimension | What good looks like |
| --- | --- | --- |
| 1 | Elements defined | Every data element is defined. |
| 2 | Types and domains | Each element has a data type and its permitted values or domain. |
| 3 | Format and rules | Format, length, and validation rules are stated where they apply. |
| 4 | Single source | Each element is defined once, with no conflicting definitions. |
| 5 | Consistent naming | Names follow a consistent convention. |
| 6 | Relationships | Composition or dependency between elements is noted where relevant. |
| 7 | Complete | The dictionary covers the elements the solution uses. |

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
