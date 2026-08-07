# Test Design and Review Reference

## From requirement to test

An acceptance criterion is already most of a test. The work is turning it into cases that cover the ways it can fail.

For a rule such as "refunds above 50,000 require dual approval":

| Case | Type | Expected |
| --- | --- | --- |
| Refund of 49,999 by one approver | Boundary, below | Completes |
| Refund of 50,000 by one approver | Boundary, at | Requires second approver |
| Refund of 50,001 by one approver | Boundary, above | Requires second approver |
| Refund of 60,000 with two approvers | Positive | Completes |
| Refund of 60,000 with the same person approving twice | Negative | Rejected |
| Refund of 60,000, second approver lacks authority | Negative | Rejected with a clear message |
| Approval given, then withdrawn before completion | Exception | Refund held |

One criterion, seven cases. This is why coverage counted in requirements is misleading and coverage counted in cases is what protects you.

## Design techniques

- Equivalence partitioning: one case per class of input that behaves the same way.
- Boundary value analysis: at, just below, and just above every threshold. Most defects live here.
- Decision tables: for combinations of conditions, especially where rules interact. Hand complex rule sets to `decision-analysis` for the table, then test every reachable rule.
- State transition: every valid transition once, plus the invalid ones that must be refused.
- Scenario or end-to-end: real business tasks crossing several requirements. This is where integration defects appear.
- Exploratory: time-boxed, charter-based, run by someone who knows the business. Catches what scripted tests were designed to miss.

## Severity from business impact

Set severity by consequence, not by how broken it looks.

| Severity | Meaning |
| --- | --- |
| Critical | Business cannot operate, data is lost or corrupted, or a compliance breach occurs. No workaround. |
| High | Core process blocked, workaround exists but is costly or manual. |
| Medium | Function impaired, acceptable workaround, limited users affected. |
| Low | Cosmetic or minor inconvenience, no process impact. |

Keep severity (business impact) separate from priority (fix order). The two diverge often and conflating them is how low-severity, high-visibility defects jump the queue.

## Entry and exit criteria

**Entry**: requirements baselined, build deployed and smoke-tested, environment stable, test data loaded, cases reviewed and approved, testers trained and available, defect process agreed.

**Exit**: planned coverage executed, zero open critical, zero open high or an accepted written exception per defect, all mediums triaged with owners and dates, non-functional requirements verified, and sign-off from the named business owner.

Agree exit criteria before execution begins. Criteria negotiated after the results are in are not criteria.

## Test data

- Realistic volume, realistic mess. Perfect data proves nothing.
- Cover the awkward cases deliberately: long names, non-Latin characters, missing optional values, expired records, duplicate entities, maximum values, historical records under old rules.
- If production data is used, state the masking or anonymisation applied, and route the privacy handling to `regulatory-compliance`.

## Formal reviews of work products

BABOK's review types, useful before anything is built:

- Walkthrough: the author leads, the group follows, aimed at shared understanding.
- Peer review: a colleague checks against criteria, informal, fast.
- Inspection: formal, with defined roles (moderator, author, reader, recorder), entry criteria, a checklist, and a logged defect list. Slowest and by far the most effective at finding requirement defects.

A defect found in an inspection of the requirements costs a fraction of the same defect found in UAT. Where a document is expensive to get wrong, run the inspection.

## Acceptance recommendation

State three things and nothing else: what passed, what remains open with its business consequence, and the recommendation with its conditions. If the recommendation is accept with conditions, each condition needs an owner and a date, or it is not a condition.
