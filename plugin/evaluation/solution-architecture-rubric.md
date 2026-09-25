# Solution Architecture Evaluation Rubric

A repeatable rubric for judging whether a solution architecture is sound and justified. A solution architecture describes the components of a solution, their interfaces, and how they meet the requirements. Used by the architecture skill. Based on BABOK Business Intelligence Perspective (11.2) and design definition practice.

## Scoring scale

For each dimension score 0 to 3: 0 absent, 1 weak, 2 adequate, 3 strong.

## Dimensions

| # | Dimension | What good looks like |
| --- | --- | --- |
| 1 | Meets requirements | The architecture satisfies the functional and non-functional requirements. |
| 2 | Components | The components and their responsibilities are defined. |
| 3 | Interfaces | The interfaces and integrations between components are defined. |
| 4 | Trade-offs | The design decisions and their trade-offs are justified. |
| 5 | Non-functional | Performance, security, scalability, and availability are addressed. |
| 6 | Feasible | The architecture is feasible within the technology and constraints. |
| 7 | Traceable | The components trace to the requirements they realize. |

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
