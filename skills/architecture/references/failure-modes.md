# Failure Modes and Review Rubric

## Rubric

Score each dimension pass or fail. Any fail blocks handover to `requirements`.

| Dimension | Pass | Fail |
| --- | --- | --- |
| Concern traceability | Every view names the stakeholder concern it answers | A diagram set produced because diagrams are expected |
| Boundary clarity | The system of interest and every crossing are named | Context skipped, work started at container level |
| Interface completeness | Every interface names parties, contract owner, data, trigger, volume, and failure behaviour | Interfaces listed as system names with an arrow between them |
| Failure paths | Unavailability, duplication, timeout, and partial success are specified | Only the success path modelled |
| Measurable quality | Every non-functional requirement has stimulus, environment, measurable response, measurement point, and business consequence | "Fast", "scalable", "secure", "user friendly" |
| Threshold provenance | Every number traces to a contract, regulation, measurement, or a named business decision | A round number nobody can source |
| Genuine options | Options differ structurally and are evaluated against the same prioritised attributes | One plan and two strawmen |
| Named tradeoffs | Sensitivity and tradeoff points stated and put to stakeholders | Tradeoffs resolved silently by the author |
| Decision record | Alternatives and rationale recorded, not just the outcome | The choice with no record of what was rejected |
| Scope discipline | Nothing specifies internal component design, class structure, or algorithms | The BA has written engineering's design |

## Failure modes

**Diagrams answering no question.** A pack of views produced because a template asked for them. They are not read, not maintained, and go stale within a quarter. The fix is upstream: elicit concerns first, and produce only views that answer one.

**Starting inside the boundary.** Work begins at container or component level because context feels too simple. Scope disagreements then surface during build instead of during analysis. Always draw the context view, even when it looks trivial, because the argument it provokes is the one you want early.

**Happy path architecture.** Interfaces specified for the case where everything responds. The most expensive omission in this skill's scope, because the failure behaviour is a business decision (what does the operator do when the payment gateway is down for two hours) and only the business can make it. Ask the failure question for every interface.

**Unsourced thresholds.** A number appears in a specification, nobody can say where it came from, and it is then defended for years and designed around at real cost. Demand provenance for every threshold, and record it beside the number.

**Distribution as fashion.** Microservices adopted for one team, which pays the operational and consistency cost of distribution to solve an organisational problem it does not have. Ask how independently the parts must change and who owns each; if the answer is one team, the answer is a modular monolith.

**Eventual consistency left unspecified.** An asynchronous design is chosen and nobody states the acceptable window, what the user sees during it, or what happens when it is exceeded. This surfaces at acceptance as a defect argument that is actually a missing requirement.

**Non-functional requirements as an appendix.** Collected after the design is settled, so they can no longer influence it. They are then either met by accident or missed expensively. Quality attributes drive architecture; they must precede the option framing, not follow it.

**Architecture written as instruction to engineering.** The BA specifies component structure, frameworks, or algorithms. It damages the relationship, it is usually wrong, and it obscures the constraints that actually needed stating. Stay on the boundary, the contract, and the measurable quality; leave the inside to engineering.

**Options paper for a reversible decision.** Effort spent framing a choice that could be changed in a sprint. It burns credibility and delays work. Reserve the ceremony for decisions expensive to reverse.

**Enterprise views produced here.** Capability maps, value streams, and target operating models drawn under a solution architecture banner. They duplicate `business-architecture` and will conflict with it. Route them.

## Handoffs

| Situation | Route to |
| --- | --- |
| Enterprise capability map, value stream, operating model, portfolio view | `business-architecture` |
| Writing the requirement or constraint statements themselves | `requirements` |
| Rendering any diagram in a notation | `visual-modelling` |
| Entity definitions, data dictionary, logical or physical data model | `data-modelling` |
| Warehouse, pipeline, or reporting structure | `business-intelligence` |
| Internal component design, framework choice, code, build strategy | engineering |
| Weighted scoring across criteria | `decision-analysis` |
| Cost modelling and investment appraisal of an option | `finance` |
| Supplier or package selection rather than a design choice | `vendor-evaluation` |
| Contractual service levels behind a threshold | `procurement-contracts` |
| Regulatory or framework obligation behind a control | `regulatory-compliance` |
| Architectural risk with a named trigger | `risk-analysis` |
| Recording the decision | `governance` |
| Turning a threshold into a test | `acceptance-testing` |
| Interaction design behind an accessibility target | `ux` |
