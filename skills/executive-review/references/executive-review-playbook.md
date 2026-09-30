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

## Worked example

A draft board paper asks the Finance Committee to fund release 1 of supplier invoice approval. Its first page opens with three paragraphs on the history of accounts payable and states the ask on page four.

Review against the procedure:

1. The reader: the Finance Committee decides funding in a 20-minute slot and reads the first page closely, the rest selectively.
2. Skeptical-reader questions: "What happens if we do nothing?" is answered only on page six. "What could make this fail?" is not answered at all; approver adoption is the main risk and it is missing.
3. Red flags: the benefit (about 60,000 pounds a year of discount) has no source, and the payback figure (20 months) is quoted without the cost it depends on.

Findings, in priority order:
- Blocking: move the ask to the first paragraph: approve 150,000 pounds by 30 June for release 1, on condition that the load test passes.
- Blocking: add the adoption risk and its response (email approval switched off at go-live).
- Major: cite the discount figure to the ERP payment report, January to April 2026, and show the cost beside the payback.
- Minor: cut the history to two sentences.

The revised first page reads: "The Committee is asked to approve 150,000 pounds for release 1 of supplier invoice approval by 30 June. Invoices now take 14 days to approve, so 38 percent are paid late and about 60,000 pounds a year of discount is lost. The ERP's licensed workflow module cuts approval to 5 days, with payback in about 20 months. The main risk, approvers bypassing the tool, is handled by switching off email approval at go-live."

## Sources

- `babok-3.0-2015`: Communicate Business Analysis Information (4.4) and Business Cases (10.7).
- `minto-pyramid-principle`: answer first, supported by grouped reasons, paraphrased.
- `consultingmethodology-pyramid-whitepaper`: a practitioner summary of the same structure.
- ISO 24495-1: the plain language principles, applied without claiming conformance until the library holds the standard (see the `iso-24495-1` entry in `sources/manifest.json`).
