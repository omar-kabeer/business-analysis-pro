# Stakeholder Communication Playbook

How to package business analysis information so each audience understands it, trusts it, and can act on it. This playbook applies BABOK Communicate Business Analysis Information (4.4), Manage Stakeholder Collaboration (4.5), Plan Stakeholder Engagement (3.2), and Confirm Elicitation Results (4.3). Writing follows the four plain language principles that ISO 24495-1 sets out (relevant, findable, understandable, usable) and the companion design patterns in `iiid-24495-document-design-patterns-draft`; messages for senior readers follow the Pyramid Principle (`minto-pyramid-principle`), paraphrased. The library does not yet hold the standard itself: `iso-24495-1` is flagged in `sources/manifest.json` because the held file is third-party guidance, not the standard. Apply the principles, but do not claim conformance to ISO 24495-1.

## When this playbook applies

Use it whenever analysis information leaves the analyst: status reports, steering updates, emails, announcements, meeting notes, decision requests, or the same message tailored for different audiences. Use the executive-review skill for a board or investment paper, and the technical-writer skill for user documentation.

## Step 1: Know the audience before writing a word

For each audience, answer four questions from the stakeholder register and engagement approach (3.2):

| Question | Why it matters |
| --- | --- |
| What decision or action do they own? | It sets the purpose of the message |
| What do they already know? | It sets what to explain and what to skip |
| How much time will they give it? | It sets the length and the format |
| How do they prefer to receive it? | It sets the channel |

An executive who approves funding, a delivery team that builds, and a supplier who is affected need three different messages, even about the same facts.

## Step 2: Decide the purpose and the one thing to remember

Every communication has one purpose: to inform, to request a decision, to request action, or to confirm understanding. Write, in one sentence, the thing the reader must remember if they read nothing else. If you cannot, the message is not ready.

## Step 3: Lead with the answer

Structure the message top down (the Pyramid Principle). The answer or the ask comes first, then the few reasons that support it, then the evidence. Readers who stop after the first paragraph should still know what you need from them. For a decision request, state the decision, the recommendation, the deadline, and the consequence of not deciding, before any background.

## Step 4: Write in plain language

Apply the plain language principles: the content is relevant to the reader, and they can find what they need, understand it, and use it. In practice:

- short sentences, one idea each;
- the reader's words, not the project's jargon, with any necessary term defined once;
- active voice, with the actor named ("the sponsor approves", not "approval is required");
- numbers with their unit and their comparison ("14 days, against a target of 5");
- headings a reader can scan, and lists only where the items are truly parallel.

## Step 5: Choose the format and the channel

| Need | Format |
| --- | --- |
| Regular progress to a steering group | Status report with RAG status, decisions needed, and top risks |
| A decision by a named person | Short decision request, one page |
| Record of what a meeting agreed | Meeting notes with decisions, actions, and open items |
| Change that affects many people | Announcement with what changes, when, and what they must do |

Use the templates: `templates/status-report.md`, `templates/meeting-notes.md`, and `templates/business-analysis-information-communicated.md`. Match the channel to urgency and sensitivity: a decision that is late goes by conversation first and email second; bad news goes to the owner before it goes to the group.

## Step 6: Report status honestly

A status report states where the work is against plan, what needs a decision, and what is at risk, with a RAG status that follows stated rules. Amber means action is needed to stay on track; red means the plan will be missed without a decision from this audience. A report that stays green until the week before a missed date has failed, whatever its formatting.

## Step 7: Confirm and close the loop

Communication is complete when the audience has understood it, not when it has been sent (4.3, 4.4). For decisions and agreements, ask for confirmation and record it. For meeting notes, circulate within a day and record corrections. For announcements, check that the people affected know what to do.

## Stop rules

A communication is ready when its purpose and key message fit in one sentence each, the answer comes first, it is written for its audience in plain language, and there is a way to confirm it landed. Stop editing when a reader who knows nothing about the project could act on it.

## Common failures

- Background first, ask last, so the ask is missed.
- One message sent unchanged to every audience.
- Jargon and acronyms the reader has not seen before.
- Status reports that hide risk until it becomes an issue.
- Sending treated as the same as communicating.

## Worked example

Supplier invoice approval: one fact, three audiences. The fact is that the ERP vendor has not tested month-end volumes, and a load test is needed before go-live.

To the sponsor (decision request): "Please approve a two-week load test before we commit to the 15 September go-live. Without it, there is a real chance that approvals fail at month end, when invoice volume triples. The test costs 6,000 pounds and does not move the date if we start by 1 August. I need your decision by Friday."

To the delivery team (action): "Load testing is now on the plan for 1 to 14 August. Tom Reyes owns it. The target is 150 concurrent users at three times normal volume, with pages under 2 seconds at the 95th percentile. Please book the test environment by 25 July."

To AP clerks (inform): "Go-live stays planned for 15 September. Before then, the team will test the system at month-end volumes, so it works on your busiest days. You do not need to do anything yet."

Each message leads with what that reader needs, uses their terms, and says what, if anything, they must do.

## Sources

- `babok-3.0-2015`: tasks 3.2, 4.3, 4.4, and 4.5.
- `iso-24495-1`: the four plain language principles, relevant, findable, understandable, and usable, as paraphrased by the guidance the library holds. The standard itself is still to be acquired.
- `iiid-24495-document-design-patterns-draft`: document design patterns that apply those principles.
- `minto-pyramid-principle`: top-down structure for messages to senior readers.
