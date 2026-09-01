# Sources

Resolve each source id against `sources/manifest.json`.

## BABOK v3 anchors

| Anchor | What it establishes | Where used |
| --- | --- | --- |
| 6.1 Analyze Current State | The current state description as this skill's primary output, covering capability, performance, structure, policy, technology, and constraint | current-and-future-state.md, SKILL.md step 3 |
| 6.2 Define Future State | Future state as measurable outcomes and required capabilities, and the gap between the two | current-and-future-state.md, SKILL.md step 5 |
| 6.4 Define Change Strategy | The change strategy, transition states, and the solution scope it produces | current-and-future-state.md, SKILL.md step 8 |
| Chapter 2 core concept model | The six concepts and their interdependence, used as a completeness check rather than a diagram | problem-framing.md, SKILL.md step 1 |
| Chapter 2 requirements classification | Business, stakeholder, solution functional and non-functional, and transition requirements | babok-knowledge-areas.md, handoff to `requirements` |
| Technique 10.6 Business Capability Analysis | Capability as a unit independent of structure and technology, and capability assessment | capability-rules-vocabulary.md |
| Technique 10.9 Business Rules Analysis | Definitional against behavioural rules, and the rules catalogue | capability-rules-vocabulary.md |
| Technique 10.11 Concept Modelling | Concept model and business vocabulary where relationships between terms are contested | capability-rules-vocabulary.md |
| Technique 10.22 Functional Decomposition | Decomposition of scope, capability, or work, and the MECE test | capability-rules-vocabulary.md |
| Technique 10.23 Glossary | Agreed definitions of business terms | capability-rules-vocabulary.md |
| Technique 10.32 Organizational Modelling | Roles, responsibilities, and reporting relationships, used to find absent or duplicated accountability | capability-rules-vocabulary.md |
| Technique 10.40 Root Cause Analysis | Five whys and fishbone, and the separation of symptom from cause | problem-framing.md, SKILL.md step 2 |
| Technique 10.41 Scope Modelling | The scope boundary, context view, and explicit exclusions | current-and-future-state.md, SKILL.md step 7 |
| 3.2, 3.3, 6.3, 7.1, 7.3 to 7.6, 8.1 to 8.5 | The current state description and solution scope as guidelines and inputs across planning, risk, requirements analysis, and solution evaluation, which is why this skill runs early | SKILL.md role |

Two dated positions are noted where they occur. BABOK treats the capability map as an initiative artefact without reconciling it against an enterprise map, and it has no position on vocabulary alignment between business analysis and software design. Both gaps are addressed in `capability-rules-vocabulary.md` and labelled as reasoned practice.

## Standards

| Source | Clause | Contribution | Authority |
| --- | --- | --- | --- |
| `dmn-1.3` | Decision tables, hit policy | The form used where business rules combine several conditions, and the completeness check that an empty cell is an unanswered question | Normative where a decision table is produced |
| `bmm-1.3` | Business motivation model | Vocabulary for ends, means, influencers, and assessments, informing how future state outcomes are stated | Supporting |
| `apqc-pcf` | Process classification framework | A reference taxonomy for naming capabilities and processes, useful for avoiding invented vocabulary | Supporting |

## Papers and practice

| Source | Year | Contribution | Where used |
| --- | --- | --- | --- |
| Enterprise Business Analysis Knowledge Base, `sources/papers/business-analysis/` | 2025 | The core concept model treated as a dynamic reasoning system where changing one concept forces re-evaluation of the rest; root cause decomposition across fishbone, five whys, and fault tree with Boolean combination; the six fishbone categories; capability decomposition to three levels; domain-driven design and event storming as the bridge from capability to system boundary, and ubiquitous language as the same artefact as the glossary; analysis anti-patterns | problem-framing.md, current-and-future-state.md, capability-rules-vocabulary.md, failure-modes.md |

## Reasoned practice, not sourced

- The four-part problem statement (observable condition, who is affected, business consequence, evidence) is our construction.
- The three-way labelling of established, hypothesis, and assumption is ours, added because analysis that blurs them reads as more authoritative and is worth less.
- The three rules for five whys (ask of the condition not the person, stop at organisational control, test each link backwards) are reasoned practice assembled from the technique's common failure modes.
- The instruction to capture the outcome baseline while current state work is fresh, and hand it to `solution-evaluation`, is ours. BABOK requires measures but does not tie baseline capture to this point in the sequence.
- The distinction between out of scope and deferred, each requiring a reason and the latter requiring a trigger, is ours.
- The rule that an initiative capability map must reuse enterprise capability names rather than inventing parallel vocabulary is ours, and it resolves a conflict BABOK does not address.
- The insistence that every business rule carries a source field, on the grounds that rules outliving their originating policy are common and only discoverable that way, is reasoned practice.

## Deliberately not used

| Source material | Reason |
| --- | --- |
| Wardley mapping, strategic positioning | Owned by `strategy` |
| Financial investment formulas, multi-criteria scoring matrices | Owned by `finance` and `decision-analysis` |
| BPMN against value stream mapping comparison | Owned by `process-modelling` |
| Non-functional requirement verification matrix, ISO 25010 alignment | Owned by `architecture` and `requirements` |
| Opportunity solution trees, continuous discovery | Owned by `product-manager` |
| Distributed architecture patterns | Owned by `architecture` |
| Data architecture dimensions, AI data readiness | Owned by `data-modelling` and `business-intelligence` |
| Cybersecurity analysis, NIST AI RMF, ISO 42001 governance | Owned by `regulatory-compliance` and `risk-analysis` |
| Team topologies collaboration model | Owned by `agile-coach` |
| Business analysis career progression and competency matrices | Not an artefact this skill produces for an initiative |
| Business analysis maturity models | Located in `ba-planning`, where the approach decision uses them |
| Knowledge graph ontology structure | Repository mechanics, owned by `information-management` |
