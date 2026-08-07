# Normative sources for the change-control skill

Conformance authorities, not citation sources. Judge an artefact by whether it passes the checks, not by whether it cites the standard. Do not quote the standards in deliverables.

Resolve each source id against `sources/manifest.json` and read its checks in `sources/conformance/<source-id>.md`.

## change-assessment

- `cobit-2019`. COBIT 2019 (ISACA). A change assessment must pass the COBIT-CA blocking checks: it is assessed against the relevant COBIT change objective (BAI06 Managed IT Changes or BAI07 Managed IT Change Acceptance and Transitioning); it evaluates the change's impact across the affected governance components; and the change is prioritised and formally authorised before implementation. Advisory checks cover emergency-change handling (BAI06) and organizational change impact (BAI05). Note: COBIT is a framework using "should", so the blocking severities are our house gate; the objectives workbook is reference data, not paraphrased.
