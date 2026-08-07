# Conformance checks: bmm-1.3

Source id: `bmm-1.3`
Standard: OMG Business Motivation Model (BMM).
Edition held: Version 1.3, OMG document formal/2015-05-19.
Publisher: Object Management Group (OMG).
Authority: normative.
Identity: confirmed from the title page on 2026-08-07. BMM version 1.3, OMG formal/2015-05-19.
Licence: OMG specification. A perpetual, worldwide, royalty-free licence to use and to build software and derivative specifications, provided the copyright and permission notices appear and the specification is not modified. Paraphrase only; do not reproduce clause text at length.
Modality note: BMM defines its concepts firmly (an Objective is by definition attainable, time-targeted, and measurable), and states many structural expectations with "should". The definitional constraints are gated as blocking; the softer "should" items are advisory. The BMM text itself names two model-analysis checks (goals not quantified by objectives, business rules not derived from a business policy), which we adopt directly.
Artefact types constrained: `motivation-model`, `business-objective`.
Owning skills: `strategy` (primary), `business-architecture`.
Locator style: BMM 1.3 clause `<n>`.

## How to read this file

Three layers, kept separate.

- Source (S). What BMM states or defines, with the clause locator.
- Inference (I). Our reasoning connecting BMM to our artefacts, including house-gate decisions.
- Check (C). The reviewer question, answerable yes or no from the finished artefact.

## Checks: business-objective

Applies to a single business objective.

| Check id | Question (yes = pass) | Severity | Locator | How the reviewer confirms |
| --- | --- | --- | --- | --- |
| BMM-BO-01 | Is the objective time-targeted, carrying an absolute or relative time frame stating when it is to be met? | blocking | 8.2.5 | Find the time frame (for example "by 1 Jan 2027" or "within two years"). An objective with no deadline fails. |
| BMM-BO-02 | Is the objective measurable, carrying explicit criteria that allow at least a yes-or-no determination of whether it is met? | blocking | 8.2.5 | Find the criterion or metric (for example "95% on-time"). An objective with no measurable criterion fails. |
| BMM-BO-03 | Does the objective quantify or link to a specific goal it advances? | blocking | 8.2.5 | Confirm the objective names or references the goal it measures progress toward. A free-floating objective with no goal fails. |
| BMM-BO-04 | Is the objective attainable, that is realistic given the enterprise's plans? | advisory | 8.2.5 | Attainability needs plan and resource context. Record the reviewer judgement rather than failing on wording. |
| BMM-BO-05 | Is the objective stated as a time-targeted phrase followed by a quantified target? | advisory | 8.2.5 | Check the recommended form (time phrase, then quantified noun). Deviation is a style flag, not a fail. |

## Checks: motivation-model

Applies to a business motivation model as a whole.

| Check id | Question (yes = pass) | Severity | Locator | How the reviewer confirms |
| --- | --- | --- | --- | --- |
| BMM-MM-01 | Are the model's elements classified into the BMM concepts, separating Ends (Vision, Goal, Objective) from Means (Mission, Strategy, Tactic, Directive)? | blocking | 8.2.1, 8.3.1 | Confirm each element is typed as a BMM concept and that Ends and Means are distinguished. An untyped list of aspirations fails. |
| BMM-MM-02 | Is every Goal quantified by at least one Objective? | blocking | 8.2.4, 8.2.5 | List the goals; confirm each has one or more measurable objectives. A goal with no objective fails. This is a check BMM itself names. |
| BMM-MM-03 | Is every Business Rule derived from at least one Business Policy? | blocking | 8.3.10, 8.3.11 | List the business rules; confirm each traces to a business policy. A rule with no governing policy fails. This is a check BMM itself names. |
| BMM-MM-04 | Is every Desired Result (Goal or Objective) supported by at least one Means (a Course of Action or Directive)? | blocking | 8.3.1 | Confirm each goal or objective has a strategy, tactic, or directive intended to achieve it. An End with no Means to reach it fails. |
| BMM-MM-05 | Does the model include a Vision that its Goals amplify? | advisory | 8.2.2, 8.2.4 | Look for a Vision and goals that support it. Advisory: some models start at Goal level. |
| BMM-MM-06 | Are the Influencers on the enterprise recorded, with Assessments linking them to the Ends or Means they affect? | advisory | 8.5 | Look for influencers and assessments. Advisory: influencer analysis may be a separate artefact. |
| BMM-MM-07 | Is each Mission statement formed from an action, a product or service, and a market or customer? | advisory | 8.3.2 | Check the three-part form. Advisory style check on the Mission element. |
| BMM-MM-08 | Does each Means record who established it and when, as an audit trail? | advisory | 8.3 | Look for provenance on Means. Advisory: BMM states this cannot always be mandated. |

