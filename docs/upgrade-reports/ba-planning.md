# Coverage Report: ba-planning

Upgraded 10 August 2026 under `skills/skill-upgrader/references/upgrade-spec.md`. Fourth skill in the alphabetical pass.

## What changed

The old skill restated BABOK knowledge area 3 accurately and added nothing. Its single 25-line reference paraphrased the five tasks, and the workflow steps described the field rather than instructing anyone: "plan business analysis governance: how requirements and design decisions are prioritised, changed, and approved, and who decides" tells a practitioner what the task is called, not how to do it or what a good answer looks like. Both are exactly the anti-patterns the upgrade spec names.

The rewrite makes every planning task produce a decision. Proportionality becomes a recorded five-axis assessment rather than an instruction to be proportionate. Hybrid becomes a design with a named seam rather than a word. Governance becomes a decision rights table in which every decision class has one accountable owner, stated evidence, and a turnaround clock, since an unbounded decision is a blocker with no name. Traceability depth becomes a deliberate choice on a stated subset, because full bidirectional tracing adopted by default is abandoned by week six and leaves a matrix that is wrong rather than absent. The analysis effort gets estimated with a method, assumptions, and a confidence range instead of a percentage of the build. And performance measurement moves from output volume to escaped requirement defects, rework, and decision latency, with an explicit prohibition on using any of it for individual appraisal.

Two additions have no BABOK anchor and are labelled as such: governance for automated decision-making, and probabilistic throughput forecasting. BABOK predates both.

References went from one file to six.

## Coverage table

| Obligation | Anchor | Status before | Where covered after | Note |
| --- | --- | --- | --- | --- |
| Business analysis approach | BABOK 3.1 | Restated | approach-selection.md | Now specifies the six things the approach must actually decide, including exclusions and reuse |
| Predictive, adaptive, hybrid selection | BABOK 3.1 | Named | approach-selection.md | Selection table with the cost each choice accepts, plus the requirement to name the hybrid seam |
| Tailoring | BABOK 3.1 | Asserted as a principle | approach-selection.md | Given a floor: mandated deliverables listed first, exceptions recorded rather than silently omitted |
| Operating context fit | Corpus 1 | Absent | approach-selection.md | Artefact form, governance shape, estimation basis, and risk vector per delivery paradigm |
| Stakeholder identification | BABOK 3.2 | One clause | stakeholder-engagement-planning.md | Identification worked outward from the change, including the parties who can stop the work |
| Stakeholder analysis | BABOK 3.2, technique 10.43 | Four attributes listed | stakeholder-engagement-planning.md | Five attributes, adding availability and the "and why" on attitude |
| Engagement design | BABOK 3.2 | Absent | stakeholder-engagement-planning.md | Per group, with cadence, medium, and an observable signal of real engagement |
| Planning for disagreement and non-engagement | Reasoned practice | Absent | stakeholder-engagement-planning.md | New. Arbitration path and what silence means, agreed in advance |
| Governance design and decision rights | BABOK 3.3 | Restated | governance-and-information-planning.md | Decision rights table with owner, evidence, and clock |
| Prioritisation basis | Technique 10.33 | Absent | governance-and-information-planning.md | Method, criteria, and precedence order set before the first argument |
| Change control design | BABOK 3.3 | Named | governance-and-information-planning.md | Thresholds, turnarounds, and the written distinction between change, clarification, and defect |
| Information management approach | BABOK 3.4 | Restated | governance-and-information-planning.md | Four decisions: detail level, traceability depth, retention, reuse |
| Traceability depth as a decision | BABOK 3.4, 5.1 | Absent | governance-and-information-planning.md | Subset-based tracing offered as the proportionate option, with the failure mode named |
| Performance measurement | BABOK 3.5 | One clause | performance-and-estimation.md | Six measures with what each tells you and what to watch for |
| Estimation of the analysis effort | Technique 10.19 | Absent | performance-and-estimation.md | Five methods with selection guidance, plus the range-and-assumptions discipline |
| Probabilistic forecasting | Corpus 1 | Absent | performance-and-estimation.md | Throughput sampling as cheaper and more honest than decomposition where history exists |
| Lessons learned | Technique 10.27 | Absent | performance-and-estimation.md | Structured to produce changes with owners rather than sentiments |
| Capability maturity | Corpus 1 | Absent | performance-and-estimation.md | Kept as a locating device, explicitly not as a target |
| Governance for automated decision-making | ISO/IEC 42001, Corpus 1 | Absent | governance-and-information-planning.md, SKILL.md gate 8 | Four additions identified here, obligation routed to `regulatory-compliance` |
| Failure patterns | Corpus 1 | Absent | failure-modes.md | Thirteen patterns with the fix, plus a ten-dimension rubric |
| Team topologies, Conway's Law | Corpus 1 | Absent | Not covered | Decision: team structure is `agile-coach`, operating model is `business-architecture` |
| Lean portfolio management, continuous funding | Corpus 1 | Absent | Not covered | Decision: portfolio and investment governance belongs to `business-architecture` and `finance` |
| Opportunity solution trees, product discovery | Corpus 1 | Absent | Named as an artefact form only | Decision: owned by `product-manager` |
| Context engineering, RAG stores, multi-agent planning | Corpus 1 | Absent | Not covered | Decision: tooling-specific and fast-moving. The durable residue is retained as the automated decision-making governance additions |
| Knowledge graph and executable documentation architecture | Corpus 1 | Absent | Not covered | Decision: repository mechanics belong to `information-management` |
| Cloud-native non-functional requirements | Corpus 1 | Absent | Not covered | Decision: owned by `architecture` |
| DevSecOps and continuous delivery integration | Corpus 1 | Absent | Not covered | Decision: delivery practice, owned by `agile-coach` and engineering |

