# Scenario: Supplier Invoice Approval Automation

The unstructured request that starts the example.

## The request (as received)

"Our accounts payable team is drowning. Supplier invoices arrive by email as PDFs, someone keys them into the finance system by hand, then chases managers by email for approval. It is slow, we miss early-payment discounts, and we get duplicate and even fraudulent payments slipping through because no one has time to check properly. Finance wants to automate the approval workflow: capture the invoice, match it to the purchase order, route it for approval by the right person based on amount, and post it once approved. We want fewer errors, faster approval, and a clear audit trail. We are not replacing the finance system, just adding the workflow in front of it. This is a spend decision, so we will need a business case, and audit will care about controls."

## How the OS handles this

1. Orchestrator classifies this as an analysis-to-delivery request with a funding decision, and routes it.
2. business-analysis and process-modelling map the current and future process and the gap.
3. finance and executive-review build the business case for the investment gate.
4. requirements and product-owner produce the stories for the build gate.
5. quality and governance run the release-readiness gate.
6. solution-evaluation measures value after launch.
