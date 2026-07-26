---
type: deliverable
domain: payments
status: draft
version: 1.0.0
---

# Payment Message Mapping

## Purpose

Map a business payment flow to the ISO 20022 message and fields that carry it, so requirements, integration, and testing all work from one agreed definition. Use it when specifying a payment that must be sent, received, or transformed in ISO 20022.

## Document Control

| Field | Value |
| --- | --- |
| Payment flow |  |
| Message and version (for example pacs.008.001.08) |  |
| Usage guideline (CBPR+, HVPS+, SEPA) |  |
| Business Analyst |  |
| Version | 1.0.0 |
| Status | Draft |
| Last Updated |  |

## Flow summary

State the business flow: who initiates, who receives, the scheme or rail, and the trigger. Note whether this is initiation (pain), interbank clearing and settlement (pacs), or reporting (camt).

## Field mapping

For each business data item, record the ISO 20022 element that carries it, whether it is mandatory in the chosen usage guideline, its format, and the validation rule.

| Business data item | ISO 20022 element (path) | Mandatory in guideline | Format and allowed values | Validation rule | Source |
| --- | --- | --- | --- | --- | --- |
| Amount and currency |  | Yes |  |  |  |
| Debtor name and account |  | Yes |  |  |  |
| Creditor name and account |  | Yes |  |  |  |
| Debtor and creditor agent (BIC) |  | Yes |  |  |  |
| Structured address |  |  |  |  |  |
| End-to-end and transaction reference (UETR) |  |  |  |  |  |
| Remittance information |  |  |  |  |  |
| Purpose and category purpose |  |  |  |  |  |
| Charge bearer |  |  |  |  |  |

## Exceptions and status

Define how status, returns, and investigations are handled: the status message (for example pacs.002), the return message (pacs.004), and any cancellation or investigation flow (camt.056, camt.029).

## Assumptions and open questions

Record assumptions about the scheme, version, and usage guideline, and flag anything to confirm with the scheme or counterparties.

## Review criteria

- The message, version, and usage guideline are named and correct.
- Every mandatory element in the guideline is mapped.
- Formats and validation rules are precise and testable.
- Status, return, and investigation flows are covered.

## Reference

`domain-packs/payments-iso20022/terminology.md`; the requirements and architecture skills.
