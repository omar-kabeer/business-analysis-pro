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
- Added continuous integration (`.github/workflows/validate.yml`) that validates skills and templates, builds the plugin, and fails if `plugin/` drifts from source; added a root `.gitignore`.
- Started the templates library with the discovery and elicitation set (`stakeholder-register`, `stakeholder-map-raci`, `interview-guide`, `workshop-plan`), each aligned to BABOK v3 and domain-neutral. Generalised `validate-assets.mjs` to enforce frontmatter (type, domain, status, version) on every template.
- Added the strategy and analysis template set (`current-state-assessment`, `future-state-definition`, `gap-analysis`, `swot-analysis`, `business-model-canvas`), aligned to BABOK Strategy Analysis (6.1, 6.2) and techniques (SWOT 10.46, Business Model Canvas 10.8, Business Capability Analysis 10.6).
- Added the business case and finance template set (`business-case`, `executive-summary`), aligned to BABOK Business Cases (10.7) and Financial Analysis (10.20: NPV, IRR, payback, ROI, TCO, sensitivity) with pyramid and SCR executive structure.
- Added the requirements template set (`prd`, `frd`, `srs`, `nfr-specification`, `user-story-epic`), aligned to BABOK requirement quality (7.2), Non-Functional Requirements Analysis (10.30), Use Cases (10.47), User Stories (10.48), Acceptance and Evaluation Criteria (10.1), INVEST, and ISO/IEC/IEEE 29148.
