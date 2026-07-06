---
type: deliverable
domain: governance
status: draft
version: 1.0.0
---

# Requirements Traceability Matrix

## Purpose

Maintain the links from business need to requirement to design to solution component to test, in both directions, so coverage is visible and the impact of any change can be assessed. Traceability is what makes requirements auditable and change-safe. This is the working form of BABOK Trace Requirements (5.1).

## Document Control

| Field | Value |
| --- | --- |
| Initiative |  |
| Business Analyst |  |
| Version | 1.0.0 |
| Status | Draft |
| Last Updated |  |

## Matrix

Each row traces one requirement forward to design and test and backward to the need it serves. Keep it current as requirements change.

| Requirement ID | Requirement | Traces back to (business need or objective) | Design or solution component | Test case ID | Priority | Status |
| --- | --- | --- | --- | --- | --- | --- |
| REQ-001 |  |  |  |  |  | Proposed |

## Coverage checks

- Backward: every requirement links to a business need or objective. Requirements with no source are candidates for removal.
- Forward: every requirement links to a design element and a test. Gaps here are untested or unbuilt requirements.
- Every objective is covered by at least one requirement, or is explicitly out of scope.

| Check | Result | Gaps found |
| --- | --- | --- |
| Requirements with no source (orphans) |  |  |
| Requirements with no test |  |  |
| Objectives with no requirement |  |  |

## Change impact

When a requirement changes, use the matrix to find the linked designs and tests that are affected, and record the impact in change control.

## Review criteria

- Every requirement traces backward to a need and forward to a design and a test.
- Orphans and coverage gaps are surfaced, not hidden.
- The matrix is kept current as requirements and tests change.
- IDs are consistent with the source requirement documents.

## BABOK anchor

Trace Requirements (5.1); Requirements Life Cycle Management. Sources from the BRD, FRD, SRS, and user stories.

## House style

Write any narrative with the natural-prose-editor pass and no em dashes. See `docs/methodology/editorial-style.md`.
