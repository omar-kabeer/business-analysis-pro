---
type: deliverable
domain: quality
status: draft
version: 1.0.0
---

# Release Readiness: Invoice Approval Workflow (Release 1)

Completed release-readiness checklist for the first release, demonstrating the release gate.

## Readiness criteria

| Area | Criterion | Status | Owner | Note |
| --- | --- | --- | --- | --- |
| Scope | All must-have stories delivered | Met | PO | STORY-001 to 003 done |
| Testing | Acceptance criteria met and tested | Met | QA | All Given/When/Then verified |
| Quality | No open critical or high defects | Met | QA | One medium defect deferred |
| Non-functional | Performance verified against targets | Met | Eng | Capture under 30 seconds per invoice |
| Non-functional | Security review passed | Met | Security | Access by role; approval segregation |
| Non-functional | Accessibility checked | Met | UX | Approver screens WCAG 2.1 AA |
| Data | PO data cleansed and matching tested | Met | Finance | Tolerance agreed with finance |
| Operations | Monitoring and alerting in place | Met | Ops | Queue and exception alerts |
| Operations | Rollback plan defined and tested | Met | Ops | Revert to manual for a period if needed |
| Support | Documentation and training ready | Met | Ops | AP team trained |
| Compliance | Audit controls and trail verified | Met | Audit | Full approval audit trail |
| Stakeholders | Business sign-off obtained | Met | Finance Director | Approved |

## Outstanding items

| ID | Item | Severity | Owner | Plan and date |
| --- | --- | --- | --- | --- |
| OUT-001 | One medium defect in exception screen sorting | Medium | Eng | Fix in first patch |

## Decision

| Field | Value |
| --- | --- |
| Decision | Go |
| Conditions | Patch the medium defect within two weeks of launch |
| Decision maker | Finance Director |
| Date | (worked example) |
