# Routing Map

Use this to map an incoming request to the right specialist skill and a sensible sequence. Route only when the specialist adds structure; otherwise answer directly.

## Request to skill

| Signal in the request | Primary skill | Common follow-on |
| --- | --- | --- |
| Fresh project, "where do I start", "what documents do I need", "I have an idea", no clear brief | project-intake | orchestrator, then the prescribed skills |
| Vague problem, need to frame it, stakeholders unclear | elicitation | business-analysis, strategy |
| "Interview / workshop / discovery / find the real problem" | elicitation | requirements |
| "Here are the existing documents, mine these, what do our policies say" | document-analysis | business-analysis, requirements |
| "What should we build, is it worth it, business model" | strategy | finance, market-research |
| "Market size, competitors, TAM, industry scan" | market-research | strategy |
| "Business case, ROI, NPV, cost benefit, funding" | finance | executive-review |
| "How long, what will it cost, break down the work, WBS" | estimation | finance, product-owner |
| "BABOK, current state, future state, gap, capability, traceability" | business-analysis | requirements, governance |
| "Capability map, value stream, enterprise architecture, target operating model, TOGAF" | business-architecture | strategy, process-modelling |
| "Map this process, BPMN, swimlane, SIPOC, bottleneck, process architecture" | process-modelling | visual-modelling, requirements |
| "Draw this, diagram it, render the model, give me the Mermaid" | visual-modelling | the skill that owns the content |
| "BRD, FRD, SRS, requirements, acceptance criteria, NFRs" | requirements | quality, acceptance-testing |
| "Model the data, ERD, data dictionary, what does this field mean, migration mapping" | data-modelling | visual-modelling, business-intelligence |
| "KPIs, metrics, targets, is this number good" | data-analysis | business-intelligence |
| "Dashboard, reporting, data warehouse, ETL, single version of the truth" | business-intelligence | data-modelling, dataviz |
| "Mock this up, wireframe, clickable prototype, prove the concept" | prototyping | ux, requirements |
| "Vision, roadmap, product strategy, JTBD, discovery" | product-manager | product-owner |
| "Backlog, epics, stories, sprint, definition of ready or done" | product-owner | quality, acceptance-testing |
| "How should we run sprints, retrospective, Kanban, scale agile" | agile-coach | product-owner |
| "Personas, journey, usability, accessibility, IA" | ux | prototyping, requirements |
| "APIs, integrations, cloud, events, security for a BA" | architecture | requirements |
| "What are the risks, risk register, what could go wrong, exposure" | risk-analysis | governance, finance |
| "RAID, decision log, traceability matrix, release readiness" | governance | quality |
| "They want to add something, is this in scope, impact of this change, re-baseline" | change-control | governance, estimation |
| "Regulatory requirement, is this compliant, which policies apply, audit" | regulatory-compliance | requirements, risk-analysis |
| "Where does this live, versioning, baseline, naming, we cannot find the current version" | information-management | governance |
| "Help us choose, scoring matrix, weigh the criteria, decision tree, rule table" | decision-analysis | finance, governance |
| "Write an RFP, compare suppliers, score the demos" | vendor-evaluation | decision-analysis, procurement-contracts |
| "Draft the SOW, what should the SLA say, contract terms, exit clause" | procurement-contracts | vendor-evaluation, finance |
| "UAT, test scenarios, coverage, are we ready to accept" | acceptance-testing | quality, governance |
| "Is the solution delivering value, post-implementation, benefits, lessons learned" | solution-evaluation | data-analysis, executive-review |
| "Validate, critique, is this any good, find the gaps" | quality | executive-review |
| "Make this board-ready, executive summary, present to CEO" | executive-review | natural-prose-editor |
| Payments, ISO 20022, SWIFT, SEPA, clearing and settlement | business-analysis + domain pack | requirements, architecture |
| Healthcare, HL7, FHIR, EHR, patient data, HIPAA | business-analysis + domain pack | requirements, architecture, data-modelling |
| "Write the proposal / report / documentation / prompt" | proposal-writer, technical-writer, prompt-master | natural-prose-editor |

## Common sequences

- Discovery to delivery: document-analysis, elicitation, business-analysis, requirements, quality, acceptance-testing, executive-review.
- New product bet: strategy, market-research, finance, product-manager, executive-review.
- Requirements package: requirements, information-management (IDs and baseline), governance (traceability), quality.
- Any model that must be seen: the owning skill produces the content, visual-modelling renders it.
- Risk and change: risk-analysis for what might happen, change-control for what someone wants to alter, governance for the running log of both.
- Data work: data-modelling for structure, data-analysis for measures, business-intelligence for delivery, dataviz for the chart itself.
- Supplier lifecycle: requirements, vendor-evaluation, decision-analysis, procurement-contracts, acceptance-testing.
- Regulated change: regulatory-compliance, requirements, risk-analysis, acceptance-testing, governance.
- Enterprise framing: business-architecture, strategy, then the initiative-level skills.
- Any written deliverable ends with natural-prose-editor as the house-style pass.
- Payments initiatives load `domain-packs/payments-iso20022/` alongside the core skills.
- Healthcare initiatives load `domain-packs/healthcare-hl7-fhir/` alongside the core skills.

## Boundary rules that prevent overlap

These pairs are the ones most often confused. The rule decides which skill owns the work.

| Pair | Rule |
| --- | --- |
| business-analysis and business-architecture | Initiative scope goes to business-analysis; enterprise scope goes to business-architecture. |
| architecture and business-architecture | Solution and technology views go to architecture; capability, value stream, and operating model views go to business-architecture. |
| data-analysis, data-modelling, business-intelligence | Measures go to data-analysis, structures go to data-modelling, delivery and pipelines go to business-intelligence. |
| governance, risk-analysis, change-control | Risks are analysed in risk-analysis, changes are assessed in change-control, and both are logged and tracked in governance. |
| quality and acceptance-testing | Reviewing a document goes to quality; testing a built solution goes to acceptance-testing. |
| elicitation and document-analysis | People as the source goes to elicitation; documents as the source goes to document-analysis. |
| ux and prototyping | Understanding the user goes to ux; building the artefact they react to goes to prototyping. |
| vendor-evaluation and procurement-contracts | Choosing the supplier goes to vendor-evaluation; writing what they are held to goes to procurement-contracts. |
| finance and estimation | Effort, size, and duration go to estimation; money, value, and investment metrics go to finance. |
| strategy and decision-analysis | Framing the strategic question goes to strategy; scoring the options and recording the choice goes to decision-analysis. |
| Any modelling skill and visual-modelling | The content and its meaning stay with the owning skill; the rendering goes to visual-modelling. |
| ba-planning and information-management | How the analysis work will run goes to ba-planning; how its outputs are stored, named, versioned, and found goes to information-management. |

## Execution patterns

- Sequential: output of one skill is the input to the next.
- Parallel: independent sub-tasks (research and finance) run together, then integrate.
- Iterative: act with a specialist, validate with quality, repeat until the gate passes. Set a stop condition to avoid loops.
