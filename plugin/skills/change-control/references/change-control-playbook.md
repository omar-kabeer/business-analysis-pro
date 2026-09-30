# Change Control Playbook

How to handle a request to change something already agreed, so the decision is made by the right person, on a full view of its impact, and recorded. This playbook applies BABOK Assess Requirements Changes (5.4), with Approve Requirements (5.5), Maintain Requirements (5.2), and Trace Requirements (5.1). Change governance follows COBIT 2019 (`cobit-2019`, objectives BAI06 Managed IT Changes and BAI07 Managed IT Change Acceptance and Transitioning); where a change touches information security, the change management control in ISO/IEC 27002 (`iso-27002`, control 8.32) applies. Both conformance notes are in `sources/conformance/`.

## When this playbook applies

Use it when something that has been baselined or approved is asked to change: a requirement, a design, a scope boundary, a date, or a budget. Do not use it for items still being drafted; those change freely until they are baselined.

## Step 1: Capture the request

Record who is asking, what exactly should change, why, and by when. Link the request to the items it would alter. Use `templates/change-request.md`. A request that cannot name what it changes is not ready to assess.

## Step 2: Check the authority and the route

Decide who may approve this kind of change, from the governance approach: for example, the product owner within a release, the sponsor for scope or budget, and the steering group above a threshold. State the thresholds (cost, time, scope) that move a change up the chain. An emergency route may exist for urgent changes, but it needs a review after the event (COBIT-CA-04).

## Step 3: Assess the impact

Use the traceability links to find everything the change touches, and assess each dimension (COBIT-CA-02):

| Dimension | Question |
| --- | --- |
| Requirements | Which requirements are added, changed, or removed, and which depend on them? |
| Design and build | Which components, interfaces, and data are affected? |
| Tests | Which cases must be added or rerun? |
| Cost and schedule | What does it add, and does it move a milestone? |
| Risk | What risks does it create or remove? |
| Benefit | How does it change the value the initiative delivers? |
| People and organisation | Who must work differently, and are they ready? (COBIT-CA-05) |

The reference `impact-analysis.md` covers the techniques. Use `templates/requirements-change-assessment.md` for requirement changes and `templates/designs-change-assessment.md` for design changes.

## Step 4: Assess against the change objective

Show that the assessment follows the organisation's change practice, which COBIT sets out as managed IT changes and change acceptance and transition (COBIT-CA-01). Where the change affects information security, check it against the change management control (ISO/IEC 27002, 8.32): changes to information processing facilities and systems are controlled, tested, and authorised.

## Step 5: Recommend options

Offer the realistic options, not just yes or no: approve as asked, approve a modified version, defer to a later release, or reject. Give each option's impact and a recommendation with the reason.

## Step 6: Decide, authorise, and prioritise

The authorised decision maker decides, and the change is prioritised and formally authorised before any work begins (COBIT-CA-03). Record the decision in the decision log with its rationale.

## Step 7: Update the baseline and communicate

Update the affected items, their versions, the traceability, and the baseline. Tell the people affected what changed and what they must do. A change that is approved but not reflected in the requirements is a defect waiting to be found in testing.

## Stop rules

A change is handled when it is recorded with its reason and scope, routed to the right authority, assessed on every dimension it touches, offered with options and a recommendation, authorised and prioritised before work, and reflected in the baseline, the traceability, and the people affected.

## Common failures

- Changes accepted in a meeting and never recorded.
- Impact assessed on cost and time only, not tests, risk, or people.
- A change approved by someone without the authority.
- Work starting before authorisation.
- The baseline not updated, so the specification drifts from what is being built.

## Worked example

Supplier invoice approval: CR-004, mobile approval.

Request: the Operations director asks for approvers to approve on a phone, because budget holders on site visits delay approvals. It would change FR-024 (new), NFR-002 (page load), and three test cases.

Authority: within release 1 scope, so the product owner decides; the cost is under the 10,000 pound threshold that would move it to the sponsor.

Impact:
- Requirements: add FR-024 (approve and reject in a mobile browser at 375 pixels wide); NFR-002 must still be met on mobile.
- Design: a simplified mobile layout; no new interface.
- Tests: three new cases and a rerun of the approval cases on mobile.
- Cost and schedule: 5 vendor days, about 3,000 pounds; no milestone moves.
- Risk: reduces RSK-001 (approvers bypassing the tool); adds a small performance risk on mobile.
- Benefit: supports the 5-day target in the three slowest departments.
- People: approvers need a one-page guide.

Options: approve as asked; approve with a simplified layout; defer to release 2. Recommendation: approve with the simplified layout, to protect NFR-002.

Decision: approved by the product owner on 18 June, prioritised for sprint 6, and recorded as DEC-011. FRD version 1.1 and the traceability matrix were updated the same day, and approvers were told in the go-live briefing.

## Sources

- `babok-3.0-2015`: Assess Requirements Changes (5.4), with 5.1, 5.2, and 5.5.
- `cobit-2019`: managed IT changes and change acceptance (BAI06, BAI07), with the checks in its conformance note.
- `iso-27002`: the change management control (8.32) for changes that affect information security, paraphrased.
