# Decision-Grade Proposal Playbook

How to turn raw input into a proposal that a decision maker can act on: the ask is unmistakable, the case for it is logical and evidenced, the costs and risks are honest, and nothing important is buried. This playbook supports BABOK Business Cases (10.7), Analyze Potential Value and Recommend Solution (7.6), and Communicate Business Analysis Information (4.4). Structure follows the Pyramid Principle (`minto-pyramid-principle`, paraphrased; summarised in `consultingmethodology-pyramid-whitepaper`).

## When this playbook applies

Use it for any document that argues for a course of action: project and funding proposals, board papers, feasibility studies, implementation plans, grant applications, and responses to requests for proposal. Use the finance skill and `templates/business-case.md` when the core of the case is the financial model, and bring its numbers in here.

## Step 1: Extract the intent

Before drafting, pin down four things from the input, and ask only for what is missing and decision-critical:

| Question | Example |
| --- | --- |
| Who decides, and what exactly are they asked to approve? | The Finance Director approves 150,000 pounds for release 1 |
| By when, and what happens if they do not decide? | By 30 June; otherwise go-live slips past month end |
| What does the reader already believe? | Approvals are slow; the cause is unclear to them |
| What will make them say no? | Cost overrun risk; disruption to month end |

## Step 2: Build the argument top down

Use the Pyramid Principle. Put the answer first, then group the supporting reasons so each group is distinct and together they are complete, then give the evidence under each reason. Open with situation, complication, and question, so the reader agrees on the problem before meeting the answer:

- Situation: what is true now and not in dispute.
- Complication: what has changed or gone wrong, forcing a choice.
- Question: what the reader must decide.
- Answer: the recommendation.

Check the logic: each reason must support the answer on its own, and the reasons must not overlap.

## Step 3: Choose the structure for the document type

A standard spine works for most proposals: executive summary; problem; proposed solution; design or operating approach; implementation plan; costs and resources; risks; governance and compliance; expected outcomes; decision required. Drop sections the decision does not need, and say so. A feasibility study leads with the options and the findings; an RFP response follows the buyer's evaluation criteria in their order.

## Step 4: Evidence every claim

Separate evidence from inference. Every figure carries its source and date, every benefit its assumption, and every comparison its baseline. Where a number comes from a model, show the key inputs and the range, and state what would change the conclusion. Use `evaluation/business-case-rubric.md` as the standard where the proposal includes a financial case.

## Step 5: Be honest about cost, risk, and alternatives

Show the options considered, including doing nothing, and why the recommendation wins. Show the full cost, including running costs, not only the project. Name the main risks with their responses and owners. A proposal that hides a known risk wins once and loses the reader's trust for every proposal after it.

## Step 6: Make the ask explicit

End, and also begin, with the decision required: who, what, by when, and on what conditions. "We recommend proceeding" is not an ask; "The Finance Director is asked to approve 150,000 pounds by 30 June, on condition that the load test passes before go-live" is.

## Step 7: Final pass

Read the executive summary alone: could the reader decide from it? Check that every section supports the answer, the numbers agree across sections, the language is plain, and the house style is applied with no em dashes. Deliver in the format the reader expects (usually a Word document; see the deliverable-packager skill).

## Stop rules

The proposal is ready when the ask is explicit in the first paragraph, the argument is top down with distinct, complete reasons, every claim is evidenced, alternatives, costs, and risks are honest, numbers reconcile across sections, and the executive summary stands alone.

## Common failures

- Background first, recommendation on page nine.
- Reasons that overlap, or that do not support the answer.
- Benefits without assumptions, and costs without running costs.
- No do-nothing option.
- A closing line that recommends instead of asking.

## Worked example

One-page proposal: fund a load test before the invoice approval go-live.

Situation: release 1 of invoice approval goes live on 15 September, on the ERP's workflow module.

Complication: the vendor has not tested the module at month-end volume, when invoices triple. A failure at month end would delay supplier payments, which is the problem the project exists to fix.

Question: should we test before we commit to the go-live date?

Answer and ask: the Finance Director is asked to approve 6,000 pounds for a two-week load test, from 1 to 14 August, by this Friday.

Reasons:
1. The risk is material: at three times normal volume, the three month-end days carry about 2,000 invoices (ERP volume report, March to May), and a posting failure would delay every one.
2. The test is cheap relative to the exposure: 6,000 pounds, against about 5,000 pounds of lost discount for each month of late payment (business case, input IN-031) and the supply risk of supplier holds, which stopped two key suppliers this year (current state assessment).
3. It does not move the date: starting by 1 August leaves four weeks before go-live to fix any defect.

Alternatives considered: go live without testing (risk accepted, not recommended); test after go-live (finds problems only after suppliers are affected).

Risk of the test itself: it may find a defect that needs vendor work; the vendor has committed to a two-week fix window in the contract.

## Sources

- `babok-3.0-2015`: Business Cases (10.7), task 7.6, and Communicate Business Analysis Information (4.4).
- `minto-pyramid-principle`: top-down structure, grouping, and situation, complication, and question, paraphrased.
- `consultingmethodology-pyramid-whitepaper`: a practitioner summary of the Pyramid Principle.
