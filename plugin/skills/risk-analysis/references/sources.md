# Normative sources for the risk-analysis skill

Conformance authorities, not citation sources. Judge an artefact by whether it passes the checks, not by whether it cites the standard. Do not quote the standards in deliverables.

Resolve each source id against `sources/manifest.json` and read its checks in `sources/conformance/<source-id>.md`.

## risk-assessment

- `iso-31000-2018`. ISO 31000:2018, risk management guidelines. A risk assessment must pass the ISO31000-RA blocking checks: it contains identification, analysis, and evaluation; states scope and context; defines risk criteria; analyses each risk for likelihood and consequence; and resolves each to an evaluation decision. Advisory checks cover cause and consequence descriptions, documented assumptions, and validation. Note two caveats in the conformance file: ISO 31000 is guidelines (its verbs are "should", so the blocking severities are our house gate), and the copy held is not licensed to us.

## risk-register

- `iso-31000-2018`. ISO 31000:2018. A risk register must pass the ISO31000-RR blocking checks: each entry records the risk and its analysis, a treatment decision or documented acceptance, and an accountable owner. Advisory checks cover residual risk, treatment-plan content, and evidence the register is dated and maintained. Same two caveats apply (guidelines modality, unlicensed copy).

Governance also draws on `iso-31000-2018` for its risk framing, but the risk-register and risk-assessment artefacts are owned here in risk-analysis.
