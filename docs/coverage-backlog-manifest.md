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
| 1 | `business-objectives` | both | Elicitation | `templates/business-objectives.md` | KA4 Elicitation | Business Objectives | rubric shipped |
| 1 | `change-strategy` | both | Approach | `templates/change-strategy.md` | KA3 Planning & Monitoring | Change Strategy | rubric shipped |
| 1 | `designs` | rubric | Synthesis & Drafting |  | KA2 Key Concepts | Designs | rubric shipped |
| 1 | `elicitation-activity-plan` | both | Elicitation | `templates/elicitation-activity-plan.md` | KA4 Elicitation | Elicitation Activity Plan | shipped |
| 1 | `elicitation-results-confirmed` | rubric | Elicitation |  | KA4 Elicitation | Elicitation Results [confirmed] | rubric shipped |
| 1 | `elicitation-results-unconfirmed` | rubric | Elicitation |  | KA4 Elicitation | Elicitation Results [unconfirmed] | rubric shipped |
| 1 | `functional-requirements` | rubric | Synthesis & Drafting |  | KA11 Perspectives; KA2 Key Concepts | Functional specifications ; Functional requirements (merged) | rubric shipped |
| 1 | `future-state-description` | rubric | Elicitation |  | KA4 Elicitation | Future State Description | rubric shipped |
| 1 | `governance-approach` | both | Approach | `templates/governance-approach.md` | KA3 Planning & Monitoring | Governance Approach | shipped |
| 1 | `information-management-approach` | both | Approach | `templates/information-management-approach.md` | KA3 Planning & Monitoring | Information Management Approach | shipped |
| 1 | `non-functional-requirements` | rubric | Synthesis & Drafting |  | KA11 Perspectives; KA2 Key Concepts | Non-functional (quality-of-service) requirements ; Non-functional requirements (merged) | rubric shipped |
| 1 | `potential-value` | both | Elicitation | `templates/potential-value.md` | KA4 Elicitation | Potential Value | rubric shipped |
| 1 | `recommended-actions` | both | Elicitation | `templates/recommended-actions.md` | KA4 Elicitation | Recommended Actions | rubric shipped |
| 1 | `risk-analysis-results` | rubric | Elicitation |  | KA4 Elicitation | Risk Analysis Results | rubric shipped |
| 1 | `solution-requirements` | rubric | Synthesis & Drafting |  | KA2 Key Concepts | Solution requirements | rubric shipped |
| 1 | `stakeholder-engagement-approach` | both | Elicitation | `templates/stakeholder-engagement-approach.md` | KA3 Planning & Monitoring | Stakeholder Engagement Approach | shipped |
| 1 | `stakeholder-requirements` | rubric | Synthesis & Drafting |  | KA2 Key Concepts | Stakeholder requirements | rubric shipped |
| 1 | `transition-requirements` | rubric | Synthesis & Drafting |  | KA2 Key Concepts | Transition requirements | rubric shipped |
| 2 | `business-analysis-package` | rubric | Synthesis & Drafting |  | KA6 Packaging & Representation | Business analysis package | not-started |
| 2 | `design-options` | both | Synthesis & Drafting | `templates/design-options.md` | KA6 Strategy Analysis | Design Options | not-started |
| 2 | `designs-approved` | both | GAP: lifecycle governance | `templates/designs-approved.md` | KA5 Requirements Lifecycle | Designs [approved] | not-started |
| 2 | `designs-change-assessment` | both | GAP: lifecycle governance | `templates/designs-change-assessment.md` | KA5 Requirements Lifecycle | Designs Change Assessment | not-started |
| 2 | `designs-maintained` | both | Architecture | `templates/designs-maintained.md` | KA5 Requirements Lifecycle | Designs [maintained] | not-started |
| 2 | `designs-prioritized` | both | GAP: lifecycle governance | `templates/designs-prioritized.md` | KA5 Requirements Lifecycle | Designs [prioritized] | not-started |
| 2 | `designs-traced` | both | Architecture | `templates/designs-traced.md` | KA5 Requirements Lifecycle | Designs [traced] | not-started |
| 2 | `enterprise-limitation` | both | Synthesis & Drafting | `templates/enterprise-limitation.md` | KA6 Strategy Analysis | Enterprise Limitation | not-started |
| 2 | `identified-risks` | rubric | Synthesis (produce) / risk-challenger audits |  | KA6 Strategy Analysis | Identified Risks | not-started |
| 2 | `metrics-and-kpis` | rubric | Synthesis & Drafting |  | KA10 Techniques; KA6 Strategy Analysis | Metrics & KPIs (definitions, targets, reporting) ; Metrics and Key Performance Indicators [KPIs] (merged) | not-started |
| 2 | `requirements-approved` | rubric | GAP: lifecycle governance |  | KA5 Requirements Lifecycle | Requirements [approved] | not-started |
| 2 | `requirements-change-assessment` | both | GAP: lifecycle governance | `templates/requirements-change-assessment.md` | KA5 Requirements Lifecycle | Requirements Change Assessment | not-started |
| 2 | `requirements-maintained` | rubric | Architecture |  | KA5 Requirements Lifecycle | Requirements [maintained] | not-started |
| 2 | `requirements-package` | rubric | Synthesis & Drafting |  | KA6 Packaging & Representation | Requirements package (requirements document) | not-started |
| 2 | `requirements-prioritized` | rubric | GAP: lifecycle governance |  | KA5 Requirements Lifecycle | Requirements [prioritized] | not-started |
| 2 | `requirements-traced` | rubric | Architecture |  | KA5 Requirements Lifecycle | Requirements [traced] | not-started |
| 2 | `solution-limitation` | both | Synthesis & Drafting | `templates/solution-limitation.md` | KA6 Strategy Analysis | Solution Limitation | not-started |
| 2 | `solution-performance-goals` | rubric | Synthesis & Drafting |  | KA6 Strategy Analysis | Solution Performance Goals | not-started |
| 2 | `solution-performance-measures` | both | Synthesis & Drafting | `templates/solution-performance-measures.md` | KA6 Strategy Analysis | Solution Performance Measures | not-started |
| 2 | `solution-recommendations` | rubric | Synthesis & Drafting |  | KA6 Strategy Analysis | Solution Recommendations | not-started |
| 2 | `solution-scope` | both | Synthesis & Drafting | `templates/solution-scope.md` | KA6 Strategy Analysis | Solution Scope | not-started |
| 2 | `stakeholder-analysis` | rubric | Elicitation |  | KA6 Strategy Analysis; KA9 Analysis/Assessment/Review/Test | Stakeholder Analysis Results ; Stakeholder analysis (merged) | not-started |
| 3 | `activity-diagram` | rubric | Visual Modeling |  | Named Forms | Activity diagram | not-started |
| 3 | `affinity-diagram` | rubric | Elicitation |  | Named Forms | Affinity diagram | not-started |
| 3 | `bpmn-model` | rubric | Visual Modeling |  | Named Forms | BPMN model | not-started |
| 3 | `class-model-class-diagram` | rubric | Visual Modeling |  | Named Forms | Class model / class diagram | not-started |
| 3 | `crud-matrix` | rubric | Visual Modeling |  | Named Forms | CRUD matrix | not-started |
| 3 | `decision-matrix` | rubric | Visual Modeling | `templates/decision-matrix.md` | KA10 Techniques; Named Forms | Decision analysis (decision matrix / expected-value model) ; Decision matrix (simple & weighted) (merged) | not-started |
| 3 | `entity-relationship-diagram` | rubric | Visual Modeling |  | Named Forms | Entity Relationship Diagram (ERD) | not-started |
| 3 | `escalation-matrix` | rubric | Visual Modeling |  | Named Forms | Escalation matrix | not-started |
| 3 | `fishbone-ishikawa-diagram` | rubric | Visual Modeling |  | Named Forms | Fishbone / Ishikawa diagram | not-started |
| 3 | `flowchart` | rubric | Visual Modeling |  | Named Forms | Flowchart | not-started |
| 3 | `onion-diagram` | rubric | Elicitation |  | Named Forms | Onion diagram | not-started |
| 3 | `organizational-chart` | rubric | Visual Modeling |  | Named Forms | Organizational chart (functional/matrix) | not-started |
| 3 | `request-for-information` | rubric | Elicitation |  | KA8 Procurement | Request for Information (RFI) | not-started |
| 3 | `request-for-proposal` | rubric | Analytics & Performance |  | KA8 Procurement | Request for Proposal (RFP) | not-started |
| 3 | `request-for-quote` | rubric | Analytics & Performance |  | KA8 Procurement | Request for Quote (RFQ) | not-started |
| 3 | `request-for-tender` | rubric | Analytics & Performance |  | KA8 Procurement | Request for Tender (RFT) | not-started |
| 3 | `requirements-architecture` | both | Synthesis & Drafting | `templates/requirements-architecture.md` | KA7 RADD | Requirements Architecture | not-started |
| 3 | `requirements-specified-and-modelled` | rubric | Synthesis & Drafting |  | KA7 RADD | Requirements [specified and modelled] | not-started |
| 3 | `requirements-traceability-matrix` | rubric | Visual Modeling | `templates/requirements-traceability-matrix.md` | Named Forms | Requirements traceability matrix | not-started |
| 3 | `requirements-validated` | rubric | Quality & Audit |  | KA7 RADD | Requirements [validated] | not-started |
| 3 | `requirements-verified` | rubric | Quality & Audit |  | KA7 RADD | Requirements [verified] | not-started |
| 3 | `scope-model` | rubric | Visual Modeling |  | KA10 Techniques; Named Forms | Scope model (context diagram / boundary model) ; Context diagram (merged) | not-started |
| 3 | `scope-statement` | rubric | Analytics & Performance |  | KA8 Procurement | Scope statement | not-started |
| 3 | `sequence-diagram` | rubric | Visual Modeling |  | Named Forms | Sequence diagram | not-started |
| 3 | `service-level-agreement` | rubric | Analytics & Performance | `templates/service-level-agreement.md` | KA8 Procurement | Service Level Agreement (SLA) | not-started |
| 3 | `sipoc-diagram` | rubric | Visual Modeling |  | Named Forms | SIPOC diagram | not-started |
| 3 | `solution-performance-analysis` | both | Analytics & Performance | `templates/solution-performance-analysis.md` | KA8 Solution Evaluation | Solution Performance Analysis | not-started |
| 3 | `solution-recommendation` | both | Synthesis & Drafting | `templates/solution-recommendation.md` | KA7 RADD | Solution Recommendation | not-started |
| 3 | `state-model` | rubric | Visual Modeling |  | Named Forms | State diagram ; State table (merged) | not-started |
| 3 | `statement-of-work` | rubric | Analytics & Performance | `templates/statement-of-work.md` | KA8 Procurement | Statement of Work (SOW) | not-started |
| 3 | `swimlane-diagram` | rubric | Visual Modeling |  | Named Forms | Swimlane diagram | not-started |
| 3 | `use-case` | rubric | Synthesis & Drafting |  | KA11 Perspectives; Named Forms | Use cases and scenarios ; Use case diagram (merged) | not-started |
| 3 | `value-chain` | rubric | Visual Modeling |  | Named Forms | Value chain | not-started |
| 3 | `value-stream-map` | rubric | Visual Modeling |  | Named Forms | Value stream map | not-started |
| 3 | `wireframe-mock-up-storyboard` | rubric | Visual Modeling |  | Named Forms | Wireframe / mock-up / storyboard | not-started |
| 3 | `work-breakdown-structure` | rubric | Analytics & Performance |  | KA8 Procurement | Work Breakdown Structure (WBS) | not-started |
| 4 | `behavioural-business-rules` | rubric | Synthesis & Drafting |  | KA9 Analysis/Assessment/Review/Test | Behavioural (operative) business rules | not-started |
| 4 | `business-analysis-communication-plan` | rubric | Synthesis & Drafting |  | KA9 Analysis/Assessment/Review/Test | Business analysis communication plan (legacy/v2) | not-started |
| 4 | `business-analysis-information-architecture` | rubric | Synthesis & Drafting |  | KA9 Analysis/Assessment/Review/Test | Business Analysis Information Architecture | not-started |
| 4 | `business-analysis-plan` | rubric | Synthesis & Drafting |  | KA9 Analysis/Assessment/Review/Test | Business analysis plan (legacy/v2) | not-started |
| 4 | `checklist` | rubric | Quality & Audit |  | KA9 Analysis/Assessment/Review/Test | Checklist(s) | not-started |
| 4 | `competitive-analysis` | rubric | Synthesis & Drafting |  | KA9 Analysis/Assessment/Review/Test | Competitive analysis | not-started |
| 4 | `cost-benefit-analysis` | rubric | Synthesis & Drafting |  | KA9 Analysis/Assessment/Review/Test | Cost-benefit analysis | not-started |
| 4 | `definitional-business-rules` | rubric | Synthesis & Drafting |  | KA9 Analysis/Assessment/Review/Test | Definitional (structural) business rules | not-started |
| 4 | `enterprise-culture-assessment` | rubric | Synthesis & Drafting |  | KA9 Analysis/Assessment/Review/Test | Enterprise Culture Assessment | not-started |
| 4 | `enterprise-readiness-assessment` | rubric | Synthesis & Drafting |  | KA9 Analysis/Assessment/Review/Test | Enterprise Readiness Assessment | not-started |
| 4 | `evolutionary-prototype` | rubric | Synthesis & Drafting |  | KA9 Analysis/Assessment/Review/Test | Evolutionary (functional) prototype | not-started |
| 4 | `feasibility-study` | rubric | Synthesis & Drafting |  | KA9 Analysis/Assessment/Review/Test | Feasibility study | not-started |
| 4 | `focus-group-plan` | rubric | Elicitation |  | KA9 Analysis/Assessment/Review/Test | Focus Group Plan | not-started |
| 4 | `force-field-analysis` | rubric | Synthesis & Drafting |  | KA9 Analysis/Assessment/Review/Test | Force field analysis | not-started |
| 4 | `gap-analysis` | rubric | Synthesis & Drafting | `templates/gap-analysis.md` | KA9 Analysis/Assessment/Review/Test | Gap analysis | not-started |
| 4 | `horizontal-prototype` | rubric | Synthesis & Drafting |  | KA9 Analysis/Assessment/Review/Test | Horizontal prototype | not-started |
| 4 | `impact-analysis` | rubric | Synthesis & Drafting |  | KA9 Analysis/Assessment/Review/Test | Impact analysis | not-started |
| 4 | `inspection` | rubric | Quality & Audit |  | KA9 Analysis/Assessment/Review/Test | Inspection | not-started |
| 4 | `operational-assessment` | rubric | Synthesis & Drafting |  | KA9 Analysis/Assessment/Review/Test | Operational Assessment | not-started |
| 4 | `peer-review` | rubric | Quality & Audit |  | KA9 Analysis/Assessment/Review/Test | Peer review | not-started |
| 4 | `proof-of-concept` | rubric | Synthesis & Drafting |  | KA9 Analysis/Assessment/Review/Test | Proof of concept | not-started |
| 4 | `requirements-attribute` | rubric | Synthesis & Drafting |  | KA9 Analysis/Assessment/Review/Test | Requirements attribute(s) | not-started |
| 4 | `requirements-defect` | rubric | Quality & Audit |  | KA9 Analysis/Assessment/Review/Test | Requirements defect | not-started |
| 4 | `requirements-management-plan` | rubric | Synthesis & Drafting |  | KA9 Analysis/Assessment/Review/Test | Requirements management plan (legacy/v2) | not-started |
| 4 | `risk-assessment` | rubric | Synthesis & Drafting |  | KA9 Analysis/Assessment/Review/Test | Risk assessment | not-started |
| 4 | `stakeholder-impact-analysis` | rubric | Elicitation |  | KA9 Analysis/Assessment/Review/Test | Stakeholder Impact Analysis | not-started |
| 4 | `throw-away-prototype` | rubric | Synthesis & Drafting |  | KA9 Analysis/Assessment/Review/Test | Throw-away (rapid) prototype | not-started |
| 4 | `user-acceptance-test` | rubric | Quality & Audit |  | KA9 Analysis/Assessment/Review/Test | User acceptance test (UAT) | not-started |
| 4 | `vertical-prototype` | rubric | Synthesis & Drafting |  | KA9 Analysis/Assessment/Review/Test | Vertical prototype | not-started |
| 4 | `walkthrough` | rubric | Quality & Audit |  | KA9 Analysis/Assessment/Review/Test | Walkthrough | not-started |
| 5 | `acceptance-and-evaluation-criteria` | rubric | Quality & Audit |  | KA10 Techniques; KA11 Perspectives | Acceptance criteria & evaluation criteria (measures) ; Acceptance criteria (merged) | not-started |
| 5 | `balanced-scorecard` | rubric | Visual Modeling |  | KA10 Techniques | Balanced scorecard (strategy map, objectives, measures, targets) | not-started |
| 5 | `benchmarking-study-market-analysis-report` | rubric | Synthesis & Drafting |  | KA10 Techniques | Benchmarking study / market analysis report | not-started |
| 5 | `business-capability-map-capability-model` | rubric | Visual Modeling |  | KA10 Techniques | Business capability map / capability model | not-started |
| 5 | `business-model-canvas` | rubric | Visual Modeling | `templates/business-model-canvas.md` | KA10 Techniques | Business Model Canvas (9-block canvas) | not-started |
| 5 | `business-rules-catalogue-set-of-business-rules` | rubric | Synthesis & Drafting |  | KA10 Techniques | Business rules catalogue / set of business rules | not-started |
| 5 | `collaborative-game-outputs` | rubric | Elicitation |  | KA10 Techniques | Collaborative game outputs (product box, affinity map) | not-started |
| 5 | `concept-model` | rubric | Visual Modeling |  | KA10 Techniques | Concept model (business vocabulary, concepts & relationships) | not-started |
| 5 | `data-dictionary` | rubric | Synthesis & Drafting | `templates/data-dictionary.md` | KA10 Techniques; KA11 Perspectives | Data dictionary (data element definitions) ; Source data dictionary ; Target data dictionary (merged) | not-started |
| 5 | `data-flow-diagram` | rubric | Visual Modeling |  | KA10 Techniques | Data flow diagram (DFD) | not-started |
| 5 | `data-mining-model-findings` | rubric | Visual Modeling |  | KA10 Techniques | Data-mining model / findings (patterns & insights) | not-started |
| 5 | `data-model` | rubric | Visual Modeling |  | KA10 Techniques | Data model (ERD / class model) | not-started |
| 5 | `decision-model` | rubric | Visual Modeling |  | KA10 Techniques | Decision model (decision tables / decision trees) | not-started |
| 5 | `decomposition-diagram-breakdown-structure` | rubric | Visual Modeling |  | KA10 Techniques | Decomposition diagram / breakdown structure | not-started |
| 5 | `documented-interview-responses-notes` | rubric | Elicitation |  | KA10 Techniques | Documented interview responses / notes | not-started |
| 5 | `estimate-cost-effort-forecasts-with-ranges` | rubric | Synthesis & Drafting |  | KA10 Techniques | Estimate(s) ,  cost/effort forecasts with ranges | not-started |
| 5 | `financial-analysis` | rubric | Synthesis & Drafting |  | KA10 Techniques | Financial analysis (ROI, NPV, IRR, payback, cost-benefit) | not-started |
| 5 | `findings-extracted-from-existing-documents` | rubric | Elicitation |  | KA10 Techniques | Findings extracted from existing documents | not-started |
| 5 | `focus-group-findings-report` | rubric | Elicitation |  | KA10 Techniques | Focus-group findings report | not-started |
| 5 | `glossary-of-business-domain-terms` | rubric | Synthesis & Drafting |  | KA10 Techniques | Glossary of business-domain terms | not-started |
| 5 | `interface-list-interface-specifications` | rubric | Synthesis & Drafting |  | KA10 Techniques | Interface list / interface specifications | not-started |
| 5 | `item-issue-log` | rubric | Synthesis & Drafting |  | KA10 Techniques | Item / issue log (tracking record) | not-started |
| 5 | `lessons-learned-document-register` | rubric | Synthesis & Drafting |  | KA10 Techniques | Lessons learned document / register | not-started |
| 5 | `list-of-ideas-themes-for-analysis` | rubric | Elicitation |  | KA10 Techniques | List of ideas / themes for analysis | not-started |
| 5 | `mind-map` | rubric | Visual Modeling |  | KA10 Techniques | Mind map | not-started |
| 5 | `non-functional-requirements-specification` | rubric | Synthesis & Drafting |  | KA10 Techniques | Non-functional requirements (quality attributes) specification | not-started |
| 5 | `observation-notes-findings` | rubric | Elicitation |  | KA10 Techniques | Observation notes / findings | not-started |
| 5 | `organizational-model-org-chart` | rubric | Visual Modeling |  | KA10 Techniques | Organizational model / org chart | not-started |
| 5 | `prioritized-list-ranking` | rubric | Synthesis & Drafting |  | KA10 Techniques | Prioritized list / ranking | not-started |
| 5 | `process-analysis-findings-improvement-recommendations` | rubric | Visual Modeling |  | KA10 Techniques | Process analysis findings / improvement recommendations | not-started |
| 5 | `process-model` | rubric | Visual Modeling | `templates/process-model.md` | KA10 Techniques; KA11 Perspectives | Process model (flowchart, BPMN, swimlane) ; Process models (merged) | not-started |
| 5 | `product-backlog` | rubric | Synthesis & Drafting |  | KA10 Techniques; KA11 Perspectives | Backlog (prioritized list of work items) ; Product backlog (merged) | not-started |
| 5 | `prototype` | rubric | Visual Modeling |  | KA10 Techniques | Prototype (mock-up, wireframe, storyboard) | not-started |
| 5 | `review-record-defect-log` | rubric | Quality & Audit |  | KA10 Techniques | Review record / defect log | not-started |
| 5 | `risk-register` | rubric | Synthesis & Drafting | `templates/risk-register.md` | KA10 Techniques | Risk register (risks, assessment, responses) | not-started |
| 5 | `roles-and-permissions-matrix` | rubric | Visual Modeling |  | KA10 Techniques | Roles and permissions matrix (RACI-style) | not-started |
| 5 | `root-cause-analysis` | rubric | Visual Modeling |  | KA10 Techniques | Root cause analysis (fishbone, 5 Whys) | not-started |
| 5 | `stakeholder-list-stakeholder-map-personas` | rubric | Elicitation |  | KA10 Techniques | Stakeholder list / stakeholder map / personas | not-started |
| 5 | `state-model-state-diagram-state-table` | rubric | Visual Modeling |  | KA10 Techniques | State model / state diagram / state table | not-started |
| 5 | `survey-questionnaire-and-results` | rubric | Elicitation |  | KA10 Techniques | Survey / questionnaire and results | not-started |
| 5 | `swot-matrix` | rubric | Visual Modeling |  | KA10 Techniques | SWOT matrix | not-started |
| 5 | `use-case-scenario` | rubric | Visual Modeling |  | KA10 Techniques | Use case / scenario (incl. use-case diagram) | not-started |
| 5 | `user-story` | rubric | Synthesis & Drafting |  | KA10 Techniques; KA11 Perspectives | User story ; User stories (merged) | not-started |
| 5 | `vendor-assessment-evaluation-report` | rubric | Synthesis & Drafting |  | KA10 Techniques | Vendor assessment / evaluation report | not-started |
| 5 | `workshop-outputs` | rubric | Elicitation |  | KA10 Techniques | Workshop outputs (decisions, agreed deliverables, models) | not-started |
| 6 | `balanced-scorecards-kpi-scorecards` | rubric | Visual Modeling |  | KA11 Perspectives | Balanced scorecards / KPI scorecards | not-started |
| 6 | `business-capability-map` | rubric | Visual Modeling | `templates/business-capability-map.md` | KA11 Perspectives | Business capability map | not-started |
| 6 | `business-motivation-model` | rubric | Visual Modeling |  | KA11 Perspectives | Business Motivation Model (BMM) | not-started |
| 6 | `business-process-models` | rubric | Visual Modeling |  | KA11 Perspectives | Business process models (as-is & to-be) | not-started |
| 6 | `customer-journey-map` | rubric | Visual Modeling |  | KA11 Perspectives | Customer journey map | not-started |
| 6 | `dashboards` | rubric | Synthesis & Drafting |  | KA11 Perspectives | Dashboards | not-started |
| 6 | `data-marts-design` | rubric | Synthesis & Drafting |  | KA11 Perspectives | Data marts design | not-started |
| 6 | `data-matching-data-quality-specifications` | rubric | Synthesis & Drafting |  | KA11 Perspectives | Data-matching / data-quality specifications | not-started |
| 6 | `data-sources-inventory` | rubric | Synthesis & Drafting |  | KA11 Perspectives | Data sources inventory | not-started |
| 6 | `data-warehouse-design` | rubric | Synthesis & Drafting |  | KA11 Perspectives | Data warehouse design | not-started |
| 6 | `end-to-end-process-model-value-chain` | rubric | Visual Modeling |  | KA11 Perspectives | End-to-end process model / value chain | not-started |
| 6 | `enterprise-core-diagram` | rubric | Visual Modeling |  | KA11 Perspectives | Enterprise core diagram | not-started |
| 6 | `epics` | rubric | Synthesis & Drafting |  | KA11 Perspectives | Epics | not-started |
| 6 | `estimates` | rubric | Synthesis & Drafting |  | KA11 Perspectives | Estimates (story points) | not-started |
| 6 | `etl-design` | rubric | Synthesis & Drafting |  | KA11 Perspectives | ETL design | not-started |
| 6 | `features` | rubric | Synthesis & Drafting |  | KA11 Perspectives | Features | not-started |
| 6 | `future-state-description-and-gap-analysis` | rubric | Visual Modeling |  | KA11 Perspectives | Future state description & gap analysis | not-started |
| 6 | `information-map` | rubric | Visual Modeling |  | KA11 Perspectives | Information map | not-started |
| 6 | `lightweight-documentation` | rubric | Synthesis & Drafting |  | KA11 Perspectives | Lightweight documentation | not-started |
| 6 | `logical-data-model` | rubric | Visual Modeling | `templates/logical-data-model.md` | KA11 Perspectives | Source logical data model ; Target logical data model (merged) | not-started |
| 6 | `metadata-definitions` | rubric | Synthesis & Drafting |  | KA11 Perspectives | Metadata definitions | not-started |
| 6 | `moscow-prioritization-output` | rubric | Synthesis & Drafting |  | KA11 Perspectives | MoSCoW prioritization output | not-started |
| 6 | `organizational-map` | rubric | Visual Modeling |  | KA11 Perspectives | Organizational map | not-started |
| 6 | `personas` | rubric | Elicitation |  | KA11 Perspectives | Personas | not-started |
| 6 | `physical-data-models` | rubric | Visual Modeling |  | KA11 Perspectives | Physical data models | not-started |
| 6 | `process-architecture` | rubric | Visual Modeling |  | KA11 Perspectives | Business Process Architecture ; Process architecture (merged) | not-started |
| 6 | `process-performance-assessment` | rubric | Synthesis & Drafting |  | KA11 Perspectives | Process performance assessment | not-started |
| 6 | `process-performance-measures` | rubric | Synthesis & Drafting |  | KA11 Perspectives | Process performance measures | not-started |
| 6 | `product-roadmap` | rubric | Visual Modeling | `templates/product-roadmap.md` | KA11 Perspectives | Product roadmap | not-started |
| 6 | `product-vision-statement` | rubric | Synthesis & Drafting |  | KA11 Perspectives | Product vision statement | not-started |
| 6 | `project-portfolio-analysis` | rubric | Synthesis & Drafting |  | KA11 Perspectives | Project Portfolio Analysis | not-started |
| 6 | `purpose-alignment-model` | rubric | Visual Modeling |  | KA11 Perspectives | Purpose Alignment Model | not-started |
| 6 | `reference-models-and-frameworks` | rubric | Visual Modeling |  | KA11 Perspectives | Reference models & frameworks (Zachman, TOGAF, Archimate, APQC PCF, SCOR, VRM, FEA) | not-started |
| 6 | `release-plan-release-backlog` | rubric | Synthesis & Drafting |  | KA11 Perspectives | Release plan / release backlog | not-started |
| 6 | `reporting-and-information-delivery-requirements` | rubric | Synthesis & Drafting |  | KA11 Perspectives | Reporting & information-delivery requirements | not-started |
| 6 | `reports-and-charts` | rubric | Visual Modeling |  | KA11 Perspectives | Reports & charts | not-started |
| 6 | `repository-of-reference-models` | rubric | Visual Modeling |  | KA11 Perspectives | Repository of reference models | not-started |
| 6 | `roadmap` | rubric | Visual Modeling |  | KA11 Perspectives | Roadmap | not-started |
| 6 | `roles-and-permissions-data-security-specifications` | rubric | Synthesis & Drafting |  | KA11 Perspectives | Roles and permissions / data-security specifications | not-started |
| 6 | `safe-program-portfolio-artefacts` | rubric | Synthesis & Drafting |  | KA11 Perspectives | SAFe program/portfolio artefacts | not-started |
| 6 | `service-oriented-analysis` | rubric | Synthesis & Drafting |  | KA11 Perspectives | Service-Oriented Analysis | not-started |
| 6 | `software-technical-design-or-blueprint` | rubric | Synthesis & Drafting |  | KA11 Perspectives | Software/technical design or blueprint | not-started |
| 6 | `solution-architecture` | rubric | Synthesis & Drafting |  | KA11 Perspectives | Solution architecture (BI) | not-started |
| 6 | `spikes` | rubric | Synthesis & Drafting |  | KA11 Perspectives | Spikes | not-started |
| 6 | `story-map` | rubric | Visual Modeling |  | KA11 Perspectives | Story map | not-started |
| 6 | `supporting-notations` | rubric | Visual Modeling |  | KA11 Perspectives | Supporting notations (BPMN, SIPOC, swimlane, FMEA) | not-started |
| 6 | `value-stream-value-stream-map` | rubric | Visual Modeling |  | KA11 Perspectives | Value stream / value stream map | not-started |

