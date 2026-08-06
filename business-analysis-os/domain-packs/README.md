# Domain Packs

Domain-specific knowledge and deliverables that load only when a domain applies, so the core skills stay general and lean. A pack adds terminology, regulatory context, and domain-specific templates that a business analyst needs in that field.

## Available packs

- `payments-iso20022/`: payments and ISO 20022, including message families, migration and regulatory context, and payments-specific deliverables. Relevant to banking, fintech, and any initiative that moves money.
- `healthcare-hl7-fhir/`: healthcare and HL7 FHIR, including the FHIR resource model, US Core and USCDI, the HIPAA and interoperability landscape, and healthcare-specific deliverables. Relevant to health systems, payers, and health tech.

## Loading convention

The orchestrator and business-analysis skills load a pack when the initiative is in that domain. For payments, the trigger is any mention of ISO 20022, SWIFT, SEPA, payment messages, clearing and settlement, or a payments initiative. The pack supplements the core skills and templates; it does not replace them.

## Adding a pack

Copy `_template/` and follow its structure: an overview, terminology, regulatory context, and a small set of domain-specific deliverables. Keep every file in the house style with no em dashes; the validator scans domain-pack markdown like everything else.
