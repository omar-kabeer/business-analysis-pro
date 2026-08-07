# Decision Methods Reference

## Framing

Before any method, answer four questions:

1. What exactly is being decided, in one sentence, phrased as a choice?
2. Who owns the decision, and who merely has a view?
3. What happens if no decision is made? The do-nothing option is always on the table and is often the one that wins by default.
4. What is out of bounds, and by whose authority?

Most bad decisions are bad framings that were then analysed impeccably.

## Generating options

- Always include the status quo. Comparing two changes against each other and never against doing nothing is a common and expensive omission.
- If there are exactly two options, look for the false binary. Buy or build usually has buy, build, partner, extend what we have, and do nothing later.
- Include one option nobody has proposed. It either wins or it sharpens the others.
- Options must be mutually exclusive as stated. If two can be done together, that combination is a third option.

## Constraints before criteria

Mandatory requirements eliminate; they do not score. An option that cannot meet a regulatory obligation is out, however well it scores elsewhere. Record what was eliminated and why, because someone will ask.

Beware the criterion that is really a constraint in disguise. If a low score on one criterion would veto the option regardless of the total, it is a constraint.

## Weighted decision matrix

1. Derive criteria from objectives, not from features of the options.
2. Check independence. "Cost" and "value for money" overlap and will double-count.
3. Weight before scoring, using a method that forces tradeoffs: distribute 100 points, or pairwise-compare criteria.
4. Define the scale in words. "1 equals does not meet the need, 3 equals meets it, 5 equals exceeds it materially" beats a bare one to five.
5. Score with evidence noted per cell.
6. Multiply, sum, rank.
7. Then stop and look at the answer. If it feels wrong, the criteria or the weights are usually missing something real. Fix the model rather than the score.

Keep the matrix to five to nine criteria. Beyond that, everything scores near the average and the weights stop mattering.

## Expected value and decision trees

- Expected value equals probability times outcome, summed over outcomes. Useful when the same decision recurs.
- For a one-off decision with a survival-threatening downside, expected value is the wrong guide. Say so and evaluate the downside separately.
- Decision trees suit sequential decisions with intervening uncertainty: decide, learn, decide again. Draw them where the value of waiting for information is the real question.
- The value of information is the difference between the expected value with and without it. It tells you what a pilot or a study is worth paying for.

## Sensitivity

Two checks, always:

1. Vary each weight by a reasonable margin and see whether the ranking holds.
2. Find the switching point: how much would the weight or score need to move for the answer to change? If the answer is "barely", report a tie.

A recommendation presented without a sensitivity check invites the reader to assume the model was tuned to the conclusion.

## Decision tables

For rule logic rather than choice.

| Condition | R1 | R2 | R3 | R4 |
| --- | --- | --- | --- | --- |
| Amount over threshold | Y | Y | N | N |
| Customer is high risk | Y | N | Y | N |
| **Action** | Dual approval and review | Dual approval | Single approval and review | Single approval |

Checks that matter:

- Completeness: every combination of conditions has a rule. With n binary conditions there are 2 to the power n combinations; account for all of them or state the impossible ones.
- Contradiction: no two rules give different actions for the same combination.
- Redundancy: two rules with the same action differing in one condition can usually collapse, which simplifies the model and the code.
- Reachability: conditions that never vary in practice should be removed as assumptions.

Hand the completed table to `requirements` as specified rules and to `acceptance-testing` as a test basis, since every reachable rule is a test case.

## The decision record

Record the decision, the date, the decider, the options considered, the criteria and weights, the rationale, the dissent if any, and the conditions under which the decision should be revisited. Log it in `governance`. A decision without a revisit condition is a decision nobody will dare reopen.
