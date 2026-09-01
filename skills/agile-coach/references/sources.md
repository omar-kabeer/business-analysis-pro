# Sources

Resolve each source id against `sources/manifest.json`. Standards here are mostly supporting rather than normative, because this skill shapes practice rather than gating an artefact. Where a check is normative it is stated as a check.

## BABOK v3 anchors

| Anchor | What it establishes | Where used |
| --- | --- | --- |
| Perspective 11.1 Agile | The agile perspective on business analysis: planning horizons, the artefact set, and the barely sufficient documentation stance | SKILL.md description, framework-selection.md three horizons and documentation stance |
| 11.1 artefact list | Names the artefacts of the perspective, most of which belong to `product-owner` and `product-manager` rather than here | framework-selection.md boundary section, anti-patterns.md handoffs |
| 3.1 Plan Business Analysis Approach | Predictive against adaptive approach selection. The boundary with `ba-planning`: that skill plans the analysis work, this one shapes how the team delivers | SKILL.md handoffs |

BABOK is visibly dated on this topic. It was written in 2015, predates the 2020 Scrum Guide, Team Topologies, the DORA research programme, and current flow metric practice. It is used here for vocabulary and for the analysis horizons, not for method.

## Standards and framework definitions

| Source | Clause or section | Contribution |
| --- | --- | --- |
| `scrum-guide-2020` | Events, artefacts, commitments | Current Scrum definition, including the three commitments (product goal, sprint goal, definition of done) that the 2017 version lacked and that teams most often drop |
| `agile-practice-guide` | Lifecycle selection, tailoring | Selection between predictive, iterative, incremental, and agile lifecycles, and the case for tailoring rather than adopting whole |
| `europeanscrum-agile-guide-2025` | Contemporary practice | Where practice has moved since the guides, used as supporting rather than normative |

## Papers and practice

| Source | Year | Contribution | Where used |
| --- | --- | --- | --- |
| Agile Coaching Knowledge Base Research 1 and 2, `sources/papers/agile-coach/` | 2025 | Coaching competency model and stance shifting, Cynefin domain fit, Little's Law corollaries, flow efficiency, theory of constraints loop, Kanban maturity path, service level expectation calculation, Scrum structural anti-patterns with root causes, Team Topologies, psychological safety matrix, combined flow and DORA metric framework, failure mode remediation matrix | Every reference file in this skill |
| `effective-user-stories` | practice | Readiness as a conversation with worked examples rather than a specification gate | ceremonies-and-coaching.md, anti-patterns.md definition of ready |

## Reasoned practice, not sourced

- The failure signal attached to each ceremony is our construction. The corpus supplies anti-patterns; converting each into a stated stopping criterion at design time is a method choice made here.
- The starting work in progress limit of one to one and a half items per person is a common practitioner heuristic offered as a starting point, and it is labelled as such rather than presented as evidence.
- The two documentation tests (could a new joiner act, would an auditor accept) are ours, built to make "barely sufficient" checkable rather than rhetorical.
- The worked example is a composite constructed to illustrate the diagnosis sequence. The numbers are internally consistent and illustrative, not measured.

## Deliberately not used

| Source | Reason |
| --- | --- |
| ISO/IEC 42001 AI management system material in Corpus 1 | Real and useful, but it belongs to `regulatory-compliance` and `governance`. Including it here would duplicate ownership of an obligation |
| Lean portfolio management and value stream funding detail | Enterprise investment governance sits with `business-architecture` and `finance`. Referenced here only as the lever behind the feature factory anti-pattern |
| Specific scaled framework mechanics (SAFe roles, cadences, LeSS rules) | Version-dependent and long. The durable guidance is the selection test and the stop condition, which are retained |
| Platform engineering and developer experience detail | Belongs to engineering. Retained only as the platform team type in the topology table |
| Agentic and generative AI delivery workflows from Corpus 1 | Fast-moving and tooling-specific, and it would date this skill within a year |
