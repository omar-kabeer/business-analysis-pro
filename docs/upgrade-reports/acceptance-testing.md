# Coverage Report: acceptance-testing

Upgraded 10 August 2026 under `skills/skill-upgrader/references/upgrade-spec.md`. First skill in the alphabetical pass.

## What changed

The skill was correct and shallow. It described a single UAT event, derived tests competently, and stopped. It also claimed formal reviews and inspections, which the routing map assigns to `quality`.

The rewrite does four things. It replaces the implicit assumption that acceptance means UAT with an explicit taxonomy of eleven acceptance types, each with its own question, owner, and closing evidence. It puts risk scoring before test design so depth is allocated rather than spread evenly. It adds the staged gate model and the five-pillar go or no-go framing, so the acceptance decision is a sequence of checkable judgements rather than a pass rate. And it imports the ISO/IEC/IEEE 29119-3 blocking checks as quality gates, including the requirement that any omitted information item is recorded with rationale, risk, and who agreed it.

The reference set went from two files to six: `test-design.md` rewritten with selection criteria per technique, plus new `acceptance-types.md`, `planning-and-gates.md`, `quality-bar.md`, `worked-example.md`, and a rebuilt `sources.md`.

## Coverage table

| Obligation | Anchor | Status before | Where covered after | Note |
| --- | --- | --- | --- | --- |
| Validation of a built solution against business need | BABOK 7.3 | Covered | SKILL.md Role, acceptance-types.md | Sharpened as a governance decision about value and risk |
| Verification of requirement artefacts | BABOK 7.2 | Thin, partly claimed | quality-bar.md handoffs | Ownership moved to `quality`; stated as an explicit exclusion in test-design.md |
| Acceptance and evaluation criteria as test basis | Technique 10.1 | Covered | test-design.md, SKILL.md steps 3 and 4 | Added the condition layer between criterion and case |
| Walkthrough, peer review, inspection | Technique 10.37 | Covered here, also owned by `quality` | quality-bar.md handoffs only | Boundary conflict resolved in favour of `quality`. See below |
| Defect against change of intent | BABOK 5.4 | Absent | quality-bar.md | New. Prevents change requests inflating the defect count |
| Requirement to test traceability, both directions | BABOK 5.1, ISO 29119-3 | Thin, forward only | test-design.md coverage section, SKILL.md gates | Added orphan count and condition coverage |
| Test case information items | `iso-29119-3` ISO29119-TS | Absent | SKILL.md gates, quality-bar.md rubric | Stable identifiers, preconditions, inputs, expected results, basis traceability |
| Recorded justification for omitted information items | `iso-29119-3` ISO29119-TS | Absent | SKILL.md gate 7 | New, and the most commonly missed ISO obligation |
| Verifiable acceptance criteria | `iso-29119-3` ISO29119-AC, `iso-29148` RS-05 | Thin | test-design.md, handoff to `requirements` | Failure now routes back rather than being worked around |
| Test design techniques with selection guidance | Practice | Listed without criteria | test-design.md selection table | Added pairwise, and a stop condition for each technique |
| Acceptance type taxonomy | Corpus 1 and 2 | Absent | acceptance-types.md | Eleven types with owner and closing evidence |
| Architecture-specific acceptance | Corpus 1 | Absent | acceptance-types.md | Monolith, microservices, serverless, SaaS, event-driven, AI-native |
| Lifecycle fit | BABOK 11.1, `scrum-guide-2020` | Absent | acceptance-types.md | Predictive, agile, continuous delivery |
| Risk-based test depth | ISO 29119-2, Corpus 1 | Absent | planning-and-gates.md | Likelihood by impact, mapped to depth, frequency, automation |
| Definition of ready and done as acceptance controls | BABOK 11.1 | Absent | planning-and-gates.md | Linked to the existing checklists |
| Staged quality gates | Corpus 1 | Absent | planning-and-gates.md | Thresholds marked illustrative until set with the organisation |
| Go or no-go across five pillars | Corpus 1 | Thin | planning-and-gates.md | Per-pillar floor rather than a weighted average |
| Entry and exit criteria | BABOK 7.3, practice | Covered | planning-and-gates.md | Added dating and the renegotiation failure mode |
| Severity from business impact, split from priority | Practice | Covered | quality-bar.md | Retained and tightened with a reproducibility bar |
| Test data realism, provenance, privacy | Practice, GDPR routing | Covered | test-design.md | Added synthetic data caveat on correlations |
| Non-functional acceptance | ISO 25010, `wcag-2.2` | Thin | acceptance-types.md, SKILL.md gate 4 | Performance, security, accessibility, recovery |
| AI and probabilistic acceptance | Corpus 1, ISO 42001 context | Absent | acceptance-types.md, quality-bar.md | Statistical thresholds, version recording |
| Post-release benefit measurement | BABOK 8.1 to 8.5 | Absent | planning-and-gates.md, worked-example.md | Baseline captured at cutover, handed to `solution-evaluation` |
| Acceptance evidence tied to supplier obligations | Section 8 procurement | Absent | quality-bar.md handoffs | Routed to `procurement-contracts` |
| TMMi maturity model | Corpus 1 | Absent | Not covered | Decision: out of scope. Organisational process maturity, not initiative artefacts |
| DORA benchmarks | Corpus 1 | Absent | planning-and-gates.md, as post-release signals only | Decision: measures the pipeline, not the acceptance decision |
| MCP and agentic tooling detail | Corpus 1 | Absent | Not covered | Decision: tooling-specific and fast-moving. Durable principle retained |

