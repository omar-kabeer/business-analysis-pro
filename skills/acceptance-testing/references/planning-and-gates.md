# Planning, Risk Prioritisation, and Gates

## The three planning layers

ISO/IEC/IEEE 29119-2 separates organisational test policy, test management for an initiative, and the dynamic sub-processes that design, execute, and report. Most acceptance plans fail because they jump straight to the third layer. Before writing a case, settle the second: what is in scope, what risk appetite applies, who decides, and what "done" means.

An acceptance strategy answers, in order: what is being accepted, against which basis, by which types (see `references/acceptance-types.md`), in which environments with which data, by whom, against which entry and exit criteria, and with what evidence retained and for how long.

## Risk-based prioritisation

Test depth follows risk, not requirement order and not the order features were built.

Score each requirement or feature on two axes and multiply:

**Likelihood** rises with code volatility, architectural complexity, number of integration points, team unfamiliarity, and historical defect density in that area.

**Impact** rises with financial exposure, safety consequence, regulatory consequence, number of users affected, customer visibility, and the cost or impossibility of a workaround.

| Risk band | Test depth | Execution frequency | Automation |
| --- | --- | --- | --- |
| High | All techniques, full boundary and negative coverage, independent execution | Every build | Mandatory in the pipeline |
| Medium | Positive and boundary coverage, key negatives | Every release candidate | Automate the regression subset |
| Low | Representative positive case, sampled | Once per release | Optional |

Record the scores. When someone later asks why an area was lightly tested, the answer is a recorded judgement rather than an omission.

## Entry and exit criteria

**Entry**: requirements baselined and identifiers stable, build deployed and smoke-tested, environment stable and dedicated for the window, test data loaded with provenance recorded, cases reviewed and approved, testers named, trained, and released from day-job duties, defect process and severity definitions agreed, and the acceptance owner confirmed.

**Exit**: planned coverage executed by risk band, zero open critical, zero open high or a written accepted exception per defect naming the owner and the date, all mediums triaged with owners and dates, non-functional and compliance acceptance evidenced against their stated thresholds, coverage matrix clean in both directions, and sign-off from the named business owner.

Agree these before execution begins and date the agreement. Criteria negotiated after the results arrive are not criteria, they are a negotiation.

## Definition of ready and definition of done

Acceptance quality is set upstream. A story that enters development without testable criteria produces a test that cannot be written and a defect argument that cannot be settled.

Ready means outcomes, business rules, and non-functional bounds are unambiguous, criteria are stated verifiably, dependencies and test data are identified and available, and security, accessibility, and compliance obligations are tagged. Use `checklists/definition-of-ready.md`.

Done means all acceptance scenarios pass with retained evidence, no open critical or high defect remains, non-functional and security checks pass without unmitigated findings, and documentation, runbooks, and monitoring are updated. Use `checklists/definition-of-done.md`.

## Staged quality gates

Gates convert acceptance from an opinion into a sequence of checkable decisions. Set thresholds with the organisation; the shape below is the pattern, and the numbers are illustrative until yours are agreed.

| Gate | Stage | Threshold | Hard stop | Authority |
| --- | --- | --- | --- | --- |
| G0 | Requirement readiness | Every in-scope story has verifiable criteria, a risk score, and a test data plan | Missing criteria, or an unmapped regulatory obligation | Lead BA and product manager |
| G1 | Build and merge | Unit and static checks clean, no high-severity dependency finding | Failing build, secrets in artefacts | Automated pipeline |
| G2 | System and business acceptance | Critical path scenarios pass, contract tests pass, regression pass rate at the agreed threshold | Open critical or blocker defect, failed compliance rule | BA lead with QA |
| G3 | Operational readiness | Performance meets the stated latency and throughput targets, restore and rollback rehearsed, security baseline verified | Service level breach under peak load, failed rollback | Operations or SRE lead |
| G4 | Production rollout | Canary error rate within bounds, synthetic monitors green | Anomalous change failure, performance regression beyond bound | Release owner |

## Go or no-go

A release decision is not the arithmetic of a pass rate. Evaluate five pillars and require each to stand on its own, because a strong score on four does not compensate for a failure on the fifth.

1. **Quality exposure.** Open severity 1 and 2 defects, regression pass rate, and the areas left untested by design.
2. **Security posture.** Unmitigated findings against the agreed baseline, and dependency and container attestations.
3. **Operational stability.** Runbooks executed, rollback verified, monitoring and alerting live, support model staffed.
4. **Compliance and audit.** Traceability from obligation to requirement to test evidence, retained and dated, with compliance sign-off.
5. **Business value and readiness.** Business owner sign-off, users trained, cutover and fallback plan agreed, and the benefit measurement baseline captured so `solution-evaluation` can close the loop later.

Where a composite readiness index is used, publish the weights before the results are known, and set a floor per pillar so a weak pillar cannot be averaged away.

Record the decision, the conditions, the owners, the dates, and the residual risk accepted. Route the residual risk to `risk-analysis` for the register and the decision itself to `governance` for the decision log.

## Measures worth tracking

Track a small set and read them together. In-process: requirement and condition coverage, execution progress against plan by risk band, defect detection rate by phase, defect removal efficiency, and reopen rate. Post-release: change failure rate, time to restore, and defects escaping to production per release, which is the only honest verdict on whether acceptance worked.

Rework rate, meaning work redone because of late-discovered quality failure, is the metric that points back at upstream readiness rather than at testers. A high rework rate is a G0 problem, not a G2 problem.
