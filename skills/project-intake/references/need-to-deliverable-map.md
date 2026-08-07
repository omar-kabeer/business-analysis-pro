# Need to Deliverable Map

Turns a classified project into the BABOK deliverable set it actually needs. Read the baseline set, add the archetype set, then overlay the stage and regulatory additions. Every row names the owning OS skill so the plan is executable. Cut anything the project does not need and say why.

Document names trace to the BABOK v3 catalogue. Do not prescribe the whole catalogue; prescribe the subset that fits.

---

## Baseline set (almost every project)

These earn their place on nearly any change initiative. Start here.

| Document | Why | Owning skill |
| --- | --- | --- |
| Statement of need / problem statement | Anchors everything to a real business problem, not a solution in search of one | business-analysis |
| Business objectives and potential value | Defines success and the value to be delivered (BABOK 6.2) | business-analysis, finance |
| Stakeholder list, map, or RACI | Names who is affected, who decides, who must be engaged (10.43) | elicitation, business-analysis |
| Scope statement / solution scope | Fixes what is in and out before work spreads (6.4) | business-analysis |
| Assumptions and unknowns log | Surfaces what is guessed so it can be tested, not buried | elicitation |
| Risk register | Records exposure and mitigation early (6.3, 10.38) | risk-analysis |
| Requirements traceability matrix | Links need to requirement to design to test to value (5.1) | governance, business-analysis |

## Archetype sets

Pick the closest archetype, or blend two. Add these on top of the baseline.

### A. New software product or app build
| Document | Why | Owning skill |
| --- | --- | --- |
| Product vision and roadmap | Sets direction and sequencing before build | product-manager |
| BRD / FRD / SRS or PRD | The requirement specification the team builds to | requirements |
| Non-functional requirements | Performance, security, availability the build must meet (10.30) | requirements |
| Process and data models | Shows behaviour and information the solution manages (10.15, 10.35) | process-modelling, data-modelling |
| Backlog with epics and stories | Turns requirements into buildable work (10.48) | product-owner |
| Prototype or wireframes | De-risks the design before code (10.36) | prototyping, ux |
| Acceptance criteria and UAT plan | Defines done and how it is proven (10.1) | acceptance-testing |

### B. Process improvement or operational change
| Document | Why | Owning skill |
| --- | --- | --- |
| Current-state (as-is) process model | Establishes the baseline being improved (10.35) | process-modelling |
| Root cause analysis | Finds the real cause, not the symptom (10.40) | business-analysis |
| Future-state (to-be) process model | Shows the improved process (6.2) | process-modelling |
| Gap analysis | Names the change from as-is to to-be (6.4) | business-analysis |
| Change strategy and transition requirements | How to move to the new process, including training and cutover | business-analysis, change-control |
| Process performance measures | Proves the improvement landed | data-analysis, solution-evaluation |

### C. System replacement, migration, or modernization
| Document | Why | Owning skill |
| --- | --- | --- |
| Current-state system and process analysis | Documents what is being replaced | business-analysis |
| Data model and migration mapping | Maps source to target data, the highest-risk part of a migration (10.15) | data-modelling |
| Interface and integration analysis | Catalogues the connections that must survive the change (10.24) | architecture, requirements |
| Requirements (functional and non-functional) | Specifies the replacement | requirements |
| Transition requirements and cutover plan | Data conversion, parallel run, rollback, business continuity | business-analysis, change-control |
| Enterprise readiness assessment | Confirms the organisation can absorb the change (6.4) | governance, solution-evaluation |

### D. Vendor or package selection (buy, not build)
| Document | Why | Owning skill |
| --- | --- | --- |
| Business and solution requirements | The needs the package must meet, before shortlisting | requirements |
| RFI / RFP / RFQ | The formal solicitation to the market (Section 8) | procurement-contracts |
| Weighted scoring / decision matrix | Compares vendors against criteria, defensibly (10.16) | decision-analysis, vendor-evaluation |
| Vendor assessment report | The evaluation and recommendation (10.49) | vendor-evaluation |
| SOW and SLA | The contract terms and service measures | procurement-contracts |
| Business case | Justifies the spend and the choice | finance, executive-review |

