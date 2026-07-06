# Business Analysis OS (Claude Code plugin)

An enterprise Business Analysis and Product Management operating system for Claude Code. It installs 18 skills that turn Claude into a senior business analyst, product manager, and executive reviewer, coordinated by an orchestrator and held to a strict editorial house style.

This directory is the distributable plugin. It is generated from the repository by `scripts/build-plugin.mjs`; edit skills under the repository `skills/` folder, not here.

## What you get

- Orchestrator that classifies a request and routes it to the right specialist.
- BABOK v3-aligned analysis: business-analysis, requirements, elicitation, governance, quality.
- Product and strategy: strategy, product-manager, product-owner, market-research, finance, ux, architecture, executive-review.
- Writing: natural-prose-editor (house-style editor), technical-writer, proposal-writer, prompt-master.
- A hard no em dash house style, applied automatically through the natural-prose-editor skill and a SessionStart hook.

## Install

From the repository root (local marketplace):

```
/plugin marketplace add .
/plugin install business-analysis-os@ba-os
```

Or point at the folder or the hosted git repository:

```
/plugin marketplace add C:\Users\USER\Documents\Documents\Personal Development\business-analysis-pro
/plugin install business-analysis-os@ba-os
```

Restart Claude Code if prompted, then type `/` to see the skills.

## Use

- Start broad requests with the orchestrator: `/business-analysis-os:orchestrator`.
- Or call a specialist directly, for example `/business-analysis-os:business-analysis` or `/business-analysis-os:requirements`.
- Claude also triggers these automatically based on the request, so you can just describe the task.

Plugin skills are namespaced as `business-analysis-os:<skill>`. The house-style hook injects the no em dash rule at the start of every session.
