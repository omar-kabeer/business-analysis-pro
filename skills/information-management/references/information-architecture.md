# Business Analysis Information Architecture Reference

## The vocabulary

BABOK distinguishes four terms that teams usually blur. Keeping them apart is what makes a register useful.

- Artifact: anything produced or used during the work, whether or not anyone asked for it. Meeting notes are an artefact.
- Work product: something produced by the analysis work itself, used mainly by the analyst.
- Deliverable: a work product formally handed to a stakeholder, usually with acceptance attached.
- Requirements artifact: an artefact that carries requirement content and therefore inherits versioning and traceability duties.

Rule of thumb: every deliverable is a work product, every work product is an artefact, and only deliverables need sign-off.

## Artefact classes and where they live

| Class | Examples | Home | Baselined |
| --- | --- | --- | --- |
| Approach and plan | BA approach, stakeholder engagement approach, governance approach | Repository, docs | On approval |
| Elicitation record | Interview notes, workshop outputs, survey results, observation notes | Repository, dated folder | No, but immutable once confirmed |
| Analysis model | Current state, capability map, process models, data models, decision models | Repository plus modelling tool | At milestone |
| Requirement | BRD, FRD, SRS, NFR spec, user stories, business rules | Requirements tool | Yes |
| Design | Design options, architecture views, prototypes, interface specs | Repository plus design tool | At option selection |
| Governance record | RAID, risk register, decision log, change records, traceability matrix | Governance store | No, append-only |
| Evaluation | Performance measures, assessments, lessons learned | Repository | No |

## Naming and identification

- ID pattern: `CLASS-INITIATIVE-NNN`, for example `REQ-PAY-014`, `RISK-PAY-007`, `DEC-PAY-003`.
- Numbers are allocated once and never reused. A deleted requirement becomes status `withdrawn`, keeping its number.
- File names carry no version number. The repository holds versions. A file called `brd-v3-final-FINAL2.docx` is a failure of this skill.
- Names describe content, not process stage: `payments-current-state`, not `draft-for-review`.

## Single source of truth

For every recurring question, name the one artefact that answers it. Write that mapping down. When two artefacts both claim to answer a question, either merge them or demote one to a view of the other with a link.

## Retention and archiving

- Set retention by class, and inherit any regulatory retention from `regulatory-compliance` rather than choosing a number.
- At initiative close, archive the baselined set plus the decision log and lessons learned. Working drafts do not need to survive.
- Record what was archived, where, and under whose authority.

## Reuse

Good reuse candidates: glossaries, business rules, data dictionaries, NFR catalogues, personas, process models of stable processes, compliance obligation registers.

Poor reuse candidates: anything whose value depended on a point in time, such as current state assessments, market data, or estimates.

Before reuse, check three things: is it still current, was it approved, and does the new context share the assumptions the original made.
