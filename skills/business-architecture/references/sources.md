# Normative sources for the business-architecture skill

Conformance authorities, not citation sources. Judge an artefact by whether it passes the checks, not by whether it cites the standard. Do not quote the standards in deliverables.

Resolve each source id against `sources/manifest.json` and read its checks in `sources/conformance/<source-id>.md`.

## process-taxonomy

- `apqc-pcf`. APQC Process Classification Framework v8.0 (cross-industry). A PCF-aligned process taxonomy must pass the APQC-PT blocking checks: its top level reconciles to the 13 PCF categories; it follows the PCF named levels and decimal numbering; each aligned element carries its 5-digit PCF reference number; and the artefact carries the APQC attribution required by the licence. Advisory checks cover definition alignment and reference-number stability. Also relevant to `process-modelling`.

## capability-map

- No usable normative source at present. The manifest constrains `capability-map` by `apqc-pcf` and `archimate-3.1`, but the PCF is a process taxonomy (ill-fitting for capability maps) and the held ArchiMate file is the Reference Cards, not the specification. See `sources/conformance/apqc-pcf.md` and gap-analysis. Acquire the ArchiMate 3.1 Specification (C197) to source this artefact.

## enterprise-architecture-model

- No usable normative source at present. Same ArchiMate holding problem: the held file is the Reference Cards, not the specification. See the `archimate-3.1` manifest record and gap-analysis.
