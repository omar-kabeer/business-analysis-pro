# Agent Instructions

This repository is an enterprise Business Analysis and Product Management Operating System. Treat it as a structured knowledge and delivery asset repository, not as a loose prompt collection.

## Working Principles

- Keep assets modular and easy to reuse.
- Use clear, descriptive filenames in kebab-case unless a standard requires otherwise.
- Prefer Markdown for documentation, templates, checklists, frameworks, and skill instructions.
- Keep one primary responsibility per file.
- Maintain traceability between methods, templates, deliverables, examples, and evaluation criteria where practical.
- Do not place generated or temporary outputs in source directories unless they are intentional examples.
- When creating or updating skills, follow `docs/architecture/skill-authoring-guidelines.md`, which captures the repository's Claude skill creation research guidance.
- Apply the house style in `docs/methodology/editorial-style.md` to every prose deliverable, using the `natural-prose-editor` skill as the final pass. The em dash ban is non-negotiable and enforced by `scripts/validate-assets.mjs`.

## Quality Gates

Before committing changes, ensure affected assets are:

- Complete enough to be useful on their own.
- Internally consistent.
- Professionally formatted.
- Reusable across projects where intended.
- Aligned with the repository structure and roadmap.
