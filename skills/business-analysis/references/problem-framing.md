# Problem Framing and Root Cause Analysis

## The six concepts as a working check, not a diagram

The core concept model is usually taught as a hexagon and then ignored. Used properly it is a completeness check you run in about ten minutes, and its value is entirely in the concepts you cannot answer.

| Concept | The question | A weak answer that signals trouble |
| --- | --- | --- |
| Need | What problem or opportunity, stated as a condition rather than a wish | "We need a new CRM". That is a solution wearing a need's clothing |
| Value | What is worth to whom, and how it will be recognised | "Efficiency". Unquantified and unowned |
| Stakeholder | Who is affected, who decides, who is constrained | A list containing only the sponsor and the project team |
| Context | What surrounds and constrains the change: policy, culture, regulation, estate, market | "Business as usual" |
| Change | What will be different about how the enterprise operates | A statement of what will be built rather than what will change |
| Solution | What capability satisfies the need | Named before the need is agreed, which is the diagnostic |

The concepts are interdependent. Change any one and the other five need rechecking. In practice this means that when scope changes, the stated value and the affected stakeholders have both moved and usually nobody has revisited them.

Run the check at the start, and again at every material change. Record the ones you cannot answer, because that list is the analysis plan and it is more useful than any workflow.

## Symptom, cause, and the discipline of not solving yet

What arrives is a symptom, a proposed solution, or both. "Customer complaints are up" is a symptom. "We need a chatbot" is a solution to an undiagnosed problem. Neither is a need.

Convert to a problem statement with four parts: the observable condition, who it affects, the consequence in business terms, and the evidence. "Refund processing takes 11 working days against a 3 day service commitment, affecting roughly 400 customers a month, producing 62 complaints and an estimated 180,000 in goodwill payments last year, per the complaints log and the finance write-off report." That statement can be analysed. "Refunds are slow" cannot.

Hold the solution back. Once a solution is named in a room, the analysis becomes a search for justification, and the cost of that is invisible because the resulting project usually delivers something.

## Choosing a root cause technique

| Technique | Use when | Stops working when |
| --- | --- | --- |
| Five whys | A single causal chain, and people who know the process are in the room | Causes are multiple and interacting, where it produces one arbitrary chain and false confidence |
| Fishbone | Causes are plural and you need coverage across categories before depth | Used as a brainstorm with no evidence attached to the branches |
| Fault tree | Failure is defined and you need combinations, especially where two conditions must both hold | The failure is qualitative rather than binary |
| Causal loop | The problem persists or recurs despite fixes, suggesting reinforcing feedback | You need a specific defect rather than a system explanation |
| Process analysis | The problem is located in a flow with handoffs and queues | The problem sits in policy or structure rather than sequence. Route flows to `process-modelling` |
| Data analysis | You have volume and can test whether a suspected cause correlates | The data does not exist yet, in which case say so |

Six categories keep a fishbone honest, and each needs evidence rather than opinion: method, machine or system, material or input, people, measurement, and environment. The measurement branch is the one most often skipped and most often productive, because a surprising share of business problems are measurement problems wearing performance clothing.

## Five whys, done properly

The technique has a bad reputation because it is usually performed badly. Three rules fix most of it.

Ask "why" of the condition, not of a person. "Why did the check fail" and "why did she miss the check" produce different analyses, and only the first produces a fixable answer.

Stop when you reach something the organisation controls: a policy, a process design, a system constraint, a measure, or an incentive. Stopping at "human error" means stopping one step early, every time. Continuing past organisational control into "because the market is competitive" means going one step too far.

Test each link backwards before accepting it. If removing the stated cause would not remove the effect, the link is wrong, and everything below it is decoration.

## Labelling what you actually know

Separate three things in every piece of analysis, and mark them so a reader can tell which is which.

**Established.** Evidenced, with the source named. **Hypothesis.** Plausible, not yet tested, with the test named. **Assumption.** Taken as true to proceed, with an owner and the consequence if it is wrong.

Analysis that blurs these reads as more authoritative and is worth much less, because the reader cannot tell which parts to challenge. Assumptions with owners go to the risk register through `risk-analysis`; untested hypotheses go into the analysis plan with a way to test them.

## When the problem is contested

Two stakeholders describing incompatible problems is a finding, not an obstacle. It usually means either the term at the centre is being used in two senses, which is a glossary problem, or their objectives genuinely conflict, which is a governance problem needing an arbitration route rather than another workshop.

Diagnose which before proceeding. Resolving a vocabulary conflict as if it were a priority dispute wastes everyone's time, and resolving a genuine objectives conflict by defining terms more carefully does not work at all.
