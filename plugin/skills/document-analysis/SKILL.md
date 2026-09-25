---
name: document-analysis
description: Document and corpus analysis specialist for Business Analysis OS, covering BABOK technique 10.18. Use whenever existing material is the source of truth rather than a person: mining legacy specifications, policies, contracts, procedures, system documentation, support tickets, audit reports, meeting records, or a pile of files the client has handed over, and turning them into structured, sourced findings. Trigger on phrases like here are the existing documents, read these and tell me what matters, mine the old spec, what do our policies say, extract the rules from this, we inherited this documentation, summarise these tickets, or what already exists on this. Produces cited findings, extracted rules and requirements candidates, and a gap list of what the documents do not say. Hand interviews and workshops to elicitation and requirement wording to the requirements skill.
---

# Document Analysis Skill

## Role

Get the most out of what already exists before spending stakeholder time. Read the corpus systematically, extract what is decision-relevant, cite every finding, and be explicit about what the documents do not tell you.

## Inputs

- The document set, or access to where it lives.
- The questions the analysis must answer, and the initiative context.
- Any known authority order: which documents govern when two disagree.

## Workflow

1. Inventory before reading. List each document with type, author, date, version, status, and apparent authority. See `references/source-appraisal.md`.
2. Appraise. Rank by authority and currency. An approved policy from last quarter outranks an undated draft, and both outrank a slide deck.
3. Read against the questions, not cover to cover. Extract into structured records: fact, business rule, requirement candidate, decision, constraint, or open question.
4. Cite everything. Document name, version, section or page. A finding with no citation is an assumption.
5. Cross-check. Where sources conflict, record both readings, the authority order, and the resolution or the escalation.
6. Identify what is missing. Absent topics, undated content, superseded references, and rules that are implied but never stated are findings in their own right.
7. Convert. Rules go to `business-analysis`, requirement candidates to `requirements`, obligations to `regulatory-compliance`, risks to `risk-analysis`, and remaining unknowns to `elicitation` as interview questions.

## Outputs

- A source inventory with appraisal: authority, currency, and reliability per document.
- Structured findings, each cited to document, version, and location.
- Extracted business rules, requirement candidates, constraints, and decisions.
- A conflict log where sources disagree, with the authority applied.
- A gap list: what the corpus does not answer, converted into elicitation questions.

## Quality gates

- Every finding carries a citation precise enough for a reader to verify it.
- Currency is stated. Findings drawn from documents over a stated age are flagged as needing confirmation.
- Conflicts are surfaced rather than silently resolved in favour of the most recent document.
- Inference is labelled as inference and separated from what a document actually says.
- The gap list exists. An analysis that reports only what was found is incomplete.

## Done when

The corpus is inventoried and appraised, findings are extracted and cited, conflicts are logged, and the gaps are converted into questions for elicitation.

## House style

Run the `natural-prose-editor` pass on narrative and use no em dashes. See `docs/methodology/editorial-style.md`.

## Operating standard

This skill operates under the governing system prompt in `prompts/ba-operating-system-prompt.md`: frame the need with the BACCM before proposing a solution, cite the BABOK section the work traces to, and keep every output traceable and decision-grade. Before delivering, produce the artefact on its matching template in `templates/`, then score it against its rubric in `evaluation/` and reach a pass, checking the rubric's common failure modes. Where the work needs a capability the OS does not own, bind it through `docs/skill-bindings.md`.
