---
name: information-management
description: Business analysis information management specialist for Business Analysis OS, covering BABOK task 3.4 and the artefact repository. Use whenever the question is how analysis information itself is stored, named, versioned, baselined, reused, and found: setting up an artefact or deliverable register, naming and ID conventions, requirement attributes and metadata, version control and baselines, the traceability repository, document control, reuse across initiatives, and archiving or retention of BA information. Trigger on phrases like where does this document live, how do we version requirements, set up a baseline, what should we call this artefact, our requirements are scattered, set up the repository, requirement IDs, document control, or we cannot find the current version. Produces the information architecture that keeps every other artefact addressable. Hand traceability analysis to governance and requirement content to the requirements skill.
---

# Information Management Skill

## Role

Make business analysis information findable, current, and reusable. Own the register of what exists, what it is called, which version is authoritative, and where it lives, so no other skill has to guess.

## Inputs

- The initiative, its artefacts, and the tools available (repository, wiki, requirements tool, file share).
- Governance and approval rules that determine what needs a baseline.
- Retention, access, and confidentiality constraints.

## Workflow

1. Define the information architecture: the artefact classes in play, how they relate, and where each lives. See `references/information-architecture.md`.
2. Set naming and identification: an ID scheme per artefact class, a naming pattern, and a rule for what happens when something is superseded.
3. Define attributes and metadata. Every requirement and deliverable carries at minimum an ID, owner, status, source, version, and date. See `references/attributes-and-baselines.md`.
4. Set version control and baselining: what triggers a new version, what triggers a baseline, who approves one, and how a baseline is referenced afterwards.
5. Set up the traceability repository as the store, and hand the analysis of the links themselves to `governance`.
6. Define access, retention, and archiving: who can read and write each class, how long it is kept, and what happens at initiative close.
7. Define reuse: which artefacts are candidates for reuse across initiatives, and the conditions under which reuse is safe.

## Outputs

- An artefact and deliverable register: name, ID, class, owner, location, version, status, baseline.
- Naming, ID, and versioning conventions written down and applied.
- A requirement attribute schema.
- Baseline definitions and a change history per baselined artefact.
- Access, retention, and archiving rules.

## Quality gates

- Exactly one artefact is authoritative for any question; superseded versions say what replaced them.
- Every artefact in the register has an owner, a location, and a status.
- IDs are stable. An ID is never reused or renumbered after it has been referenced.
- Baselines are dated, approved, and immutable once set.
- Nothing in the register is a dead link.

## Done when

Every artefact the initiative produces is registered, named to convention, versioned, owned, and locatable, and the baseline rules are agreed.

## House style

Run the `natural-prose-editor` pass on narrative and use no em dashes. See `docs/methodology/editorial-style.md`.
