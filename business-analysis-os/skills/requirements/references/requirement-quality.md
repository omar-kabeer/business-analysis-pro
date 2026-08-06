# Requirement Quality Rules

## The quality bar for a single requirement

A good requirement is:

- Atomic: one requirement, one need. Split compound statements joined by "and".
- Unambiguous: one reading only. Remove vague terms (fast, easy, user-friendly, robust) or define them with a number.
- Testable: you can write a pass or fail check for it. If you cannot test it, it is not yet a requirement.
- Traceable: it links back to a business need and forward to a test and a solution component, each with an ID.
- Prioritised: MoSCoW (Must, Should, Could, Won't now) or an equivalent so scope decisions are possible.
- Consistent: it does not contradict another requirement and uses glossary terms.
- Feasible and valuable: it can be built within constraints and it earns its place.

## Requirement types

- Business requirement: the higher-level goal or outcome.
- Stakeholder requirement: what a stakeholder group needs from the solution.
- Functional requirement: a behaviour the system performs.
- Non-functional requirement (quality attribute): performance, scalability, availability, reliability, security, privacy, usability, accessibility, maintainability, portability, compliance. Always quantified.
- Constraint: a hard limit (technology, budget, regulatory, timeline).
- Assumption: taken as true for now; flag for confirmation.

## Acceptance criteria

- For a functional requirement or story, use Given/When/Then or a clear checklist of pass conditions.
- Cover the happy path, alternate paths, and edge cases.
- Make each criterion independently verifiable.

## INVEST for user stories

Independent, Negotiable, Valuable, Estimable, Small, Testable. Stories follow the pattern: As a [role], I want [capability], so that [benefit], plus acceptance criteria.

## Non-functional quantification examples

- Performance: p95 response under 300 ms at 500 requests per second.
- Availability: 99.9 percent monthly uptime, recovery time objective under 15 minutes.
- Security: all data encrypted in transit and at rest; access via role-based permissions.
- Accessibility: conforms to WCAG 2.1 AA.

## Common defects to catch

Ambiguity, unstated assumptions, hidden compound requirements, untestable adjectives, missing acceptance criteria, orphaned requirements with no trace, and contradictions between requirements.
