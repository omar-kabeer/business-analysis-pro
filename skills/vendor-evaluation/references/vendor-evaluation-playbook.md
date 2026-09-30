# Vendor Evaluation Playbook

How to run a supplier or product selection that is fair, evidenced, and defensible: criteria set before responses arrive, scoring grounded in evidence, total cost compared honestly, and a recommendation the decision maker can stand behind. This playbook applies BABOK Vendor Assessment (10.49) and Decision Analysis (10.16), within Define Design Options (7.5) and Analyze Potential Value and Recommend Solution (7.6). Sustainability in the assessment follows the guidance of ISO 20400:2017 (`iso-20400`); supplier security follows ISO/IEC 27002:2022 (`iso-27002`, controls 5.19 to 5.22). Both copies are for paraphrase only.

## When this playbook applies

Use it when an organisation must choose among suppliers or products: preparing a request for information or proposal, setting and weighting criteria, scoring responses and demonstrations, comparing total cost, and recommending. Use the procurement-contracts skill to write the resulting contract.

## Step 1: Define the need and the long list

Start from approved requirements and the decision to buy rather than build. Identify candidates through market scanning and a request for information. Record why each candidate was included or excluded from the long list.

## Step 2: Set criteria and weights before any response arrives

Group criteria into mandatory (pass or fail) and scored. Typical scored groups: functional fit, non-functional fit, supplier viability, implementation approach, sustainability, security, and total cost. Agree weights with the decision maker and publish the criteria in the request, so suppliers know how they will be judged. Where sustainability matters, the assessment should evaluate suppliers against the defined sustainability criteria (ISO20400-VA-01) and consider their capacity to meet them, including through their own supply chain (VA-02).

## Step 3: Issue the request and manage questions fairly

Use `templates/rfp.md`. Answer supplier questions in writing and share answers with every bidder. Apply prequalification and tender criteria consistently to all (ISO20400-VA-04). One supplier getting private guidance is the fastest way to invalidate a selection.

## Step 4: Score with evidence

Score each response against the published criteria and scales, citing where in the response the evidence is. Use at least two independent scorers per criterion, and reconcile differences in a moderation session with the reasons recorded. Scripted demonstrations, in which every supplier runs the same business scenarios with the organisation's data, are more reliable than supplier-led presentations.

## Step 5: Assess supplier risk, including security

Assess each shortlisted supplier's financial viability, delivery track record, and references. Where the supplier will handle the organisation's information, assess its security against the supplier relationship controls (ISO/IEC 27002, 5.19 to 5.22) and plan how the requirements will be carried into the agreement and monitored.

## Step 6: Compare total cost

Compare the total cost of ownership over a stated horizon: licence or subscription, implementation, integration, internal effort, training, support, and exit. The cheapest licence is often not the cheapest option.

## Step 7: Recommend and debrief

Recommend a preferred supplier with the scores, the evidence, the risks, and the conditions (for example, a successful proof of concept). Record the decision in the decision log. Offer unsuccessful bidders a factual debrief against the published criteria.

## Stop rules

The evaluation is sound when the criteria and weights were agreed and published before responses arrived, all suppliers were treated consistently, every score cites evidence and was moderated, supplier risk and security were assessed, total cost covers the full horizon, and the recommendation is recorded with its conditions.

## Common failures

- Criteria or weights adjusted after the responses were read.
- Supplier-led demonstrations instead of scripted scenarios.
- A single scorer, with no moderation.
- Comparing licence price instead of total cost.
- Security assessed by questionnaire only, with no plan to carry it into the contract.

## Worked example

Supplier payment status portal, release 2: selecting a delivery partner to build and host the portal. The workflow choice for release 1 was a separate decision, recorded as DEC-007.

Criteria, published in the request before responses arrived: mandatory items were UK hosting, single sign-on support, and WCAG 2.1 AA delivery experience. Scored items were functional fit 35 percent, non-functional fit 15 percent, implementation approach 15 percent, supplier viability 10 percent, and three-year total cost 25 percent.

Scripted demonstration: each shortlisted partner walked through the same three scenarios from the PRD (status lookup, payment date, and an on-hold invoice), using anonymised June data.

Scoring: two scorers per criterion, moderated on 12 September; functional fit differed by more than one point on two criteria, and the moderation record gives the reasons for the final scores.

Supplier security: both shortlisted partners met the mandatory hosting requirement; one could not show incident notification terms, which was recorded as a risk and made a contract condition.

Total cost over three years: the partner with the higher day rate came out lower overall, because its hosting was included and its estimate needed fewer change requests.

Recommendation: the lower total-cost partner, on condition of a passed penetration test before launch. Recorded in the decision log; unsuccessful bidders were offered debriefs against the published criteria.

## Sources

- `babok-3.0-2015`: Vendor Assessment (10.49) and Decision Analysis (10.16), within 7.5 and 7.6.
- `iso-20400`: evaluating suppliers against sustainability criteria, consistently and fairly, as guidance.
- `iso-27002`: information security in supplier relationships (5.19 to 5.22), paraphrased.
