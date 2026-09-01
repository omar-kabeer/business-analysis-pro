# Sources

Resolve each source id against `sources/manifest.json`. Where a standard gates an artefact it is stated as a check; where it informs method it is marked supporting.

## BABOK v3 anchors

| Anchor | What it establishes | Where used |
| --- | --- | --- |
| 7.4 Define Requirements Architecture | The requirements architecture as an analysis output: relationships, viewpoints, and set-level completeness and consistency | requirements-architecture.md, SKILL.md step 2 |
| 7.5 Define Design Options | Design options with tradeoffs as a task output owned by analysis, not engineering | design-options.md, SKILL.md step 7 |
| Technique 10.24 Interface Analysis | Interface list and interface specifications as the technique work product | interfaces-and-behaviour.md |
| Technique 10.42 Sequence Diagrams | Interaction modelling across a boundary | interfaces-and-behaviour.md |
| Technique 10.44 State Modelling | State model, state diagram, and state table, including the completeness checks | interfaces-and-behaviour.md |
| 2.3 and 2.5 Requirements and Designs | Designs as a distinct class from requirements, shared with `requirements` | SKILL.md role |
| 5.1 to 5.5 | Designs traced, maintained, prioritised, and approved alongside requirements | failure-modes.md handoffs |
| Perspective 11.3 Information Technology | The IT perspective artefact set, including technical design and non-functional requirements | quality-attributes.md, SKILL.md description |
| Perspective 11.2 Business Intelligence | BI solution architecture, shared with `business-intelligence` | failure-modes.md handoffs |
| 6.4 Define Change Strategy | Design options as an input to change strategy | SKILL.md inputs |

## Standards

| Source | Clause | Contribution | Authority |
| --- | --- | --- | --- |
| ISO/IEC/IEEE 42010 | Architecture description metamodel | Stakeholder, concern, viewpoint, view, decision, rationale, and the rule that every view traces to a concern. Drives the concern traceability gate | Supporting, referenced by name; not held in the library |
| IEEE 1016 | Design viewpoints | Context, composition, logical, interface, structure, and interaction viewpoints, used as the viewpoint selection table | Supporting |
| ISO/IEC 25010:2023 | Product quality model | Nine quality characteristics and sub-characteristics, including the 2023 widening of interaction capability, flexibility, and safety. Drives the non-functional checklist | Supporting |
| `uml-2.5` | Sequence and state machine diagrams | Notation for the two behavioural techniques BABOK names | Normative on notation where UML is claimed |
| `iso-29148` | RS-05 verifiable, and quality characteristics of requirements | A non-functional requirement must be verifiable, which forces the measurable response shape | Normative on the requirement statements handed to `requirements` |
| `wcag-2.2` | Level AA success criteria | The accessibility conformance target named in the non-functional set | Normative where a human interface exists |
| `archimate-3.1` | Application and technology layers | Available where a formal enterprise notation is required. Mostly exercised by `business-architecture` | Supporting |
| `iso-27001-2022`, `iso-27002` | Control set | Security obligations behind design inputs. Referenced, not paraphrased; the obligation mapping belongs to `regulatory-compliance` | Normative via that skill |

ISO/IEC/IEEE 42010, IEEE 1016, and ISO/IEC 25010:2023 are referenced by name and clause but are not held in `sources/`. Their content here is drawn from the curated corpus rather than from the standards themselves, which is why they are marked supporting. Acquire them before treating any of these as a conformance gate.

## Papers and practice

| Source | Year | Contribution | Where used |
| --- | --- | --- | --- |
| Enterprise Architecture Knowledge Corpus 1, `sources/papers/architecture/` | 2025 | Architecture against detailed design by cost of reversal, the 42010 metamodel, IEEE 1016 viewpoints, C4 hierarchy, arc42 section set, style taxonomy with tradeoffs, scenario-based evaluation with utility trees and sensitivity, tradeoff, risk and non-risk points, cost benefit framing, fitness functions, integration technology comparison, compensation and duplicate and consistency patterns, quality attribute taxonomy, zero trust principles | Every reference file |
| Enterprise Architecture Knowledge Corpus 2 | 2025 | Research method and deliverable structure only | Not used for content |
| `opengroup-togaf-presentation-2003` | 2003 | Held in the library but is a conference deck, not the standard, and its identity is flagged in the manifest | Not used |

## Reasoned practice, not sourced

- The interface attribute table is our construction. BABOK names the technique; the attribute set and the insistence on failure behaviour as a mandatory field are a method choice made here.
- The rule that a non-functional requirement must also carry its measurement point and the business consequence of missing the threshold is ours, added because both omissions reliably produce disputes at acceptance.
- The threshold provenance rule (contract, regulation, measurement, market, or a named decision) is ours.
- The instruction to reserve options papers for decisions that are expensive to reverse is reasoned practice, drawn from the cost-of-change distinction rather than stated in a source.

## Deliberately not used

| Source material | Reason |
| --- | --- |
| CAP and PACELC theorems, consensus, clock drift, sharding mechanics | Correct and interesting, but they inform engineering's design rather than the analyst's decision. The BA-facing residue is the consistency window, which is retained as a requirement |
| Cloud well-architected pillars, infrastructure as code, GitOps, FinOps | Delivery and operations practice. Cost modelling routes to `finance`, and the rest to engineering |
| Data lakehouse, data mesh, data fabric | Belongs to `business-intelligence` and `data-modelling` |
| AI architecture, retrieval topologies, Model Context Protocol, agentic topology | Fast-moving and tooling-specific. Including it would date the skill within a year |
| Platform engineering, internal developer platforms, team topologies | Team structure is owned by `agile-coach`; the platform build is engineering's |
| Space-based and cell-based architecture styles | Narrow applicability. The selection table keeps the styles a BA will actually meet |
| Named policy-as-code tooling | Tool-specific. The durable point, that a checkable rule should be checked automatically, is retained in design-options.md |
