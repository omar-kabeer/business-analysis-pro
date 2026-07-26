---
type: checklist
domain: healthcare
status: draft
version: 1.0.0
---

# Healthcare Compliance Checklist

## Purpose

Check a healthcare data solution against the privacy, security, and interoperability rules that apply, before it goes live. Mark each item Met, Not met, or Not applicable, with an owner for anything outstanding. Verify current regulatory dates against a primary source; see `domain-packs/healthcare-hl7-fhir/regulation.md`.

## Privacy (HIPAA Privacy Rule)

- [ ] Uses and disclosures of protected health information have a lawful basis.
- [ ] The minimum-necessary principle is applied.
- [ ] Patient rights to access their data are supported.
- [ ] Consent and authorisation are captured and honoured.

## Security (HIPAA Security Rule)

- [ ] Access control restricts data to authorised users and roles.
- [ ] Audit controls log access and changes.
- [ ] Data is encrypted in transit and at rest.
- [ ] Integrity and transmission security controls are in place.
- [ ] A breach response process exists (Breach Notification Rule).

## Interoperability and standards

- [ ] Exchange uses FHIR R4 with the US Core implementation guide where applicable.
- [ ] USCDI data elements are supported at the required version.
- [ ] App access uses SMART on FHIR (OAuth 2.0).
- [ ] Applicable CMS interoperability and information-blocking obligations are met.

## Safety and data quality

- [ ] Patient matching and identity are correct and tested.
- [ ] Clinical data quality and terminology coding are validated.

## Outcome

Record the decision (go, no-go, conditional-go) with outstanding items, owners, and dates.

## Reference

`domain-packs/healthcare-hl7-fhir/regulation.md`; the governance and quality skills; the `release-readiness-checklist`.
