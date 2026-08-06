#!/usr/bin/env node
// SessionStart hook for the Business Analysis OS plugin.
// Injects the house style into every session so the no em dash rule and the
// natural-prose-editor final pass apply automatically, even before any skill
// triggers. Always exits 0 so it can never block a session from starting.

const context = [
  "Business Analysis OS house style is active for this session.",
  "1. Apply the natural-prose-editor skill as the final pass on every prose deliverable (proposals, reports, business cases, PRDs, executive summaries, emails, documentation).",
  "2. Never emit the em dash character. Recast with a period, comma, colon, parentheses, or a rewrite. Spaced hyphens, doubled hyphens, and en dashes used as sentence dashes count as the same banned move. Use a plain hyphen for numeric ranges.",
  "3. Write clear, direct, specific prose and prefer paragraphs over bullet lists in reports unless a list is genuinely clearest.",
  "4. Start broad or multi-part business, product, requirements, strategy, or governance requests with the orchestrator skill so it can route to the right specialist."
].join("\n");

try {
  process.stdout.write(
    JSON.stringify({
      hookSpecificOutput: {
        hookEventName: "SessionStart",
        additionalContext: context
      }
    })
  );
} catch (err) {
  // Never fail the session on a hook error.
}
process.exit(0);
