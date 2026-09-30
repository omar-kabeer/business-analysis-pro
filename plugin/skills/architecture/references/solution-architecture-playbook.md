# Solution Architecture Playbook

How the business analyst uses architecture thinking to shape requirements and design options, without becoming the solution architect. The analyst's job is to make the technical context visible early enough that requirements are feasible, interfaces are known, and design options can be compared on evidence. This playbook applies BABOK Define Requirements Architecture (7.4), Define Design Options (7.5), and Analyze Current State (6.1), with the techniques Scope Modelling (10.41), Interface Analysis (10.24), Sequence Diagrams (10.42), and Data Flow Diagrams (10.13).

## When this playbook applies

Use it when a change touches more than one system, when an integration or data flow is part of the need, when a stakeholder asks "can the system do this", or when design options must be compared. Do not use it to design infrastructure, choose vendors on technical grounds alone, or write architecture decision records that belong to the architect. The analyst frames the question and the evidence; the architect owns the technical decision.

## Step 1: Draw the boundary before the boxes

Start with a context diagram (Scope Modelling, 10.41). Put the solution in the middle, every external actor and system around it, and one labelled flow per exchange. Each flow names what moves and in which direction.

Check the boundary with three questions:

1. Is every system that sends or receives data for this change on the diagram?
2. Is every flow labelled with the business information it carries, not the protocol?
3. Is anything inside the boundary that the change does not actually alter?

A context diagram that fits on one page and survives these questions is the single most useful architecture artefact an analyst produces. It fixes scope, reveals interfaces, and shows stakeholders what they are and are not getting.

## Step 2: Find and describe every interface

For each flow crossing the boundary, run Interface Analysis (10.24):

| Question | Why it matters |
| --- | --- |
| Who owns the other side? | Interfaces fail at organisational seams more often than technical ones |
| What data moves, in what volume, how often? | Volume and timing drive design choices such as real time or batch |
| What happens when it fails? | Error handling is a requirement, not a detail for later |
| Is the interface existing, changed, or new? | New interfaces carry the most schedule and cost risk |
| What security and privacy rules apply? | Personal and financial data constrain the pattern and the vendor |

Record each interface as an entry the requirements can trace to. An interface nobody owns is a risk; log it.

## Step 3: Choose the integration pattern with the business, not for it

Explain the realistic patterns in business terms and let the trade-offs drive the choice. The reference file `integration-patterns.md` describes them in more depth.

| Pattern | Business meaning | Choose when |
| --- | --- | --- |
| Request and response (API) | One system asks, the other answers now | A user waits for the answer |
| Event or message | One system announces a change; others react when ready | Several systems care, and a short delay is acceptable |
| Batch file | Data moves on a schedule | Volumes are large and hours of delay are acceptable |
| Shared database | Systems read the same store | Rarely; it couples systems tightly |

State the consequence of each option in terms stakeholders care about: how stale the data can be, what happens when one side is down, and what it costs to change later.

## Step 4: Model behaviour where timing or order matters

Where the order of messages matters (approvals, payments, retries), draw a sequence diagram (10.42) in UML (see `uml-2.5`). Where data transforms as it moves, draw a data flow diagram (10.13). Keep each model to one question. A diagram that answers "what happens if the ERP is down during approval" is worth more than a complete model of everything.

## Step 5: Structure the requirements architecture

Organise the requirements so each has one home and its relationships are explicit (7.4). Use viewpoints that match the audiences: a process viewpoint for operations, a behavioural viewpoint for developers, a data viewpoint for the data owners. Where the enterprise uses ArchiMate (see `archimate-3.1`), map the viewpoints to its business, application, and technology layers so the requirements sit inside the enterprise architecture rather than beside it. Use the template `templates/requirements-architecture.md`.

## Step 6: Define and compare design options

For Define Design Options (7.5), describe two or three options at the level of components and responsibilities, not technology products. For each, state:

- which requirements it satisfies fully, partially, or not at all;
- the interfaces it adds or changes;
- the main technical risk and how it could be reduced;
- the rough cost and time, with the basis for the estimate.

Hand the comparison to the decision maker through `templates/design-options.md`, and record the choice in the decision log. Never present a single option as if it were the only one.

## Step 7: Carry security and compliance into the requirements

Architecture is where security requirements usually appear late. Ask early: what data is personal, financial, or confidential; where it is stored and for how long; who may see it; and what regulation applies. Turn each answer into a non-functional requirement with a measure, and route it to the regulatory-compliance skill when an obligation is involved.

## Stop rules

Stop when the context diagram is agreed, every interface has an owner and a failure behaviour, the requirements architecture has no orphan requirements, and design options are compared on the requirements they satisfy. Stop earlier on small changes: one system and one interface need a context diagram and an interface entry, not a full architecture.

## Common failures

- Boxes named after products instead of responsibilities, so the diagram goes stale at the next procurement.
- Flows labelled with protocols ("REST", "SFTP") rather than the business information they carry.
- Failure behaviour left for the developers to decide.
- A single design option presented as a recommendation.
- Security requirements written after the design is fixed.

## Worked example

Supplier invoice approval, release 1.

Context diagram: the approval workflow sits in the middle. External to it are the matching engine (sends matched invoices), budget holders (receive tasks, send decisions), the ERP ledger (receives approval status), the identity service (authenticates approvers), and the reporting store (receives approval events).

Interfaces found:

| ID | Interface | Owner | Volume | Failure behaviour | Status |
| --- | --- | --- | --- | --- | --- |
| IF-001 | Post approval status to ERP | ERP team (Tom Reyes) | 5,000 a month, month-end peak of 3 times normal | Keep the decision, retry every 15 minutes, alert AP after 3 failures | New |
| IF-002 | Single sign-on for approvers | Identity team | 300 users | Approvers cannot sign in; fall back to AP-assisted approval | Existing, changed |

Pattern choice: IF-001 uses request and response because the approver sees the result at once; the reporting feed uses events because a short delay is acceptable and three consumers need it.

Design options compared: option A, the ERP's own workflow module, adds no new interface; option B, a standalone tool, adds IF-003 (invoice data out of the ERP) and a second system to support. Both satisfy the functional requirements; A carries less interface risk. The comparison went to the sponsor and was recorded as DEC-007.

Security requirement raised early: approval records are financial data retained for seven years (OR-001), and the workflow must block self-approval (CR-002).

## Sources

- `babok-3.0-2015`: tasks 6.1, 7.4, and 7.5 and techniques 10.13, 10.24, 10.41, and 10.42 set the method.
- `archimate-3.1`: layer and viewpoint conventions for placing requirements in the enterprise architecture.
- `uml-2.5`: notation for sequence and component views.
- `opengroup-togaf-presentation-2003`: the architecture development context the analyst works within.
