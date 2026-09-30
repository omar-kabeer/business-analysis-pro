# Evaluation

This directory contains assets for the Evaluation area of Business Analysis OS.

## Purpose

Use this space for focused, reusable assets that support enterprise business analysis, product management, product ownership, governance, and decision-making workflows.

## Contribution Notes

- Keep each file focused on one primary responsibility.
- Use clear Markdown structure and descriptive filenames.
- Cross-reference related templates, checklists, frameworks, deliverables, and examples when useful.

## Template to rubric bindings

`template-rubric-bindings.json` names the one rubric that grades each template in `templates/`. A template whose own-name rubric exists (for example `brd.md` and `brd-rubric.md`) binds to it. The others bind to the rubric that uses the BABOK name for the same artefact (for example `current-state-assessment.md` to `current-state-description-rubric.md`). Keeping the pairing here rather than in template frontmatter leaves template content hashes, and so the playbook pins, unchanged.

`scripts/validate-assets.mjs` fails the build when a template has no binding, a binding points at a missing rubric, an own-name rubric exists but is not used, or a playbook slot grades a template with a different rubric from its binding. Add the binding in the same change as any new template or rubric.
