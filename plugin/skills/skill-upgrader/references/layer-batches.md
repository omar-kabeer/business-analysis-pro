# Layer Batches and Skill Anchors

Nine working sessions. Skills are batched by MECE layer so that the ones sharing sources and boundaries are upgraded together and stay consistent with each other.

Anchors are the BABOK v3 locators the skill must cover. Neighbours are the skills whose boundary must be checked in both directions.

## Batch 0. Pilot and library

Set up `sources/`, write `sources/index.md`, then upgrade one skill end to end to prove the spec. Recommended pilot: `risk-analysis`, because it has clean BABOK anchors, a deep external literature, and three live boundaries. Review the result, adjust `upgrade-spec.md` if needed, then start Batch 1.

## Batch 1. Frame (4 skills)

| Skill | BABOK anchors | Neighbours |
| --- | --- | --- |
| ba-planning | 3.1 to 3.5, techniques 10.19, 10.27, 10.33 | information-management, governance, risk-analysis, orchestrator |
| business-analysis | 6.1, 6.2, 6.4, techniques 10.6, 10.9, 10.11, 10.22, 10.23, 10.40 | business-architecture, requirements, process-modelling, strategy |
| strategy | 6.1 to 6.4, techniques 10.3, 10.8, 10.20, 10.46 | business-analysis, business-architecture, finance, decision-analysis, market-research |
| business-architecture | Perspective 11.4, techniques 10.6, 10.32, 10.41 | business-analysis, architecture, process-modelling, strategy |

Shared sources: strategy and enterprise architecture literature, capability-based planning, TOGAF ADM Phase B, ArchiMate, BMM, APQC PCF.

## Batch 2. Input and evidence (3 skills)

| Skill | BABOK anchors | Neighbours |
| --- | --- | --- |
| elicitation | 4.1 to 4.5, techniques 10.5, 10.10, 10.21, 10.25, 10.31, 10.43, 10.45, 10.50 | document-analysis, ux, requirements, communication |
| document-analysis | Technique 10.18, guideline items on existing BA information and domain knowledge | elicitation, business-analysis, regulatory-compliance, information-management |
| market-research | Technique 10.4, 10.46, Perspective inputs to 6.1 and 6.2 | strategy, finance, product-manager |

Shared sources: requirements elicitation research, interview and survey methodology, qualitative coding and synthesis, competitive intelligence method.

## Batch 3. Specify (5 skills)

| Skill | BABOK anchors | Neighbours |
| --- | --- | --- |
| requirements | 7.1 to 7.4, 5.1 to 5.5, Chapter 2 classification schema, techniques 10.1, 10.24, 10.30, 10.47, 10.48 | quality, acceptance-testing, change-control, information-management, product-owner |
| product-manager | Perspective 11.1, techniques 10.2, 10.28, 10.33 | product-owner, strategy, market-research, ux |
| product-owner | Perspective 11.1, techniques 10.1, 10.2, 10.33, 10.48 | product-manager, agile-coach, quality, acceptance-testing, estimation |
| agile-coach | Perspective 11.1 | product-owner, product-manager, ba-planning |
| ux | Techniques 10.36 context, 10.43, Perspective 11.3 | prototyping, requirements, product-manager |

Shared sources: requirements engineering literature, INVEST and story research, product discovery practice, WCAG, usability and design research method.

## Batch 4. Represent (7 skills)

| Skill | BABOK anchors | Neighbours |
| --- | --- | --- |
| visual-modelling | Section 6 representation forms, all named diagram forms in Section 7 | every modelling skill |
| process-modelling | Techniques 10.34, 10.35, 10.22, Perspective 11.5 | visual-modelling, business-architecture, requirements, data-modelling |
| data-modelling | Techniques 10.11, 10.12, 10.13, 10.15, 10.39 | data-analysis, business-intelligence, visual-modelling, architecture |
| data-analysis | Techniques 10.14, 10.28, 8.1, 8.2 | data-modelling, business-intelligence, solution-evaluation |
| business-intelligence | Perspective 11.2 | data-modelling, data-analysis, dataviz |
| architecture | 7.4, 7.5, techniques 10.24, 10.42, 10.44, Perspective 11.3 | business-architecture, requirements, data-modelling |
| prototyping | Technique 10.36 | ux, requirements, architecture |

