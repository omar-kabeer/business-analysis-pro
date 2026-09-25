# Designs Evaluation Rubric

A repeatable rubric for judging whether a design is ready to be built or to inform a solution decision. A design is a usable representation of a solution that focuses on how value might be realized if the solution is built, and it is distinguished from a requirement by its intended use: a requirement focuses on the need, a design focuses on the solution. Used by the quality and architecture skills and applied to any design produced during requirements analysis and design definition. Based on BABOK Requirements and Designs (Chapter 2) and Define Design Options (7.5).

## Scoring scale

For each dimension score 0 to 3: 0 absent, 1 weak, 2 adequate, 3 strong.

## Dimensions

| # | Dimension | What good looks like |
| --- | --- | --- |
| 1 | Usable representation | The design is concrete enough for its audience to build from, evaluate, or decide on. |
| 2 | Satisfies requirements | The design traces to the requirements it realizes, and coverage of those requirements is complete. |
| 3 | Components and interfaces | The solution components and how they interact are defined at the right level of detail. |
| 4 | Value realization | How the design delivers the intended value or benefit is explicit. |
| 5 | Non-functional fit | Relevant quality attributes such as performance, security, and usability are addressed by the design. |
| 6 | Trade-offs | Options were considered and the rationale for the chosen approach is recorded. |
| 7 | Feasible | The design is technically and operationally achievable within the agreed constraints. |
| 8 | Consistent and unambiguous | The design is internally coherent and admits one interpretation. |
| 9 | Traceability | The design links back to needs and forward to build and test. |

## Result

Total the scores (maximum 27):

- Pass: 22 or higher with no dimension at 0.
- Pass with changes: 16 to 21, or a single quick-to-fix dimension at 1.
- Fail: below 16, or any dimension at 0.

Record findings by severity with a specific fix, and route material issues back to the architecture and requirements skills.

## Findings template

| Dimension | Score | Evidence | Gap and fix |
| --- | --- | --- | --- |
|  |  |  |  |
