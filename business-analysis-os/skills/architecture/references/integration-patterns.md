# Integration and Architecture Patterns (BA-facing)

A plain-language reference so a business analyst can reason about technical options and their tradeoffs, and translate them into constraints and non-functional requirements. This is for framing options, not for producing production designs.

## Context diagram

Put the system in the middle, external actors and systems around it, and label the data that flows in and out. It answers: who and what does this system talk to, and what data crosses the boundary. Draw this first.

## API styles

- REST: resources and standard HTTP verbs. Simple, widely understood, good default for request and response.
- GraphQL: the client asks for exactly the data it needs in one call. Useful when clients need flexible, combined data; adds server complexity.
- gRPC or RPC: efficient service-to-service calls, often internal.

## Integration patterns

- Synchronous request and response: caller waits for a reply. Simple, but couples availability (if the callee is down, the caller is affected).
- Asynchronous messaging (queues): the sender drops a message and moves on; the receiver processes when ready. Decouples systems and smooths load.
- Event-driven: systems publish events that others subscribe to. Loose coupling and scalability; harder to trace end to end.
- Batch: move data in bulk on a schedule. Simple for large volumes; not real time.

## Architecture styles

- Monolith: one deployable unit. Simple to start and operate; harder to scale teams and parts independently.
- Microservices: many small services. Independent scaling and deployment; more operational complexity and network failure modes.
Frame the tradeoff (team size, scaling needs, operational maturity) rather than prescribing.

## Cloud models

- IaaS: rent infrastructure (compute, storage). Most control, most to manage.
- PaaS: build on a managed platform. Less to manage, some constraints.
- SaaS: use a finished application. Least to manage, least control.

## Data movement and CRUD

Trace where data is created, read, updated, and deleted across systems, and who owns the record of truth. Duplication and unclear ownership are common sources of defects and disputes.

## Security and compliance implications

- Authentication (who you are) and authorisation (what you may do).
- Data protection in transit and at rest; personal data handling.
- Relevant regimes: GDPR (privacy), PCI DSS (card data), ISO 27001 (security management), ISO 20022 (payments messaging), PSD2 and Open Banking (payments).
Surface these as constraints and non-functional requirements for the requirements skill.
