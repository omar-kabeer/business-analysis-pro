# BA OS Coverage Backlog: Rubrics, Templates, Skills

Generated 2026-09-01 from `BABOK_v3_Artefacts_Register.xlsx` joined to OS assets (56 templates, 5 rubric files, 41 compiled skills). Regenerate with `parse_register.py`.

Scope: these are **OS-data authoring gaps**, not app or agent-architecture gaps. Author the content in this repo. The one true agent-ownership gap (KA5 requirements lifecycle) is closed in the app design, not here.

Priority order: (1) rubrics for artefacts the runtime already produces, (2) the real KA6/7/8 output templates, (3) skill bindings for Visual/Analytics.

## A. Rubrics to author (217 unique artefacts)

Rubric files that exist today: brd, business-case, discovery, prd, product-brief. Every artefact below is marked rubric-able in the register but has no rubric file. The register's sample pass/fail criteria (col N) are copied in as a **starting point**; refine each to full BABOK verify criteria (atomic, complete, consistent, testable, unambiguous, prioritized, feasible).

### 10. Techniques

| Artefact | Owning agent | Starter pass/fail criteria (register col N) |
|---|---|---|
| Acceptance criteria & evaluation criteria (measures) | Quality & Audit | Testable, measurable, unambiguous pass condition, covers the requirement |
| Collaborative game outputs (product box, affinity map) | Elicitation | Objective met; shared understanding captured (human-led) |
| Concept model (business vocabulary, concepts & relationships) | Visual Modeling | Concepts defined; relationships valid; no ambiguity |
| Data dictionary (data element definitions) | Synthesis & Drafting | Every element defined; types/domains; single source of truth |
| Data flow diagram (DFD) | Visual Modeling | Balanced levels; no black holes/miracles; stores & flows labelled |
| Data-mining model / findings (patterns & insights) | Visual Modeling | Method valid; findings significant; reproducible |
| Data model (ERD / class model) | Visual Modeling | Entities/attributes/relationships complete; normalized; keys defined |
| Decision analysis (decision matrix / expected-value model) | Visual Modeling | Options & criteria complete; weighting justified; math correct |
| Decision model (decision tables / decision trees) | Visual Modeling | Rules complete/exhaustive; no overlap; DMN-valid |
| Findings extracted from existing documents | Elicitation | Coverage of sources; extraction accuracy; traceable citations |
| Estimate(s) — cost/effort forecasts with ranges | Synthesis & Drafting | Notation/format valid; complete; fit for purpose |
| Backlog (prioritized list of work items) | Synthesis & Drafting | Items INVEST-quality; ranked by value; refined/ready |
| Financial analysis (ROI, NPV, IRR, payback, cost-benefit) | Synthesis & Drafting | Formulas correct; assumptions sourced; sensitivity run |
| Focus-group findings report | Elicitation | Representative; themes evidenced; bias controlled (human-led) |
| Decomposition diagram / breakdown structure | Visual Modeling | MECE; leaf nodes atomic; complete coverage |
| Glossary of business-domain terms | Synthesis & Drafting | Terms defined; consistent; no duplicates/conflicts |
| Interface list / interface specifications | Synthesis & Drafting | All interfaces identified; inputs/outputs/triggers defined |
| Documented interview responses / notes | Elicitation | Questions relevant; responses captured accurately; follow-ups |
| Item / issue log (tracking record) | Synthesis & Drafting | Items assigned/owned; status current; resolution tracked |
| Lessons learned document / register | Synthesis & Drafting | Successes & failures captured; actionable recommendations |
| Metrics & KPIs (definitions, targets, reporting) | Synthesis & Drafting | Valid & aligned; baseline/target; collectable |
| Mind map | Visual Modeling | Central topic; branches logical; coverage |
| Balanced scorecard (strategy map, objectives, measures, targets) | Visual Modeling | 4 perspectives covered; measures aligned; targets set |
| Non-functional requirements (quality attributes) specification | Synthesis & Drafting | Measurable; testable; categorized (perf/security/usability...) |
| Observation notes / findings | Elicitation | Objective; representative; context captured (human-led) |
| Organizational model / org chart | Visual Modeling | Roles/responsibilities/reporting complete; aligned to goals |
| Prioritized list / ranking | Synthesis & Drafting | Method explicit (MoSCoW/value); consistent; stakeholder-agreed |
| Process analysis findings / improvement recommendations | Visual Modeling | Bottlenecks evidenced; improvements quantified |
| Process model (flowchart, BPMN, swimlane) | Visual Modeling | Notation valid; start/end events; no dangling paths; decisions complete |
| Prototype (mock-up, wireframe, storyboard) | Visual Modeling | Covers key flows; testable with users; requirements traceable |
| Review record / defect log | Quality & Audit | Coverage; defects logged & classified; exit criteria met |
| Risk register (risks, assessment, responses) | Synthesis & Drafting | Risks well-formed; likelihood/impact scored; owner & response |
| Roles and permissions matrix (RACI-style) | Visual Modeling | Every activity has R/A; no gaps/overlaps; roles complete |
| Benchmarking study / market analysis report | Synthesis & Drafting | Comparators valid; data sourced; insights actionable |
| Root cause analysis (fishbone, 5 Whys) | Visual Modeling | Causes vs symptoms; evidence; root reached |
| Scope model (context diagram / boundary model) | Visual Modeling | Boundary clear; externals & flows; in/out unambiguous |
| Stakeholder list / stakeholder map / personas | Elicitation | Coverage; influence/interest correct; personas evidence-based |
| State model / state diagram / state table | Visual Modeling | States exhaustive; transitions valid; no unreachable states |
| Survey / questionnaire and results | Elicitation | Unbiased questions; sample adequate; results analysed |
| SWOT matrix | Visual Modeling | MECE; evidence-backed; internal/external correct; actionable |
| Use case / scenario (incl. use-case diagram) | Visual Modeling | Actor/goal/flows; alt & exception paths; preconditions |
| User story | Synthesis & Drafting | INVEST: Independent, Negotiable, Valuable, Estimable, Small, Testable |
| Vendor assessment / evaluation report | Synthesis & Drafting | Criteria weighted; scoring transparent; evidence-based |
| List of ideas / themes for analysis | Elicitation | Idea volume; de-duplicated; themed (facilitation is human-led) |
| Workshop outputs (decisions, agreed deliverables, models) | Elicitation | Goal met; decisions captured; deliverables agreed (human-facilitated) |
| Business capability map / capability model | Visual Modeling | Hierarchy complete/MECE; strategic-core-supporting classified |
| Business Model Canvas (9-block canvas) | Visual Modeling | All 9 blocks; internally consistent; value prop clear |
| Business rules catalogue / set of business rules | Synthesis & Drafting | Atomic; consistent; sourced; non-conflicting |

