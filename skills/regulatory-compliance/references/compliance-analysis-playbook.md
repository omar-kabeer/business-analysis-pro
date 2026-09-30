# Compliance Analysis Playbook

How to find the obligations that constrain a change, turn each into testable requirements, map them to controls, and keep the evidence an auditor will ask for. This playbook applies BABOK's treatment of policies and regulation within Analyze Current State (6.1) and Define Future State (6.2), with Business Rules Analysis (10.9), Non-Functional Requirements Analysis (10.30), and Acceptance and Evaluation Criteria (10.1). Information security obligations follow ISO/IEC 27001:2022 (`iso-27001-2022`) and its control set ISO/IEC 27002:2022 (`iso-27002`). The library's copies of both are for identity and paraphrase only; they are not licensed for reproduction.

## When this playbook applies

Use it whenever law, regulation, internal policy, a contract, or a standard constrains what the solution may do or how it must be evidenced: financial controls, data protection, security, accessibility, industry regulation. It is not legal advice; interpretation of law belongs to the organisation's legal or compliance function, and the analyst records whose interpretation was used.

## Step 1: Identify the obligations that apply

List candidate sources systematically: legislation and regulation in each jurisdiction, regulator guidance, internal policies, contracts and service agreements, and standards the organisation has adopted. For each candidate, confirm applicability with its owner: does it apply to this change, in which jurisdictions, and from when. Record each obligation in `templates/compliance-obligation-register.md` with its source, clause, owner, and applicability. The reference `obligation-sources.md` lists common sources.

## Step 2: Decompose each obligation into requirements

An obligation is usually too broad to build or test. Break it into requirements that are specific and verifiable:

| Obligation | Requirement | Kind |
| --- | --- | --- |
| Segregation of duties (FIN-POL-07) | Nobody can approve an invoice for a purchase order they raised | Business rule, functional |
| Record keeping | Approval records are retained for 7 years | Non-functional |
| Data protection: minimisation | The supplier portal shows invoice status only, no bank details | Functional |

Each requirement traces back to its obligation and clause, so a change to the law shows which requirements move.

## Step 3: Assess risk and select controls

For information security obligations, ISO/IEC 27001 expects controls to be determined from a risk assessment and treatment (clause 6.1.2 and 6.1.3). Trace each security requirement to the risk it treats (check ISO27001-SR-01 in `sources/conformance/iso-27001-2022.md`) and to the control that implements it (SR-02). Use ISO/IEC 27002 as the reference set of controls: identify each by its clause number and title (ISO27002-CM-01), and keep the control statement (what) distinct from its implementation guidance (how) (ISO27002-SC-02).

## Step 4: Build the compliance matrix

Map obligations to controls to evidence in one matrix: obligation, requirement, control, implementation status, evidence, and owner. For an ISO/IEC 27001 statement of applicability, list the necessary controls with a justification for each, their implementation status, and a justified exclusion for any Annex A control not used (ISO27001-CM-01 to CM-04). The reference `control-mapping.md` gives the matrix conventions.

## Step 5: Define acceptance evidence

For each requirement, state how compliance will be demonstrated and who accepts it: a test case, a configuration export, an access review, a signed procedure. Write this before build, so the evidence is produced as work happens rather than reconstructed for the auditor.

## Step 6: Keep it current

Obligations change. Name an owner for monitoring each source, set a review cadence, and assess every change to an obligation through the change process: which requirements, controls, and evidence it affects.

## Stop rules

The analysis is complete when every applicable obligation is registered with its source, clause, owner, and applicability; each is decomposed into verifiable requirements traced to it; security requirements trace to risks and controls; the matrix shows status and evidence for each control; acceptance evidence is defined before build; and monitoring is owned.

## Common failures

- Obligations recorded as titles ("GDPR") rather than specific clauses.
- Requirements that restate the obligation instead of making it testable.
- Controls with no link to a risk or an obligation.
- Evidence gathered only when the auditor arrives.
- Legal interpretation made by the project without naming whose view was used.

## Worked example

Supplier invoice approval, release 1.

Obligations registered:
- CR-002 source: internal policy FIN-POL-07, segregation of duties; owner: Financial Controller; applies to all UK approvals from go-live.
- OR-001 source: UK record-keeping rules for business records, as interpreted by the Finance compliance lead; retention of 7 years for approval records.
- Data protection for the supplier portal (release 2): data minimisation, as interpreted by the Data Protection Officer in DPIA-014.

Decomposition and matrix extract:

| Obligation | Requirement | Control | Status | Evidence | Owner |
| --- | --- | --- | --- | --- | --- |
| FIN-POL-07 | FR-023: block approval by the PO raiser and route to the next approver | Workflow rule, preventive | Implemented in test | UAT cases TC-040 to TC-044; quarterly access review | Financial Controller |
| Record keeping | OR-001: retain approval records 7 years | ERP retention setting | Configured | Configuration export CFG-12 | ERP team |

Security risk trace: RSK-011 (lookup could expose another supplier's data) is treated by access control requirements in the portal, mapped to the relevant ISO/IEC 27002 access control clauses by the security architect, with a penetration test as evidence.

Acceptance: the Financial Controller accepts CR-002 on the UAT evidence; internal audit samples approvals in the first quarter after go-live, closing finding AF-2025-04.

## Sources

- `babok-3.0-2015`: policies and rules within 6.1 and 6.2, and techniques 10.1, 10.9, and 10.30.
- `iso-27001-2022`: risk-based determination of controls and the statement of applicability, paraphrased.
- `iso-27002`: the reference set of controls, identified by clause, paraphrased.
