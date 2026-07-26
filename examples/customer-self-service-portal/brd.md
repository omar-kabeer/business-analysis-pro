---
type: deliverable
domain: business-analysis
status: draft
version: 1.0.0
---

# Business Requirements Document: Customer Self-Service Portal

## Document Control

| Field | Value |
| --- | --- |
| Initiative | Customer Self-Service Portal |
| Business Owner | Director of Customer Operations |
| Product Owner | Customer Service Manager |
| Business Analyst | (worked example) |
| Version | 1.0.0 |
| Status | Draft |
| Last Updated | 2026-07-26 |

## Executive Summary

Routine customer contacts (balance checks, contact-detail updates, invoice copies, and support-ticket status) drive high call volume, high cost to serve, and long hold times. This document specifies the requirements for a customer self-service portal that lets customers complete these tasks online at any time, integrated with the existing CRM and billing systems rather than replacing them. The recommendation is to proceed to a funded delivery phase. The decision required is approval of budget to build the portal covering the four routine journeys, with data protection and payment handling treated as mandatory constraints.

## Business Context

Customer service handles a large and growing volume of routine calls. Agents spend most of their time on repetitive lookups and updates, which is expensive and leaves less capacity for complex cases. Customers wait on hold for tasks they would prefer to complete themselves. The enterprise goal is to reduce cost to serve and improve customer satisfaction without replacing the CRM or billing systems. The change is strategically aligned with a wider push toward digital, lower-cost service channels.

## Objectives and Success Measures

| ID | Objective | Success Measure | Target |
| --- | --- | --- | --- |
| OBJ-001 | Shift routine contacts to self-service | Share of routine contacts completed in the portal | 40 percent within 6 months of launch |
| OBJ-002 | Improve customer satisfaction for routine tasks | CSAT for portal journeys | 4.2 or higher out of 5 |
| OBJ-003 | Reduce cost to serve routine contacts | Cost per routine transaction | 30 percent reduction within 12 months |
| OBJ-004 | Maintain trust and compliance | Data protection and payment incidents | Zero reportable incidents |

## Scope

### In Scope

- Secure customer authentication and account access.
- View account details and update contact information.
- View and download statements and invoices.
- Raise a support ticket and track its status.
- Make a payment through the existing payment gateway.

### Out of Scope

- Live chat and agent-assisted channels.
- Replacement of the CRM or billing systems.
- Changes to the agent desktop.
- Marketing content and promotions.

## Stakeholders

| Stakeholder | Role | Interest or Need | Decision Rights |
| --- | --- | --- | --- |
| Director of Customer Operations | Sponsor | Lower cost to serve, higher satisfaction | Approves funding and scope |
| Customer Service Manager | Product Owner | Fewer routine calls, clear ticket flow | Prioritises requirements |
| Customers | End users | Fast, self-service access to routine tasks | None (represented via research) |
| Finance and Billing | Domain SME | Correct invoices and safe payments | Approves payment approach |
| Compliance and Data Protection Officer | Regulator (internal) | Data protection and lawful processing | Approves data handling |
| IT and Solution Architect | Implementation SME | Feasible integration with CRM and billing | Approves technical approach |
| Support Agents | End users (internal) | Fewer repetitive calls | None |

## Current State

Routine requests arrive by phone. Agents authenticate the caller verbally, look up records in the CRM, and retrieve invoices and balances from the separate billing system. Address and contact updates are keyed into the CRM by agents. Invoice copies are emailed on request. Support-ticket status is only available by calling in. There is no online self-service. The main pain points are high call volume for low-value tasks, long hold times, duplicated manual lookups across two systems, and inconsistent turnaround on invoice and status requests. Constraints: the CRM is the record of truth for customer data, the billing system owns invoices and balances, and a payment gateway is already in use.

## Future State

An authenticated self-service portal gives customers a single front door to the four routine journeys. It reads customer data from the CRM and invoice and balance data from the billing system, and writes contact-detail changes back to the CRM as the record of truth. Support tickets raised in the portal appear in the existing ticketing tool and their status is reflected back to the customer. Payments are taken through the existing gateway. Agents are freed from routine calls to handle complex cases. The operating model shifts routine contact from assisted to self-service, with agents as an escalation path.

## Requirements

### Business Requirements

| ID | Requirement | Rationale | Priority | Source |
| --- | --- | --- | --- | --- |
| BR-001 | Enable customers to self-serve the four routine journeys online | Reduce call volume and cost to serve (OBJ-001, OBJ-003) | Must | Sponsor |
| BR-002 | Integrate with existing CRM and billing without replacing them | Avoid cost and risk of system replacement | Must | Sponsor |
| BR-003 | Protect customer data and payments to the required standards | Maintain trust and compliance (OBJ-004) | Must | Compliance |

### Stakeholder Requirements

| ID | Requirement | Stakeholder | Priority | Source |
| --- | --- | --- | --- | --- |
| SR-001 | See current balance and download invoices without calling | Customers | Must | Research |
| SR-002 | Update address and contact details online, reflected in the CRM | Customers | Must | Research |
| SR-003 | Raise a support ticket and see its status | Customers | Must | Research |
| SR-004 | Have payment handling meet finance and card standards | Finance | Must | Finance |

### Functional Requirements

