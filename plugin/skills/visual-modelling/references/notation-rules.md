# Notation Rules Reference

Rules that make a diagram correct rather than merely pretty. Violating these is what gets a model rejected in review.

## BPMN 2.0

- Every process has exactly one start event and at least one end event, per pool.
- Gateways split and converge. A diverging exclusive gateway is matched by a converging one; do not merge with a plain sequence flow join.
- Exclusive gateway conditions are mutually exclusive and collectively exhaustive. Label every outgoing flow.
- Tasks are verb plus noun. Use the task type marker (user, service, manual, script) where it matters.
- A pool is a participant; a lane is a role inside it. Messages cross pools, sequence flows never do.
- Nothing dangles: every element has an incoming and an outgoing connection except start and end events.

## Data flow diagrams

- Four element types only: external entity, process, data store, data flow.
- Every process has at least one input and one output. No miracles (output with no input) and no black holes (input with no output).
- Data stores do not talk to each other or to external entities directly; a process sits between them.
- Flows are labelled with the data, not with the action.
- Level 0 (context) has one process. Balance inputs and outputs when decomposing.

## Entity relationship diagrams

- Every relationship carries cardinality at both ends (one to one, one to many, many to many) and optionality.
- Resolve many to many into an associative entity before the model goes to build.
- Every entity has an identifier. Attributes belong to exactly one entity.
- Name entities in the singular ("Customer", not "Customers").

## State diagrams and state tables

- Exactly one initial state, at least one final state unless the object is perpetual.
- Every transition is labelled with its trigger event and any guard condition.
- Every state is reachable and can be left, unless it is final.
- The state table is the same model as a grid: states as rows, events as columns, target state in the cell, blank where the event is invalid.

## Sequence diagrams

- Lifelines are participants, not steps. Time runs downward.
- Distinguish synchronous calls, asynchronous messages, and returns.
- Show activation bars where duration matters, and use alt, opt, and loop fragments rather than drawing every branch.

## Use case diagrams

- Actors are roles, not people or job titles.
- Use cases are goals the actor achieves, phrased verb plus noun.
- Use include for mandatory shared behaviour and extend for optional behaviour, and use both sparingly.
- The system boundary box is always drawn.

## Class models

- Show class name, attributes, and operations only where each adds information.
- Distinguish association, aggregation, and composition deliberately; if you cannot justify the diamond, use a plain association.
- Multiplicity on both ends.

## Mermaid quick reference

- `flowchart LR` for process, context, DFD, decomposition, org chart.
- `erDiagram` for ERD, `stateDiagram-v2` for states, `sequenceDiagram` for sequences, `mindmap` for mind maps, `journey` for customer journeys, `timeline` and `gantt` for roadmaps.
- Quote any label containing punctuation. Keep node ids short and alphanumeric.
- Subgraphs give you swimlanes in a flowchart when full BPMN is not needed.
