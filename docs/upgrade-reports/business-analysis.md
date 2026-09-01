# Coverage Report: business-analysis

Upgraded 10 August 2026 under `skills/skill-upgrader/references/upgrade-spec.md`. Fifth skill in the alphabetical pass, and the largest so far at 47 register rows.

## What changed

The defining problem was over-claim. The old description opened by claiming all six BABOK knowledge areas, which meant it overlapped every other skill in the plugin and gave the orchestrator no basis for routing anything to it specifically. Its single reference was a 270-line BABOK map, useful as a shared reference but not as working method, and the workflow steps mostly named techniques without saying how to apply them or what separates a good answer from a weak one.

The register tells a much more specific story. This skill owns the Current State Description (6.1 output), the Solution Scope (6.4 output, shared), and a coherent cluster of foundational technique work products: root cause analysis, business capability analysis, business rules, concept modelling, glossary, functional decomposition, organisational modelling, scope modelling, plus the named forms context diagram, fishbone, org chart, and value chain.

The rewrite narrows the claim to exactly that territory and gives it a purpose the other skills do not duplicate: establish what is actually true about the business before anyone specifies a solution. The material additions are the three-way labelling of established fact against hypothesis against assumption, the four-part problem statement, the three rules that make five whys work, the insistence that gaps are capability shortfalls rather than missing features, baseline capture at current-state time so benefit claims stay falsifiable, source and owner fields on every business rule, the definitional against behavioural rule split, and transition states in the change strategy.

References went from one file to six. The shared `babok-knowledge-areas.md` was kept at its existing path because eight external files link to it, and was trimmed from 270 to 242 lines to come inside the spec cap.

## Coverage table

