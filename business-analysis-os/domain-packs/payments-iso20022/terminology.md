# ISO 20022 Terminology and Message Families

ISO 20022 is an international standard for financial messaging. It defines a shared data dictionary and business model, and messages built from it in XML (and increasingly other syntaxes). Its value for a business analyst is a rich, structured, and consistent way to describe payments data, replacing the terse and varied older formats such as the SWIFT MT series.

## How ISO 20022 is structured

- Business model and data dictionary: a shared set of business concepts and data elements.
- Message definitions: specific messages built from those elements for a business process.
- Message identifier: four parts, business area then message number then variant then version. For example `pacs.008.001.08` is business area pacs, message 008, variant 001, version 08. These are often called MX messages, in contrast to the legacy MT messages.

## Main message families (business areas)

- pain (Payments Initiation): customer to bank instructions. Examples: pain.001 customer credit transfer initiation, pain.002 customer payment status report, pain.008 customer direct debit initiation.
- pacs (Payments Clearing and Settlement): bank to bank. Examples: pacs.008 FI to FI customer credit transfer, pacs.009 financial institution credit transfer, pacs.002 payment status report, pacs.004 payment return.
- camt (Cash Management): reporting and exceptions. Examples: camt.053 bank to customer statement, camt.052 intraday report, camt.054 debit or credit notification, camt.056 payment cancellation request, camt.029 resolution of investigation.
- Other areas an analyst may meet: acmt (account management), reda (reference data), remt (remittance), and pacs and camt relatives for returns, recalls, and investigations.

## Usage guidelines

The base standard is broad, so communities publish usage guidelines that constrain it for a context:

- CBPR+ (Cross-Border Payments and Reporting Plus): the guideline for cross-border interbank payments over SWIFT.
- HVPS+ (High Value Payments Systems Plus): the guideline for high-value real-time gross settlement systems such as the eurosystem T2 and others.
Local schemes (for example SEPA) publish their own implementation guidelines.

## Key data concepts

- BIC (Business Identifier Code): identifies a financial institution.
- IBAN (International Bank Account Number): identifies an account.
- LEI (Legal Entity Identifier): identifies a legal entity, increasingly carried in payments.
- UETR (Unique End-to-end Transaction Reference): a UUID that tracks a payment end to end.
- Structured address: separate fields for street, town, postcode, and country, replacing free-text address lines. Structured data is progressively mandated.
- Purpose codes, charge bearer, remittance information: coded and structured fields that make automated processing and reconciliation possible.

## Why this matters for requirements

ISO 20022's structure lets requirements be precise about which data is captured, validated, and carried at each step, and enables straight-through processing and clean reconciliation. Under-using the structure (for example forcing structured data back into free text) loses that benefit and is increasingly non-compliant.