### 11. Perspectives

| Artefact | Owning agent | Starter pass/fail criteria (register col N) |
|---|---|---|
| Acceptance criteria | Quality & Audit | Testable, measurable, unambiguous pass condition |
| Epics | Synthesis & Drafting [under Perspectives lens] | Domain-specific acceptance criteria met |
| Estimates (story points) | Synthesis & Drafting [under Perspectives lens] | Method stated; relative sizing consistent; confidence |
| Features | Synthesis & Drafting [under Perspectives lens] | Domain-specific acceptance criteria met |
| Lightweight documentation | Synthesis & Drafting [under Perspectives lens] | Reference standard - applicability & currency |
| MoSCoW prioritization output | Synthesis & Drafting [under Perspectives lens] | Method explicit; consistent; stakeholder-agreed |
| Personas | Elicitation | Evidence-based; goals/pain-points; representative |
| Product backlog | Synthesis & Drafting [under Perspectives lens] | Items INVEST-quality; ranked by value; ready |
| Product roadmap | Visual Modeling [under Perspectives lens] | States & transitions; dependencies; sequencing justified |
| Product vision statement | Synthesis & Drafting [under Perspectives lens] | Vision clear; aligned to strategy; measurable outcomes |
| Purpose Alignment Model | Visual Modeling [under Perspectives lens] | Vision clear; aligned to strategy; measurable outcomes |
| Release plan / release backlog | Synthesis & Drafting [under Perspectives lens] | Items INVEST-quality; ranked by value; ready |
| SAFe program/portfolio artefacts | Synthesis & Drafting [under Perspectives lens] | Reference standard - applicability & currency |
| Spikes | Synthesis & Drafting [under Perspectives lens] | Domain-specific acceptance criteria met |
| Story map | Visual Modeling | End-to-end flow; steps sequenced; value/waste identified |
| User stories | Synthesis & Drafting [under Perspectives lens] | INVEST: Independent, Negotiable, Valuable, Estimable, Small, Testable |
| Value stream / value stream map | Visual Modeling | End-to-end flow; steps sequenced; value/waste identified |
| Balanced scorecards / KPI scorecards | Visual Modeling [under Perspectives lens] | Metrics valid & aligned; audience-fit; drill-down; accurate |
| Dashboards | Synthesis & Drafting [under Perspectives lens] | Metrics valid & aligned; audience-fit; drill-down; accurate |
| Data marts design | Synthesis & Drafting [under Perspectives lens] | Sources mapped; transformations correct; quality rules; lineage |
| Data sources inventory | Synthesis & Drafting [under Perspectives lens] | Sources mapped; transformations correct; quality rules; lineage |
| Data warehouse design | Synthesis & Drafting [under Perspectives lens] | Sources mapped; transformations correct; quality rules; lineage |
| Data-matching / data-quality specifications | Synthesis & Drafting [under Perspectives lens] | Sources mapped; transformations correct; quality rules; lineage |
| ETL design | Synthesis & Drafting [under Perspectives lens] | Sources mapped; transformations correct; quality rules; lineage |
| Metadata definitions | Synthesis & Drafting [under Perspectives lens] | Sources mapped; transformations correct; quality rules; lineage |
| Physical data models | Visual Modeling [under Perspectives lens] | Entities/attributes/relationships complete; normalized; keys |
| Reporting & information-delivery requirements | Synthesis & Drafting [under Perspectives lens] | Metrics valid & aligned; audience-fit; drill-down; accurate |
| Reports & charts | Visual Modeling [under Perspectives lens] | Metrics valid & aligned; audience-fit; drill-down; accurate |
| Solution architecture (BI) | Synthesis & Drafting [under Perspectives lens] | Meets requirements; components & interfaces; trade-offs justified |
| Source data dictionary | Synthesis & Drafting [under Perspectives lens] | Every element defined; types/domains; single source of truth |
| Source logical data model | Visual Modeling [under Perspectives lens] | Entities/attributes/relationships complete; normalized; keys |
| Target data dictionary | Synthesis & Drafting [under Perspectives lens] | Every element defined; types/domains; single source of truth |
| Target logical data model | Visual Modeling [under Perspectives lens] | Entities/attributes/relationships complete; normalized; keys |
| Functional specifications | Synthesis & Drafting [under Perspectives lens] | BABOK verify criteria: atomic, complete, testable, unambiguous, prioritized |
| Future state description & gap analysis | Visual Modeling [under Perspectives lens] | Current vs future complete; gaps evidenced; feasible |
| Non-functional (quality-of-service) requirements | Synthesis & Drafting [under Perspectives lens] | BABOK verify criteria: atomic, complete, testable, unambiguous, prioritized |
| Process models | Visual Modeling | Notation valid; start/end events; no dangling paths; decisions complete |
| Roles and permissions / data-security specifications | Synthesis & Drafting [under Perspectives lens] | Every activity has R/A; no gaps/overlaps; least-privilege |
| Software/technical design or blueprint | Synthesis & Drafting [under Perspectives lens] | Meets requirements; components & interfaces; trade-offs justified |
| Use cases and scenarios | Synthesis & Drafting [under Perspectives lens] | Actor/goal/flows; alt & exception paths; preconditions |
| Business Motivation Model (BMM) | Visual Modeling [under Perspectives lens] | Ends/means/influencers complete; internally consistent |
| Business Process Architecture | Visual Modeling | Notation valid; start/end events; no dangling paths; decisions complete |
| Business capability map | Visual Modeling [under Perspectives lens] | Hierarchy MECE; classified; aligned to strategy/value |
| Customer journey map | Visual Modeling [under Perspectives lens] | Touchpoints complete; stages; pain-points evidenced |
| Enterprise core diagram | Visual Modeling [under Perspectives lens] | Meets requirements; components & interfaces; trade-offs justified |
| Information map | Visual Modeling [under Perspectives lens] | Hierarchy MECE; classified; aligned to strategy/value |
| Organizational map | Visual Modeling [under Perspectives lens] | Hierarchy MECE; classified; aligned to strategy/value |
| Project Portfolio Analysis | Synthesis & Drafting [under Perspectives lens] | Initiatives mapped; dependencies; prioritization |
| Reference models & frameworks (Zachman, TOGAF, Archimate, APQC PCF, SCOR, VRM, FEA) | Visual Modeling [under Perspectives lens] | Reference standard - applicability & currency |
| Roadmap | Visual Modeling [under Perspectives lens] | States & transitions; dependencies; sequencing justified |
| Service-Oriented Analysis | Synthesis & Drafting [under Perspectives lens] | Meets requirements; components & interfaces; trade-offs justified |
| Business process models (as-is & to-be) | Visual Modeling | Notation valid; start/end events; no dangling paths; decisions complete |
| End-to-end process model / value chain | Visual Modeling | End-to-end flow; steps sequenced; value/waste identified |
| Process architecture | Visual Modeling | Notation valid; start/end events; no dangling paths; decisions complete |
| Process performance assessment | Synthesis & Drafting [under Perspectives lens] | Measures aligned; baseline/target; assessment evidenced |
| Process performance measures | Synthesis & Drafting [under Perspectives lens] | Measures aligned; baseline/target; assessment evidenced |
| Repository of reference models | Visual Modeling [under Perspectives lens] | Reference standard - applicability & currency |
| Supporting notations (BPMN, SIPOC, swimlane, FMEA) | Visual Modeling [under Perspectives lens] | Reference standard - applicability & currency |

