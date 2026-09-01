# Coverage Report: architecture

Upgraded 10 August 2026 under `skills/skill-upgrader/references/upgrade-spec.md`. Third skill in the alphabetical pass.

## What changed

The defining problem here was under-claiming. The old skill described itself as "BA-facing enablement and option framing, not detailed engineering design" and said plainly that "it does not produce production system designs". Meanwhile the artefact register makes it the owning skill for Design Options (BABOK 7.5), the interface list and interface specifications (technique 10.24), sequence diagrams (10.42), state models, state diagrams and state tables (10.44), the Information Technology perspective technical design, the Business Intelligence solution architecture, and a shared owner of Requirements Architecture (7.4) and of Designs across the whole of Requirements Life Cycle Management. The skill was disowning most of what BABOK assigns it, and the reference set matched: one 43-line file of plain-language pattern definitions.

The rewrite claims the assigned territory and draws the engineering boundary where it actually falls, at cost of reversal rather than at "anything technical". Architecture decisions are the expensive-to-reverse ones about boundaries, contracts, and quality attributes; component internals, frameworks, and algorithms stay with engineering.

Substantively it adds the requirements architecture as a first-class output, the ISO/IEC/IEEE 42010 concern-to-viewpoint-to-view discipline that makes every diagram justify its existence, a viewpoint selection table, the C4 escalation ladder, full interface analysis with failure behaviour as a mandatory attribute, the three distributed-systems decisions that are business decisions rather than technical ones (compensation, duplicate identity, consistency window), sequence and state modelling with completeness checks, the ISO/IEC 25010:2023 quality taxonomy including the 2023 widening, the stimulus-environment-response shape for non-functional requirements with measurement point and business consequence, scenario-based option evaluation with sensitivity and tradeoff points, decision records, and fitness functions.

References went from one file to six.

## Coverage table

| Obligation | Anchor | Status before | Where covered after | Note |
| --- | --- | --- | --- | --- |
| Requirements architecture | BABOK 7.4 | Absent | requirements-architecture.md, SKILL.md step 2 | Was owned in the register, entirely missing from the skill. The largest single gap |
| Design options with tradeoffs | BABOK 7.5 | Thin, one workflow line | design-options.md | Now the substantive core, with genuine-option and named-tradeoff gates |
| Designs as a class distinct from requirements | BABOK 2.3, 2.5, 5.1 to 5.5 | Implicit | SKILL.md role, failure-modes.md handoffs | Shared ownership with `requirements` stated |
| Interface analysis | Technique 10.24 | Absent as a technique | interfaces-and-behaviour.md | Attribute table with failure behaviour mandatory |
| Sequence diagrams | Technique 10.42 | Absent | interfaces-and-behaviour.md | With the failure-path and one-scenario disciplines |
| State modelling, state diagram, state table | Technique 10.44 | Absent | interfaces-and-behaviour.md | Four completeness checks; the table named as the more useful analysis artefact |
| Context diagram | Practice, IEEE 1016 context viewpoint | One workflow line | requirements-architecture.md C4 level 1 | Now positioned as the artefact that surfaces scope disagreement early |
| Architecture description metamodel | ISO/IEC/IEEE 42010 | Absent | requirements-architecture.md | Concern traceability became a quality gate |
| Design viewpoints | IEEE 1016 | Absent | requirements-architecture.md | Selection table with a "needed when" column |
| Documentation structure | C4, arc42 | Absent | requirements-architecture.md | Includes which two arc42 sections decay first |
| Architecture against detailed design | Corpus 1 | Asserted, undefined | design-options.md | Defined by cost of reversal, which makes the engineering boundary checkable |
| Architecture styles and tradeoffs | Corpus 1 | Named without criteria | design-options.md | Five styles a BA will meet, each with its real cost |
| Scenario-based evaluation | ATAM, Corpus 1 | Absent | design-options.md | Utility tree, sensitivity points, tradeoff points, risks, non-risks |
| Economic comparison of options | CBAM, Corpus 1 | Absent | design-options.md, handoff to `finance` | Method named, modelling routed |
| Architecture decision records | arc42, Corpus 1 | Absent | design-options.md | Rejected alternatives named as the load-bearing part |
| Fitness functions and drift control | Corpus 1 | Absent | design-options.md | Plus the deliberate against inadvertent debt distinction |
| Quality attribute taxonomy | ISO/IEC 25010:2023 | Four words in a gate | quality-attributes.md | Nine characteristics with the business question for each |
| Measurable non-functional requirements | `iso-29148` RS-05 | Absent | quality-attributes.md, SKILL.md gate 3 | Stimulus, environment, response, measurement point, business consequence |
| Threshold provenance | Reasoned practice | Absent | quality-attributes.md, failure-modes.md rubric | New rule: contract, regulation, measurement, market, or named decision |
| Integration technology selection | Corpus 1 | Four names in prose | interfaces-and-behaviour.md | Comparison table, with the coupling question reframed in business terms |
| Compensation, idempotency, consistency window | Corpus 1 | Absent | interfaces-and-behaviour.md | Framed as three business decisions, with the engineering patterns routed away |
| Security as design input | Corpus 1, ISO 27001 | One line in a gate | quality-attributes.md | Classification, identity at each hop, least privilege, verify explicitly |
| Accessibility conformance | `wcag-2.2` | Absent | quality-attributes.md | Named as a conformance target with a level, not an aspiration |
| IT perspective artefacts | BABOK 11.3 | Absent | quality-attributes.md, SKILL.md description | Technical design claimed; functional specs and user stories routed away |
| BI solution architecture | BABOK 11.2 | Absent | failure-modes.md handoffs | Shared with `business-intelligence`, boundary stated |
| Distributed systems theory: CAP, PACELC, consensus, sharding, clock drift | Corpus 1 | Absent | Not covered | Decision: informs engineering's design, not the analyst's. The BA-facing residue is the consistency window, retained as a requirement |
| Cloud pillars, infrastructure as code, GitOps, FinOps | Corpus 1 | Cloud models named | Not covered | Decision: delivery and operations practice. Cost modelling routes to `finance` |
| Data lakehouse, mesh, fabric | Corpus 1 | Absent | Not covered | Decision: `business-intelligence` and `data-modelling` own these |
| AI architecture, RAG topologies, MCP, agentic systems | Corpus 1 | Absent | Not covered | Decision: fast-moving and tooling-specific, would date the skill within a year |
| Platform engineering, internal developer platforms, team topologies | Corpus 1 | Absent | Not covered | Decision: team structure is `agile-coach`, platform build is engineering |
| Space-based and cell-based styles | Corpus 1 | Absent | Not covered | Decision: narrow applicability, excluded to keep the selection table usable |
| Policy-as-code tooling | Corpus 1 | Absent | Principle only | Decision: the durable point is that a checkable rule should be checked automatically |
| Lifecycle process integration | ISO/IEC/IEEE 15288, 12207 | Absent | Not covered | Decision: systems and software lifecycle process definition is not a BA artefact |

