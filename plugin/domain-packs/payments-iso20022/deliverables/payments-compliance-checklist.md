---
type: checklist
domain: payments
status: draft
version: 1.0.0
---

# Payments Compliance Checklist

## Purpose

Check a payments solution against the standards and regulatory controls that apply, before it goes live. Mark each item Met, Not met, or Not applicable, with an owner for anything outstanding. Verify current regulatory dates against a primary source; see `domain-packs/payments-iso20022/regulation.md`.

## ISO 20022 and messaging

- [ ] The correct message, version, and usage guideline (CBPR+, HVPS+, SEPA) are used.
- [ ] Structured data is used where mandated, including structured address (decommissioning of unstructured address applies from November 2026 in CBPR+).
- [ ] Status, return, and investigation flows are supported.
- [ ] Cross-border interbank flows are ISO 20022 native (MT coexistence ended November 2025).

## Regulatory

- [ ] The applicable payment services framework is met (PSD2 today, with PSD3 and PSR readiness tracked for their application date).
- [ ] Strong customer authentication is applied where required.
- [ ] For euro instant payments, Verification of Payee is supported and instant-payment obligations are met on the applicable deadline.
- [ ] Open banking access requirements are met where relevant.

## Financial crime

- [ ] Sanctions screening is applied to the right parties with structured data.
- [ ] AML monitoring and reporting are in place.
- [ ] Fraud monitoring is in place.

## Data and security

- [ ] Personal data is handled per GDPR or the local equivalent.
- [ ] Card data, where present, is handled to PCI DSS with no unnecessary storage.
- [ ] Data is encrypted in transit and at rest, with access controls.

## Outcome

Record the decision (go, no-go, conditional-go) with outstanding items, owners, and dates.

## Reference

`domain-packs/payments-iso20022/regulation.md`; the governance and quality skills; the `release-readiness-checklist`.