### 2. Business Analysis Key Concepts

| Artefact | Owning agent | Starter pass/fail criteria (register col N) |
|---|---|---|
| Designs | Synthesis & Drafting | Meets requirements; feasible; components defined; trade-offs justified |
| Functional requirements | Synthesis & Drafting | BABOK verify criteria: atomic, complete, consistent, testable, unambiguous, prioritized, feasible |
| Non-functional requirements | Synthesis & Drafting | BABOK verify criteria: atomic, complete, consistent, testable, unambiguous, prioritized, feasible |
| Solution requirements | Synthesis & Drafting | BABOK verify criteria: atomic, complete, consistent, testable, unambiguous, prioritized, feasible |
| Stakeholder requirements | Synthesis & Drafting | BABOK verify criteria: atomic, complete, consistent, testable, unambiguous, prioritized, feasible |
| Transition requirements | Synthesis & Drafting | BABOK verify criteria: atomic, complete, consistent, testable, unambiguous, prioritized, feasible |

### 3. Business Analysis Planning and Monitoring

| Artefact | Owning agent | Starter pass/fail criteria (register col N) |
|---|---|---|
| Business Analysis Approach | Approach | Approach fit to context; activities/deliverables/techniques defined; sequencing sound; stakeholder-agreed |
| Business Analysis Performance Assessment | Quality & Audit | Metrics vs objectives; root causes; actionable improvements |
| Stakeholder Engagement Approach | Elicitation | Stakeholder coverage; collaboration & comms fit; risks addressed |
| Change Strategy | Approach | Alternatives assessed; transition states defined; recommendation justified |
| Governance Approach | Approach | Decision rights clear; approval & change-control defined; prioritization rules present |
| Information Management Approach | Approach | Storage/access/reuse defined; traceability & retention covered |

