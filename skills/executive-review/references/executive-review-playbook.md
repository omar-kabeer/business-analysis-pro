# Executive Review Playbook

How to review and strengthen a document written for a senior decision maker: an executive summary, board paper, business case summary, steering update, or recommendation. It supports BABOK Communicate Business Analysis Information (4.4) and Recommend Solution (7.6). Use it with `executive-quality-bar.md`.

## The reader

Assume a reader who has five minutes, many competing papers, and personal accountability for the decision. They will read the first paragraph closely, skim the rest, and look hard at the numbers and the risks. Everything in the document either helps them decide or costs them time.

## Review procedure

Work in this order. Each step can stop the review, because later polish does not save a document with an unclear ask.

1. The ask. Can you state, from the first two sentences alone, what decision is requested, by whom, and by when? If not, that is the first finding.
2. The answer first. Is the recommendation stated before the supporting argument? Apply the pyramid principle: answer, then a few grouped reasons, then the evidence.
3. The logic. Are the supporting points mutually exclusive and collectively exhaustive? Check for overlap (two reasons that are the same reason) and gaps (an obvious objection nobody addresses).
4. The story. Does it follow situation, complication, resolution? The complication must explain why a decision is needed now.
5. The numbers. Reconcile every figure against the source document: totals add up, periods match, currencies are stated, and the same figure appears the same way everywhere. Check that value, cost, and timeline carry a confidence level.
6. The options. Are real alternatives shown, including doing nothing, each with the reason it lost?
7. The risks. Are the principal risks and assumptions stated plainly with their mitigations? A paper with no downside is not credible.
8. The length and language. Does it fit about one page for a summary, with detail moved to appendices? Is it free of jargon, hedging, and background that does not change the decision?

## Skeptical-reader questions

Ask these of every material claim:

- How do we know? What is the evidence and its source?
- What if it is wrong? Which assumption, if false, changes the recommendation?
- What would a board member challenge first?
- What does it cost to be wrong, and can we reverse the decision?
- Why now, and what happens if we wait?

A claim that cannot survive these questions is strengthened with evidence, qualified with a stated confidence, or removed.

## Red flags

| Red flag | What it usually means |
| --- | --- |
| The ask appears on page three | The author is still persuading themselves |
| Only one option | The decision has been made and the paper is a formality |
| Benefits precise to the pound, costs rounded | Benefits were back-solved |
| No risks section, or only generic risks | Risks were not analysed |
| "Subject to further analysis" on key figures | The paper is not ready for a decision |
| Different totals in text and tables | The numbers were not reconciled |
| Passive voice around accountability | No one owns the outcome |

## Board paper conventions

- A cover section with the title, the decision requested, the sponsor, and the date.
- A recommendation section the board can adopt as its resolution, word for word.
- A short options analysis, financial summary, risks, and implementation timeline.
- Appendices for detail, referenced from the main text so the reader can go deeper by choice.

## Output of a review

Return a verdict (ready, ready with changes, not ready), the findings in order of the review procedure with specific rewrites for the most important ones, and a reconciled list of any figures that disagree with the source. Do not rewrite the whole document unless asked; the author or the executive-review skill makes the changes, and the natural-prose-editor pass runs last.

## Quality gates

Grade the summary with the rubric named in its quality profile (`evaluation/quality-profiles.json`), `executive-summary`, and any business case it fronts with `business-case`. The deliverable-critic agent provides an independent skeptical read.
