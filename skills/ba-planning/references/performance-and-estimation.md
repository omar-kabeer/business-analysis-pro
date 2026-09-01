# Estimating and Monitoring the Analysis Work

## Estimating the analysis effort

BABOK technique 10.19. The analysis effort is routinely estimated worst of all the disciplines, because it is treated as a fixed percentage of the build or as whatever time remains before development starts.

Choose the method by what evidence exists.

| Method | Use when | Gives you |
| --- | --- | --- |
| Analogous | A comparable initiative was delivered and its actuals are available | A fast baseline, accurate only to the degree the comparison holds |
| Bottom-up from a work breakdown | The deliverables are known and decomposable | Defensible detail, and a false sense of precision if the breakdown is speculative |
| Three-point | Uncertainty is real and you have optimistic, likely, and pessimistic views | An expected value plus a variance, which is the honest shape |
| Functional size | The scope is expressible as data movements or functions, and calibration data exists | Comparability across initiatives, at real measurement cost |
| Throughput forecast | Historical completion data exists for comparable work items | A probabilistic date with a stated confidence, no estimation ceremony required |

Two disciplines matter more than the method. **Never give a single unqualified number.** Give a range with a confidence, because a single number is heard as a commitment and its uncertainty is discarded in the retelling. And **state the assumptions the estimate rests on**, particularly stakeholder availability, environment and data access, and the number of parties who must agree, since those are what actually blow analysis estimates rather than the analysis itself.

Where historical throughput exists, sampling it to produce a probabilistic completion date is more accurate and cheaper than decomposing and summing. "There is an 85 percent probability this completes on or before the 14th" is a more useful and more honest statement than "34 days". Hand the modelling method itself to `estimation`; the decision to estimate the analysis work at all, and with what assumptions, is planned here.

Re-estimate at defined points as uncertainty resolves. An estimate produced once, at the point of maximum ignorance, and then defended for six months is the standard failure.

## Measuring the analysis work

BABOK 3.5. The measures must count outcomes and rework. Counting output volume rewards producing documents, which is the opposite of what this knowledge area is for.

| Measure | What it tells you | Watch for |
| --- | --- | --- |
| Escaped requirement defects | Defects traced to a requirement being wrong, missing, or ambiguous, found after the requirement was accepted | The single best measure of analysis quality. Requires the defect log to record root cause |
| Rework rate | Proportion of analysis output revised after acceptance | Distinguish legitimate change from avoidable rework, or the measure punishes responsiveness |
| Decision latency | Time from a decision being needed to it being made | Exposes governance design defects rather than analyst performance |
| Refinement readiness | Whether the team has enough understood work to proceed | A leading indicator; the others are lagging |
| Stakeholder confidence | Whether the people who must act on the analysis trust it | Soft, and worth asking directly rather than inferring |
| Benefit realisation | Whether the delivered change moved the measure it was funded to move | The only measure that verifies the analysis was aimed at the right thing. Owned with `solution-evaluation` |

Keep the set small. Six measures reviewed are worth more than twenty collected. And do not attach these to individual performance: the moment escaped defects are used to appraise an analyst, root causes stop being recorded honestly and the measure dies.

## Where the improvement usually is

Analysis performance problems are typically systemic rather than individual. Before concluding that the analysis is weak, check three things.

Decision latency, because analysts waiting on decisions look like slow analysts. Stakeholder availability against what was planned, because an engagement plan that was never achievable produces late analysis regardless of effort. And rework caused by upstream ambiguity in the objective itself, because no amount of requirement rigour compensates for an initiative whose purpose was never settled.

## Lessons learned

BABOK technique 10.27. Run it at meaningful points, not only at the end, and structure it so it produces changes rather than sentiments.

Ask what was expected, what happened, and what specifically we would do differently. Separate what was in the team's control from what was not, because recording an uncontrollable factor as a lesson produces the same lesson forever. Convert each retained item into a change to the approach, the governance, or the engagement plan, with an owner. A lessons log that never changes a plan is a filing exercise.

Feed the result back into the next initiative's approach selection, which is the only place it has value. Route the register itself and any organisational-level pattern to `solution-evaluation`, which owns the assessment artefact.

## Maturity, used honestly

Capability maturity models are useful for locating the organisation and dangerous as a target. The realistic progression runs from ad hoc and person-dependent, through project-level consistency, to defined enterprise practice, to quantitatively managed with flow and quality measures actually driving decisions, and finally to continuously optimised.

Use it to answer one question: what is the next single practice this organisation could sustain. Adopting a practice from two levels above the current state does not stick, and the attempt discredits the practice. Do not use it as a scorecard, and do not set a target level; the level is a description, not an objective.
