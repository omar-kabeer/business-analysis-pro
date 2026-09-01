# Interface Analysis and Behavioural Models

## Interface analysis

BABOK technique 10.24. An interface is any point where the solution exchanges information with something outside itself: another system, a user, a device, a file drop, a report. Interfaces are where integration defects, cost overruns, and late scope discoveries concentrate, because each one is a contract with a party who has their own priorities.

For every interface, capture these. Anything missing is a question you will be asked later under worse conditions.

| Attribute | Why it matters |
| --- | --- |
| Parties, and who owns the contract | An interface with no named owner on the other side will not be built on time |
| Trigger and direction | Push or pull, event or schedule, who initiates |
| Data exchanged, with meaning | Field names are not meaning. Route the definitions to `data-modelling` |
| Volume and timing | Peak and average. An interface designed for the average fails at month end |
| Latency and freshness expectation | How stale may the receiving side's view be |
| Failure behaviour | What happens when the other side is down, slow, or returns something unexpected. The most commonly omitted attribute and the most expensive |
| Security and authorisation | Who may call it, how they are authenticated, what data classification crosses |
| Error and exception handling | Who is told, how, and what the business does meanwhile |
| Change and versioning | How the contract evolves without breaking the consumer |

Produce an interface list first, covering every boundary crossing, then specify only those where the risk or novelty justifies the depth. Listing all and specifying the risky ones beats specifying half and missing one.

## Choosing an integration style

| Technology | Paradigm | Schema | Choose when | Cost |
| --- | --- | --- | --- | --- |
| REST over HTTP | Synchronous request and response | Optional, usually OpenAPI | Public or partner APIs, resource-shaped access, broad client compatibility | Caller waits, and is coupled to the callee's availability |
| GraphQL | Synchronous, client-shaped queries | Strict | Front ends needing varied slices of the same data without many round trips | Server-side complexity, caching and rate limiting are harder |
| gRPC | Synchronous or streaming | Strict, Protocol Buffers | Internal service-to-service calls where latency matters | Poor browser and partner reach, tooling assumptions |
| Event streaming | Asynchronous publish and subscribe | Strict, via a schema registry | Decoupling producers from consumers, replay, several consumers of one event | Eventual consistency becomes a business rule you must specify |
| Message queue | Asynchronous point to point | Varies | Work handoff with guaranteed delivery and retry | Ordering and duplicate handling must be designed |
| File transfer or batch | Scheduled bulk | Usually a fixed layout | High volume, tolerant of latency, or the counterparty offers nothing else | Reconciliation and failure recovery are manual unless designed |

The BA-relevant question is rarely which technology. It is whether the business process can tolerate the coupling that a synchronous call creates, or the delay that an asynchronous one creates. Ask that first, in business terms, and the technology narrows itself.

## Distributed behaviour a BA must specify

When work crosses a boundary asynchronously, three things stop being technical details and become business rules that only the business can decide.

**Compensation.** A long-running process spanning several systems cannot roll back atomically. If step four fails after steps one to three succeeded, someone must decide what undoing looks like in business terms: reverse the payment, cancel the reservation, notify the customer, or leave it and flag for manual handling. That decision is analysis work, not engineering work, and the compensating action for each step should be specified alongside the step.

**Duplicate handling.** Asynchronous delivery is at-least-once in practice, so a message can arrive twice. The system must be able to receive the same instruction twice and act once. The business rule is what identifies two messages as the same event, and that identifier is a requirement.

**Consistency window.** "The data will be consistent eventually" is not acceptable to a business without a number. State the maximum acceptable window, what the user sees during it, and what happens if it is exceeded. This becomes a non-functional requirement.

The engineering patterns that implement these (orchestrated or choreographed sagas, transactional outbox with change data capture, idempotency keys) belong to engineering. Naming the business decision each one implements belongs here.

## Sequence diagrams

BABOK technique 10.42. Use one when the order of interactions carries the risk: a multi-party process, an integration handshake, a failure and retry path, or a scenario where two stakeholders describe the same flow differently.

Show the participants across the top, time down the page, and each message as an arrow with what it carries. Two disciplines separate a useful sequence diagram from a decorative one. Model the failure path, not only the success path, because the success path is the one everyone already agrees on. And keep one diagram to one scenario; a diagram with six alternative branches is unreadable and should be several diagrams.

Do not use a sequence diagram to show a business process end to end. That is a process model and belongs to `process-modelling`. Use it for interactions across a system boundary.

## State models and state tables

BABOK technique 10.44. Use one when an entity has a lifecycle, when the same action is permitted in one state and forbidden in another, or when the words "status" or "stage" appear in the requirements.

The state model shows states as nodes and permitted transitions as edges, each labelled with the triggering event and any guard condition. The state table is the same content as a grid, states down and events across, with each cell holding the resulting state or the word "refused". The table is the more useful artefact for analysis, because the empty and refused cells are the questions nobody has answered.

Check four things before you call it done. Every state is reachable from the initial state. Every state can reach a terminal state, unless it is genuinely permanent. Every event is defined in every state, including as an explicit refusal. And every transition names who or what triggers it.

Hand the resulting rules to `requirements`, and the diagram rendering to `visual-modelling`. The illegal transitions become negative test cases for `acceptance-testing`, and saying so in the handoff saves them deriving the same list.
