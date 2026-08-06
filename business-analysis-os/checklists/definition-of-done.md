---
type: checklist
domain: quality
status: draft
version: 1.0.0
---

# Definition of Done

## Purpose

A shared gate that an item must pass before it is accepted as complete. It makes "done" objective and consistent, so quality is built in rather than inspected later. Tailor it to your team and product; the list below is a starting point.

## Checklist

Mark each item Yes, No, or Not applicable.

- [ ] Code is complete, reviewed, and merged to the main branch.
- [ ] Acceptance criteria are met and verified by test.
- [ ] Automated tests are written and passing at the agreed level (unit, integration, and so on).
- [ ] Relevant non-functional needs are checked (performance, security, accessibility).
- [ ] No known critical or high severity defects remain open.
- [ ] Documentation is updated (user, technical, or operational as relevant).
- [ ] Feature flags, configuration, and migrations are handled.
- [ ] Telemetry or instrumentation for the success metric is in place where relevant.
- [ ] Traceability is updated (requirement to test) in the traceability matrix.
- [ ] The product owner has accepted the item.

## Outcome

An item that meets every applicable item is Done. Anything outstanding is either finished before acceptance or split out as a new, tracked item, not silently carried.

## Reference

Pairs with the `release-readiness-checklist` and `requirements-traceability-matrix` templates and the quality skill.

## House style

Any narrative follows the house style with no em dashes. See `docs/methodology/editorial-style.md`.
