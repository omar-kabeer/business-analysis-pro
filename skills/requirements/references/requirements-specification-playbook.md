# Requirements Specification Playbook

How to turn confirmed elicitation results into a specified, verified, validated, and traceable requirement set, following BABOK Requirements Analysis and Design Definition (7.1 to 7.6) and the traceability tasks of Requirements Life Cycle Management (5.1, 5.2). Use it with `requirement-quality.md`, which holds the per-statement quality rules. Cite BABOK by section and paraphrase; do not copy guide text.

## Classify first

Every item belongs to one class, and the class decides how it is written and tested.

| Class | Describes | Written as | Tested by |
| --- | --- | --- | --- |
| Business requirement | Why the change exists | Goal, objective, or outcome with a measure | Benefit measurement after launch |
| Stakeholder requirement | What a stakeholder group needs | Need of a named group | Validation with that group |
| Functional requirement | Behaviour and information the solution manages | "The system shall ..." or a user story | Functional test |
| Non-functional requirement | Qualities and conditions | Quantified quality with a measure and condition | Measured test |
| Transition requirement | Temporary capability to move from current to future state | Migration, training, parallel run, cutover need | Transition acceptance |
| Constraint | Limit on the solution space | Fixed rule the solution must respect | Inspection |
| Assumption | Condition taken as true | Assumption with impact if wrong and owner | Confirmation |

A requirement that names a technology, screen, or vendor is a design or a constraint. Record it as a constraint only when a stakeholder with authority imposes it; otherwise restate the underlying need.

## 7.1 Specify and Model Requirements

1. Pick a level of abstraction for the audience: business requirements for sponsors, functional detail for builders.
2. Model where a model says more than prose. Choose by what needs to be understood:

| To understand | Model with |
| --- | --- |
| People and roles | Organisational model, roles and permissions matrix, stakeholder map |
| Why something is needed | Business model canvas, root cause analysis, decision model |
| Activity flow | Process model, use cases, user stories |
| Capability | Business capability map, feature list |
| Data and information | Data dictionary, data model, glossary, state model |
| Boundary | Context diagram, scope model |

3. Write each textual requirement as one testable statement. Pattern for functional requirements: actor, action, object, condition. Pattern for non-functional requirements: quality, measure, target, condition. "Search results display within 2 seconds at the 95th percentile for up to 500 concurrent users" is testable. "Search is fast" is not.
4. Attach attributes: ID, class, source, priority, status, owner, and stability.

## 7.2 Verify Requirements

Verification checks that requirements are well built, before anyone checks that they are right. Check each statement and model against the quality characteristics: atomic, complete, consistent, concise, feasible, unambiguous, testable, prioritised, and understandable. Also check models for notation validity and completeness.

Useful probes:

- Ambiguity: words such as fast, easy, user-friendly, flexible, robust, and appropriate. Replace them with a measure.
- Compound requirements: "and" or "or" joining two behaviours. Split them.
- Hidden design: named screens, buttons, or technologies. Restate the need.
- Missing negative paths: what happens on invalid input, timeout, or permission failure.

The requirements-verifier agent performs an independent verification pass. Run it before sign-off.

## 7.3 Validate Requirements

Validation checks that requirements deliver value. For each requirement or group:

1. Confirm it traces to a business requirement or objective. A requirement that serves no objective is scope creep or a missing objective.
2. State measurable evaluation criteria: how, after delivery, we will know the requirement delivered its value.
3. Surface the assumptions it depends on, and check them with the people who can confirm them.
4. Check it falls inside the solution scope.

## 7.4 Define Requirements Architecture

The architecture is the structure that makes the set complete and coherent: which viewpoints are used (for example process, data, rules, user experience, quality), which views represent them, and how they relate. Check that every business requirement is covered by stakeholder and solution requirements, that views do not contradict each other, and that each model's elements are consistent with the glossary.

## 5.1 and 5.2 Trace and Maintain

Record relationships, not just links:

| Relationship | Meaning |
| --- | --- |
| Derive | A lower-level requirement is derived from a higher one |
| Depends (necessity) | One requirement only makes sense if another is delivered |
| Depends (effort) | One is easier to deliver if another is delivered first |
| Satisfy | A design or solution component satisfies the requirement |
| Validate | A test case validates the requirement |

Minimum chain: business requirement, to stakeholder requirement, to solution requirement, to design, to test. Trace to the level of detail the governance approach requires, not further. Maintain the set as it changes: keep status, attributes, and relationships current, and reuse stable requirements rather than rewriting them. The traceability-auditor agent checks the chain for orphans and gaps.

## 7.5 and 7.6 Design Options and Potential Value

When requirements are stable enough, define design options that could satisfy them (buy, build, configure, change a process), and analyse each option's potential value against the objectives. The architecture skill owns the options; this skill confirms each option satisfies the requirement set and names which requirements it does not.

## Acceptance criteria

Every functional requirement and user story has acceptance criteria. Use Given, When, Then for behaviour, and a stated measure for qualities. Cover the main path, the key alternate paths, and at least one failure path. Criteria must be testable by someone who did not write them.

## Common failure modes

- Requirements written before the business need is confirmed.
- Non-functional requirements stated as aspirations.
- Business rules buried inside functional requirements instead of a rules catalogue.
- A traceability matrix that links to documents rather than individual requirements.
- Priority set to "must" for everything.

## Quality gates

Grade each output with the rubric named in its quality profile (`evaluation/quality-profiles.json`): `brd`, `frd`, `srs`, `prd`, `nfr-specification`, `use-case-specification`, `user-story-epic`, `business-rules-catalogue`, `requirements-architecture`, and `requirements-traceability-matrix`. The profile also names the reviewer agents that audit each type.
