# Changelog

All notable changes to this project will be documented in this file.

## Unreleased

- Initialized Business Analysis OS repository structure.
- Rewrote all 14 specialist skills to the skill-authoring standard: pushy trigger-rich single-line descriptions, structured bodies (role, inputs, workflow, outputs, quality gates, stop conditions), BABOK and modern product-management alignment, and progressive-disclosure `references/` files.
- Added four skills to the OS: `natural-prose-editor`, `technical-writer`, `proposal-writer`, and `prompt-master` (adapted to the repository validator).
- Established a house editorial style in `docs/methodology/editorial-style.md` with a hard no em dash rule, wired into `CLAUDE.md` and `AGENTS.md` so `natural-prose-editor` runs as the final pass on every prose deliverable.
- Extended `scripts/validate-assets.mjs` to reject em dashes in deliverable and template markdown.
- Expanded `docs/architecture/skill-authoring-guidelines.md` with description-triggering, three-tier progressive disclosure, degrees of freedom, structured-prompt, and house-style guidance.
- Deepened `skills/business-analysis/references/babok-knowledge-areas.md` into a full BABOK v3 reference (BACCM, requirements classification, stakeholder roles, six knowledge areas with all tasks, the 50 techniques, competencies, perspectives, and a standards-based workflow).
- Packaged the OS as a Claude Code plugin under `plugin/` with a marketplace catalog at `.claude-plugin/marketplace.json`, a SessionStart house-style hook, and a `scripts/build-plugin.mjs` sync so `skills/` remains the single source of truth (`npm run build:plugin`).
