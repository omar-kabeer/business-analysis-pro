# Source Appraisal and Extraction Reference

## Authority order

When two documents disagree, this order usually holds. Confirm it with the client rather than assuming.

1. Law, regulation, and licence conditions.
2. Executed contracts and signed agreements.
3. Approved internal policy.
4. Approved standards and procedures.
5. Baselined requirements and specifications.
6. System behaviour as built, evidenced by configuration or code.
7. Operational guidance, runbooks, and training material.
8. Drafts, decks, emails, and meeting notes.

Note the tension between rows 5 and 6. Where the specification and the system disagree, the system is what the business is currently living with, and the specification is what someone once agreed. Both are findings, and the gap between them is often the most valuable thing in the corpus.

## Appraisal fields

| Field | Why |
| --- | --- |
| Type | Sets expectations of authority |
| Author and owner | Who can confirm or update it |
| Date and version | Currency, and whether it predates a known change |
| Approval status | Draft, approved, superseded, withdrawn |
| Scope | Which entity, region, product, or period it governs |
| Reliability | Primary record, secondary summary, or hearsay |
| Confidence | Your judgement, stated, on how much weight to put on it |

## Extraction record

Extract into consistent records rather than prose notes:

```
FIND-012
Type: business rule
Statement: A refund above 50,000 requires dual approval by a supervisor and the branch manager.
Source: Retail Operations Policy v4.2, section 7.3, dated 2025-11-04
Confidence: high (approved policy, current)
Conflicts with: FIND-019 (system permits single approval)
Action: confirm with operations lead; candidate REQ
```

Types worth separating: fact, business rule, requirement candidate, constraint, decision already taken, metric or target, obligation, risk, open question.

## Reading strategy

- Read against questions. A corpus read cover to cover produces a summary; a corpus read against questions produces answers.
- Structure first: contents, headings, defined terms, revision history, appendices. The revision history often tells you more about the organisation than the body does.
- Defined terms and glossaries are high value. Extract them straight into the glossary rather than paraphrasing.
- Numbers, thresholds, and dates are the most reusable content and the most likely to be stale. Extract with their source and their effective date.
- Exceptions clauses carry the real complexity. The rule is usually simple; the carve-outs are where requirements hide.

## Volume strategy

For a large corpus, sample before committing. Read the index, three representative documents in full, and the revision histories. That tells you the quality level, the house conventions, and whether the set is worth a full pass or should be triaged.

Where the set is genuinely large, prioritise by authority and by relevance to the top questions, and state plainly what you did not read.

## Inference discipline

Separate three things in the output and never blur them:

- What the document says, quoted or closely paraphrased with a citation.
- What that implies, labelled as inference.
- What you recommend as a result, labelled as recommendation.

A reader who cannot tell which is which cannot check your work.
