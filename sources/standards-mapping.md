# **Comprehensive Specification of Industry Standards for Business Analysis Practice**

Business analysis operates at the systemic intersection of corporate strategy, enterprise architecture, software engineering, operational governance, and financial infrastructure1. To ensure that analytical outputs are reproducible, interoperable, and legally defensible, business analysts must ground their competencies, technique work products, and task deliverables in formal international standards and industry specifications2. A Guide to the Business Analysis Body of Knowledge (BABOK® Guide v3) establishes the overarching structural framework of Knowledge Areas, tasks, inputs, outputs, guidelines, and techniques1. However, executing business analysis within complex organizational ecosystems requires explicit alignment with specialized underlying modeling, architectural, operational, risk, accessibility, and messaging standards3.  
This report provides a Mutually Exclusive, Collectively Exhaustive (MECE) specification of all standards required across the business analysis discipline3. It correlates formal specifications with the 30 BABOK v3 tasks, the 50 BABOK techniques, the 5 core perspectives (Agile, Business Intelligence, Information Technology, Business Architecture, and Business Process Management), and the 39 practitioner skills defining modern business analysis practice1.

## **Executive Summary and Methodological Framework**

Professional business analysis relies on a multi-tiered hierarchy of standards. At the foundational layer, professional body standards such as BABOK v3 and the Agile Extension to the BABOK® Guide define operational frameworks, task inputs, output states, and underlying competencies1. Above this foundation, standardized modeling notations—governed by bodies such as the Object Management Group (OMG) and the International Organization for Standardization (ISO)—provide formal syntaxes for process workflows, decision tables, object-oriented software architectures, and enterprise motivation models1.  
At the domain execution layer, specialized industry frameworks regulate specific organizational capabilities3. Financial messaging standards govern transactional data structures; digital accessibility guidelines dictate front-end user experience parameters; and information security frameworks establish mandatory governance controls3.  
To achieve MECE taxonomy coverage, the standards required by a business analyst are categorized into eight operational domains:

> 1. Enterprise Architecture, Strategy, and Motivation Standards  
> 2. Process Modeling, Decision Logic, and Workflow Standards  
> 3. Software Systems Specification and Visual Modeling Standards  
> 4. Data Engineering, Analytics, and Business Intelligence Standards  
> 5. Quality, Risk, Security, and Governance Standards  
> 6. Digital Accessibility, User Experience, and Interface Standards  
> 7. Financial Infrastructure, Payment Messaging, and Commercial Standards  
> 8. Agile Delivery, Documentation, and AI Orchestration Standards

## **Enterprise Architecture, Strategy, and Motivation Standards**

Strategy analysis and business architecture bridge high-level corporate ambition with executable operational change1. Defining baseline current states and target future states requires formal taxonomies to model business motivation, value streams, capabilities, and enterprise structures without semantic ambiguity2.

### **OMG Business Motivation Model (BMM 1.3)**

The Object Management Group (OMG) Business Motivation Model (BMM 1.3) provides the normative vocabulary and structural framework for identifying the drivers of corporate change, formulating business plans, and establishing end-to-end traceability from strategic intent to operational realization5. Originating from the Business Rules Group (BRG) before its formal adoption by the OMG, BMM structures business motivation into four core domains5:

* **Ends**: Quantifies what the enterprise wishes to achieve, establishing a hierarchy that progresses from aspirational Vision statements to long-term, non-measurable Goals, and ultimately to time-bound, quantitative Objectives5.  
* **Means**: Defines how the enterprise intends to achieve its Ends, encompassing the corporate Mission, Courses of Action (long-term Strategies and tactical implementation steps), and governing Directives5. Directives are bifurcated into broad Business Policies and enforceable, actionable Business Rules that constrain operational processes5.  
* **Influencers**: Categorizes internal forces (such as resource availability, infrastructure, and organizational culture) and external forces (such as regulatory mandates, competitor actions, and emerging technologies) that impact the business5.  
* **Assessments**: Evaluates the specific impact of Influencers on Ends and Means using structured analytical methods, typically assessing Strengths, Weaknesses, Opportunities, and Threats (SWOT analysis)8.

Integrating BMM 1.3 into BABOK Strategy Analysis (Chapter 6\) ensures that business requirements generated during current and future state evaluations (§6.1, §6.2) are directly traceable to governing policies and strategic goals1.

### **TOGAF® Standard & ArchiMate® 3.1**

The Open Group Architecture Framework (TOGAF) and the ArchiMate 3.1 modeling language provide the structural foundation for business analysts operating in enterprise architecture roles2.

* **TOGAF Architecture Development Method (ADM) Phase B**: Establishes the baseline and target architecture definitions for organizational governance, structure, business functions, and key processes2.  
* **ArchiMate 3.1 Specification**: Offers a visual modeling language that defines explicit graphical notations across three core enterprise layers: the Business Layer (modeling process flows, functions, services, and business actors), the Application Layer (modeling application components, data interfaces, and software services), and the Technology Layer (modeling physical infrastructure, nodes, and network topology)2. ArchiMate also incorporates explicit Strategy and Motivation elements that directly map to BMM concepts2.

