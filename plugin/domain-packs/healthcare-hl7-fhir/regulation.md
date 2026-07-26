# Healthcare Regulatory and Interoperability Landscape

The privacy, security, and interoperability context an analyst must account for on a healthcare initiative. This pack leans on the United States framework. Dates were current as of mid-2026 and are cited. Verify the current position with the regulator or standards body before relying on it, and check the rules of the relevant jurisdiction.

## HIPAA (privacy and security)

The Health Insurance Portability and Accountability Act sets the baseline for protected health information in the United States:

- Privacy Rule: governs the use and disclosure of protected health information, and patients' rights to access their data.
- Security Rule: requires administrative, physical, and technical safeguards for electronic protected health information (access control, audit controls, integrity, transmission security).
- Breach Notification Rule: requires notification when unsecured protected health information is breached.

Design health data solutions to the minimum-necessary principle, with access controls, audit trails, and encryption, and a lawful basis for each use or disclosure.

## Interoperability rules

- The CMS Interoperability and Prior Authorization Final Rule requires certain payers (Medicare Advantage, state Medicaid, and Qualified Health Plan issuers) to expose FHIR-based APIs for health data exchange, with key requirements taking effect on 1 January 2026.
- Information blocking rules discourage practices that unreasonably prevent access, exchange, or use of electronic health information, and certified health IT must meet defined standards.
- TEFCA (the Trusted Exchange Framework and Common Agreement) is in production; participating networks are moving to expose data via FHIR APIs aligned with US Core and USCDI, with milestones through 2026.

## Data standards as constraints

- Exchange should use FHIR R4 with the US Core implementation guide, carrying USCDI data elements, unless a specific rule says otherwise.
- App access should use SMART on FHIR (OAuth 2.0) for authorisation.

## Cross-cutting controls

- Consent and authorisation: capture and honour patient consent and authorisation for use and disclosure, per HIPAA and any state law.
- Security: access control, audit logging, encryption in transit and at rest, and breach response.
- Data quality and identity: correct patient matching and identity are safety-critical; errors can cause harm.

## Using this in analysis

Treat HIPAA, the interoperability rules, and the FHIR and US Core standards as constraints and non-functional requirements. Capture them in the requirements set, evidence them in the healthcare compliance checklist, and record any assumption about a rule or deadline for confirmation. When a rule matters to a decision, verify it against a primary source.
