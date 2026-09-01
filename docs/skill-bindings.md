# Skill Bindings

Registry version: 1.0.0

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

## Notes

- The OS produces every artefact above at the methodology level: the specification, the rubric, and the reasoning. The external plugins add build, render, or specialist-review capability. Binding them is an app-side or ecosystem configuration step, recorded here so the intent is versioned with the OS content.
- When the register or the compiled capability set changes, update this registry alongside the coverage backlog, following the regeneration procedure in `docs/coverage-backlog-closure-plan.md` section 7.
- Every rubric for the unblocked artefacts is authored under `evaluation/`, so an artefact produced by an OS skill or a bound plugin can be evaluated the same way.
