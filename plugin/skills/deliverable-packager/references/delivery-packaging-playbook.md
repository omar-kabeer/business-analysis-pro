# Delivery Packaging Playbook

How to take a finished, quality-passed artefact and put it in the reader's hands in a form they can use, circulate, and sign off, without touching its content. This playbook applies the packaging and delivery part of BABOK Communicate Business Analysis Information (4.4): choosing between formal and informal packages, and fitting the package to the audience and the purpose. It works with the class rules in `frameworks/delivery-formats.md` and the format bindings in `docs/skill-bindings.md`. The usability test follows the plain language principles that ISO 24495-1 sets out: the reader can find, understand, and use what they receive. The library does not yet hold the standard itself: `iso-24495-1` is flagged in `sources/manifest.json` because the held file is third-party guidance, not the standard. Apply the principles, but do not claim conformance to ISO 24495-1.

## When this playbook applies

Use it as the last step for every completed artefact, and whenever a user asks for a file, a download, or a different format. It never applies to deciding what the artefact says; that belongs to the specialist that produced it.

## Step 1: Decide inline or file

BABOK 4.4 distinguishes formal packages (documents meant to be reviewed, approved, stored, and reused) from informal ones (a conversation, a quick answer). Apply the test in `frameworks/delivery-formats.md`:

| Signal | Delivery |
| --- | --- |
| The user asked for a named deliverable, or the work was produced on a template | File |
| The output will be approved, signed, circulated, or kept as a record | File |
| The output answers a question, compares options, or explains a routing decision | Inline |
| The user asked a question and did not ask for a document | Inline |

When the signals conflict, ask one short question rather than guess. A file nobody asked for is clutter; a template deliverable trapped in chat is lost work.

## Step 2: Map the artefact to its class

Read the template name and frontmatter, and find its class in the table in `frameworks/delivery-formats.md`: prose document, register or matrix, model or diagram, canvas, presentation, procurement document, or conversational output. Choose the class by the artefact's form, not its domain. A risk register is a register whether it came from governance or finance.

## Step 3: Resolve the build capability

Look up the class's canonical format and bound build skill in `docs/skill-bindings.md`: for example `.docx` through the `docx` skill for prose documents, `.xlsx` through the `xlsx` skill for registers. If the bound skill is not available, use the fallback format (usually a Markdown file with clean tables) and tell the user the richer format is available when the binding is installed. A clean fallback is a valid delivery.

## Step 4: Generate without changing content

Build the file so it carries exactly what the template holds:

- keep every heading, in order, with the template's heading levels;
- keep tables as tables, with the same columns;
- for a register or matrix, put each table on its own sheet, with columns as headers and one row per item;
- for a diagram, render the model and keep the editable source (for example Mermaid or BPMN XML) alongside it;
- carry the document control block (version, status, owner, date) into the file's first page or first sheet.

If the content is wrong or incomplete, stop and route it back to the specialist. Packaging never repairs content.

## Step 5: Check the gates have run

Before handing over, confirm three things and refuse to ship if any fails:

1. The artefact passed its quality gate, with the rubric its profile names in `evaluation/quality-profiles.json`.
2. The prose passed the `natural-prose-editor` house style, with no em dashes.
3. The template's usage note and any example rows were replaced with real content, and no illustrative names, figures, or IDs from the template remain.

## Step 6: Name the file and deliver it

Name the file for the reader, not the system: initiative, artefact, version. For example, "Supplier-invoice-approval_BRD_v1.0.docx". Hand it over with a one-line delivery note: what it is, the format, and, if a fallback was used, why. Where the user will circulate it, make it findable: a clear title on the first page and headings that navigation panes can use.

## Stop rules

Delivery is complete when the inline or file decision is made and explained, the file (if any) is in its class's format or a stated fallback, the content is unchanged from the approved artefact, the gates are confirmed, and the user has the file with a clear name and note.

## Common failures

- Packaging a conversational answer into a document nobody asked for.
- Leaving a signed-off deliverable only in chat.
- Reformatting that silently drops a table column or a section.
- Shipping content that skipped the house-style gate.
- Template example rows left in a delivered document.

## Worked example

The requirements skill has finished the BRD for supplier invoice approval, version 1.0, and it passed `evaluation/brd-rubric.md`.

1. Inline or file: the BRD is a named template deliverable that the sponsor will sign, so it is a file.
2. Class: prose document.
3. Capability: canonical format `.docx`, bound skill `docx`, available in this session.
4. Generate: all 30 sections in template order; the requirement tables keep their ID, requirement, acceptance criteria, priority, and source columns; the document control block becomes the cover page.
5. Gates: the quality gate passed; the house-style pass ran, with no em dashes; a search for the template's example scenario terms finds none left in the content.
6. Deliver: "Supplier-invoice-approval_BRD_v1.0.docx", with the note "BRD version 1.0 as a Word document, ready for the sponsor's sign-off."

In the same session the user asks, "Which requirements depend on the ERP API?" That is a question, so it is answered inline with the three requirement IDs, and no file is created.

## Sources

- `babok-3.0-2015`: Communicate Business Analysis Information (4.4), formal and informal packages.
- ISO 24495-1: the plain language principles, applied without claiming conformance until the library holds the standard (see the `iso-24495-1` entry in `sources/manifest.json`).
- `iiid-24495-document-design-patterns-draft`: document design patterns for findable, scannable deliverables.
