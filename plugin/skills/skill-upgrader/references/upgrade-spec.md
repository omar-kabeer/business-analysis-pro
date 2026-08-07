# Upgrade Specification

The standard every upgraded skill is held to. This is the definition of done for a single skill.

## SKILL.md

| Element | Standard |
| --- | --- |
| Frontmatter | Only `name` and `description`, each on one line. Name matches the folder. |
| Description length | 400 to 1024 characters. Under 400 usually means the triggers are too narrow. |
| Description content | What the skill does, the artefacts it owns, at least eight realistic trigger phrases including casual and implicit wording, and at least two explicit handoffs. |
| Body length | 50 to 90 lines. Beyond 90, move detail to references. |
| Sections | Role, Inputs, Workflow, Outputs, Quality gates, Done when, House style. |
| Workflow steps | 6 to 9 numbered steps, each an instruction rather than a description, each pointing to a reference where depth exists. |
| Quality gates | 5 to 8, each objectively checkable. "Is high quality" is not a gate. |
| Freedom | Judgement-heavy skills get heuristics and criteria. Fragile transformation or validation skills get exact steps and guardrails. |

## References

| Element | Standard |
| --- | --- |
| Count | 3 to 6 files. One theme or variant per file so only the relevant one loads. |
| Length | 80 to 250 lines each. Split beyond that. |
| Required: method reference | The techniques, methods, or notations the skill uses, with selection guidance on when each applies. |
| Required: quality reference | A rubric, checklist, failure modes, or anti-patterns. What separates competent output from weak output. |
| Required: sources.md | Every source that informed the skill, with locator and what it contributed. |
| Recommended: worked example | One realistic end-to-end example at practitioner scale, not a toy. |
| Recommended: templates map | Which templates in `templates/` this skill produces, and which checklists and rubrics in `checklists/` and `evaluation/` apply. |
| Style | Tables over prose where the content is comparative. Short load-bearing sentences. Concrete numbers, thresholds, and named methods rather than generalities. |

## Coverage table

Built before rewriting, kept in the coverage report.

| Column | Content |
| --- | --- |
| Obligation | A BABOK task, technique, artefact, glossary term, or a practice the literature establishes as standard |
| Anchor | Source locator, for example BABOK 6.3, technique 10.38, or a paper reference |
| Status before | Covered, thin, or absent |
| Where covered after | File and section |
| Note | Decision taken, especially for anything left out and why |

No row may remain at absent without a recorded decision. Deliberate exclusion is acceptable; silence is not.

## Boundary check

For every neighbouring skill named in `layer-batches.md`:

1. Does this skill's description state the handoff?
2. Does the neighbour's description state the reciprocal handoff?
3. Is any obligation claimed by both? If so, raise it as a boundary conflict rather than deciding unilaterally.
4. Is any obligation claimed by neither? If so, propose an owner in the report.

Update the routing map boundary rules only when a conflict is resolved, and record the resolution in the report.

## Validation checks

Run all of these before the skill is considered done.

1. Frontmatter shape: three-line block, `name` and `description` only, name matches folder.
2. Description under 1024 characters.
3. Body between 50 and 90 lines; no reference file over 250 lines.
4. No `README.md` anywhere under the skill folder.
5. No em dash in any file in the skill folder.
6. Every reference file mentioned in `SKILL.md` exists, and every reference file is mentioned somewhere.
7. Every template, checklist, and rubric named in the skill exists in the repository.
8. Repository validator passes: `node scripts/validate-assets.mjs`.
9. Trigger test: write five realistic user messages a practitioner would send, and confirm the description would plausibly fire on each. Weak triggers are the most common defect and the most invisible.

## Independent review

After the rewrite, before the commit, run a second pass with fresh eyes:

- Use the `deliverable-critic` agent for the skill body, asking whether a senior practitioner would find it useful or merely correct.
- Use the `quality` skill on the reference set, asking what a reader still cannot do after reading it.

Record both verdicts in the coverage report. A skill that survives neither pass is not done.

## Anti-patterns to remove on sight

- Restating BABOK definitions without telling the reader what to do with them.
- Workflow steps that describe the field rather than instruct the agent.
- Quality gates that cannot be checked.
- Reference files that are lists of technique names with no selection guidance.
- Advice that would be identical for any of the 39 skills.
- Padding that raises token cost without raising capability.