### **Industry Process Reference Models**

Standardized industry reference frameworks provide normalized taxonomies that allow business analysts to conduct rapid capability gap analyses and cross-industry benchmarking2:

* **APQC Process Classification Framework (PCF)**: Creates an open, cross-industry process taxonomy organized across four levels of depth (Category, Process Group, Process, Activity) to structure process architecture and functional decompositions2.  
* **Supply Chain Operations Reference (SCOR) and Value Reference Model (VRM)**: Provides specialized process modeling structures for end-to-end supply chain execution, logistics, and value chain optimization2.

| Standard / Framework | Governing Body | Primary Business Analysis Application | Mapped Practitioner Skills |
| :---- | :---- | :---- | :---- |
| **OMG BMM 1.3** | Object Management Group (OMG) | Business motivation modeling, policy and business rules specification, strategic alignment5 | strategy, business-architecture, ba-planning |
| **TOGAF ADM Phase B** | The Open Group | Baseline and target business architecture definition, capability gap analysis2 | architecture, business-architecture |
| **ArchiMate 3.1** | The Open Group | Structural modeling across strategy, business, application, and infrastructure layers2 | architecture, visual-modelling |
| **APQC PCF** | APQC | Normalized process taxonomies, business capability mapping, benchmarking2 | business-architecture, process-modelling |

## **Process Modeling, Decision Logic, and Workflow Standards**

Documenting operational workflows and enterprise decision logic requires syntactically rigorous, machine-interpretable notations1. Standardized process and decision models allow seamless execution in Business Process Management Systems (BPMS) and Automated Decision Engines1.

### **OMG Business Process Model and Notation (BPMN 2.0)**

BPMN 2.0 (standardized as ISO/IEC 19510\) represents the international standard for business process modeling1. It establishes an executable graphical notation designed to bridge the communication gap between business analysts, technical developers, and operational managers1.

* **Flow Objects**: Defines core process dynamics using Events (Start, Intermediate, End triggers), Activities (Atomic Tasks and multi-step Sub-processes), and Gateways (Exclusive/XOR for single branching, Inclusive/OR for multi-path branching, Parallel/AND for concurrent execution, and Event-Based gateways)4.  
* **Connecting Objects**: Establishes strict sequence rules using Sequence Flows (normal execution path within a pool), Message Flows (trans-pool communication between distinct actors), and Associations (attaching data objects or text annotations)4.  
* **Swimlanes**: Organizes responsibilities using Pools (representing autonomous business entities, systems, or organizations) and Lanes (representing internal roles, departments, or systems within a single pool)4.  
* **Execution Semantics**: Enforces strict mathematical execution semantics, allowing BPMN diagrams created during requirements definition to be deployed directly onto automated BPMS orchestration engines1.

### **OMG Decision Model and Notation (DMN 1.3)**

DMN 1.3 provides a standardized notation for operational decision-making and business logic that complements BPMN process models1. DMN decouples complex conditional business rules from process workflows, eliminating bloated process models filled with cascading decision gateways1.

* **Decision Requirements Diagrams (DRD)**: Graphically depicts the dependencies between decision nodes, business knowledge models, input data items, and knowledge sources2.  
* **Decision Tables**: Organizes rules into tabular formats using formal hit policies to determine execution results:  
  * *Single Hit Policies*: Unique (U) where only one rule can match; First (F) where the first matching rule triggers the output; Priority (P) where rule output precedence governs; and Any (A) where all matching rules yield identical outputs.  
  * *Multiple Hit Policies*: Collect (C) where outputs are aggregated into a list; Rule Order (R) where matching rules return an ordered list of outputs; and Output Order (O) where output values dictate priority.  
* **Friendly Enough Expression Language (FEEL)**: Provides a formal syntax designed for business analysts to write unambiguous, executable mathematical and logical expression rules without full programming code.

### **Lean, Six Sigma, and Value Stream Mapping Standards**

In addition to BPMN and DMN, business analysts apply specialized operational optimization standards:

* **SIPOC (Suppliers, Inputs, Process, Outputs, Customers)**: A foundational Six Sigma standard used during early scope modeling to define high-level process boundaries before engaging in detailed BPMN mapping2.  
* **Value Stream Mapping (VSM)**: A Lean management standard used to map the flow of information and materials required to bring a customer request to fulfillment, quantifying process metrics such as Cycle Time (CT), Changeover Time (C/O), Value-Added Time (VA), and Total Lead Time (LT)2.

| Standard / Notation | Governing Body | Core Modeling Components | Mapped Practitioner Skills |
| :---- | :---- | :---- | :---- |
| **BPMN 2.0 (ISO/IEC 19510\)** | OMG / ISO | Pools, Lanes, Events, Gateways, Tasks, Sequence/Message Flows1 | process-modelling, visual-modelling |
| **DMN 1.3** | OMG | Decision Requirements Diagrams (DRD), Decision Tables, FEEL Syntax1 | decision-analysis, business-analysis |
| **SIPOC & VSM** | Lean / ISO 13053 | High-level boundaries, cycle time, value-add vs. waste analysis2 | process-modelling, business-analysis |

