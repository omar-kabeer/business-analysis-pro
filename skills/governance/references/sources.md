# Normative sources for the governance skill

Conformance authorities, not citation sources. Judge an artefact by whether it passes the checks, not by whether it cites the standard. Do not quote the standards in deliverables.

Resolve each source id against `sources/manifest.json` and read its checks in `sources/conformance/<source-id>.md`.

## governance-approach

- `cobit-2019`. COBIT 2019 (ISACA). A governance approach must pass the COBIT-GA blocking checks: it distinguishes governance (EDM) from management (APO, BAI, DSS, MEA); it is built from the seven governance system component types working together; it names the governance and management objectives it covers; it is tailored to the enterprise using design factors; and it covers the enterprise end to end, not just IT. Advisory checks cover dynamic review and the goals cascade. Note: COBIT is a framework using "should", so the blocking severities are our house gate. The objectives and RACI workbooks are reference data, not paraphrased.

Related: `risk-analysis` holds `iso-31000-2018`, which governance also draws on for risk framing.
