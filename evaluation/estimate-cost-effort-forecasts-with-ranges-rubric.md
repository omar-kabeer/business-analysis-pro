# Estimate Evaluation Rubric

A repeatable rubric for judging whether an estimate is credible and fit for its decision. An estimate is a quantitative forecast of cost, effort, or schedule that factors in uncertainty. Used by the estimation skill. Based on BABOK Estimation (10.19). Applied to estimates recorded with `templates/estimation-basis.md`.

## Scoring scale

For each dimension score 0 to 3: 0 absent or misleading, 1 weak, 2 adequate for the stated stage, 3 strong and well supported.

## Dimensions

| # | Dimension | What good looks like |
| --- | --- | --- |
| 1 | Basis stated | The basis and method of the estimate are stated. |
| 2 | Assumptions | The assumptions the estimate rests on are explicit. |
| 3 | Ranges | Uncertainty is expressed as a range or confidence, not a false single point. |
| 4 | Completeness | The estimate covers the full scope of the work. |
| 5 | Sources | The inputs and reference data are sourced. |
| 6 | Fit for purpose | The precision matches the decision the estimate supports. |
| 7 | Revisable | The estimate is set up to be refined as more is known. |

## Scoring anchors

Anchors describe the extreme scores; 1 and 2 interpolate between them.

| # | Score 0 (absent) | Score 3 (strong) |
| --- | --- | --- |
| 1 | No method or basis; the number cannot be defended. | The basis and method of the estimate are stated. |
| 2 | Assumptions are hidden. | The assumptions the estimate rests on are explicit. |
| 3 | A single point with no range or confidence. | Uncertainty is expressed as a range or confidence, not a false single point. |
| 4 | Whole areas of work are missing, such as testing or cutover. | The estimate covers the full scope of the work. |
| 5 | Inputs have no source. | The inputs and reference data are sourced. |
| 6 | Precision far exceeds or falls short of what the decision needs. | The precision matches the decision the estimate supports. |
| 7 | No plan to refine it; the first number becomes the commitment. | The estimate is set up to be refined as more is known. |

## Common failure modes

- A single figure presented as a commitment at concept stage.
- Contingency as a flat percentage with no named risks.
- Non-build work left out.
- Estimates never revisited as the scope becomes clear.

## Result

Total the scores (maximum 21):

- Pass: 17 or higher with no dimension at 0.
- Pass with changes: 12 to 16, or 17 or higher with a dimension at 0.
- Fail: below 12.

Dimensions 1 (basis stated) and 3 (ranges) are blocking: a score of 0 on either fails the document whatever the total. Record findings by severity with specific fixes, and route material issues back to the estimation skill. A draft that does not pass may still be useful; its quality state must remain visible.

## Findings template

| Dimension | Score | Evidence | Gap and fix |
| --- | --- | --- | --- |
|  |  |  |  |
