# Sources

Standards here are conformance authorities, not decoration. Judge an artefact by whether it passes the checks, not by whether it cites the standard. Resolve each source id against `sources/manifest.json` and read its checks in `sources/conformance/<source-id>.md`. Do not quote the standards in deliverables.

## BABOK v3 anchors

| Anchor | What it establishes | Where used |
| --- | --- | --- |
| 7.2 Verify Requirements | Requirements are checked for internal quality before they are relied on. Establishes the boundary: verification of the artefact sits with `quality`, not here | SKILL.md role and handoffs, quality-bar.md |
| 7.3 Validate Requirements | Requirements are confirmed to deliver business value, which is the validation vector acceptance testing executes against a built solution | SKILL.md role, acceptance-types.md |
| Technique 10.1 Acceptance and Evaluation Criteria | Criteria must be expressed so a test can determine pass or fail. Supplies the derivation basis for conditions and cases | test-design.md, SKILL.md workflow steps 3 and 4 |
| Technique 10.37 Reviews | Walkthrough, peer review, and inspection as pre-build defect removal. Owned by `quality`; recorded here only as an explicit exclusion | quality-bar.md handoffs |
| Glossary: user acceptance test | Names the artefact family this skill owns | SKILL.md description |
| 5.4 Assess Requirements Changes | Distinguishes a defect from a change of intent, which decides whether a finding goes to the defect log or to `change-control` | quality-bar.md |
| 8.1 to 8.5 Solution Evaluation | Post-release benefit measurement, which begins where acceptance ends | worked-example.md, planning-and-gates.md go or no-go |

## Standards

| Standard | Clause | Contribution |
| --- | --- | --- |
| `iso-29119-3` | Test documentation, ISO29119-TS blocking checks | Unique stable identifiers, preconditions, inputs, expected results, traceability to the test basis, and the rule that any omitted information item is recorded with rationale, risk, and stakeholder agreement. Drives the SKILL.md quality gates and the quality-bar rubric |
| `iso-29119-3` | ISO29119-AC blocking checks | An acceptance criterion is expressed verifiably with an expected observable result. Consistent with `iso-29148` RS-05, a requirement must be verifiable |
| `iso-29148` | RS-05 verifiable | Requirement verifiability as the precondition for a derivable test. Where it fails, the route is back to `requirements` |
| `wcag-2.2` | Level A and AA success criteria | The conformance target for accessibility acceptance where accessibility requirements exist |

Cite the 2013 edition of ISO/IEC/IEEE 29119-3 held in the library; a 2021 edition exists and is not the copy in scope.

## Papers and practice

| Source | Year | Contribution | Where used |
| --- | --- | --- | --- |
| Acceptance Testing Knowledge Corpus 1 and 2, `sources/papers/acceptance-testing/` | 2025 | Acceptance type taxonomy (BAT, UAT, FAT, NFAT, IAT, DAT, SAT, OAT, CAT, AI, continuous), architecture-specific acceptance patterns, staged gate model, five-pillar go or no-go framing, risk-based depth mapping, anti-pattern taxonomy | acceptance-types.md, planning-and-gates.md, quality-bar.md failure modes |
| `scrum-guide-2020`, `agile-practice-guide` | 2020, 2017 | Story-level acceptance inside the iteration, definition of ready and definition of done as acceptance controls rather than ceremony | planning-and-gates.md, acceptance-types.md lifecycle fit |
| `effective-user-stories` | practice | Criteria written so they are testable at the point the story is accepted | test-design.md executable criteria |

## Reasoned practice, not sourced

Labelled so a reader can tell judgement from evidence.

- The four-number coverage set (requirement, condition, execution, orphan) is our construction, built to defeat the specific gaming that single-number requirement coverage invites.
- The gate threshold values in planning-and-gates.md are illustrative shapes. Real thresholds are set with the organisation, and the reference says so.
- The severity ladder is standard industry practice rather than a BABOK or ISO construct, and the separation of severity from priority is stated as a discipline rather than a citation.

## Deliberately not used

| Source | Reason |
| --- | --- |
| Composite release readiness index with fixed weights | The corpus supplies a formula, but published weights vary by organisation and an unattributed weighting would be a false precision. The reference keeps the principle (publish weights before results, set a per-pillar floor) and drops the numbers |
| DORA metric benchmarks | Useful for delivery performance, but they measure the pipeline rather than the acceptance decision. Retained only as post-release signals in planning-and-gates.md |
| TMMi maturity levels | Organisational process maturity is out of scope for a skill that produces artefacts for one initiative |
| MCP and agentic testing tooling detail from Corpus 1 | Tooling-specific and fast-moving. The durable point, that AI acceptance is statistical rather than assertion-based, is retained in acceptance-types.md |
