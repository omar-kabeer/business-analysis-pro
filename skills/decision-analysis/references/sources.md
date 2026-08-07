# Normative sources for the decision-analysis skill

Conformance authorities, not citation sources. Judge an artefact by whether it passes the checks, not by whether it cites the standard. Do not quote the standards in deliverables.

Resolve each source id against `sources/manifest.json` and read its checks in `sources/conformance/<source-id>.md`.

## decision-requirements-diagram

- `dmn-1.3`. OMG Decision Model and Notation 1.3. A DRD must pass the DMN-DRD blocking checks: DMN shapes for each element; every element named in-shape; connections that follow the requirement connection rules with nothing terminating in Input Data; and, when a decision service is drawn, a border enclosing exactly its encapsulated decisions. Advisory checks cover duplicate elements and unlabelled partial views. Also relevant to `process-modelling`.

## decision-table

- `dmn-1.3`. OMG Decision Model and Notation 1.3. A decision table must pass the DMN-DT blocking checks: defined inputs, outputs, and rules; a hit-policy marker present whenever rules may overlap; non-overlapping rules under Unique; numbered rules under First or Rule order; and an ordered output-values list under Priority or Output order. Advisory checks cover completeness or a declared default output, and input-entry validity. DMN uses SHALL and MUST, so these are genuine gates.
