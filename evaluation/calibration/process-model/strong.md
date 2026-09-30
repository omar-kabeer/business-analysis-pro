# Process Model

## Frame the boundary before detailing the flow.

| Suppliers | Inputs | Process (5 to 7 steps) | Outputs | Customers |
| --- | --- | --- | --- | --- |
| Matching engine; budget holders | Matched invoice; approval rules | Queue; notify; review; decide; record; post | Approved or rejected invoice | AP team; Treasury; supplier |

## Notation and level

State the notation, its conventions, and the level of detail, so readers know how to read the model and it suits its audience.

| Item | Choice | Reason |
| --- | --- | --- |
| Notation | BPMN 2.0, swimlanes by role | Handoffs between AP and approvers are the problem |
| Level | Level 3: tasks | Enough to specify the workflow |

## Process summary

| Field | Value |
| --- | --- |
| Start event | Matched invoice enters the approval queue |
| End events | Approved and posted; rejected and returned to AP; escalated to finance |
| Roles and systems | AP clerk; budget holder; department head; ERP |
| Volume and frequency | About 5,000 invoices a month; peak at month end |

## Current-state flow

List the steps, decisions, and handoffs in order, with the role or system that performs each. Every decision lists all its branches, and every path reaches an end event.

| Step | Actor | Action | Decision and branches | Next |
| --- | --- | --- | --- | --- |
| 1 | AP clerk | Emails the invoice to the budget holder | None | 2 |
| 2 | Budget holder | Reviews the invoice | Approve: 3; Reject: 4; No reply in 5 days: 5 | See branches |
| 3 | AP clerk | Records the approval in the ERP | None | End: approved |
| 4 | AP clerk | Returns the invoice to the supplier | None | End: rejected |
| 5 | AP clerk | Chases by phone | Reply: 2; No reply in 10 days: finance escalation | See branches |

## Analysis

Identify delays, rework, manual steps, and bottlenecks, with the evidence and root cause.

| Issue | Type | Evidence | Root cause |
| --- | --- | --- | --- |
| Approval waits in inboxes | Delay | Median 9 days at step 2 | No reminder or escalation rule |
| Rekeying approvals | Manual | 5,000 entries a month at step 3 | Approval happens outside the ERP |

## Future-state flow

Describe the improved flow, what changes from the current state, and the benefit.

| Step | Actor | Action | Decision and branches | Change from current |
| --- | --- | --- | --- | --- |
| 1 | ERP | Routes the invoice by cost centre and amount | None | Replaces email (FR-021) |
| 2 | Budget holder | Decides in the ERP | Approve: 3; Reject: 4; No action in 2 days: reminder, then escalate at 4 days | Reminder and escalation added (FR-022) |
| 3 | ERP | Records and posts the approval | None | Rekeying removed |
| 4 | ERP | Returns to AP with the reason | None | Reason captured |

Expected benefit: approval time from 14 days to 5 (OBJ-001).

## Model checks

Before publishing, confirm the model is valid and readable.

| Check | Result |
| --- | --- |
| One start event and named end events | Pass |
| Every path reaches an end; no orphan steps | Pass |
| Every decision's branches are exclusive and complete | Pass |
| Every step has one actor; handoffs are shown | Pass |
| Labels use verb and object ("Review invoice") | Pass |
