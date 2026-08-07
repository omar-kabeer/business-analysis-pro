# Normative sources for the data-modelling skill

Conformance authorities, not citation sources. Judge an artefact by whether it passes the checks, not by whether it cites the standard. Do not quote the standards in deliverables.

Resolve each source id against `sources/manifest.json` and read its checks in `sources/conformance/<source-id>.md`.

## class-model

- `uml-2.5`. OMG UML 2.5. A class model must pass the UML-CM blocking checks: valid multiplicities (lower bound non-negative and not above the upper bound); acyclic generalization; generalization between classifiers of the same kind; composite aggregation with a part in at most one whole and the whole end at most one; aggregation only on binary associations; and distinguishable members within each namespace. Advisory checks cover notation (class boxes, abstract marking, relationship adornments, interfaces, dependencies). See `sources/conformance/uml-2.5.md`.
