# Service-Oriented Analysis Evaluation Rubric

A repeatable rubric for judging whether a service-oriented analysis identifies services soundly. Service-oriented analysis identifies and specifies the business and technical services a solution provides. Used by the architecture and business-architecture skills. Based on BABOK Business Architecture Perspective (11.4).

## Scoring scale

For each dimension score 0 to 3: 0 absent, 1 weak, 2 adequate, 3 strong.

## Dimensions

| # | Dimension | What good looks like |
| --- | --- | --- |
| 1 | Services identified | The services are identified from capabilities or processes. |
| 2 | Well-bounded | Each service has a clear boundary and single responsibility. |
| 3 | Interfaces | The service interfaces and contracts are defined. |
| 4 | Reusable | Services are defined for reuse across consumers where appropriate. |
| 5 | Granularity | The granularity of services is appropriate, not too fine or too coarse. |
| 6 | Dependencies | Dependencies between services are identified. |
| 7 | Aligned | The services align to capabilities and requirements. |

## Result

Total the scores (maximum 21):

- Pass: 17 or higher with no dimension at 0.
- Pass with changes: 12 to 16, or a single quick-to-fix dimension at 1.
- Fail: below 12, or any dimension at 0.

Record findings by severity with a specific fix, and route material issues back to the architecture skill.

## Findings template

| Dimension | Score | Evidence | Gap and fix |
| --- | --- | --- | --- |
|  |  |  |  |