### E. Data, BI, or analytics initiative
| Document | Why | Owning skill |
| --- | --- | --- |
| Reporting and information requirements | What questions the solution must answer | business-intelligence, requirements |
| Source and target logical data models | The data on both sides of the pipeline (11.2) | data-modelling, business-intelligence |
| Data dictionary and metadata definitions | Shared meaning for every field (10.12) | data-modelling |
| ETL and warehouse or mart design | How data moves and lands | business-intelligence |
| KPI and metric definitions | Defines the numbers and their targets (10.28) | data-analysis |
| Dashboard and report specifications | The delivery layer users see | business-intelligence, data-analysis |

### F. Regulatory or compliance-driven change
| Document | Why | Owning skill |
| --- | --- | --- |
| Regulatory requirements and obligations register | The rules that must be met, traced to source | regulatory-compliance |
| Compliance gap analysis | Current compliance versus required | regulatory-compliance, business-analysis |
| Requirements traced to each obligation | Proves every rule is covered | requirements, governance |
| Risk and control assessment | Exposure and the controls that reduce it | risk-analysis |
| Audit trail and evidence pack | What an auditor will ask to see | governance, regulatory-compliance |
| Matching domain pack artefacts | Domain-specific checklists and mappings | see `domain-packs/` |

### G. Business case or feasibility only (pre-project)
| Document | Why | Owning skill |
| --- | --- | --- |
| Current-state and problem analysis | Frames the problem worth solving (6.1) | business-analysis |
| Options and design options | The alternatives considered, including do nothing (7.5) | strategy, decision-analysis |
| Financial analysis (ROI, NPV, payback) | The numbers behind the case (10.20) | finance |
| Feasibility study | Viability across technical, operational, and financial lenses | strategy, finance |
| Business case | The decision document itself (10.7) | finance, executive-review |
| Executive summary / board paper | The version the decision-makers read | executive-review |

### H. Organisational or operating-model change
| Document | Why | Owning skill |
| --- | --- | --- |
| Business capability map | Anchors the change to capabilities, not org boxes (11.4) | business-architecture |
| Current and future operating model | The shape of the organisation before and after | business-architecture, strategy |
| Stakeholder impact analysis | How each group is affected (8.4) | business-analysis |
| Organisational model and role changes | New roles, responsibilities, reporting (10.32) | business-architecture |
| Change strategy and readiness assessment | How the change is absorbed (6.4) | governance, solution-evaluation |

## Stage overlay

Add or defer documents based on where the project is now. Do not prescribe downstream artefacts before their inputs exist.

| Stage | Emphasise | Defer |
| --- | --- | --- |
| Idea / discovery | Need, stakeholders, current state, assumptions | Detailed requirements, design, test artefacts |
| Business case / approval | Options, financial analysis, business case, risk | Backlog, models, UAT |
| Requirements / analysis | Requirements, models, traceability, NFRs | Cutover, performance measures |
| Design / solution | Design options, architecture, prototypes, data and interface models | Post-implementation review |
| Build / delivery | Backlog, acceptance criteria, change control | New elicitation, unless scope shifts |
| Test / acceptance | UAT plan and scenarios, defect log, release readiness | Fresh requirements |
| Deploy / transition | Transition requirements, readiness assessment, runbook | |
| Post-implementation / value | Performance analysis, benefits realisation, lessons learned (KA 8) | |

## Delivery-approach overlay

- **Agile.** Favour vision, roadmap, backlog, stories, acceptance criteria, and lightweight "barely sufficient" documentation. Keep the baseline set, but hold it thin and living.
- **Waterfall.** Favour fuller, sequenced, signed-off documents: BRD or SRS, design specs, formal traceability, phase-gate approvals.
- **Hybrid.** Fix the outer envelope (business case, scope, architecture) and run delivery iteratively inside it.

## Right-sizing rules

- Prescribe the smallest set that makes the project safe to run and its decisions defensible.
- If two documents would say the same thing for this project, prescribe one and note the merge.
- Always show a short "not needed yet, and why" list. Over-documentation is a failure mode, not thoroughness.
- Every prescribed document must trace to a need, a decision, a risk, or a compliance obligation. If it traces to none, cut it.
