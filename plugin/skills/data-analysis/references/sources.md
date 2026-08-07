# Normative sources for the data-analysis skill

Conformance authorities, not citation sources. Judge an artefact by whether it passes the checks, not by whether it cites the standard. Do not quote the standards in deliverables.

Resolve each source id against `sources/manifest.json` and read its checks in `sources/conformance/<source-id>.md`.

## analytics-workflow

- `crisp-dm-1.0`. CRISP-DM 1.0. An analytics workflow must pass the CRISPDM-AW blocking checks: it addresses all six phases (Business Understanding, Data Understanding, Data Preparation, Modeling, Evaluation, Deployment); it begins from business objectives and data mining goals; each phase produces its defined outputs; Evaluation assesses results against the business objectives; and data quality is verified. Advisory checks cover deployment and monitoring plans, the recorded process instance, and captured iteration. Note: CRISP-DM is a methodology (no "shall"), so the blocking severities are our house gate, and phase order is not gated because the standard expects backtracking. Also relevant to `business-intelligence`.