| Obligation | Anchor | Status before | Where covered after | Note |
| --- | --- | --- | --- | --- |
| Current state description | BABOK 6.1 | One workflow line | current-and-future-state.md | Six dimensions, with the workaround and exception probes that distinguish real process from documented process |
| Future state description | BABOK 6.2 | One workflow line | current-and-future-state.md | Outcomes and capabilities only, with a gate excluding solution and technology |
| Gap analysis | BABOK 6.2, 6.4 | Named | current-and-future-state.md | Expressed as capability shortfalls with measures and dependencies, and a disposition per gap |
| Change strategy and transition states | BABOK 6.4 | Absent | current-and-future-state.md | Transition states named as where the real cost sits; reversibility added as an assessment criterion |
| Solution scope and scope statement | BABOK 6.4, glossary | Absent | current-and-future-state.md | Out of scope distinguished from deferred, each with a reason, the latter with a trigger |
| Scope modelling and context diagram | Technique 10.41 | Absent as a technique | current-and-future-state.md | Boundary made arguable rather than assumed |
| Core concept model | BABOK Chapter 2 | Listed in a reference | problem-framing.md | Reframed as a ten-minute completeness check whose value is the unanswerable concepts |
| Root cause analysis | Technique 10.40 | One clause | problem-framing.md | Six technique selection with stop conditions, six fishbone categories, three rules for five whys |
| Problem statement construction | Reasoned practice | Absent | problem-framing.md | Four parts: condition, affected, consequence, evidence |
| Evidence labelling | Reasoned practice | "Every finding traces to a source" | problem-framing.md, SKILL.md gate 1 | Three-way split of established, hypothesis, assumption, each with an owner or test |
| Business capability analysis | Technique 10.6 | Named | capability-rules-vocabulary.md | Naming rules, three-level limit, four-dimension assessment, and the enterprise reconciliation rule |
| Business rules analysis | Technique 10.9 | Named | capability-rules-vocabulary.md | Definitional against behavioural, six mandatory fields, declarative writing rule |
| Concept modelling | Technique 10.11 | Absent | capability-rules-vocabulary.md | With the diagnostic for when a glossary is insufficient |
| Glossary | Technique 10.23 | Absent | capability-rules-vocabulary.md | Includes the "what it is not" field, which resolves more disputes than the definition |
| Functional decomposition | Technique 10.22 | Named | capability-rules-vocabulary.md | One decomposition principle at a time, and a stated stop condition |
| Organisational modelling | Technique 10.32 | Absent | capability-rules-vocabulary.md | Reframed around absent accountability and conflicting-objective handoffs rather than the chart |
| Capability to system boundary alignment | Corpus | Absent | capability-rules-vocabulary.md | Event-based domain walkthrough, with the shared vocabulary identified as the same artefact as the glossary |
| Requirements classification schema | BABOK Chapter 2 | In the reference | babok-knowledge-areas.md | Retained in the shared map, applied at handoff to `requirements` |
| Outcome baselines | Reasoned practice | Absent | current-and-future-state.md, SKILL.md | Captured at current-state time and handed to `solution-evaluation` |
| Anti-patterns and rubric | Corpus | Absent | failure-modes.md | Fifteen failure modes and an eleven-dimension rubric |
| Shared BABOK map | Chapters 2 to 11 | 270 lines, over cap | babok-knowledge-areas.md, 242 lines | Section 16 replaced by a pointer to `docs/technique-index.md`; section 13 compressed; section 17 rewritten to route to owning skills |
| Decision modelling | Technique 10.17 | Absent | Decision tables for rule logic only | Conflict 1 below. Rule-shaped decision tables stay here; decision analysis under uncertainty goes to `decision-analysis` |
| Work breakdown structure | BABOK glossary | Absent | Referenced with a handoff | Conflict 4 below. Decomposition method here, estimating method to `estimation` |
| Elicitation, requirements life cycle, RADD, solution evaluation knowledge areas | BABOK 4, 5, 7, 8 | Claimed in full | Not claimed; retained in the shared map only | Decision: claiming six knowledge areas made the skill unroutable. Each is owned by its specialist skill |
| Stakeholder analysis, technique 10.43 | BABOK 3.2, 10.43 | Claimed in the description | Removed, routed to `elicitation` | Decision: conflict 2 below |
| Traceability | BABOK 5.1 | Claimed in the description | Handoff only | Decision: owned by `information-management` and `governance` |
| Value chain | Named form | Absent | Not covered | Decision: routed to `business-architecture`, which owns value streams. Flagged in conflict 3 |
| Wardley mapping, strategic positioning | Corpus | Absent | Not covered | Decision: owned by `strategy` |
| Financial investment formulas, MCDA matrices | Corpus | Absent | Not covered | Decision: `finance` and `decision-analysis` |
| Opportunity solution trees, continuous discovery | Corpus | Absent | Not covered | Decision: owned by `product-manager` |
| Cybersecurity, NIST AI RMF, ISO 42001 | Corpus | Absent | Not covered | Decision: `regulatory-compliance` and `risk-analysis` |
| Team topologies, platform engineering | Corpus | Absent | Not covered | Decision: `agile-coach` and engineering |
| BA competency and career progression matrices | Corpus | Competencies listed | Compressed to a paragraph | Decision: competencies are developed, not produced as artefacts |
| BA maturity models | Corpus | Absent | Not covered | Decision: located in `ba-planning`, where the approach decision uses them |
| Knowledge graph ontology | Corpus | Absent | Not covered | Decision: repository mechanics, owned by `information-management` |

No row remains at absent without a decision.

## Boundary check

| Neighbour | This skill states | Neighbour states | Verdict |
| --- | --- | --- | --- |
| requirements | Hands requirement specification and classification | Its description takes raw input from `elicitation` and routes validation to `quality`; does not name `business-analysis` | Not reciprocal. Open item |
| elicitation | Hands interviews, workshops, observation, surveys | Its description hands captured input to `business-analysis` or `requirements` | Reciprocal |
| process-modelling | Hands process flows, swimlanes, value stream maps | Its description hands requirement specification to `requirements` and enterprise value streams to `business-architecture`; does not name `business-analysis` | Not reciprocal. Open item |
| business-architecture | Hands enterprise capability, value stream, operating model | Its description hands process detail to `process-modelling` and solution design to `architecture`; claims capability maps and organisational maps | Overlapping claim. Conflict 3 |
| strategy | Hands strategic frames, business model, OKRs | Its description hands enterprise capability and value stream views to `business-architecture` | Consistent, though KA 6 is shared. Conflict 5 |
| decision-analysis | Hands weighted scoring and multi-criteria comparison, keeps rule-shaped decision tables | Its description claims techniques 10.16 and 10.17 explicitly | Direct conflict. Conflict 1 |
| document-analysis | Hands mining of existing material | Its description hands requirement wording to `requirements` and interviews to `elicitation` | Reciprocal by scope |
| solution-evaluation | Hands the captured baseline for later benefit measurement | Its description takes measurement definitions from `data-analysis` | Not reciprocal on the baseline handoff. Open item |

## Boundary conflicts raised

