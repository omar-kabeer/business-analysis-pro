# Skill Authoring Guidelines

These guidelines adapt the repository's Claude skill creation research document into practical rules for Business Analysis OS skill files.

## Required Structure

- Store each skill in a kebab-case folder under `skills/`.
- Use a required `SKILL.md` file as the primary skill definition.
- Use only `name` and `description` in YAML frontmatter, each on a single line. The repository validator parses one `key: value` per line, so multi-line block scalars and extra fields (such as `version` or `license`) will fail the build.
- Keep the `name` aligned with the folder name and under 64 characters.
- Keep the `description` trigger-rich and under 1024 characters. Include what the skill does and when to use it.
- Avoid auxiliary skill documentation such as `README.md`, quick references, or changelogs inside a skill folder. The validator rejects a `README.md` in any skill directory; put repository documentation under `docs/` instead.

## Writing the Description (triggering)

The description is the only thing an agent sees before deciding whether to load the skill, so it is the primary triggering mechanism. Claude tends to under-trigger skills, so write descriptions that are a little pushy:

- State both what the skill does and the specific contexts and phrases that should trigger it.
- Include casual and implicit phrasings, not just the formal name ("make this better", "poke holes in this", "is it worth it").
- Add an explicit boundary where useful ("Do not use for ...", or "hand X to the Y skill") to prevent over-triggering and to route cleanly.
- Write the description in the house style: single line, no em dashes.

## Progressive Disclosure

Skills load in three tiers, and token efficiency depends on respecting them:

1. Metadata (name and description): always in context, roughly 100 tokens per skill. Keep it sharp.
2. `SKILL.md` body: loaded only when the skill triggers. Keep it under about 500 lines and focused on identity, inputs, workflow, outputs, quality gates, and stop conditions.
3. Bundled resources (`references/`, `scripts/`, `assets/`): loaded on demand. Move detailed schemas, technique catalogues, framework references, and long examples here, and point to them from the body so the agent loads them only for the relevant step.

For skills that span several frameworks or domains, organise `references/` by variant (one file per framework or domain) so only the relevant file is read.

## Degrees of Freedom

Match how prescriptive the instructions are to how fragile the task is:

- Narrow bridge (low freedom): for tasks with one safe path, such as a transformation or a validation gate, give exact steps and guardrails.
- Open field (high freedom): for judgment-heavy work such as analysis, strategy, and writing, give heuristics and criteria and trust the model to find the route. Explain the why rather than piling on rigid MUSTs.

## Structuring Prompts and Inputs

Claude models are responsive to structured semantic boundaries. When a skill mixes instructions with source material or variable inputs, wrap the parts in descriptive XML-style tags (for example `<task>`, `<context>`, `<source>`, `<instructions>`) so the model does not confuse source data with instructions and can cite sources cleanly.

## Skill Body Pattern

Use this structure unless a skill has a strong reason to differ:

1. Role
2. Inputs
3. Workflow
4. Outputs
5. Quality Gates
6. Done When

Use imperative instructions. Prefer short, load-bearing sentences over broad theory.

## Agentic Workflow Rules

- Include file or artifact anchors when the skill is expected to modify repository assets.
- Include validation gates before final output.
- Include stop conditions so an agent knows when the task is complete.
- Give more freedom to judgment-heavy analysis skills and tighter steps to fragile validation or transformation skills.

## House Style

Every skill that produces prose ends its workflow with a `natural-prose-editor` pass and follows `docs/methodology/editorial-style.md`. The em dash is banned in all deliverable output; the validator enforces this on deliverable and template markdown. Keep first-party skill files em-dash-free too, except where a skill must name the character to explain the rule. Imported third-party skills (for example `technical-writer` and `proposal-writer`) may retain em dashes inside their own authoring instructions; what matters is that their generated output obeys the ban, which the mandatory `natural-prose-editor` final pass guarantees.

## Validation Expectations

A skill is acceptable when it:

- Triggers from realistic user wording, including casual and implicit phrasings.
- Produces a reusable business analysis or product management output.
- Names required inputs and assumptions.
- Defines review criteria and stop conditions.
- Connects to relevant templates, deliverables, references, or evaluation assets.
- Passes `node scripts/validate-assets.mjs`.
- Avoids unnecessary context bloat.
