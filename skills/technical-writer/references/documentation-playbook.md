# Documentation Playbook

How to turn raw inputs (notes, transcripts, specifications, screens) into documentation that lets a reader complete a task correctly the first time: user guides, runbooks, training material, how-to guides, and demo scripts. This playbook supports BABOK Communicate Business Analysis Information (4.4) and the transition requirements that documentation often satisfies (Define Transition Requirements, within Specify and Model Requirements, 7.1). Document structure follows the patterns in `iiid-24495-document-design-patterns-draft`, and plain language follows the principles ISO 24495-1 sets out (relevant, findable, understandable, usable), applied without claiming conformance until the library holds the standard.

## When this playbook applies

Use it when the reader's goal is to do something: operate a system, follow a procedure, recover from a failure, learn a workflow, or present a demo. Use the communication skill for updates and decisions, and the proposal-writer skill for documents that argue for a course of action.

## Step 1: Define the reader and the task

Before writing, answer four questions:

| Question | Why it matters |
| --- | --- |
| Who is the reader, and what do they already know? | Sets vocabulary and how much to explain |
| What task will they perform, and when? | Sets the structure: one task, one section |
| Where will they read it (desk, phone, during an incident)? | Sets length, layout, and how scannable it must be |
| What does success look like when they finish? | Sets the check the document ends with |

Write the task as a verb phrase ("Approve an invoice on a phone", "Recover when ERP posting fails"). If the task will not fit in one phrase, split the document.

## Step 2: Choose the document type

| Type | Purpose | Shape |
| --- | --- | --- |
| How-to guide | Complete one task | Goal, prerequisites, numbered steps, result |
| Runbook | Handle an operational event, often under pressure | Trigger, checks, decision points, steps, escalation, rollback |
| User guide | Cover a role's tasks in one product | Task-based chapters, reference sections |
| Training material | Build skill over several sessions | Objectives, explanation, practice, check |
| Demo script | Show value to an audience | Story, scene-by-scene actions and talking points, recovery lines |

## Step 3: Gather and verify the facts

Collect the inputs and verify them against the real system or process: every screen name, button label, field, error message, and system response. Where the input is silent or contradictory, record an open question for the owner rather than guessing. A guide with one wrong button label loses the reader's trust in every other step.

## Step 4: Structure for finding and doing

Apply the document design patterns: a title that names the task, a one-sentence purpose, prerequisites before step 1, one action per numbered step, the expected result after steps where the system responds, and warnings placed before the step they apply to, never after. Use headings a reader can scan and a navigation pane can list. Put reference material (field definitions, error codes) in tables at the end, not in the steps.

## Step 5: Write each step so it cannot be misread

- Start with the verb: "Select Approve."
- Name interface elements exactly as they appear, in bold or quotation marks, consistently.
- One action per step; a second action is a second step.
- State conditions before the action: "If the invoice is on hold, select Contact AP."
- Use the reader's words; define any unavoidable term once.
- Show what the reader should see after steps that change the screen.

## Step 6: Test by doing

Have someone who matches the reader follow the document on the real system without help, and watch. Every hesitation, wrong turn, or question is a defect in the document. Fix, and test again. For runbooks, rehearse the procedure in a test environment, including the rollback.

## Step 7: Maintain

Record the version, the date, the system version it describes, and the owner. Review when the system changes. A document that describes last quarter's screens is worse than none, because readers follow it.

## Stop rules

The document is ready when the reader and task are defined, every fact is verified against the real system, the structure lets the reader find their task and follow it step by step, a representative reader has completed the task unaided, and the version and owner are recorded.

## Common failures

- Steps written from the specification, never checked on the system.
- Several actions in one step.
- Warnings after the step they should have prevented.
- Explanation mixed into procedures, so the steps are hard to follow.
- No owner, so the document drifts out of date.

## Worked example

Runbook: "Recover when ERP posting fails" for the invoice approval workflow, for the AP team lead on duty.

Reader and task: the AP team lead, who knows the workflow but not the integration. They read it on a laptop during month end, under time pressure. Success: every approved invoice reaches the ERP with its decision intact.

Trigger: the workflow shows the alert "Posting failed 3 times" for one or more invoices.

Steps:

1. Open **Approvals > Posting status**.
2. Filter by **Status: Failed**. The list shows each failed invoice and its last error.
3. If the error is "ERP unavailable", wait for the next automatic retry (every 15 minutes) and go to step 6.
4. If the error is "Invoice locked in ERP", ask the ERP support desk to release the lock, quoting the invoice ID.
5. Select the invoice, then select **Retry now**. The status changes to **Posted** within one minute.
6. After 60 minutes with any invoice still failed, escalate to the ERP on-call engineer (number in the support directory) and note the invoice IDs in the incident.

Result: every invoice shows **Posted**. The approval decisions were never lost, because the workflow keeps the decision until posting succeeds.

Test: two team leads followed the runbook in the test environment with simulated failures; one hesitated at step 4 because the ERP desk name was unclear, so the step now names the desk as it appears in the support directory.

## Sources

- `babok-3.0-2015`: Communicate Business Analysis Information (4.4) and transition requirements within 7.1.
- `iiid-24495-document-design-patterns-draft`: document design patterns for findable, task-based documents. It is a development draft and supporting only.
- ISO 24495-1: the plain language principles, applied without claiming conformance until the library holds the standard (see the `iso-24495-1` entry in `sources/manifest.json`).
