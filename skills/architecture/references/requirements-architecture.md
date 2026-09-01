# Requirements Architecture and Views

## What BABOK 7.4 actually asks for

A requirements architecture is not a list of requirements and not a system diagram. It is the structure of the requirement set: how requirements relate to each other, how they are organised so stakeholders can understand them, and whether the set is complete and internally consistent when seen as a whole.

Three things it must show. **Relationships** between requirements, including which ones derive from, depend on, satisfy, or conflict with others. **Viewpoints**, meaning the different organising cuts through the same set that different stakeholders need. And **defects visible only at set level**: gaps where a requirement implies another that does not exist, conflicts where two requirements cannot both hold, and redundancy where the same requirement appears twice with different wording.

An individual requirement can be perfectly written and the set still be broken. That is the value this adds, and it is why the work sits with analysis rather than with engineering.

## The description metamodel

ISO/IEC/IEEE 42010 separates the architecture from the description of it, and gives the description a structure worth borrowing whether or not you are formally conforming.

| Element | What it is | Practical test |
| --- | --- | --- |
| Stakeholder | Someone with an interest in the system | Named person or role, not "the business" |
| Concern | A systemic property they care about | Stated as a property, not as a preferred solution. "Recovery within an hour", not "we need a hot standby" |
| Viewpoint | The conventions for constructing a view: what it shows, in what notation, answering which concerns | Stated before the view is drawn |
| View | The concrete representation conforming to the viewpoint | Traces to at least one concern |
| Decision | An architecture choice made | Recorded where it is expensive to reverse |
| Rationale | Why, and what was rejected | The rejected options are the part usually lost |

The discipline this imposes is the useful part: every view traces to a concern, and every concern belongs to a named stakeholder. A view answering no stated concern is decoration, and it will not be maintained.

## Choosing viewpoints

IEEE 1016 names the design viewpoints worth knowing, and they map cleanly onto what a BA needs to produce or ask for.

| Viewpoint | Shows | The BA usually needs it when |
| --- | --- | --- |
| Context | System boundary, external actors and systems, what crosses the boundary | Always. This is the first artefact |
| Composition | The major subsystems or services and what each is responsible for | Scope is contested, or responsibility for a capability is unclear |
| Logical | Static structure: entities, interfaces, associations | Data meaning is disputed. Route the modelling itself to `data-modelling` |
| Interface | Contracts, parameters, error modes | Any integration. See `references/interfaces-and-behaviour.md` |
| Interaction | Message sequences, state transitions, concurrency | Order of events matters, or an entity has a lifecycle |
| Structure | Components, ports, connectors | Rarely. This is usually engineering's |

Do not produce all of them. Produce the ones that answer a concern someone has raised.

## Escalating detail with C4

The C4 hierarchy is the most usable convention for stepping from business context to technical structure without losing the audience, because each level has a defined audience and stopping point.

**Level 1, system context.** The system of interest, the people who use it, the systems it talks to. Everyone can read this, including the sponsor. If you produce only one diagram, produce this.

**Level 2, container.** The separately deployable and runnable things: applications, services, databases, file stores, queues. This is usually the deepest a BA needs to go, and it is where most integration and non-functional discussion actually happens.

**Level 3, component.** Inside one container. Occasionally useful when a single container is the source of the risk.

**Level 4, code.** Engineering's. A BA producing this has crossed the boundary.

The common error is starting at level 2 because level 1 feels too simple. Level 1 is where scope disagreements surface, and skipping it defers them to a worse moment.

## Documenting the whole thing

Where a full architecture document is required, the arc42 section set is a reliable skeleton: introduction and goals, constraints, context and scope, solution strategy, building block view, runtime view, deployment view, cross-cutting concepts, architecture decisions, quality requirements, risks and technical debt, glossary.

Two of those sections are the ones that decay first and matter most. **Architecture decisions** should be recorded as they are made, one record per decision, with the alternatives and the rationale; reconstructing them a year later is not possible. **Risks and technical debt** should distinguish debt taken deliberately as a tracked tradeoff from debt accumulated through absent standards, because the two need different responses.

## Boundaries

This skill produces the requirements architecture and the solution-level views. It does not produce the enterprise capability map, value stream, or target operating model, which belong to `business-architecture`. It does not write the requirements themselves, which belong to `requirements`. It does not render the diagrams, which is `visual-modelling`, though it specifies what each diagram must show and in what notation.