### 4. Elicitation and Collaboration

| Artefact | Owning agent | Starter pass/fail criteria (register col N) |
|---|---|---|
| Elicitation Activity Plan | Elicitation | Right techniques/stakeholders; logistics & scope complete |
| Business Objectives | Elicitation | SMART; aligned to strategy; measurable |
| Potential Value | Elicitation | Quantified benefits & costs; assumptions explicit; sensitivity considered |
| Elicitation Results [unconfirmed] | Elicitation | Captured accurately; confirmed vs source; traceable to need |
| Elicitation Results [confirmed] | Elicitation | Captured accurately; confirmed vs source; traceable to need |
| Business Analysis Information [communicated] | Elicitation | Audience-fit; clarity; completeness; correct format/channel |
| Future State Description | Elicitation | Scope/boundaries clear; value articulated; feasible; addresses need |
| Recommended Actions | Elicitation | Options (adjust/replace/retire/invest) assessed; recommendation justified |
| Risk Analysis Results | Elicitation | Risks identified; likelihood/impact scored; mitigations owned |

### 5. Requirements Life Cycle Management

| Artefact | Owning agent | Starter pass/fail criteria (register col N) |
|---|---|---|
| Designs [traced] | Architecture | Meets requirements; feasible; components defined; trade-offs justified |
| Requirements [traced] | Architecture | BABOK verify criteria: atomic, complete, consistent, concise, feasible, unambiguous, testable, prioritized, understandable |
| Designs [maintained] | Architecture | Meets requirements; feasible; components defined; trade-offs justified |
| Requirements [maintained] | Architecture | BABOK verify criteria: atomic, complete, consistent, concise, feasible, unambiguous, testable, prioritized, understandable |
| Designs [prioritized] | GAP: lifecycle governance | Meets requirements; feasible; components defined; trade-offs justified |
| Requirements [prioritized] | GAP: lifecycle governance | BABOK verify criteria: atomic, complete, consistent, concise, feasible, unambiguous, testable, prioritized, understandable |
| Designs Change Assessment | GAP: lifecycle governance | Design-impact analysed; recommendation justified |
| Requirements Change Assessment | GAP: lifecycle governance | Impact/cost/benefit/risk analysed; clear approve/modify/deny recommendation |
| Designs [approved] | GAP: lifecycle governance | Meets requirements; feasible; components defined; trade-offs justified |
| Requirements [approved] | GAP: lifecycle governance | BABOK verify criteria: atomic, complete, consistent, concise, feasible, unambiguous, testable, prioritized, understandable |

