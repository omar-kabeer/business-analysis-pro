# Requirements (verified) Evaluation Rubric

A repeatable rubric for judging whether requirements have been verified to be of sufficient quality to use. Verified requirements have been checked against the quality characteristics and are of sufficient quality to be used. Used by the quality and requirements skills. Based on BABOK Verify Requirements (7.2), whose quality characteristics this rubric applies directly.

## Scoring scale

For each dimension score 0 to 3: 0 absent, 1 weak, 2 adequate, 3 strong.

## Dimensions

| # | Dimension | What good looks like |
| --- | --- | --- |
| 1 | Atomic | Each requirement is self-contained and can be understood independently. |
| 2 | Complete | Each is complete enough to guide further work at the appropriate level of detail. |
| 3 | Consistent | Each aligns with the stakeholder needs and does not conflict with others. |
| 4 | Concise | Each contains no extraneous or unnecessary content. |
| 5 | Feasible | Each is reasonable and possible within the agreed risk, schedule, and budget. |
| 6 | Unambiguous | Each is stated so it is clear whether a solution meets it. |
| 7 | Testable | Each can be verified as fulfilled. |
| 8 | Prioritised | Each is ranked, grouped, or negotiated in terms of importance. |
| 9 | Understandable | Each is expressed in terms its stakeholders understand. |

## Scoring anchors

Anchors describe the extreme scores; 1 and 2 interpolate between them.

| # | Score 0 (absent) | Score 3 (strong) |
| --- | --- | --- |
| 1 | Requirements bundle several needs together. | Each is self-contained and understood independently. |
| 2 | Too thin to guide work, or missing detail. | Complete enough to guide work at the appropriate level of detail. |
| 3 | Requirements conflict or drift from the need. | Aligned with stakeholder needs, no conflicts. |
| 4 | Padded with extraneous content. | No extraneous or unnecessary content. |
| 5 | Not achievable within the agreed constraints. | Reasonable and possible within risk, schedule, and budget. |
| 6 | Wording admits several readings. | Clearly stated, so meeting it is unambiguous. |
| 7 | Fulfilment cannot be verified. | Able to verify the requirement has been fulfilled. |
| 8 | Unranked. | Ranked, grouped, or negotiated by importance. |
| 9 | Expressed in terms stakeholders cannot follow. | Expressed in terms its stakeholders understand. |

## Common failure modes

- Verify confused with validate: the check asks whether the requirement is right (value) instead of whether it is well-formed (quality).
- Rubber-stamp: verification recorded with no evidence of the characteristics actually checked.
- Partial pass: some characteristics checked, others (concise, understandable) silently skipped.
- No checklist: verification done from memory, so coverage varies by reviewer.
- Quality bar too low: "adequate" accepted where the downstream work needs "strong".

## Result

Total the scores (maximum 27):

- Pass: 22 or higher with no dimension at 0.
- Pass with changes: 16 to 21, or a single quick-to-fix dimension at 1.
- Fail: below 16, or any dimension at 0.

Record findings by severity with a specific fix, and route material issues back to the requirements skill.

## Findings template

| Dimension | Score | Evidence | Gap and fix |
| --- | --- | --- | --- |
|  |  |  |  |
