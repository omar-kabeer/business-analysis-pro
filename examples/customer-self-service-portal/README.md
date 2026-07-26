# Worked Example: Customer Self-Service Portal

An end-to-end demonstration of the Business Analysis OS, taking one realistic, unstructured business request through to a structured, validated deliverable. It also serves as an integration test of the skills, the BRD template, and the evaluation rubric.

## The flow

orchestrator -> business-analysis -> BRD (`templates/brd.md`) -> evaluation (`evaluation/brd-rubric.md`)

## Files

- `scenario.md`: the raw request that starts the flow.
- `brd.md`: the completed Business Requirements Document produced from the scenario.
- `evaluation.md`: the BRD scored against the BRD rubric, with a verdict.

## How to reproduce

In Claude Code with the plugin installed, start from the scenario:

`/business-analysis-os:orchestrator` then paste the request from `scenario.md`.

The orchestrator routes to discovery and analysis, the BRD is assembled from the template, and the quality skill grades it against the rubric. This example shows the expected shape and quality of the output.
