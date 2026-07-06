# Agile Artifacts Reference

## Backlog hierarchy

- Outcome: the measurable result to move.
- Epic: a large body of work serving an outcome, too big for one sprint.
- Feature: a shippable slice of an epic.
- Story: a small, valuable, testable increment.
- Task: implementation step under a story (team-owned).

## Story format

As a [role], I want [capability], so that [benefit].
Plus acceptance criteria in Given/When/Then, covering happy path, alternates, and edge cases.

## INVEST

Independent, Negotiable, Valuable, Estimable, Small, Testable. If a story fails one, reshape it.

## Story splitting patterns

- Workflow steps: slice by stages of the process.
- Business rule variations: simple rule first, exceptions later.
- Happy path first, then error handling.
- Data variations or types.
- Interface variations (one platform first).
Each slice must still deliver observable value.

## Definition of Ready (example)

- Clear, INVEST-compliant, with acceptance criteria.
- Dependencies known; no blocking unknowns.
- Sized by the team; testable; fits in a sprint.

## Definition of Done (example)

- Code complete, reviewed, and merged.
- Acceptance criteria met and tested.
- Non-functional needs checked (performance, security, accessibility as relevant).
- Documentation updated; no known critical defects.

## Prioritisation options

- MoSCoW: Must, Should, Could, Won't now.
- WSJF: cost of delay divided by job size.
- Value vs effort for quick triage.
Keep the order tied to outcomes and risk, and revisit at refinement.