Shared sources: BPMN 2.0 and UML specifications, data modelling texts, dimensional modelling, prototyping and usability research, notation standards.

## Batch 5. Decide (5 skills)

| Skill | BABOK anchors | Neighbours |
| --- | --- | --- |
| decision-analysis | Techniques 10.16, 10.17 | strategy, finance, vendor-evaluation, governance |
| estimation | Technique 10.19, WBS in Section 8 | finance, product-owner, change-control |
| finance | Techniques 10.7, 10.20, 6.2 potential value, 7.6 | estimation, decision-analysis, market-research, executive-review |
| vendor-evaluation | Technique 10.49, RFI and RFP in Section 8 | procurement-contracts, decision-analysis, requirements |
| procurement-contracts | Section 8 procurement and agreement documents, SLA and SOW | vendor-evaluation, regulatory-compliance, acceptance-testing |

Shared sources: multi-criteria decision analysis, decision model and notation, estimation research and forecasting literature, investment appraisal, procurement and contract practice.

## Batch 6. Evaluate (3 skills)

| Skill | BABOK anchors | Neighbours |
| --- | --- | --- |
| quality | 7.2, 7.3, technique 10.37, requirement quality characteristics | acceptance-testing, requirements, executive-review |
| acceptance-testing | 7.2, 7.3, technique 10.1, UAT and review sub-forms in Section 9 | quality, requirements, product-owner, procurement-contracts |
| solution-evaluation | 8.1 to 8.5, technique 10.27 | data-analysis, finance, business-analysis |

Shared sources: verification and validation research, inspection and review effectiveness studies, benefits realisation literature, test design method.

## Batch 7. Control (5 skills)

| Skill | BABOK anchors | Neighbours |
| --- | --- | --- |
| risk-analysis | 6.3, technique 10.38 | governance, change-control, finance, regulatory-compliance |
| change-control | 5.4, impact analysis element | governance, requirements, estimation, information-management |
| regulatory-compliance | Guideline items on business policies and legal and regulatory information across 3, 5, 6, 7 | risk-analysis, requirements, procurement-contracts, information-management |
| information-management | 3.4, 5.1 traceability repository, requirements attributes and baselines in Section 9 | governance, ba-planning, change-control, requirements |
| governance | 3.3, 5.1, 5.2, 5.5, technique 10.26 | risk-analysis, change-control, information-management, quality |

Shared sources: risk management standards, configuration and change management practice, regulatory frameworks relevant to the user's sectors, records management.

## Batch 8. Communicate (7 skills)

| Skill | BABOK anchors | Neighbours |
| --- | --- | --- |
| communication | 4.4, 4.5, packaging artefacts in Section 6 | executive-review, technical-writer, orchestrator |
| executive-review | 7.6 recommendation framing, business case presentation | communication, finance, quality |
| technical-writer | Documentation practice | communication, information-management |
| proposal-writer | RFP response, business case document | finance, executive-review, procurement-contracts |
| natural-prose-editor | House style | all prose-producing skills |
| prompt-master | No BABOK anchor | none |
| orchestrator | Routing across all skills | all |

Upgrade orchestrator last in this batch, after every other skill is final, so the routing map and boundary rules reflect the finished set.

## Batch 9. Consolidation

Not a skill upgrade. Cross-cutting pass:

1. Re-derive the coverage check against the 410-row register and confirm it still resolves fully.
2. Reconcile every boundary conflict raised during the batches.
3. Rebuild `docs/babok-coverage.md` and the routing map from the final state.
4. Sweep the templates, checklists, frameworks, and evaluation folders for anything the upgraded skills now reference but that does not exist.
5. Bump the version, update the README, and tag the release.

## Session rules

- One batch per session. Do not start a batch you cannot finish, because half-upgraded layers leave boundaries inconsistent.
- Upgrade the skills in a batch in the order listed. The first in each list is usually the one the others defer to.
- Commit per skill, on a branch per batch, so a weak skill can be reverted without losing the batch.
- Carry the open items and boundary conflicts forward into the next session's opening context.
