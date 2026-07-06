# Business Analysis OS

Business Analysis OS is an enterprise-ready operating system for business analysis, product management, product ownership, and executive decision support with AI-assisted workflows.

The repository is organized around reusable skills, documented methodology, templates, checklists, frameworks, domain packs, example deliverables, evaluation assets, and shared project memory.

## Repository Map

- `.github/` — GitHub automation, agent metadata, reusable instructions, skills, and MCP configuration.
- `docs/` — Architecture, methodology, frameworks, BABOK guidance, product-management guidance, templates documentation, and examples.
- `skills/` — Modular specialist skill packs for orchestration, strategy, analysis, product, UX, research, finance, architecture, governance, quality, and executive review.
- `templates/` — Reusable artifact templates.
- `checklists/` — Quality, readiness, and review checklists.
- `frameworks/` — Decision, analysis, prioritization, and delivery frameworks.
- `deliverables/` — Canonical output examples and deliverable definitions.
- `domain-packs/` — Industry or domain-specific knowledge packs.
- `prompts/` — Prompt assets that support the operating system.
- `evaluation/` — Rubrics, test cases, and evaluation workflows.
- `examples/` — End-to-end usage examples.
- `memory/` — Persistent project context and reusable knowledge notes.

## Getting Started

1. Review `docs/architecture/overview.md` for the operating model.
2. Review `AGENTS.md` and `CLAUDE.md` for agent and Claude-specific guidance.
3. Add or update skill packs under `skills/` using the local `README.md` files as ownership boundaries.
4. Store reusable templates, checklists, and frameworks in their top-level directories.
5. Validate new assets against the quality gates in `CONTRIBUTING.md`.

## Use as a Claude Code plugin

The OS is packaged as a Claude Code plugin under `plugin/`, published through the marketplace catalog at `.claude-plugin/marketplace.json`.

Install from the repository root:

```
/plugin marketplace add .
/plugin install business-analysis-os@ba-os
```

The plugin is generated from this repository, so `skills/` stays the single source of truth. After changing any skill, rebuild the plugin with:

```
npm run build:plugin
```

Skills install namespaced as `business-analysis-os:<skill>` (for example `/business-analysis-os:orchestrator`). A SessionStart hook loads the no em dash house style at the start of every session. See `plugin/README.md` for details.

## License

This project is licensed under the Apache License 2.0. See `LICENSE` for details.
