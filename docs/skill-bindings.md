# Skill Bindings

Registry version: 1.2.0

This registry resolves Section C of the coverage backlog: the skill references in `BABOK_v3_Artefacts_Register.xlsx` that point at capabilities not compiled into the Business Analysis OS. Each row records how the gap is closed, either by an OS skill that already covers the need, a new OS capability authored for it, or an external plugin bound as an optional pool member of the owning agent.

The register named external plugin skills (for example `frontend-design`, `figma:*`, `data:*`, `legal:*`) because those were the tools in front of the person who built the register. The OS is declarative methodology, so the default resolution is an OS skill that owns the artefact class. An external plugin is bound only where it adds a build or tooling capability the OS skill does not, and then as an optional pool member: the artefact still routes to the OS agent, which may call the external tool when it is available.

## How to read a decision

- OS skill covers it: the named OS skill already owns this artefact class. No new file is needed.
- Authored capability: a new OS skill was authored for this reference.
- Bind external (optional): the OS skill owns the artefact; the named external plugin may be attached as a pool member to do the build or generation step when present. Absence of the plugin does not block the OS skill from producing the artefact at the methodology level.

## Registry

| Register skill ref | Owning agent | Resolution | OS skill or authored capability | External plugin to bind (optional) | Artefacts unblocked |
| --- | --- | --- | --- | --- | --- |
| Reference standard / knowledge base | Synthesis & Drafting; Visual Modeling | Authored capability | `reference-standards` (new) | none | Lightweight documentation; reference models and frameworks (Zachman, TOGAF, ArchiMate, APQC PCF, SCOR, VRM, FEA); repository of reference models; SAFe program and portfolio artefacts; supporting notations (BPMN, SIPOC, swimlane, FMEA) |
| Technique skill (estimates) | Synthesis & Drafting | OS skill covers it | `estimation` (existing) | none | Estimates, cost and effort forecasts with ranges |
| `data:statistical-analysis`; `data:analyze` | Visual Modeling | OS skill covers it; bind external optional | `data-analysis` | a statistical-analysis plugin, when a live analysis is required | Data-mining model and findings |
| `design:user-research` | Visual Modeling | OS skill covers it; bind external optional | `ux` | a user-research plugin, when primary research is run | Customer journey map |
| `figma:figma-generate-diagram` | Visual Modeling | OS skill covers it; bind external optional | `visual-modelling` | `figma` diagram generation, when a rendered diagram is required | Diagrams (representation form); mind map |
| `frontend-design` | Synthesis & Drafting | OS skill covers it; bind external optional | `prototyping` | `frontend-design`, when a coded prototype is built | Horizontal prototype; vertical prototype |
| `frontend-design`; `engineering:architecture` | Synthesis & Drafting | OS skill covers it; bind external optional | `prototyping`; `architecture` | `frontend-design`, `engineering:architecture`, when a proof of concept is built | Proof of concept |
| `frontend-design`; `figma:figma-design-to-code` | Synthesis & Drafting; Visual Modeling | OS skill covers it; bind external optional | `prototyping`; `visual-modelling` | `frontend-design`, `figma` design-to-code, when a built or rendered prototype is required | Evolutionary prototype; prototype (mock-up, wireframe, storyboard); throw-away prototype; wireframe and mock-up and storyboard |
| `legal:review-contract` | Analytics & Performance | OS skill covers it; bind external optional | `procurement-contracts`; `regulatory-compliance` | `legal:review-contract`, when a formal legal review is required | Service Level Agreement |

## Full external reference set (from the register)

The nine rows above are the distinct references the coverage backlog surfaced. Column L of `BABOK_v3_Artefacts_Register.xlsx` tags artefacts with a wider set of external plugin skills. They are recorded here in full so the registry mirrors the register. Every one is an external ecosystem plugin, not OS content to author; each binds as an optional pool member of the OS skill that owns the artefact class. The many `business-analysis-os:*` references in the register are the OS's own skills and are not listed here because they need no binding.

