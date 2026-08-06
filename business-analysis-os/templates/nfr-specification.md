---
type: deliverable
domain: requirements
status: draft
version: 1.0.0
---

# Non-Functional Requirements Specification

## Purpose

Specify how well the solution must perform, as distinct from what it must do. Non-functional requirements (also called quality attributes or quality of service) are stated as declarative statements with a constraining factor, quantified, and given a verification method. The categories follow BABOK Non-Functional Requirements Analysis (10.30). An unquantified non-functional requirement is not testable and does not belong here.

## Document Control

| Field | Value |
| --- | --- |
| Solution or component |  |
| Business Analyst |  |
| Version | 1.0.0 |
| Status | Draft |
| Last Updated |  |

## How to write a good non-functional requirement

State it declaratively with a measurable constraint and a verification method. For example: the system must be available 99.9 percent of the time in a calendar month, verified by uptime monitoring; or 95 percent of search requests must return within 300 milliseconds at 500 requests per second, verified by load test.

## Requirements by category

For each relevant category, write one or more quantified requirements. Not every category applies to every solution; mark those that do not apply.

| ID | Category | Requirement (declarative, with constraining factor) | Metric | Target | Verification method | Priority |
| --- | --- | --- | --- | --- | --- | --- |
| NFR-001 | Availability |  |  |  |  |  |
| NFR-002 | Performance efficiency |  |  |  |  |  |
| NFR-003 | Scalability |  |  |  |  |  |
| NFR-004 | Reliability |  |  |  |  |  |
| NFR-005 | Security |  |  |  |  |  |
| NFR-006 | Usability |  |  |  |  |  |
| NFR-007 | Maintainability |  |  |  |  |  |
| NFR-008 | Portability |  |  |  |  |  |
| NFR-009 | Compatibility |  |  |  |  |  |
| NFR-010 | Compliance |  |  |  |  |  |
| NFR-011 | Localization |  |  |  |  |  |
| NFR-012 | Service level agreements |  |  |  |  |  |

## Category prompts

- Availability: percent of time the solution is operable and accessible when required, plus recovery objectives.
- Compatibility: how effectively the solution operates with other components in its environment.
- Performance efficiency: response, throughput, and resource use, often by usage period (peak, mid, off-peak).
- Maintainability: ease of correcting faults and adapting to change.
- Portability: ease of moving the solution between environments.
- Reliability: ability to perform under stated conditions for a period (for example mean time to failure).
- Scalability: ability to grow to handle increased work.
- Security: protection from accidental or malicious access, use, modification, destruction, or disclosure.
- Usability and accessibility: ease of learning and use; conformance to accessibility standards such as WCAG 2.1 AA.
- Certification and compliance: standards, industry conventions, and regulatory, financial, or legal constraints by jurisdiction.
- Localization: languages, laws, currencies, cultures, and formats.
- Service level agreements: formally agreed constraints between provider and user.

## Quality gate (BABOK requirement quality)

Every non-functional requirement is atomic, unambiguous, testable (quantified with a verification method), feasible, prioritized, and understandable, and does not restate a functional behaviour.

## Review criteria

- Each requirement has a metric, a target, and a verification method.
- Categories that do not apply are marked, not left blank by omission.
- Targets are justified (business need, benchmark, or regulation), not arbitrary.
- Security, accessibility, and compliance are addressed where relevant.

## BABOK anchor

Non-Functional Requirements Analysis (10.30); solution requirements (non-functional) under the Requirements Classification Schema; Verify Requirements (7.2).

## House style

Write the narrative with the natural-prose-editor pass and no em dashes. See `docs/methodology/editorial-style.md`.
