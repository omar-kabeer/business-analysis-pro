# Business Analysis Planning Playbook

How to run the five BABOK Business Analysis Planning and Monitoring tasks (3.1 to 3.5) and tailor them to the initiative. Planning is proportionate: a two-week discovery needs a page, a regulated programme needs a governed plan. Cite BABOK by section and paraphrase; do not copy guide text.

## Tailoring first

Decide the working style before planning activities, because it changes every later choice.

| Factor | Leans predictive | Leans adaptive |
| --- | --- | --- |
| Requirements stability | Known and stable | Emerging or uncertain |
| Regulation and audit | Heavy, needs documented approval | Light |
| Cost of change late in delivery | High (hardware, contracts, integrations) | Low (software, configurable) |
| Stakeholder availability | Limited, needs scheduled sign-offs | Continuous, can review often |
| Team distribution | Many parties, contracts between them | One co-located or well-connected team |

Most initiatives are hybrid: predictive for scope, governance, and compliance; adaptive for detailed requirements and design. State the choice and the reason. The approach-adviser agent can propose it independently.

## 3.1 Plan Business Analysis Approach

Decide and record:

- Planning approach: predictive, adaptive, or hybrid, and why.
- Formality and level of detail of deliverables: which need a template and a rubric pass, and which can be lightweight.
- Activities: the business analysis activities, techniques, and deliverables, in order, with owners.
- Timing: when each activity happens relative to delivery.
- Complexity and risk: size, number of stakeholders, number of interfaces, novelty, and regulatory load, and how the approach responds to each.
- Acceptance: who accepts the approach and when it will be reviewed.

Output: the business analysis approach.

## 3.2 Plan Stakeholder Engagement

1. Perform stakeholder analysis: identify stakeholders and record their role, attitude to the change, decision-making authority, and level of power and influence.
2. Define the collaboration each needs: timing, frequency, location, channel, and preferred style.
3. Record stakeholder communication needs: what, when, how often, in what form, and how formal.

Output: the stakeholder engagement approach. Build on the stakeholder register and map. The stakeholder-coverage-auditor agent checks for missing groups and unassigned decisions.

## 3.3 Plan Business Analysis Governance

Decide:

- Decision making: who decides what, including escalation paths when stakeholders disagree.
- Change control: how changes to baselined requirements and designs are requested, assessed, approved, and communicated.
- Prioritisation approach: the method (for example MoSCoW, weighted scoring, value versus effort), the criteria, and who participates.
- Approvals: which work products need approval, from whom, at what point, and what evidence they need to see.

Output: the governance approach. Link it to the decision log and change request template so the rules and the records agree.

## 3.4 Plan Business Analysis Information Management

Decide:

- Organisation: how business analysis information is structured and named, and where it lives.
- Level of abstraction: how much detail each audience gets.
- Traceability approach: what is traced to what, and how deep. Trace deeper where risk or regulation demands it, not everywhere.
- Reuse: which requirements and models should be written for reuse beyond this initiative.
- Storage and access: tools, permissions, retention, and backup.
- Requirements attributes: the attributes every requirement carries, such as ID, source, priority, status, owner, and stability.

Output: the information management approach, with the artefact register as its working index.

## 3.5 Identify Business Analysis Performance Improvements

1. Define measures of business analysis performance: timeliness, rework rate, stakeholder satisfaction, defect escape rate, and requirements volatility.
2. Collect and analyse them at a stated cadence.
3. Recommend actions: adopt, adjust, or stop practices, and record lessons learned.

Output: the business analysis performance assessment.

## Proportionate planning by initiative size

| Initiative | Approach | Engagement | Governance | Information |
| --- | --- | --- | --- | --- |
| Small discovery (weeks) | One page | Stakeholder list | Named decision maker | Shared folder and naming rule |
| Standard project | Approach document | Register, map, RACI | Change control and approvals | Artefact register, trace to test |
| Regulated programme | Governed plan with review points | Full engagement approach | Formal change board, audit trail | Register, baselines, full traceability |

## Common failure modes

- Planning the same way for every initiative regardless of risk.
- No named decision maker, so decisions stall or reopen.
- Change control defined but not linked to baselines, so nothing is ever controlled.
- Traceability planned at a depth the team cannot maintain.
- Performance never measured, so the approach never improves.

## Quality gates

Grade each output with the rubric named in its quality profile (`evaluation/quality-profiles.json`): `business-analysis-approach`, `stakeholder-engagement-approach`, `governance-approach`, `information-management-approach`, `artefact-register`, and `business-analysis-performance-assessment`.
