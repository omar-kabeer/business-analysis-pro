# Normative sources for the ux skill

Conformance authorities, not citation sources. Judge an artefact by whether it passes the checks, not by whether it cites the standard. Do not quote the standards in deliverables.

Resolve each source id against `sources/manifest.json` and read its checks in `sources/conformance/<source-id>.md`.

## ui-design and published-page

- `wcag-2.1`. WCAG 2.1, W3C Recommendation. A published page must pass the five WCAG21-PP blocking checks (all Level A and AA success criteria met; full pages; complete processes; only accessibility-supported technologies relied upon; non-interference). A UI design must pass the WCAG21-DS design-stage checks (satisfy the design-determinable success criteria, and do not preclude the runtime-only requirements). House target is Level AA.
- `wcag-2.2`. WCAG 2.2, W3C Recommendation. Additive over 2.1: same conformance model, adds success criteria and removes 4.1.1 Parsing. Use 2.2 as the current target; use 2.1 only where a policy or contract explicitly references 2.1. See `sources/conformance/wcag-2.2.md` for the delta and applicability condition.

## design-process

- `iso-9241-210-2010`. ISO 9241-210:2010, human-centred design for interactive systems (2010 edition; a 2019 revision supersedes it, cite the edition held). A design process must pass the ISO9241-DP blocking checks: it carries out all four HCD activities (context of use, user requirements, design solutions, evaluation); the context-of-use description covers users, characteristics, goals and tasks, and environments; the user requirements statement covers the five required categories with measurable usability criteria; user-centred evaluation is carried out; the process is iterative; and HCD is planned into the project with allocated time. Advisory checks cover team disciplinarity, whole-experience focus, and requirements-spec quality.
