# Conformance checks: crisp-dm-1.0

Source id: `crisp-dm-1.0`
Standard: CRISP-DM 1.0, Cross-Industry Standard Process for Data Mining, step-by-step data mining guide.
Edition held: Version 1.0, 2000. Chapman, Clinton, Kerber, Khabaza, Reinartz, Shearer, Wirth (CRISP-DM consortium: NCR, SPSS, DaimlerChrysler, OHRA).
Publisher: CRISP-DM consortium.
Authority: normative.
Identity: confirmed from the title page on 2026-08-07. CRISP-DM 1.0, 2000.
Licence: free to obtain, no redistribution; paraphrase only.
Modality note: CRISP-DM is a process methodology, not a "shall" standard. It describes phases, tasks, and outputs, and states explicitly that the phase sequence is idealized and that backtracking between phases is expected. The blocking severities below are our house gate that a workflow evidences the CRISP-DM phases and their outputs. We do NOT gate on strict phase order, because the standard says the order is not fixed.
Artefact types constrained: `analytics-workflow`.
Owning skills: `data-analysis` (primary), `business-intelligence`.
Locator style: CRISP-DM 1.0, phase `<name>`.

## How to read this file

Three layers, kept separate: Source (S) with locator, labelled Inference (I), and the Check (C). Severity here reflects a house-gate decision (see the modality note).

## Checks: analytics-workflow

Applies to a data mining or analytics workflow.

| Check id | Question (yes = pass) | Severity | Locator | How the reviewer confirms |
| --- | --- | --- | --- | --- |
| CRISPDM-AW-01 | Does the workflow address all six CRISP-DM phases: Business Understanding, Data Understanding, Data Preparation, Modeling, Evaluation, and Deployment? | blocking | Reference model | Confirm all six phases are present. A workflow that jumps to modelling with no business or evaluation phase fails. Order is not gated. |
| CRISPDM-AW-02 | Does the workflow begin from business understanding, stating the business objectives and the data mining goals before modelling? | blocking | Business Understanding (1.1, 1.3) | Confirm business objectives and data mining goals are recorded upfront. A workflow with no stated objective fails. |
| CRISPDM-AW-03 | Does each phase produce its defined outputs (for example project plan; data quality report; dataset and its description; model and model assessment; results assessment; deployment and monitoring plans; final report)? | blocking | The CRISP-DM outputs (Part IV) | Check the phase deliverables exist. A phase run with no output fails. |
| CRISPDM-AW-04 | Does the Evaluation phase assess the results against the business objectives, not only model metrics? | blocking | Evaluation (5.1) | Confirm evaluation ties back to the business objectives set in phase one. Model-metrics-only evaluation fails. |
| CRISPDM-AW-05 | Is data quality verified during Data Understanding, with a data quality report? | blocking | Data Understanding (2.4) | Confirm a data quality check and report. Skipping data quality fails. |
| CRISPDM-AW-06 | Are deployment and monitoring/maintenance plans produced in the Deployment phase? | advisory | Deployment (6.1, 6.2) | Look for the deployment and monitoring plans. Advisory: some engagements stop before deployment. |
| CRISPDM-AW-07 | Is a process instance recorded (the actual actions, decisions, and results of the engagement)? | advisory | Methodology 1.1 (process instance) | Look for a record of what actually happened, not just the generic plan. Advisory. |
| CRISPDM-AW-08 | Where iteration or backtracking between phases occurred, is it captured? | advisory | Reference model (idealized sequence note) | The standard expects backtracking; look for it recorded where it happened. Advisory. |

### Provenance, analytics-workflow

- AW-01. S: The reference model organises the data mining process into six phases: Business Understanding, Data Understanding, Data Preparation, Modeling, Evaluation, Deployment (Reference model). I: We gate on all six being addressed. We do not gate order, since the standard says the sequence is idealized and backtracking is expected.
- AW-02. S: Business Understanding includes Determine business objectives (1.1) and Determine data mining goals (1.3) (Business Understanding). I: We gate on objectives and goals being set before modelling.
- AW-03. S: The reference model presents phases, tasks, and their outputs; Part IV lists the outputs for each phase (Reference model; The CRISP-DM outputs). I: We gate on each phase producing its outputs; the how-to lists the principal ones.
- AW-04. S: Evaluation evaluates results and assesses the degree to which the model meets the business objectives (Evaluation 5.1). I: We gate on evaluation tying back to business objectives.
- AW-05. S: Data Understanding includes Verify data quality (2.4), producing a data quality report (Data Understanding). I: We gate on data quality being verified.
- AW-06. S: Deployment includes Plan deployment (6.1) and Plan monitoring and maintenance (6.2) (Deployment). I: Advisory, some engagements stop earlier.
- AW-07. S: The process instance is a record of the actions, decisions, and results of an actual engagement (Methodology 1.1). I: Advisory.
- AW-08. S: The phase sequence is idealized; in practice tasks are performed in different orders and backtracking is often necessary (Reference model). I: Advisory capture of iteration.

## Not-testable obligations

| Obligation (paraphrase) | Locator | Why not testable on a finished artefact |
| --- | --- | --- |
| The specialized-task level describes how generic tasks differ in specific contexts (problem type, tool, domain). | Methodology 1.1 (specialized task) | Context-specific guidance for tailoring, not a fixed property of a delivered workflow. |
| The data mining problem types (description, segmentation, classification, prediction, dependency analysis). | Appendix 2 | Background taxonomy, not an obligation the workflow must satisfy. |
| The user guide tips and hints for carrying out each task. | Part III | Advice on how to perform tasks, not a pass-or-fail property of the artefact. |

## Coverage

- `analytics-workflow`: 5 blocking checks (AW-01 to AW-05), 3 advisory (AW-06 to AW-08).

The single constrained artefact type carries blocking checks (forward cross-check satisfied). Every check maps to `analytics-workflow`, no orphans. No other normative source constrains this type, so no conflict.