### 6. Packaging & Representation

| Artefact | Owning agent | Starter pass/fail criteria (register col N) |
|---|---|---|
| Business analysis package | Synthesis & Drafting | Audience-fit; completeness; correct format/channel; traceable |
| Requirements package (requirements document) | Synthesis & Drafting | Baseline complete, consistent, versioned, approved |

### 6. Strategy Analysis

| Artefact | Owning agent | Starter pass/fail criteria (register col N) |
|---|---|---|
| Enterprise Limitation | Synthesis & Drafting | Enterprise constraints evidenced; value impact quantified |
| Solution Limitation | Synthesis & Drafting | Constraints evidenced; value impact quantified |
| Solution Performance Goals | Synthesis & Drafting | Goals measurable & aligned to objectives |
| Solution Performance Measures | Synthesis & Drafting | Measures valid/aligned to objectives; baseline & target defined; collectable |
| Stakeholder Analysis Results | Elicitation | Coverage; influence/interest correct; RACI complete |
| Metrics and Key Performance Indicators [KPIs] | Synthesis & Drafting | Valid, aligned, measurable; baseline/target defined |
| Identified Risks | Synthesis (produce) / risk-challenger audits | Risks well-formed; likelihood/impact; owner & response |
| Solution Scope | Synthesis & Drafting | In/out of scope explicit; boundaries unambiguous; aligned to change strategy |
| Design Options | Synthesis & Drafting | Options distinct & viable; pros/cons/costs; components defined |
| Solution Recommendations | Synthesis & Drafting | Evaluation traceable to criteria; value maximised; recommendation defensible |

### 7. Named Forms