No row remains at absent without a decision.

## Boundary check

| Neighbour | This skill states | Neighbour states | Verdict |
| --- | --- | --- | --- |
| information-management | Hands repository structure, naming, identifiers, versioning, and baselines to it | Its description says to take planning of the analysis approach from `ba-planning` and hand traceability analysis to `governance` | Reciprocal and clean |
| governance | Hands the running of governance to it, keeps the design | Its description hands repository and baselines to `information-management` and risk to `risk-analysis`; does not explicitly name `ba-planning` | Partially reciprocal. Open item |
| risk-analysis | Routes identification and scoring of initiative risks | Its description covers risk planning and register; does not name `ba-planning` | Not reciprocal. Open item |
| orchestrator | Routes broad multi-discipline requests before planning starts | Its description covers routing across all skills | Reciprocal by scope |
| agile-coach | Hands delivery team practice to it, and states that the analysis approach follows the delivery approach | `agile-coach` now states the reciprocal handoff following its own upgrade | Reciprocal, per the rule proposed in the agile-coach report |
| change-control | Routes assessment of a specific change against a baseline, keeps the design of the path | Its description takes baselines from `information-management` and the decision record from `governance` | Consistent, no conflict |
| solution-evaluation | Routes the performance assessment artefact and organisational lessons | Register assigns the Business Analysis Performance Assessment to `solution-evaluation` | Consistent with the register, though see conflict 1 |

## Boundary conflicts raised

**Conflict 1, the significant one, escalated to Batch 9.** BABOK assigns all five knowledge area 3 tasks to business analysis planning, but the register assigns three of the five task outputs to other skills: the Governance Approach (3.3 output) and the Information Management Approach (3.4 output) go to `governance`, and the Business Analysis Performance Assessment (3.5 output) goes to `solution-evaluation`. That leaves `ba-planning` owning only the Business Analysis Approach, the Stakeholder Engagement Approach, Methodologies and Frameworks, and the legacy business analysis plan, while its own workflow legitimately performs all five tasks.

Proposed resolution, and the one this upgrade is written against: `ba-planning` owns the design of governance and of information management, meaning the decision rights, the prioritisation basis, the change control path, the detail and traceability policy. `governance` owns operating those rules once the initiative is running, including the decision log, RAID, and traceability analysis. `information-management` owns the repository mechanics that implement the policy. `solution-evaluation` keeps the performance assessment artefact, since it is the assessment skill, but the measure set is designed here.

This needs to be reflected in the register and stated in the routing map. Logged, not applied.

**Conflict 2, minor.** The register assigns the Stakeholder Engagement Approach jointly to `ba-planning` and `business-analysis`. The `business-analysis` skill's description does not mention stakeholder engagement planning, and `elicitation` owns stakeholder analysis as technique 10.43. The three-way split is unclear and should be settled when `business-analysis` and `elicitation` are upgraded.

## Validation

Frontmatter correct, name matches folder. Description 998 characters with ten trigger phrases and three handoffs. Body 51 lines. Six reference files, longest 65 lines. No README. No em dash or en dash. Every reference file is mentioned in `SKILL.md` and every mention resolves. The superseded `ba-planning-tasks.md` was deleted, its content absorbed and expanded; no file in the working tree references it. `node scripts/validate-assets.mjs` reports no error against this skill.

Source-integrity caveat carried forward: ISO/IEC 42001 and ISO/IEC 19761 are cited by name here but are not held in `sources/`, and `references/sources.md` marks them accordingly.

## Trigger test

Five realistic messages the description should fire on: "we're kicking off a programme next month, how much analysis rigour does it need"; "every requirement change takes three weeks to get approved, can we fix that"; "how long will the BA work take on this"; "do we need to trace everything or is that overkill"; "the last project's requirements were a mess, how do we not repeat it".

## Open items

1. Conflict 1 register reassignment and routing map rule, held for Batch 9 per the standing decision.
2. Conflict 2 three-way split on the Stakeholder Engagement Approach, to settle during the `business-analysis` and `elicitation` upgrades.
3. `governance` and `risk-analysis` upgrades should state the reciprocal handoff to `ba-planning`.
4. No worked example. Reference count is at the cap of six.
5. Independent review by the `deliverable-critic` agent and the `quality` skill not run, per the standing decision to keep moving.
