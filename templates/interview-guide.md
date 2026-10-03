---
type: deliverable
domain: business-analysis
status: draft
version: 2.0.0
---

# Interview Guide

> **How to use this template.** Filled rows and "Example" lines illustrate one scenario so the expected depth is clear. Replace them with the facts of the work at hand: never carry example names, figures, or IDs into a real document, and say plainly when a fact is not yet known. Include every other section by default, and leave one out only when the user asks. Include these sections only when their condition applies or the user asks for them: Cross-interview synthesis (standard or formal governance); Sensitive topics and consent (regulated work). The full rules are in `templates/interview-guide.toc.json`.

## Purpose

Plan and run a stakeholder interview that draws out the information the change needs, then confirm what was captured before it is used. This guide is the interview form of the Elicitation Activity Plan (Prepare for Elicitation, 4.1), the Interviews technique, and Conduct and Confirm Elicitation Results. Graded by `evaluation/interview-guide-rubric.md`.

This template is a superset. Its table-of-contents manifest, `templates/interview-guide.toc.json`, marks which sections are core, standard, or extended and when each applies.

## Document Control

| Field | Value |
| --- | --- |
| Initiative | Supplier invoice approval |
| Interview ID | INT-004 |
| Interviewee (name and role) | Sam Patel, budget holder, Operations |
| Interviewer | Omar Haddad |
| Note taker | Leah Brown |
| Date and channel | 2026-05-12, video call, 45 minutes |

## Scope

State the objective: the decision or requirement this interview must inform, and the topics it will not cover.

Example: understand how budget holders decide whether to approve an invoice, to inform approval routing rules (SC-001). Not in scope: purchasing or budgeting.

## Inputs

Review background so the session does not cover what is already known: the stakeholder register, earlier interview notes, process documentation, and data.

Example: stakeholder register entry STK-007; notes from INT-001 to INT-003 (AP clerks); the approval cycle-time report.

## Preparation

Decide the interview type: structured (a fixed question set, for comparability across interviewees) or unstructured (open exploration guided by the answers). Confirm logistics, consent to record, and any pre-read.

| Item | Decision |
| --- | --- |
| Interview type | Semi-structured: fixed core questions, free probes |
| Consent to record | Given by email, 2026-05-09 |
| Pre-read sent | One-page summary of the initiative |

## Question set

Use open, non-leading questions, one at a time. Move from context to pain to goals to other people to exceptions to priority, and use the why probe to reach the need rather than the first-requested feature. Map each question to the objective.

| ID | Question | Purpose | Probe |
| --- | --- | --- | --- |
| Q-001 | Walk me through the last invoice you approved, from the moment you heard about it. | Current state | What did you look at before deciding? |
| Q-002 | Where does approving invoices get in the way of your work? | Pain and root cause | Why does that happen? |
| Q-003 | What would make you confident enough to approve without checking further? | Goals and success | How would you know it worked? |
| Q-004 | Who else do you consult before approving? | Other stakeholders | When do you need them? |
| Q-005 | When would you refuse to approve? | Exceptions and rules | Has it happened this year? |
| Q-006 | If you could change one thing about approvals, what would it be? | Priority | Why that one? |

## Capture log

Record statements as given, in the interviewee's words where possible. Separate fact from opinion, and attribute each point.

| ID | Statement | Fact or opinion | Question |
| --- | --- | --- | --- |
| N-001 | "I approve about 30 invoices a week, mostly from my phone." | Fact (self-reported) | Q-001 |
| N-002 | "Half the emails don't tell me what the invoice is for." | Opinion | Q-002 |

## Assumptions and unknowns

Record what surfaced that is not yet known, with the impact if wrong and who can confirm it. Do not fill gaps with guesses.

| ID | Assumption or unknown | Impact if wrong | Confirm with |
| --- | --- | --- | --- |
| A-004 | Most approvers approve from mobile | Mobile design becomes a must | Approver survey |

## Actions and follow-ups

Every follow-up has an owner and a due date.

| ID | Action | Owner | Due |
| --- | --- | --- | --- |
| ACT-004 | Send the confirmation summary to Sam Patel | Omar Haddad | 2026-05-13 |

## Confirmation of results

Summarise the key points back to the interviewee and record their response before the findings are used. This is Confirm Elicitation Results.

| Sent | Response | Changes made |
| --- | --- | --- |
| 2026-05-13 | Confirmed 2026-05-14 | N-002 reworded: "about half" |

## Risks

Risks to the quality of what this interview yields.

| Risk | Response | Owner |
| --- | --- | --- |
| Interviewee speaks for approvers generally, not only for themself | Tag statements as personal or reported; compare across interviews | Omar Haddad |

## Cross-interview synthesis

When several interviews share a question set, compare answers to find patterns and outliers.

| Theme | Interviews supporting | Interviews contradicting |
| --- | --- | --- |
| Approval emails lack context | INT-002, INT-004, INT-005 | None |

## Sensitive topics and consent

For interviews touching personal data, performance, or confidential matters, record the handling agreed.

| Topic | Handling | Agreed by |
| --- | --- | --- |
| Named colleagues' delays | Recorded without names | Interviewee |

## Outputs

Confirmed elicitation results: attributed statements separated into fact and opinion, recorded assumptions and unknowns, and owned follow-up actions, ready for analysis.

## Review criteria

- The objective, interviewee, and interview type are stated, and background was reviewed.
- Questions are open, non-leading, and cover the objective.
- Statements are attributed and separate fact from opinion.
- Assumptions and unknowns are recorded, not filled in.
- Actions have owners and dates.
- Results were confirmed with the interviewee before use.
- The record reflects what was said, not what was expected.

## Practice anchor

Prepare for Elicitation; Conduct Elicitation; Confirm Elicitation Results; Interviews. Owned by the elicitation skill.

## House style

Write the guide and the summary with the natural-prose-editor pass and no em dashes. See `docs/methodology/editorial-style.md`.
