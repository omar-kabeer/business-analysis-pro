# Design Options and Tradeoff Analysis

## What BABOK 7.5 asks for

Define design options means producing more than one genuinely viable way to meet the need, each described well enough to be compared, with the tradeoffs named. One plan and two strawmen is the most common failure, and it converts a decision into a rubber stamp.

An option is described by its approach, what it changes in the business and the estate, what it assumes, what it costs in money, time, and complexity, what it improves and degrades against the prioritised quality attributes, and what risks it carries.

## The architecture decision is the expensive one

Not every technical choice is an architecture choice. The test is cost of reversal.

| | Architecture | Detailed design |
| --- | --- | --- |
| Scope | System-wide boundaries and integration topology | Inside one component |
| Cost of change | High: structural refactoring, data migration, re-platforming | Low: localised code change |
| Driven by | Quality attributes | Functional correctness |
| Governed by | Contracts, standards, fitness functions | Code review, tests, linting |

Spend option-framing effort where reversal is expensive. Choices that can be changed in a sprint do not need an options paper, and producing one for them is how architecture work loses credibility.

## Structural styles and when each earns its place

| Style | Choose when | Real cost |
| --- | --- | --- |
| Monolith | One team, one deployment cadence, unproven domain boundaries | Scaling and release coupling once the team grows past a few squads |
| Modular monolith | You want module boundaries without distribution. Usually the right default | Boundaries decay without enforcement, since nothing physically prevents a shortcut |
| Microservices | Independent teams must deploy independently, and boundaries are proven | Distributed data, operational overhead, and eventual consistency becoming a business rule |
| Event-driven | Producers should not know consumers, replay matters, or several parties react to one fact | Debugging and tracing get much harder; ordering and duplicates need designing |
| Package or SaaS configuration | The capability is not a differentiator and a mature market exists | You inherit the vendor's model, and gaps become process change or costly customisation |

The BA-facing question behind the choice is organisational, not technical: how independently must parts of this change, and who owns each part. Distribution is a solution to an organisational problem and it charges an operational fee. Do not pay it for one team.

## Evaluating options against quality attributes

Scenario-based evaluation is the method that survives contact with stakeholders, because it forces vague preferences into comparable statements.

Build a utility tree. Take the quality attributes that matter, break each into concrete scenarios, and prioritise each scenario twice: how important it is to the business, and how uncertain the architecture's ability to meet it is. Scenarios high on both are where the analysis effort goes.

A usable scenario has a stimulus, an environment, and a measurable response: "when concurrent requests reach 5,000 during month-end close, the quote API responds within 200 milliseconds at the 95th percentile". Compare that with "the system should be scalable", which cannot distinguish between two options.

Then walk each priority scenario through each option and name four things.

**Sensitivity point.** A variable where a small change materially moves one quality attribute. Cache size against latency. These are where you need real numbers rather than judgement.

**Tradeoff point.** A variable that moves two or more attributes in opposite directions. Encrypting a payload raises security and lowers performance. Sharding raises throughput and lowers query flexibility. These are the actual decisions, and they must be surfaced to stakeholders rather than resolved quietly by whoever writes the document.

**Risk.** A decision that could fail to meet a quality attribute, recorded with its trigger. Route it to `risk-analysis`.

**Non-risk.** A decision confirmed as safe under the stated conditions. Worth recording, because it stops the same question being reopened.

Where options must be compared economically, quantify the utility gain per attribute against the cost of achieving it, and hand the financial modelling to `finance`. Where the choice needs a weighted score across criteria, hand the scoring method to `decision-analysis` rather than inventing weights here. Where the options are suppliers rather than designs, it is `vendor-evaluation`.

## Recording the decision

One record per decision, written when the decision is made. It needs the context and the forces in play, the options considered, the decision, the rationale, and the consequences accepted including what becomes harder.

The rejected options are the load-bearing part. A record showing only what was chosen cannot tell a future reader whether the alternative was considered and dismissed or never seen, and that is precisely the question they will have.

Record the decision in `governance` for the decision log, and any constraint the decision imposes in `requirements`, where it becomes a stated constraint rather than tribal knowledge.

## Keeping the architecture honest over time

An architecture erodes through accumulated small exceptions, not through one bad decision. Two mechanisms hold it.

Automated fitness functions turn an architectural rule into a check that runs. A rule such as "no module may depend on the reporting module" becomes a build-time dependency check; "end-to-end latency stays under 400 milliseconds" becomes a pipeline test. Anything checkable should be checked, because a rule enforced only by review is enforced only when someone remembers.

Where a rule cannot be automated, it needs a named forum, a decision record, and a technology position, and the debt it permits should be tracked as a backlog item with a remediation date. Debt taken deliberately as a tracked tradeoff and debt accumulated through absent standards look identical in the code and need completely different responses.
