# Information Management Playbook

How to store, identify, version, relate, and retire business analysis information so that anyone can find the current version, see how it relates to everything else, and trust what it says. This playbook applies BABOK Plan Business Analysis Information Management (3.4), Trace Requirements (5.1), Maintain Requirements (5.2), and the technique Item Tracking (10.26). Data governance practice follows COBIT 2019 (`cobit-2019`, managed data APO14); information classification and retention follow ISO/IEC 27001 (`iso-27001-2022`).

## When this playbook applies

Use it at the start of any initiative that will produce more than a handful of artefacts, and whenever someone cannot find the latest version, asks which requirements a change touches, or needs to reuse analysis from earlier work. It governs the analysis information itself, not the business data the solution will hold.

## Step 1: Decide the organisation and the repository

Choose where information lives and how it is organised (3.4): one repository, with a structure the team agrees, for example by initiative, then artefact type. Record the choice in the information management approach (`templates/information-management-approach.md`). Duplicated copies in email and personal drives are the root of most version confusion; the repository is the single source, and everything else links to it.

## Step 2: Set identifiers and naming rules

Give every managed item a unique, stable identifier with a type prefix: BRQ- for business requirements, SR- for stakeholder requirements, FR- for functional, NFR- for non-functional, BR- for business rules, DEC- for decisions, RSK- for risks. Identifiers never change and are never reused, even when an item is deleted. Names describe content ("FR-021 Route invoice by cost centre"), not status ("FR-021 final v2").

## Step 3: Define the attributes

Decide which attributes each item carries and why each one earns its place. A common core:

| Attribute | Purpose |
| --- | --- |
| Identifier | Unique, stable reference |
| Status | Proposed, approved, implemented, verified, retired |
| Owner | Who answers questions about it |
| Source | Where it came from |
| Priority | Relative importance |
| Version | Which revision this is |
| Stability | How likely it is to change |

Add attributes only when someone will use them. Every attribute is a maintenance cost; unused attributes rot and mislead. The reference `attributes-and-baselines.md` covers the full set.

## Step 4: Version and baseline

Version every item and record what changed, who changed it, and why. A baseline is an agreed, approved snapshot of a set of items at a point in time, used as the reference for change control. Take a baseline at each approval point (for example, when the sponsor signs the BRD), and route every later change to a baselined item through change assessment (5.4). Without baselines, "what did we agree" becomes a matter of memory.

## Step 5: Trace

Record relationships between items (5.1): which business requirement a stakeholder requirement derives from, which solution requirement satisfies it, which design implements it, and which test verifies it. Trace at the level that pays: one level up and one level down for most items, more for regulated or safety-related ones. Keep the matrix current as items change (`templates/requirements-traceability-matrix.md`); a traceability matrix built at the end of a project is a record, not a tool.

## Step 6: Classify, protect, and retain

Classify each artefact by sensitivity (public, internal, confidential, restricted) and apply access accordingly, following the information classification and handling controls of ISO/IEC 27001. Record retention: how long each type of artefact is kept and when it is archived or destroyed. Interview notes with personal data, for example, need a shorter retention and tighter access than a published process model.

## Step 7: Maintain for reuse

Maintain requirements so they stay correct and reusable after the project (5.2): keep approved items current, mark retired items rather than deleting them, and tag items that could be reused elsewhere (for example, a business rule that applies across processes). Keep the artefact register (`templates/artefact-register.md`) current, so a newcomer can see what exists, where, in what state, and who owns it.

## Stop rules

Information management is sufficient when there is one agreed repository, identifiers and naming rules are applied, each attribute kept has a user, baselines exist at approval points, traceability is current at the agreed depth, sensitive artefacts are classified with retention set, and the register lists what exists.

## Common failures

- Identifiers reused or renumbered, breaking every trace.
- Status carried in file names ("final_final_v3").
- Attributes defined up front and never maintained.
- No baseline, so change control has nothing to compare against.
- Interview notes with personal data kept forever in a shared folder.

## Worked example

Supplier invoice approval: information management approach.

Repository: one project space, organised by artefact type, with the BRD, FRD, models, and logs; email attachments link to it rather than carrying copies.

Identifiers: BRQ-, SR-, FR-, NFR-, BR-, CR-, DEC-, RSK-, TC-; never reused. FR-017 was withdrawn in June and stays in the register marked Retired, so FR-018 onward keep their references.

Attributes kept for requirements: identifier, status, owner, source, priority (MoSCoW), version, and stability. A "complexity" attribute was proposed and dropped because no one would use it.

Baselines: BL-1 when the sponsor approved the BRD on 12 June; BL-2 when the FRD was approved on 20 June. Change CR-004 (mobile approval) was assessed against BL-2.

Traceability depth: one level up and down for most items; full depth, from obligation through requirement and design to test, for the segregation-of-duties control, because it is audited.

Classification and retention: interview notes are confidential, restricted to the analysts, and destroyed 12 months after the project closes; approved requirements are internal and retained for the life of the system.

## Sources

- `babok-3.0-2015`: tasks 3.4, 5.1, 5.2, and 5.4 and technique 10.26.
- `cobit-2019`: managed data (APO14) for ownership, quality, and life cycle.
- `iso-27001-2022`: information classification, labelling, access, and retention controls.
