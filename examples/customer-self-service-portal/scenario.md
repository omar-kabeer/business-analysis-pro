# Scenario: Customer Self-Service Portal

This is the raw, unstructured request that starts the worked example. It is the kind of brief a business analyst receives from a sponsor. The rest of the example shows how the OS turns it into a structured, validated BRD.

## The request (as received)

"We are getting hammered by call volume. Customers phone us for the same handful of things over and over: checking their account balance, updating their address or contact details, getting a copy of an invoice, and chasing the status of a support ticket. Our agents spend most of their day on these routine calls, it is expensive, and customers hate waiting on hold.

Leadership wants a customer self-service portal so people can do these things themselves online, day or night. We think it could cut call volume a lot and lift satisfaction. Can you work out what we actually need, and write it up so we can get budget approved and hand it to a delivery team?

For context: we already run a CRM for customer records and a separate billing system for invoices and payments. Compliance will care about data protection, and finance will care about how payments are handled. We do not want to replace any systems, just give customers a front door to self-serve."

## How the OS handles this

1. Orchestrator classifies this as a discovery-to-requirements request and routes it.
2. The business-analysis skill frames the need with the BACCM, maps current and future state, and assesses the gap.
3. The requirements work is captured in a BRD using `templates/brd.md`.
4. The quality skill validates the BRD against `evaluation/brd-rubric.md`.

The output BRD is in `brd.md` and its graded evaluation is in `evaluation.md`.
