---
name: proposal-writer
description: Produce decision-grade proposals, technical reports, business cases, implementation plans, and feasibility studies from raw or unstructured input. Use whenever the user wants to draft a proposal, write a business case, build a project proposal, prepare a board paper, create a feasibility report, write a grant application, draft a technical proposal, prepare an RFP response, or transform notes/transcripts/requirements into a stakeholder-ready document. Trigger on phrases like "write a proposal for X", "I need a business case", "draft an implementation plan", "turn this into a proposal", "prepare a board document", "we're pitching X to Y", "write up a feasibility study", or whenever raw notes need to become a structured executive document. Spans finance, fintech, technology, agriculture, infrastructure, policy, and enterprise systems. Output is a `.docx` file unless the user explicitly asks for something else.
---

# Proposal Writer

This skill turns unstructured input, ideas, notes, transcripts, requirement dumps, into a structured, decision-grade document that a director, board, regulator, or grant committee can read and act on without revisions.

## What "decision-grade" means here

A proposal is decision-grade when the reader can answer three questions without asking the writer anything:

- **Why** does this matter? (the problem and what it costs not to solve)
- **How** will it be solved? (the approach, design, and plan)
- **What next?** (the decision being requested and the immediate next step)

Every section earns its place by contributing to one of those three answers. If a paragraph doesn't, cut it. The instinct to add filler, generic market context, throat-clearing introductions, "in today's fast-paced world" openers, is the single biggest threat to credibility. Resist it.

## When to start writing vs. when to ask

The default is to **start writing**. Most proposals come in with enough signal to draft a strong v1, and a draft is a much better elicitation tool than a questionnaire, the user reads it, sees the gaps, and tells you what's wrong.

Only stop and ask when a gap is genuinely blocking, meaning, you cannot write a coherent proposal without it. Examples of blocking gaps:

- The audience is fundamentally unclear and would change the document type entirely (e.g., is this for an internal exec committee or an external grant body?)
- A core financial figure is needed for the document's premise (e.g., the user wants a business case but hasn't said what's being invested or what the expected return frame is)
- The proposal is for a regulated process (tender, grant, RFP) with a fixed structure you don't have

Non-blocking gaps, exact timeline dates, specific vendor names, precise budget line items, are handled by stating a reasonable assumption inline: *"Assumption: Phase 1 begins Q1 2026; adjust if a different start is preferred."* The user corrects what's wrong and you revise. This is faster than a questionnaire.

When you do ask, ask at most 2-3 questions, and bundle them. Never ask one, get an answer, ask another.

## Step 1: Extract intent before drafting

Before writing anything, work through the input and identify these elements. If you're using this skill, do this in your head or in a brief note, don't make the user wait while you tabulate it visibly.

- **Objective**: what is being proposed, in one sentence
- **Problem**: what's broken or missing today, and what it costs
- **Stakeholders**: who decides, who's affected, who pays, who delivers
- **Scope**: what's in, what's explicitly out
- **Constraints**: budget, timeline, regulatory, technical, political
- **Expected outcomes**: how success will be measured
- **Domain**: the field shapes tone, depth, and structure choices

If the input is a transcript or messy notes, your first job is silently doing this extraction. The quality of the extraction determines the quality of every section that follows. A weak proposal almost always traces back to a fuzzy reading of what the user actually wanted.

## Step 2: Pick the document type

The structure changes based on what's actually being asked for. Pick one, don't blend them.

| Document type | When to use | Tone |
|---|---|---|
| **Business proposal** | Selling a service, partnership, or commercial engagement to a client | Persuasive, ROI-led |
| **Technical proposal** | Proposing a system, architecture, or technical solution for internal or vendor approval | Precise, design-led |
| **Government / grant proposal** | Applying for public funding, regulatory approval, or development grants | Compliance-led, alignment with funder priorities |
| **System implementation proposal** | Proposing how to deploy, migrate, or integrate a defined system | Operational, milestone-led |
| **Feasibility report** | Assessing whether something *should* be done, before committing | Analytical, balanced, conclusion-driven |
| **Board paper / business case** | Asking executives or a board for a decision (approval, funding, direction) | Concise, decision-focused, financial |

