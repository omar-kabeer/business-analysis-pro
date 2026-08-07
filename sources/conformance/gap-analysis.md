# Conformance gap analysis

Scope of this pass: `iso-29148` only. This was run as the pilot. No batch followed, so the register-wide questions below (unsourced skills, cross-standard conflicts) are answered only where the pilot touched them. They are not a complete survey. A full gap analysis is due once more normative sources are extracted.

## Artefact types with no blocking check

None among the artefact types in scope. Both types that `iso-29148` constrains carry blocking checks.

| Artefact type | Blocking checks | Note |
| --- | --- | --- |
| `requirement-statement` | ISO29148-RS-01 to RS-09 | Nine blocking checks. |
| `requirements-package` | ISO29148-RP-01 to RP-05 | Five blocking checks, one (RP-05) scoped to StRS only. |

The remaining 31 artefact types in the register are out of scope for this pass and are neither confirmed covered nor confirmed uncovered here.

## Obligations found that no current skill owns

ISO/IEC/IEEE 29148 carries process obligations that constrain the project and its life cycle, not the content of a requirement or a package. They are recorded in the Not-testable table of `iso-29148.md` and are not owned by any artefact-producing skill:

- The project shall implement the stakeholder requirements definition and requirements analysis processes (clause 6.1).
- The project shall produce the StRS, SyRS, and SRS information items (clause 7).
- Requirements information shall be managed under the organization's information management and measurement processes (clauses 6.5.2.2, 6.5.3).

These belong to process governance or a requirements management plan, not to the checks that gate a finished artefact. No skill in the register currently owns "requirements process assurance" as an artefact. Flagged for a decision on whether that belongs to `ba-planning` or `governance`. Not resolved here.

## Skills whose governed artefacts have no normative source

Known from the register brief: `architecture` has no genuine normative source, because the TOGAF holding (`opengroup-togaf-presentation-2003`) turned out to be a 2003 conference slide deck, classified illustrative, constraining nothing. This is unchanged by the pilot.

A complete list of unsourced skills requires the batch. The generator already reports the count (`Skills with no normative standard`) in `index.md`. Defer the full enumeration to the batch pass.

## Checks resting on a source whose identity is unconfirmed

None. `iso-29148` identity was confirmed from the title page (ISO/IEC/IEEE 29148:2011, first edition) before extraction, and the manifest `identityVerified` flag was set to true. Every check in this pass rests on a confirmed source.

Caveat carried forward: the register still holds 11 other sources with `identityVerified: false`. Any future check built on one of them inherits that risk and must be flagged in this file at that time.

## Conflicts where two standards constrain the same artefact type differently

None among the artefact types in scope. No other normative source in the register constrains `requirement-statement` or `requirements-package`, so there is no competing standard to reconcile.

One boundary discrepancy, logged not resolved:

- `sources/standards-mapping.md` (rows for ISO/IEC/IEEE 29148) assigns the standard to skills `requirements, quality`. The manifest `skills` array for `iso-29148` lists `requirements` only. The conformance file binds to `requirements`, which owns the requirement artefacts, so the pilot binding is correct. Whether `quality` should also carry a reference to these checks is a skill-boundary question between `requirements` and `quality`. It needs an owner decision and is not resolved unilaterally.
