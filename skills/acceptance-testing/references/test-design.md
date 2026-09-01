# Test Design

How an acceptance criterion becomes a set of cases that survive contact with a real business.

## From requirement to test condition to test case

ISO/IEC/IEEE 29119-3 separates three things, and keeping them separate is what makes coverage measurable. The **test basis** is the requirement, rule, or model being tested. A **test condition** is a testable aspect of that basis. A **test case** is the executable instance with data, steps, and an expected result.

For the rule "refunds above 50,000 require dual approval":

| Case | Type | Expected |
| --- | --- | --- |
| Refund of 49,999 by one approver | Boundary, below | Completes |
| Refund of 50,000 by one approver | Boundary, at | Requires second approver |
| Refund of 50,001 by one approver | Boundary, above | Requires second approver |
| Refund of 60,000 with two approvers | Positive | Completes |
| Refund of 60,000, same person approving twice | Negative | Rejected, single-person rule cited |
| Refund of 60,000, second approver lacks authority | Negative | Rejected with a clear message |
| Approval given then withdrawn before completion | Exception | Refund held, not released |

One criterion, seven cases. This is why coverage counted in requirements flatters you and coverage counted in cases protects you.

## Selecting a design technique

| Technique | Use it when | Stop using it when |
| --- | --- | --- |
| Equivalence partitioning | Inputs fall into classes that behave identically, and exhaustive testing is impossible | Classes interact, so behaviour depends on combinations rather than single values |
| Boundary value analysis | Any threshold, limit, range, or cut-off exists. Most defects sit here | The value is categorical with no ordering |
| Decision tables | Several conditions combine to select an outcome, especially where rules interact or overlap | There is one condition, or the table exceeds roughly 16 reachable rules and should be decomposed |
| State transition | The entity has a lifecycle and illegal transitions must be refused | The object is stateless within the scope under test |
| Scenario and end-to-end | Real business tasks cross several requirements and systems. Where integration and handoff defects live | You are proving a single rule, where an end-to-end run only adds noise |
| Pairwise or combinatorial | Many independent configuration parameters, and full factorial coverage is unaffordable | Interactions are known to be higher order than pairs, for example tax by jurisdiction by product class |
| Exploratory, charter-based | The specification is evolving, or you want to find what scripted tests were designed to miss | You need repeatable regression evidence for an audit trail |

Hand complex rule sets to `decision-analysis` to build the decision table, then test every reachable rule and the rules the table says are unreachable.

## Writing the case

Each case carries a unique stable identifier, the test basis it traces to, preconditions, inputs and data, steps, and an expected result. Identifiers must not be renumbered when cases are inserted or deleted, because the coverage matrix and the defect log both point at them.

Expected results are specific. "Order total is 1,207.50 including 7.5 percent tax, and the confirmation email is queued within 5 seconds" is an expected result. "Order processes correctly" is a wish. Where tolerance is legitimate, state the tolerance rather than dropping the precision: "P95 response under 800 ms across a 30 minute soak".

## Executable acceptance criteria

Where the team runs BDD, express criteria in Given, When, Then form so the same statement serves as the criterion and the automated test. This works well for rule-shaped behaviour and badly for subjective quality.

```gherkin
Feature: High-value wire transfer sanctions gating

  Scenario Outline: Route wires by amount and sanctions status
    Given a corporate account with status active and balance <Balance>
    And the sanctions screening service is available
    When a wire of <Amount> is submitted to beneficiary <BIC>
    Then the transaction routes to <Destination>
    And an audit entry <Code> is written within 200 ms

  Examples:
    | Balance   | Amount  | BIC         | Destination            | Code     |
    | 1,000,000 | 50,000  | BOFAUS3NXXX | AUTOMATED_CLEARING     | AUD_2001 |
    | 1,000,000 | 150,000 | CHASUS33XXX | COMPLIANCE_HOLD_QUEUE  | AUD_2002 |
    | 1,000,000 | 250,000 | SANCTIONED  | REJECT_SANCTION_BLOCK  | AUD_2003 |
```

Two cautions from practice. Gherkin written after the code is documentation, not specification, and it will drift. Gherkin written for user interface mechanics ("When I click the blue button") is brittle and states the wrong thing; write the business outcome instead.

## Coverage that means something

Track four numbers and report them together, because any one alone can be gamed:

1. Requirement coverage: in-scope requirements with at least one case. Target 100 percent before execution starts.
2. Condition coverage: identified test conditions with at least one case. This exposes the requirement that has one happy-path case and six untested rules.
3. Execution coverage: cases run against cases planned, by risk band.
4. Orphan count: cases tracing to no valid requirement. Target zero. Orphans are either scope creep or a missing requirement, and both need a decision.

## Test data

Realistic volume, realistic mess. Clean data proves nothing, because production is not clean.

Cover the awkward cases deliberately: long names, non-Latin characters and combining marks, missing optional values, expired and archived records, duplicate entities, maximum and minimum permitted values, records created under a previous version of the rules, and time-zone and daylight-saving boundaries.

Where production data is used, state the masking or anonymisation applied and route the privacy handling and lawful basis to `regulatory-compliance`. Where synthetic data is generated, state the rules and schemas it was generated from, because synthetic data that ignores a real correlation will hide the defect that correlation causes.

## What this skill does not design

Unit, component, contract, and system integration tests belong to engineering. Formal inspections, walkthroughs, and peer reviews of documents before anything is built belong to `quality`. This skill starts where there is a built thing to accept, and it stops at the acceptance decision.
