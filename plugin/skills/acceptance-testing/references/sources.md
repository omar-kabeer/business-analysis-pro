# Normative sources for the acceptance-testing skill

Conformance authorities, not citation sources. Judge an artefact by whether it passes the checks, not by whether it cites the standard. Do not quote the standards in deliverables.

Resolve each source id against `sources/manifest.json` and read its checks in `sources/conformance/<source-id>.md`.

## test-specification

- `iso-29119-3`. ISO/IEC/IEEE 29119-3:2013 (test documentation). A test specification must pass the ISO29119-TS blocking checks: each test case has a unique stable identifier; each specifies preconditions, inputs, and expected results; each is traceable to a coverage item, test condition, or the test basis; a Test Design Specification identifies features and their test conditions; and any omission of a defined information item is justified, recorded with rationale and risks, and agreed by stakeholders. Advisory checks cover tolerances on expected results and prioritisation. Cite the 2013 edition held (a 2021 edition exists). Also relevant to `quality`.

## acceptance-criteria

- `iso-29119-3`. ISO/IEC/IEEE 29119-3:2013. An acceptance criterion must pass the ISO29119-AC blocking checks: it is expressed verifiably so a test can be derived and pass or fail determined, and it defines an expected observable result to compare against. Advisory check covers traceability to the requirement. This is consistent with `iso-29148` RS-05 (a requirement must be verifiable).
