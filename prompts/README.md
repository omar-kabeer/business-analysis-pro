# Prompts

Reusable prompt assets that help drive the OS. Two kinds live here: system prompts that set how every agent behaves, and request prompts that invoke the OS for a common job. Paste a request prompt into Claude Code and fill in the brackets. They are starting points, not rigid scripts.

## System prompts

The governing layer. These set the identity, standards, and discipline that every agent and skill inherits, in the runtime or the skills layer.

- `ba-operating-system-prompt.md`: the master governing persona. A principal business analyst grounded in the whole body of knowledge and beyond, who holds every output to its rubric. Inject it as the base layer beneath any specialist.
- `system-prompt-template.md`: the reusable skeleton for a specialist agent or skill system prompt. Sits on top of the operating prompt and adds only what makes one discipline different, including the rubric self-check gate.

## Request prompts

- `orchestrator-intake.md`: hand a raw request to the orchestrator for routing.
- `discovery-kickoff.md`: start discovery on a fuzzy problem.
- `deliverable-request.md`: ask for a specific deliverable from the right skill.
- `review-request.md`: get a deliverable verified or critiqued.
