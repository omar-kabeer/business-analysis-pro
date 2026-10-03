---
type: deliverable
domain: product-management
status: draft
version: 2.0.0
---

# Experiment and Post-Mortem Log

> **How to use this template.** Filled rows and "Example" lines illustrate one scenario so the expected depth is clear. Replace them with the facts of the work at hand: never carry example names, figures, or IDs into a real document, and say plainly when a fact is not yet known. Include every other section by default, and leave one out only when the user asks. Include these sections only when their condition applies or the user asks for them: Portfolio view (written for executive readers); Research approvals (formal governance, or regulated work). The full rules are in `templates/experiment-log.toc.json`.

## Purpose

Record the discovery experiments and launch post-mortems that turn activity into learning: the hypothesis, the risk being tested, the method, the pre-declared threshold, the result, and the decision. A good log stops the team relearning the same lessons and keeps discovery honest, because the pass line is written down before the evidence arrives. Graded by `evaluation/experiment-log-rubric.md`.

This template is a superset. Its table-of-contents manifest, `templates/experiment-log.toc.json`, marks which sections are core, standard, or extended and when each applies.

## Document Control

| Field | Value |
| --- | --- |
| Product or initiative | Supplier payment status portal |
| Owner | Maya Okafor, product manager |
| Version | 1.2.0 |
| Status | Active |
| Last updated | 2026-06-17 |

## Scope

Name the product, opportunity, or outcome the experiments serve, and the period the log covers. Link each experiment to the opportunity or assumption it tests, so the log reads as one line of enquiry rather than a list of tests.

Example: experiments for outcome OUT-01 (reduce supplier payment status calls to AP by 50 percent), June to September 2026.

## Inputs

List what the experiments are drawn from: the opportunity solution tree, the assumptions list, discovery interviews, analytics, and support data. An experiment with no source assumption is usually testing the wrong thing.

## How to run an experiment

1. State the belief as a falsifiable hypothesis: "We believe [change] will cause [effect] for [who], because [reason]."
2. Name the risk it tests: value (will they want it), usability (can they use it), feasibility (can we build it), or viability (does it work for the business).
3. Choose the cheapest method that could disprove it: interview, fake door, concierge, prototype, pretotype, or A/B test.
4. Write the measure, the success threshold, and the kill threshold before running it. If you cannot set a threshold, say so and do not run the test yet.
5. Record what was observed separately from what it means, then decide: persevere, pivot, or drop.

## Experiment log

| ID | Date | Hypothesis | Risk tested | Method | Measure and thresholds (set before running) | Stage | Result (observed) | Decision | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EXP-003 | 2026-06-02 to 06-16 | We believe suppliers who can check payment status themselves will call AP less, because 40 percent of AP calls ask "when will I be paid" | Value | Fake door link in the remittance email to 400 suppliers | Click-through; success at 25 percent or more, kill below 10 percent | Completed | 31 percent clicked (124 of 400) | Persevere to EXP-004 | ASM-02 |
| EXP-004 | 2026-06-23 to 07-07 | We believe a concierge status reply within 1 hour will cut repeat calls, because callers phone again when they get no answer | Value | Concierge: AP replies by email to portal requests | Repeat calls per supplier; success at a 30 percent fall | Running | Not yet observed | Decide on 2026-07-08 | ASM-03 |

Stage is Proposed, Running, or Completed. Leave the result as "Not yet observed" until it is. Never fill a result for a test that has not finished.

## Experiment design detail

For any experiment with customers, a spend, or more than a week's effort, record the design so it can be reviewed before it runs.

| ID | Sample and selection | Duration | Confounders and how they are handled | Ethics and consent | Reviewer |
| --- | --- | --- | --- | --- | --- |
| EXP-003 | All 400 suppliers on the June remittance run | 14 days | Larger suppliers open email more; results split by supplier size | Link labelled "coming soon", no data collected beyond the click | Chris Lee, research lead |

## Evidence record

Keep the evidence behind each completed result, separate from its interpretation, so a reader can check the call.

| ID | Evidence (counts, quotes, links) | Interpretation | Confidence |
| --- | --- | --- | --- |
| EXP-003 | 124 of 400 clicks; calls from clickers fell 18 percent against non-clickers | Strong interest, but the call fall may reflect supplier size | Medium |

## Assumptions under test

The assumptions the experiments exist to test, and their status. Each links to the experiments that test it.

| ID | Assumption | Risk type | Tested by | Status |
| --- | --- | --- | --- | --- |
| ASM-02 | Suppliers will use self-service if it exists | Value | EXP-003 | Supported |
| ASM-03 | Fast answers stop repeat calls | Value | EXP-004 | Untested |

## Decisions and learnings

What was decided after each completed experiment, and what the team now believes. A learning changes a later decision; a note that changes nothing is not a learning.

| ID | Decision | Learning | Next step |
| --- | --- | --- | --- |
| EXP-003 | Persevere | Interest is real; need to separate supplier size effects | Run EXP-004 stratified by supplier size |

## Risks and ethics

Record the risks experiments create: participant consent, personal data, brand or trust damage from fake doors, and effects on live operations. State how each is controlled.

| Risk | Control | Owner |
| --- | --- | --- |
| Suppliers expect a feature that may never ship | Fake door page says "coming soon" and offers the existing contact route | Maya Okafor |

## Launch post-mortem

For a completed launch, compare what was expected with what happened, reach the root cause, and record a concrete change. If nothing has launched, write "Not applicable yet".

| Field | Content |
| --- | --- |
| What we expected (hypothesis and target) | Portal cuts status calls from 210 to 90 a week within 8 weeks |
| What actually happened | Not applicable yet |
| What went well |  |
| What went wrong |  |
| Root cause |  |
| Changes for next time |  |

## Portfolio view

For a leadership audience, summarise the experiments by risk type and outcome, so the pattern of learning is visible at a glance.

| Risk type | Proposed | Running | Supported | Refuted |
| --- | --- | --- | --- | --- |
| Value | 0 | 1 | 1 | 0 |
| Usability | 1 | 0 | 0 | 0 |

## Research approvals

For regulated settings or experiments involving customers' personal data, record the approvals obtained before running.

| ID | Approval needed | Approved by | Date | Reference |
| --- | --- | --- | --- | --- |
| EXP-005 | Data protection review for usage analytics | Data protection officer | 2026-06-20 | DPIA-031 |

## Outputs

Decisions on which ideas to build, pivot, or drop; updated assumption status; learnings carried into the opportunity solution tree, the product vision brief, and the roadmap.

## Review criteria

- Every hypothesis is falsifiable, names its risk type, and links to an assumption.
- Measures and thresholds were set before the result, and missing thresholds are flagged as blocking.
- Stage is explicit; pending results are marked not yet observed, never invented.
- Observed evidence is separate from interpretation.
- Each completed test has a decision and a learning that changes something.
- Launch post-mortems reach a root cause and a concrete change, not blame.

## Practice anchor

Agile Perspective discovery practice; Prototyping; Metrics and Key Performance Indicators; Decision Analysis. Owned by the product-manager skill; see `skills/product-manager/references/product-discovery.md`.

## House style

Run the natural-prose-editor pass and use no em dashes. See `docs/methodology/editorial-style.md`.
