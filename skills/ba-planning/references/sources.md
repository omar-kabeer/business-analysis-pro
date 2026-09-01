# Sources

Resolve each source id against `sources/manifest.json`.

## BABOK v3 anchors

| Anchor | What it establishes | Where used |
| --- | --- | --- |
| 3.1 Plan Business Analysis Approach | The business analysis approach as this skill's primary output: deliverables, activities, timing, formality, tailored to the initiative | approach-selection.md, SKILL.md steps 1 and 2 |
| 3.2 Plan Stakeholder Engagement | The stakeholder engagement approach: identification, analysis, and collaboration planning | stakeholder-engagement-planning.md |
| 3.3 Plan Business Analysis Governance | Design of decision-making, prioritisation, change control, and approval authority | governance-and-information-planning.md |
| 3.4 Plan Business Analysis Information Management | Design of how analysis information is stored, structured, traced, retained, and reused | governance-and-information-planning.md |
| 3.5 Identify Business Analysis Performance Improvements | Monitoring the analysis work and improving the approach | performance-and-estimation.md |
| Technique 10.19 Estimation | Estimation methods and the estimate of the analysis effort itself | performance-and-estimation.md |
| Technique 10.27 Lessons Learned | Structured retrospection feeding the next approach selection | performance-and-estimation.md |
| Technique 10.33 Prioritization | Prioritisation basis as a governance decision made in advance | governance-and-information-planning.md |
| 4.1, 4.2, 4.4, 4.5 | The approach and engagement approach as guidelines and inputs to every elicitation and collaboration task, which is why this skill runs first | SKILL.md role |
| 6.1, 6.3, 6.4, 7.4 | The approach as a guideline to strategy analysis, risk, change strategy, and requirements architecture | SKILL.md role |

BABOK is the authority for the task structure and the artefact names in this knowledge area, and it is the correct authority. It is dated in two respects noted in the reference files: it has no concept of governance for automated decision-making, and its treatment of estimation predates probabilistic throughput forecasting.

## Standards

| Source | Clause | Contribution | Authority |
| --- | --- | --- | --- |
| ISO/IEC 42001 | AI management system | The four additions to governance design where the solution makes or shapes decisions automatically: impact assessment, data provenance, risk to requirement mapping, reconstruction logging. Identified here, owned by `regulatory-compliance` | Referenced by name; not held in the library |
| ISO/IEC 19761 | COSMIC functional size | Functional size measurement as one estimation basis, named for completeness | Referenced by name; not held |
| `cocomo-ii-2.1` | Parametric estimation | Held in the library and relevant to `estimation` rather than to the planning decision made here | Not used directly |

ISO/IEC 42001 and ISO/IEC 19761 are cited by name but are not in `sources/`. Their content here comes from the curated corpus. Do not treat either as a conformance gate without acquiring it.

## Papers and practice

| Source | Year | Contribution | Where used |
| --- | --- | --- | --- |
| Modern Business Analysis Research Corpus 1 and 2, `sources/papers/ba-planning/` | 2025 | The planning framework comparison across plan-driven, iterative, product discovery, platform, and automated decision-making contexts; distributed decision rights against central boards; governance bottleneck as a failure pattern; three-point, functional size, and Monte Carlo throughput estimation; the integrated performance measure matrix including escaped requirement defects and flow measures; the capability maturity progression; the list of planning practices to retire | Every reference file |
| `agile-practice-guide` | 2017 | Lifecycle selection and tailoring, supporting the predictive against adaptive against hybrid decision | approach-selection.md |

## Reasoned practice, not sourced

- The five-axis sizing assessment (scale, uncertainty, regulatory exposure, parties, cost of error) is our construction, built to make proportionality a recorded judgement rather than a discretionary one.
- The decision rights table shape, and specifically the rule that every decision class carries a stated turnaround, is ours. BABOK requires decision-making to be planned; requiring a clock is the addition.
- The written distinction between a change, a clarification, and a defect in the original requirement is ours, added because every initiative argues about it and arguing while a specific item is in play never goes well.
- The instruction to establish real stakeholder availability before designing engagement is reasoned practice.
- The prohibition on using analysis performance measures for individual appraisal is ours, on the grounds that it destroys the honesty the measures depend on.

## Deliberately not used

| Source material | Reason |
| --- | --- |
| Team Topologies and Conway's Law material in Corpus 1 | Team structure is owned by `agile-coach`, and the enterprise operating model by `business-architecture` |
| Lean portfolio management and continuous funding | Portfolio and investment governance belongs to `business-architecture` and `finance` |
| Opportunity solution trees, product discovery method | Owned by `product-manager`. Named in the framework comparison as an artefact form only |
| Context engineering, system prompt specification, RAG knowledge stores, multi-agent planning | Fast-moving and tooling-specific. The durable residue, that automated decision-making changes the governance design, is retained |
| Knowledge graph and executable documentation architecture | Repository mechanics belong to `information-management` |
| Cloud-native non-functional requirement material | Owned by `architecture` |
| DevSecOps and continuous delivery integration detail | Delivery practice, owned by `agile-coach` and engineering |
| The BA-CMM level definitions in full | Retained as a progression, not enumerated as a scorecard, because maturity levels used as targets produce adoption of practices the organisation cannot sustain |
