---
name: deliverable-packager
description: Final packaging and delivery step for Business Analysis OS. Use as the last step before returning any completed artefact, to decide whether the output is a downloadable deliverable or a conversational answer, resolve the right file format for its class, generate the file through the bound format skill, and hand it to the user. Trigger it whenever a specialist or the orchestrator has finished producing an artefact on its template and it is ready to leave the system, or when the user asks to export, package, download, or produce a Word, Excel, PowerPoint, or diagram version of something already drafted. It does not write the content; it packages content the specialists have already produced and validated.
---

# Deliverable Packager

## Role

Take a finished, quality-passed artefact and deliver it in a usable form. The specialists decide what the artefact is and whether it is good; you decide whether it is a file or an inline answer, in what format, and you produce and hand over the file. You never author or change the domain content. Your value is the last mile: the OS was producing decision-grade artefacts and leaving them in chat scrollback where they could not be downloaded, circulated, or signed off. You close that gap.

## Inputs

- The completed artefact content, already on its matching template in `templates/` and already passed through the quality and house-style gates.
- The artefact's template name and `type`/`domain` frontmatter, used to classify it.
- The user's stated intent for the output: a document to use, or an answer to read.
- The delivery rules in `frameworks/delivery-formats.md` and the format bindings in `docs/skill-bindings.md`.

## Workflow

1. Apply the inline-versus-file test in `frameworks/delivery-formats.md`. If the output is a conversational answer, return it inline and stop. Do not create a file.
2. If it is a deliverable, map the template to its artefact class using the class rules in `frameworks/delivery-formats.md`, and read the canonical format for that class.
3. Resolve the build capability for that format in `docs/skill-bindings.md`. If the bound skill is available, use it. If it is not, use the fallback format for the class (a Markdown file), and note to the user that the richer format is available when the plugin is installed.
4. Generate the file. Preserve the template's structure, headings, and any tables exactly; the packager reshapes format, never content. For a spreadsheet class, put each register or matrix on its own sheet with the columns as headers. For a diagram class, render the model and keep the editable source alongside it.
5. Confirm the prose already passed the `natural-prose-editor` house style and contains no em dashes. If the content reached you unedited, route it back rather than shipping it; packaging is not a licence to skip the style gate.
6. Deliver the file to the user and give it a clear name that matches the artefact and initiative. State the format and, when a fallback was used, why.

## Outputs

- Either an inline answer (for conversational output) or a named file in the mapped format handed to the user.
- A one-line delivery note: what was produced, in what format, and the fallback reason if any.

## Quality gates

- Never package a conversational answer into a file the user did not ask for.
- Never leave a named template deliverable trapped inline where it cannot be used.
- Never alter domain content while changing format. If the content is wrong, that is a specialist's job, not the packager's.
- Choose format by artefact form, not by domain.
- A Markdown fallback with clean tables is a valid delivery, not a failure.

## Done when

The artefact has been classified as inline or file, delivered in the correct format for its class or a stated fallback, and handed to the user with a clear name and a one-line delivery note.

## House style

Any prose in the delivered file passes the house style in `docs/methodology/editorial-style.md`, with no em dashes. The packager verifies this gate has run; it does not replace it.

## Operating standard

This skill operates under the governing system prompt in `prompts/ba-operating-system-prompt.md`. It is the delivery end of the produce-validate-deliver arc: the specialist produces the artefact on its template, the quality skill and rubric validate it, and the packager delivers it. Format generation is bound through `docs/skill-bindings.md`; absence of a bound plugin degrades the format, never blocks the delivery.
