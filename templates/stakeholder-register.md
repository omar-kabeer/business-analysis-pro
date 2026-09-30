---
type: deliverable
domain: business-analysis
status: draft
version: 2.0.0
---

# Stakeholder Register

## Purpose

Record every group or individual with a relationship to the change, the need, or the solution, together with the characteristics that decide how each one is engaged. This register is the working form of BABOK Plan Stakeholder Engagement (3.2) and the Stakeholder List, Map, or Personas technique (10.43). A thorough register lowers the risk that a source of requirements, a decision maker, or a group affected by the change is missed. Graded by `evaluation/stakeholder-register-rubric.md`.

This template is a superset. Its table-of-contents manifest, `templates/stakeholder-register.toc.json`, marks which sections are core, standard, or extended and when each applies.

## Document Control

| Field | Value |
| --- | --- |
| Initiative | Supplier invoice approval |
| Business analyst | Ana Costa |
| Sponsor | Finance Director |
| Version | 1.3.0 |
| Status | Active |
| Last updated | 2026-06-11 |

## Scope

State which change this register covers and the rule used to decide who is in scope. Include anyone affected by, influencing, or interacting with the solution, inside and outside the organisation.

Example: everyone who approves, submits, pays, audits, or supports supplier invoices in the UK entity, plus the suppliers themselves.

## Inputs

List the sources used to find stakeholders: the solution or change scope, organisational charts, job descriptions and procedure manuals, the business need, prior stakeholder lists, and brainstorming or interviews with known stakeholders ("who else should we talk to?").

## How to build the register

1. Start from the scope and the process: who performs, approves, receives, audits, supports, and pays for each step.
2. Use the generic BABOK roles as a checklist so no class of stakeholder is missed: customer, domain subject matter expert, end user, implementation subject matter expert, operational support, project manager, regulator, sponsor, supplier, and tester. One person can hold several roles.
3. For each stakeholder, record the characteristics below, and mark any that are assumed rather than evidenced.
4. Ask each stakeholder who else is affected, and repeat until no new names appear.

## Register

| ID | Stakeholder | BABOK role | Position or unit | Interest | Influence | Impact of change on them | Attitude | Decision authority | Key needs and concerns | Engagement approach | Communication | Owner | Basis |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STK-001 | Finance Director | Sponsor | Finance | High | High | Accountable for close timeliness | Supporter | Approves scope and budget | Close within 3 days; fewer late-payment penalties | Co-design at milestones | Monthly steering | Ana Costa | Evidenced (kickoff) |
| STK-002 | AP clerks (6) | End user | Accounts payable | High | Medium | Daily work changes completely | Cautious | None | Less rekeying; fewer chasing emails | Co-design | Weekly show and tell | Ana Costa | Evidenced (walkthrough) |
| STK-003 | Budget-holding approvers (about 140) | End user | All departments | Medium | Medium | New approval step in their week | Critic | Approve own invoices | Approvals must be quick and clear | Consult | Survey plus 5 interviews | Ana Costa | Assumed (5 interviews) |

Interest and influence use High, Medium, or Low. Attitude is Champion, Supporter, Neutral, Critic, or Blocker: it records the current stance so engagement can be planned, not a judgement of the person. Basis says whether the characteristics are evidenced (and from where) or assumed.

## Stakeholder map

Place each stakeholder by interest and influence to decide how much engagement effort they need.

| Quadrant | Stakeholders | Approach |
| --- | --- | --- |
| High influence, high interest | STK-001, STK-005 (internal audit) | Manage closely |
| High interest, lower influence | STK-002, STK-003 | Keep involved and satisfied |
| Lower interest | STK-004 (suppliers), STK-006 (IT service desk) | Keep informed; monitor |

## Coverage check

Check the register against the BABOK roles and the affected groups, so gaps are found now rather than in testing.

| Role or group | Covered by | Gap and action |
| --- | --- | --- |
| Regulator | STK-005 internal audit | External auditor not yet listed: confirm with the sponsor |
| Tester | Not yet assigned | Name UAT testers from AP by 2026-06-20 |

## Assumptions

List anything taken as true when building the register, each with how it will be confirmed.

| ID | Assumption | How it will be confirmed |
| --- | --- | --- |
| A-004 | The April org chart is current | Check with HR by 2026-06-15 |

## Risks

An incomplete register is the main risk: a missed stakeholder means missed or late requirements and rework. Record other risks too, such as a resistant group with influence.

| Risk | Response | Owner |
| --- | --- | --- |
| Approvers resist the new step and keep using email | Involve two approvers per department in design; sponsor message at launch | Ana Costa |

## Personas

Where the solution has many users of one kind, summarise the main user types as evidence-based personas and link each to the register entries it represents.

| Persona | Represents | Goals | Pain points | Evidence |
| --- | --- | --- | --- | --- |
| Busy budget holder | STK-003 | Approve fast between meetings | Unclear what to check | 5 interviews, survey of 42 |

## Stakeholder impact analysis

For changes that reshape people's work, record how each group is affected and what support it needs, to feed the change and training plans.

| Stakeholder | What changes for them | Readiness | Support needed |
| --- | --- | --- | --- |
| STK-002 AP clerks | Invoices arrive pre-matched; exceptions routed to them | Medium | Two-hour training; floor walker in week 1 |

## Contact and privacy handling

For registers holding personal details in regulated settings, record the lawful basis and retention, and who may see the register.

| Item | Position |
| --- | --- |
| Lawful basis for holding contact details | Legitimate interest for project delivery |
| Retention | Deleted 6 months after project close |
| Access | Project team only |

## Outputs

A register that feeds the stakeholder map and RACI, the engagement approach, the elicitation plan, and the communication plan.

## Review criteria

- The register covers every affected group for the stated scope, checked against the BABOK roles.
- Each entry records role, interest, influence, impact, attitude, decision authority, and needs.
- Characteristics are evidenced or marked as assumed.
- Placement on the map follows from interest and influence.
- Each stakeholder has an engagement approach and communication plan that fit their position.
- Personas, where used, are based on evidence and linked to register entries.
- Gaps found by the coverage check have an owner and a date.

## BABOK anchor

Plan Stakeholder Engagement (3.2); Stakeholder List, Map, or Personas (10.43); Manage Stakeholder Collaboration (4.5). Feeds the stakeholder map and RACI template and the elicitation plan. Owned by the elicitation and business-analysis skills.

## House style

Write any narrative with the natural-prose-editor pass and no em dashes. See `docs/methodology/editorial-style.md`.
