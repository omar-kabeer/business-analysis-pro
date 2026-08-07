# Editorial Style (House Style)

This is the writing standard for every prose deliverable produced by Business Analysis OS: proposals, business cases, BRDs, PRDs, executive summaries, stakeholder updates, documentation, emails, and the narrative sections of any template. The operational editor for this standard is the `natural-prose-editor` skill, which runs as the final pass before any written prose is delivered.

## Why this exists

Enterprise readers (directors, boards, regulators, investors) judge credibility partly on how writing reads. Prose that is bloated, generic, or full of machine-writing tics undermines otherwise strong analysis. This standard keeps the OS output at senior-consultant quality and consistent across every skill.

## The em dash ban (non-negotiable)

Do not use the em dash character anywhere in output. This is the single most recognizable machine-writing tic, so the OS enforces a flat ban rather than a "use sparingly" guideline.

Rules:

- Emit zero em dashes. Not even one "earned" em dash.
- Remove every em dash already present in source text. Each one is recast, not kept.
- Do not smuggle it back in. A spaced hyphen used as a dash, a doubled hyphen, or an en dash standing in for an em dash all count as the same banned move.
- En dashes inside numeric ranges and scores (3-5, 2010-2015) should be written with a plain hyphen.

How to recast an em dash, in order of preference: a period (split two independent statements), a comma (a light pause or aside), a colon (when the second part explains the first), parentheses (a true aside), or a rewrite so the dash is not needed. When in doubt, use a period.

This rule is enforced automatically: `scripts/validate-assets.mjs` scans deliverable and template markdown and fails if it finds an em dash.

## Core writing principles

- Preserve the payload first. Meaning, facts, figures, names, and the author's position must survive editing intact. If a fix would change what the text asserts, find another fix.
- Keep the author's voice. Edit their writing, do not replace it with a generic register.
- Be clear and direct. Prefer plain words, concrete nouns, and active verbs. Cut filler and hedging.
- Vary sentence rhythm. Mix short and long sentences. Get rhythmic variation from periods, commas, colons, and parentheses rather than the em dash.
- Prefer prose over bullets. In reports and documents, write in paragraphs unless a list is genuinely the clearest form (for example, discrete acceptance criteria or an enumerated checklist).
- Avoid stock AI phrasing. Cut openers and connectives such as "in today's fast-paced world," "it's important to note," "in conclusion," "delve," "leverage" as filler, "seamless," "robust" as filler, and empty rule-of-three flourishes.

## How it is applied

- Skills that generate prose reference this standard and run `natural-prose-editor` as their final step.
- `CLAUDE.md` and `AGENTS.md` require this standard on every prose output, whether or not the user explicitly asks for editing.
- For the full editing method and checklists, see the `natural-prose-editor` skill and its `references/` files (`ai-tells.md`, `craft-principles.md`, `revision-checklist.md`).
