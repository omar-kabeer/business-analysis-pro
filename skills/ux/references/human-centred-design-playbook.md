# Human-Centred Design Playbook

How to bring the people who will use a solution into its definition, so requirements reflect real contexts and tasks, and designs are evaluated with users before they are built. This playbook applies BABOK Stakeholder List, Map, or Personas (10.43), Observation (10.31), Prototyping (10.36), and Acceptance and Evaluation Criteria (10.1), within Elicitation (4.2) and Validate Requirements (7.3). The process follows ISO 9241-210:2010 (`iso-9241-210-2010`), cited as the 2010 edition held (a 2019 revision supersedes it); accessibility follows WCAG 2.1 (`wcag-2.1`). Both have conformance notes in `sources/conformance/`.

## When this playbook applies

Use it when a solution has users whose tasks, contexts, or needs shape what should be built: interfaces, services, forms, and documents. Use the prototyping skill for building and running prototypes, and the elicitation skill for interviews in general.

## Step 1: Plan human-centred design into the work

ISO 9241-210 expects human-centred design to be planned and integrated into the project, with time and resources for its activities and for iteration (check ISO9241-DP-06). Put user research, design, and evaluation into the plan, with dates and the people who will take part. Design that waits for spare time happens after the decisions it should have informed.

## Step 2: Understand the context of use

Describe the users and other stakeholder groups, their characteristics, their goals and tasks, and the environments they work in: technical, physical, social, and cultural (ISO9241-DP-02). Gather it by observation and interviews with people who do the work, not by asking managers what users need. Record it as personas (`templates/persona.md`), journey maps (`templates/journey-map.md`), and empathy maps (`templates/empathy-map.md`), each with its evidence.

## Step 3: Specify user requirements

Turn the context into explicit user requirements: needs derived from the context, requirements from ergonomics standards and accessibility guidelines, usability requirements with measurable criteria, and organisational requirements (ISO9241-DP-03). A usability requirement names the user, the task, the measure, and the target: "A first-time approver approves a clean invoice within 3 minutes unaided."

## Step 4: Produce design solutions

Design the interaction, the content, and the flow to meet those requirements, starting with low-fidelity concepts. Make each design concrete enough to evaluate, and link each design decision to the requirement it serves.

## Step 5: Evaluate with users, early and iteratively

Evaluate design concepts with users from the start, not only at the end (ISO9241-DP-04), by having users carry out real tasks rather than watching a demonstration. Revise requirements and designs as evidence arrives; the process is iterative by design (DP-05). Every evaluation records what users did, separately from what it means, and what changed as a result.

## Step 6: Design for accessibility

Set the target conformance level (normally WCAG 2.1 AA) and design for the success criteria that can be judged at design time: text and non-text contrast, information and relationships, meaningful sequence, visible labels, and keyboard operability (check WCAG21-DS-01). Avoid design choices that would prevent the finished product from conforming (DS-02), and record the target level and the criteria designed for (DS-03). Conformance itself is tested on the built pages; a design can only be ready for it.

## Stop rules

The work is sound when human-centred design is in the plan, the context of use is described from evidence, user requirements include measurable usability and accessibility criteria, designs have been evaluated with users doing real tasks, the design has been revised on that evidence, and the accessibility target is recorded.

## Common failures

- User needs taken from managers instead of users.
- Personas with no research behind them.
- Usability requirements such as "intuitive" with no measure.
- Evaluation only at the end, when nothing can change.
- Accessibility left to testing.

## Worked example

Supplier invoice approval: the approver's screen.

Context of use (observation of four approvers, interviews with six): approvers are budget holders who approve about 30 invoices a week, often on a phone during site visits, in bright light, between other tasks. Their goal is to approve correctly without investigating.

User requirements:
- UR-001: a first-time approver approves a clean invoice within 3 minutes, unaided, on a phone.
- UR-002: the approver sees why an invoice failed matching without opening another system.
- UR-003: the screen meets WCAG 2.1 AA, including contrast for use in bright light.

Design and evaluation: a clickable prototype was tested with ten approvers doing three real tasks. Six of ten missed the match status badge, which sat below the fold on phones. The badge moved to the top and gained a text label, because colour alone failed the use-of-colour criterion. In the second round, nine of ten completed the task within 3 minutes.

Accessibility record: target WCAG 2.1 AA; designed for contrast, labels, reading order, and keyboard use; conformance to be tested on the built screens.

## Sources

- `babok-3.0-2015`: techniques 10.1, 10.31, 10.36, and 10.43, within 4.2 and 7.3.
- `iso-9241-210-2010`: the human-centred design activities and their checks, first edition 2010.
- `wcag-2.1`: accessibility success criteria and the design-time checks in its conformance note.
