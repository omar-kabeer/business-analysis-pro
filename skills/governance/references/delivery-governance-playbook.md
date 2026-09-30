# Delivery Governance Playbook

How to set up and run the governance artefacts that keep a change controlled and auditable: who decides what, how decisions and changes are recorded, and how risks, issues, and dependencies are kept visible until they close. This playbook applies BABOK Plan Business Analysis Governance (3.3), Manage Stakeholder Collaboration (4.5), Approve Requirements (5.5), Assess Requirements Changes (5.4), and the techniques Decision Analysis (10.16), Item Tracking (10.26), and Risk Analysis and Management (10.38). Risk practice follows the guidance of ISO 31000 (`iso-31000-2018`); governance and change control follow COBIT 2019 (`cobit-2019`), and COBIT's AI guidance (`cobit-ai-governance`) where the solution includes AI.

## When this playbook applies

Use it at the start of any change large enough to need decisions recorded, and whenever someone asks who decides, what was agreed, what is blocking, or whether the release is ready. Keep it proportional: a two-week change needs a short decision log and a RAID log, not a governance framework.

## Step 1: Set decision rights before the first decision

Plan Business Analysis Governance (3.3) asks who may approve requirements, changes, and priorities, and how. Write it down as a short table: decision type, decision maker, who must be consulted, and how disagreements escalate. Use `templates/governance-approach.md`. A decision made by someone without the right is not a decision; record it as a proposal until it is ratified.

## Step 2: Start the RAID log and keep the categories honest

The RAID log tracks risks, assumptions, issues, and dependencies (Item Tracking, 10.26). The categories mean different things and need different actions:

| Category | Definition | Required fields |
| --- | --- | --- |
| Risk | An uncertain future event that would affect objectives | Cause, event, effect; probability and impact; response; trigger; owner |
| Assumption | Something taken as true without proof | Basis; impact if wrong; who confirms; by when |
| Issue | Something that has happened and needs action | Impact; action; owner; target date |
| Dependency | Reliance on another party | Direction; other party; what and by when |

An issue logged as a risk gets watched instead of fixed. An invalidated assumption becomes a risk or an issue; link the two. Use `templates/raid-log.md`.

## Step 3: Manage risk following ISO 31000

ISO 31000 is guidance, not a certifiable standard, so the aim is to follow it rather than conform to it. For each risk, analyse likelihood and consequence on agreed criteria, evaluate it against the stated tolerance, and choose a treatment. The OS register uses avoid, reduce, transfer, or accept with a contingency; these map onto ISO 31000's options (avoid, remove the source, change likelihood or consequence, share, or retain), as the risk-analysis playbook explains. Name one person as owner who can act. Carry high risks into the risk register (`templates/risk-register.md`) and review them on a stated cadence. Record residual risk after treatment, so the effect of the response is visible.

## Step 4: Record decisions so they stay settled

Each significant decision is one actionable choice, with the real options considered, the rationale and evidence, the decision maker, who was consulted, and the conditions that would reopen it (Decision Analysis, 10.16). Superseded decisions are marked and linked, never deleted. Use `templates/decision-log.md`. A good decision log is what stops the same question being argued at every steering meeting.

## Step 5: Control change

When a baselined requirement or design must change, assess the change before accepting it (5.4): what it affects (requirements, design, tests, cost, schedule, risk), the options, and the recommendation. Route it to the decision maker named in step 1. COBIT's managed-change practice (BAI06) is the reference for the controls: every change is logged, assessed, approved by the right authority, and traceable to what it altered. Use `templates/change-request.md` and `templates/requirements-change-assessment.md`.

## Step 6: Keep traceability current

The requirements traceability matrix links each requirement to its source, its design, and its tests (Trace Requirements, 5.1). Governance uses it to answer "what does this change touch" and "is everything tested". Update it when requirements or tests change, not at the end. Use `templates/requirements-traceability-matrix.md`.

## Step 7: Run a governance cadence and escalate on rules

Review the logs on a fixed cadence, with the people who own the items. State an escalation rule in advance, for example: any risk scoring 15 or more, any issue blocking the critical path for more than three days, and any dependency at risk within two weeks of its date goes to the steering group. Escalation by rule removes the politics from raising bad news.

## Step 8: Assess release readiness

Before a release, check it against explicit criteria: requirements verified, tests passed at the agreed level, open defects accepted by the business owner, operational readiness confirmed, and approvals recorded. Use `templates/release-readiness-checklist.md`. A release that fails a criterion goes with an explicit, owned waiver or does not go.

## AI solutions

Where the solution includes AI, add governance for model risk: who approves models and their data, how bias and performance are monitored, and how a model is withdrawn. COBIT's AI governance guidance (`cobit-ai-governance`) gives the control objectives.

## Stop rules

Governance is enough when decision rights are written down, the RAID and decision logs are current and owned, changes are assessed before acceptance, and readiness is judged against criteria. More process than that needs a reason.

## Common failures

- Risks, issues, and assumptions mixed together.
- Items owned by a team rather than a person.
- Decisions recorded as "discussed" with no outcome.
- Change accepted by whoever was in the room.
- Logs updated only before steering meetings.

## Worked example

Supplier invoice approval, release 1.

Decision rights: the sponsor (Finance Director) approves scope; the product owner approves requirement changes within a release; disagreements escalate to the steering group.

RAID extract:
- RSK-001 (risk): because approvers see approval as an interruption, they may keep approving by email, so the 5-day target is missed. Probability 4, impact 4, severity 16, above the tolerance of 15, so escalated. Reduce: disable email approval at go-live; trigger under 70 percent in-tool approvals in week 2. Owner: Financial Controller. Residual 8.
- A-001 (assumption): the ERP API supports real-time posting. If wrong, posting moves to release 2. Confirm: Tom Reyes by 2026-06-20.
- DEP-002 (dependency): single sign-on from the identity team by 2026-07-15.

Decision DEC-007: use the ERP's workflow module; options were the module, a standalone tool, or a build; decided by the sponsor, consulted Tom Reyes and Priya Shah; reopen if the module fails the load test at 3 times peak.

Change CR-004: add mobile approval. Assessed as affecting FR-024, NFR-002, and three test cases; approved by the product owner with a simplified mobile layout.

## Sources

- `babok-3.0-2015`: tasks 3.3, 4.5, 5.1, 5.4, and 5.5 and techniques 10.16, 10.26, and 10.38.
- `iso-31000-2018`: risk analysis, evaluation, treatment, and review.
- `cobit-2019`: governance objectives and managed change (BAI06).
- `cobit-ai-governance`: control objectives for AI systems.
