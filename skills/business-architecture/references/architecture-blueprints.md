# Architecture Blueprints Reference

## The blueprint set

| Blueprint | Answers | Built from |
| --- | --- | --- |
| Capability map | What can this business do | Nouns describing ability, levelled, MECE |
| Value stream map | How does value reach the customer | Stages from trigger to value received |
| Organisational map | How do the units interact | Units and the flows between them, not reporting lines |
| Information map | What are the key business concepts and how do they relate | Business terms, not database tables |
| Enterprise core diagram | What is the shared foundation everything depends on | Core processes, shared data, key systems |
| Business motivation model | Why are we doing any of this | Drivers, goals, objectives, means, ends |
| Roadmap | How do we get from here to there | Current, transition, and target states over time |
| Customer journey map | What does the customer experience across the enterprise | Stages, touchpoints, emotions, gaps |
| Portfolio view | Which initiatives touch which capabilities | Initiative to capability heat mapping |

## Capability map rules

- A capability is what the business does: "Manage customer credit", not "Credit department" and not "Run the credit engine".
- Stable over time. If a reorganisation or a system change would rename it, it is not a capability.
- Levelled: level 1 gives ten to fifteen at most, level 2 breaks each into three to seven, level 3 only where the detail earns its place.
- MECE at every level. Overlap between siblings is the most common defect and the one that ruins heat mapping.
- Rate each on two axes: current performance and strategic importance. The high importance and low performance quadrant is where investment belongs, and it is the whole point of building the map.

## Value streams

- Start at the trigger the customer causes, end at the value the customer receives. Internal efficiency streams are legitimate but must say whose value.
- Five to nine stages. More than that and you are modelling a process, which belongs to `process-modelling`.
- Cross-map stages to capabilities. A capability appearing in many streams is a shared asset and a single point of failure.
- Note the stage-level pain: time, cost, quality, and where value is lost.

## Transition states

A roadmap that jumps from current to target in one leap is a wish. Break it into transition states, and test each with one question: if funding stopped here, would the organisation be in a coherent, operable position? If the answer is no, the transition state is wrong.

For each state record: what capabilities exist, what has been retired, what is running in parallel, and the dependency that must be satisfied to reach the next one.

## Reference frameworks

Use these as templates to save time, and cite what you took. Do not adopt a framework as a deliverable.

| Framework | Best used for |
| --- | --- |
| TOGAF ADM Phase B | The method for developing a business architecture and moving through to the other domains |
| Zachman | A classification grid for checking whether a viewpoint is missing |
| ArchiMate | A notation for expressing business, application, and technology layers together |
| APQC Process Classification Framework | A starting taxonomy for processes and capabilities, cross-industry |
| SCOR | Supply chain process reference model with metrics |
| Value Reference Model | Value chain and value stream reference structures |
| Business Motivation Model | Vocabulary for drivers, goals, objectives, means, and ends |

Choosing a framework is a decision with tradeoffs; route it through `decision-analysis` if it is contested.

## Handoffs

- Diagram rendering: `visual-modelling`.
- Process detail below a value stream stage: `process-modelling`.
- Solution and integration design: `architecture`.
- Capability gap and current state analysis: `business-analysis`.
- Investment cases for roadmap items: `finance`, then `executive-review`.