If you genuinely cannot tell which one the user wants, that's a blocking gap, ask. Otherwise, pick the closest fit and proceed; you can always pivot in revision.

Audience adjusts the depth: executive readers want the headline and the ask up front, technical readers want the design to hold up under scrutiny, regulators want compliance traceability. A document can have all three readers, handle it by putting the executive summary up front and pushing technical depth into later sections.

## Step 3: Use this structure

This is the default skeleton. It works for every document type above with light adaptation. **Keep section names as listed**, readers scanning the document expect them.

### A. Executive Summary
Three short paragraphs, no more. The objective, the value proposition, the key outcomes. A reader who reads only this section should know what the document is asking for and why. Write this section *last*, after the rest of the document is drafted, it's a summary, not an introduction.

### B. Problem Definition
The current state, the specific pain points, and the impact (financial, operational, strategic, or reputational) of leaving it unaddressed. Quantify where you can. Vague problem statements ("inefficiencies in the current process") produce vague proposals; concrete ones ("manual reconciliation of 1,200 daily transactions takes 3 FTE-days per week") produce sharp ones.

### C. Proposed Solution
The high-level approach, the key components, and *why this approach works*, meaning, why it solves the problem defined in section B and why it's better than the obvious alternatives. If you can't draw a clean line from problem to solution, the solution is wrong or the problem is mis-stated.

### D. Technical / Operational Design
The architecture, workflow, data flow, or process flow. This is where technical proposals earn their credibility. Use diagrams or structured tables. Name the systems involved. Show how data or work moves through them. For non-technical proposals, this section becomes "Operational Approach" and describes how the work actually gets done.

### E. Implementation Plan
Phases, timeline, milestones. Show dependencies. A reader should be able to identify the critical path. Don't promise dates you can't justify, if the user hasn't given you a start date, anchor on a quarter and note the assumption.

### F. Financials / Resources
Cost drivers, budget structure, resource requirements. For a business case, this is where the ROI lives. For a technical proposal, it's where the team and infrastructure costs live. For a grant, it's where the line items and justifications live. Numbers must be defensible, if you make a figure up, the whole proposal collapses when challenged.

### G. Risk Analysis
The real risks, not the throwaway ones. "Project may face delays" is not a risk, it's a tautology. Real risks: a specific dependency that could fail, a regulatory change that could land mid-project, a vendor that's a single point of failure, a team gap. Each risk gets a mitigation that's actually implementable.

### H. Governance & Compliance
Who approves what, how progress is reported, what regulatory or internal controls apply. For lighter proposals this can be brief; for regulated industries (banking, health, public sector) this section often makes or breaks approval.

### I. Expected Outcomes
The measurable results, KPIs, metrics, target dates. This must connect back to the problem in section B and the value proposition in the executive summary. If you said the problem costs $X, the outcome should show how much of $X is recovered and when.

### J. Conclusion & Call to Action
The decision being requested, in one or two sentences. The next step the reader is being asked to take. End the document with a clear ask, approval, funding, sign-off, a meeting, not a vague "we look forward to your feedback."

## Step 4: Make the sections connect

The most common failure of AI-generated proposals isn't bad sections, it's disconnected sections. The problem statement talks about latency, the solution talks about cost reduction, the financials don't reference either. Before you finalize, walk these chains:

- **Problem → Solution**: Does the solution directly address the pain points named in B?
- **Solution → Implementation**: Does the plan actually deliver the components named in C?
- **Implementation → Financials**: Do the costs map to the phases? Are resources accounted for?
- **Risks → Reality**: Do the risks reflect the actual constraints (budget, timeline, dependencies), not generic risks?
- **Outcomes → Problem**: Do the KPIs measure the thing the problem statement said was broken?

If any chain breaks, the document loses credibility. Fix the chain, not just the section.

## Step 5: Adapt depth by domain

The skeleton stays; the emphasis shifts.

