# Failure Modes and Review Rubric

## Rubric

Score pass or fail. Any fail means the plan is not ready to guide work.

| Dimension | Pass | Fail |
| --- | --- | --- |
| Proportionality | Rigour justified against a recorded assessment of scale, uncertainty, exposure, parties, and cost of error | The same process applied regardless of initiative |
| Exclusions | States what will not be produced | Lists only inclusions, leaving omissions to be discovered |
| Detail decisions | Level of detail decided per deliverable | "Requirements will be documented" |
| Decision ownership | Every decision class has one accountable owner and a stated clock | Decisions owned by a committee or by nobody |
| Prioritisation basis | Method, criteria, and order of precedence named in advance | Priority set by seniority in the room |
| Change definition | Change, clarification, and defect distinguished in writing | The distinction argued about while an item is in play |
| Traceability depth | Set deliberately with a reason and a stated subset | Everything traced, or nothing, by default |
| Estimate honesty | Method, assumptions, and a range with confidence | A single unqualified number |
| Measures | Count outcomes and rework | Count documents, pages, or hours |
| Review point | A date exists at which the plan is tested against evidence | Written once at initiation |

## Failure modes

**One-size-fits-all process.** The organisational template applied without tailoring, producing heavy artefacts for trivial changes and teaching everyone that analysis is overhead. The fix is the sizing assessment, recorded, so tailoring is defensible rather than discretionary.

**Hybrid as a word rather than a design.** "We are hybrid" with no statement of which parts are fixed up front, which are elaborated later, and where the seam is. The seam is where the defects appear, so it is the part that most needs writing down.

**Governance as a bottleneck.** A central board reviewing everything, with a fortnightly cadence and a queue. Delivery routes around it, so the organisation now has both the delay and the absence of control. Push decisions down by threshold and reserve the forum for the genuinely material.

**Decisions with no clock.** Owners named, times not stated. The plan looks complete and the initiative stalls, and the stall is attributed to analysis. Every decision needs a turnaround.

**Traceability by default.** Full bidirectional tracing adopted because it sounds rigorous, then abandoned by week six because nobody can maintain it, leaving a matrix that is wrong rather than absent. Wrong is worse. Decide the subset and maintain that.

**The engagement plan nobody could have met.** Built from what the initiative needs rather than from what stakeholders can give. Establish real availability first, then design within it or escalate the gap before starting.

**Stakeholder analysis frozen at initiation.** Produced once, never revised, obsolete within a quarter as roles change and attitudes shift once the change becomes concrete. Tie review to events rather than the calendar.

**Estimating the analysis as a percentage of the build.** A fixed proportion, or whatever time remains before development starts. It has no relationship to the number of parties who must agree, which is what actually drives analysis duration.

**Measuring output volume.** Pages, documents, requirements written. It rewards the behaviour this knowledge area exists to prevent, and it makes a heavy specification look like good performance.

**Performance measures used for appraisal.** The moment escaped defects appraise an individual, root causes stop being recorded honestly and the measure stops working. Keep them systemic.

**Lessons learned as a filing exercise.** A log that never changes an approach. Convert each retained item into a change with an owner, or do not run the session.

**Governance designed for a regulator that was never consulted.** Formality assumed rather than confirmed, producing ceremony that satisfies nobody. Ask what evidence is actually required, and route the obligation to `regulatory-compliance`.

**Automated decision-making planned as ordinary software.** No impact assessment, no data provenance requirements, no reconstruction logging. BABOK does not prompt for these because it predates them; plan for them anyway where they apply.

## Handoffs

| Situation | Route to |
| --- | --- |
| Repository structure, naming, identifiers, versioning, baselines | `information-management` |
| Operating the governance once it exists, decision logs, RAID | `governance` |
| Assessing a specific change against a baseline | `change-control` |
| How the delivery team works: framework, ceremonies, flow | `agile-coach` |
| Conducting interviews, workshops, surveys | `elicitation` |
| Writing the communications the engagement plan calls for | `communication` |
| Estimation modelling method and forecasting mechanics | `estimation` |
| Weighting and scoring mechanics for a prioritisation method | `decision-analysis` |
| Identifying and scoring initiative risks | `risk-analysis` |
| Regulatory retention, audit evidence, automated decision obligations | `regulatory-compliance` |
| The performance assessment artefact and organisational lessons | `solution-evaluation` |
| Routing a broad or multi-discipline request before planning starts | `orchestrator` |
