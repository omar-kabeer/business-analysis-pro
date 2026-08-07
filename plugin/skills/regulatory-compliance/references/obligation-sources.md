# Obligation Sources Reference

Work outward from the data and the activity, not from a list of famous acronyms.

## Scoping questions

1. Where does the organisation operate, and where do its customers sit? Jurisdiction follows both.
2. What sector? Financial services, health, telecoms, energy, and public sector all carry sector regulators on top of general law.
3. What data is processed? Personal, sensitive personal, payment card, health, biometric, and children's data each pull in specific duties.
4. What activity? Storing, transferring across borders, automated decision-making, marketing, and record-keeping each trigger different clauses.
5. What has the organisation voluntarily committed to? Certifications, customer contracts, and industry codes bind as tightly as law in practice.

## Common obligation families

| Family | Typical instruments | Core demands |
| --- | --- | --- |
| Data protection | GDPR (EU/UK), NDPR and NDPA (Nigeria), CCPA (California), POPIA (South Africa) | Lawful basis, notice, minimisation, retention limits, subject rights, breach notification, cross-border transfer conditions |
| Payments | PCI DSS, PSD2, ISO 20022 scheme rules, local central bank directives | Cardholder data handling, strong customer authentication, message standards, settlement and reporting duties |
| Financial crime | AML and CFT regulations, KYC rules, sanctions regimes | Customer due diligence, screening, transaction monitoring, suspicious activity reporting, record retention |
| Information security | ISO 27001, SOC 2, NIST CSF, sector cyber directives | Control framework, risk treatment, access management, logging, incident response, supplier assurance |
| Financial reporting | IFRS, local GAAP, SOX-equivalent controls | Recognition and disclosure rules, segregation of duties, change control over financial systems, audit trail |
| Accessibility | WCAG 2.1 or 2.2 AA, national equivalents | Perceivable, operable, understandable, robust interfaces; procurement conditions in public sector |
| Sector specific | Health records rules, telecoms licence conditions, energy market codes | Licence terms, reporting cadence, service obligations |

## Turning an obligation into a requirement

Split the clause into its atoms. A clause that says records must be retained for seven years and be retrievable within five working days is two requirements, not one, because they are tested differently.

Write each as a normal requirement with the compliance link as an attribute:

> REQ-COMP-014. The system shall retain transaction records for seven years from the transaction date.
> Source: [instrument, clause]. Control: automated retention policy on the archive store. Evidence: retention configuration export and quarterly sample retrieval test.

## Cautions

- Regulations change. Record the version and the date you read it, and re-check before sign-off.
- Do not assert that something is compliant. State that a requirement addresses an obligation and that evidence exists or does not.
- Where interpretation is genuinely contested, say so and route it to counsel rather than choosing a reading.
