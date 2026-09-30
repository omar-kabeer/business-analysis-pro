# Elicitation and Collaboration Playbook

How to run the five BABOK Elicitation and Collaboration tasks (4.1 to 4.5). Elicitation is iterative: prepare, conduct, confirm, communicate, and repeat until the information is good enough for the decision it serves. Cite BABOK by section and paraphrase; do not copy guide text.

## States of elicited information

Elicitation output moves through states, and the state must always be visible.

| State | Meaning | May be used for |
| --- | --- | --- |
| Planned | A question or topic we intend to explore | Planning only |
| Unconfirmed | Captured from a source but not checked | Further elicitation, never for sign-off |
| Confirmed | Checked against the source and other results | Analysis, requirements, decisions |
| Communicated | Shared with the stakeholders who need it | Shared understanding and agreement |

Never present a prepared question as an answer, or an unconfirmed result as a confirmed one.

## 4.1 Prepare for Elicitation

1. State the elicitation objective in one sentence: what decision or work product the activity serves. "Understand the invoice exception process well enough to write its business rules" is an objective. "Talk to finance" is not.
2. Choose techniques that fit the objective, the stakeholders, and the time available (see the selection table below).
3. Set up logistics: participants, location or tool, duration, and materials.
4. Secure supporting material: existing documents, data, prior findings. Run document analysis first so sessions do not cover what is already written down.
5. Prepare stakeholders: send the objective and any pre-reading, and set expectations about how their input will be used.

Output: an elicitation activity plan.

## Technique selection

| Situation | Strong first choice | Why |
| --- | --- | --- |
| Deep individual knowledge, sensitive topics | Interviews (10.25) | Private, can probe |
| Many stakeholders need to agree | Workshops (10.50) | Builds shared ownership |
| Tacit or routine work people cannot describe | Observation (10.31) | Shows what people do, not what they say |
| Broad population, quantifiable questions | Survey or questionnaire (10.45) | Reach and statistics |
| Existing written knowledge | Document analysis (10.18) | Cheap, fast, grounds other sessions |
| Stakeholders unsure what they want | Prototyping (10.36) | Reaction beats abstraction |
| Generating options | Brainstorming (10.5), collaborative games (10.10) | Breadth before judgement |
| Understanding attitudes in a segment | Focus groups (10.21) | Group interaction reveals shared views |
| Existing interfaces or data | Interface analysis (10.24), data mining (10.14) | Facts from systems |

Combine techniques: document analysis before interviews, interviews before a workshop, a prototype inside a workshop, observation to check what interviews claimed.

## 4.2 Conduct Elicitation

- Guide the activity against the objective. When the conversation drifts, note the topic in a parking lot and return.
- Ask open, non-leading questions, one at a time. Move from current state, to pain, to goals, to other stakeholders, to edge cases, to priority.
- Capture outcomes as they happen, attributed to their source. Separate fact from opinion, and record exact words where precision matters.
- Record assumptions, unknowns, and conflicts as they surface, with who could resolve them.

Output: unconfirmed elicitation results.

Bias to guard against: confirmation bias (hearing what you expected), the loudest voice in a group, and hypothetical answers ("would you use X") taken as evidence of behaviour.

## 4.3 Confirm Elicitation Results

1. Play the results back to the source, for example a summary within 24 hours of an interview, and record corrections.
2. Compare results across sources and techniques. Where they conflict, the conflict is itself a finding: record both views and who holds each, and plan how to resolve it.
3. Check results against documents and data where possible.

Output: confirmed elicitation results. Only now may they feed requirements.

## 4.4 Communicate Business Analysis Information

1. Decide the objective and format for each audience: what they need to know or decide, and the form they will actually read (summary, model, walkthrough, document).
2. Package the information at the right level of detail and state its status (draft, confirmed, baselined).
3. Communicate it and confirm understanding, not just delivery.

Output: business analysis information communicated. The communication skill owns the packaging; this skill owns the accuracy of the content.

## 4.5 Manage Stakeholder Collaboration

- Gain agreement on commitments: time, availability, and decision authority from each key stakeholder.
- Monitor engagement: attendance, responsiveness, and quality of input. Falling engagement is an early warning sign for the whole initiative.
- Maintain collaboration: resolve conflicts, keep stakeholders informed of how their input was used, and escalate missing participation through the governance approach.

Output: stakeholder engagement, recorded against the stakeholder engagement approach.

## Deciding when elicitation is enough

Stop when the next session is unlikely to change the decision the elicitation serves. Signals: new sessions repeat known themes, conflicts are identified and owned, and every requirement area has at least one confirmed source. Keep going when key stakeholder groups have not been heard, when confirmed results conflict without a resolution path, or when results rest on a single source.

## Common failure modes

- Sessions with no stated objective.
- Only managers interviewed about work that front-line staff perform.
- Results used without confirmation.
- Conflicts averaged away rather than recorded.
- Stakeholders never told how their input was used, so they disengage.

## Quality gates

Grade each output with the rubric named in its quality profile (`evaluation/quality-profiles.json`): `elicitation-activity-plan`, `interview-guide`, `workshop-plan`, `stakeholder-register`, `stakeholder-map-raci`, and `stakeholder-engagement-approach`. The stakeholder-coverage-auditor agent audits the stakeholder outputs. The elicitation-facilitator agent decides whether a request has enough input to proceed.

## Worked example

Supplier invoice approval: eliciting why approvals take 14 days.

- 4.1 Prepare: the desired outcome is a confirmed as-is approval process with timings, feeding the current state assessment. Techniques are chosen for the people: observation for AP clerks, because procedures differ from practice; interviews for budget holders, because they are spread across sites; a focus group with clerks for exception causes. Planned in `templates/elicitation-activity-plan.md`.
- 4.2 Conduct: the observation on 6 May found clerks chasing approvals by phone for 40 percent of their morning. Interview INT-004 with a budget holder found that approval emails often lack the purchase order, so approvers ask before deciding. Statements are recorded as said, with fact separated from opinion, in `templates/interview-guide.md`.
- 4.3 Confirm: each interviewee received a summary within a day and confirmed it; one corrected "half the emails" to "about half". The observation findings were checked with two clerks who were not observed.
- 4.4 Communicate: the confirmed findings went to the product owner as a one-page summary: three causes, each with its evidence.
- 4.5 Collaborate: one budget holder resisted, seeing the project as surveillance of approvers. A follow-up conversation reframed the goal as fewer interruptions, and they joined the design workshop.

When to stop: the three causes appeared in every source, and new interviews added no new cause, so elicitation for the current state was enough.

## Sources

- `babok-3.0-2015`: Elicitation and Collaboration tasks 4.1 to 4.5 and the techniques they use.
- `iso-29148`: the stakeholder needs and requirements definition process that elicitation feeds.
- `iso-9241-210-2010`: understanding and specifying the context of use, for eliciting with the people who do the work.
