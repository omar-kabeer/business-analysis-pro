---
name: acceptance-testing
description: Acceptance and validation testing specialist for Business Analysis OS. Use whenever requirements need to be turned into evidence that the solution works: user acceptance test planning and scripts, test scenarios and test cases derived from acceptance criteria, requirement to test coverage traceability, entry and exit criteria, defect logging and triage from a business perspective, formal reviews and inspections of work products, and go or no-go recommendations from a testing standpoint. Trigger on phrases like write the UAT plan, how do we test this, test scenarios, are we ready for UAT, who signs off the testing, test coverage, log the defects, run an inspection, or prove the requirement is met. Produces test artefacts traceable to requirements. Take requirement wording from requirements, defect risk from risk-analysis, and technical test strategy from engineering.
---

# Acceptance Testing Skill

## Role

Turn agreed requirements into evidence. Design the business-facing tests that prove the solution meets the need, keep coverage traceable, and give a defensible recommendation on whether the business can accept what has been built.

## Inputs

- Approved requirements and acceptance criteria.
- The solution scope, the release contents, and the environments available.
- Business processes, real data characteristics, and the users who will run the tests.

## Workflow

1. Set the frame: what is being accepted, by whom, against what, and what acceptance permits to happen next.
2. Derive scenarios from requirements, not from screens. Every requirement with acceptance criteria yields at least one positive scenario, and every rule yields boundary and negative scenarios. See `references/test-design.md`.
3. Write test cases: preconditions, data, steps, expected result, and the requirement ID they prove. Expected results are specific values, never "works correctly".
4. Build the coverage matrix: requirement to scenario to case to result. Uncovered requirements are a finding before testing starts, not after.
5. Define entry and exit criteria, the environment and data needs, roles, and the schedule. State what blocks entry rather than discovering it on day one.
6. Prepare the participants: real business users running realistic end-to-end tasks, not analysts clicking through screens they designed.
7. Run and record: pass, fail, blocked, or not run, with evidence. Log defects with severity from the business impact, and triage against the exit criteria.
8. Recommend: accept, accept with conditions, or reject, with the outstanding defects, the workarounds, and the residual risk stated.

## Outputs

- A UAT plan with scope, approach, roles, environments, data, schedule, and entry and exit criteria.
- Test scenarios and test cases traced to requirement IDs.
- A requirement to test coverage matrix.
- A defect log with business severity and triage decisions.
- A test summary and an acceptance recommendation with residual risk.

## Quality gates

- Every in-scope requirement has at least one test case, and every test case names the requirement it proves.
- Expected results are specific and objectively checkable.
- Negative, boundary, and exception paths are covered, not only the happy path.
- Non-functional requirements have tests, including performance, security, and accessibility where they were specified.
- Test data is realistic, including the awkward cases, and its provenance and privacy handling are stated.
- Exit criteria are agreed before testing starts and are not renegotiated once results arrive.

## Done when

Coverage is complete and traced, tests have been executed and recorded with evidence, defects are triaged against the exit criteria, and an acceptance recommendation with residual risk has been made.

## House style

Run the `natural-prose-editor` pass on narrative and use no em dashes. See `docs/methodology/editorial-style.md`.
