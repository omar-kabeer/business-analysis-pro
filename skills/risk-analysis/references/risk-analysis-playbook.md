# Risk Analysis Playbook

How to identify, analyse, evaluate, and treat the risks to a change, and keep them under review, so decisions are made with the uncertainty in view rather than discovered afterwards. This playbook applies BABOK Assess Risks (6.3) and Risk Analysis and Management (10.38), following the guidance of ISO 31000:2018 (`iso-31000-2018`). ISO 31000 is a guidelines standard: it says what risk management should do and is not certifiable, so an artefact can follow it but not "conform" to it. Information security risks also draw on ISO/IEC 27001 and 27002 (`iso-27001-2022`, `iso-27002`), with the regulatory-compliance skill.

## When this playbook applies

Use it when a decision depends on what could go wrong: approving a business case, choosing a change strategy, planning a release, or setting contingency. Use it again whenever something changes that could move a risk, and on a stated review cadence.

## Step 1: Set the scope, context, and criteria

Before listing any risk, state what the assessment covers and against which objectives, the internal and external context, and the risk criteria: how likelihood and consequence are measured and how the level of risk is determined (ISO 31000 6.3; checks ISO31000-RA-02 and RA-03 in `sources/conformance/iso-31000-2018.md`). State the risk appetite and tolerance: the level above which a risk must be treated or escalated. Without agreed criteria, every score is a matter of opinion.

## Step 2: Identify risks

Look for risks systematically: from each objective (what could stop it), each assumption (what if it is false), each dependency (what if it is late), each stakeholder (what if they resist), and each constraint (what if it binds). Use the categories in `risk-taxonomy.md` as prompts: delivery, adoption, technical, benefit, financial, regulatory, and reputational.

Describe each risk with its source or cause, the event, and the consequence for an objective (ISO31000-RA-06): "Because approvers see approval as an interruption, they may keep approving by email, so the 5-day target is missed." A risk written as one word ("adoption") cannot be analysed or owned.

## Step 3: Analyse each risk

Estimate likelihood and consequence on the agreed scales and derive the level of risk (ISO31000-RA-04). The scoring conventions are in `risk-scoring.md`. Record the basis for each estimate: evidence, a comparable project, or expert judgement, named. Where consequence is financial and the decision is large, estimate expected monetary value (probability times cost) or run a simple simulation.

## Step 4: Evaluate against the criteria

Compare each risk's level against the criteria and decide: accept, treat, analyse further, or reconsider the objective (ISO31000-RA-05). This step is the one most often skipped: a register full of scored risks with no evaluation is a list, not an assessment.

## Step 5: Treat

For each risk to be treated, choose an option. ISO 31000 (6.5.2) lists them as: avoid the risk, take or increase it in pursuit of an opportunity, remove its source, change its likelihood, change its consequences, share it, or retain it by informed decision. The OS risk register uses the shorter set avoid, reduce, transfer, and accept, which maps onto these: reduce covers removing the source and changing likelihood or consequences, transfer covers sharing, and accept covers retaining.

Record for each treatment the actions, an owner who can act (ISO31000-RR-03), the date, and a trigger that shows the risk is materialising. Record the residual risk after treatment and flag it for monitoring (RR-04).

## Step 6: Monitor, review, and escalate

Review the register on a stated cadence with the owners, and date each review (RR-06). Escalate by rule: any risk above tolerance goes to the decision maker named in the governance approach. When a risk materialises, it becomes an issue: close the risk and open the issue in the RAID log, linked.

## Security and privacy risks

For risks to confidentiality, integrity, or availability of information, identify the controls that treat them from ISO/IEC 27002, citing each by its clause number and title (ISO27002-CM-01), and record them in the compliance matrix with the regulatory-compliance skill. Each security requirement should trace to a risk in the assessment (ISO27001-SR-01).

## Stop rules

The assessment is complete when scope, context, and criteria are stated, each risk has cause, event, and consequence, each is analysed for likelihood and consequence and evaluated against the criteria, each treated risk has an option, actions, an owner, a trigger, and a residual level, and a review date is set.

## Common failures

- Risks scored without agreed criteria.
- One-word risks with no cause or consequence.
- Scoring without evaluation, so nothing is decided.
- "Monitor" as the treatment for everything.
- A register built once for the business case and never reviewed.

## Worked example

Supplier invoice approval, release 1.

Criteria: likelihood and consequence scored 1 to 5 against stated definitions in `templates/risk-register.md`; level of risk is their product; tolerance is 15, above which the steering group decides.

RSK-001: because approvers see approval as an interruption, they may keep approving by email, so the 5-day target (OBJ-001) is missed.
- Analysis: likelihood 4 (two earlier tools in Finance saw low adoption), consequence 4 (the objective is missed for the year), level 16.
- Evaluation: above tolerance, so it is treated and escalated.
- Treatment: reduce (change likelihood): switch off email approval at go-live and report in-tool approval share weekly. Trigger: under 70 percent in-tool approvals in week 2. Owner: Financial Controller. Residual: likelihood 2, consequence 4, level 8, below tolerance; flagged for monitoring.

RSK-002: because the ERP vendor API is untested at our volumes, posting may fail at month end, so invoices are paid late.
- Analysis: likelihood 2, consequence 5, level 10.
- Evaluation: below tolerance, but the consequence is severe, so it is treated anyway.
- Treatment: reduce, with a load test at three times peak before go-live. Owner: Tom Reyes.

Reviewed fortnightly; next review 30 June 2026.

## Sources

- `babok-3.0-2015`: Assess Risks (6.3) and Risk Analysis and Management (10.38).
- `iso-31000-2018`: context, criteria, identification, analysis, evaluation, treatment, and review, as guidance.
- `iso-27001-2022`: tracing security requirements to assessed risks.
- `iso-27002`: the reference set of information security controls used for treatment.
