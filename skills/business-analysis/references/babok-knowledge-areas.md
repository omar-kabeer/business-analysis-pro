# BABOK v3 Reference for the Business Analysis Skill

A working reference distilled from the IIBA Guide to the Business Analysis Body of Knowledge, version 3 (2015). It exists so the business-analysis skill can operate as a professional, standards-based analyst: framing needs, running the right tasks, choosing fit-for-purpose techniques, and producing traceable, value-focused analysis. Load the section relevant to the current step rather than reading the whole file.

BABOK describes generally accepted practice, not a mandatory process. Tasks can run in any order as long as their inputs exist, and every approach is tailored to context. Use this reference as structured judgement, not a checklist to run mechanically.

## Contents

1. What business analysis is
2. Business Analysis Core Concept Model (BACCM)
3. Requirements classification schema
4. Requirements and designs
5. Stakeholders (generic roles)
6. The standard task structure
7. Knowledge Area 1: Business Analysis Planning and Monitoring
8. Knowledge Area 2: Elicitation and Collaboration
9. Knowledge Area 3: Requirements Life Cycle Management
10. Knowledge Area 4: Strategy Analysis
11. Knowledge Area 5: Requirements Analysis and Design Definition (RADD)
12. Knowledge Area 6: Solution Evaluation
13. Underlying competencies
14. Techniques catalogue (the 50 BABOK techniques)
15. Perspectives
16. Technique-to-task quick guide
17. How to run a BABOK-grade analysis in this OS

## 1. What business analysis is

Business analysis is the practice of enabling change in an enterprise by defining needs and recommending solutions that deliver value to stakeholders. It lets an enterprise articulate needs and the rationale for change, and design and describe solutions that deliver value. It is performed on strategic, tactical, and operational initiatives, inside a project or across continuous improvement, to understand the current state, define the future state, and determine the work to move between them.

Three knowledge areas span the project life cycle: Strategy Analysis (pre-project rationale), Requirements Analysis and Design Definition (delivery), and Solution Evaluation (post-project benefits).

## 2. Business Analysis Core Concept Model (BACCM)

The BACCM is the conceptual spine of the profession: six equal concepts, each defined by the other five. Use them as a framing and completeness lens on any initiative. If you cannot answer all six for a change, the analysis has a gap.

- Change: the act of transformation in response to a need. Deliberate and controlled through business analysis.
- Need: a problem or opportunity to be addressed. Needs motivate change; change can also create new needs.
- Solution: a specific way of satisfying one or more needs in a context. It resolves a problem or lets stakeholders seize an opportunity.
- Stakeholder: a group or individual with a relationship to the change, the need, or the solution, defined by interest, impact, and influence.
- Value: the worth, importance, or usefulness of something to a stakeholder in a context. Tangible (directly measurable, often monetary) or intangible (measured indirectly, such as reputation or morale). Often assessed relatively (one option is more valuable than another).
- Context: the circumstances that influence and are influenced by the change (attitudes, competitors, culture, goals, processes, technology, regulation, and more).

Practical use: at any decision point, restate the six concepts to check that the need is clear, the value is defined, the stakeholders are identified, the context is understood, and the proposed change and solution actually fit.

## 3. Requirements classification schema

Classify every requirement so scope and traceability stay clean:

- Business requirements: goals, objectives, and outcomes that describe why a change was initiated. They apply to the enterprise, a business area, or an initiative.
- Stakeholder requirements: the needs of specific stakeholders that must be met to achieve the business requirements. They bridge business and solution requirements.
- Solution requirements: the capabilities and qualities a solution must have. Split into:
  - Functional requirements: the behaviour and information the solution manages.
  - Non-functional requirements (quality of service): performance, security, reliability, usability, and similar attributes, always quantified.
- Transition requirements: capabilities the solution needs only to move from current to future state (data conversion, training, cutover). They are temporary and retired after transition.

## 4. Requirements and designs

A requirement is a usable representation of a need. A design is a usable representation of a solution. The distinction is about intent, not format: the same model can be a requirement in one moment and a design in the next. Keep asking whether a statement expresses a need (what must be true) or a solution choice (how it will be met), and label it so requirements do not silently harden into premature design.

## 5. Stakeholders (generic roles)

The generic stakeholder roles BABOK uses. A single person can hold several roles, and each role can contain many individuals.