- **System / technical**: Lean into section D. Use architecture diagrams, sequence flows, integration points, message specifications. Name systems, protocols, versions.
- **Financial**: Lean into section F. Show the model, capex/opex split, payback period, NPV or IRR if relevant, sensitivities. Don't bury numbers in prose; put them in tables.
- **Policy / regulatory**: Lean into sections H and B. Frame the problem in terms of the regulatory mandate or policy gap. Map the solution to specific compliance requirements.
- **Grant / development**: Lean into sections B, I, and H. Funders care about the problem (alignment with their mission), the outcomes (measurable impact), and the controls (how their money is governed).
- **Implementation / migration**: Lean into sections D, E, and G. The reader wants to know *how* it gets done and *what could go wrong*.

## Step 6: Output as `.docx` by default

Proposals are documents people send, print, and present. The default format is a Word document.

Use the `docx` skill (at `/mnt/skills/public/docx/SKILL.md`) for the actual file generation, read it before producing the file. That skill knows the rendering quirks of this environment; this one knows what should be in the document.

A few defaults to apply:

- **Headings**: Use Heading 1 for section titles (A, B, C…), Heading 2 for sub-sections. Don't include the letter prefixes (A., B.) in the final document, they're for your reference here, not for the reader.
- **Cover page or title block**: Title, document type ("Business Case", "Technical Proposal", etc.), prepared for / prepared by, date. Skip if the user has provided their own template.
- **Tables**: Use them for financials, RACI matrices, risk registers, milestone schedules. Tables read faster than prose for structured data.
- **Length**: Match the audience. A board paper is 4-8 pages. A technical proposal is 15-30. A grant application is whatever the funder mandates. Don't pad to hit a length.

If the user explicitly asks for markdown, plain text, slides, or PDF, honor that. PDF can be produced from the `.docx` using the `pdf` skill.

## Step 7: Final pass before delivery

Before you hand it over, read it as the recipient would.

- **Open with the ask, not the throat-clearing.** The first paragraph of the executive summary should make the request clear.
- **Cut every sentence that doesn't add decision value.** "This proposal aims to outline the various considerations…", gone. Just say what's being proposed.
- **Check the chains** described in Step 4.
- **Numbers must be defensible.** If you made a figure up to make the document feel complete, replace it with a labeled assumption or remove it.
- **No placeholders.** No `[insert figure here]`, no `[client name]`, no `TBD` unless the user explicitly asked for a template.
- **Read the executive summary alone.** If it doesn't stand on its own, rewrite it.

## Quick examples of the transformation

**Input**: *"Client wants to start a table water factory. Needs planning, cost, and execution."*

This is a business case / feasibility hybrid for a small manufacturing venture. Sections B and F do the heavy lifting (market sizing, capex/opex, payback). Section D becomes a production setup and distribution flow. Section H covers NAFDAC and SON compliance (or whatever the relevant local regulator is, name it explicitly).

**Input**: *"Implement ISO 20022 FX settlement using RTGS system."*

This is a technical / system implementation proposal. Section D does the heavy lifting, message transformation logic (MT103/MT202 → pacs.008/pacs.009), the cross-border flow, integration with the RTGS gateway, settlement lifecycle. Section E lays out a phased migration (likely a coexistence period). Section G addresses translation gaps, truncation risks, and reconciliation between legacy and new formats.

The skeleton is the same; the weight shifts to where the reader's questions are.

## Working style

The user of this skill typically arrives with a clear deliverable in mind and limited patience for friction. Bias toward producing a complete first draft fast, then refining based on their feedback. A draft they can mark up is more useful than questions they have to answer.

## Operating standard

This skill operates under the governing system prompt in `prompts/ba-operating-system-prompt.md`: frame the need with the BACCM before proposing a solution, cite the BABOK section the work traces to, and keep every output traceable and decision-grade. Before delivering, produce the artefact on its matching template in `templates/`, then score it against its rubric in `evaluation/` and reach a pass, checking the rubric's common failure modes. Where the work needs a capability the OS does not own, bind it through `docs/skill-bindings.md`.
