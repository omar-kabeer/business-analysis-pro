# Impact Analysis Reference

## Classify before assessing

| Class | What it means | Handling |
| --- | --- | --- |
| New need | Something genuinely not known or not wanted before | Full change assessment, usually chargeable |
| Defect in the baseline | The baseline says something wrong or contradicts itself | Correction, not a change; fix and re-baseline |
| Clarification | The baseline is ambiguous and both readings were plausible | Clarify and record; assess only if the reading chosen costs more |
| Preference | Someone would prefer it differently, with no changed outcome | Usually decline, politely, with the reason |
| Regulatory or legal | An external obligation changed | Mandatory; assess how, not whether |

Misclassifying a defect as a change is how teams end up charging clients for their own errors. Misclassifying a new need as a clarification is how scope creeps.

## Impact dimensions

Assess every one, and write "none" where there is none. A blank reads as not considered.

| Dimension | Ask |
| --- | --- |
| Requirements | Which requirements change, are added, or are withdrawn |
| Designs | Which design decisions are invalidated or constrained |
| Solution components | Which components, interfaces, and data structures are touched |
| Tests | Which test cases change, and what needs full regression |
| Documentation and training | What must be rewritten, and who must be retrained |
| Cost | New build, rework, retest, documentation, and any contract variation |
| Schedule | Critical path effect, not just effort; and the effect on dependent teams |
| Risk | New risks introduced, and existing risks made better or worse |
| Benefit | Does the business case still hold; is the benefit case improved or diluted |
| Quality | Any reduction in non-functional characteristics |
| Resources | Skills and availability, including from other teams |
| Operational readiness | Support, runbooks, migration, and cutover effects |
| Compliance | Any obligation affected; route to `regulatory-compliance` |
| Other initiatives | Shared components, shared teams, and portfolio dependencies |

## Tracing the real footprint

Start from the requirement the change names, then walk the matrix outward:

1. Requirements that trace to the same business need.
2. Requirements that depend on this one, and requirements this one depends on.
3. Designs and components allocated to those requirements.
4. Test cases covering all of the above.
5. Interfaces to systems outside the initiative's control, which are where the cost usually hides.

Stop expanding when the next ring shows no dependency. Record how far you walked, so a reviewer can judge whether you stopped too early.

## Estimating the change

Rework is usually two to four times the cost of building the same thing first time, because it includes undoing, retesting, and re-communicating. Estimate the three parts separately (new work, rework, retest) rather than giving one number, and hand the estimation method to `estimation`.

## Cumulative effect

Report each change against the running total: number approved this period, cumulative cost and schedule impact, and cumulative movement from the original baseline. Individually reasonable changes are how baselines die. The change authority needs the running total in front of it every time.

## Thresholds

Agree these once, in the governance approach, and apply them without negotiation:

| Impact | Authority |
| --- | --- |
| Within tolerance, no cost or schedule effect | Business analyst or product owner |
| Material but within contingency | Project manager or steering lead |
| Beyond contingency, or benefit case affected | Sponsor or change board |
| Scope, contract, or compliance affected | Sponsor plus the affected function |

## After approval

An approved change is not done until the requirement text, the designs, the tests, the traceability matrix, the plan, and the baseline all reflect it, and the people relying on the old version have been told. Close the change record only when that is true.
