# Process Modelling Notation and Techniques

## Choosing a technique

- Frame scope quickly: SIPOC.
- Show the flow of work and decisions: BPMN or a flowchart.
- Show handoffs across roles or systems: swimlane diagram.
- Find and remove waste and delay: value stream map.
- Break a large process or function into parts: functional decomposition.
- Find the underlying cause of a problem: root-cause analysis.

## SIPOC

A one-page frame of a process: Suppliers, Inputs, Process (5 to 7 high-level steps), Outputs, Customers. Use it before detailed modelling to agree the boundary and the customer of the process.

## BPMN core elements

- Events: start, intermediate, end (circles). Triggers and results.
- Activities: tasks and sub-processes (rounded rectangles). The work.
- Gateways: decisions and merges (diamonds). Exclusive (one path), parallel (all paths), inclusive (one or more).
- Sequence flow: arrows showing order.
- Pools and lanes: participants and the roles or systems within them (swimlanes).
- Artifacts and data: data objects, data stores, annotations.

Keep models readable: one clear happy path, decisions labelled with their conditions, and exceptions shown but not allowed to swamp the main flow.

## Swimlanes

Lay roles or systems as lanes and place each activity in the lane that performs it. Handoffs (arrows crossing lanes) are where delay, error, and ownership gaps concentrate, so they are the first place to look when analysing.

## Value stream mapping

Map the steps from trigger to outcome and, for each, capture process time and wait time. The ratio of value-adding time to total lead time shows how much of the elapsed time is actually productive. Target the largest waits and rework loops first.

## Process analysis

Look for: unnecessary steps, duplication, manual workarounds, rework loops, long waits, unclear ownership, and steps that add no value to the customer. Quantify where you can (volume, time, error rate).

## Root-cause analysis

Use the 5 whys or a fishbone (cause and effect) diagram to reach the underlying cause rather than treating the symptom. Confirm the root cause with evidence before designing a fix.

## As-is and to-be

Model the current state to understand and analyse; model the future state to design the improvement. Always state what changes between them, so the redesign is traceable and the benefit is clear.
