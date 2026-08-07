# SDLC Playbook

How to use Business Analysis OS across the software development life cycle. The OS is a method-agnostic business analysis and product layer that sits on top of whatever delivery cadence you run. It is built on BABOK v3, which is deliberately not tied to one process, so the same skills and templates work for agile, predictive, or hybrid delivery. You choose how heavy the documentation and gates are, which is the BABOK principle of tailoring rigour to context.

## Recommended approach

Run a hybrid, iterative-incremental life cycle with continuous business analysis. Do not treat analysis as a phase that finishes before build begins. Instead, keep analysis continuous and control progress with decision gates: fund it, build it, release it. This lets you move iteratively while staying auditable. The OS spans the full arc that BABOK describes: pre-project rationale (Strategy Analysis), delivery (Requirements Analysis and Design Definition), and post-project value (Solution Evaluation).

Three habits make it a system rather than a folder of documents:

- Route non-trivial work through the orchestrator skill so it frames the problem before anyone jumps to a solution, using the reasoning arc: understand, clarify, research, challenge assumptions, identify risks, model options, evaluate tradeoffs, recommend, validate.
- Keep traceability unbroken. The requirements-traceability-matrix is the spine, linking business need to requirement to design to test. It is what makes the whole life cycle auditable and change-safe.
- Apply the house style to every prose deliverable through the natural-prose-editor pass, with the no em dash rule enforced automatically.

## Phase map

Each phase names the driving skills, the templates it produces, and the gate that must pass before moving on.

### 1. Inception and discovery

- Skills: elicitation, business-analysis.
- Templates: stakeholder-register, stakeholder-map-raci, interview-guide, workshop-plan, current-state-assessment.
- Gate: the business need is framed with the BACCM (need, value, stakeholders, context) and the root cause is understood, not just the symptom.

### 2. Strategy and feasibility

- Skills: strategy, market-research, finance, executive-review.
- Templates: future-state-definition, gap-analysis, swot-analysis, business-model-canvas, business-case, executive-summary.
- Gate: a funded, evidence-based go decision with quantified value (NPV, IRR, payback) and named risks, reviewed to executive quality.

### 3. Requirements and design definition

- Skills: requirements, product-manager, product-owner, ux, architecture.
- Templates: brd, prd, frd, srs, nfr-specification, user-story-epic, product-vision-brief, product-roadmap, prioritization-matrix, opportunity-solution-tree.
- Gate: every requirement passes the eight BABOK quality characteristics (atomic, complete, consistent, concise, feasible, unambiguous, testable, prioritized, understandable) and is validated by the quality skill.

### 4. Build and iterate

- Skills: product-owner, governance.
- Templates (living): requirements-traceability-matrix, raid-log, risk-register, decision-log.
- Gate: definition of ready before a story enters a sprint.

### 5. Test and release

- Skills: quality, governance.
- Templates: release-readiness-checklist, requirements-traceability-matrix.
- Gate: a recorded go, no-go, or conditional-go decision, non-functional checks passed, and definition of done met.

### 6. Operate and evaluate

- Skills: business-analysis (Solution Evaluation tasks), finance.
- Activity: measure solution performance against the business case, analyse limitations, and recommend actions to increase value. This closes the loop back into discovery for the next increment.

## Gates as the control mechanism

Because analysis is continuous, the control is the gate, not the phase boundary. Three gates carry most of the weight:

- Investment gate (end of feasibility): does the business case justify funding, given value, risk, and alternatives including do-nothing?
- Readiness-to-build gate (end of requirements): are requirements complete, testable, and traceable, and validated by the quality skill?
- Release gate (end of test): does the release-readiness-checklist pass, including non-functional and rollback checks, with a recorded decision?

## Running it in Claude Code

Install the plugin per project and keep the traceability matrix, RAID log, decision log, and risk register under version control alongside the code, so governance lives with the work. Let the templates be the definition of done for each artifact.

A typical new initiative:

1. `/business-analysis-os:orchestrator` with the raw brief. It classifies the request and routes to discovery.
2. Run elicitation and business-analysis into the discovery templates.
3. Take the business case through the finance and executive-review skills.
4. Break the approved scope into requirements and stories with the requirements and product-owner skills.
5. Carry the traceability matrix and governance logs through delivery to the release-readiness gate.
6. After launch, evaluate performance against the business case and feed the result into the next increment.

## Adapting to your delivery model

- Agile or continuous delivery: lean on continuous discovery (opportunity-solution-tree), the product-owner backlog templates, and definition of ready and done as the gates. Keep documentation light and just-in-time.
- Predictive or regulated (for example payments contexts where ISO 20022, PSD2, and audit trails matter): lean on the full BRD, SRS, business case, decision log, and traceability matrix as formal stage-gate deliverables, and keep the gates heavier.

The same OS supports both. Tailor the weight of documentation and the strictness of gates to the risk and context of the initiative.

## Related

- Skill routing: `skills/orchestrator/references/routing-map.md`.
- BABOK reference: `skills/business-analysis/references/babok-knowledge-areas.md`.
- House style: `docs/methodology/editorial-style.md`.
- Templates: `templates/`.
