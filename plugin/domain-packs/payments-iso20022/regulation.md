# Payments Regulatory and Standards Landscape

The context a business analyst must account for on a payments initiative. Dates were current as of mid-2026 and are cited. Verify the current position with the standards body or regulator before relying on it, because these timelines move.

## ISO 20022 migration

- Cross-border interbank payments: the SWIFT coexistence period, during which both legacy MT and ISO 20022 (MX) messages were supported for financial-institution-to-financial-institution cross-border payment instructions, ended on 22 November 2025. MT payment instructions are no longer supported for those flows, so systems must be ISO 20022 native for cross-border interbank payments.
- A further milestone follows in November 2026, when fully unstructured postal addresses are decommissioned in CBPR+ messages, so structured address data becomes effectively mandatory.
- Major market infrastructures have already migrated (for example the eurosystem T2 and the US Fedwire), so domestic high-value flows are largely ISO 20022 native.

Implication: any initiative touching cross-border or high-value payments must assume ISO 20022 native processing and structured data, and should confirm scheme-specific deadlines.

## European payments regulation

- PSD2 is the current framework, but PSD3 (a directive) and the PSR (a regulation) were provisionally agreed by the European Parliament and Council on 27 November 2025, with final texts expected in the Official Journal in the first half of 2026 and application expected around early 2028. They will replace PSD2 and the E-Money Directive with a single framework focused on harmonisation, fraud prevention, and stronger open banking. Analysts should design to PSD2 today while tracking PSD3 and PSR readiness.
- SEPA Instant Payments Regulation: eurozone payment service providers had to be able to receive and then send euro instant payments on defined 2025 deadlines, with further deadlines for non-eurozone providers into 2027. Verification of Payee (a check that the payee name matches the account) has been required for SEPA euro transfers since October 2025.

## Cross-cutting controls

- Sanctions and AML screening: payments must be screened against sanctions lists and monitored for money laundering. ISO 20022's structured parties and purpose data improve screening quality.
- Card payments: where cards are involved, PCI DSS applies. Do not store card data in systems that do not need it; use a compliant gateway.
- Data protection: personal data in payments is subject to GDPR or the local equivalent.
- Fraud: strong customer authentication and fraud monitoring are expected, and are strengthened under the incoming PSR.

## Using this in analysis

Treat the applicable standards and regulations as constraints and non-functional requirements. Capture them in the requirements set, evidence them in the compliance checklist, and record any assumption about a deadline or scheme rule for confirmation. When a date or rule matters to a decision, verify it against a primary source.
