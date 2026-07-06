---
type: checklist
domain: requirements
status: draft
version: 1.0.0
---

# Requirement Quality Review

## Purpose

Review requirements against the BABOK quality characteristics (Verify Requirements, 7.2) before they are baselined, so defects are caught on paper rather than in build or test. Use it per requirement and across the set.

## Per-requirement checks

For each requirement, confirm it is:

- [ ] Atomic: one requirement, one need. No compound statements joined by "and".
- [ ] Complete: enough detail to guide the next step of work.
- [ ] Consistent: aligned with stakeholder needs and not conflicting with another requirement.
- [ ] Concise: no extraneous content.
- [ ] Feasible: possible within the agreed risk, schedule, and budget.
- [ ] Unambiguous: one reading only. No undefined vague terms (fast, easy, robust).
- [ ] Testable: a pass or fail check exists. Adjectives are replaced with numbers.
- [ ] Prioritized: ranked or grouped by importance and value.
- [ ] Understandable: uses the common terminology of the audience and the glossary.

## Additional checks

- [ ] Acceptance criteria are present and cover happy path, alternates, and edge cases.
- [ ] The requirement states a need, not a solution, unless it is a genuine constraint.
- [ ] Non-functional requirements are quantified with a verification method.
- [ ] The requirement traces back to a business need and forward to a test.
- [ ] Terminology is consistent with the glossary and surrounding requirements.

## Findings

Record issues by severity so the author knows what to fix first.

| ID | Requirement | Issue | Severity (Critical, Major, Minor) | Fix |
| --- | --- | --- | --- | --- |
|  |  |  |  |  |

## Outcome

Record the verdict: pass, pass with changes, or fail. Route material issues back to the requirements skill and validate the fixes.

## Reference

BABOK Verify Requirements (7.2); the quality skill (`skills/quality/references/validation-rubric.md`) and the requirements skill (`skills/requirements/references/requirement-quality.md`).

## House style

Any narrative follows the house style with no em dashes. See `docs/methodology/editorial-style.md`.
