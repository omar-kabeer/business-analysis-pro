# Evaluation

This directory contains assets for the Evaluation area of Business Analysis OS.

## Purpose

Use this space for focused, reusable assets that support enterprise business analysis, product management, product ownership, governance, and decision-making workflows.

## Contribution Notes

- Keep each file focused on one primary responsibility.
- Use clear Markdown structure and descriptive filenames.
- Cross-reference related templates, checklists, frameworks, deliverables, and examples when useful.

## Quality profiles

`quality-profiles.json` holds one profile per artefact type, keyed by the template file stem. Each profile names the template that produces the artefact, the gate that grades it, and any reviewer agents that audit it independently.

- `gate.mode` is one of `rubric`, `approved_review`, or `no_applicable_check`, the same modes playbook slots use. A `rubric` gate names one rubric in this folder. A type with an own-name rubric (for example `brd` and `brd-rubric.md`) uses it. The others use the rubric that carries the BABOK name for the same artefact (for example `current-state-assessment` uses `current-state-description-rubric.md`). Verdict bands stay in the rubric file, so they have one source.
- `reviewers` lists agents from `agents/` that audit the type. They mirror Kryterea's quality-audit agent bindings, which select an agent when its trigger appears in the artefact type.

Keeping this in one file rather than in template frontmatter leaves template content hashes, and so the playbook pins, unchanged.

`scripts/validate-assets.mjs` fails the build when a template has no profile, a profile names the wrong template, an unknown gate mode, a missing rubric, or an unknown reviewer, an own-name rubric exists but is not used, or a playbook slot grades a type with a different rubric from its profile. Add or update the profile in the same change as any new template, rubric, or reviewer agent.
