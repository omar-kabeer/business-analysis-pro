# Normative sources for the prototyping skill

Conformance authorities, not citation sources. Judge an artefact by whether it passes the checks, not by whether it cites the standard. Do not quote the standards in deliverables.

Resolve each source id against `sources/manifest.json` and read its checks in `sources/conformance/<source-id>.md`.

## prototype

- `wcag-2.1`. WCAG 2.1, W3C Recommendation. A prototype must pass the WCAG21-DS design-stage checks: satisfy the Level A and AA success criteria determinable at design time (contrast, structure, labels, keyboard and focus, target size, reflow), and make no choice that would preclude the runtime-only conformance requirements. House target is Level AA.
- `wcag-2.2`. WCAG 2.2, W3C Recommendation. Additive over 2.1 and the current target. See `sources/conformance/wcag-2.2.md`.
- `iso-9241-210-2010`. ISO 9241-210:2010, human-centred design. A prototype must pass ISO9241-PR-01 (blocking): it is used to make a design solution concrete and to obtain user feedback through evaluation, not only to demonstrate. Advisory checks cover appropriate fidelity and users performing tasks during testing. This is complementary to WCAG: WCAG governs the prototype's accessibility, ISO 9241-210 governs its role in the human-centred design process.
