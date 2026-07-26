# Evaluation: Customer Self-Service Portal BRD

The example BRD (`brd.md`) scored against `evaluation/brd-rubric.md`. This demonstrates the evaluation step that closes the OS workflow.

## Scores

| # | Dimension | Score | Evidence | Gap and fix |
| --- | --- | --- | --- | --- |
| 1 | Completeness | 3 | All template sections are present and populated | None |
| 2 | Clarity | 3 | Executive summary states need, recommendation, and the decision required | None |
| 3 | Objectives and measures | 3 | Four objectives, each with a measure and target | None |
| 4 | Requirement quality | 2 | Functional requirements carry Given/When/Then acceptance criteria; non-functional requirements are quantified | Some business rules could be cross-referenced to more requirements |
| 5 | Traceability | 3 | Functional requirements trace to objectives and sources; traceability section present | None |
| 6 | Assumptions and dependencies | 3 | Assumptions and dependencies are explicit and owned, with impact if wrong | None |
| 7 | Risks | 3 | Three key risks with impact and mitigation | None |
| 8 | Compliance and control | 3 | GDPR and PCI captured with evidence and owners | None |
| 9 | Sign-off readiness | 2 | Decision required is explicit; approvers named | Add target sign-off date |

## Total and verdict

Total: 25 of 27.

Verdict: Pass. The BRD is decision-grade and ready to go for funding approval. Two minor improvements would lift it further: cross-reference business rules to the requirements they govern, and add a target sign-off date. Neither blocks the decision.

## What this demonstrates

The OS took an unstructured request (`scenario.md`), produced a complete, traceable BRD (`brd.md`), and validated it against a repeatable rubric (`evaluation/brd-rubric.md`) with an objective score and verdict. This is the full MVP loop: orchestrator to business-analysis to BRD to evaluation.
