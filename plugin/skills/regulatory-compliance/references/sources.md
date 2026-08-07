# Normative sources for the regulatory-compliance skill

Conformance authorities, not citation sources. Judge an artefact by whether it passes the checks, not by whether it cites the standard. Do not quote the standards in deliverables.

Resolve each source id against `sources/manifest.json` and read its checks in `sources/conformance/<source-id>.md`.

## security-requirement

- `iso-27001-2022`. ISO/IEC 27001:2022. A security requirement must pass the ISO27001-SR blocking checks: it traces to a risk from the risk assessment (loss of confidentiality, integrity, or availability in scope); it maps to one or more controls determined necessary to treat that risk; and the underlying risk has a named owner who approved the treatment and accepted the residual risk. Advisory checks cover legal and contractual requirements and alignment with a measurable objective. Note: the copy held is not licensed to us.

## compliance-matrix

- `iso-27001-2022`. ISO/IEC 27001:2022. A Statement of Applicability (compliance matrix) must pass the ISO27001-CM blocking checks: it lists the necessary controls from risk treatment; each control has an inclusion justification; each records implemented-or-not; and controls are compared against Annex A with any exclusion justified. Advisory: the matrix is retained as controlled, dated documented information.
- `iso-27002` complements this on the same artefact: 27001 defines the Statement of Applicability structure, 27002 defines the controls' content. A 27002-sourced control in the matrix must pass ISO27002-CM-01 (identified by its 27002 clause and title). See `sources/conformance/iso-27002.md`.

## security-control

- `iso-27002`. ISO/IEC 27002:2022, information security controls. A documented control must pass the ISO27002-SC blocking checks: it has a title, a control statement (what), and a purpose (why); and the control statement is distinct from the implementation guidance (how). Advisory checks cover the five-attribute classification (control type, information security properties, cybersecurity concepts, operational capabilities, security domains), valid control-type values, and guidance. Note: 27002 is a code of practice using "should" and makes attributes optional, so the blocking severities are our house gate.
