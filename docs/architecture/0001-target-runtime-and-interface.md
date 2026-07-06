# 0001 - Target Runtime and Interface

**Date:** 2026-07-04
**Status:** Accepted

## Context

The Business Analysis OS is designed as a repository of enterprise artifacts, agent instructions, and workflows. To make the OS operational, we must define its primary runtime environment and initial user interface. The options considered were a Command Line Interface (CLI), a Web Application, a native Agent Skill Pack, or an API service.

## Decision

We will prioritize building the OS as a **Native Agent Skill Pack** first, while making structural room for a future Web Application.

1. **Primary Interface:** The OS will act as a "Skill Pack" loaded natively into advanced AI agents (such as Claude or Codex).
2. **Web App Scaffolding:** We will create an `apps/web` directory with a modern web framework template (e.g., React + Vite) to hold space for a future, more visual UI when the core OS features are stable.

## Consequences

- **Pros:** Agents will be able to utilize our methodology and outputs natively within their existing workflows. It minimizes immediate upfront engineering costs for a UI.
- **Cons:** Users must rely on AI agents capable of loading `.agents` or `.github` instructions to interface with the OS initially.
- **Next Steps:** Ensure that the repository exposes its functionalities clearly via `skills/` directories, and that a baseline web application is scaffolded in `apps/web`.
