# Choosing the Analysis Approach

## Size the initiative first

Rigour is a response to risk. Rate the initiative on five axes before deciding anything about process, and record the ratings, because the plan will be challenged later and the ratings are the defence.

| Axis | Low | High | What it drives |
| --- | --- | --- | --- |
| Scale | One team, one system | Many teams, many systems, multiple parties | Coordination effort, interface analysis depth |
| Uncertainty | The need is understood and stable | Nobody can yet say what good looks like | Predictive against adaptive, and how much is fixed up front |
| Regulatory exposure | Internal, no external obligation | Regulated, auditable, externally examined | Evidence, traceability depth, retention, formality of approval |
| Parties | One decision maker | Several with competing authority | Decision rights design, escalation, engagement effort |
| Cost of error | Reversible, contained | Financial loss, safety, licence to operate | Verification depth, approval authority, how much is inspected before build |

Two mistakes follow from skipping this. Applying heavy process to a low-risk change wastes effort and teaches the organisation that analysis is bureaucracy. Applying light process to a high-exposure change produces a finding, and the finding lands on the analyst.

## Predictive, adaptive, or hybrid

| Approach | Choose when | Cost you accept |
| --- | --- | --- |
| Predictive | The need is stable, the solution is understood, and approval or regulation requires the specification before the build | Late feedback, expensive change, and a specification that ages between writing and delivery |
| Adaptive | The need is uncertain, feedback is available, and detail can be produced just in time | Weak set-level visibility, and a trail that may not satisfy an auditor unless designed for |
| Hybrid | Different parts of the same initiative sit differently on the axes above. Usually the honest answer | Complexity at the seam, which must be named rather than left implicit |

Hybrid is the common real answer and the most commonly botched. Do not say "hybrid" and stop. Name which parts are fixed up front and which are elaborated later, and name the boundary between them. A payments integration under a regulator and a customer-facing interface in the same programme need different rigour, and saying so explicitly is the plan.

## Matching the operating context

The delivery paradigm changes what the analysis artefacts are, not just how fast they are produced.

| Context | Requirements take the form of | Governance looks like | Estimation basis | Main risk to plan against |
| --- | --- | --- | --- | --- |
| Plan-driven | Specification documents, traced | Staged approval and sign-off | Bottom-up breakdown, function points | Scope creep and late feedback |
| Iterative delivery | Stories with acceptance criteria, epics | Review, refinement, definition of done | Throughput and cycle time | Loss of set-level traceability, local optimisation |
| Product discovery | Opportunity trees, hypotheses, experiments | Outcome measures and experiment gates | Throughput with confidence bounds | Experimentation outrunning technical viability |
| Platform and internal service | Interface contracts, service levels | Decision records and automated guardrails | Capability sizing, adoption rates | Poor adoption, cognitive load pushed onto consuming teams |
| Automated decision-making | Data and behaviour specifications, evaluation sets | Impact assessment, audit trail, human oversight | Probabilistic bounds | Drift, non-deterministic failure, unexplainable outcomes |

The last row matters increasingly and is absent from BABOK, which predates it. Where the solution makes or materially influences decisions automatically, the plan must add an impact assessment before requirements are baselined, explicit data provenance and quality requirements, a mapping from algorithmic risk to mitigating requirements, and logging sufficient to reconstruct a decision after the fact. Identify these here and route the obligation itself to `regulatory-compliance`.

## What the approach must actually decide

An approach document that lists activities without deciding anything is the most common weak artefact in this knowledge area. It must settle these, in writing:

**Deliverables, and what will not be produced.** The exclusions carry more information than the inclusions and prevent the later argument about a missing document.

**Level of detail, per deliverable.** "Requirements will be documented" decides nothing. State whether a rule is captured as a sentence, a decision table, or a worked example, and when each applies.

**Timing.** What is produced up front, what is produced just in time, and what triggers the transition.

**Formality of approval.** Who approves, in what form, and whether an email is sufficient evidence or is not.

**Roles.** Who does the analysis, who reviews it, who decides, and what happens when the analyst and the decision maker disagree.

**Reuse.** What existing analysis is being adopted rather than rewritten, which is usually the largest available saving and almost never planned for.

## Tailoring, and the standards you cannot tailor away

Tailoring is the central principle of this knowledge area, but it has a floor. Where an organisational methodology, a contractual obligation, or a regulation mandates a deliverable or an approval, that item is not available for tailoring, and the plan should say so explicitly rather than leaving a later reviewer to discover the omission. List the mandated items first, then tailor everything else.

Where a mandated deliverable is genuinely disproportionate, the route is a recorded exception with an owner, not a silent omission.

## Boundaries

This skill plans how the analysis work is done. It does not choose how the delivery team works, which is `agile-coach`. Where both apply, the analysis approach follows the delivery approach rather than the reverse, because the analysis exists to feed delivery. It does not run the governance it designs, which is `governance`, and it does not own the repository, which is `information-management`.
