---
type: deliverable
domain: elicitation
status: draft
version: 2.0.0
---

# Elicitation Activity Plan

> **How to use this template.** Filled rows and "Example" lines illustrate one scenario so the expected depth is clear. Replace them with the facts of the work at hand: never carry example names, figures, or IDs into a real document, and say plainly when a fact is not yet known. Include every other section by default, and leave one out only when the user asks. Include these sections only when their condition applies or the user asks for them: Confidentiality and data handling (regulated work). The full rules are in `templates/elicitation-activity-plan.toc.json`.

## Purpose

Plan an elicitation activity: the outcomes it must produce, the techniques, the participants, and the logistics. This is the working form of BABOK Prepare for Elicitation (4.1) and its output, the Elicitation Activity Plan. Plan only what the activity needs, and match techniques to the outcomes and the people. Graded by `evaluation/elicitation-activity-plan-rubric.md`.

This template is a superset. Its table-of-contents manifest, `templates/elicitation-activity-plan.toc.json`, marks which sections are core, standard, or extended and when each applies.

## Document Control

| Field | Value |
| --- | --- |
| Initiative | Supplier invoice approval |
| Business analyst | Omar Haddad |
| Facilitator | Omar Haddad |
| Version | 1.0.0 |
| Status | Agreed |
| Last updated | 2026-05-02 |

## Scope

State the scope and purpose of the elicitation, so each activity stays focused, and what is left to later rounds.

Example: understand how invoices are approved and why exceptions stall today. Future-state design is left to the workshop in June.

## Inputs

List what the plan is built from: the stated needs, the stakeholder register and engagement approach, the business analysis approach, and existing documentation.

Example: business need statement (2026-04-28); stakeholder register 1.0.0; BA approach (adaptive, two-week cycles).

## Desired outcomes

State what each activity must produce and the work products the results will feed.

| ID | Outcome | Feeds |
| --- | --- | --- |
| OUT-001 | A confirmed as-is approval process with timings | Current state assessment |
| OUT-002 | The top causes of exception delay, ranked by AP | Root cause analysis |

## Activities and techniques

Choose techniques that suit the outcome and the people involved, and say why.

| ID | Activity | Technique | Why chosen | Outcome | Participants |
| --- | --- | --- | --- | --- | --- |
| ACT-001 | Watch clerks process a day's invoices | Observation (10.31) | Clerks describe the procedure, not what they actually do | OUT-001 | Four AP clerks |
| ACT-002 | Budget holder interviews | Interviews (10.25) | Approvers are spread across sites and short of time | OUT-001 | Six budget holders |
| ACT-003 | Exception causes session | Focus group (10.21) | Clerks build on each other's examples | OUT-002 | AP team |

## Participants

Name who takes part, their role, and their availability. Check against the stakeholder register that no affected group is missed.

| Participant | Role in the activity | Availability |
| --- | --- | --- |
| AP clerks (four) | Observed; focus group members | Mornings, not month end |
| Sam Patel | Interviewee (budget holder) | 45 minutes, 12 May |

## Logistics

Set the schedule, place, and resources for each activity.

| Activity | Date and time | Location | Resources |
| --- | --- | --- | --- |
| ACT-001 | 2026-05-06, 09:00 to 12:00 | AP office, Leeds | Observation sheet; consent forms |
| ACT-002 | 2026-05-11 to 2026-05-15 | Video calls | Interview guide INT-001 to INT-006 |

## Supporting materials

List the materials needed and who prepares them by when.

| Material | Prepared by | Ready by |
| --- | --- | --- |
| Interview guide | Omar Haddad | 2026-05-08 |
| Current process sketch for validation | Leah Brown | 2026-05-10 |

## Collaboration conditions

Note what will help people take part openly: timing, setting, ground rules, and managing power differences.

Example: clerks and the AP manager attend separate sessions so clerks speak freely; sessions avoid month end.

## Assumptions

Record what the plan takes as true, with the effect if wrong.

| ID | Assumption | Effect if wrong |
| --- | --- | --- |
| A-041 | Budget holders will give 45 minutes | Fall back to a short survey |

## Risks

Risks to the activities producing what is needed.

| Risk | Response | Owner |
| --- | --- | --- |
| Observation day is unusually quiet | Book a second morning in the busiest week | Omar Haddad |

## Fit with the approach

Show that the plan fits the business analysis approach and the stakeholder engagement approach.

Example: two-week cycles match the adaptive approach; interviews follow the engagement plan's one-to-one channel for senior budget holders.

## Remote and distributed elicitation

For distributed teams, record the tools, time zones, and how participation will be made equal.

| Consideration | Plan |
| --- | --- |
| Tools | Video with shared whiteboard |

## Confidentiality and data handling

For regulated or sensitive topics, state how recordings and notes are stored and who may see them.

| Item | Handling |
| --- | --- |
| Recordings | Deleted after the confirmed summary; stored in the project drive meanwhile |

## Outputs

An agreed plan for each activity (outcome, technique, participants, logistics, and materials) ready for Conduct Elicitation (4.2).

## Review criteria

- Desired outcomes and the work products they feed are defined.
- Techniques suit the outcomes and the people, with reasons.
- The right participants are named and their availability considered.
- Scope and purpose keep each activity focused.
- Logistics are arranged.
- Materials are identified with owners and dates.
- Conditions for collaboration are considered.
- The plan fits the BA approach and the engagement approach.

## BABOK anchor

Prepare for Elicitation (4.1); Plan Stakeholder Engagement (3.2); techniques including Interviews (10.25), Observation (10.31), and Focus Groups (10.21). Owned by the elicitation skill.

## House style

Write the narrative with the natural-prose-editor pass and no em dashes. See `docs/methodology/editorial-style.md`.
