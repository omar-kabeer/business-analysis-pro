# Coverage Report: business-architecture

Upgraded under `skills/skill-upgrader/references/upgrade-spec.md`. Sixth skill in the alphabetical pass, an enterprise-frame skill in Batch 1. Anchors: Perspective 11.4 and techniques 10.6, 10.32, 10.41. Neighbours: business-analysis, architecture, process-modelling, strategy.

## What changed

The old skill was already close to standard: it held the enterprise altitude, listed the blueprints, and had sound quality gates. Three things fell short of the spec. The description over-claimed by naming SCOR and value reference models the skill has no source for, and named customer journey maps that belong to ux. There was no quality reference, so nothing told a reader what separates a weak blueprint from a strong one. And the reference frameworks were named but never explained, including the TOGAF source trap.

The rewrite narrows the description to the blueprints the skill can actually ground, makes the heat-map second axis an explicit workflow step and gate, and adds two references: `frameworks.md` for how and when to apply TOGAF ADM Phase B, ArchiMate, Zachman, and the APQC PCF, and `failure-modes.md` for the anti-patterns and rubric pointers. `sources.md` now records the three verified standards, the BABOK anchors, and the reason the TOGAF presentation is not cited. References went from two files to four.

## Coverage table

| Obligation | Anchor | Status before | Where covered after | Note |
| --- | --- | --- | --- | --- |
| Business architecture blueprints | BABOK 11.4 | Listed | SKILL.md, architecture-blueprints.md | Owned end to end; deep single-blueprint work routed to the owning skill |
| Business capability map | Technique 10.6 | Covered | SKILL.md 3, architecture-blueprints.md | Naming and MECE rules kept; three-level cap added |
| Capability heat-mapping | Technique 10.6 | Thin | SKILL.md 4, failure-modes.md | Second axis, importance and performance, made an explicit step and gate |
| Value stream mapping | BABOK 11.4 value mapping | Covered | SKILL.md 5 | Customer trigger to value received; cross-mapped to capability |
| Organisational map and charts | Technique 10.32 | Covered | SKILL.md 6 | Functional, matrix, soft; units, roles, interfaces |
| Information map | BABOK 11.4 | Covered | SKILL.md 6 | Retained |
| Enterprise core diagram | BABOK 11.4 | Covered | SKILL.md 6 | Retained |
| Scope modelling | Technique 10.41 | Absent | SKILL.md 6 | Added: scope the enterprise boundary of control, need, solution, change |
| Business motivation model | BABOK 11.4, BMM 1.3 | Covered | SKILL.md 1 | Motivation-first retained; BMM standard now cited |
| Transition-state roadmap | BABOK 11.4 | Covered | SKILL.md 7 | Each transition state independently viable |
| Portfolio view | BABOK 11.4 | Covered | SKILL.md 8 | Judged by the project-portfolio-analysis rubric |
| Reference frameworks | BABOK 11.4 | Named only | frameworks.md | TOGAF ADM Phase B, ArchiMate, Zachman, APQC; selection and caution |
| TOGAF source | opengroup-togaf-presentation-2003 | Cited loosely | sources.md, frameworks.md | Not cited: unverified 2003 presentation, not the standard |
| Customer journey map | BABOK 11.4 and 11.3 | Claimed | Removed | Enterprise journey framing stays; the journey-map artefact belongs to ux |
| SCOR, value reference model | None in library | Claimed | Removed | No source; claim dropped rather than left unsupported |

No row remains at absent without a decision.

## Boundary resolution: Perspective 11.4 ownership

The architecture and business-analysis reports flagged the same recurring conflict: register rows for the enterprise core diagram, capability map, organisational map, information map, and Service-Oriented Analysis are assigned in places to business-analysis or architecture, while Perspective 11.4 is assigned wholly to business-architecture. This upgrade takes the resolution those reports proposed: all Perspective 11.4 blueprint artefacts are owned here. business-analysis keeps deep single-capability current-state assessment at the initiative level and hands the enterprise capability map here. architecture keeps solution-level technical design and hands the enterprise core diagram here. process-modelling keeps process decomposition and hands the value-stream-to-capability cross-map here. Recommend the register drop the business-analysis and architecture assignments on the 11.4 rows.

## Open items

- No curated papers for this skill. It is grounded but not deep on capability-based planning practice. Add papers under `sources/papers/business-architecture/` and deepen `architecture-blueprints.md` and `frameworks.md` in a later pass.
- The TOGAF standard is not in the verified library. A real TOGAF conformance claim needs the standard obtained and verified first.

## Second-pass review

Deferred: run the `deliverable-critic` agent on the SKILL body and the `quality` skill on the reference set, and record both verdicts here before the batch's consolidated summary.
