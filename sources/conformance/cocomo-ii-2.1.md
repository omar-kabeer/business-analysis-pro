# Conformance checks: cocomo-ii-2.1

Source id: `cocomo-ii-2.1`
Standard: COCOMO II Model Definition Manual.
Edition held: Version 2.1, Center for Software Engineering, USC (1995 to 2000; the COCOMO II.2000 calibration).
Publisher: USC Center for Software Engineering.
Authority: normative.
Identity: confirmed from the title page on 2026-08-07. COCOMO II Model Definition Manual, Version 2.1.
Licence: free to obtain, no redistribution; paraphrase only.
Modality note: COCOMO II is a defined parametric estimation model. Its equations and inputs are definitional: to claim a COCOMO II estimate, the estimate must apply the model as defined. The blocking severities below reflect that definitional requirement, not "shall" verbs. The model's own constant values (calibrated to 161 projects) are the standard's; checks test that the estimate uses the model's form and inputs, not that a reviewer re-derives the constants.
Artefact types constrained: `effort-estimate`.
Owning skills: `estimation`.
Locator style: COCOMO II 2.1, section `<n>`.

## How to read this file

Three layers, kept separate: Source (S) with locator, labelled Inference (I), and the Check (C). Severity here reflects the definitional requirement of the model.

## Checks: effort-estimate

Applies to a software effort estimate that claims to use COCOMO II.

| Check id | Question (yes = pass) | Severity | Locator | How the reviewer confirms |
| --- | --- | --- | --- | --- |
| COCOMO-EE-01 | Does the estimate apply the COCOMO II effort equation, effort equal to a coefficient times size raised to an exponent times the product of the effort multipliers? | blocking | 1.2, 3 | Confirm the estimate uses PM = A times Size to the power E times the product of effort multipliers. An estimate not using this form is not a COCOMO II estimate. |
| COCOMO-EE-02 | Does the estimate state which model it uses (Post-Architecture or Early Design), with the matching number of effort multipliers (16 or 6) and the five scale factors? | blocking | 1.1, 3.2 | Confirm the model is named and the driver set matches it. A mismatched or unstated model fails. |
| COCOMO-EE-03 | Is size stated in KSLOC or unadjusted function points, with any reused or adapted code converted to equivalent KSLOC using the adaptation factors (percent design, code, and integration modified)? | blocking | 2 (Sizing), Equation 4 | Confirm a size figure and that reused or adapted code is adjusted to equivalent size, not counted as new. Raw uncounted reuse fails. |
| COCOMO-EE-04 | Are the five scale factors rated, and do they drive the exponent E? | blocking | 3.1 | Confirm each scale factor has a rating and that E is derived from them. Missing scale factors fail. |
| COCOMO-EE-05 | Are the effort multipliers (cost drivers) each rated, rather than silently defaulted? | blocking | 3.2 | Confirm each cost driver carries a rating. An estimate with unstated cost drivers fails. |
| COCOMO-EE-06 | Is the resulting effort expressed in person-months? | blocking | 1.2 | Confirm the output is person-months. An effort figure in other units without conversion fails. |
| COCOMO-EE-07 | Is requirements evolution and volatility (REVL) applied to the effective size where relevant? | advisory | 2 (REVL) | Look for a REVL adjustment where requirements are volatile. Advisory. |
| COCOMO-EE-08 | Is schedule (calendar time) estimated with the COCOMO II schedule equation where a schedule estimate is needed? | advisory | 4 | Look for a TDEV estimate. Advisory. |
| COCOMO-EE-09 | Is the size derivation documented (historical data conversion, or a likely, lowest, and highest expert estimate)? | advisory | 2 (Sizing) | Look for how size was derived. Advisory quality check. |

### Provenance

- EE-01. S: Both models estimate effort in person-months by PM equal to A times Size to the power E times the product of the effort multipliers (1.2, full formula in Section 3). I: We gate a COCOMO II estimate on using this equation form.
- EE-02. S: The manual presents two models, Post-Architecture and Early Design; the number of effort multipliers is 16 for Post-Architecture and 6 for Early Design, with 5 exponential scale factors (1.1, 3.2). I: We gate on the model being named with its matching driver set.
- EE-03. S: Code size is expressed in KSLOC; reused and adapted code is adjusted to equivalent source lines of code using the degree-of-modification factors DM, CM, and IM; unadjusted function points may be used (2, Equation 4). I: We gate on size units and on reuse being converted to equivalent size.
- EE-04. S: The exponent E is derived from the five scale factors (3.1). I: We gate on the scale factors being rated and driving E.
- EE-05. S: The effort multipliers are the cost drivers, each rated to a value; nominal is 1.0 (3.2). I: We gate on cost drivers being rated.
- EE-06. S: The estimate yields effort in person-months, PM (1.2). I: none.
- EE-07. S: REVL adjusts the effective size for requirements evolution and volatility (2, REVL). I: Advisory.
- EE-08. S: Schedule (TDEV) is estimated by the schedule equation (4). I: Advisory.
- EE-09. S: Sources for size include historical data conversion or expert likely, lowest-likely, and highest-likely estimates (2, Sizing). I: Advisory documentation check.

## Not-testable obligations

| Obligation (paraphrase) | Locator | Why not testable on a finished artefact |
| --- | --- | --- |
| The model coefficients A and B and the driver values are calibrated to the 161 projects in the COCOMO II database. | 1.2, 3 | The model's derivation, not a property a single estimate must re-establish; the estimate uses the calibrated values. |
| Phase and activity distributions of effort and schedule (waterfall and MBASE/RUP). | 6 | Distributions applied downstream of the estimate, not a property of the effort figure itself; could inform a fuller estimate but are not gated here. |

## Coverage

- `effort-estimate`: 6 blocking checks (EE-01 to EE-06), 3 advisory (EE-07 to EE-09).

The single constrained artefact type carries blocking checks (forward cross-check satisfied). Every check maps to `effort-estimate`, no orphans. No other normative source constrains this type, so no conflict.
