# Claude Guidance

Use this repository as a Business Analysis OS for structured, enterprise-grade delivery.

## Expected Behavior

- Begin by identifying the business outcome, stakeholders, constraints, and required deliverables.
- Select the most relevant skill pack from `skills/` before producing an artifact.
- Use templates and checklists when creating or reviewing deliverables.
- Make assumptions explicit and highlight decisions that require stakeholder confirmation.
- Prefer concise, executive-ready outputs with traceable supporting detail.

## Artifact Standards

Every artifact should include purpose, scope, inputs, outputs, assumptions, risks, and review criteria when applicable.

## House Style (applies to every prose output)

Apply the `natural-prose-editor` skill to every prose deliverable this OS produces (proposals, reports, business cases, PRDs, executive summaries, emails, documentation, and any narrative section of a template) as the final pass before delivery. It is the house-style editor, not an optional cleanup step. Load it automatically whenever you are about to hand back written prose, even if the user did not ask for editing.

The full rules live in `docs/methodology/editorial-style.md`. The non-negotiable ones:

- No em dashes. Never emit the em dash character in any output. Remove every em dash from source text and recast the sentence with a period, comma, colon, parentheses, or a rewrite. Spaced hyphens used as dashes, doubled hyphens, and en dashes standing in for an em dash all count as the same banned move. En dashes inside numeric ranges (3-5, 2010-2015) should be written with a plain hyphen.
- Write clear, direct, specific prose. Preserve meaning, facts, figures, and the author's voice.
- Prefer paragraphs over bullet lists in reports and documents unless a list is genuinely the clearest form.

Deliverable and template markdown is checked for em dashes by `scripts/validate-assets.mjs`; a single em dash fails the build.
