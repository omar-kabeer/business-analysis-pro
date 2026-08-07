# BABOK v3 Coverage Map

This plugin's skill set is derived from a line-by-line reading of the BABOK v3 artefact register: 410 rows covering task inputs and outputs, guidelines and tools, requirement and design classes, packaging and representation forms, named diagram and matrix forms, procurement and agreement documents, analysis and review artefacts, all 50 technique work products, and the five perspectives.

As of version 1.15.0, every row resolves to exactly one owning skill.

## The layering

Every artefact is produced by one kind of work. These seven layers are mutually exclusive and collectively exhaustive.

| Layer | Skills |
| --- | --- |
| Frame | ba-planning, business-analysis, strategy, business-architecture |
| Input and evidence | elicitation, document-analysis, market-research |
| Specify | requirements, product-manager, product-owner, agile-coach, ux |
| Represent | visual-modelling, process-modelling, data-modelling, data-analysis, business-intelligence, architecture, prototyping |
| Decide and evaluate | decision-analysis, estimation, finance, vendor-evaluation, procurement-contracts, quality, acceptance-testing, solution-evaluation |
| Control | risk-analysis, change-control, regulatory-compliance, information-management, governance |
| Communicate | communication, executive-review, technical-writer, proposal-writer, natural-prose-editor, prompt-master, orchestrator |

## Knowledge areas to skills

| BABOK knowledge area | Primary skills |
| --- | --- |
| 3. Business Analysis Planning and Monitoring | ba-planning, information-management, governance, risk-analysis |
| 4. Elicitation and Collaboration | elicitation, document-analysis, communication |
| 5. Requirements Life Cycle Management | requirements, governance, change-control, information-management |
| 6. Strategy Analysis | strategy, business-analysis, business-architecture, risk-analysis, finance |
| 7. Requirements Analysis and Design Definition | requirements, data-modelling, process-modelling, visual-modelling, architecture, decision-analysis, quality |
| 8. Solution Evaluation | solution-evaluation, data-analysis, acceptance-testing, business-intelligence |

## Artefact families to owning skill

| Artefact family | Owning skill |
| --- | --- |
| Business analysis approach, stakeholder engagement approach, governance approach | ba-planning |
| Information management approach, artefact register, baselines, traceability repository | information-management |
| Elicitation plans, results, workshops, interviews, surveys, stakeholder analysis | elicitation |
| Findings from existing documents, domain knowledge, supporting materials | document-analysis |
| Current state, future state, gap analysis, capability analysis, business rules, glossary | business-analysis |
| Capability maps, value streams, organisational and information maps, enterprise roadmaps, reference frameworks | business-architecture |
| Requirements and designs in every state, requirements architecture, packages | requirements |
| Process models, BPMN, swimlanes, SIPOC, process architecture and performance | process-modelling |
| Entity and class models, data dictionaries, concept models, DFDs, migration mapping | data-modelling |
| Metrics, KPIs, targets, performance measures and analysis | data-analysis |
| Warehouses, marts, ETL, dashboards, scorecards, reports, metadata, data quality | business-intelligence |
| All diagram and matrix rendering | visual-modelling |
| Wireframes, mock-ups, storyboards, prototypes, proofs of concept | prototyping |
| Personas, journey maps, empathy maps, usability and accessibility | ux |
| Design options, interface specifications, solution and technical design views | architecture |
| Decision matrices, decision tables and trees, expected value, decision records | decision-analysis |
| Estimates, work breakdown structures, contingency basis | estimation |
| Business cases, ROI, NPV, IRR, payback, sensitivity | finance |
| RFI, RFP, evaluation criteria, scoring, vendor recommendation | vendor-evaluation |
| Statements of work, service level agreements, RFQ, RFT, exit terms | procurement-contracts |
| Reviews, inspections, walkthroughs, checklists, requirement defects | quality |
| User acceptance testing, test cases, coverage, defect triage | acceptance-testing |
| Risk analysis results, risk registers, assumptions | risk-analysis |
| Proposed changes, change assessments, impact analysis, re-baselining | change-control |
| Business policies, legal and regulatory information, controls, audit evidence | regulatory-compliance |
| RAID logs, decision logs, traceability matrices, item logs, release readiness | governance |
| Solution performance, limitations, recommended actions, lessons learned | solution-evaluation |
| Backlogs, epics, features, stories, release plans, definitions of ready and done | product-owner |
| Vision, roadmaps, discovery, prioritisation, go to market | product-manager |
| Ceremonies, flow, scaled framework artefacts, barely sufficient documentation | agile-coach |
| Stakeholder updates, steering reports, meeting notes, announcements | communication |
| Executive summaries, board papers, recommendations | executive-review |

## Boundary rules

The routing map in `skills/orchestrator/references/routing-map.md` carries the full set of boundary rules for the pairs most often confused, including business-analysis against business-architecture, the three data skills, the three control skills, quality against acceptance-testing, and every modelling skill against visual-modelling.
