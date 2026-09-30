# Process Analysis Playbook

How to model a business process so it can be understood, measured, and improved, and how to turn the analysis into requirements. This playbook applies BABOK Process Modelling (10.35), Process Analysis (10.34), Root Cause Analysis (10.40), and Functional Decomposition (10.22), within Analyze Current State (6.1) and Define Future State (6.2). The notation rules follow BPMN 2.0 (`bpmn-2.0`); decisions inside a process follow DMN (`dmn-1.3`).

## When this playbook applies

Use it when work passes between people or systems and something about it is slow, costly, error-prone, or about to change. Use it before writing requirements for a workflow, so the requirements describe a process that has been understood rather than one that has been assumed. Do not model a process nobody intends to change or measure.

## Step 1: Frame the process with SIPOC

Before drawing any flow, fill in a SIPOC: suppliers, inputs, the process in five to seven steps, outputs, and customers. The SIPOC fixes the boundary: where the process starts, where it ends, and what is outside it. Agree it with the process owner. Most modelling disputes later are boundary disputes that a SIPOC would have settled.

## Step 2: Choose the notation and the level

Pick the lightest notation that answers the question.

| Question | Notation | Level |
| --- | --- | --- |
| Where are the handoffs and delays? | BPMN with swimlanes by role | Tasks |
| What does the process decompose into? | Functional decomposition | Subprocesses |
| How does value flow end to end? | Value stream map | Stages with times |
| Which rule decides the path? | DMN decision table | Rule |

Use a process classification framework such as APQC's (`apqc-pcf`) to name and place the process in the enterprise's process architecture, so it can be compared with others.

State the notation and level in the model. Mixing levels in one diagram (a strategic stage next to a keystroke) is the most common readability failure.

## Step 3: Model the current state from evidence

Model what happens, not what the procedure says. Use Observation (10.31) and system logs first, interviews second, documents last. For each step record the actor, the action, the decision and all its branches, and the handoff.

Apply BPMN's own rules, listed as checks in `sources/conformance/bpmn-2.0.md` (for example, sequence flows stay within one pool and events carry flows in the right direction), together with these house modelling rules from `evaluation/process-model-rubric.md`:

- a clear start event and a named end event for every outcome, including failures;
- every gateway has exclusive, complete branches with labelled conditions;
- every path reaches an end event, with no orphan or dead-end steps;
- every task is labelled verb and object ("Review invoice");
- swimlanes show who, and message flows show exchanges between participants.

Validate the model with people who do the work and were not the source of it.

## Step 4: Analyse the process

Process Analysis (10.34) looks for where the process loses time, money, or quality. Measure before judging: cycle time, wait time, volume, error or rework rate, and cost per case. Then classify each problem:

| Type | Sign | Typical cause |
| --- | --- | --- |
| Delay | Work waits between steps | No trigger, reminder, or owner |
| Rework | Work returns to an earlier step | Unclear rules, poor inputs |
| Manual effort | People move or rekey data | Systems not connected |
| Bottleneck | One step limits the whole | Capacity or authority concentrated |
| Variation | Same case handled differently | Rule not defined or not followed |

For each significant problem, run Root Cause Analysis (10.40), five whys or a fishbone, until the cause is something the change can act on.

## Step 5: Design the future state

Change the process to remove causes, not symptoms. Record, step by step, what changes and why, and the benefit expected in the same measures used for the current state. Move rules that decide paths into a decision table (DMN) so they can change without redrawing the process. Keep the future state realistic: every step still needs an actor and every path an end.

## Step 6: Turn the model into requirements

Each future-state change becomes one or more requirements: a routing rule becomes a business rule and a functional requirement, a new reminder becomes a functional requirement with a timing measure, a removed rekeying step becomes an interface requirement. Trace each requirement back to the step that needs it, so a later change to the process shows which requirements it affects.

## Stop rules

Stop when the boundary is agreed, the current state is validated with the people who do the work, the main losses are measured with root causes named, and each future-state change has a requirement. For a small change, a SIPOC, one flow, and a list of changes are enough.

## Common failures

- Modelling the procedure manual instead of the practice.
- Gateways with missing branches, so exceptions vanish from the model.
- Symptoms treated as causes ("approvers are slow").
- A future state that adds steps without removing any.
- Diagrams without a stated level, mixing strategy with keystrokes.

## Worked example

Supplier invoice approval, process PM-002.

SIPOC: suppliers are the matching engine and budget holders; the input is a matched invoice; the steps are queue, notify, review, decide, record, and post; the output is an approved or rejected invoice; the customers are AP, Treasury, and the supplier.

Current state, measured from the ERP log (January to April 2026): median 9 days waiting at the budget holder's review; 5,000 approvals a month rekeyed by AP clerks; 22 percent of invoices fail matching and are chased by phone.

Root cause of the wait, by five whys: approvers miss emails, because nothing reminds or escalates, because approval sits outside any system with rules.

Future state: the ERP routes each invoice by cost centre and amount (a DMN table of five rules), reminds after 2 working days, escalates after 4, and posts the decision with no rekeying. Expected benefit: approval time from 14 days to 5.

Requirements produced: FR-021 (routing), FR-022 (reminder and escalation), IF-001 (posting), and business rules BR-015 and BR-016, each traced to the step that needs it. The model uses `templates/process-model.md`.

## Sources

- `babok-3.0-2015`: techniques 10.22, 10.31, 10.34, 10.35, and 10.40, and tasks 6.1 and 6.2.
- `bpmn-2.0`: events, gateways, lanes, and message flows.
- `dmn-1.3`: decision tables for the rules that route a process.
- `apqc-pcf`: naming and placing processes in a process architecture.
