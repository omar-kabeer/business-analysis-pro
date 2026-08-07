# Normative sources for the estimation skill

Conformance authorities, not citation sources. Judge an artefact by whether it passes the checks, not by whether it cites the standard. Do not quote the standards in deliverables.

Resolve each source id against `sources/manifest.json` and read its checks in `sources/conformance/<source-id>.md`.

## effort-estimate

- `cocomo-ii-2.1`. COCOMO II Model Definition Manual, Version 2.1. A software effort estimate claiming COCOMO II must pass the COCOMO-EE blocking checks: it applies the COCOMO II effort equation (effort equals a coefficient times size to an exponent times the product of the effort multipliers); it names the model (Post-Architecture or Early Design) with the matching driver set and five scale factors; size is in KSLOC or unadjusted function points with reuse converted to equivalent KSLOC; the scale factors and cost drivers are each rated; and the result is in person-months. Advisory checks cover REVL, schedule estimation, and documented size derivation. The model equations are definitional, so these are conformance-to-the-model gates.
