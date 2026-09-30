# Acceptance Testing Playbook

How to turn requirements into evidence that the solution works for the business, and give the business owner a sound basis to accept it. This playbook applies BABOK Acceptance and Evaluation Criteria (10.1), Validate Requirements (7.3), and Assess Solution Limitations (8.3). Test documentation follows ISO/IEC/IEEE 29119-3:2013 (`iso-29119-3`), and the verifiability of each requirement follows ISO/IEC/IEEE 29148 (`iso-29148`). Both copies are held for paraphrase only; their checks are in `sources/conformance/`.

## When this playbook applies

Use it when requirements need to be proven before go-live: planning user acceptance testing, writing scenarios and cases, tracing coverage, running test cycles, triaging defects, and preparing the acceptance recommendation. Use the quality skill for reviewing documents and the governance skill for release readiness overall.

## Step 1: Make every criterion testable

A test is only as good as the criterion it checks. Before planning, check each acceptance criterion:

- it is verifiable, so a pass or fail can be decided (ISO29119-AC-01; the same property is required of each requirement by ISO29148-RS-05);
- it states the expected observable result under stated conditions (ISO29119-AC-02);
- it traces to the requirement or feature it accepts (ISO29119-AC-03).

"The approval page works" fails all three; "Given an invoice awaiting approval, when the approver approves, then the ERP shows Approved within 1 minute" passes. Send untestable criteria back to their owner before testing starts.

## Step 2: Plan the acceptance

State what is and is not tested and why, the entry criteria (what must be true before testing starts), the exit criteria (what must be true before acceptance can be recommended), the environment and data, the people, and the schedule with at least one retest cycle. Use `templates/uat-plan.md`. Exit criteria are set before testing, so they cannot quietly move when the date gets close.

## Step 3: Design scenarios and cases

Write scenarios as business tasks a tester would recognise from their own work, then support them with cases for boundaries, alternates, and failures. For each case, record a unique, stable identifier (ISO29119-TS-01), the preconditions, inputs, and expected results (TS-02), with tolerances where values vary (TS-06), and a trace to the requirement or condition it exercises (TS-03).

Derive cases systematically: each business rule's boundary gets a case on either side; each alternate and exception flow in a use case gets a case; each decision table row gets a case. The reference `test-design.md` covers equivalence partitioning and boundary value analysis.

## Step 4: Prove coverage

Build a coverage matrix from requirements to scenarios and cases. Every in-scope requirement maps to at least one case, and every case maps back to a requirement. Report coverage as a number (for example 24 of 24 in-scope requirements) and list any requirement without a case, with the reason.

## Step 5: Prepare realistic, safe data

Use data close enough to production that a pass means something: realistic volumes, the real exception mix, and edge cases. Mask personal and sensitive data. Where production data is too clean to show the failures that matter, seed known cases.

## Step 6: Run, log, and triage

Run the cases, record actual results against expected, and log every defect with its business severity (the impact) separately from its priority (the fix order), a workaround if one exists, an owner, and a status. Retest fixes, and rerun the cases around each fix, since fixes break neighbours.

## Step 7: Recommend on the evidence

Recommend accept, accept with conditions, or reject, based on the exit criteria, the coverage achieved, and the open defects. Every condition has an owner and a date. The business owner with authority to accept signs; the delivery team does not accept its own work.

## Tailoring

Where a defined test document or item is left out for a small change, ISO/IEC/IEEE 29119-3 expects the omission to be justified, recorded with its rationale and risks, and agreed (check ISO29119-TS-05). Tailor on purpose and on the record.

## Stop rules

Acceptance is ready to recommend when every criterion is testable, the plan's entry and exit criteria are explicit, every in-scope requirement is covered by traced cases with expected results, defects are triaged with severity separate from priority, the exit criteria are met or the gaps are conditions with owners, and the named business owner has the evidence to sign.

## Common failures

- Acceptance criteria that cannot fail.
- Testing only the happy path.
- Exit criteria relaxed to meet the date.
- Severity and priority merged into one field.
- The delivery team signing its own acceptance.

## Worked example

Supplier invoice approval, release 1 UAT.

Criteria check: FR-022 said approvers are reminded "promptly", which fails ISO29119-AC-01. It went back to the product owner and returned as "one reminder after 2 working days; escalation to the manager after 4".

Plan: scope is routing, reminders, exceptions, and ERP posting; payroll is out, as it is unchanged. Entry: build 1.0.0-rc2 smoke-tested, June data loaded with bank details masked, and seven testers trained. Exit: every in-scope requirement executed, no open critical or high defects, and the Finance Director's sign-off.

Cases, one shown:

| Case | Condition | Preconditions and inputs | Expected result | Traces to |
| --- | --- | --- | --- | --- |
| TC-014 | Reminder boundary | Invoice awaiting approval for exactly 2 working days | One reminder sent; no escalation | FR-022 |

Coverage: 24 of 24 in-scope requirements map to 9 scenarios and 41 cases.

Result: one open defect, DEF-031 (reason text truncated at 80 characters), severity low, priority 3, workaround in place, owned by the vendor.

Recommendation: accept with one condition, to fix DEF-031 in release 1.1 by 2026-07-31 (vendor). Signed by the Finance Director on 2026-07-11.

## Sources

- `babok-3.0-2015`: Acceptance and Evaluation Criteria (10.1), Validate Requirements (7.3), and Assess Solution Limitations (8.3).
- `iso-29119-3`: test case and acceptance criterion content, traceability, and tailoring, paraphrased.
- `iso-29148`: the verifiability of requirements, paraphrased.
