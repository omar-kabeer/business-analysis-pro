# Coverage Report: agile-coach

Upgraded 10 August 2026 under `skills/skill-upgrader/references/upgrade-spec.md`. Second skill in the alphabetical pass.

## What changed

This was the thinnest skill audited so far: a single 44-line reference listing framework names and ceremony names with no selection criteria, and advice that would have been identical in any agile blog post since 2011. It told a reader that velocity should not be a target without telling them what to give leadership instead, and it recommended frameworks without a single stop condition.

The rewrite makes the skill diagnostic rather than prescriptive. Framework selection now runs through problem-domain classification first, then selection tests with explicit stop conditions. Flow mechanics are quantitative: Little's Law and its two corollaries, flow efficiency as a measurable number, the theory of constraints loop in order, work in progress limits as numbers with a blocking policy, and service level expectations derived from cycle time percentiles rather than from story points. Team structure and cognitive load are added, because a material share of what presents as process failure is structural. Every ceremony now carries a failure signal, so a dead ceremony has a stated criterion for removal. And the metric section states the prohibitions explicitly rather than implying them.

References went from one file to six: `framework-selection.md`, `flow-and-metrics.md`, `ceremonies-and-coaching.md`, `anti-patterns.md`, `worked-example.md`, `sources.md`. The superseded `agile-frameworks.md` was removed, its content absorbed and expanded.

## Coverage table

| Obligation | Anchor | Status before | Where covered after | Note |
| --- | --- | --- | --- | --- |
| Agile perspective on business analysis | BABOK 11.1 | Named, not used | framework-selection.md three horizons | Horizons mapped to owning skills; this skill owns the rhythm between them, not the artefacts |
| Barely sufficient documentation stance | BABOK 11.1 | Claimed in description, absent from body | framework-selection.md, anti-patterns.md | Made checkable with two tests rather than left as rhetoric |
| Scaled framework artefacts | BABOK 11.1 | Claimed, absent | framework-selection.md selection and stop conditions | Deliberately excludes version-specific SAFe and LeSS mechanics; decision recorded in sources.md |
| Predictive against adaptive approach selection | BABOK 3.1 | Absent | framework-selection.md, SKILL.md handoff to `ba-planning` | Boundary drawn: `ba-planning` plans the analysis work, this skill shapes delivery |
| Scrum definition, current | `scrum-guide-2020` | Partial, pre-2020 shape | framework-selection.md | Adds the three commitments, which the old reference omitted and which teams most often drop |
| Kanban practices and maturity path | Corpus 1 | Four bullets | framework-selection.md, flow-and-metrics.md | Adds explicit policies, per-stage limits, and the maturity sequence so practices are not adopted out of order |
| XP practices | Corpus 1 | Named only | framework-selection.md | Kept brief with a handoff to engineering, which owns the depth |
| Problem domain classification | Corpus 1, Cynefin | Absent | framework-selection.md | The most load-bearing addition. Explains why importing a best practice into a complex domain fails |
| Little's Law and corollaries | Corpus 1 | Absent | flow-and-metrics.md | Includes the stability precondition, which is usually omitted and invalidates most forecasts |
| Flow efficiency | Corpus 1 | Absent | flow-and-metrics.md | Requires waiting states on the board to measure, stated as a precondition |
| Theory of constraints loop | Corpus 1 | Absent | flow-and-metrics.md, anti-patterns.md | Subordination named as the step teams skip |
| Work in progress limits as numbers | Corpus 1 | "Limit work in progress" | flow-and-metrics.md | Starting heuristic given and labelled as heuristic, with a blocking policy |
| Service level expectations | Corpus 1 | Absent | flow-and-metrics.md | Percentile-based forecasting as the honest replacement for point-derived dates |
| Flow, DORA, and outcome metrics | Corpus 1 | Three metrics, no targets | flow-and-metrics.md | Read as a set; speed metrics paired with failure metrics |
| Metric misuse prohibitions | Corpus 1 | Implied | flow-and-metrics.md, SKILL.md gate 3 | Stated explicitly, plus the utilisation ceiling |
| Ceremony purpose and timebox | Practice | Covered | ceremonies-and-coaching.md | Adds participants and a failure signal per event |
| Retrospective effectiveness | Practice | Format list | ceremonies-and-coaching.md | Shifts the emphasis from format to output discipline and escalation |
| Coaching stance and stance shifting | Corpus 1 | Absent | ceremonies-and-coaching.md | Matched to maturity, with two guardrails on consulting |
| Psychological safety | Corpus 1, Edmondson | Absent | ceremonies-and-coaching.md | Two-axis model, with a diagnostic based on response to failure |
| Team topologies and cognitive load | Corpus 1 | Absent | framework-selection.md, anti-patterns.md | Includes the misdiagnosis pattern where overload reads as process failure |
| Product operating model, feature factory | Corpus 1, Cagan | Absent | anti-patterns.md | Named as an executive intervention, with the outcome framing routed to `product-manager` |
| Anti-pattern taxonomy with root causes | Corpus 1 | Absent | anti-patterns.md | Nine patterns, each with observation, root cause, cost, and shift |
| Lean waste categories | Corpus 1 | Absent | Not covered directly | Decision: the useful content is the utilisation ceiling and queue visibility, both retained in flow-and-metrics.md. The three-category vocabulary adds terminology without adding capability |
| Lean portfolio management, value stream funding | Corpus 1 | Absent | Referenced only as the lever behind the feature factory | Decision: enterprise investment governance belongs to `business-architecture` and `finance` |
| ISO/IEC 42001 AI governance | Corpus 1 | Absent | Not covered | Decision: belongs to `regulatory-compliance` and `governance`. Duplicating it here would double-own the obligation |
| Platform engineering and developer experience | Corpus 1 | Absent | Platform team type only | Decision: engineering owns the depth |
| Agentic and generative AI delivery workflows | Corpus 1 | Absent | Not covered | Decision: fast-moving and tooling-specific, would date the skill within a year |
| Kanban maturity model levels in full | Corpus 1 | Absent | Sequence described, levels not enumerated | Decision: the actionable point is do not adopt practices out of sequence. The six-level enumeration is reference material, not instruction |

