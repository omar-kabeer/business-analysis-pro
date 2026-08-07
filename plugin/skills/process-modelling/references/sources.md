# Normative sources for the process-modelling skill

Conformance authorities, not citation sources. Judge an artefact by whether it passes the checks, not by whether it cites the standard. Do not quote the standards in deliverables.

Resolve each source id against `sources/manifest.json` and read its checks in `sources/conformance/<source-id>.md`.

## process-model

- `bpmn-2.0`. OMG BPMN 2.0 (also ISO/IEC 19510). A process model must pass the BPMN-PM blocking checks: only BPMN process/collaboration shapes; sequence flows connect flow nodes and stay within one pool; message flows cross between two pools; artifacts connect only via associations; start and end events obey their flow rules; an end event implies a start event; gateways are single-direction; boundary intermediate events are catch-only. Advisory checks cover mixed gateways, redundant gateways, one-participant-per-pool, and task-vs-sub-process granularity. Execution semantics, XML serialization, and tool conformance are recorded as not-testable. Also relevant to `visual-modelling`.

## Related sources

- `apqc-pcf` governs `process-taxonomy` (owned in business-architecture) and is relevant when structuring a process architecture that process models sit within.
