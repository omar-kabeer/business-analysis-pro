# Failure Modes and Review Rubric

## Rubric

Score pass or fail. Any fail means the analysis is not ready to hand downstream.

| Dimension | Pass | Fail |
| --- | --- | --- |
| Problem framing | Observable condition, who is affected, business consequence, evidence | "X is slow", or a solution presented as a need |
| Evidence labelling | Established, hypothesis, and assumption marked distinctly | Uniform confident prose with no way to tell which is which |
| Source anchoring | Every factual claim names its source, or is marked an assumption with an owner | Claims that read as fact and originate in one conversation |
| Root cause | Causes distinguished from symptoms, each link testable backwards | A five whys chain ending at "human error" |
| Current state honesty | Describes what happens, including workarounds, exceptions, and shadow systems | Reproduces the process documentation |
| Future state purity | Outcomes and capabilities, with measures and baselines | Contains a product name, a technology, or a design |
| Gap expression | Capability shortfalls with measures and dependencies | A list of missing features |
| Vocabulary | Contested terms resolved before they reach requirements | The same word used in two senses across the document |
| Rules | Classified definitional or behavioural, each with source and owner | Rules stated as system behaviour with no provenance |
| Scope | Exclusions and deferrals stated with reasons | Only inclusions listed |
| Completeness claims | Overlaps and gaps named where MECE is claimed | Claimed complete without testing it |

## Failure modes

**Solving before diagnosing.** The most expensive one, and the hardest to see from inside, because the resulting project usually delivers something. The tell is a solution named before the need is agreed. Hold it back; once a solution is in the room the analysis becomes a search for justification.

**Documenting the documented process.** The current state is copied from the procedure manual rather than observed. The workarounds, exceptions, and shadow spreadsheets that constitute the real process go unrecorded, and they are usually where the problem lives. Ask what people actually do when the standard path fails, and how often that is.

**Future state contaminated by solution.** A technology or vendor appears in the target description, closing the option space before options were framed. Strip it out and restate as the capability it was meant to provide.

**Gaps as feature lists.** "We need a portal" instead of "customers cannot see their own request status without calling". The feature framing presumes the answer and makes the gap impossible to prioritise against others.

**Unbaselined outcomes.** Targets set with no current measurement, so the benefit claim can never be tested. Capture the baseline while the current state work is fresh; afterwards it is reconstruction, and reconstruction is generous.

**Vocabulary deferred.** Terms left ambiguous because defining them feels pedantic, then inherited by every requirement, report, and test. Retrofitting a definition means revisiting every artefact that used the word, which does not happen, so both meanings survive in different documents.

**Rules without provenance.** A rules catalogue with statements and no sources. Rules whose originating policy was withdrawn years ago keep being enforced, and nobody can tell which those are without the source field.

**Definitional and behavioural rules conflated.** Treating a definition as something that can be violated, or a behavioural rule as constitutive. It produces enforcement logic for things that cannot be broken and no enforcement point for things that can.

**Capability map that is an org chart.** Capabilities named after departments or systems, so the map churns whenever the organisation does and is useless for the gap analysis it was built for.

**Two capability maps.** An initiative map invented alongside an enterprise one, using different names for the same capabilities. Reuse the enterprise names or reconcile explicitly; do not run both.

**Decomposition mixing principles.** Organisational units, process stages, and system components in one breakdown, producing a structure that is neither exclusive nor exhaustive and is quietly wrong.

**Analysis paralysis dressed as rigour.** Decomposition and modelling continuing past the point where the parts can be estimated, assigned, or measured. Precision beyond that point is not maintained and does not inform a decision.

**Missing transition states.** A change strategy describing only the destination. The interim states are where dual running, reconciliation, retraining, and manual bridging cost real money, and omitting them understates the change by a wide margin.

**MECE claimed, not tested.** The word used as a quality signal without checking either property. Claiming both when only one holds is worse than claiming neither.

## Handoffs

| Situation | Route to |
| --- | --- |
| Writing requirement statements, classification, acceptance criteria | `requirements` |
| Conducting interviews, workshops, observation, surveys | `elicitation` |
| Mining existing documents, contracts, policies, tickets | `document-analysis` |
| Process flows, swimlanes, BPMN, value stream maps, process improvement | `process-modelling` |
| Enterprise capability map, value streams, target operating model, portfolio view | `business-architecture` |
| Strategic frames, business model, OKRs, competitive position | `strategy` |
| Weighted scoring, multi-criteria comparison, decision records | `decision-analysis` |
| Entity models, data dictionaries, logical and physical data models | `data-modelling` |
| Metric definitions and targets | `data-analysis` |
| Rendering any diagram in a notation | `visual-modelling` |
| Solution structure, interfaces, technical constraints | `architecture` |
| Financial modelling of change options | `finance` |
| Market sizing and competitor evidence | `market-research` |
| Risk assessment of the change strategy, assumption risk | `risk-analysis` |
| Effort or cost forecasting from a decomposition | `estimation` |
| Regulatory obligations behind a rule or constraint | `regulatory-compliance` |
| Benefit measurement against the captured baseline after delivery | `solution-evaluation` |
