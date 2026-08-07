# Contract Artefacts Reference

## The solicitation family

| Document | Asks | Use when |
| --- | --- | --- |
| Request for Information (RFI) | What exists and who can do this | The market is unfamiliar; not a buying step |
| Request for Proposal (RFP) | How would you solve this, and at what price | The solution approach is open |
| Request for Quote (RFQ) | What do you charge for this defined thing | The specification is settled and price is the variable |
| Request for Tender (RFT) | Formal bid against a fixed specification | Regulated or public procurement, strict process |

An RFP is itself a requirements document. Write it with the `requirements` skill and score it with `vendor-evaluation`.

## Engagement models and where risk sits

| Model | Supplier carries | Buyer carries | Works when |
| --- | --- | --- | --- |
| Fixed price | Delivery risk | Scope rigidity, change cost | Scope is genuinely stable and well specified |
| Time and materials | Little | Delivery and cost risk | Scope is exploratory and trust is high |
| Capped time and materials | Overrun above the cap | Cost up to the cap | A middle path, common and workable |
| Outcome or milestone based | Achievement of the outcome | Defining the outcome unambiguously | Outcomes are measurable without dispute |
| Managed service | Service levels | Loss of direct control | The capability is non-differentiating |

Fixed price with unstable requirements is the most common and most expensive mistake. The supplier prices the uncertainty, then recovers the rest through change requests.

## Statement of work contents

1. Background and objectives.
2. Scope, and an explicit out of scope list.
3. Deliverables, each with a description, format, and acceptance criteria.
4. Milestones and schedule.
5. Buyer dependencies: access, data, environments, decisions, and people, each with a date.
6. Assumptions, with the consequence if each proves false.
7. Roles, named contacts, and governance cadence.
8. Change procedure and how variations are priced.
9. Pricing and payment triggers.
10. Acceptance process and rejection handling.

The out of scope list and the buyer dependencies do more work than anything else in the document. Both are usually the thinnest sections.

## Service levels that mean something

For each level state: the measure, the target, the measurement window, the data source, exclusions, the reporting cadence, and the remedy.

| Element | Weak | Strong |
| --- | --- | --- |
| Measure | "System availability" | "Percentage of five-minute intervals in which the transaction API returns success to the synthetic probe" |
| Target | "High availability" | "99.5 percent per calendar month" |
| Exclusions | Unstated | "Excluding agreed maintenance windows notified five working days ahead, capped at four hours per month" |
| Remedy | "Supplier will use best efforts" | "Service credit of 5 percent of monthly charge per 0.5 percent below target, capped at 25 percent, with a right to terminate after three consecutive breaches" |

Service credits are not compensation; they are an incentive. Where the business impact of failure is large, the remedy must include an escalation and termination path, not only money back.

Measure what the user experiences. Component-level availability can be perfect while the service is unusable.

## Acceptance

- Name the acceptor by role.
- State the acceptance period and what happens if it lapses. Deemed acceptance clauses are common and need a period long enough to actually test.
- Define rejection: the supplier's remedy period, the number of cycles, and what happens after repeated failure.
- Tie acceptance criteria to the test evidence from `acceptance-testing` so acceptance is a check rather than an argument.

## Exit and transition

Write these while everyone is optimistic, because nobody negotiates them well later. Cover: notice periods for both sides, termination for convenience and for cause, transition assistance obligations and their rate, data return in a specified format within a specified period, deletion certification, intellectual property and licence survival, and continuity of any regulated service during transition.

## Boundaries

This skill structures commercial artefacts and drafts obligation language. It is not legal advice. Route liability, indemnity, warranty, insurance, jurisdiction, and dispute clauses to qualified counsel, and say explicitly which clauses you have left for them.
