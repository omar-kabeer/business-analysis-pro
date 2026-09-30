# Visual Modelling Playbook

How to choose the right diagram for a question, draw it correctly in its notation, and make it readable enough that stakeholders can validate it. This playbook supports the BABOK modelling techniques, including Scope Modelling (10.41), Process Modelling (10.35), Data Modelling (10.15), Sequence Diagrams (10.42), State Modelling (10.44), Use Cases and Scenarios (10.47), Root Cause Analysis (10.40), and Mind Mapping (10.29), within Specify and Model Requirements (7.1). Process notation follows BPMN 2.0 (`bpmn-2.0`); structural and behavioural notation follows UML 2.5 (`uml-2.5`). Both have conformance notes in `sources/conformance/`.

## When this playbook applies

Use it whenever something is better drawn than described: a boundary, a flow, a structure, an interaction, a lifecycle, or a set of causes. The owning skill still decides the content (process-modelling owns the process, data-modelling the data model); this playbook governs how the model is drawn and checked.

## Step 1: Start from the question

Write the question the diagram must answer, and who will read it. Then choose the diagram (the reference `diagram-selection.md` has the full list):

| Question | Diagram |
| --- | --- |
| What is in and out of scope? | Context diagram |
| Who does what, in what order, and where are the handoffs? | BPMN process with lanes |
| What are the things of interest and how do they relate? | Class or entity relationship diagram |
| In what order do participants exchange messages? | UML sequence diagram |
| What states does one thing pass through? | UML state machine, or a state table |
| What does each actor want from the system? | Use case diagram |
| Why does a problem happen? | Fishbone diagram |

One diagram, one question. A diagram that tries to answer three questions answers none clearly.

## Step 2: Choose the level of detail

Match the level to the reader: an executive needs the few boxes that carry the decision; a developer needs every branch. State the level on the diagram. Mixing levels (a strategic stage next to a keystroke) is the most common reason a model confuses its readers.

## Step 3: Draw it correctly

Use the notation's rules, not just its shapes. The conformance notes list the checks:

- BPMN (`sources/conformance/bpmn-2.0.md`): sequence flows connect flow nodes at both ends (BPMN-PM-02) and stay within one pool (PM-03); message flows connect different pools (PM-04); start events have no incoming sequence flow and end events no outgoing one (PM-06); gateways are single-direction (PM-08).
- UML class diagrams (`sources/conformance/uml-2.5.md`): multiplicities have valid bounds (UML-CM-01), generalisation hierarchies are acyclic (CM-02), and a composite part belongs to at most one whole (CM-04).
- UML sequence diagrams: every message is sent before it is received (UML-SD-01), replies pair with a preceding synchronous call (SD-02), and each activation starts and ends on one lifeline (SD-03).

The reference `notation-rules.md` covers the house conventions on top of these.

## Step 4: Make it readable

- Label every element with business words: tasks as verb and object ("Approve invoice"), entities as nouns, flows with what moves.
- Lay out left to right or top to bottom, with as few crossing lines as possible.
- Keep to about seven to nine elements per view; decompose rather than crowd.
- Add a title, a legend for any non-standard symbol, a version, and the date.
- Keep the editable source (BPMN XML, Mermaid, or the tool file) alongside any image.

## Step 5: Validate with the people who know

Walk the diagram with the people who do the work or own the data. Ask them to trace a real case through it. Every place they hesitate or correct you is a finding. A diagram nobody outside the analyst has checked is a hypothesis.

## Step 6: Keep models consistent

When several models describe the same thing (a process model, a use case, and a data model of approvals), check they agree: the same names, the same actors, the same states. Inconsistency between models is usually a real ambiguity in the requirements, and worth raising.

## Stop rules

A model is ready when it answers one stated question for a named reader, follows its notation's rules, is labelled and laid out so the reader can follow it unaided, has been validated with the people who know the subject, and agrees with related models.

## Common failures

- A diagram chosen from habit rather than from the question.
- Notation shapes used without the notation's rules.
- Labels in system or project jargon.
- Crowded views that should have been decomposed.
- Images with no editable source.

## Worked example

Supplier invoice approval: the team disagrees about what happens when posting to the ERP fails after an approval.

Question: in what order do the approver, the workflow, and the ERP exchange messages, and what happens on a failure? Readers: the ERP team and the testers.

Diagram: a UML sequence diagram with three lifelines (approver, approval workflow, ERP).

1. The approver sends "Approve invoice" to the workflow (synchronous).
2. The workflow records the decision and replies "Decision saved".
3. The workflow sends "Post approval status" to the ERP (asynchronous).
4. On failure, an alternative fragment shows the workflow retrying every 15 minutes, and after three failures sending "Alert AP".

Checks: every message is sent before it is received (UML-SD-01); the reply in step 2 pairs with the call in step 1 (SD-02); each activation bar starts and ends on its own lifeline (SD-03).

Validation: walking it with the ERP team revealed that the ERP sends an acknowledgement the diagram lacked. It was added, and the testers derived two new cases from the failure fragment.

## Sources

- `babok-3.0-2015`: the modelling techniques named above, within Specify and Model Requirements (7.1).
- `bpmn-2.0`: process notation and its conformance checks.
- `uml-2.5`: class, sequence, state, and use case notation and their conformance checks.
