# Rubric Calibration Sets

A rubric earns trust only when its scores match the ones an experienced business analyst would give. A calibration set is how that is checked. Each folder here is named after an artefact type in `evaluation/quality-profiles.json` and holds scored reference outputs for the rubric that type's profile names.

## Contents of a set

- `strong.md`, `borderline.md`, `failing.md`: short reference outputs for the same fictional scenario (supplier invoice approval and its supplier payment status portal), written to land in the pass, pass with changes, and fail bands.
- `scores.json`: the expected score for every rubric dimension and the expected verdict for each reference, plus:
  - `rubric` and `rubricSha256`: the rubric the scores apply to, pinned by content hash. Editing the rubric fails validation until the references are rescored and the hash is updated.
  - `status`: `provisional` until a business analyst reviewer has confirmed the scores, then `confirmed`.
  - `tolerance`: how far, per dimension, an automated grader may differ from the expected score and still count as agreeing.

## What the validator checks

`scripts/validate-assets.mjs` fails the build when a set's type has no rubric gate, its rubric is not the profile's rubric, the rubric hash is stale, the scores do not cover exactly the rubric's dimensions, a score is outside the rubric's scale, a reference's scores do not produce its expected verdict under the rubric's own bands, or a set lacks one reference in each band.

## How Kryterea uses a set

Kryterea's rubric calibration eval grades each reference with the production rubric check and reports agreement: the share of dimensions within tolerance and whether the verdict matched. A rubric whose set disagrees is not trusted as a gate until the rubric or the grader is fixed.

## Coverage

Sets exist for the six artefact types used most across the first-wave playbooks: `nfr-specification`, `user-story-epic`, `stakeholder-register`, `experiment-log`, `product-vision-brief`, and `prototype-brief`. Add a set for each further type as its playbooks reach release, most-used first.
