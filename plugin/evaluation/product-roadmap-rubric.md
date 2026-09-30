# Product Roadmap Evaluation Rubric

A repeatable rubric for judging whether a product roadmap sequences work toward outcomes soundly. A product roadmap shows the planned direction of a product over time, organized around outcomes or themes. Used by the product-manager skill. Based on BABOK Agile Perspective (11.1). Applied to roadmaps produced from `templates/product-roadmap.md`.

## Scoring scale

For each dimension score 0 to 3: 0 absent or misleading, 1 weak, 2 adequate for the stated stage, 3 strong and well supported.

## Dimensions

| # | Dimension | What good looks like |
| --- | --- | --- |
| 1 | Outcome oriented | The roadmap is organized around outcomes or themes, not just features. |
| 2 | Timeframes | The horizons or timeframes are clear, even if approximate. |
| 3 | Sequencing justified | The order of themes is justified by value and dependency. |
| 4 | Dependencies | Key dependencies are shown. |
| 5 | Vision aligned | The roadmap aligns to the product vision and strategy. |
| 6 | Realistic | The plan is realistic against capacity. |
| 7 | Adaptable | The roadmap is framed to adapt as learning occurs. |

## Scoring anchors

Anchors describe the extreme scores; 1 and 2 interpolate between them.

| # | Score 0 (absent) | Score 3 (strong) |
| --- | --- | --- |
| 1 | A dated feature list with no outcomes or themes. | The roadmap is organized around outcomes or themes, not just features. |
| 2 | No horizons, or false date precision far ahead. | The horizons or timeframes are clear, even if approximate. |
| 3 | No reason given for the order. | The order of themes is justified by value and dependency. |
| 4 | Dependencies are hidden. | Key dependencies are shown. |
| 5 | Themes do not connect to the vision or strategy. | The roadmap aligns to the product vision and strategy. |
| 6 | Commitments exceed any plausible capacity. | The plan is realistic against capacity. |
| 7 | Presented as fixed; nothing says it will change with learning. | The roadmap is framed to adapt as learning occurs. |

## Common failure modes

- Every item has a delivery date, including those 18 months out.
- A roadmap built from stakeholder requests with no outcome behind them.
- Later items read as promises.
- No record of what was dropped or why.

## Result

Total the scores (maximum 21):

- Pass: 17 or higher with no dimension at 0.
- Pass with changes: 12 to 16, or 17 or higher with a dimension at 0.
- Fail: below 12.

Dimensions 1 (outcome oriented) and 5 (vision aligned) are blocking: a score of 0 on either fails the document whatever the total. Record findings by severity with specific fixes, and route material issues back to the product-manager skill. A draft that does not pass may still be useful; its quality state must remain visible.

## Findings template

| Dimension | Score | Evidence | Gap and fix |
| --- | --- | --- | --- |
|  |  |  |  |
