# Customer Journey Map Evaluation Rubric

A repeatable rubric for judging whether a customer journey map represents the end-to-end experience soundly. A customer journey map shows the stages, touchpoints, and emotions of a customer's experience with a product or service. Used by the ux and business-architecture skills and applied to maps produced from `templates/journey-map.md`. Based on BABOK Business Architecture Perspective (11.4).

## Scoring scale

For each dimension score 0 to 3: 0 absent or misleading, 1 weak, 2 adequate for the stated stage, 3 strong and well supported.

## Dimensions

| # | Dimension | What good looks like |
| --- | --- | --- |
| 1 | Stages | The journey stages are laid out end to end. |
| 2 | Touchpoints | The touchpoints at each stage are complete. |
| 3 | Actions and goals | The customer's actions and goals at each stage are captured. |
| 4 | Emotions | The customer's emotions or pain points are shown, backed by evidence. |
| 5 | Moments of truth | The critical moments and drop-off points are identified. |
| 6 | Opportunities | Opportunities to improve the experience are drawn out. |
| 7 | Evidence-based | The map is grounded in research, not assumption. |

## Scoring anchors

Anchors describe the extreme scores; 1 and 2 interpolate between them.

| # | Score 0 (absent) | Score 3 (strong) |
| --- | --- | --- |
| 1 | The journey starts or ends mid-way, so key stages are missing. | The journey stages are laid out end to end. |
| 2 | Touchpoints are missing or listed without the stage they belong to. | The touchpoints at each stage are complete. |
| 3 | Stages list company processes, not what the customer does or wants. | The customer's actions and goals at each stage are captured. |
| 4 | Emotions are invented or shown with no evidence. | The customer's emotions or pain points are shown, backed by evidence. |
| 5 | No moments of truth or drop-off points are named. | The critical moments and drop-off points are identified. |
| 6 | No opportunities, or only vague ones such as "improve the experience". | Opportunities to improve the experience are drawn out. |
| 7 | The map is a workshop guess with no research behind it. | The map is grounded in research, not assumption. |

## Common failure modes

- A map of the company's internal process relabelled as a customer journey.
- One map for every customer, with no segment or persona named.
- Emotion curves drawn for effect, not from research.
- Opportunities that go nowhere because no owner is named.
- A future-state map with no current-state map to compare it with.

## Result

Total the scores (maximum 21):

- Pass: 17 or higher with no dimension at 0.
- Pass with changes: 12 to 16, or 17 or higher with a dimension at 0.
- Fail: below 12.

Dimensions 1 (stages) and 7 (evidence-based) are blocking: a score of 0 on either fails the document whatever the total. Record findings by severity with specific fixes, and route material issues back to the ux skill. A draft that does not pass may still be useful; its quality state must remain visible.

## Findings template

| Dimension | Score | Evidence | Gap and fix |
| --- | --- | --- | --- |
|  |  |  |  |
