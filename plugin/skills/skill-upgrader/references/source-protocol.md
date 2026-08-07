# Source Protocol

How to use the curated source library so the upgraded skills rest on evidence rather than recall.

## Standards are conformance criteria, not citation sources

The library exists so that outputs pass the standards that govern them, not so that skills can cite impressive documents. A process model is not good because it references BPMN 2.0. It is good because it is valid BPMN 2.0. A requirement statement is not good because it mentions ISO/IEC 29148. It is good because it satisfies the characteristics that standard sets.

This changes what an upgrade session must produce. For every normative standard in a skill's scope, extract the obligations as **testable checks**: what the artefact must contain, what it must not do, and how a reviewer confirms it. A check a reviewer cannot apply is not a check, it is a paraphrase.

`manifest.json` records which artefact types each standard gates, in `constrains`. Read the generated artefact table in `index.md` to see, for any artefact type, which standards decide whether it passes.

Three authority levels control what a source may do. `normative` gates output. `supporting` informs method but decides nothing. `illustrative` is background only and may never be presented as authority. Check `identityVerified` before relying on any source: several files in this library turned out not to be the documents their filenames claimed, including a conference slide deck filed as the TOGAF standard.

## Library layout

The library lives outside the distributable plugin, at the repository root.

```
sources/
  babok/
    babok-3.0-2015.pdf
  standards/            BPMN, UML, DMN, BMM, ISO, WCAG, TOGAF, ArchiMate, COBIT
  papers/
    <skill-name>/       papers curated for that skill
  practice/             practitioner books and industry reports
  manifest.json         the register of record, one entry per source
  index.md              generated from the manifest, do not hand-edit the tables
  naming-convention.md  filename and id rules
  standards-mapping.md  which standards each of the 39 skills should rest on
```

Filenames follow `naming-convention.md`: the filename stem is the source id, and skills cite by id so a rename cannot silently break a citation. Run `npm run sources:check` before a batch. It fails on unregistered files, missing paths, bad filenames, and unknown skill names.

Never cite a source whose manifest record has `verified: false`. Read it if useful, but the licence position is unsettled and the claim is not yet safe to attribute.

Before a batch, confirm every skill in it has at least three items under `papers/<skill-name>/` or a documented reason it does not. A skill upgraded from BABOK alone will be correct and shallow.

## Reading order

1. **Anchors first.** Read the BABOK sections listed for the skill in `layer-batches.md`. These establish what the skill must cover. Extract obligations, not prose.
2. **Register cross-check.** Confirm against `docs/babok-coverage.md` that every artefact family assigned to this skill appears in the coverage table.
3. **Method depth.** Read the curated papers and standards for how the work is actually done well: selection criteria, thresholds, failure modes, and evidence about what works.
4. **Current practice.** Read the practitioner material for how the technique has moved since 2015, where BABOK is dated, and what tooling has changed.
5. **Neighbours.** Skim the SKILL.md of every neighbouring skill so the boundary is drawn from what they actually say, not from what you assume.

## Citation and copyright

- Paraphrase BABOK. Do not reproduce definitions, tables, or task descriptions at length. Short quoted fragments for a defined term are acceptable; sections are not.
- Cite by locator: `BABOK 6.3`, `technique 10.38`, `Glossary: requirements package`. A reader with the guide should be able to find it in one step.
- For papers, cite author, year, and title. For standards, cite the standard and clause.
- Where the skill states a threshold, a percentage, or an empirical claim, the source is named in `sources.md`. An unattributed number is a liability.
- Where guidance is reasoned practice rather than sourced, say so in the text. Labelled judgement is credible; unlabelled judgement is not.

## sources.md format

Each skill folder carries one.

```markdown
# Sources

## BABOK v3 anchors
| Anchor | What it establishes | Where used |
| --- | --- | --- |
| 6.3 Assess Risks | Task inputs, outputs, and elements for risk assessment | SKILL.md workflow, risk-scoring.md |

## Standards
| Standard | Clause | Contribution |

## Papers and practice
| Source | Year | Contribution | Where used |

## Deliberately not used
| Source | Reason |
```

The last table matters. Recording what you read and rejected stops the next pass re-reading it.

## Handling conflict between sources

- BABOK sets the vocabulary and the artefact set. Where the literature disagrees with BABOK on method, the literature usually wins on method and BABOK still wins on naming.
- Where two credible sources disagree materially, present both with the condition under which each applies. Do not average them.
- Where BABOK is visibly dated (tooling, agile practice, data and AI), say so explicitly in the reference file rather than reproducing a 2015 position as current.

## Evidence discipline

Separate three things in every reference file, and never blur them:

1. What the source says, cited.
2. What that implies for this skill, labelled as inference.
3. What we instruct the agent to do, which is the instruction itself.

A reader who cannot tell which is which cannot check the work, and the next upgrade pass will not know what is safe to change.