### Provenance, business-objective

- BO-01. S: An Objective is a statement of an attainable, time-targeted, and measurable target; all Objectives should be time-targeted, including an absolute or relative time frame indicating when the Objective is to be met (8.2.5). I: Time-targeting is part of BMM's definition of an Objective, so we gate on it.
- BO-02. S: Objectives should be measurable, including explicit criteria for determining whether the Objective is met, at minimum a yes-or-no basis (8.2.5). I: Measurability is definitional; gated.
- BO-03. S: An Objective is a step toward a Goal and quantifies a Goal, providing the basis for measures of whether the Goal is being achieved (8.2.5). I: We gate on the objective linking to a goal, since a BMM Objective exists to measure a Goal.
- BO-04. S: Objectives should be attainable, else the business plans are unrealistic (8.2.5). I: Attainability needs plan context, so advisory.
- BO-05. S: Statements of Objective should begin with the time-targeted phrase followed by a quantified noun (8.2.5). I: A recommended form, so advisory.

### Provenance, motivation-model

- MM-01. S: An End may be a Vision or a Desired Result (Goal or Objective); a Means may be a Mission, a Course of Action (Strategy or Tactic), or a Directive (Business Policy or Business Rule) (8.2.1, 8.3.1). I: We gate on elements being typed to these concepts, since an untyped model is not a BMM.
- MM-02. S: A Goal should be narrow enough to be quantified by Objectives; an Objective quantifies a Goal; BMM tools report goals that are not quantified by objectives (8.2.4, 8.2.5, and the tool-analysis note in 1.2). I: BMM names this as an analysis check, which we adopt as blocking.
- MM-03. S: BMM tools report business rules that are not derived from any business policy; a Business Rule is a Directive under governance (8.3.11, and the tool-analysis note in 1.2). I: BMM names this as an analysis check, adopted as blocking.
- MM-04. S: A Means is any capability that may be called upon to achieve Ends; Courses of Action channel efforts toward Desired Results and are governed by Directives (8.3, 8.3.3). I: We read an End with no supporting Means as an incomplete motivation model, so we gate on it.
- MM-05. S: A Goal amplifies a Vision, indicating what must be satisfied to attain the Vision (8.2.4). I: Advisory, since a model may legitimately begin at Goal level.
- MM-06. S: Influencers act on Ends and Means; an Assessment judges the impact of an Influencer on Ends or Means (8.5). I: Advisory; influencer analysis may be separate.
- MM-07. S: A Mission statement should consist of an action part, a product or service part, and a market or customer part (8.3.2). I: Advisory style check.
- MM-08. S: It is useful to document who established a Means and when, so an audit trail exists, though this cannot always be mandated (8.3). I: BMM itself declines to mandate it, so advisory.

## Not-testable obligations

| Obligation (paraphrase) | Locator | Why not testable on a finished artefact |
| --- | --- | --- |
| Whether an element is a Vision or a Goal, or a Strategy or a Tactic, is often impossible to determine without in-depth knowledge of the planners' context and intent. | 8.2.4, 8.3.3.1 | BMM states the distinction cannot be judged from the artefact alone, so we do not gate on correct Vision-vs-Goal or Strategy-vs-Tactic classification. |
| Placeholders (Organization Unit, Business Process, Asset and Liability) connect the motivation model to other models. | 8.6 | These are references out to other artefacts, not motivation content to test here. |
| The EU-Rent worked examples. | 8.5.8 and tables | Illustrative examples, not obligations. |

## Coverage

- `business-objective`: 3 blocking checks (BO-01 to BO-03), 2 advisory (BO-04, BO-05).
- `motivation-model`: 4 blocking checks (MM-01 to MM-04), 4 advisory (MM-05 to MM-08).

Both constrained artefact types carry at least one blocking check (forward cross-check satisfied). Every check maps to one of the two declared artefact types, no orphans. No other normative source constrains these types, so no conflict.
