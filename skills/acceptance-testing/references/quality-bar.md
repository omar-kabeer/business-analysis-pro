# Quality Bar, Defects, and Failure Modes

## Defect severity and priority

Set severity by business consequence, not by how broken the screen looks.

| Severity | Meaning |
| --- | --- |
| Critical | Business cannot operate, data is lost or corrupted, or a compliance breach occurs. No workaround. |
| High | Core process blocked. A workaround exists but is costly, manual, or error-prone. |
| Medium | Function impaired, acceptable workaround, limited users affected. |
| Low | Cosmetic or minor inconvenience, no process impact. |

Keep severity separate from priority, which is fix order. The two diverge constantly, and conflating them is how a low-severity, high-visibility defect jumps ahead of a critical one that only finance can see.

A defect record that cannot be reproduced is not a defect record. Require the case identifier, environment, data used, steps, actual result, expected result, evidence, and the requirement identifier the failure breaches. Where the failure is a disagreement about intent rather than a departure from the specification, it is a change request, and it goes to `change-control` rather than into the defect count.

## Rubric for an acceptance test set

Score each dimension pass or fail. Any fail blocks execution starting or acceptance closing.

| Dimension | Pass looks like | Fail looks like |
| --- | --- | --- |
| Traceability | Every case names a requirement; every in-scope requirement reaches a case; no orphans | Coverage claimed at requirement level only, with rules inside them untested |
| Specificity | Expected results state values, thresholds, or observable outcomes | "System responds correctly", "as per design" |
| Identifiers | Unique, stable, never renumbered on insertion or deletion | Sequential numbering that shifts when a case is added |
| Coverage shape | Positive, boundary, negative, and exception paths present per rule | Happy path only, with negatives deferred to a later phase that never comes |
| Non-functional | Performance, security, accessibility, and recovery tested against stated numbers | Non-functional deferred to a specialist team with no criteria supplied |
| Data | Realistic volume and mess, provenance and masking recorded | Ten clean rows created by the analyst who wrote the test |
| Independence | Executed by business users who did not design the solution | Analysts demonstrating their own design and calling it acceptance |
| Evidence | Results retained with enough detail to reconstruct the run | Pass marked in a spreadsheet with nothing behind it |
| Omissions | Anything left out of the documentation is recorded with rationale, risk, and who agreed | Silence |

## Failure modes seen in practice

**Deferred acceptance.** Development runs in iterations while all business acceptance is held for one phase before release. This buys the risk profile of a predictive plan while paying agile coordination costs. Fix by accepting at story level within the iteration and reserving release-level acceptance for cross-story journeys and non-functional dimensions.

**Unstructured user access.** Giving business users a staging environment and inviting feedback produces opinions, not evidence. Fix with persona-based task scenarios, unassisted execution, and a structured recording form.

**Automating ambiguity.** Automating a vague case creates a brittle script that fails randomly and is then muted. The root cause is upstream: a story that entered development without testable criteria. Fix at the readiness gate, not in the automation framework.

**Non-functional as an afterthought.** Performance, resilience, and security tested days before launch, when nothing can be changed in response. Fix by setting thresholds at specification time and testing continuously against them.

**Deterministic blindness in AI acceptance.** Applying exact-match assertions to probabilistic outputs. Fix by scoring a fixed evaluation set against thresholds for grounding, relevance, and refusal behaviour, and recording model, prompt, and evaluation set versions with every result.

**Coverage theatre.** Reporting a high percentage that counts requirements rather than conditions. A requirement with one happy-path case reads as fully covered while six rules inside it are untested. Report condition coverage alongside requirement coverage.

**Exit criteria renegotiated on results day.** The pattern is a threshold quietly restated once it is missed. Fix by dating the agreement and recording any change to it as a change to the acceptance basis with the same authority that set it.

**Environment and data discovered late.** Entry criteria treated as aspiration rather than as a gate, so the first three days of the window are spent loading data. Fix by making environment and data readiness a checked entry condition with an owner and a date, verified before the window opens.

**Testing the screens instead of the rules.** Cases derived from the interface will pass while the underlying rule is wrong, and they will break on every cosmetic change. Derive from the requirement and the rule; use the interface only as the route to exercise them.

## Handoffs

| Situation | Route to |
| --- | --- |
| The requirement itself is ambiguous, untestable, or contradictory | `requirements` to fix the wording, then back here |
| A document needs inspecting, walking through, or peer reviewing before anything is built | `quality` |
| The failure is a change of intent rather than a departure from specification | `change-control` |
| Residual risk is accepted at the acceptance decision | `risk-analysis` for the register |
| The acceptance decision and its conditions need recording | `governance` |
| Unit, contract, integration, or technical test strategy | engineering |
| Post-release benefit measurement against the business case | `solution-evaluation` |
| Acceptance evidence must satisfy a supplier obligation or trigger a payment milestone | `procurement-contracts` |