| Artefact | Owning agent | Starter pass/fail criteria (register col N) |
|---|---|---|
| Activity diagram | Visual Modeling | Start/end; decisions; no dangling paths |
| Affinity diagram | Elicitation | Items grouped; themes labelled; no orphans |
| BPMN model | Visual Modeling | BPMN-valid; events/gateways correct; pools/lanes |
| CRUD matrix | Visual Modeling | Every entity has C/R/U/D coverage; no gaps |
| Class model / class diagram | Visual Modeling | Classes/attributes/associations & multiplicities valid |
| Context diagram | Visual Modeling | Boundary clear; externals & flows; in/out unambiguous |
| Decision matrix (simple & weighted) | Visual Modeling | Options & criteria complete; weighting justified; math correct |
| Entity Relationship Diagram (ERD) | Visual Modeling | Entities/attributes/relationships complete; keys; normalized |
| Escalation matrix | Visual Modeling | Levels; triggers; owners; timeframes defined |
| Fishbone / Ishikawa diagram | Visual Modeling | Causes vs symptoms; categories; root reached |
| Flowchart | Visual Modeling | Valid symbols; single entry/exit; decisions complete |
| Onion diagram | Elicitation | Rings correct; stakeholders placed by proximity |
| Organizational chart (functional/matrix) | Visual Modeling | Roles; reporting lines; complete; current |
| Requirements traceability matrix | Visual Modeling | Bidirectional links; no orphans; coverage complete |
| SIPOC diagram | Visual Modeling | Suppliers/Inputs/Process/Outputs/Customers complete |
| Sequence diagram | Visual Modeling | Actors/messages ordered; matches scenario; UML-valid |
| State diagram | Visual Modeling | States exhaustive; transitions valid; no unreachable |
| State table | Visual Modeling | All state/event combinations covered |
| Swimlane diagram | Visual Modeling | Lanes = roles; handoffs clear; no orphan steps |
| Use case diagram | Visual Modeling | Actors; use cases; relationships; boundary |
| Value chain | Visual Modeling | Primary/support activities; margin; complete |
| Value stream map | Visual Modeling | Steps; cycle/lead times; value/waste identified |
| Wireframe / mock-up / storyboard | Visual Modeling | Covers key flows; testable; requirements traceable |

### 7. Requirements Analysis and Design Definition

| Artefact | Owning agent | Starter pass/fail criteria (register col N) |
|---|---|---|
| Requirements [specified and modelled] | Synthesis & Drafting | BABOK verify criteria: atomic, complete, consistent, concise, feasible, unambiguous, testable, prioritized, understandable |
| Requirements Architecture | Synthesis & Drafting | Relationships complete/consistent; no gaps or conflicts; viewpoints covered |
| Requirements [verified] | Quality & Audit | BABOK verify criteria: atomic, complete, consistent, concise, feasible, unambiguous, testable, prioritized, understandable |
| Requirements [validated] | Quality & Audit | BABOK verify criteria: atomic, complete, consistent, concise, feasible, unambiguous, testable, prioritized, understandable |
| Solution Recommendation | Synthesis & Drafting | Evaluation traceable to criteria; value maximised; recommendation defensible |

### 8. Procurement & Agreement Docs

| Artefact | Owning agent | Starter pass/fail criteria (register col N) |
|---|---|---|
| Request for Information (RFI) | Elicitation | Info needs clear; structured; comparable responses |
| Request for Proposal (RFP) | Analytics & Performance | Requirements complete; evaluation criteria; response format |
| Request for Quote (RFQ) | Analytics & Performance | Specs & quantities clear; price format defined |
| Request for Tender (RFT) | Analytics & Performance | Formal terms; criteria; submission rules |
| Scope statement | Analytics & Performance | In/out scope explicit; unambiguous; agreed |
| Service Level Agreement (SLA) | Analytics & Performance | Measurable service levels; remedies; review cadence |
| Statement of Work (SOW) | Analytics & Performance | Deliverables; timeline; acceptance; responsibilities |
| Work Breakdown Structure (WBS) | Analytics & Performance | MECE; 100% rule; leaf tasks estimable |

### 8. Solution Evaluation

| Artefact | Owning agent | Starter pass/fail criteria (register col N) |
|---|---|---|
| Solution Performance Analysis | Analytics & Performance | Analysis vs goals sound; drivers identified; conclusions supported |

