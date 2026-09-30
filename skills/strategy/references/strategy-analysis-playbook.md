# Strategy Analysis Playbook

How to run the four BABOK Strategy Analysis tasks (6.1 to 6.4) as one connected piece of work. Each task feeds the next: the current state explains the need, the future state defines success, the risk assessment tests the path, and the change strategy chooses the path. Cite BABOK by section and paraphrase; do not copy guide text.

## When this playbook applies

Use it whenever a request asks why a change is needed, what good looks like, how to get there, or whether the organisation is ready. It is the default for initiatives that start from a problem or opportunity rather than a fixed solution. When the solution is already chosen, still run a light pass of 6.1 and 6.2, because the rest of the work needs a measurable objective and a known starting point.

## 6.1 Analyze Current State

Purpose: understand the business need well enough to judge any proposed change against it.

Work through these elements, only as deeply as the change requires:

| Element | Question to answer | Evidence to seek |
| --- | --- | --- |
| Business needs | What problem or opportunity exists, for whom, and what does it cost today? | Complaints, metrics, incidents, lost revenue, regulatory findings |
| Organisational structure and culture | Who does the work, who decides, and how do they react to change? | Org charts, decision rights, past change outcomes |
| Capabilities and processes | What can the enterprise do now, and how well? | Capability map, process models, performance data |
| Technology and infrastructure | What systems support the work and what limits them? | System inventory, interface list, known defects |
| Policies and business rules | What constrains how the work is done? | Policies, rule catalogues, audit findings |
| Business architecture | How do these pieces fit together? | Existing architecture views |
| Internal assets | What can be reused? | Tools, data, skills, contracts |
| External influencers | What pushes from outside? | Industry, competitors, regulation, economy, customers |

Output: the current state description and the business requirements that express the need. The need statement must describe the problem and its impact without naming a solution. "Invoices take 14 days to approve, causing 2 percent late-payment penalties" is a need. "We need a workflow tool" is a solution in disguise.

Stop when every element that matters to the change has evidence behind it and the need is quantified. Do not map the whole enterprise.

Root cause before remedy: apply root cause analysis (10.40), such as five whys or a fishbone, to the top symptoms. A current state that lists symptoms without causes produces a future state that treats symptoms.

## 6.2 Define Future State

Purpose: define what success looks like, so the change can be judged and the solution space can be bounded.

1. Write business goals as broad statements of direction, then decompose each into objectives that are specific, measurable, achievable, relevant, and time-bound. Every objective needs a baseline from 6.1 and a target.
2. Bound the solution space: state what kinds of solutions are in and out, and the constraints (budget, time, regulation, technology, policy) that any solution must respect.
3. Describe the changes needed across the same elements used in 6.1: structure and culture, capabilities and processes, technology, policies, architecture, and assets. The future state is the set of changes, not a solution design.
4. Record assumptions explicitly. Each assumption states what is taken as true, why, the impact if it is wrong, and who can confirm it.
5. State potential value: the benefits the future state should deliver and the costs of getting there, in the units the objectives use.

Output: the future state description, business objectives, and potential value. Hand the objectives to finance for the business case and to data-analysis for measures.

Test for a good objective: someone who was not in the room can tell, at the target date, whether it was met.

## 6.3 Assess Risks

Purpose: understand the uncertainty on the path from current to future state, so the change strategy can account for it.

- List unknowns, constraints, assumptions, and dependencies drawn from 6.1 and 6.2, and treat each as a potential risk source.
- For each risk, state cause, event, and effect, and estimate likelihood and impact on value, not only on schedule.
- State the stakeholders' risk tolerance (averse, neutral, seeking), because the same exposure can be acceptable to one sponsor and unacceptable to another.
- Recommend whether to proceed, and with what responses, based on the balance of value and risk.

Output: risk analysis results and a recommendation. Hand the detail to risk-analysis for the register; the strategy skill owns the judgement that the change is worth the risk.

## 6.4 Define Change Strategy

Purpose: choose how the enterprise moves from the current state to the future state.

1. Define the solution scope: the capabilities the solution will deliver, and what it will not.
2. Perform gap analysis: for each element, the difference between current and future state. Gaps are the work.
3. Assess enterprise readiness: capacity to absorb the change, culture, sponsorship, operational readiness, and skills. A technically sound strategy fails on an organisation that cannot absorb it.
4. Identify at least two change strategy alternatives, one of which may be doing nothing or a minimal change. Compare them on value, cost, risk, time, and readiness.
5. Recommend one strategy with its rationale, and plan transition states and releases: what intermediate states the enterprise passes through, what each delivers, and what must be true before moving on.

Output: the change strategy, solution scope, and transition plan. Hand transition requirements to requirements, and release planning to product-owner where the delivery is adaptive.

## How the outputs connect

| From | To | The link that must hold |
| --- | --- | --- |
| Business need (6.1) | Objectives (6.2) | Each objective resolves part of a stated need |
| Objectives (6.2) | Potential value (6.2) | Value is measured in the objectives' units |
| Assumptions and dependencies (6.2) | Risks (6.3) | Every material assumption appears as a risk source |
| Current and future state | Gap analysis (6.4) | Every gap maps to an element described in both states |
| Risks (6.3) | Change strategy (6.4) | The chosen strategy responds to the top risks |
| Change strategy | Business case (finance) | The business case costs the chosen strategy, not a different one |

The strategy-analyst agent checks these links independently. Run it before the change strategy or business case goes for approval.

## Common failure modes

- A current state that describes a system rather than a business need.
- Objectives with no baseline, so the target cannot be judged.
- A future state that is really a solution design.
- One strategy presented with no alternatives, so the recommendation is not a choice.
- Readiness assumed rather than assessed.
- Transition states missing, so the plan jumps from today to the end state in one release.

## Quality gates

Grade each output with the rubric named in its quality profile (`evaluation/quality-profiles.json`): `current-state-assessment`, `future-state-definition`, `gap-analysis`, `change-strategy`, `business-objectives`, `solution-scope`, and `potential-value`.