## **Software Systems Specification and Visual Modeling Standards**

When business analysis transitions from operational process design to software system implementation, formal object-oriented and structural modeling notations are required to define software behavior, system boundaries, and structural constraints1.

### **OMG Unified Modeling Language (UML 2.5)**

UML 2.5 provides a comprehensive suite of structural and behavioral diagramming standards1. Business analysts draw upon a specific subset of UML diagrams to specify functional and non-functional software requirements1:  
Behavioral software modeling centers on Use Case Diagrams, Sequence Diagrams, Activity Diagrams, and State Machine Diagrams2. Use Case Diagrams define functional system scope by illustrating external human actors or secondary automated systems interacting with system boundaries2. They enforce formal relationship syntax, such as \<\<include\>\> relationships for mandatory sub-routines, \<\<extend\>\> relationships for conditional functional additions, and actor generalization hierarchies2. Sequence Diagrams capture temporal message exchanges between system lifelines, components, and user interfaces, detailing synchronous call patterns, asynchronous events, loops, and conditional execution blocks1. State Machine Diagrams detail the lifecycle dynamics of complex business entities, specifying valid entity states, transition triggers, guard conditions, and resulting entry/exit actions1.  
Structural software modeling relies primarily on Class Diagrams2. Class Diagrams model domain concepts, software objects, internal attributes, operational methods, and structural associations2. They enforce exact multiplicity constraints (such as 1..\* or 0..1), aggregation structures (representing weak whole-part relationships), and composition structures (representing strong whole-part lifecycles)2.

| UML Diagram Standard | Modeling Domain | BABOK Technique & Task Alignment | Mapped Practitioner Skills |
| :---- | :---- | :---- | :---- |
| **UML Use Case Diagram** | System Boundaries & Functional Scope | §10.47 Use Cases and Scenarios; §7.11 | requirements, product-owner |
| **UML Sequence Diagram** | Temporal Message Interactions & APIs | §10.42 Sequence Diagrams; §7.11 | architecture, visual-modelling |
| **UML State Machine Diagram** | Lifecycle Entity State Dynamics | §10.44 State Modelling; §7.11 | architecture, visual-modelling |
| **UML Class Diagram** | Structural Domain Concepts & Data | §10.15 Data Modelling; §7.1, §7.41 | data-modelling, architecture |

## **Data Engineering, Analytics, and Business Intelligence Standards**

Information technology perspectives and business intelligence initiatives demand standardized approaches to data definitions, logical/physical architecture, data quality, and enterprise data management1.

### **Relational Modeling and Entity Relationship Diagramming (ERD)**

Structural data analysis relies on formal diagramming conventions to define data entities, attributes, and relational dependencies2:

* **Information Engineering (IE) / Crow's Foot Notation**: The standard graphical syntax for conceptual and logical data modeling, establishing entity types, primary/foreign keys, and exact cardinality/optionality relationships2.  
* **Database Normalization Rules**: Algorithmic mathematical standards (First Normal Form through Fifth Normal Form / Boyce-Codd Normal Form) applied to eliminate data redundancy, update anomalies, and structural inconsistencies in relational data stores4.

### **Enterprise Data Governance and Metadata Standards**

* **DAMA-DMBOK2 (Data Management Body of Knowledge)**: The definitive framework for enterprise data management, providing governance standards across eleven data domains: Data Governance, Data Architecture, Data Modeling & Design, Data Storage & Operations, Data Security, Data Integration & Interoperability, Document & Content Management, Reference & Master Data, Data Warehousing & Business Intelligence, Metadata Management, and Data Quality.  
* **ISO/IEC 11179 (Metadata Registries)**: The international standard for defining, structuring, and registering data elements and data dictionaries, ensuring standard semantic data definitions across disparate IT systems2.  
* **ISO 8000**: The global standard for industrial data quality, establishing requirements for data quality management, master data exchange, and data provenance auditing.

### **Dimensional Modeling and Analytics Process Standards**

* **Kimball Dimensional Modeling Standard**: Establishes analytical data warehousing architecture standards, defining Fact tables, Dimension tables, Conformed Dimensions, Slowly Changing Dimensions (SCD Types 0 through 6), Star Schemas, and Snowflake Schemas2.  
* **CRISP-DM (Cross-Industry Standard Process for Data Mining)**: The standard process framework for data analytics and predictive modeling initiatives, structuring analytical project lifecycles into six iterative phases: Business Understanding, Data Understanding, Data Preparation, Modeling, Evaluation, and Deployment1.

| Standard | Governing Body | Domain Focus | Mapped Practitioner Skills |
| :---- | :---- | :---- | :---- |
| **IE / Crow's Foot ERD** | Information Engineering | Conceptual, logical, and physical data schema design2 | data-modelling, data-analysis |
| **DAMA-DMBOK2** | DAMA International | Enterprise data governance, data lifecycle management | data-analysis, information-management |
| **ISO/IEC 11179** | ISO / IEC | Data element dictionary & metadata registry structure2 | data-analysis, technical-writer |
| **CRISP-DM** | Open Consortium | Data mining lifecycle & advanced analytical discovery1 | data-analysis, business-intelligence |

