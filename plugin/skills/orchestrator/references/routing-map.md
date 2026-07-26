# Routing Map

Use this to map an incoming request to the right specialist skill and a sensible sequence. Route only when the specialist adds structure; otherwise answer directly.

## Request to skill

| Signal in the request | Primary skill | Common follow-on |
| --- | --- | --- |
| Vague problem, need to frame it, stakeholders unclear | elicitation | business-analysis, strategy |
| "Interview / workshop / discovery / find the real problem" | elicitation | requirements |
| "What should we build, is it worth it, business model" | strategy | finance, market-research |
| "Market size, competitors, TAM, industry scan" | market-research | strategy |
| "Business case, ROI, NPV, cost benefit, funding" | finance | executive-review |
| "BABOK, current state, future state, gap, capability, traceability" | business-analysis | requirements, governance |
| "BRD, FRD, SRS, requirements, acceptance criteria, NFRs" | requirements | quality |
| "Vision, roadmap, product strategy, JTBD, discovery" | product-manager | product-owner |
| "Backlog, epics, stories, sprint, definition of ready or done" | product-owner | quality |
| "Personas, journey, usability, accessibility, IA, wireframes" | ux | requirements |
| "APIs, integrations, cloud, events, security for a BA" | architecture | requirements |
| "RAID, risk register, decision log, release readiness" | governance | quality |
| "Validate, critique, is this any good, find the gaps" | quality | executive-review |
| "Make this board-ready, executive summary, present to CEO" | executive-review | natural-prose-editor |
| Payments, ISO 20022, SWIFT, SEPA, clearing and settlement | business-analysis + domain pack | requirements, architecture |
| "Write the proposal / report / documentation / prompt" | proposal-writer, technical-writer, prompt-master | natural-prose-editor |

## Common sequences

- Discovery to delivery: elicitation, business-analysis, requirements, quality, executive-review.
- New product bet: strategy, market-research, finance, product-manager, executive-review.
- Requirements package: requirements, governance (traceability), quality.
- Any written deliverable ends with natural-prose-editor as the house-style pass.
- Payments initiatives load `domain-packs/payments-iso20022/` alongside the core skills.

## Execution patterns

- Sequential: output of one skill is the input to the next.
- Parallel: independent sub-tasks (research and finance) run together, then integrate.
- Iterative: act with a specialist, validate with quality, repeat until the gate passes. Set a stop condition to avoid loops.