### 9. Analysis/Assessment/Review/Test

| Artefact | Owning agent | Starter pass/fail criteria (register col N) |
|---|---|---|
| Behavioural (operative) business rules | Synthesis & Drafting | Atomic; enforceable; sourced; non-conflicting |
| Business Analysis Information Architecture | Synthesis & Drafting | Structure/organization of BA info defined; accessible |
| Business analysis communication plan (legacy/v2) | Synthesis & Drafting | Comms types/audience/frequency (v3: use approaches) |
| Business analysis plan (legacy/v2) | Synthesis & Drafting | Activities/deliverables/timing (v3: use approaches) |
| Checklist(s) | Quality & Audit | Items cover verify criteria; unambiguous pass/fail |
| Competitive analysis | Synthesis & Drafting | Competitors; comparators; sourced; actionable |
| Cost-benefit analysis | Synthesis & Drafting | Costs & benefits quantified; assumptions; NPV/ROI |
| Definitional (structural) business rules | Synthesis & Drafting | Atomic; consistent; sourced; non-conflicting |
| Enterprise Culture Assessment | Synthesis & Drafting | Beliefs/values/norms assessed vs adoption needs |
| Enterprise Readiness Assessment | Synthesis & Drafting | Culture/operational/stakeholder readiness assessed; gaps & actions |
| Evolutionary (functional) prototype | Synthesis & Drafting | Working increment; extensible; requirements-traceable |
| Feasibility study | Synthesis & Drafting | Options assessed technical/economic/operational; recommendation |
| Focus Group Plan | Elicitation | Purpose/outcomes/participants/logistics agreed |
| Force field analysis | Synthesis & Drafting | Driving vs restraining forces; weighted; actionable |
| Gap analysis | Synthesis & Drafting | Current vs future complete; gaps evidenced |
| Horizontal prototype | Synthesis & Drafting | Broad UI coverage; shallow depth |
| Impact analysis | Synthesis & Drafting | Requirements/coverage/allocation impact assessed |
| Inspection | Quality & Audit | Formal roles; defects; entry/exit criteria met |
| Operational Assessment | Synthesis & Drafting | Processes/tools/ability-to-adapt assessed |
| Peer review | Quality & Audit | Coverage; defects logged/classified; exit criteria |
| Proof of concept | Synthesis & Drafting | Feasibility question answered with evidence |
| Requirements attribute(s) | Synthesis & Drafting | Priority/source/status/owner metadata complete |
| Requirements defect | Quality & Audit | Defect logged; classified; traced |
| Requirements management plan (legacy/v2) | Synthesis & Drafting | RM approach/traceability/change control (v3: use approaches) |
| Risk assessment | Synthesis & Drafting | Risks; likelihood/impact; response |
| Stakeholder Impact Analysis | Elicitation | Per-group impact assessed; mitigations |
| Stakeholder analysis | Elicitation | Coverage; influence/interest correct; RACI |
| Throw-away (rapid) prototype | Synthesis & Drafting | Answers target question; disposable; fast |
| User acceptance test (UAT) | Quality & Audit | Test cases cover acceptance criteria; pass/fail recorded |
| Vertical prototype | Synthesis & Drafting | Deep slice through one function |
| Walkthrough | Quality & Audit | Author-led; feedback captured; actions |

## B. Templates to author (25)

Producible outputs with no OS template. Requirement *classes* (KA2) are marked optional: they are normally captured inside a BRD/SRS, not as standalone templates.