## **Quality, Risk, Security, and Governance Standards**

Business analysts operate under strict internal governance frameworks, statutory regulations, and quality standards2. Requirements management must incorporate rigorous verification, risk analysis, and information security controls1.

### **ISO 31000:2018 (Risk Management Guidelines)**

ISO 31000 provides guidelines for managing risk within organizations3. Applied within BABOK Task 6.3 (*Assess Risks*) and Technique 10.38 (*Risk Analysis and Management*), ISO 31000 defines a structured risk treatment framework1:

* **Risk Identification**: Systematically discovering risk events, triggers, underlying causes, and systemic vulnerabilities2.  
* **Risk Analysis**: Quantifying risk severity by evaluating probability (likelihood of occurrence) against impact (consequence severity)2.  
* **Risk Evaluation**: Comparing calculated risk exposure against organizational risk appetite and tolerance thresholds2.  
* **Risk Treatment**: Selecting and executing formal risk response strategies: *Avoidance*, *Acceptance*, *Mitigation/Reduction*, or *Transfer/Sharing*2.

### **ISO/IEC 27001:2022 & ISO/IEC 27002 (Information Security Management)**

ISO/IEC 27001 specifies requirements for establishing, implementing, maintaining, and continually improving an Information Security Management System (ISMS)3. Business analysts specifying system features, non-functional security requirements, and access governance policies must align requirements packages with ISO 27002 security controls2:

* **Access Control Governance**: Defining Role-Based Access Control (RBAC) and Attribute-Based Access Control (ABAC) permissions using structured CRUD (Create, Read, Update, Delete) matrices2.  
* **Data Protection Requirements**: Specifying non-functional criteria for data masking, data anonymization, encryption at rest (AES-256), and encryption in transit (TLS 1.3)2.  
* **Audit Logging and Non-Repudiation**: Defining immutable logging requirements for high-value transactional systems to satisfy regulatory compliance auditing.

### **Requirements Quality Standards (ISO/IEC/IEEE 29148 & BABOK Criteria)**

To ensure that software specifications are complete and executable, requirements verification (BABOK §7.2) enforces nine normative quality characteristics specified jointly by BABOK v3 and ISO/IEC/IEEE 291481:

* **Atomic**: Contains a single requirement statement without conjunctions or compound logic4.  
* **Complete**: Fully defines the capability including necessary context, operational parameters, and constraints4.  
* **Consistent**: Free of structural or functional conflicts with other approved requirements4.  
* **Concise**: Stated succinctly without unnecessary narrative elaboration4.  
* **Feasible**: Capable of implementation within technical, financial, and schedule constraints4.  
* **Unambiguous**: Expressed such that only a single, objective interpretation exists4.  
* **Testable / Verifiable**: Stated such that conformance can be objectively verified via inspection, analysis, demonstration, or test4.  
* **Prioritized**: Assigned a formal value ranking relative to other project requirements4.  
* **Understandable**: Stated using clear business terminology derived directly from the project glossary4.

### **Software Testing and Quality Attributes (ISO 25010 & ISO 29119\)**

* **ISO/IEC 25010 (SQuaRE)**: Categorizes non-functional quality requirements into eight core characteristics: *Functional Suitability, Performance Efficiency, Compatibility, Usability, Reliability, Security, Maintainability, and Portability*1.  
* **ISO/IEC/IEEE 29119**: The international software testing standard, defining frameworks for test documentation, User Acceptance Testing (UAT) case design, and traceability verification back to original acceptance criteria2.

| Standard | Governing Body | Domain Focus | Mapped Practitioner Skills |
| :---- | :---- | :---- | :---- |
| **ISO 31000:2018** | ISO | Risk identification, risk analysis, and treatment strategies3 | risk-analysis, governance |
| **ISO/IEC 27001:2022** | ISO / IEC | Information security controls, RBAC/ABAC, data encryption3 | regulatory-compliance, governance |
| **ISO/IEC/IEEE 29148** | ISO / IEC / IEEE | Requirements engineering quality criteria & software specs2 | requirements, quality |
| **ISO/IEC 25010** | ISO / IEC | Non-functional quality attribute taxonomy (SQuaRE)1 | requirements, quality |
| **ISO/IEC/IEEE 29119** | ISO / IEC / IEEE | Software testing lifecycle, UAT specifications, traceability2 | acceptance-testing, quality |

## **Digital Accessibility, User Experience, and Interface Standards**

Modern business analysis mandates that user interface designs, visual prototypes, and digital customer channels satisfy international accessibility and usability standards2.

### **W3C Web Content Accessibility Guidelines (WCAG 2.1 / 2.2)**

WCAG 2.1 and WCAG 2.2 form the international technical standard for digital accessibility, organized around four foundational design principles (POUR)3:

