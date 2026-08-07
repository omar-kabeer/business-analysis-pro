# Normative sources for the visual-modelling skill

Conformance authorities, not citation sources. Judge an artefact by whether it passes the checks, not by whether it cites the standard. Do not quote the standards in deliverables.

Resolve each source id against `sources/manifest.json` and read its checks in `sources/conformance/<source-id>.md`.

## system-diagram, class-model, sequence-diagram

- `uml-2.5`. OMG UML 2.5. A class model must pass the UML-CM blocking checks (valid multiplicities; acyclic and same-kind generalization; composite part in one whole with whole end at most one; aggregation only on binary associations; distinguishable namespace members). A sequence diagram must pass UML-SD (send before receive; replies pair sync calls and signals are async; activation bars stay on one lifeline; opt/loop/break/assert/neg have one operand; break covers all lifelines; nothing below a destruction). A system diagram must pass UML-SY (single ownership; no package merges its container; deployment structural rules; deployment specs on execution environments). Advisory checks cover notation. Execution and trace semantics and XMI interchange are not-testable.

## process-model

- `bpmn-2.0` governs `process-model` and is owned in process-modelling; visual-modelling also applies BPMN when drawing process models. See `sources/conformance/bpmn-2.0.md`.
