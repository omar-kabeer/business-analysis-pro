# Planning Governance and Information Management

BABOK 3.3 and 3.4. Both are design tasks: decide the rules before there is anything to apply them to. Operating the rules afterwards belongs to `governance`, and running the repository belongs to `information-management`.

## Decision rights

The single most useful output of 3.3 is a table nobody usually writes: for each class of decision, who decides, on what evidence, within what time, and what happens if they do not.

| Decision class | Example | Decided by | Evidence needed | Clock |
| --- | --- | --- | --- | --- |
| Requirement inclusion | Is this in scope for release one | Product owner or sponsor | Priority basis applied, effort indication | Within refinement |
| Requirement interpretation | What does this rule mean at the boundary | Named business subject expert | The rule and its exceptions | 2 working days |
| Design option selection | Build, buy, or configure | Named accountable owner, with architecture | Options with tradeoffs and cost | At the decision point |
| Change after baseline | Scope change post-approval | Change authority at the relevant threshold | Impact analysis | Per threshold |
| Exception to a mandated deliverable | Skipping a required artefact | The owner of the standard | Rationale and residual risk | Before the work is skipped |

Two rules make this work. Every decision has exactly one accountable owner, because two owners means no owner. And every decision has a stated time, because an unbounded decision is a blocker with no name.

Push decisions to the lowest level that has the information and the authority. Escalate by threshold, not by default. A central board reviewing everything becomes the constraint on delivery, and the organisation routes around it, which is worse than not having it.

## Prioritisation basis

Decide the basis before the first argument, or the basis becomes whoever is most senior in the room.

Name the method, the criteria, and who applies it. Common bases are value against effort, regulatory or contractual obligation, risk reduction, dependency order, and time-boxed cost of delay. Most initiatives need more than one, so also state the order in which they apply: an obligation with a statutory date outranks value scoring, and saying so in advance prevents the recurring debate.

State what a priority label actually means. "High" that describes half the backlog carries no information. Where categories are used, cap the top category as a proportion of the whole, and enforce it. Hand the scoring mechanics and weighting method to `decision-analysis` rather than inventing them here.

## Change control, designed before it is needed

Design the path while nothing is contested. It needs a defined route from raised to assessed to decided to recorded, thresholds that say which changes need which authority, a stated turnaround per threshold, and a definition of what constitutes a change at all.

That last item prevents the most common dispute. A change is a departure from what was agreed. A clarification of something ambiguous is not a change, it is a defect in the original requirement. A new want is a change. Write the distinction down, because every initiative eventually argues about it, and arguing about it while a specific item is in play never goes well.

Set thresholds so that most changes are decided by the team and only genuinely material ones escalate. Where compliance requires an audit trail, the trail is the record of the decision, not the ceremony of a meeting; a lightweight recorded decision satisfies an auditor, and a heavyweight board that meets fortnightly does not satisfy delivery. Operating this process is `change-control` and `governance`; designing it is here.

## The information approach

Four decisions, each of which should follow risk rather than habit.

**Detail level.** How precisely each kind of information is captured. A rule that carries financial or regulatory consequence gets a decision table and worked examples; a low-risk preference gets a sentence. Uniform detail across everything is the signal that nobody made this decision.

**Traceability depth.** How far links are maintained. Full bidirectional tracing from business objective through requirement and design to test and benefit is expensive to build and expensive to maintain, and it is genuinely required in regulated and safety-relevant work. Elsewhere, partial tracing on the high-risk subset gives most of the protection for a fraction of the cost. State which you are doing, on what subset, and why. Deciding by default gives you either an unmaintained matrix or a finding.

**Retention.** How long analysis information is kept and in what form. Regulatory retention obligations attach to some of it. Route the obligation to `regulatory-compliance` and record the resulting period here.

**Reuse.** What existing analysis is adopted rather than rewritten, and what this initiative should leave in a reusable state for the next one. This is where the largest saving usually sits and where it is almost never planned.

The mechanics that implement these decisions, meaning repository structure, naming conventions, identifier schemes, versioning, and baselines, belong to `information-management`. This skill decides the policy; that skill builds the machinery.

## Governance for automated decision-making

Where the solution makes or materially shapes decisions automatically, the governance design needs four additions, identified here and owned by `regulatory-compliance`: an impact assessment completed before requirements are baselined, explicit provenance and quality requirements for the data used, a mapping from each identified algorithmic risk to the requirement that mitigates it, and logging sufficient to reconstruct any individual decision after the fact, including any human override.

None of this is in BABOK, which predates the obligation. Plan for it anyway where it applies.

## What good looks like

The governance design works if a new decision arriving tomorrow has an obvious owner, a known route, and a stated clock, without anyone convening a meeting to work out who should decide. If that question needs asking, the design is incomplete regardless of how much of it is documented.
