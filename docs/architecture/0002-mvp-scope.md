# 0002 - MVP Scope Confirmation

**Date:** 2026-07-04
**Status:** Accepted

## Context

The overall ambition of Business Analysis OS includes 30+ specialist agents, 150+ templates, and exhaustive methodologies (as detailed in `CODEX_IMPLEMENTATION_GUIDE.md`). To deliver value quickly and validate our architecture, we must define a minimal viable product (MVP) scope.

## Decision

The MVP scope is constrained to the foundational workflows required to receive a business request and output a structured requirements document.

**MVP Agent Set (Skills):**
1. **Orchestrator (`skills/orchestrator/`)**: The entry-point skill responsible for receiving unstructured user requests, determining the right specialist skill, and ensuring standards are met.
2. **Business Analyst (`skills/business-analysis/`)**: A specialist skill focused on requirements elicitation, analysis, and structuring the BRD.

**MVP Deliverables:**
1. **Business Requirements Document (BRD)**: One foundational template (`templates/brd.md`) defining the schema for business needs.

## Consequences

- **Pros:** A tight scope allows us to test the entire lifecycle (orchestrator -> specialist -> deliverable) without getting bogged down in volume.
- **Cons:** It leaves many other domains (e.g., UX, Finance, Governance) unsupported in the immediate term.
- **Next Steps:** Implement the Orchestrator and Business Analyst skills, establish the BRD template, and run an end-to-end evaluation using a sample business prompt.
