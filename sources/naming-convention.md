# Source Naming Convention

The problem this solves is that a source library is referenced from three places at once: the index, the manifest, and the `sources.md` file inside every upgraded skill. If a file is called `ISO 9241-210-2010.pdf` in one place and "the human-centred design standard" in another, nothing can be checked automatically and a rename silently breaks every citation downstream.

The convention fixes one rule: **the filename stem is the source id, and the id is what everything else refers to.**

## Filename rule

```
<designation>[-<part>][-<version>][-<year>].<ext>
```

Lowercase. ASCII only. Words separated by hyphens. No spaces, parentheses, underscores, or capitals. Version numbers keep their dots, so `bpmn-2.0.pdf` and `wcag-2.1.pdf` are correct and `bpmn-2-0.pdf` is not.

The stem must match `^[a-z0-9][a-z0-9.-]*$`.

| Instead of | Use | Why |
| --- | --- | --- |
| `ISO 9241-210-2010.pdf` | `iso-9241-210-2010.pdf` | Spaces and capitals break shell and URL handling |
| `APQC-Process-Classification-Framework-(PCF).pdf` | `apqc-pcf.pdf` | Parentheses need quoting everywhere; the long form belongs in the manifest title |
| `information-security-management-iso-iec-27001-2022.pdf` | `iso-27001-2022.pdf` | The id should be the shortest string that identifies the standard |
| `The_Minto_Pyramid_Principle_-_Barbara_Minto.pdf` | `minto-pyramid-principle.pdf` | Author goes in the manifest, not the filename |
| `crisp-dm1.0.pdf` | `crisp-dm-1.0.pdf` | Version is always hyphen-separated from the designation |

Publisher, author, full title, year, and licence live in the manifest. Putting them in the filename makes the id long, unstable, and wrong as soon as one of them turns out to be misremembered.

## Naming by tier

**BABOK.** One file, `babok/babok-3.0-2015.pdf`.

**Standards.** Designation first. Drop the issuing body unless it disambiguates: `bpmn-2.0`, `uml-2.5`, `dmn-1.3`, `wcag-2.2`. Keep the body where the designation alone is ambiguous or where it is how practitioners refer to it: `iso-31000-2018`, `apqc-pcf`. ISO deliverables drop the `iec` and `ieee` co-branding from the id and keep it in the manifest title, so `iso-29148` rather than `iso-iec-ieee-29148`.

**Multi-file sets** get a directory named as the id, with plainly named members inside: `standards/cobit-2019/executive-summary.pdf`. The manifest holds one record for the directory.

**Practice.** Author surname first when the work is known by its author, `minto-pyramid-principle`. Otherwise the subject, `agile-practice-guide`, `invest-criteria`.

**Papers.** `papers/<skill-name>/<author>-<year>-<topic>.pdf`, for example `papers/estimation/jorgensen-2004-effort-estimation-review.pdf`. Papers are the one tier where author and year belong in the filename, because that is how they are cited.

## Provisional ids

A source that cannot be identified gets a provisional id with a trailing letter, `crisp-dm-a`, `crisp-dm-b`, and a manifest note saying so. This is deliberately awkward to read. A provisional id in the library is a visible defect, and the generator reports the count so it does not quietly become permanent.

## The manifest

`manifest.json` is the register. One record per source, keyed by id, carrying the title, publisher, version, year, tier, path, citation locator style, licence position, and the skills the source serves.

Licence position is one of `open`, `free-to-obtain`, `licensed-copy`, `restricted`, or `unknown`, with a separate `verified` flag. `unknown` or `verified: false` means the source may be read but not yet cited. The generator counts these and the upgrade sessions are expected to respect them.

The `skills` array is the mapping that makes shared sources work. A standard serving four skills is stored once and lists four skills. `"skills": ["*"]` means every skill, which only BABOK uses.

## The generator

```bash
npm run sources:index
```

`scripts/build-source-index.mjs` reads the manifest, walks `sources/`, and rewrites the generated tables in `index.md` between the `<!-- generated:... -->` markers. Prose outside those markers is hand-written and is left alone.

It fails on a file present on disk with no manifest record, a manifest record whose path does not exist, a filename that breaks the stem rule, an id that does not match its filename, or a skill name that does not exist under `skills/`. Those five checks are the whole point: they are what stops the library and the index drifting apart between sessions.

Run it after adding sources and before starting an upgrade batch.

## Why this makes the system dynamic

A skill's `sources.md` cites by id. The generator knows which skills each id serves, so it can answer the two questions that matter at the start of a batch without anyone counting by hand: what sources does this skill have, and which of them are safe to cite. When a file is renamed or replaced, the manifest record changes in one place and every dependent view follows.