No row remains at absent without a decision.

## Boundary check

| Neighbour | This skill states | Neighbour states | Verdict |
| --- | --- | --- | --- |
| business-architecture | Hands enterprise capability, value stream, and operating model views to `business-architecture` | Its description hands solution-level technical design to `architecture` | Reciprocal and clean |
| requirements | Hands requirement and constraint wording to `requirements`; takes validated requirements as input | Its description hands design and architecture questions outward; register shares 7.4 between both | Reciprocal, with a shared artefact stated on both sides |
| data-modelling | Hands entity definitions, dictionaries, and logical or physical models | Its description hands structural models to `visual-modelling` and takes metric definitions from `data-analysis`; does not name `architecture` | Not reciprocal. Open item |
| visual-modelling | Hands all diagram rendering | Its description says other modelling skills delegate rendering to it | Reciprocal |
| business-intelligence | Shares the BI solution architecture | Its description takes structural models from `data-modelling`; does not name `architecture` | Not reciprocal. Open item |
| engineering | Hands internal design, frameworks, code | External plugin, no reciprocal expected | Acceptable |

## Boundary conflicts raised

**Conflict 1, escalated to Batch 9.** The register assigns the perspective 11.4 artefacts "Enterprise core diagram" and "Service-Oriented Analysis" to `architecture`, while `skills/skill-upgrader/references/layer-batches.md` assigns perspective 11.4 in its entirety to `business-architecture`, and that skill's description explicitly claims the enterprise core diagram. Two sources of truth disagree. Recommended resolution: both rows move to `business-architecture`, consistent with the layer batch definition and with the reciprocal handoff both skills already state. Logged, not applied.

**Conflict 2, noted rather than raised.** The register assigns the 11.3 "Software/technical design or blueprint" row jointly to `architecture` and engineering. That is correct and needs no change, but the split point was undefined. This upgrade defines it as cost of reversal, and that definition should be added to the routing map in Batch 9.

**Conflict 3, no owner.** Nothing in the register or the skill set owns architecture governance artefacts: the technology radar, the architecture review forum, or the architectural debt register. This skill now describes the mechanisms in `design-options.md` but does not claim the artefacts, since a case exists for `governance` owning them. Flagged for a Batch 9 decision.

## Validation

Frontmatter correct, name matches folder. Description 1017 characters with ten trigger phrases and four handoffs. Body 50 lines, at the lower bound of the spec. Six reference files, longest 68 lines, all well within the 250 cap. No README. No em dash or en dash. Every reference file is mentioned in `SKILL.md` and every mention resolves. The superseded `integration-patterns.md` was deleted, its content absorbed and expanded into `interfaces-and-behaviour.md`. `node scripts/validate-assets.mjs` reports no error against this skill.

A source-integrity caveat worth carrying forward: ISO/IEC/IEEE 42010, IEEE 1016, and ISO/IEC 25010:2023 are cited by name and clause but are not held in `sources/`. Their content here comes from the curated corpus rather than from the standards, and `references/sources.md` marks them supporting rather than normative for that reason. They should be acquired before any of them is treated as a conformance gate.

## Trigger test

Five realistic messages the description should fire on: "the vendor says they can integrate but I don't know what to ask them"; "we need to decide whether to extend the existing platform or build alongside it"; "what does 'the system must be scalable' actually mean for our requirements"; "can you map out what talks to what before the workshop"; "the order can be cancelled but not after dispatch, how do I capture that properly".

## Open items

1. `data-modelling` and `business-intelligence` upgrades must state the reciprocal handoff to `architecture`.
2. Register reassignment of the two 11.4 rows, per conflict 1, held for Batch 9.
3. Routing map needs the cost-of-reversal split between `architecture` and engineering, per conflict 2.
4. Ownership decision for architecture governance artefacts, per conflict 3.
5. Acquire ISO/IEC/IEEE 42010, IEEE 1016, and ISO/IEC 25010:2023, or keep them marked supporting.
6. No worked example in this skill. Reference count is at the cap of six; if a worked example is added later, `failure-modes.md` and `sources.md` would need consolidating first.
7. Independent review by the `deliverable-critic` agent and the `quality` skill not run, per the standing decision to keep moving.