No row remains at absent without a decision.

## Boundary check

| Neighbour | This skill states | Neighbour states | Verdict |
| --- | --- | --- | --- |
| product-owner | Hands backlog, stories, splitting, prioritisation, and the readiness and done artefacts to `product-owner` | Its description takes direction from `product-manager` and routes to `quality` and `acceptance-testing`; does not name `agile-coach` | Not reciprocal. Open item for the product-owner upgrade |
| product-manager | Hands product strategy, outcomes, roadmap, and discovery to `product-manager` | Its description hands backlog and delivery detail to `product-owner`; does not name `agile-coach` | Not reciprocal. Open item |
| ba-planning | Hands planning of the analysis work itself to `ba-planning` | Its description covers approach selection including adaptive; does not name `agile-coach` | Boundary is real and currently stated one way only. Proposed rule below |
| estimation | Routes estimation method and forecasting technique | `estimation` names `product-owner` for sizing conventions, not `agile-coach` | Consistent, no conflict |
| regulatory-compliance, governance | Routes evidence obligations and decision records | Reciprocal by their general scope | Clean |

## Boundary conflicts raised

**Conflict 1, proposed rule, needs adding to the routing map.** `ba-planning` and `agile-coach` both touch approach selection. BABOK 3.1 assigns approach selection (predictive, adaptive, hybrid) to the planning task, while the agile perspective assigns team practice to the delivery method. Proposed rule: `ba-planning` owns how the analysis work is planned, governed, and traced, including whether the analysis approach is predictive or adaptive. `agile-coach` owns how the delivery team works, including framework selection, ceremonies, flow, and metrics. Where the two meet, the analysis approach follows the delivery approach rather than the reverse. Logged rather than applied, since the routing map should be rebuilt in Batch 9.

**Conflict 2, escalated to Batch 9 with the register items already logged.** The register assigns Epics, Features, and Spikes to `orchestrator`, which is almost certainly a placeholder rather than a decision; they belong to `product-owner`. It also leaves "Lightweight documentation" and "SAFe program and portfolio artefacts" at "(reference standard / knowledge base)" with no owning skill, although the `agile-coach` description claims both and now covers them. Recommended resolution: assign both rows to `agile-coach`, and move Epics, Features, and Spikes to `product-owner`.

## Validation

Frontmatter correct, name matches folder. Description 897 characters with twelve trigger phrases and three handoffs. Body 51 lines. Six reference files, longest 106 lines, all within the 250 cap. No README. No em dash or en dash. Every reference file is mentioned in `SKILL.md` and every mention resolves. The superseded `agile-frameworks.md` was deleted and is recoverable from git history; no file in the working tree references it. `node scripts/validate-assets.mjs` reports no error against this skill, leaving only the pre-existing `skills/.token-optimizer` failures.

## Trigger test

Five realistic messages the description should fire on: "our sprints keep slipping and I don't know why"; "should we move to Kanban"; "leadership wants us to increase velocity by 20 percent, is that reasonable"; "the retro produces the same complaints every time"; "we have four teams on one product now, do we need SAFe".

## Open items

1. `product-owner` and `product-manager` upgrades must state the reciprocal handoff to `agile-coach`.
2. Routing map needs the `ba-planning` against `agile-coach` rule from conflict 1, in Batch 9.
3. Register reassignments from conflict 2, held for Batch 9 per the standing decision.
4. Independent review by the `deliverable-critic` agent and the `quality` skill not run, per the standing decision to keep moving.
5. The worked example is a constructed composite. If a real engagement produces better numbers, replace it.