- Business analyst: responsible and accountable for the business analysis work itself.
- Customer: uses or may use the products or services of the enterprise, sometimes with contractual or moral rights.
- Domain subject matter expert: deep knowledge of a topic relevant to the need or solution (managers, process owners, legal, consultants).
- End user: interacts directly with the solution.
- Implementation subject matter expert: specialist knowledge of building the solution (solution architect, developer, DBA, information architect, usability analyst, trainer, change consultant).
- Operational support: day-to-day running and maintenance (operations analyst, help desk, release manager).
- Project manager: manages the work to deliver the solution and balances the project constraints.
- Regulator: defines and enforces standards, laws, or rules the change must satisfy.
- Sponsor: authorises and champions the change and provides funding.
- Supplier: an external party that provides products or services to the enterprise.
- Tester: verifies that the solution meets requirements and quality standards.

Analyse stakeholders on interest, impact, and influence (for example a power/interest grid and a RACI), and plan engagement accordingly.

## 6. The standard task structure

Every BABOK task follows the same anatomy. Use it as the mental template when performing any analysis step:

- Purpose: why the task is done and the value it creates.
- Description: what it is and what it should accomplish.
- Inputs: information the task consumes (an input marked external comes from outside business analysis).
- Elements: the key concepts and sub-activities that make up the task.
- Guidelines and Tools: resources that shape how the input becomes an output.
- Techniques: the ways the task can be performed (see the catalogue in section 14).
- Stakeholders: who participates or is affected.
- Outputs: what the task produces, in a form suited to the initiative.

## 7. Knowledge Area 1: Business Analysis Planning and Monitoring

Purpose: organise and coordinate the business analysis effort itself. Its outputs guide the tasks in every other knowledge area.

Tasks:

- Plan Business Analysis Approach: decide how analysis will be performed (predictive, adaptive, or hybrid), the deliverables, activities, timing, and rigour.
- Plan Stakeholder Engagement: identify stakeholders, analyse their characteristics (interest, impact, influence, attitude), and plan collaboration and communication.
- Plan Business Analysis Governance: define how requirements and design decisions are prioritised, changed, and approved, and who decides.
- Plan Business Analysis Information Management: define how business analysis information is stored, accessed, traced, and reused at the right level of detail.
- Identify Business Analysis Performance Improvements: monitor how the analysis work is performing against metrics and improve the approach.

## 8. Knowledge Area 2: Elicitation and Collaboration

Purpose: draw out and confirm business analysis information and sustain stakeholder collaboration throughout.

Tasks:

- Prepare for Elicitation: define the scope and objectives of an elicitation activity and organise the logistics, participants, and supporting materials.
- Conduct Elicitation: draw out information using interviews, workshops, observation, document analysis, prototyping, surveys, and similar techniques.
- Confirm Elicitation Results: check the captured information for accuracy and consistency with other information and with the stakeholders.
- Communicate Business Analysis Information: give stakeholders the information they need, in the right form, at the right time.
- Manage Stakeholder Collaboration: keep stakeholders engaged, manage relationships and conflict, and sustain participation.

(See the elicitation skill for the operational discovery workflow and technique selection.)

## 9. Knowledge Area 3: Requirements Life Cycle Management

Purpose: manage requirements and designs from inception through retirement, keeping them traceable, current, prioritised, and approved.

Tasks:

- Trace Requirements: maintain relationships among requirements, designs, solution components, and other work products so coverage and change impact are visible.
- Maintain Requirements: keep requirements correct and current over time and maximise their reuse.
- Prioritize Requirements: rank requirements by value, risk, dependency, cost, and other factors so the most important work is done first.
- Assess Requirements Changes: evaluate proposed changes for benefit, cost, impact, and alignment before deciding.
- Approve Requirements: obtain agreement and sign-off from the right stakeholders.

(See the governance skill for traceability matrices, change control, and decision logs.)

## 10. Knowledge Area 4: Strategy Analysis

Purpose: identify the strategic need, define the desired future state, assess risk, and define a change strategy. This is where the rationale for change is established.

Tasks:

- Analyze Current State: understand the business need in the context of the current enterprise, its capabilities, processes, culture, and external environment.
- Define Future State: define the desired future goals, objectives, capabilities, and the value expected, plus how success is measured.
- Assess Risks: identify and analyse uncertainties that could affect the value of the change, and plan responses.
- Define Change Strategy: develop and choose the approach to move from current to future state, including transition states and a change roadmap.

(See the strategy skill for framework selection and options analysis.)

## 11. Knowledge Area 5: Requirements Analysis and Design Definition (RADD)

Purpose: structure and specify requirements and designs, verify and validate them, and recommend the solution that delivers the most value.

Tasks:

