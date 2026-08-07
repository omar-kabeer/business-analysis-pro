# Conformance checks: bpmn-2.0

Source id: `bpmn-2.0`
Standard: OMG Business Process Model and Notation (BPMN).
Edition held: Version 2.0, OMG document formal/2011-01-03. Also published as ISO/IEC 19510.
Publisher: Object Management Group (OMG).
Authority: normative.
Identity: confirmed from the title page on 2026-08-07. BPMN 2.0, formal/2011-01-03.
Licence: OMG specification; paraphrase only.
Extraction note: this is a 537-page specification. Full-text extraction was performed by a subagent working from a pdftotext dump, so the raw text stayed out of the main working context. The obligations below were returned by that extraction with clause locators; the checks are then authored here.
Modality note: BPMN 2.0 states its connection and element rules with MUST and defines conformance sub-classes. The structural rules map to blocking checks. Modelling best practices stated as guidance are advisory.
Artefact types constrained: `process-model`.
Owning skills: `process-modelling` (primary), `visual-modelling`.
Locator style: BPMN 2.0 clause `<n>`.

## How to read this file

Three layers, kept separate: Source (S) with locator, labelled Inference (I), and the Check (C), answerable yes or no from the finished process diagram. BPMN conformance is defined for tools and for execution engines as well as for models; the checks here cover only what is testable on a delivered process diagram (Process Modeling Conformance). Execution semantics, XML serialization, and tool-capability requirements are recorded as not-testable.

## Checks: process-model

Applies to a BPMN process model (process or collaboration diagram).

| Check id | Question (yes = pass) | Severity | Locator | How the reviewer confirms |
| --- | --- | --- | --- | --- |
| BPMN-PM-01 | Are all shapes drawn from the BPMN process and collaboration element vocabulary (flow objects, connecting objects, swimlanes, artifacts), with no choreography-only shapes? | blocking | 2.1 | Check every shape is a recognised BPMN process element. A non-BPMN or choreography-only shape fails. |
| BPMN-PM-02 | Does every sequence flow connect a flow node (event, activity, or gateway) at both ends, never a data object, annotation, group, or pool? | blocking | 8.3.13 | Trace each solid arrow; both ends must land on an event, activity, or gateway. An arrow touching a data object or annotation fails. |
| BPMN-PM-03 | Do all sequence flows stay within a single pool, never crossing a pool boundary (crossing lanes is allowed)? | blocking | 9.2 | Confirm no solid arrow leaves or enters a pool. Cross-pool sequence flow fails. |
| BPMN-PM-04 | Does every message flow connect two different pools (participants), never two objects within the same pool? | blocking | 9.3 | Confirm each dashed arrow crosses between two distinct pools. A message flow inside one pool fails. |
| BPMN-PM-05 | Do artifacts (text annotation, group) connect only via associations, never via a sequence flow or message flow? | blocking | 8.2 | Confirm annotations and groups use only dotted associations. An annotation on a solid or dashed flow fails. |
| BPMN-PM-06 | Do start events have no incoming sequence flow and no outgoing message flow, and end events no outgoing sequence flow and no incoming message flow? | blocking | 10.4.2, 10.4.3 | Check no solid arrow enters a start event or leaves an end event, and message-flow direction at events is correct. |
| BPMN-PM-07 | If the model contains an end event, does it contain at least one start event? | blocking | 10.4.2 | Presence check. An end event with no start event on the diagram fails. |
| BPMN-PM-08 | Is each gateway single-direction: a converging gateway with one outgoing flow, or a diverging gateway with one incoming flow? | blocking | 8.3.9 | Check each gateway's arrows. A converging gateway with more than one outgoing arrow, or a diverging one with more than one incoming, fails. |
| BPMN-PM-09 | Are boundary intermediate events catch-only, and are None and Link intermediate events not placed on an activity boundary? | blocking | 10.4.4 | Check events attached to activity borders are catch triggers; no plain or link event sits on a boundary. |
| BPMN-PM-10 | Does a single gateway avoid both splitting and merging at once (a mixed gateway), using two sequential gateways instead where both are needed? | advisory | 10.5 | Flag any gateway with multiple incoming and multiple outgoing flows as a mixed-gateway smell. |
| BPMN-PM-11 | Are gateways free of work content (no task label), so no redundant pass-through diamond stands where flow need not be controlled? | advisory | 10.5 | Flag a gateway carrying task-like labelling or a single-in single-out gateway that controls nothing. |
| BPMN-PM-12 | Does each pool represent exactly one participant, with lanes used only to partition, not to represent flow? | advisory | 9.2 | Confirm one participant per pool and that lanes only subdivide. |
| BPMN-PM-13 | Are atomic units of work drawn as tasks and decomposable work as sub-processes with a boundary? | advisory | 10.2 | Check leaf work is a task and decomposed work a sub-process. Advisory modelling clarity. |

