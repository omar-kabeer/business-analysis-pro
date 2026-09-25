# Delivery Formats

The single canonical mapping from an artefact class to the format it is delivered in and the mechanism used to deliver it. Defined once here and referenced by the `deliverable-packager` skill and the `orchestrator`. It answers a question the rest of the OS leaves open: the OS decides *what* artefact to produce (the template) and *whether it is good* (the rubric), but nothing decided *how it reaches the user* in a usable form. This framework closes that gap.

The OS produces every artefact at the methodology level as Markdown on its matching template in `templates/`. That Markdown is the source of truth. Format generation (Word, Excel, PowerPoint, rendered diagrams) is a build capability the OS does not own; it is bound as an optional external skill in `docs/skill-bindings.md`. When the bound skill is absent, the artefact is still delivered as a written Markdown file, never lost to chat scrollback.

## The inline-versus-file decision

Decide this first, before choosing a format. It is the rule the OS was missing.

- Purpose: separate a usable deliverable from a conversational answer, so a full BRD and a one-line recommendation are not both returned as chat prose.
- When to use: at the packaging step of every request.
- Method: apply the test below in order and stop at the first match.
  - The output is a named template deliverable (any file in `templates/`), or the user asked for a document, report, register, model, deck, or something to download, share, or sign off. Deliver as a **written file** in the mapped format, and hand the user the file.
  - The output is analysis, a recommendation, a routing decision, a clarification, a comparison, or a direct answer that was not requested as a document. Deliver **inline** as chat prose. Do not write a file.
  - Ambiguous (the request could go either way, or mixes both). Deliver the answer inline and ask once whether the user wants it packaged as a file, naming the format you would use.
- Pitfalls: packaging a quick answer into a file the user did not want; leaving a decision-grade deliverable trapped inline where it cannot be downloaded or circulated; asking about packaging on every turn instead of only when genuinely ambiguous.

## Format by artefact class

Artefact class is the *form* of the work product, not its domain. A risk register and a stakeholder register are both registers; both are delivered as a spreadsheet regardless of the domain that owns them. Map the template to a class, then read the row.

| Artefact class | What it covers | Canonical format | Bound build skill | Fallback |
| --- | --- | --- | --- | --- |
| Prose document | BRD, FRD, SRS, PRD, NFR spec, business case, executive summary, SOW, current-state assessment, future-state definition, gap analysis, use-case spec, product vision brief, product strategy, go-to-market plan, win-loss report, status report, release plan and notes, workshop plan, interview guide, SLA | `.docx` | `docx` | `.md` file |
| Register, matrix, log, catalogue, dictionary | Risk register, RAID log, decision log, requirements traceability matrix, stakeholder register, stakeholder map and RACI, business rules catalogue, compliance obligation register, data dictionary, artefact register, prioritisation matrix, decision matrix, estimation basis, experiment log | `.xlsx` | `xlsx` | `.md` table |
| Model or diagram | Process model, context diagram, logical data model, journey map, empathy map, persona, opportunity solution tree, business capability map, SWOT | Rendered diagram (SVG or PNG) plus editable source | `visual-modelling`, `dataviz`, `figma:figma-generate-diagram` | Mermaid or ASCII in an `.md` file |
| Canvas | Business model canvas, OKRs, product roadmap | Rendered visual, or `.xlsx` when the content is a grid of values | `dataviz`, `xlsx` | `.md` file |
| Presentation | Board pack, executive review deck, any explicitly slide-shaped output | `.pptx` | `pptx` | `.docx` outline |
| Procurement document | RFP, statement of work, change request | `.docx` | `docx` | `.md` file |
| Conversational output | Analysis, recommendation, routing decision, clarification, comparison, direct answer not requested as a document | Inline chat prose | none | not applicable |

## How a template maps to a class

Read the template filename and its `type`/`domain` frontmatter, then match on form:

- names ending `-matrix`, `-register`, `-log`, `-catalogue`, `-dictionary`, or any row-per-item table are the register/matrix class.
- names ending `-model`, `-diagram`, `-map`, `-canvas`, or `-tree` are the model/diagram or canvas class.
- names ending `-plan`, `-brief`, `-report`, `-case`, `-summary`, `-specification`, `-spec`, `-definition`, `-assessment`, `-guide`, or `-notes` are the prose class.
- procurement domain (`rfp`, `statement-of-work`, `change-request`) is the procurement class.
- an explicit request for slides or a board pack is the presentation class regardless of template.

When a template genuinely spans two classes (a business case with a decision matrix inside it), the document class wins for the container and the embedded table is rendered inside it; only split into a separate spreadsheet if the user asks for the data separately.

## Pitfalls

- Choosing format by domain rather than form: registers are spreadsheets whether they are owned by governance or by requirements.
- Forcing tabular data into prose: a traceability matrix in a Word paragraph is unusable; it belongs in a sheet.
- Treating the fallback as failure: a Markdown file with a clean table is a valid delivery when the build skill is not bound. Deliver it and note the richer format is available if the plugin is installed.
- Re-deciding format per template: there are 56 templates and seven classes. Decide by class.
