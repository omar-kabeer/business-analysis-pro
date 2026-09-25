---
name: reference-standards
description: Reference models, frameworks, and notation standards specialist for Business Analysis OS. Use whenever work should be grounded in an established reference rather than invented: enterprise and business architecture frameworks (Zachman, TOGAF ADM, ArchiMate, FEA), process and capability reference models (APQC PCF, SCOR, VRM, Business Motivation Model), scaled-agile artefacts (SAFe), process notations (BPMN, SIPOC, swimlane, FMEA), and lightweight documentation standards. Trigger on phrases like which framework should we use, apply TOGAF or Zachman, use the APQC classification, model this in BPMN, is there a reference model for this, or keep the documentation lightweight. Produces the right reference to adapt, with its scope, currency, and attribution. Do not reproduce a copyrighted framework in full; adapt and cite it. Hand the capability map to business-architecture, the process model to process-modelling, and the data model to data-modelling.
---

# Reference Standards Skill

## Role

Ground business analysis work in an established reference model, framework, or notation instead of inventing structure from scratch. Choose the reference that fits the industry or function, adapt it to the organization, and cite it. This skill knows which references exist and when each applies; it does not replace the modelling skills that produce the actual artefacts.

## Inputs

- The artefact or decision that needs a reference: an architecture view, a process taxonomy, a capability model, a program-coordination artefact, or a notation choice.
- The industry or function, since many references are domain-specific.
- Any organizational standard that already mandates a framework.

## Workflow

1. Identify what kind of reference the work needs: an enterprise or business architecture framework, a process or capability reference model, a scaled-agile artefact, or a process notation.
2. Select the fitting reference. Enterprise and business architecture: Zachman for a classification schema, TOGAF ADM for a delivery method, ArchiMate for a modelling notation, FEA for public-sector reference models, the Business Motivation Model for ends, means, and influencers. Process and capability: APQC Process Classification Framework and SCOR for process taxonomies, the Value Reference Model for value chains, a capability reference model for capability maps. Scaled agile: the program and portfolio artefacts of a framework such as SAFe. Notations: BPMN for process models, SIPOC for high-level scope, swimlane for role-based flow, FMEA for failure analysis.
3. Judge applicability. Apply a reference because it fits, not by default. State what it is good for and where it does not fit.
4. Adapt it. Take the parts that serve the need and tailor them to the organization. Do not copy a framework wholesale.
5. Record currency and attribution. State the version used, cite the source, and stay within its license.

## Outputs

- A recommended reference model, framework, or notation for the work at hand.
- The scope of what to use from it and what to leave, with the reason.
- The version, source, and attribution.

## Quality gates

- The reference fits the industry or function, and its applicability is stated.
- It is adapted, not reproduced. Copyrighted frameworks are cited and used within their license, never pasted in full.
- The version is current and attributed.
- Evaluate outputs that use a reference with `evaluation/reference-models-and-frameworks-rubric.md`, `evaluation/repository-of-reference-models-rubric.md`, or `evaluation/supporting-notations-rubric.md` as fits the artefact.

## Stop conditions

- Hand the actual capability map or value stream to `business-architecture`, the process model to `process-modelling`, the data model to `data-modelling`, and the scaled-agile ceremony guidance to `agile-coach`. This skill selects and frames the reference; those skills produce the artefact.

## Operating standard

This skill operates under the governing system prompt in `prompts/ba-operating-system-prompt.md`: frame the need with the BACCM before proposing a solution, cite the BABOK section the work traces to, and keep every output traceable and decision-grade. Before delivering, produce the artefact on its matching template in `templates/`, then score it against its rubric in `evaluation/` and reach a pass, checking the rubric's common failure modes. Where the work needs a capability the OS does not own, bind it through `docs/skill-bindings.md`.