* **Perceivable**: User interface components and visual information must be presentable to users in ways they can perceive7. Requirements must specify alternative text for non-text content, closed captions for multimedia, adaptable layouts, and precise visual contrast ratios (minimum 4.5:1 for standard text)7.  
* **Operable**: Interface navigation and interaction components must be fully operable via keyboard-only interfaces, providing users sufficient time to interact with content, avoiding seizure-inducing visual flashes, and maintaining intuitive focus navigation paths7.  
* **Understandable**: Textual content and operational interfaces must be predictable and readable7. Systems must provide automated input assistance, clear error identification, and inline guidance to assist users in correcting input mistakes7.  
* **Robust**: Digital content must be compatible with current and future user agents, including screen readers and screen magnifiers, requiring strict compliance with Accessible Rich Internet Applications (WAI-ARIA) markup standards7.

WCAG compliance is measured across three normative conformance levels: Level A (minimum baseline compliance), Level AA (the standard statutory requirement for commercial and public sector enterprises globally), and Level AAA (maximum specialized accessibility compliance)7.

### **ISO 9241 (Ergonomics of Human-System Interaction)**

ISO 9241 (specifically Part 210: *Human-centered design for interactive systems*) provides international standards for user-centered design processes, specifying iterative requirements for persona creation, user journey mapping, visual wireframing, and interactive prototyping2.

| Standard | Governing Body | Conformance Parameters | Mapped Practitioner Skills |
| :---- | :---- | :---- | :---- |
| **WCAG 2.1 / 2.2** | W3C / WAI | POUR Principles; Conformance Levels A, AA, AAA3 | ux, prototyping |
| **WAI-ARIA 1.2** | W3C | Accessibility markup tags for assistive technology / screen readers7 | ux, frontend-design |
| **ISO 9241-210** | ISO | Human-centered interactive systems design & usability metrics2 | ux, prototyping |

## **Financial Infrastructure, Payment Messaging, and Commercial Standards**

For initiatives involving banking, cross-border settlements, or treasury management, business analysts must operate within specialized financial messaging standards3. ISO 20022 represents a major global migration in transaction banking6.

### **ISO 20022 Universal Financial Industry Messaging Scheme**

ISO 20022 is the multi-part international standard prepared by ISO Technical Committee TC68 for financial services messaging6. It represents a comprehensive paradigm shift, replacing legacy SWIFT Message Type (MT) text strings (such as MT103, MT202, and MT940) with structured XML and JSON MX messaging schemas6.  
Message architectures under ISO 20022 are categorized into distinct message families designed for straight-through processing:

* **pacs (Payments Clearing and Settlement)**: Manages inter-bank financial settlements, including pacs.008 (Financial Institution Customer Credit Transfer, replacing legacy MT103)11, pacs.009 (Financial Institution Direct Credit Transfer, replacing MT202)11, and pacs.004 (Payment Returns)6.  
* **camt (Cash Management)**: Manages account reporting and cash visibility, including camt.053 (End-of-Day Bank-to-Customer Statement, replacing MT940)11, camt.052 (Intraday Bank Report)15, camt.054 (Debit/Credit Notification)15, and camt.056 (Payment Cancellation Request).  
* **pain (Payment Initiation and Advice)**: Governs customer-to-bank interaction channels, including pain.001 (Customer Credit Transfer Initiation) and pain.002 (Payment Status Report).

ISO 20022 mandates structured party data elements, requiring explicit data fields for Debtors, Creditors, Ultimate Debtors, Ultimate Creditors, Instructing Agents, and Instructed Agents6. Furthermore, under SWIFT Cross-Border Payments and Reporting (CBPR+) mandates, legacy unstructured postal address text lines are retired in favor of fully structured postal address fields (StreetName, BuildingNumber, PostCode, TownName, Country)6. This granular data structure drastically improves automated Anti-Money Laundering (AML) screening, sanction monitoring, and automated reconciliation, reducing transaction failure rates6.

### **SWIFT CBPR+ Network Protocols and Testing Standards**

Financial institutions transmit ISO 20022 messages across the SWIFTNet InterAct (FIN+) network, utilizing SWIFT Transaction Manager (TM) for cross-border data translation and truncation checks6. Business analysts working in transaction banking utilize SWIFT MyStandards and the Test Sparring Partner (TSP) platform to validate message payloads against specific High-Value Payment System (HVPS) clearing rules, such as TARGET2, CHAPS, and FedNow11.

### **Financial Accounting and Commercial Procurement Standards**

* **IFRS / GAAP**: International Financial Reporting Standards and Generally Accepted Accounting Principles governing financial analysis, business case development, net present value (NPV) calculations, and internal rate of return (IRR) models1.  
* **ISO 20400**: Governs sustainable procurement principles, establishing standard frameworks for vendor evaluation, Request for Proposal (RFP) structuring, Statement of Work (SOW) drafting, and Service Level Agreement (SLA) metrics2.

