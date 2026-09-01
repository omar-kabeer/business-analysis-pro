# Coverage Backlog Canonical Manifest

Manifest version: 1.0.0
Generated: 2026-09-01 from COVERAGE_BACKLOG.md (217 Section A rows, 25 Section B, 9 Section C).
Authority: this manifest is the count of record for the closure plan (docs/coverage-backlog-closure-plan.md). It resolves duplicate register rows to one canonical slug per artefact concept.

## Summary

| Metric | Count |
| --- | --- |
| Section A register rows | 217 |
| Distinct canonical rubric slugs | 201 |
| Of which merged from >1 row | 15 |
| Section B templates | 25 |
| Template-only slugs (no rubric) | 0 |
| Rubric slugs that also need a template (kind=both) | 25 |
| Section C skill refs | 9 |

Rubric slugs per phase: P1=21, P2=22, P3=36, P4=30, P5=45, P6=47.

## Rubric and combined artefacts (Section A)

Phase is the earliest phase the concept appears in; a concept spanning phases is authored once, in that phase, and referenced from later ones. Kind "both" means the same slug also needs a template.

| Phase | Canonical slug | Kind | Owning agent | Template link | Catalogue ref (KA) | Register row(s) | Status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | `business-analysis-approach` | both | Approach | `templates/business-analysis-approach.md` | KA3 Planning & Monitoring | Business Analysis Approach | shipped |
| 1 | `business-analysis-information-communicated` | both | Elicitation | `templates/business-analysis-information-communicated.md` | KA4 Elicitation | Business Analysis Information [communicated] | shipped |
| 1 | `business-analysis-performance-assessment` | both | Quality & Audit | `templates/business-analysis-performance-assessment.md` | KA3 Planning & Monitoring | Business Analysis Performance Assessment | shipped |
| 1 | `business-objectives` | both | Elicitation | `templates/business-objectives.md` | KA4 Elicitation | Business Objectives | shipped |
| 1 | `change-strategy` | both | Approach | `templates/change-strategy.md` | KA3 Planning & Monitoring | Change Strategy | shipped |
| 1 | `designs` | rubric | Synthesis & Drafting |  | KA2 Key Concepts | Designs | rubric shipped |
| 1 | `elicitation-activity-plan` | both | Elicitation | `templates/elicitation-activity-plan.md` | KA4 Elicitation | Elicitation Activity Plan | shipped |
| 1 | `elicitation-results-confirmed` | rubric | Elicitation |  | KA4 Elicitation | Elicitation Results [confirmed] | rubric shipped |
| 1 | `elicitation-results-unconfirmed` | rubric | Elicitation |  | KA4 Elicitation | Elicitation Results [unconfirmed] | rubric shipped |
| 1 | `functional-requirements` | rubric | Synthesis & Drafting |  | KA11 Perspectives; KA2 Key Concepts | Functional specifications ; Functional requirements (merged) | rubric shipped |
| 1 | `future-state-description` | rubric | Elicitation |  | KA4 Elicitation | Future State Description | rubric shipped |
| 1 | `governance-approach` | both | Approach | `templates/governance-approach.md` | KA3 Planning & Monitoring | Governance Approach | shipped |
| 1 | `information-management-approach` | both | Approach | `templates/information-management-approach.md` | KA3 Planning & Monitoring | Information Management Approach | shipped |
| 1 | `non-functional-requirements` | rubric | Synthesis & Drafting |  | KA11 Perspectives; KA2 Key Concepts | Non-functional (quality-of-service) requirements ; Non-functional requirements (merged) | rubric shipped |
| 1 | `potential-value` | both | Elicitation | `templates/potential-value.md` | KA4 Elicitation | Potential Value | shipped |
| 1 | `recommended-actions` | both | Elicitation | `templates/recommended-actions.md` | KA4 Elicitation | Recommended Actions | shipped |
| 1 | `risk-analysis-results` | rubric | Elicitation |  | KA4 Elicitation | Risk Analysis Results | rubric shipped |
| 1 | `solution-requirements` | rubric | Synthesis & Drafting |  | KA2 Key Concepts | Solution requirements | rubric shipped |
| 1 | `stakeholder-engagement-approach` | both | Elicitation | `templates/stakeholder-engagement-approach.md` | KA3 Planning & Monitoring | Stakeholder Engagement Approach | shipped |
| 1 | `stakeholder-requirements` | rubric | Synthesis & Drafting |  | KA2 Key Concepts | Stakeholder requirements | rubric shipped |
| 1 | `transition-requirements` | rubric | Synthesis & Drafting |  | KA2 Key Concepts | Transition requirements | rubric shipped |
| 2 | `business-analysis-package` | rubric | Synthesis & Drafting |  | KA6 Packaging & Representation | Business analysis package | rubric shipped |
| 2 | `design-options` | both | Synthesis & Drafting | `templates/design-options.md` | KA6 Strategy Analysis | Design Options | shipped |
| 2 | `designs-approved` | both | GAP: lifecycle governance | `templates/designs-approved.md` | KA5 Requirements Lifecycle | Designs [approved] | shipped |
| 2 | `designs-change-assessment` | both | GAP: lifecycle governance | `templates/designs-change-assessment.md` | KA5 Requirements Lifecycle | Designs Change Assessment | shipped |
| 2 | `designs-maintained` | both | Architecture | `templates/designs-maintained.md` | KA5 Requirements Lifecycle | Designs [maintained] | shipped |
| 2 | `designs-prioritized` | both | GAP: lifecycle governance | `templates/designs-prioritized.md` | KA5 Requirements Lifecycle | Designs [prioritized] | shipped |
| 2 | `designs-traced` | both | Architecture | `templates/designs-traced.md` | KA5 Requirements Lifecycle | Designs [traced] | shipped |
| 2 | `enterprise-limitation` | both | Synthesis & Drafting | `templates/enterprise-limitation.md` | KA6 Strategy Analysis | Enterprise Limitation | shipped |
| 2 | `identified-risks` | rubric | Synthesis (produce) / risk-challenger audits |  | KA6 Strategy Analysis | Identified Risks | rubric shipped |
| 2 | `metrics-and-kpis` | rubric | Synthesis & Drafting |  | KA10 Techniques; KA6 Strategy Analysis | Metrics & KPIs (definitions, targets, reporting) ; Metrics and Key Performance Indicators [KPIs] (merged) | rubric shipped |
| 2 | `requirements-approved` | rubric | GAP: lifecycle governance |  | KA5 Requirements Lifecycle | Requirements [approved] | rubric shipped |
| 2 | `requirements-change-assessment` | both | GAP: lifecycle governance | `templates/requirements-change-assessment.md` | KA5 Requirements Lifecycle | Requirements Change Assessment | shipped |
| 2 | `requirements-maintained` | rubric | Architecture |  | KA5 Requirements Lifecycle | Requirements [maintained] | rubric shipped |
| 2 | `requirements-package` | rubric | Synthesis & Drafting |  | KA6 Packaging & Representation | Requirements package (requirements document) | rubric shipped |
| 2 | `requirements-prioritized` | rubric | GAP: lifecycle governance |  | KA5 Requirements Lifecycle | Requirements [prioritized] | rubric shipped |
| 2 | `requirements-traced` | rubric | Architecture |  | KA5 Requirements Lifecycle | Requirements [traced] | rubric shipped |
| 2 | `solution-limitation` | both | Synthesis & Drafting | `templates/solution-limitation.md` | KA6 Strategy Analysis | Solution Limitation | shipped |
| 2 | `solution-performance-goals` | rubric | Synthesis & Drafting |  | KA6 Strategy Analysis | Solution Performance Goals | rubric shipped |
| 2 | `solution-performance-measures` | both | Synthesis & Drafting | `templates/solution-performance-measures.md` | KA6 Strategy Analysis | Solution Performance Measures | shipped |
| 2 | `solution-recommendations` | rubric | Synthesis & Drafting |  | KA6 Strategy Analysis | Solution Recommendations | rubric shipped |
| 2 | `solution-scope` | both | Synthesis & Drafting | `templates/solution-scope.md` | KA6 Strategy Analysis | Solution Scope | shipped |
| 2 | `stakeholder-analysis` | rubric | Elicitation |  | KA6 Strategy Analysis; KA9 Analysis/Assessment/Review/Test | Stakeholder Analysis Results ; Stakeholder analysis (merged) | rubric shipped |
| 3 | `activity-diagram` | rubric | Visual Modeling |  | Named Forms | Activity diagram | rubric shipped |
| 3 | `affinity-diagram` | rubric | Elicitation |  | Named Forms | Affinity diagram | rubric shipped |
| 3 | `bpmn-model` | rubric | Visual Modeling |  | Named Forms | BPMN model | rubric shipped |
| 3 | `class-model-class-diagram` | rubric | Visual Modeling |  | Named Forms | Class model / class diagram | rubric shipped |
| 3 | `crud-matrix` | rubric | Visual Modeling |  | Named Forms | CRUD matrix | rubric shipped |
| 3 | `decision-matrix` | rubric | Visual Modeling | `templates/decision-matrix.md` | KA10 Techniques; Named Forms | Decision analysis (decision matrix / expected-value model) ; Decision matrix (simple & weighted) (merged) | rubric shipped |
| 3 | `entity-relationship-diagram` | rubric | Visual Modeling |  | Named Forms | Entity Relationship Diagram (ERD) | rubric shipped |
| 3 | `escalation-matrix` | rubric | Visual Modeling |  | Named Forms | Escalation matrix | rubric shipped |
| 3 | `fishbone-ishikawa-diagram` | rubric | Visual Modeling |  | Named Forms | Fishbone / Ishikawa diagram | rubric shipped |
| 3 | `flowchart` | rubric | Visual Modeling |  | Named Forms | Flowchart | rubric shipped |
| 3 | `onion-diagram` | rubric | Elicitation |  | Named Forms | Onion diagram | rubric shipped |
| 3 | `organizational-chart` | rubric | Visual Modeling |  | Named Forms | Organizational chart (functional/matrix) | rubric shipped |
| 3 | `request-for-information` | rubric | Elicitation |  | KA8 Procurement | Request for Information (RFI) | rubric shipped |
| 3 | `request-for-proposal` | rubric | Analytics & Performance |  | KA8 Procurement | Request for Proposal (RFP) | rubric shipped |
| 3 | `request-for-quote` | rubric | Analytics & Performance |  | KA8 Procurement | Request for Quote (RFQ) | rubric shipped |
| 3 | `request-for-tender` | rubric | Analytics & Performance |  | KA8 Procurement | Request for Tender (RFT) | rubric shipped |
| 3 | `requirements-architecture` | both | Synthesis & Drafting | `templates/requirements-architecture.md` | KA7 RADD | Requirements Architecture | shipped |
| 3 | `requirements-specified-and-modelled` | rubric | Synthesis & Drafting |  | KA7 RADD | Requirements [specified and modelled] | rubric shipped |
| 3 | `requirements-traceability-matrix` | rubric | Visual Modeling | `templates/requirements-traceability-matrix.md` | Named Forms | Requirements traceability matrix | rubric shipped |
| 3 | `requirements-validated` | rubric | Quality & Audit |  | KA7 RADD | Requirements [validated] | rubric shipped |
| 3 | `requirements-verified` | rubric | Quality & Audit |  | KA7 RADD | Requirements [verified] | rubric shipped |
| 3 | `scope-model` | rubric | Visual Modeling |  | KA10 Techniques; Named Forms | Scope model (context diagram / boundary model) ; Context diagram (merged) | rubric shipped |
| 3 | `scope-statement` | rubric | Analytics & Performance |  | KA8 Procurement | Scope statement | rubric shipped |
| 3 | `sequence-diagram` | rubric | Visual Modeling |  | Named Forms | Sequence diagram | rubric shipped |
| 3 | `service-level-agreement` | rubric | Analytics & Performance | `templates/service-level-agreement.md` | KA8 Procurement | Service Level Agreement (SLA) | rubric shipped |
| 3 | `sipoc-diagram` | rubric | Visual Modeling |  | Named Forms | SIPOC diagram | rubric shipped |
| 3 | `solution-performance-analysis` | both | Analytics & Performance | `templates/solution-performance-analysis.md` | KA8 Solution Evaluation | Solution Performance Analysis | shipped |
| 3 | `solution-recommendation` | both | Synthesis & Drafting | `templates/solution-recommendation.md` | KA7 RADD | Solution Recommendation | shipped (rubric: solution-recommendations) |
| 3 | `state-model` | rubric | Visual Modeling |  | Named Forms | State diagram ; State table (merged) | rubric shipped |
| 3 | `statement-of-work` | rubric | Analytics & Performance | `templates/statement-of-work.md` | KA8 Procurement | Statement of Work (SOW) | rubric shipped |
| 3 | `swimlane-diagram` | rubric | Visual Modeling |  | Named Forms | Swimlane diagram | rubric shipped |
| 3 | `use-case` | rubric | Synthesis & Drafting |  | KA11 Perspectives; Named Forms | Use cases and scenarios ; Use case diagram (merged) | rubric shipped |
| 3 | `value-chain` | rubric | Visual Modeling |  | Named Forms | Value chain | rubric shipped |
| 3 | `value-stream-map` | rubric | Visual Modeling |  | Named Forms | Value stream map | rubric shipped |
| 3 | `wireframe-mock-up-storyboard` | rubric | Visual Modeling |  | Named Forms | Wireframe / mock-up / storyboard | rubric shipped |
| 3 | `work-breakdown-structure` | rubric | Analytics & Performance |  | KA8 Procurement | Work Breakdown Structure (WBS) | rubric shipped |
| 4 | `behavioural-business-rules` | rubric | Synthesis & Drafting |  | KA9 Analysis/Assessment/Review/Test | Behavioural (operative) business rules | rubric shipped |
| 4 | `business-analysis-communication-plan` | rubric | Synthesis & Drafting |  | KA9 Analysis/Assessment/Review/Test | Business analysis communication plan (legacy/v2) | rubric shipped |
| 4 | `business-analysis-information-architecture` | rubric | Synthesis & Drafting |  | KA9 Analysis/Assessment/Review/Test | Business Analysis Information Architecture | rubric shipped |
| 4 | `business-analysis-plan` | rubric | Synthesis & Drafting |  | KA9 Analysis/Assessment/Review/Test | Business analysis plan (legacy/v2) | rubric shipped |
| 4 | `checklist` | rubric | Quality & Audit |  | KA9 Analysis/Assessment/Review/Test | Checklist(s) | rubric shipped |
| 4 | `competitive-analysis` | rubric | Synthesis & Drafting |  | KA9 Analysis/Assessment/Review/Test | Competitive analysis | rubric shipped |
| 4 | `cost-benefit-analysis` | rubric | Synthesis & Drafting |  | KA9 Analysis/Assessment/Review/Test | Cost-benefit analysis | rubric shipped |
| 4 | `definitional-business-rules` | rubric | Synthesis & Drafting |  | KA9 Analysis/Assessment/Review/Test | Definitional (structural) business rules | rubric shipped |
| 4 | `enterprise-culture-assessment` | rubric | Synthesis & Drafting |  | KA9 Analysis/Assessment/Review/Test | Enterprise Culture Assessment | rubric shipped |
| 4 | `enterprise-readiness-assessment` | rubric | Synthesis & Drafting |  | KA9 Analysis/Assessment/Review/Test | Enterprise Readiness Assessment | rubric shipped |
| 4 | `evolutionary-prototype` | rubric | Synthesis & Drafting |  | KA9 Analysis/Assessment/Review/Test | Evolutionary (functional) prototype | rubric shipped |
| 4 | `feasibility-study` | rubric | Synthesis & Drafting |  | KA9 Analysis/Assessment/Review/Test | Feasibility study | rubric shipped |
| 4 | `focus-group-plan` | rubric | Elicitation |  | KA9 Analysis/Assessment/Review/Test | Focus Group Plan | rubric shipped |
| 4 | `force-field-analysis` | rubric | Synthesis & Drafting |  | KA9 Analysis/Assessment/Review/Test | Force field analysis | rubric shipped |
| 4 | `gap-analysis` | rubric | Synthesis & Drafting | `templates/gap-analysis.md` | KA9 Analysis/Assessment/Review/Test | Gap analysis | rubric shipped |
| 4 | `horizontal-prototype` | rubric | Synthesis & Drafting |  | KA9 Analysis/Assessment/Review/Test | Horizontal prototype | rubric shipped |
| 4 | `impact-analysis` | rubric | Synthesis & Drafting |  | KA9 Analysis/Assessment/Review/Test | Impact analysis | rubric shipped |
| 4 | `inspection` | rubric | Quality & Audit |  | KA9 Analysis/Assessment/Review/Test | Inspection | rubric shipped |
| 4 | `operational-assessment` | rubric | Synthesis & Drafting |  | KA9 Analysis/Assessment/Review/Test | Operational Assessment | rubric shipped |
| 4 | `peer-review` | rubric | Quality & Audit |  | KA9 Analysis/Assessment/Review/Test | Peer review | rubric shipped |
| 4 | `proof-of-concept` | rubric | Synthesis & Drafting |  | KA9 Analysis/Assessment/Review/Test | Proof of concept | rubric shipped |
| 4 | `requirements-attribute` | rubric | Synthesis & Drafting |  | KA9 Analysis/Assessment/Review/Test | Requirements attribute(s) | rubric shipped |
| 4 | `requirements-defect` | rubric | Quality & Audit |  | KA9 Analysis/Assessment/Review/Test | Requirements defect | rubric shipped |
| 4 | `requirements-management-plan` | rubric | Synthesis & Drafting |  | KA9 Analysis/Assessment/Review/Test | Requirements management plan (legacy/v2) | rubric shipped |
| 4 | `risk-assessment` | rubric | Synthesis & Drafting |  | KA9 Analysis/Assessment/Review/Test | Risk assessment | rubric shipped |
| 4 | `stakeholder-impact-analysis` | rubric | Elicitation |  | KA9 Analysis/Assessment/Review/Test | Stakeholder Impact Analysis | rubric shipped |
| 4 | `throw-away-prototype` | rubric | Synthesis & Drafting |  | KA9 Analysis/Assessment/Review/Test | Throw-away (rapid) prototype | rubric shipped |
| 4 | `user-acceptance-test` | rubric | Quality & Audit |  | KA9 Analysis/Assessment/Review/Test | User acceptance test (UAT) | rubric shipped |
| 4 | `vertical-prototype` | rubric | Synthesis & Drafting |  | KA9 Analysis/Assessment/Review/Test | Vertical prototype | rubric shipped |
| 4 | `walkthrough` | rubric | Quality & Audit |  | KA9 Analysis/Assessment/Review/Test | Walkthrough | rubric shipped |
| 5 | `acceptance-and-evaluation-criteria` | rubric | Quality & Audit |  | KA10 Techniques; KA11 Perspectives | Acceptance criteria & evaluation criteria (measures) ; Acceptance criteria (merged) | rubric shipped |
| 5 | `balanced-scorecard` | rubric | Visual Modeling |  | KA10 Techniques | Balanced scorecard (strategy map, objectives, measures, targets) | rubric shipped |
| 5 | `benchmarking-study-market-analysis-report` | rubric | Synthesis & Drafting |  | KA10 Techniques | Benchmarking study / market analysis report | rubric shipped |
| 5 | `business-capability-map-capability-model` | rubric | Visual Modeling |  | KA10 Techniques | Business capability map / capability model | rubric shipped |
| 5 | `business-model-canvas` | rubric | Visual Modeling | `templates/business-model-canvas.md` | KA10 Techniques | Business Model Canvas (9-block canvas) | rubric shipped |
| 5 | `business-rules-catalogue-set-of-business-rules` | rubric | Synthesis & Drafting |  | KA10 Techniques | Business rules catalogue / set of business rules | rubric shipped |
| 5 | `collaborative-game-outputs` | rubric | Elicitation |  | KA10 Techniques | Collaborative game outputs (product box, affinity map) | rubric shipped |
| 5 | `concept-model` | rubric | Visual Modeling |  | KA10 Techniques | Concept model (business vocabulary, concepts & relationships) | rubric shipped |
| 5 | `data-dictionary` | rubric | Synthesis & Drafting | `templates/data-dictionary.md` | KA10 Techniques; KA11 Perspectives | Data dictionary (data element definitions) ; Source data dictionary ; Target data dictionary (merged) | rubric shipped |
| 5 | `data-flow-diagram` | rubric | Visual Modeling |  | KA10 Techniques | Data flow diagram (DFD) | rubric shipped |
| 5 | `data-mining-model-findings` | rubric | Visual Modeling |  | KA10 Techniques | Data-mining model / findings (patterns & insights) | rubric shipped |
| 5 | `data-model` | rubric | Visual Modeling |  | KA10 Techniques | Data model (ERD / class model) | rubric shipped |
| 5 | `decision-model` | rubric | Visual Modeling |  | KA10 Techniques | Decision model (decision tables / decision trees) | rubric shipped |
| 5 | `decomposition-diagram-breakdown-structure` | rubric | Visual Modeling |  | KA10 Techniques | Decomposition diagram / breakdown structure | rubric shipped |
| 5 | `documented-interview-responses-notes` | rubric | Elicitation |  | KA10 Techniques | Documented interview responses / notes | rubric shipped |
| 5 | `estimate-cost-effort-forecasts-with-ranges` | rubric | Synthesis & Drafting |  | KA10 Techniques | Estimate(s) ,  cost/effort forecasts with ranges | rubric shipped |
| 5 | `financial-analysis` | rubric | Synthesis & Drafting |  | KA10 Techniques | Financial analysis (ROI, NPV, IRR, payback, cost-benefit) | rubric shipped |
| 5 | `findings-extracted-from-existing-documents` | rubric | Elicitation |  | KA10 Techniques | Findings extracted from existing documents | rubric shipped |
| 5 | `focus-group-findings-report` | rubric | Elicitation |  | KA10 Techniques | Focus-group findings report | rubric shipped |
| 5 | `glossary-of-business-domain-terms` | rubric | Synthesis & Drafting |  | KA10 Techniques | Glossary of business-domain terms | rubric shipped |
| 5 | `interface-list-interface-specifications` | rubric | Synthesis & Drafting |  | KA10 Techniques | Interface list / interface specifications | rubric shipped |
| 5 | `item-issue-log` | rubric | Synthesis & Drafting |  | KA10 Techniques | Item / issue log (tracking record) | rubric shipped |
| 5 | `lessons-learned-document-register` | rubric | Synthesis & Drafting |  | KA10 Techniques | Lessons learned document / register | rubric shipped |
| 5 | `list-of-ideas-themes-for-analysis` | rubric | Elicitation |  | KA10 Techniques | List of ideas / themes for analysis | rubric shipped |
| 5 | `mind-map` | rubric | Visual Modeling |  | KA10 Techniques | Mind map | rubric shipped |
| 5 | `non-functional-requirements-specification` | rubric | Synthesis & Drafting |  | KA10 Techniques | Non-functional requirements (quality attributes) specification | rubric via non-functional-requirements |
| 5 | `observation-notes-findings` | rubric | Elicitation |  | KA10 Techniques | Observation notes / findings | rubric shipped |
| 5 | `organizational-model-org-chart` | rubric | Visual Modeling |  | KA10 Techniques | Organizational model / org chart | rubric via organizational-chart |
| 5 | `prioritized-list-ranking` | rubric | Synthesis & Drafting |  | KA10 Techniques | Prioritized list / ranking | rubric shipped |
| 5 | `process-analysis-findings-improvement-recommendations` | rubric | Visual Modeling |  | KA10 Techniques | Process analysis findings / improvement recommendations | rubric shipped |
| 5 | `process-model` | rubric | Visual Modeling | `templates/process-model.md` | KA10 Techniques; KA11 Perspectives | Process model (flowchart, BPMN, swimlane) ; Process models (merged) | rubric shipped |
| 5 | `product-backlog` | rubric | Synthesis & Drafting |  | KA10 Techniques; KA11 Perspectives | Backlog (prioritized list of work items) ; Product backlog (merged) | rubric shipped |
| 5 | `prototype` | rubric | Visual Modeling |  | KA10 Techniques | Prototype (mock-up, wireframe, storyboard) | rubric shipped |
| 5 | `review-record-defect-log` | rubric | Quality & Audit |  | KA10 Techniques | Review record / defect log | rubric shipped |
| 5 | `risk-register` | rubric | Synthesis & Drafting | `templates/risk-register.md` | KA10 Techniques | Risk register (risks, assessment, responses) | rubric shipped |
| 5 | `roles-and-permissions-matrix` | rubric | Visual Modeling |  | KA10 Techniques | Roles and permissions matrix (RACI-style) | rubric shipped |
| 5 | `root-cause-analysis` | rubric | Visual Modeling |  | KA10 Techniques | Root cause analysis (fishbone, 5 Whys) | rubric shipped |
| 5 | `stakeholder-list-stakeholder-map-personas` | rubric | Elicitation |  | KA10 Techniques | Stakeholder list / stakeholder map / personas | rubric shipped |
| 5 | `state-model-state-diagram-state-table` | rubric | Visual Modeling |  | KA10 Techniques | State model / state diagram / state table | rubric via state-model |
| 5 | `survey-questionnaire-and-results` | rubric | Elicitation |  | KA10 Techniques | Survey / questionnaire and results | rubric shipped |
| 5 | `swot-matrix` | rubric | Visual Modeling |  | KA10 Techniques | SWOT matrix | rubric shipped |
| 5 | `use-case-scenario` | rubric | Visual Modeling |  | KA10 Techniques | Use case / scenario (incl. use-case diagram) | rubric via use-case |
| 5 | `user-story` | rubric | Synthesis & Drafting |  | KA10 Techniques; KA11 Perspectives | User story ; User stories (merged) | rubric shipped |
| 5 | `vendor-assessment-evaluation-report` | rubric | Synthesis & Drafting |  | KA10 Techniques | Vendor assessment / evaluation report | rubric shipped |
| 5 | `workshop-outputs` | rubric | Elicitation |  | KA10 Techniques | Workshop outputs (decisions, agreed deliverables, models) | rubric shipped |
| 6 | `balanced-scorecards-kpi-scorecards` | rubric | Visual Modeling |  | KA11 Perspectives | Balanced scorecards / KPI scorecards | rubric via balanced-scorecard |
| 6 | `business-capability-map` | rubric | Visual Modeling | `templates/business-capability-map.md` | KA11 Perspectives | Business capability map | rubric via business-capability-map-capability-model |
| 6 | `business-motivation-model` | rubric | Visual Modeling |  | KA11 Perspectives | Business Motivation Model (BMM) | rubric shipped |
| 6 | `business-process-models` | rubric | Visual Modeling |  | KA11 Perspectives | Business process models (as-is & to-be) | rubric via process-model |
| 6 | `customer-journey-map` | rubric | Visual Modeling |  | KA11 Perspectives | Customer journey map | rubric shipped |
| 6 | `dashboards` | rubric | Synthesis & Drafting |  | KA11 Perspectives | Dashboards | rubric shipped |
| 6 | `data-marts-design` | rubric | Synthesis & Drafting |  | KA11 Perspectives | Data marts design | rubric shipped |
| 6 | `data-matching-data-quality-specifications` | rubric | Synthesis & Drafting |  | KA11 Perspectives | Data-matching / data-quality specifications | rubric shipped |
| 6 | `data-sources-inventory` | rubric | Synthesis & Drafting |  | KA11 Perspectives | Data sources inventory | rubric shipped |
| 6 | `data-warehouse-design` | rubric | Synthesis & Drafting |  | KA11 Perspectives | Data warehouse design | rubric shipped |
| 6 | `end-to-end-process-model-value-chain` | rubric | Visual Modeling |  | KA11 Perspectives | End-to-end process model / value chain | rubric via value-chain |
| 6 | `enterprise-core-diagram` | rubric | Visual Modeling |  | KA11 Perspectives | Enterprise core diagram | rubric shipped |
| 6 | `epics` | rubric | Synthesis & Drafting |  | KA11 Perspectives | Epics | rubric shipped |
| 6 | `estimates` | rubric | Synthesis & Drafting |  | KA11 Perspectives | Estimates (story points) | rubric via estimate-cost-effort-forecasts-with-ranges |
| 6 | `etl-design` | rubric | Synthesis & Drafting |  | KA11 Perspectives | ETL design | rubric shipped |
| 6 | `features` | rubric | Synthesis & Drafting |  | KA11 Perspectives | Features | rubric shipped |
| 6 | `future-state-description-and-gap-analysis` | rubric | Visual Modeling |  | KA11 Perspectives | Future state description & gap analysis | rubric via future-state-description |
| 6 | `information-map` | rubric | Visual Modeling |  | KA11 Perspectives | Information map | rubric shipped |
| 6 | `lightweight-documentation` | rubric | Synthesis & Drafting |  | KA11 Perspectives | Lightweight documentation | rubric shipped |
| 6 | `logical-data-model` | rubric | Visual Modeling | `templates/logical-data-model.md` | KA11 Perspectives | Source logical data model ; Target logical data model (merged) | rubric shipped |
| 6 | `metadata-definitions` | rubric | Synthesis & Drafting |  | KA11 Perspectives | Metadata definitions | rubric shipped |
| 6 | `moscow-prioritization-output` | rubric | Synthesis & Drafting |  | KA11 Perspectives | MoSCoW prioritization output | rubric via prioritized-list-ranking |
| 6 | `organizational-map` | rubric | Visual Modeling |  | KA11 Perspectives | Organizational map | rubric shipped |
| 6 | `personas` | rubric | Elicitation |  | KA11 Perspectives | Personas | rubric shipped |
| 6 | `physical-data-models` | rubric | Visual Modeling |  | KA11 Perspectives | Physical data models | rubric shipped |
| 6 | `process-architecture` | rubric | Visual Modeling |  | KA11 Perspectives | Business Process Architecture ; Process architecture (merged) | rubric shipped |
| 6 | `process-performance-assessment` | rubric | Synthesis & Drafting |  | KA11 Perspectives | Process performance assessment | rubric shipped |
| 6 | `process-performance-measures` | rubric | Synthesis & Drafting |  | KA11 Perspectives | Process performance measures | rubric shipped |
| 6 | `product-roadmap` | rubric | Visual Modeling | `templates/product-roadmap.md` | KA11 Perspectives | Product roadmap | rubric shipped |
| 6 | `product-vision-statement` | rubric | Synthesis & Drafting |  | KA11 Perspectives | Product vision statement | rubric shipped |
| 6 | `project-portfolio-analysis` | rubric | Synthesis & Drafting |  | KA11 Perspectives | Project Portfolio Analysis | rubric shipped |
| 6 | `purpose-alignment-model` | rubric | Visual Modeling |  | KA11 Perspectives | Purpose Alignment Model | rubric shipped |
| 6 | `reference-models-and-frameworks` | rubric | Visual Modeling |  | KA11 Perspectives | Reference models & frameworks (Zachman, TOGAF, Archimate, APQC PCF, SCOR, VRM, FEA) | rubric shipped |
| 6 | `release-plan-release-backlog` | rubric | Synthesis & Drafting |  | KA11 Perspectives | Release plan / release backlog | rubric shipped |
| 6 | `reporting-and-information-delivery-requirements` | rubric | Synthesis & Drafting |  | KA11 Perspectives | Reporting & information-delivery requirements | rubric shipped |
| 6 | `reports-and-charts` | rubric | Visual Modeling |  | KA11 Perspectives | Reports & charts | rubric shipped |
| 6 | `repository-of-reference-models` | rubric | Visual Modeling |  | KA11 Perspectives | Repository of reference models | rubric shipped |
| 6 | `roadmap` | rubric | Visual Modeling |  | KA11 Perspectives | Roadmap | rubric shipped |
| 6 | `roles-and-permissions-data-security-specifications` | rubric | Synthesis & Drafting |  | KA11 Perspectives | Roles and permissions / data-security specifications | rubric via roles-and-permissions-matrix |
| 6 | `safe-program-portfolio-artefacts` | rubric | Synthesis & Drafting |  | KA11 Perspectives | SAFe program/portfolio artefacts | rubric shipped |
| 6 | `service-oriented-analysis` | rubric | Synthesis & Drafting |  | KA11 Perspectives | Service-Oriented Analysis | rubric shipped |
| 6 | `software-technical-design-or-blueprint` | rubric | Synthesis & Drafting |  | KA11 Perspectives | Software/technical design or blueprint | rubric shipped |
| 6 | `solution-architecture` | rubric | Synthesis & Drafting |  | KA11 Perspectives | Solution architecture (BI) | rubric shipped |
| 6 | `spikes` | rubric | Synthesis & Drafting |  | KA11 Perspectives | Spikes | rubric shipped |
| 6 | `story-map` | rubric | Visual Modeling |  | KA11 Perspectives | Story map | rubric shipped |
| 6 | `supporting-notations` | rubric | Visual Modeling |  | KA11 Perspectives | Supporting notations (BPMN, SIPOC, swimlane, FMEA) | rubric shipped |
| 6 | `value-stream-value-stream-map` | rubric | Visual Modeling |  | KA11 Perspectives | Value stream / value stream map | rubric via value-stream-map |

