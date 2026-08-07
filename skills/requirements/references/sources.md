# Normative sources for the requirements skill

These are conformance authorities, not citation sources. An artefact this skill produces is judged by whether it passes the checks, not by whether it cites the standard. Do not quote the standards in deliverables.

Resolve each source id against `sources/manifest.json` and read its checks in `sources/conformance/<source-id>.md`.

## requirement-statement

- `iso-29148`. ISO/IEC/IEEE 29148:2011, requirements engineering. Every individual requirement must pass the ISO29148-RS blocking checks: explicit subject and action, singular, free of vague terms, unambiguous, verifiable, implementation-free, complete with no placeholders, traceable both ways, and assumptions recorded. Advisory checks cover necessity, feasibility, keyword use, active voice, unique id, and dated references.

## requirements-package

- `iso-29148`. ISO/IEC/IEEE 29148:2011. Every delivered requirements set or specification must pass the ISO29148-RP blocking checks: complete with no TBD/TBS/TBR, internally consistent, carries the clause 9 content for its document type (StRS, SyRS, or SRS), is under configuration control, and (StRS only) names and numbers business policies and rules. Advisory checks cover affordability, scope boundedness, and a bidirectional traceability matrix.