| Standard / Protocol | Domain | Impact on Business Analysis | Mapped Practitioner Skills |
| :---- | :---- | :---- | :---- |
| **ISO 20022 (CBPR+)** | Global Payment Messaging | Mandates structured data dictionaries for payment instructions and cash reporting6 | finance, regulatory-compliance, architecture |
| **SWIFT MyStandards** | Message Schema Validation | Validates payload compliance against regional clearing market rules11 | acceptance-testing, technical-writer |
| **IFRS / GAAP** | Financial Analysis | Governs ROI, NPV, and cost-benefit analysis in Business Cases1 | finance, estimation |
| **ISO 20400** | Procurement Governance | Standardizes RFPs, vendor evaluation, SOW drafting, and SLAs2 | vendor-evaluation, procurement-contracts |

## **Agile Delivery, Documentation, and AI Orchestration Standards**

Business analysis outputs must integrate with modern agile execution frameworks and professional technical communication standards1.

### **Agile Frameworks and Story Refinement Standards**

* **Agile Extension to the BABOK® Guide**: Extends core BABOK concepts across three agile planning horizons: the Strategic Horizon, the Initiative Horizon, and the Delivery Horizon1.  
* **Scrum Guide & Scaled Agile Framework (SAFe®)**: Defines backlog item hierarchies (*Epics*, *Features*, *User Stories*, *Enabler Stories*) and iteration delivery cadences2.  
* **INVEST Quality Criteria for User Stories**: Serves as a standard verification checklist for backlog refinement, dictating that user stories must be **I**ndependent, **N**egotiable, **V**aluable, **E**stimable, **S**mall, and **T**estable4.

### **Technical Communication, Plain Language, and AI Orchestration Standards**

* **ISO 24495-1:2023 (Plain Language)**: Establishes international standard guidelines for clear written communication, ensuring that business analysis packages, executive presentations, and regulatory proposals are understandable to their intended audiences.  
* **ISO/IEC/IEEE 26514:2022**: Defines structural and content requirements for developers of software user documentation and system specifications2.  
* **Generative AI Prompting and Agentic Orchestration Protocols**: Standardized operational patterns for structuring system prompts, context windows, and output evaluation rubrics when deploying Large Language Model (LLM) agents to automate business analysis documentation synthesis4.

| Standard | Governing Body | Application in Business Analysis | Mapped Practitioner Skills |
| :---- | :---- | :---- | :---- |
| **INVEST Criteria** | Agile Alliance | Quality control rubric for user story writing and backlog refinement4 | product-owner, agile-coach, requirements |
| **ISO 24495-1** | ISO | Plain language standards for business documents and executive briefs | communication, executive-review, natural-prose-editor |
| **ISO/IEC/IEEE 26514** | ISO / IEC / IEEE | Structural requirements for software specifications and manual documentation2 | technical-writer, proposal-writer |

## **MECE Master Cross-Mapping Matrix for All 39 Practitioner Skills**

The following master mapping matrix establishes complete coverage across every skill in the practitioner skill index3. It details the specific standards required, the primary BABOK v3 Knowledge Areas and tasks served, and the core deliverables produced1.