## Template-only artefacts (Section B, no rubric row)

| Phase | Canonical slug | Owning agent | Template link | KA | Register row | Note | Status |
| --- | --- | --- | --- | --- | --- | --- | --- |

## Skill bindings (Section C)

| Register skill ref | Owning agent(s) | Decision | Artefacts it unblocks | Status |
| --- | --- | --- | --- | --- |
| (reference standard / knowledge base) | Synthesis & Drafting [under Perspectives lens]; Visual Modeling [under Perspectives lens] | author BA-OS capability | Lightweight documentation, Reference models & frameworks (Zachman, TOGAF, Archimate, APQC PCF, SCOR, VRM, FEA), Repository of reference models, SAFe program/portfolio artefacts, Supporting notations (BPMN, SIPOC, swimlane, FMEA) | resolved |
| (technique skill) | Synthesis & Drafting | author BA-OS capability | Estimate(s) ,  cost/effort forecasts with ranges | resolved |
| data:statistical-analysis; data:analyze | Visual Modeling | author BA-OS equivalent OR bind external plugin as pool member | Data-mining model / findings (patterns & insights) | resolved |
| design:user-research | Visual Modeling [under Perspectives lens] | author BA-OS equivalent OR bind external plugin as pool member | Customer journey map | resolved |
| figma:figma-generate-diagram | Visual Modeling | author BA-OS equivalent OR bind external plugin as pool member | Diagrams (representation form), Mind map | resolved |
| frontend-design | Synthesis & Drafting | author BA-OS equivalent OR bind external plugin as pool member | Horizontal prototype, Vertical prototype | resolved |
| frontend-design; engineering:architecture | Synthesis & Drafting | author BA-OS equivalent OR bind external plugin as pool member | Proof of concept | resolved |
| frontend-design; figma:figma-design-to-code | Synthesis & Drafting; Visual Modeling | author BA-OS equivalent OR bind external plugin as pool member | Evolutionary (functional) prototype, Prototype (mock-up, wireframe, storyboard), Throw-away (rapid) prototype, Wireframe / mock-up / storyboard | resolved |
| legal:review-contract | Analytics & Performance | author BA-OS equivalent OR bind external plugin as pool member | Service Level Agreement (SLA) | resolved |