No row remains at absent without a decision.

## Boundary check

| Neighbour | This skill states | Neighbour states | Verdict |
| --- | --- | --- | --- |
| quality | Hands pre-build document reviews and inspections to `quality` | "Hand user acceptance testing and test case design to the acceptance-testing skill" | Reciprocal and clean |
| requirements | Takes requirement wording from `requirements`; routes untestable criteria back | Routing map sends requirements work to `requirements` with `quality` and `acceptance-testing` as support | Reciprocal |
| product-owner | Story-level acceptance criteria authored there, turned into tests here | Routing map lists `acceptance-testing` as support for backlog work | Reciprocal |
| procurement-contracts | Routes acceptance evidence tied to payment milestones and service levels | Not yet reciprocal | Open item for that skill's upgrade |
| risk-analysis | Routes residual risk accepted at the decision | Reciprocal via the register | Clean |
| governance | Routes the decision record | Reciprocal via the decision log | Clean |

## Boundary conflicts raised

**Conflict 1, resolved.** Technique 10.37 reviews, walkthroughs, and inspections were claimed by both `quality` and `acceptance-testing`. Resolved in favour of `quality`, consistent with the existing routing map rule: reviewing a document goes to quality, testing a built solution goes to acceptance-testing. The material has been removed from this skill and replaced by an explicit exclusion. Action for the `quality` upgrade: confirm 10.37 is covered there in the depth it was covered here, because the removal has created a temporary gap.

**Conflict 2, escalated to Batch 9.** `BABOK_v3_Artefacts_Register.xlsx` assigns user acceptance test, review record and defect log, acceptance and evaluation criteria, inspection, walkthrough, peer review, and requirements defect to `business-analysis-os:quality`, and assigns nothing to `business-analysis-os:acceptance-testing`. This contradicts `docs/babok-coverage.md`, which assigns user acceptance testing, test cases, coverage, and defect triage to `acceptance-testing`. The register is stale against the coverage document and the routing map. Recommended resolution: reassign the user acceptance test row and the execution-phase defect log to `acceptance-testing`, leave inspection, walkthrough, peer review, requirements defect, and checklists with `quality`, and split technique 10.1 so criteria authoring stays with `requirements` and `quality` while derivation of tests from criteria sits here. This is a register edit, not a skill edit, so it is logged rather than actioned unilaterally.

## Validation

Frontmatter shape correct, name matches folder. Description 1024 characters with eleven trigger phrases and four handoffs. Body 51 lines. Six reference files, longest 85 lines. No README. No em dash or en dash anywhere in the folder. Every reference file is mentioned in `SKILL.md` and every mention resolves. Templates named (`uat-plan.md`, `requirements-traceability-matrix.md`, `release-readiness-checklist.md`) and checklists named (`definition-of-ready.md`, `definition-of-done.md`) all exist. `node scripts/validate-assets.mjs` reports no error against this skill; the two remaining failures concern `skills/.token-optimizer`, a tooling artefact folder that predates this work and should be excluded from the validator or removed.

## Trigger test

Five realistic messages, all of which the description should fire on: "we finish build next month, what do we need for UAT"; "how do I turn these acceptance criteria into actual test cases"; "the business wants to know if we can go live on Friday"; "we found 40 issues in testing, how do we decide which block release"; "who signs off that this meets the requirement".

## Open items

1. Register reassignment described in conflict 2, for Batch 9.
2. `quality` upgrade must absorb technique 10.37 in full depth.
3. `procurement-contracts` upgrade must state the reciprocal handoff on acceptance evidence and milestone payments.
4. Gate thresholds in `planning-and-gates.md` are illustrative. If this repository is used inside one organisation, replace them with agreed numbers.
5. Independent review by the `deliverable-critic` agent and the `quality` skill has not been run. Recommended before the commit.
