# Procurement and Contracts Playbook

How to write down the relationship with a supplier so that what is bought, how it is accepted, how the supplier is paid, and how the relationship ends are all clear and enforceable. This playbook applies BABOK Vendor Assessment (10.49), Acceptance and Evaluation Criteria (10.1), and Non-Functional Requirements Analysis (10.30), within Define Design Options (7.5) and Define Change Strategy (6.4). Sustainable procurement follows the guidance of ISO 20400:2017 (`iso-20400`); security in supplier relationships follows ISO/IEC 27002:2022 (`iso-27002`, controls 5.19 to 5.22). Both copies are for paraphrase only; their notes are in `sources/conformance/`. Contract law is for the organisation's legal and procurement functions; this playbook covers the business analysis content of the documents.

## When this playbook applies

Use it when requirements must become a document a supplier can price and be held to: a request for proposal or quote, a statement of work, a service level agreement, acceptance and payment schedules, or exit terms. Use the vendor-evaluation skill to choose among suppliers.

## Step 1: Translate requirements into supplier obligations

Start from the approved requirements and state, for each, what the supplier must deliver or perform. Separate what is required (mandatory) from what is desirable (scored). Write outcomes and measures rather than prescribing how, unless the how is itself a requirement. Keep traceability from each obligation back to its requirement.

## Step 2: Set sustainability criteria where they matter

ISO 20400 advises defining sustainability criteria for what is being bought, reflecting the priorities of the sourcing strategy, each verifiable through an evaluation procedure stated in the tender documents (checks ISO20400-PD-01 to PD-03). Distinguish minimum requirements from optional ones (PD-04), and make sure the criteria give all suppliers a fair chance to compete (PD-05).

## Step 3: Write the statement of work

A statement of work states the scope, deliverables, milestones, responsibilities on both sides, assumptions, dependencies, and exclusions. Each deliverable has acceptance criteria that can be tested, and a named acceptor. Use `templates/statement-of-work.md`. Unclear exclusions cause more disputes than unclear inclusions.

## Step 4: Define service levels

For services, define each service level with a measure, a target, the measurement period, how it is measured and reported, and the consequence of missing it (service credits, and when repeated failure permits termination). Use `templates/service-level-agreement.md`. A service level with no measurement method cannot be enforced.

## Step 5: Tie payment to acceptance

Link payments to accepted deliverables or milestones rather than to effort or dates alone. State the acceptance process: how long the buyer has to test, what counts as a defect, how many rework cycles are allowed, and what happens if acceptance fails.

## Step 6: Address information security

Where the supplier handles the organisation's information or systems, ISO/IEC 27002 treats information security in supplier relationships as a set of controls: define the security requirements for the relationship (5.19), address them in the supplier agreement (5.20), manage security in the ICT supply chain (5.21), and monitor and review supplier services (5.22). Turn each into a contract requirement with evidence, with the regulatory-compliance skill.

## Step 7: Plan change and exit

State how changes to scope are requested, assessed, priced, and approved, which should mirror the change control process. State exit and transition terms: data return and deletion, knowledge transfer, parallel running, and the supplier's obligations when the contract ends. Exit terms agreed at the start are far cheaper than exit terms negotiated at the end.

## Stop rules

The documents are ready when every obligation traces to a requirement, mandatory and scored items are separated, deliverables and service levels have testable criteria and measurement, payment follows acceptance, security requirements are in the agreement, and change and exit are defined.

## Common failures

- Requirements pasted into a contract without translation into obligations.
- Service levels with no measurement method or consequence.
- Payment by date rather than by acceptance.
- Exit terms left to the end of the relationship.
- Security addressed in a questionnaire but not in the agreement.

## Worked example

Supplier invoice approval: statement of work for the ERP vendor's configuration of the workflow module.

Obligations from requirements:
- Configure approval routing to decision table DT-001 (from FR-021), accepted when UAT cases TC-011 to TC-013 pass.
- Configure reminders and escalation (FR-022), accepted when TC-014 to TC-016 pass.
- Block self-approval (FR-023, control CR-002), accepted when TC-040 to TC-044 pass and internal audit confirms.

Exclusions: invoice capture, payment runs, and the supplier portal.

Service level for post-go-live support: priority 1 incidents (approvals cannot be posted) answered within 30 minutes and resolved within 4 hours, measured monthly from the vendor's ticket system; a 5 percent service credit per breach, and termination rights after three breaches in a quarter.

Payment: 40 percent on acceptance of routing and reminders, 40 percent on UAT sign-off, 20 percent after 30 days of stable production.

Security: the vendor's access to the ERP is named, time-limited, and logged; the agreement requires notification of any security incident within 24 hours, with a right to audit.

Exit: on termination, the vendor hands over the configuration export and documentation and supports a 30-day transition.

## Sources

- `babok-3.0-2015`: Vendor Assessment (10.49), Acceptance and Evaluation Criteria (10.1), and Non-Functional Requirements Analysis (10.30), within 6.4 and 7.5.
- `iso-20400`: sustainability criteria in procurement documents, as guidance.
- `iso-27002`: information security in supplier relationships (5.19 to 5.22), paraphrased.