**Conflict 1, direct double-ownership, escalated to Batch 9.** The register assigns technique 10.17 Decision Modelling to `business-analysis`, while the `decision-analysis` skill claims techniques 10.16 and 10.17 explicitly in its description. Both cannot own it. Proposed split, and the one this upgrade is written against: decision tables that encode business rule logic are a business rules artefact and stay here, because they are produced from and validated against the rules catalogue; decision modelling under uncertainty, weighted criteria, and expected value belong to `decision-analysis`. The register row should move to a shared assignment with that split stated in the routing map.

**Conflict 2, resolved here by removal.** The old description claimed stakeholder analysis. Technique 10.43 is assigned to `elicitation`, and BABOK 3.2 stakeholder engagement planning is assigned to `ba-planning`. The claim has been removed from this skill. Note that this leaves the three-way split flagged in the ba-planning report still open: the register assigns the Stakeholder Engagement Approach jointly to `ba-planning` and `business-analysis`, and that second assignment is now unsupported by anything in this skill. Recommend the register row drops `business-analysis`.

**Conflict 3, the recurring 11.4 problem, escalated to Batch 9.** The register assigns the perspective 11.4 artefacts business capability map, information map, and organisational map to `business-analysis`, while `layer-batches.md` assigns perspective 11.4 wholly to `business-architecture`, whose description claims capability maps and organisational maps. This is the third instance of the same pattern, after the `architecture` report flagged the enterprise core diagram and Service-Oriented Analysis rows. Proposed resolution: all 11.4 rows belong to `business-architecture`; this skill produces the initiative-scoped capability view under technique 10.6 and must reuse enterprise capability names, which is now written into `capability-rules-vocabulary.md`. The value chain named form should move to `business-architecture` for the same reason.

**Conflict 4, minor.** The register assigns the work breakdown structure to `business-analysis` jointly with an operations skill, while `estimation` claims work breakdown structures in its description. Proposed split: decomposition method here under technique 10.22, estimating method and sizing in `estimation`. Low stakes, but it should be stated rather than left to whoever gets asked first.

**Conflict 5, shared knowledge area, noted for the strategy upgrade.** `layer-batches.md` gives BABOK 6.1 to 6.4 to both `business-analysis` and `strategy`. The split this upgrade assumes is that `business-analysis` owns the description of current state, future state, gap, and change strategy, while `strategy` owns the strategic frames applied to them, the business model question, and the objectives. Confirm or revise when `strategy` is upgraded.

## Validation

Frontmatter correct, name matches folder. Description 985 characters with ten trigger phrases and five handoffs. Body 53 lines. Six reference files, longest 242 lines, inside the 250 cap. No README. No em dash or en dash. Every reference file is mentioned in `SKILL.md` and every mention resolves. `node scripts/validate-assets.mjs` reports no error against this skill.

The shared `babok-knowledge-areas.md` was kept at its path. Eight external files link to it: `docs/babok/README.md`, `docs/methodology/README.md`, `docs/methodology/sdlc-playbook.md`, `docs/sdlc-playbook.md`, `docs/methodology/technique-index.md`, `docs/technique-index.md`, and the SKILL.md files of `data-analysis` and `process-modelling`. All eight still resolve. Section 16 now points at `docs/technique-index.md` instead of duplicating the technique-to-task mapping, which removes a second place that mapping had to be maintained.

## Trigger test

Five realistic messages the description should fire on: "customer complaints are up and nobody agrees why"; "before we scope the project I need to understand how this actually works today"; "finance and operations both use the word 'account' and mean different things"; "what's the gap between where we are and where the board wants to be"; "we fixed this last year and it's back".

## Open items

1. Conflict 1, the 10.17 split with `decision-analysis`, for Batch 9 and for that skill's upgrade.
2. Conflict 3, the 11.4 rows and the value chain, for Batch 9. Third instance of this pattern.
3. Conflict 4, the work breakdown structure split with `estimation`.
4. Conflict 5, the KA 6 split with `strategy`, to confirm during that upgrade.
5. Register row for the Stakeholder Engagement Approach should drop `business-analysis`, per conflict 2.
6. `requirements`, `process-modelling`, and `solution-evaluation` upgrades should state the reciprocal handoff to `business-analysis`, including the outcome baseline handoff.
7. No worked example. Reference count is at the cap of six, and one slot is consumed by the shared BABOK map.
8. Independent review by the `deliverable-critic` agent and the `quality` skill not run, per the standing decision to keep moving.
