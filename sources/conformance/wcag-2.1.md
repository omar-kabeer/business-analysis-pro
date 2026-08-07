# Conformance checks: wcag-2.1

Source id: `wcag-2.1`
Standard: Web Content Accessibility Guidelines (WCAG) 2.1.
Edition held: W3C Recommendation (this copy 06 May 2025 republication of WCAG 2.1).
Publisher: W3C.
Authority: normative.
Identity: confirmed from the header on 2026-08-07. WCAG 2.1, W3C Recommendation.
Licence: open, redistributable (W3C document licence).
Modality note: WCAG 2.1 is normative and uses RFC 2119 MUST. Section 5.2 states that for a web page to conform, all five conformance requirements must be satisfied. These map cleanly to blocking checks. Conformance is defined at three levels (A, AA, AAA); the OS house target is AA, consistent with requirement-quality guidance.
Version relationship: WCAG 2.2 is additive over 2.1 and shares this conformance model. A page conforming to 2.2 also conforms to 2.1. See `wcag-2.2` for the delta and the applicability condition between the two. This is recorded as a version conflict in gap-analysis, not resolved here.
Applicability to design artefacts: WCAG conformance is defined for web pages. A `published-page` is tested against all five requirements directly. A `ui-design` or `prototype` is a design artefact, not a live page, so it is tested against the success criteria that are determinable at design time and against not precluding the runtime-only requirements.
Artefact types constrained: `ui-design`, `prototype`, `published-page`.
Owning skills: `ux`, `prototyping`.
Locator style: WCAG 2.1 SC `<n.n.n>` or clause `5.2.x`.

## How to read this file

Three layers, kept separate. Source (S) with locator, labelled Inference (I), and the Check (C). The success criteria list itself is the detailed checklist a reviewer applies; the checks below gate the conformance model around it.

## Checks: published-page

Applies to a delivered, live web page.

| Check id | Question (yes = pass) | Severity | Locator | How the reviewer confirms |
| --- | --- | --- | --- | --- |
| WCAG21-PP-01 | Does the page satisfy every Level A and Level AA success criterion, or provide a conforming alternate version? | blocking | 5.2.1 | Run the page against the WCAG 2.1 Level A and AA success criteria (automated tools plus human evaluation). Any unmet A or AA criterion fails. |
| WCAG21-PP-02 | Does the whole page conform, including each responsive variation it presents, with no part excluded? | blocking | 5.2.2 | Confirm no region is carved out of the claim and that each screen-size variation conforms. A page conforming only in part fails. |
| WCAG21-PP-03 | If the page is one step of a multi-page process, do all pages in that process conform at the same level or better? | blocking | 5.2.3 | Trace the process end to end (for example a checkout flow). If any page in the sequence fails AA, the process fails. |
| WCAG21-PP-04 | Are only accessibility-supported ways of using technologies relied upon to satisfy the criteria, with any non-supported information also available in a supported way? | blocking | 5.2.4 | Confirm the technologies relied on are accessibility-supported and that nothing essential is available only through a non-supported technique. |
| WCAG21-PP-05 | Does non-relied-upon technology not block access, and does the page meet 1.4.2, 2.1.2, 2.3.1, and 2.2.2 across all content? | blocking | 5.2.5 | Test with non-relied technologies on, off, and unsupported. Confirm audio control, no keyboard trap, three-flash threshold, and pause/stop/hide across all content. |
| WCAG21-PP-06 | If a conformance claim is published, does it carry all five required components (date; guidelines title, version, and URI; level; page description; technologies relied upon)? | advisory | 5.3.1 | Claims are optional; if one exists, check it lists all five components. Absent a claim, not applicable. |

## Checks: ui-design and prototype

Applies to a UI design or prototype, before implementation.