- Specify and Model Requirements: analyse, structure, and represent requirements and designs using text, matrices, and diagrams at the right level of detail.
- Verify Requirements: check that requirements and designs are of sufficient quality (clear, complete, consistent, correct, feasible, testable).
- Validate Requirements: confirm that requirements and designs deliver the intended business value and align to business goals.
- Define Requirements Architecture: ensure requirements collectively support one another and form a coherent whole, with a clear structure and viewpoints.
- Define Design Options: identify solution approaches, allocate requirements across components, and describe viable design options.
- Analyze Potential Value and Recommend Solution: estimate the value of each option, weigh trade-offs, and recommend the option that best meets the need.

(See the requirements skill for specification quality rules and the quality skill for verification.)

## 12. Knowledge Area 6: Solution Evaluation

Purpose: assess the performance and value of a solution in use and recommend how to increase it.

Tasks:

- Measure Solution Performance: agree the measures and collect data on how the solution performs against the value it should deliver.
- Analyze Performance Measures: interpret the measures to understand the value being delivered.
- Assess Solution Limitations: find where the solution itself limits value (defects, gaps, poor design).
- Assess Enterprise Limitations: find where the surrounding enterprise (process, structure, culture, policy) limits value.
- Recommend Actions to Increase Solution Value: recommend changes to remove barriers and raise the value delivered (adjust, replace, retire, or invest further).

## 13. Underlying competencies

The behaviours, knowledge, and characteristics that support effective business analysis. Draw on them as needed:

- Analytical Thinking and Problem Solving: creative and critical thinking, decision making, learning, problem solving, systems thinking, conceptual thinking, visual thinking.
- Behavioural Characteristics: ethics, personal accountability, trustworthiness, organisation and time management, adaptability.
- Business Knowledge: business acumen, industry knowledge, organisation knowledge, solution knowledge, methodology knowledge.
- Communication Skills: verbal, non-verbal, written, and listening.
- Interaction Skills: facilitation, leadership and influencing, teamwork, negotiation and conflict resolution, teaching.
- Tools and Technology: office productivity, business analysis tools, and communication technology.

## 14. Techniques catalogue (the 50 BABOK techniques)

Each technique is a means to perform one or more tasks. Choose techniques for the task and context; combine them freely. Purposes below are concise selection cues.

1. Acceptance and Evaluation Criteria: define pass conditions for requirements and criteria for comparing solution options.
2. Backlog Management: record, prioritise, and manage a list of outstanding work items.
3. Balanced Scorecard: measure performance across financial, customer, internal process, and learning and growth perspectives.
4. Benchmarking and Market Analysis: compare practices and offerings against peers and the market to find improvement.
5. Brainstorming: generate many ideas quickly in a group without early judgement.
6. Business Capability Analysis: map what an enterprise can do (capabilities) and find performance and priority gaps.
7. Business Cases: justify an investment with costs, benefits, risks, and alignment (hand quantification to the finance skill).
8. Business Model Canvas: describe how an enterprise creates, delivers, and captures value on one page.
9. Business Rules Analysis: identify and manage the rules that govern decisions and behaviour.
10. Collaborative Games: use structured play to surface shared understanding and hidden assumptions.
11. Concept Modelling: define a shared vocabulary and the relationships among core business ideas.
12. Data Dictionary: standardise definitions of data elements and their allowed values.
13. Data Flow Diagrams: show how data moves through processes, stores, and external entities.
14. Data Mining: discover patterns and relationships in large data sets.
15. Data Modelling: describe the entities, attributes, and relationships in a domain.
16. Decision Analysis: evaluate options under uncertainty using structured criteria and trade-offs.
17. Decision Modelling: represent repeatable decisions and the logic and rules behind them.
18. Document Analysis: extract information from existing materials (contracts, systems, procedures).
19. Estimation: forecast cost, effort, time, or value with a stated confidence range.
20. Financial Analysis: assess the financial return and viability of a change (NPV, IRR, payback; see the finance skill).
21. Focus Groups: gather attitudes and ideas from a representative group in a guided discussion.
22. Functional Decomposition: break a complex system, process, or problem into smaller parts.
23. Glossary: maintain agreed definitions of business terms to prevent ambiguity.
24. Interface Analysis: identify and define interactions between systems, people, or components.
25. Interviews: elicit information one to one or in small groups through structured or open questions.
26. Item Tracking: capture and manage issues, risks, actions, and open questions to closure.
27. Lessons Learned: capture what worked and what did not to improve future work.
28. Metrics and Key Performance Indicators: define measures that show whether objectives are being met.
29. Mind Mapping: organise ideas and their relationships visually to aid thinking.
30. Non-Functional Requirements Analysis: define and quantify quality attributes (performance, security, usability).
31. Observation: study people doing their work to understand what really happens.
32. Organizational Modelling: describe roles, responsibilities, and reporting relationships.
33. Prioritization: rank items by value, risk, cost, or dependency (MoSCoW, ranking, time-boxing).
34. Process Analysis: examine a process to find inefficiency and improvement opportunities.
35. Process Modelling: describe the sequence of activities, decisions, and flows in a process (for example BPMN).
36. Prototyping: build a partial or mock solution to explore and validate requirements early.
37. Reviews: examine a work product with stakeholders to find defects and reach agreement.
38. Risk Analysis and Management: identify, assess, and plan responses to uncertainty (see governance).
39. Roles and Permissions Matrix: define who can do what, to support access control and segregation of duties.
40. Root Cause Analysis: find the underlying cause of a problem, not the symptom (5 whys, fishbone).
41. Scope Modelling: define the boundaries of the change, what is in and out of scope.
42. Sequence Diagrams: show how components or actors interact over time to complete a scenario.
43. Stakeholder List, Map, or Personas: identify and characterise stakeholders and their relationships.
44. State Modelling: describe the states of an object and the events that move it between them.
45. Survey or Questionnaire: gather information from many people in a structured, comparable way.
46. SWOT Analysis: assess strengths, weaknesses, opportunities, and threats.
47. Use Cases and Scenarios: describe how actors interact with a solution to achieve a goal, including alternate paths.
48. User Stories: capture a need concisely from a role, with value and acceptance criteria (see product-owner).
49. Vendor Assessment: evaluate a supplier's ability to meet commitments and quality standards.
50. Workshops: bring stakeholders together to elicit, refine, or decide in a facilitated session.