| Artefact | KA | Owning agent | Note |
|---|---|---|---|
| Business Analysis Approach | 3. Business Analysis Plann | Approach | author standalone template |
| Stakeholder Engagement Approach | 3. Business Analysis Plann | Elicitation | author standalone template |
| Governance Approach | 3. Business Analysis Plann | Approach | author standalone template |
| Information Management Approach | 3. Business Analysis Plann | Approach | author standalone template |
| Business Analysis Performance Assessment | 3. Business Analysis Plann | Quality & Audit | author standalone template |
| Elicitation Activity Plan | 4. Elicitation and Collabo | Elicitation | author standalone template |
| Business Analysis Information [communicated] | 4. Elicitation and Collabo | Elicitation | author standalone template |
| Designs [traced] | 5. Requirements Life Cycle | Architecture | author standalone template |
| Designs [maintained] | 5. Requirements Life Cycle | Architecture | author standalone template |
| Designs [prioritized] | 5. Requirements Life Cycle | GAP: lifecycle governance | author standalone template |
| Designs Change Assessment | 5. Requirements Life Cycle | GAP: lifecycle governance | author standalone template |
| Requirements Change Assessment | 5. Requirements Life Cycle | GAP: lifecycle governance | author standalone template |
| Designs [approved] | 5. Requirements Life Cycle | GAP: lifecycle governance | author standalone template |
| Business Objectives | 6. Strategy Analysis | Synthesis & Drafting | author standalone template |
| Potential Value | 6. Strategy Analysis | Synthesis & Drafting | author standalone template |
| Change Strategy | 6. Strategy Analysis | Synthesis & Drafting | author standalone template |
| Solution Scope | 6. Strategy Analysis | Synthesis & Drafting | author standalone template |
| Requirements Architecture | 7. Requirements Analysis a | Architecture | author standalone template |
| Design Options | 7. Requirements Analysis a | Synthesis & Drafting | author standalone template |
| Solution Recommendation | 7. Requirements Analysis a | Synthesis & Drafting | author standalone template |
| Solution Performance Measures | 8. Solution Evaluation | Analytics & Performance | author standalone template |
| Solution Performance Analysis | 8. Solution Evaluation | Analytics & Performance | author standalone template |
| Solution Limitation | 8. Solution Evaluation | Analytics & Performance | author standalone template |
| Enterprise Limitation | 8. Solution Evaluation | Analytics & Performance | author standalone template |
| Recommended Actions | 8. Solution Evaluation | Analytics & Performance | author standalone template |

## C. Skills to author or bind (18 rows, 9 distinct refs)

The register points at these skills, which are NOT in the compiled BA-OS capabilities. For each: either author a BA-OS equivalent capability, or bind the external plugin as a pool member of the owning agent.

| Register skill ref | Owning agent(s) | Artefacts needing it | Recommendation |
|---|---|---|---|
| (reference standard / knowledge base) | Synthesis & Drafting [under Perspectives lens]; Visual Modeling [under Perspectives lens] | Lightweight documentation, Reference models & frameworks (Zachman, TOGAF, Archimate, APQC PCF, SCOR, VRM, FEA), Repository of reference models, SAFe program/portfolio artefacts, Supporting notations (BPMN, SIPOC, swimlane, FMEA) | author BA-OS capability |
| (technique skill) | Synthesis & Drafting | Estimate(s) — cost/effort forecasts with ranges | author BA-OS capability |
| data:statistical-analysis; data:analyze | Visual Modeling | Data-mining model / findings (patterns & insights) | author BA-OS equivalent OR bind external plugin as pool member |
| design:user-research | Visual Modeling [under Perspectives lens] | Customer journey map | author BA-OS equivalent OR bind external plugin as pool member |
| figma:figma-generate-diagram | Visual Modeling | Diagrams (representation form), Mind map | author BA-OS equivalent OR bind external plugin as pool member |
| frontend-design | Synthesis & Drafting | Horizontal prototype, Vertical prototype | author BA-OS equivalent OR bind external plugin as pool member |
| frontend-design; engineering:architecture | Synthesis & Drafting | Proof of concept | author BA-OS equivalent OR bind external plugin as pool member |
| frontend-design; figma:figma-design-to-code | Synthesis & Drafting; Visual Modeling | Evolutionary (functional) prototype, Prototype (mock-up, wireframe, storyboard), Throw-away (rapid) prototype, Wireframe / mock-up / storyboard | author BA-OS equivalent OR bind external plugin as pool member |
| legal:review-contract | Analytics & Performance | Service Level Agreement (SLA) | author BA-OS equivalent OR bind external plugin as pool member |

---
*Agent-ownership gap (the 6 KA5 lifecycle outputs) is NOT in this file: it is an app-design change, handled in the ecosystem seam spec.*