## Dedup log (merged groups, auditable)

Each row below is one canonical slug that absorbed more than one register row. Review before Phase 0 sign-off.

| Canonical slug | Absorbed register rows |
| --- | --- |
| `functional-requirements` | Functional specifications ; Functional requirements |
| `non-functional-requirements` | Non-functional (quality-of-service) requirements ; Non-functional requirements |
| `metrics-and-kpis` | Metrics & KPIs (definitions, targets, reporting) ; Metrics and Key Performance Indicators [KPIs] |
| `stakeholder-analysis` | Stakeholder Analysis Results ; Stakeholder analysis |
| `decision-matrix` | Decision analysis (decision matrix / expected-value model) ; Decision matrix (simple & weighted) |
| `scope-model` | Scope model (context diagram / boundary model) ; Context diagram |
| `state-model` | State diagram ; State table |
| `use-case` | Use cases and scenarios ; Use case diagram |
| `acceptance-and-evaluation-criteria` | Acceptance criteria & evaluation criteria (measures) ; Acceptance criteria |
| `data-dictionary` | Data dictionary (data element definitions) ; Source data dictionary ; Target data dictionary |
| `process-model` | Process model (flowchart, BPMN, swimlane) ; Process models |
| `product-backlog` | Backlog (prioritized list of work items) ; Product backlog |
| `user-story` | User story ; User stories |
| `logical-data-model` | Source logical data model ; Target logical data model |
| `process-architecture` | Business Process Architecture ; Process architecture |