## 15. Perspectives

Perspectives are lenses that adapt business analysis to a context. One or many can apply. Signal which perspective is in play so techniques and emphasis fit:

- Agile: continuous, incremental analysis with just-in-time detail, close collaboration, and a managed backlog.
- Business Intelligence: analysis of data sourcing, transformation, reporting, and analytics to support decisions.
- Information Technology: analysis focused on IT systems, integration, data, and the software delivery life cycle.
- Business Architecture: enterprise-level capabilities, value streams, and alignment of strategy to operating model.
- Business Process Management: end-to-end processes, their design, automation, and continuous improvement.

## 16. Technique-to-task quick guide

- Frame the problem and current state: Root Cause Analysis, Business Capability Analysis, Process Analysis and Modelling, SWOT, Document Analysis, Scope Modelling.
- Understand stakeholders: Stakeholder List Map or Personas, Organizational Modelling, Roles and Permissions Matrix, Interviews.
- Define the future state and strategy: Business Model Canvas, Balanced Scorecard, Decision Analysis, Financial Analysis, Business Cases, Benchmarking and Market Analysis.
- Elicit: Interviews, Workshops, Observation, Survey or Questionnaire, Prototyping, Focus Groups, Brainstorming, Collaborative Games.
- Specify and model: Use Cases and Scenarios, User Stories, Data Modelling, Data Flow Diagrams, State Modelling, Sequence Diagrams, Business Rules Analysis, Decision Modelling, Concept Modelling, Non-Functional Requirements Analysis, Data Dictionary, Functional Decomposition, Interface Analysis.
- Manage the life cycle: Backlog Management, Prioritization, Item Tracking, Reviews, Acceptance and Evaluation Criteria, Metrics and KPIs.
- Evaluate the solution: Metrics and KPIs, Acceptance and Evaluation Criteria, Risk Analysis, Decision Analysis, Lessons Learned.

## 17. How to run a BABOK-grade analysis in this OS

1. Frame with the BACCM: state the need, the value, the stakeholders, the context, and the change and solution under consideration. Note any concept you cannot yet answer.
2. Establish the current state and the business need (Strategy Analysis). Separate symptom from root cause.
3. Define the future state and the measures of success. Assess risk and outline a change strategy.
4. Plan the analysis and stakeholder engagement proportionate to the initiative (Planning and Monitoring). Do not over-govern a small change or under-govern a large one.
5. Elicit and confirm information with fit-for-purpose techniques (Elicitation and Collaboration). Separate fact from opinion and attribute sources.
6. Specify and model requirements, classify them (business, stakeholder, solution functional and non-functional, transition), verify and validate them, and keep them traceable (RADD and Requirements Life Cycle Management).
7. Define and compare design options, estimate value, and recommend a solution with explicit trade-offs.
8. After delivery, measure solution performance and recommend actions to increase value (Solution Evaluation).
9. Throughout, maintain traceability from need to requirement to design to solution component to test, and tailor rigour to context. Traceability and tailoring are what make the analysis auditable and professional.

Run the natural-prose-editor pass on any narrative output and use no em dashes, per docs/methodology/editorial-style.md.