## Template-only artefacts (Section B, no rubric row)

| Phase | Canonical slug | Owning agent | Template link | KA | Register row | Note | Status |
| --- | --- | --- | --- | --- | --- | --- | --- |

## Skill bindings (Section C)

| Register skill ref | Owning agent(s) | Decision | Artefacts it unblocks | Status |
| --- | --- | --- | --- | --- |
| (reference standard / knowledge base) | Synthesis & Drafting [under Perspectives lens]; Visual Modeling [under Perspectives lens] | author BA-OS capability | Lightweight documentation, Reference models & frameworks (Zachman, TOGAF, Archimate, APQC PCF, SCOR, VRM, FEA), Repository of reference models, SAFe program/portfolio artefacts, Supporting notations (BPMN, SIPOC, swimlane, FMEA) | not-started |
| (technique skill) | Synthesis & Drafting | author BA-OS capability | Estimate(s) ,  cost/effort forecasts with ranges | not-started |
| data:statistical-analysis; data:analyze | Visual Modeling | author BA-OS equivalent OR bind external plugin as pool member | Data-mining model / findings (patterns & insights) | not-started |
| design:user-research | Visual Modeling [under Perspectives lens] | author BA-OS equivalent OR bind external plugin as pool member | Customer journey map | not-started |
| figma:figma-generate-diagram | Visual Modeling | author BA-OS equivalent OR bind external plugin as pool member | Diagrams (representation form), Mind map | not-started |
| frontend-design | Synthesis & Drafting | author BA-OS equivalent OR bind external plugin as pool member | Horizontal prototype, Vertical prototype | not-started |
| frontend-design; engineering:architecture | Synthesis & Drafting | author BA-OS equivalent OR bind external plugin as pool member | Proof of concept | not-started |
| frontend-design; figma:figma-design-to-code | Synthesis & Drafting; Visual Modeling | author BA-OS equivalent OR bind external plugin as pool member | Evolutionary (functional) prototype, Prototype (mock-up, wireframe, storyboard), Throw-away (rapid) prototype, Wireframe / mock-up / storyboard | not-started |
| legal:review-contract | Analytics & Performance | author BA-OS equivalent OR bind external plugin as pool member | Service Level Agreement (SLA) | not-started |

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