| External plugin reference | Owning OS skill | Binding note |
| --- | --- | --- |
| `figma:figma-generate-diagram`, `figma:figma-design-to-code` | `visual-modelling` | Rendered diagram and design-to-code generation. |
| `frontend-design` | `prototyping`, `ux` | Coded prototypes and interface builds. |
| `design:user-research` | `ux` | Primary user research. |
| `data:analyze`, `data:write-query`, `data:build-dashboard`, `data:data-context-extractor`, `data:statistical-analysis` | `data-analysis`, `business-intelligence` | Query, analysis, dashboard build, and statistical work over live data. |
| `engineering:architecture` | `architecture` | Technical architecture and proof-of-concept builds. |
| `engineering:code-review` | `quality` | Review of built code artefacts. |
| `engineering:testing-strategy` | `acceptance-testing` | Test strategy for a built solution. |
| `legal:review-contract` | `procurement-contracts` | Formal contract and SLA review. |
| `legal:compliance-check` | `regulatory-compliance` | Legal compliance checks against obligations. |
| `operations:risk-assessment` | `risk-analysis` | Operational risk assessment. |
| `operations:compliance-tracking` | `regulatory-compliance` | Tracking obligations to controls over time. |
| `operations:change-request` | `change-control` | Operational change request handling. |
| `operations:capacity-plan` | `estimation`, `ba-planning` | Capacity and resource planning. |
| `operations:process-optimization` | `process-modelling` | Process improvement execution. |
| `operations:vendor-review` | `vendor-evaluation` | Ongoing vendor performance review. |
| `operations:runbook` | `technical-writer`, `ba-planning` | Operational runbook production. |
| `enterprise-search:search` | `document-analysis`, `information-management` | Search across enterprise repositories during document analysis. |
| `productivity:task-management` | `ba-planning` | Item and issue tracking. |
| `product-management:roadmap-update` | `product-manager` | Product roadmap maintenance. |

Placeholder references in column L are not skills: `(reference standard / knowledge base)`, `(reference standard)`, and `(reference)` resolve to the authored `reference-standards` capability; `(technique skill)` resolves to `estimation`; `(tool / MCP)`, `(tool / MCP connector)`, and `(external system - tool/MCP integration)` denote a tool or connector rather than a skill; `(SME / knowledge base)` and `(human-in-the-loop)` denote human-led work; `(none)` denotes no skill.

## Format generation bindings

These bindings serve the `deliverable-packager` skill and the `frameworks/delivery-formats.md` mapping. They are the build capability that turns a finished Markdown artefact into the file format its class calls for. Each is an optional external plugin bound as a pool member: when it is present the packager uses it, and when it is absent the packager delivers the Markdown fallback for that class. The delivery itself is never blocked by an absent plugin.

| Artefact class | Target format | External plugin to bind (optional) | Fallback when unbound |
| --- | --- | --- | --- |
| Prose document; procurement document | `.docx` | `docx` | `.md` file |
| Register, matrix, log, catalogue, dictionary | `.xlsx` | `xlsx` | `.md` table |
| Model or diagram | Rendered diagram plus editable source | `dataviz`, `figma:figma-generate-diagram` (owned by `visual-modelling`) | Mermaid or ASCII in an `.md` file |
| Canvas | Rendered visual or `.xlsx` | `dataviz`, `xlsx` | `.md` file |
| Presentation | `.pptx` | `pptx` | `.docx` outline |
| Conversational output | Inline chat prose | none | not applicable |

## Notes

- The OS produces every artefact above at the methodology level: the specification, the rubric, and the reasoning. The external plugins add build, render, or specialist-review capability. Binding them is an app-side or ecosystem configuration step, recorded here so the intent is versioned with the OS content.
- When the register or the compiled capability set changes, update this registry alongside the coverage backlog, following the regeneration procedure in `docs/coverage-backlog-closure-plan.md` section 7.
- Every rubric for the unblocked artefacts is authored under `evaluation/`, so an artefact produced by an OS skill or a bound plugin can be evaluated the same way.