| Check id | Question (yes = pass) | Severity | Locator | How the reviewer confirms |
| --- | --- | --- | --- | --- |
| WCAG21-DS-01 | Does the design satisfy the Level A and AA success criteria determinable at design time (text and non-text contrast, information and relationships, meaningful sequence, visible labels and names, keyboard operability and focus order, focus visibility, target and pointer criteria, reflow and text spacing)? | blocking | 5.2.1 via the named SC | Apply the listed success criteria to the design. Contrast, labelling, focus order, and target size are all determinable from a static design; any failure fails the check. |
| WCAG21-DS-02 | Does the design avoid choices that would preclude the runtime-only conformance requirements (accessibility-supported technologies, non-interference)? | blocking | 5.2.4, 5.2.5 | Confirm the design does not depend on an inaccessible interaction or technology that could not later be made accessibility-supported. |
| WCAG21-DS-03 | Does the design record its target conformance level (AA) and the success criteria it is designed to meet? | advisory | 5.2.1 | Look for a stated accessibility target on the design. Advisory documentation check. |

### Provenance

- PP-01. S: In order for a web page to conform, all conformance requirements must be satisfied (5.2). One of the levels is met in full: for Level AA, the page satisfies all Level A and Level AA success criteria, or a conforming alternate version is provided (5.2.1). I: We set AA as the house target. The success criteria are the checklist.
- PP-02. S: Conformance is for full web pages only and cannot be achieved if part of a page is excluded; each responsive variation must conform (5.2.2). I: none.
- PP-03. S: When a page is one of a series presenting a process, all pages in the process conform at the specified level or better (5.2.3). I: none.
- PP-04. S: Only accessibility-supported ways of using technologies are relied upon to satisfy the success criteria; non-supported information or functionality is also available in a supported way (5.2.4). I: none.
- PP-05. S: Non-relied-upon or non-conforming technology use must not block access to the rest of the page, with the page continuing to meet requirements when such technology is on, off, or unsupported; and 1.4.2, 2.1.2, 2.3.1, and 2.2.2 apply to all content (5.2.5). I: none.
- PP-06. S: Conformance claims are optional, but if made must include date; guidelines title, version, and URI; conformance level; and a description of the pages; and the technologies relied upon (5.3.1). I: Advisory because claims are optional.
- DS-01. S: Level A and AA success criteria define testable conditions; WCAG is designed to be testable with automated testing and human evaluation (5.2.1, Background on WCAG 2). I: A subset of success criteria (contrast, structure, labels, focus, target size, reflow) is determinable from a static design, so we gate a design on those. We do not restate the SC thresholds here; the reviewer applies the SC.
- DS-02. S: Requirements 5.2.4 and 5.2.5 concern runtime technology behaviour. I: A design cannot be tested for these directly, so we gate on the design not precluding them.
- DS-03. S: The conformance level and target frame what the page must meet (5.2.1). I: Advisory documentation of the design's accessibility target.

## Not-testable obligations

| Obligation (paraphrase) | Locator | Why not testable on a finished artefact |
| --- | --- | --- |
| The 13 guidelines provide overall objectives but are themselves not testable; only the success criteria are testable. | WCAG 2 Layers of Guidance | The standard states the guidelines are non-testable framing; the success criteria carry the testable conditions and are covered above. |
| Authors are encouraged to apply advisory techniques and to exceed the achieved level. | Sufficient and Advisory Techniques | Encouragement beyond the success criteria, not a pass-or-fail property. |
| Statements of Partial Conformance (third-party content, language). | 5.4, 5.5 | Optional claim mechanisms for content outside the author's control, not a property the artefact must have. |

## Coverage

- `published-page`: 5 blocking checks (PP-01 to PP-05), 1 advisory (PP-06).
- `ui-design`: 2 blocking checks (DS-01, DS-02), 1 advisory (DS-03).
- `prototype`: same as ui-design (DS-01, DS-02 blocking, DS-03 advisory).

All three constrained artefact types carry at least one blocking check (forward cross-check satisfied). Every check maps to a declared artefact type, no orphans. `wcag-2.2` also constrains these three types; the two are additive, not contradictory. See the version note above and gap-analysis.
