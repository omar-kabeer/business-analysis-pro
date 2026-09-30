# Reference Model Selection Playbook

How to choose, adapt, and cite an established reference model, framework, or notation so analysis builds on accepted structure instead of inventing it, and stays within the licence of what it uses. This playbook supports the BABOK techniques that rely on reference structures, including Business Capability Analysis (10.6), Process Modelling (10.35), Scope Modelling (10.41), and Organizational Modelling (10.32), and the Business Architecture Perspective (11.4). It draws on the standards held in `sources/manifest.json`, each with a conformance note in `sources/conformance/`.

## When this playbook applies

Use it when an artefact needs a taxonomy, a notation, or a framework: naming processes consistently, building a capability map, choosing a modelling notation, placing requirements in an enterprise architecture, or answering "is there a standard way to do this". Hand the artefact itself to the skill that produces it: process models to process-modelling, capability maps to business-architecture, data models to data-modelling.

## Step 1: Name the kind of reference needed

| Need | Kind of reference | Examples in the library |
| --- | --- | --- |
| A shared language for processes | Process classification framework | APQC PCF (`apqc-pcf`) |
| A notation for flows and decisions | Modelling notation | BPMN 2.0 (`bpmn-2.0`), DMN 1.3 (`dmn-1.3`) |
| A notation for structure and behaviour | Modelling language | UML 2.5 (`uml-2.5`) |
| Enterprise views across business and technology | Architecture framework and language | ArchiMate 3.1 (`archimate-3.1`), TOGAF (`opengroup-togaf-presentation-2003`) |
| Ends, means, and influencers of strategy | Motivation model | Business Motivation Model 1.3 (`bmm-1.3`) |
| Accessibility of an interface | Guideline | WCAG 2.2 (`wcag-2.2`) |

References outside the library (Zachman, SCOR, SAFe, FEA) can still fit; record them as candidates for the library rather than citing them from memory.

## Step 2: Test fit before adopting

Apply a reference because it fits, never by default. Ask:

1. Does it cover the industry or function? A manufacturing process taxonomy may not fit a bank.
2. Does the organisation already mandate a framework? Use it unless there is a strong reason not to.
3. Will the audience understand it, or will it need training?
4. Is the version current, and is the source authoritative?
5. Does the licence allow the intended use? Many frameworks allow citation and adaptation but not reproduction.

Write the answers down. "We used BPMN because it is standard" is not a justification; "we used BPMN because the process owner's team already reads it, and swimlanes show the handoffs that cause the delay" is.

## Step 3: Adapt rather than copy

Take the parts of a reference that serve the need and tailor them: select the relevant branch of a process framework, rename levels to the organisation's vocabulary, and drop elements nobody will maintain. Record what was taken, what was left out, and why. A framework copied wholesale is expensive to maintain and signals that nobody thought about fit.

## Step 4: Conform where it matters

Some references are normative for the OS: their conformance notes in `sources/conformance/` list the checks an artefact must pass (for example, BPMN sequence flows that stay within a single pool, check BPMN-PM-03). Where an artefact claims to use a notation, it must follow the notation's rules, not merely borrow its shapes. Where it only draws inspiration, say "adapted from" rather than "in".

## Step 5: Cite with a locator

Cite the reference by its library ID, version, and a precise locator in the style the manifest gives (for example, "BABOK 10.35" or "BPMN 2.0, section 10.6"). Never paste licensed text beyond short quotation. Where a reference is not in the library, cite publisher, title, version, and year, and propose it for curation.

## Stop rules

Selection is complete when the kind of reference is named, the chosen reference passes the fit test with written answers, the adaptation is recorded, conformance obligations are identified, and the citation has an ID, version, and locator.

## Common failures

- A framework chosen because it is famous, not because it fits.
- A full framework copied into a deliverable.
- A notation's shapes used without its rules.
- Citations with no version or locator.
- Licensed text reproduced beyond fair quotation.

## Worked example

Supplier invoice approval: the process team needs to name and place the approval process consistently with other finance processes, and model it.

Kind of reference: a process classification framework for naming, and a notation for the model.

Fit test for APQC PCF:
1. Coverage: the cross-industry framework has a procure-to-pay branch covering invoice processing. It fits.
2. Mandate: Finance has no process taxonomy of its own. None to follow.
3. Audience: process owners know the procure-to-pay stages. Understandable.
4. Currency: the Cross-Industry PCF version 8.0, the edition held in the library.
5. Licence: royalty-free use and derivative works are allowed, on condition that every copy and derivative carries the APQC attribution statement. The conformance note makes this a blocking check (APQC-PT-04).

Adaptation: take the invoice-processing branch only, rename "process accounts payable" to Finance's own "Pay suppliers", and drop sub-levels for expense claims, which are out of scope.

Notation: BPMN 2.0 with swimlanes, because handoffs between AP and budget holders are the problem to show. Conformance obligations from the BPMN conformance note include start events with no incoming sequence flow and end events with no outgoing one (BPMN-PM-06), a start event wherever there is an end event (PM-07), single-direction gateways (PM-08), and sequence flows kept within one pool (PM-03). The process-model rubric adds the house rule that every decision has complete branches.

Citation in the process model: "Process placed using the APQC Cross-Industry PCF version 8.0 (`apqc-pcf`), procure-to-pay branch, adapted; modelled in BPMN 2.0 (`bpmn-2.0`)." The model also carries the APQC attribution statement, as the licence requires.

## Sources

- `babok-3.0-2015`: techniques 10.6, 10.32, 10.35, and 10.41, and the Business Architecture Perspective (11.4).
- `apqc-pcf`: process classification.
- `bpmn-2.0` and `dmn-1.3`: process and decision notation.
- `archimate-3.1` and `opengroup-togaf-presentation-2003`: enterprise architecture language and framework.
- `bmm-1.3`: motivation modelling.