| ID | Requirement | Acceptance Criteria | Priority | Source |
| --- | --- | --- | --- | --- |
| FR-001 | Authenticate a customer securely | Given a registered customer, when they sign in with valid credentials and a second factor, then they access only their own account; invalid attempts are rejected and rate-limited | Must | BR-003 |
| FR-002 | View account details | Given an authenticated customer, when they open account details, then current details from the CRM are shown | Must | SR-001 |
| FR-003 | Update contact details | Given an authenticated customer, when they submit a valid change, then the CRM is updated and a confirmation is shown; invalid input is rejected with a clear message | Must | SR-002 |
| FR-004 | View and download statements and invoices | Given an authenticated customer, when they open billing, then invoices from the billing system are listed and can be downloaded as PDF | Must | SR-001 |
| FR-005 | Raise and track a support ticket | Given an authenticated customer, when they submit a ticket, then it is created in the ticketing tool and its status is visible in the portal | Must | SR-003 |
| FR-006 | Make a payment | Given an authenticated customer with a balance due, when they pay through the gateway, then the payment is captured, the balance updates, and a receipt is issued | Should | SR-004 |

### Non-Functional Requirements

| ID | Requirement | Quality Attribute | Acceptance Criteria | Priority |
| --- | --- | --- | --- | --- |
| NFR-001 | The portal is available for customer use | Availability | 99.9 percent monthly availability | Must |
| NFR-002 | Pages respond quickly under load | Performance | 95 percent of page loads under 2 seconds at expected peak | Must |
| NFR-003 | Customer data is protected | Security | Data encrypted in transit and at rest; access via authenticated sessions only | Must |
| NFR-004 | The portal is accessible | Accessibility | Conforms to WCAG 2.1 AA | Must |

### Data and Reporting Requirements

| ID | Requirement | Data or Report Need | Acceptance Criteria | Source |
| --- | --- | --- | --- | --- |
| DR-001 | Report self-service adoption | Count and share of routine contacts completed in the portal | Weekly report by journey against the OBJ-001 target | OBJ-001 |
| DR-002 | Keep the CRM the record of truth for contact data | Contact updates written back to the CRM | No divergent copy of customer contact data is stored in the portal | BR-002 |

### Compliance and Control Requirements

| ID | Requirement | Policy or Regulation | Evidence Needed | Owner |
| --- | --- | --- | --- | --- |
| CR-001 | Process personal data lawfully and protect it | GDPR and data protection policy | Data protection impact assessment; access controls | Data Protection Officer |
| CR-002 | Handle card payments to standard | PCI DSS | Use of a compliant gateway; no card data stored by the portal | Finance |

## Business Rules

| ID | Rule | Applies To | Source |
| --- | --- | --- | --- |
| RULE-001 | A customer may view and change only their own account | FR-001 to FR-006 | Compliance |
| RULE-002 | Contact-detail changes take effect only after validation | FR-003 | CRM policy |
| RULE-003 | Payments are accepted only up to the outstanding balance | FR-006 | Finance |

## Assumptions

| ID | Assumption | Impact if False | Owner |
| --- | --- | --- | --- |
| ASM-001 | The CRM and billing system expose usable APIs for read and write | Integration effort and cost rise materially | Solution Architect |
| ASM-002 | The existing payment gateway can be embedded or linked | Payments may fall out of the first release | Finance |
| ASM-003 | Customer identity data is sufficient to support secure sign-up | Authentication approach must change | Compliance |

## Dependencies

| ID | Dependency | Owner | Required By |
| --- | --- | --- | --- |
| DEP-001 | CRM API access and support | IT | Requirements to design |
| DEP-002 | Billing system API access | IT | Requirements to design |
| DEP-003 | Payment gateway integration details | Finance | Design of FR-006 |

## Risks and Issues

| ID | Type | Description | Impact | Mitigation or Action |
| --- | --- | --- | --- | --- |
| RISK-001 | Risk | Integration with legacy billing is harder than expected | Schedule and cost overrun | Early technical spike on billing API |
| RISK-002 | Risk | Low customer adoption of the portal | Benefits not realised | Usability testing and a guided launch |
| RISK-003 | Risk | Data protection gap in handling personal data | Compliance breach | Data protection impact assessment before build |

## Open Questions

| ID | Question | Owner | Needed By |
| --- | --- | --- | --- |
| Q-001 | Is payment in scope for the first release or a later one? | Sponsor | Scope sign-off |
| Q-002 | What identity data supports secure self sign-up? | Compliance | Design |

## Traceability

| Requirement ID | Business Objective | Source | Acceptance Criteria or Test Link |
| --- | --- | --- | --- |
| FR-001 | OBJ-004 | BR-003 | See FR-001 acceptance criteria |
| FR-002 | OBJ-001 | SR-001 | See FR-002 acceptance criteria |
| FR-003 | OBJ-001 | SR-002 | See FR-003 acceptance criteria |
| FR-004 | OBJ-001 | SR-001 | See FR-004 acceptance criteria |
| FR-005 | OBJ-001 | SR-003 | See FR-005 acceptance criteria |
| FR-006 | OBJ-003 | SR-004 | See FR-006 acceptance criteria |

## Sign-Off

| Name | Role | Decision | Date |
| --- | --- | --- | --- |
| (worked example) | Sponsor | Approve / Reject / Defer |  |
| (worked example) | Compliance | Approve / Reject / Defer |  |
| (worked example) | Finance | Approve / Reject / Defer |  |
