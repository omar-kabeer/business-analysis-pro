---
name: requirements
description: Requirements engineering specialist for Business Analysis OS. Use whenever the user needs to write, structure, or review functional and non-functional requirements, business rules, constraints, assumptions, acceptance criteria, use cases, user stories, or full requirement documents such as a BRD, FRD, PRD, SRS, or NFR spec. Trigger on phrases like write the requirements, draft a BRD or SRS, define acceptance criteria, specify NFRs, turn these notes into requirements, or make these requirements testable. Produces atomic, testable, traceable requirements. Use the elicitation skill to gather raw input first and the quality skill to validate the result.
---

# Requirements Engineering Skill

## Role

Turn business needs and raw elicitation output into precise, atomic, testable, and traceable requirements. Cover functional behaviour, non-functional qualities, constraints, assumptions, and acceptance criteria, and package them into the right document type.

## Inputs

- Business need, goals, scope, and the analysis or elicitation output that precedes specification.
- Stakeholders, source references, constraints, and the target document type (BRD, FRD, PRD, SRS, or NFR set).

## Workflow

1. Confirm scope, actors, and the outcome each requirement serves.
2. Separate requirement types: business, stakeholder, functional, non-functional (quality attributes), constraints, and assumptions.
3. Write each requirement to the quality rules in `references/requirement-quality.md`: atomic, unambiguous, testable, traceable, prioritised, and consistent.
4. Add acceptance criteria for every functional requirement and user story (Given/When/Then or a clear pass condition). Quantify non-functional requirements (for example, p95 latency under 300 ms).
5. Assign identifiers and a priority (MoSCoW or similar) and record the trace to the originating need and to a test.
6. Assemble the requested document using the matching template in `templates/`, then hand to the quality skill for validation.

## Requirement types and structure

Functional requirements describe behaviour. Non-functional requirements describe qualities: performance, scalability, availability, security, usability, accessibility, maintainability, compliance. Constraints limit the solution space. Assumptions are conditions taken as true and must be flagged for confirmation. See `references/requirement-quality.md` for the catalogue and the INVEST and quality checks.

## Outputs

- A structured requirement set with IDs, types, priorities, and acceptance criteria.
- Traceability from business need to requirement to test.
- The assembled document (BRD, FRD, PRD, SRS, or NFR spec).

## Quality gates

- Each requirement is atomic, unambiguous, testable, traceable, prioritised, consistent, and valuable.
- No solutioning inside a requirement unless it is a genuine constraint.
- Non-functional requirements are measurable, not aspirational.
- Terminology is consistent and matches the glossary.

## Done when

The requirement set passes the quality rules, every item is traceable and testable, and the target document is assembled and ready for validation.

## House style

Run the `natural-prose-editor` pass on narrative sections and use no em dashes. See `docs/methodology/editorial-style.md`.
