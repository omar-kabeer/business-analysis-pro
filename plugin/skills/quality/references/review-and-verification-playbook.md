# Review and Verification Playbook

How to review a work product and reach a defensible verdict. It draws on BABOK Reviews (10.37), Verify Requirements (7.2), Validate Requirements (7.3), and Acceptance and Evaluation Criteria (10.1). Use it with `validation-rubric.md`. Cite BABOK by section and paraphrase; do not copy guide text.

## Find the right standard

1. Identify the artefact type. It is the template the work product was built from, for example `nfr-specification`.
2. Look up its profile in `evaluation/quality-profiles.json`. The profile names the gate (`rubric`, `approved_review`, or `no_applicable_check`), the rubric file when the gate is `rubric`, and any reviewer agents.
3. Read the rubric in full, including its result bands, before reading the work product. Judging first and finding a standard afterwards produces rationalised scores.

If the type has no profile, do not invent a rubric. Report the gap and fall back to the generic dimensions in `validation-rubric.md`, marking the result as provisional.

## Choose the review format

| Format | Use when | Output |
| --- | --- | --- |
| Inspection | The work product will be baselined or is high risk | Formal defect log and verdict |
| Formal walkthrough | Stakeholders need to understand and agree the content | Issues and agreement record |
| Single issue review | One concern needs checking, such as security or accessibility | Findings on that concern only |
| Informal walkthrough or desk check | Early draft, fast feedback | Comments for the author |
| Pass around | Several reviewers, little coordination time | Consolidated comments |

Roles: the author answers questions but does not defend; reviewers find issues; a facilitator keeps the review on its objective; a scribe records findings. In an automated review, the author and the reviewer must be separate passes, and the reviewer must not see the author's self-assessment first.

## Score with evidence

For each rubric dimension:

1. Find the evidence in the work product. Quote or point to it.
2. Score 0 to 3 against the rubric's description of strong, not against a general sense of quality.
3. If you cannot find evidence, the score is 0 or 1, never 2. Absence of evidence is a finding.
4. Record the gap and a specific fix for anything below 3.

Then total the scores and apply the rubric's own bands. Do not round a borderline score up. A single dimension at 0 changes the verdict in most rubrics, even when the total is high.

## Severity

| Severity | Meaning | Example |
| --- | --- | --- |
| Critical | The work product would mislead a decision or cannot be used | Wrong figures, missing scope, fabricated evidence |
| Major | A material quality characteristic fails | Untestable non-functional requirements |
| Minor | Quality is reduced but the work product is usable | Inconsistent terminology |
| Cosmetic | Style only | Formatting, house style |

List findings in severity order. A review that lists only cosmetic findings on a draft with no measures has missed the point.

## Verification versus validation

Verification asks whether the work product is well built: complete, consistent, unambiguous, testable, and correctly notated. Validation asks whether it is the right thing: aligned to objectives, within scope, and delivering value. Report them separately, because different people fix them. The author fixes verification findings. Validation findings often need a stakeholder decision.

## Independence

Reviewer agents named in the profile audit specific concerns: requirements-verifier for requirement quality, model-verifier for model structure, traceability-auditor for the trace chain, stakeholder-coverage-auditor for stakeholder gaps, risk-challenger for risk posture, compliance-auditor for obligations, deliverable-critic for executive documents, solution-value-auditor for value claims, and strategy-analyst for the strategy analysis chain. Their findings feed the verdict; they do not replace the rubric score.

## Calibration

A rubric is trusted only when its scores match what an expert reviewer would give. Calibration sets under `evaluation/calibration/` hold scored reference outputs (strong, borderline, failing) for a rubric. When a calibration set exists, score its references first and check you land within one point per dimension of the recorded scores before scoring the real work product.

## Verdict and handoff

Report the total, the band, the dimension scores with evidence, and findings with fixes. Route fixes to the owning skill through the reviser agent, which resolves the listed findings and nothing else, and then re-score. Never report a pass the scores do not support, and never mark a work product approved: approval is a stakeholder decision recorded separately.

## Common failure modes

- Scoring against a general impression rather than the rubric text.
- Giving credit for content that is promised ("to be confirmed") rather than present.
- Reviewing only what is there and not noticing what is missing.
- Merging verification and validation findings, so no one owns the fix.

## Worked example

Reviewing the FRD for supplier invoice approval, version 0.9.

1. Standard: the profile for `frd` names `evaluation/functional-requirements-rubric.md`, with dimensions 4 (unambiguous) and 5 (testable) blocking.
2. Format: an inspection, because the FRD will be baselined and three teams build from it.
3. Scoring with evidence, three dimensions shown:

| Dimension | Score | Evidence | Gap and fix |
| --- | --- | --- | --- |
| 4 Unambiguous | 1 | FR-022 says approvers are "reminded promptly" | State the timing: one reminder after 2 working days, escalation after 4 |
| 5 Testable | 2 | 11 of 14 requirements have Given, When, Then criteria | Add criteria to FR-025 to FR-027 |
| 7 Traceability | 3 | Every requirement names its source and a test ID | None |

4. Severity: FR-022 is blocking, because dimension 4 at its current wording would let two builds both claim to meet it.
5. Verification against validation: this review verifies the FRD against the quality characteristics of requirements (ISO/IEC/IEEE 29148, clause 5.2.5, lists them: necessary, implementation free, unambiguous, complete, singular, feasible, verifiable, and more). Validation, whether the requirements meet the business need, happens in the walkthrough with the AP manager next week.
6. Verdict: pass with changes, total 21 of 27, one blocking finding. Returned to the requirements skill with the fixes listed.

## Sources

- `babok-3.0-2015`: Verify Requirements (7.2), Validate Requirements (7.3), and Reviews (10.37).
- `iso-29148`: the quality characteristics of individual requirements and sets of requirements.
- `iso-29119-3`: test documentation conventions used when a review checks acceptance criteria and test traces.