### Provenance

- PM-01. S: Process Modeling Conformance requires support for the BPMN core plus the process and collaboration element sets; the required visual vocabulary is the flow objects, connecting objects, swimlanes, and artifacts (2.1.1, 2.1.2). I: We gate a delivered diagram on using only that vocabulary.
- PM-02. S: A sequence flow's source and target must each be a flow node (event, activity, or gateway) (8.3.13, sequence flow connection rules). I: none.
- PM-03. S: A process is fully contained within its pool; sequence flows cannot cross a pool boundary, though they may cross lanes (9.2). I: none.
- PM-04. S: A message flow must connect two separate pools and must not connect two objects within the same pool (9.3, message flow connection rules). I: none.
- PM-05. S: An artifact must not be the source or target of a sequence flow or a message flow; artifacts connect via associations (8.2). I: none.
- PM-06. S: A start event has no incoming sequence flow and is not the source of a message flow; an end event has no outgoing sequence flow and is not the target of a message flow (10.4.2, 10.4.3). I: none.
- PM-07. S: If a model contains an end event, it must contain at least one start event (10.4.2). I: none.
- PM-08. S: A converging gateway has multiple incoming and one outgoing flow; a diverging gateway has one incoming and multiple outgoing flows (8.3.9, gatewayDirection: converging, diverging, mixed). I: We gate on single-direction gateways; mixed is handled as advisory PM-10.
- PM-09. S: A boundary intermediate event attached to an activity can only catch a trigger; None and Link intermediate events are not placed on an activity boundary (10.4.4). I: none.
- PM-10. S: A gateway should perform only one of split or merge; the recommended pattern is two sequential gateways, converge then diverge (10.5). I: Stated as guidance, so advisory.
- PM-11. S: A gateway controls the flow; where flow need not be controlled a gateway is unnecessary, and a gateway is not a unit of work (10.5). I: Advisory clarity.
- PM-12. S: A pool is the graphical representation of one participant; a lane is a sub-partition that organises activities (9.2). I: Advisory structural clarity.
- PM-13. S: A task is an atomic activity, a single unit of work not decomposed further; a sub-process is decomposable work (10.2). I: Advisory modelling clarity.

## Not-testable obligations

| Obligation (paraphrase) | Locator | Why not testable on a static diagram |
| --- | --- | --- |
| Process Execution, BPEL Execution, and Choreography Modeling conformance. | 2.2, 2.3, 2.4 | Concern runtime engines and choreography, not a delivered process diagram. |
| A conforming tool must support all listed attributes for each sub-class element. | 2.1.2 | Tool capability, invisible on the drawing. |
| Token-passing semantics: a token traverses a sequence flow only if its condition evaluates true. | 8.3.13 | Runtime evaluation, not a static property. |
| Data association substructure (ioSpecification, input and output sets) is generated and invisible. | 2.1.2 | XML and metamodel serialization detail. |
| Visual (diagram) interchange conformance. | 2.1.8 | Concerns the interchange file format, not the drawing. |

## Coverage

- `process-model`: 9 blocking checks (BPMN-PM-01 to BPMN-PM-09), 4 advisory (BPMN-PM-10 to BPMN-PM-13).

The single constrained artefact type carries blocking checks (forward cross-check satisfied). Every check maps to `process-model`, no orphans. No other normative source constrains `process-model`, so no conflict.
