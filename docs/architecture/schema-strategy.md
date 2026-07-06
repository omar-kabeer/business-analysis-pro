# Schema Strategy

This document outlines the data schemas and strategies for core assets in the Business Analysis OS. Maintaining structured schemas ensures predictability and enables automated validation.

## 1. Agent Skills (`skills/*/SKILL.md`)

Agent skills are defined as directories containing a `SKILL.md` file. They extend agent capabilities natively.

**Schema (YAML Frontmatter):**
```yaml
---
name: string        # e.g., "business-analysis"
description: string # e.g., "Gathers and structures business requirements."
---
```
**Body:** Standard Markdown detailing objectives, required inputs, processing steps, output expectations, and quality gates.

## 2. Deliverable Templates (`templates/*.md`)

All deliverables must conform to strict Markdown templates with metadata headers.

**Schema (YAML Frontmatter):**
```yaml
---
type: deliverable
domain: string      # e.g., "business-analysis"
status: enum        # draft, review, approved
version: string     # e.g., "1.0.0"
---
```
**Body:** Must include standard sections: Executive Summary, Scope, Stakeholders, Requirements/Content, Assumptions, and Sign-off.

## 3. Memory (`memory/`)

Project memory and context are stored locally to maintain state across agent sessions.
- **Format:** Primarily structured Markdown for broad knowledge, and JSON for strict state tracking (if needed).
- **Strategy:** Each project or initiative receives its own subdirectory within `memory/` to avoid context collision.

## 4. Evaluations (`evaluation/`)

Evaluations are used to score generated deliverables against established rubrics.
- **Format:** JSON files defining test cases and rubrics.
- **Schema Snippet:**
```json
{
  "test_id": "string",
  "target_artifact": "string",
  "criteria": [
    {
      "dimension": "Completeness",
      "weight": 0.5,
      "passing_score": 4
    }
  ]
}
```