| \# | Skill Identifier | Primary Applicable Standards | Primary BABOK v3 Task Mapping | Core Deliverables & Artifacts Produced |
| :---- | :---- | :---- | :---- | :---- |
| 1 | risk-analysis | ISO 31000:2018, ISO/IEC 270053 | §6.3 Assess Risks1 | Risk Analysis Results, Risk Register2 |
| 2 | ba-planning | BABOK v3 Chapter 3 Framework1 | §3.1 Plan Business Analysis Approach1 | Business Analysis Approach2 |
| 3 | business-analysis | BABOK v3 BACCM™ Core Concept Model2 | §6.1 Analyze Current State1 | Current State Description, Business Requirements2 |
| 4 | strategy | OMG BMM 1.3, Balanced Scorecard4 | §6.2 Define Future State, §6.4 Define Change Strategy1 | Change Strategy, Business Objectives2 |
| 5 | business-architecture | TOGAF ADM Phase B, ArchiMate 3.1, APQC PCF2 | §7.4 Define Requirements Architecture1 | Business Capability Map, Value Stream Map2 |
| 6 | elicitation | ISO 20252, BABOK Chapter 41 | §4.1 Prepare for Elicitation, §4.2 Conduct Elicitation1 | Elicitation Results (Confirmed), Elicitation Plan2 |
| 7 | document-analysis | ISO/IEC 265142 | §4.2 Conduct Elicitation, §10.181 | Extracted Requirements & Business Rules2 |
| 8 | market-research | ISO 20252 (Market Research)2 | §10.4 Benchmarking & Market Analysis1 | Benchmarking Study, Market Analysis Report2 |
| 9 | requirements | ISO/IEC/IEEE 29148, BABOK Verify Criteria2 | §7.1 Specify & Model, §7.2 Verify, §7.3 Validate1 | Requirements Package, Verified Requirements2 |
| 10 | product-manager | SAFe®, Agile Extension to BABOK2 | §7.5 Define Design Options, §7.6 Recommend Solution1 | Product Vision Statement, Product Roadmap2 |
| 11 | product-owner | Scrum Guide, INVEST Criteria2 | §5.3 Prioritize Requirements, §10.21 | Product Backlog (Prioritized), User Stories2 |
| 12 | agile-coach | Agile Manifesto, Scrum/Kanban Frameworks2 | §3.1 Plan Approach (Agile Horizon)1 | Agile BA Approach, Retrospective Actions2 |
| 13 | ux | WCAG 2.1/2.2 (POUR), ISO 9241-210, WAI-ARIA3 | §7.1 Specify and Model Requirements1 | Wireframes, Personas, Storyboards2 |
| 14 | visual-modelling | UML 2.5, BPMN 2.0, ArchiMate 3.11 | §7.1 Specify and Model Requirements1 | Process Models, System Diagrams, Visuals2 |
| 15 | process-modelling | BPMN 2.0 (ISO/IEC 19510), SIPOC, VSM1 | §10.35 Process Modelling1 | BPMN Models (As-Is / To-Be)2 |
| 16 | data-modelling | IE / Crow's Foot ERD, UML Class Diagrams2 | §10.15 Data Modelling, §7.11 | Conceptual / Logical / Physical Data Models2 |
| 17 | data-analysis | ISO/IEC 11179, DAMA-DMBOK22 | §8.2 Analyze Performance Measures, §10.121 | Data Dictionary, Performance Metrics Report2 |
| 18 | business-intelligence | Kimball Dimensional Modeling, CRISP-DM2 | §11.2 Business Intelligence Perspective1 | Star/Snowflake Schemas, Dashboards, ETL Specs2 |
| 19 | architecture | TOGAF ADM, ISO/IEC/IEEE 420102 | §7.4 Define Requirements Architecture1 | Requirements Architecture, Solution Blueprint2 |
| 20 | prototyping | ISO 9241-210, WCAG 2.1/2.23 | §10.36 Prototyping, §7.11 | Rapid / Evolutionary Prototypes, Mock-ups2 |
| 21 | decision-analysis | OMG DMN 1.3, Decision Matrix Standards1 | §10.16 Decision Analysis, §10.171 | DMN Decision Tables, DRDs, Decision Matrices2 |
| 22 | estimation | PERT, COCOMO II, IFPUG Function Points1 | §10.19 Estimation, §3.11 | Effort & Cost Estimates (Ranged)2 |
| 23 | finance | IFRS / GAAP, ISO 20022 (Payments)1 | §10.20 Financial Analysis, §7.61 | Financial Analysis (ROI, NPV, IRR), Business Case2 |
| 24 | vendor-evaluation | ISO 20400 (Sustainable Procurement)2 | §10.49 Vendor Assessment, §7.51 | Vendor Assessment Report, Scoring Matrix2 |
| 25 | procurement-contracts | ISO 20400, Standard Commercial Frameworks2 | §8.4 Procurement Documents, §6.41 | RFP, RFI, RFQ, Statement of Work (SOW), SLA2 |
| 26 | quality | ISO/IEC 25010 (SQuaRE), ISO 90011 | §7.2 Verify Requirements, §10.371 | Verification Checklists, Quality Inspection Logs2 |
| 27 | acceptance-testing | ISO/IEC/IEEE 291192 | §10.1 Acceptance Criteria, §7.31 | Acceptance Criteria, UAT Test Specifications2 |
| 28 | solution-evaluation | BABOK v3 Chapter 8 Framework1 | §8.1 Measure Performance through §8.51 | Solution Performance Assessment, Recommendations2 |
| 29 | change-control | ITIL v4 Change Enablement, COBIT 20192 | §5.4 Assess Requirements Changes1 | Requirements Change Assessment, Impact Analysis2 |
| 30 | regulatory-compliance | ISO/IEC 27001, Domain Regulations (GDPR, ISO 20022\)3 | §3.3 Governance, §6.1 Current State1 | Compliance Matrix, Security & Regulatory Specs2 |
| 31 | information-management | ISO 15489 (Records Mgmt), DAMA-DMBOK22 | §3.4 Plan Information Management1 | Information Management Approach, Repository2 |
| 32 | governance | COBIT 2019, ITIL v4, ISO 310003 | §3.3 Plan BA Governance1 | Governance Approach, Decision Rights RACI2 |
| 33 | communication | ISO 24495-1 (Plain Language) | §4.4 Communicate BA Information1 | Business Analysis Package, Communication Plan2 |
| 34 | executive-review | ISO 24495-1, Minto Pyramid Principle | §7.6 Recommend Solution, §4.41 | Executive Presentation, Solution Brief2 |
| 35 | technical-writer | ISO/IEC/IEEE 26514:20222 | §7.1 Specify Requirements, §4.41 | Functional Specifications, Technical Requirements2 |
| 36 | proposal-writer | APMP Professional Standards | §10.7 Business Cases, §10.491 | Business Case Document, Formal RFP Response2 |
| 37 | natural-prose-editor | ISO 24495-1 (Plain Language) | §7.2 Verify Requirements1 | Refined Requirements Text, Policy Statement2 |
| 38 | prompt-master | Generative AI Prompting Standards4 | System Optimization | Structured System Prompts, Agentic Guardrails4 |
| 39 | orchestrator | Multi-Agent Orchestration Protocols4 | Enterprise BA Automation | Workflow Execution Specs, Evaluation Rubrics4 |

