# Attributes and Baselines Reference

## Requirement attributes

Metadata about a requirement, distinct from the requirement text. The minimum set:

| Attribute | Why it exists |
| --- | --- |
| Unique ID | Referencing, tracing, and stable conversation |
| Source | Who or what it came from, so it can be re-checked |
| Owner | Who decides if it changes |
| Priority | Ordering and scope decisions |
| Status | Proposed, approved, implemented, verified, withdrawn |
| Version and date | Which text is current |
| Type | Business, stakeholder, solution functional, solution non-functional, transition |
| Complexity or effort | Planning and estimation input |
| Risk | Which requirements need extra attention |
| Trace links | Upward to need, downward to design and test |
| Acceptance criteria reference | How it will be shown to be met |
| Compliance reference | The obligation it satisfies, where relevant |

Add attributes only when someone will filter or sort on them. An attribute nobody queries is maintenance cost with no return.

## Status lifecycle

`Proposed` to `Under analysis` to `Approved` to `Implemented` to `Verified`, with `Deferred` and `Withdrawn` as exits. Every status change is dated and attributed. A requirement never moves backwards silently; it moves to `Under analysis` again through a change record.

## Versions and baselines

A version is a saved state. A baseline is an agreed, approved, immutable set used as the reference point for change.

- Version on every meaningful edit. Cheap, automatic, no ceremony.
- Baseline at defined points: approach agreed, requirements approved, design option selected, release scoped.
- A baseline records: what is in it (by ID and version), who approved it, the date, and the conditions of approval.
- After a baseline, changes go through `change-control` and produce a new baseline rather than editing the old one.

## Change history

Per baselined artefact keep: version, date, author, summary of change, the change record ID that authorised it, and the resulting baseline. A reader should be able to reconstruct why the current text differs from the version they read last quarter.

## Repository structure

```
/initiative
  /01-approach
  /02-elicitation
  /03-analysis
  /04-requirements
  /05-design
  /06-governance
  /07-evaluation
  /baselines
    /2026-03-15-requirements-b1
  /archive
```

Numbered folders keep the order stable across tools. Baselines are copies, not links, so they survive edits to the working set.

## Access

Set read and write per class, not per file. Default to read-open inside the initiative and write-restricted on requirements, governance records, and baselines. Confidential classes such as vendor pricing or personal data extracts are named explicitly and access-listed.
