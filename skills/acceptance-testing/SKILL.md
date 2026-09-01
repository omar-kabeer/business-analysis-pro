---
name: acceptance-testing
description: Acceptance and validation testing specialist for Business Analysis OS. Owns the acceptance strategy, the UAT plan, test conditions and cases derived from acceptance criteria, the requirement to test coverage matrix, entry and exit criteria, quality gates, business-severity defect triage, and the go or no-go recommendation. Use it when a built solution must be proved before the business accepts it, across business, user, functional, non-functional, integration, data, security, operational, compliance, and AI acceptance. Trigger on phrases like write the UAT plan, how do we test this, are we ready for UAT, who signs off, what is our test coverage, log and triage these defects, define entry and exit criteria, is this release ready, should we go live, or turn these acceptance criteria into tests. Take requirement wording from requirements, pre-build document reviews and inspections from quality, defect likelihood and exposure from risk-analysis, and unit, integration, and technical test strategy from engineering.
---

# Acceptance Testing Skill

## Role

Turn agreed requirements into evidence. Design the business-facing tests that prove the solution meets the need, keep coverage traceable in both directions, and give a defensible recommendation on whether the business can accept what has been built. Acceptance is a governance decision about value and risk, not an engineering search for bugs.

## Inputs

- Approved requirements, acceptance criteria, and business rules, with their identifiers.
- Solution scope, release contents, architecture style, and the environments and data available.
- Risk exposure per requirement or feature, and the regulatory obligations the solution must satisfy.
- The business users who will execute the tests and the named owner who will sign the acceptance decision.

## Workflow

1. Set the frame. Decide what is being accepted, by whom, against what basis, and what acceptance permits to happen next. Select the acceptance types in scope using `references/acceptance-types.md`; do not default to UAT alone.
2. Score risk before designing tests. Rank requirements and features by likelihood and business impact, then set test depth, execution frequency, and automation coverage from the score. See `references/planning-and-gates.md`.
3. Derive test conditions from requirements and rules, not from screens. Every acceptance criterion yields at least one positive condition, and every rule yields boundary, negative, and exception conditions. See `references/test-design.md`.
4. Write test cases with a stable identifier, preconditions, data, steps, a specific expected result, and the requirement identifier they prove. Expected results state values and observable outcomes, never "works correctly".
5. Build the coverage matrix in both directions: every in-scope requirement reaches at least one case, and every case traces back to a valid requirement. Uncovered requirements and orphan cases are findings raised before execution starts.
6. Fix entry and exit criteria, environments, data provenance, roles, schedule, and the quality gates each stage must pass. Agree them in writing before the first test runs.
7. Execute and record. Log pass, fail, blocked, or not run against each case with evidence, and raise defects with severity set from business consequence and priority set separately. See `references/quality-bar.md`.
8. Triage against the exit criteria rather than against sentiment, then recommend accept, accept with conditions, or reject, stating open defects, workarounds, conditions with owners and dates, and residual risk.

## Outputs

- An acceptance strategy and UAT plan covering scope, types, approach, roles, environments, data, schedule, and entry and exit criteria. Use `templates/uat-plan.md`.
- Test conditions and test cases traced to requirement identifiers.
- A requirement to test coverage matrix. Use `templates/requirements-traceability-matrix.md`.
- A defect log with business severity, priority, and triage decisions.
- A test summary, a release readiness view against the gates, and an acceptance recommendation with residual risk. See `templates/release-readiness-checklist.md`.

For a full worked run of this sequence at practitioner scale, including the defects, the disputed threshold, and the conditional recommendation, see `references/worked-example.md`.

## Quality gates

- Every in-scope requirement has at least one test case, and every test case names the requirement it proves. Orphans in either direction are zero.
- Every test case carries a unique stable identifier, preconditions, inputs, and an expected result that a reader can objectively check.
- Negative, boundary, and exception paths are covered, not only the happy path, and every business rule threshold is tested at, just below, and just above.
- Non-functional acceptance is planned and executed where those requirements exist, including performance, security, accessibility, and operational recovery.
- Test data is realistic in volume and mess, and its provenance, masking, and privacy handling are stated.
- Entry and exit criteria and gate thresholds are agreed and dated before execution begins, and are not renegotiated once results arrive.
- Any information item omitted from the test documentation is recorded with its rationale, the risk accepted, and who agreed it.

## Done when

Coverage is complete and traced both ways, tests have been executed and recorded with retained evidence, defects are triaged against the agreed exit criteria, the gates have been evaluated, and an acceptance recommendation with conditions and residual risk has been made to the named business owner.

## House style

Conformance authorities for test documentation and acceptance criteria, with the checks each one imposes, are recorded in `references/sources.md`. Run the `natural-prose-editor` pass on narrative and use no em dashes. See `docs/methodology/editorial-style.md`.