## **Strategic Implementation and Standards Governance**

Embedding formal standards into enterprise business analysis practices prevents structural quality degradation, compliance failures, and architectural drift2. To operationalize these standards effectively across an organization, business analysis leaders must execute four strategic governance imperatives:  
First, organizations should establish a unified Modeling and Repository Architecture1. By integrating modeling tools that natively support BPMN 2.0, DMN 1.3, UML 2.5, and ArchiMate 3.1, business analysts ensure that process diagrams, decision tables, data structures, and architectural maps remain dynamically linked1. This eliminates passive, disconnected documentation and allows business models to feed directly into execution engines1.  
Second, organizations must implement automated Quality Gateways for Requirements Engineering2. Adopting ISO/IEC/IEEE 29148 quality characteristics alongside the BABOK verification framework provides an objective rubric for evaluating requirements specifications2. Natural language processing tools and automated evaluation agents can linter-check user stories and functional requirements packages for ambiguous language, compound sentences, missing acceptance criteria, or non-traceable components prior to formal approval2.  
Third, business analysis practice must build Domain-Specific Standards directly into project intake templates2. For initiatives touching financial payments, elicitation packages and data dictionaries must mandate ISO 20022 XML structured party data and address schemas from project kickoff6. For digital product development, user story definition definitions of done must mandate WCAG 2.1/2.2 Level AA accessibility compliance criteria3.  
Finally, risk management and security governance must be embedded directly into Requirements Analysis and Design Definition (§7.5)1. Aligning requirements architectures with ISO 31000 risk treatment workflows and ISO/IEC 27001 information security controls ensures that access matrices, encryption rules, and audit logging parameters are captured as standard non-functional requirements rather than retrofitted late in the software development lifecycle1.

#### **Works cited**

> 1. BABOK v.3.0 \- IIBA \- A Guide to the Business Analysis Body of Knowledge-International Institute of Business Analysis (2015).pdf  
> 2. BABOK\_v3\_Deliverables\_Artefacts\_Documents\_Catalogue.md  
> 3. index.md  
> 4. BABOK\_v3\_Artefacts\_Register.xlsx  
> 5. Business Motivation Model \- Wikipedia, [https://en.wikipedia.org/wiki/Business\_Motivation\_Model](https://en.wikipedia.org/wiki/Business_Motivation_Model)  
> 6. ISO 20022 \- The new language of payments \- HSBC Corporate and Institutional Banking, [https://www.business.hsbc.com/en-gb/campaigns/iso20022](https://www.business.hsbc.com/en-gb/campaigns/iso20022)  
> 7. WCAG 2 Overview | Web Accessibility Initiative (WAI) \- W3C, [https://www.w3.org/WAI/standards-guidelines/wcag/](https://www.w3.org/WAI/standards-guidelines/wcag/)  
> 8. The Complete Guide to the Business Motivation Model (BMM) \- ArchiMetric, [https://www.archimetric.com/the-complete-guide-to-the-business-motivation-model-bmm/](https://www.archimetric.com/the-complete-guide-to-the-business-motivation-model-bmm/)  
> 9. BMM-OMG.pdf \- Business Rules Group, [https://www.businessrulesgroup.org/bmm/BMM-OMG.pdf](https://www.businessrulesgroup.org/bmm/BMM-OMG.pdf)  
> 10. What is Business Motivation Model (BMM)? \- Visual Paradigm, [https://www.visual-paradigm.com/guide/project-management/what-is-business-motivation-model/](https://www.visual-paradigm.com/guide/project-management/what-is-business-motivation-model/)  
> 11. ISO 20022 for banks and non-bank PSPs \- Barclays Corporate Banking, [https://www.barclayscorporate.com/insights/iso-for-banks/](https://www.barclayscorporate.com/insights/iso-for-banks/)  
> 12. ISO 20022 message standard, [https://iso20022.com/summary](https://iso20022.com/summary)  
> 13. ISO 20022 \- Standard Bank Group, [https://corporateandinvestment.standardbank.com/cib/global/products-and-services/transactional-products-and-services/industry-innovation/iso-20022](https://corporateandinvestment.standardbank.com/cib/global/products-and-services/transactional-products-and-services/industry-innovation/iso-20022)  
> 14. ISO 20022 | ISO20022, [https://www.iso20022.org/](https://www.iso20022.org/)  
> 15. ISO 20022 for Financial Institutions \- Swift, [https://www.swift.com/standards/iso-20022/iso-20022-financial-institutions-focus-payments-instructions](https://www.swift.com/standards/iso-20022/iso-20022-financial-institutions-focus-payments-instructions)