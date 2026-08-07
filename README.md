# Business Analysis OS (Claude Code plugin)

An enterprise Business Analysis and Product Management operating system for Claude Code. It installs 40 skills that turn Claude into a senior business analyst, product manager, and executive reviewer, coordinated by an orchestrator and held to a strict editorial house style. Version 1.15.0 closes the plugin against the full BABOK v3 artefact register, so every artefact the guide defines has exactly one owning skill.

This directory is the distributable plugin. It is generated from the repository by `scripts/build-plugin.mjs`; edit skills under the repository `skills/` folder, not here.

## What you get

- Orchestrator that classifies a request and routes it to the right specialist, with boundary rules that keep the skills from overlapping.
- Framing and evidence: elicitation, document-analysis, business-analysis, ba-planning, market-research, strategy.
- Specification: requirements, product-manager, product-owner, agile-coach, ux, prototyping.
- Modelling and representation: visual-modelling, process-modelling, data-modelling, business-intelligence, data-analysis, architecture, business-architecture.
- Decision and evaluation: decision-analysis, estimation, finance, vendor-evaluation, procurement-contracts, acceptance-testing, quality, solution-evaluation.
- Control: risk-analysis, change-control, regulatory-compliance, information-management, governance.
- Communication: communication, executive-review, technical-writer, proposal-writer, natural-prose-editor, prompt-master.
- Maintenance: skill-upgrader, which upgrades a skill against BABOK and the curated source library in `sources/`. See `docs/skill-upgrade-program.md`.
- A hard no em dash house style, applied automatically through the natural-prose-editor skill and a SessionStart hook.

## Coverage

The skill set is derived from a line-by-line reading of the BABOK v3 artefact register (410 rows covering task inputs and outputs, guidelines and tools, requirement and design classes, packaging and representation forms, named diagram and matrix forms, procurement documents, analysis and review artefacts, all 50 technique work products, and the five perspectives). Every row resolves to exactly one owning skill. The layers above are mutually exclusive and collectively exhaustive: framing, evidence, specification, representation, decision, control, and communication.

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
