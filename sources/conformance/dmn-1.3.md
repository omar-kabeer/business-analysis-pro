# Conformance checks: dmn-1.3

Source id: `dmn-1.3`
Standard: OMG Decision Model and Notation (DMN).
Edition held: Version 1.3, OMG document formal/2021-01-01 (March 2021).
Publisher: Object Management Group (OMG).
Authority: normative.
Identity: confirmed from the title page on 2026-08-07. DMN 1.3, formal/2021-01-01.
Licence: OMG specification, use and derivative-software licence with notices; paraphrase only.
Modality note: DMN states its notation and decision-table rules with SHALL and MUST, so these map to genuine blocking checks. The three DMN conformance levels (clause 5) are about implementations that execute DMN, not about a delivered diagram or table, so they are recorded as not-testable here.
Artefact types constrained: `decision-table`, `decision-requirements-diagram`.
Owning skills: `decision-analysis` (primary), `process-modelling`.
Locator style: DMN 1.3 clause `<n>`.

## How to read this file

Three layers, kept separate: Source (S) with locator, labelled Inference (I), and the Check (C), answerable yes or no from the finished artefact.

## Checks: decision-requirements-diagram

Applies to a Decision Requirements Diagram (DRD).

| Check id | Question (yes = pass) | Severity | Locator | How the reviewer confirms |
| --- | --- | --- | --- | --- |
| DMN-DRD-01 | Is each element drawn with its DMN shape (Decision: rectangle; Business Knowledge Model: rectangle with two clipped corners; Input Data: stadium/oval; Knowledge Source: document shape; Decision Service: rounded rectangle with heavy border)? | blocking | 6.2.1, Table 1 | Compare each shape to the DMN element shapes. A non-standard or ambiguous shape fails. |
| DMN-DRD-02 | Is each DRG element's Name displayed inside its shape (unless overridden by a DMNLabel, which is then displayed instead)? | blocking | 6.2.1 | Confirm every element is named in-shape. An unnamed element fails. |
| DMN-DRD-03 | Do all connections follow the DMN requirement connection rules, with the requirement type determined by the connected element types, and no requirement terminating in Input Data? | blocking | 6.2.2, 6.2.3, Table 2 | Check each connection against the allowed pairs (information requirement into a Decision from a Decision or Input Data; knowledge requirement into a Decision or Decision Service from a Business Knowledge Model; authority requirement into any element from a Knowledge Source). Any disallowed pair, or an arrow into Input Data, fails. |
| DMN-DRD-04 | If a Decision Service is shown, does its border enclose exactly its encapsulated decisions (and no unrelated decisions or input data), split into output and non-output parts when the output set is smaller? | blocking | 6.2.5 | Applies only when a decision service is drawn. Check the border encloses the right decisions and is divided when required. |
| DMN-DRD-05 | Is each element shown only once, with no decision service rendered both expanded and collapsed in the same DRD? | advisory | 6.2.5 | Scan for duplicated elements. Advisory diagram-hygiene check. |
| DMN-DRD-06 | If the DRD is a partial or filtered view of the DRG rather than the complete graph, is that clear? | advisory | 6.2.4 | A DRD may legitimately be a partial view. Flag an unlabelled partial view as a possible completeness gap. |

## Checks: decision-table

Applies to a DMN decision table.

| Check id | Question (yes = pass) | Severity | Locator | How the reviewer confirms |
| --- | --- | --- | --- | --- |
| DMN-DT-01 | Does the table have defined input clauses, output clauses, and a list of rules? | blocking | 8.3.1 | Confirm inputs, outputs, and rules are all present. A table missing outputs or inputs fails. |
| DMN-DT-02 | Is the hit policy indicated by its single-character marker in the correct cell, and is the marker present whenever rules may overlap (it is optional only for a Unique table)? | blocking | 8.2.10 | Find the hit-policy character (U, A, P, F, C, R, or O). If rules can overlap and no marker is shown, the table fails. Crosstab tables are Unique by definition. |
| DMN-DT-03 | If the hit policy is Unique, are the rules non-overlapping (disjoint)? | blocking | 8.2.10 | Check no two rules can match the same input. An overlapping Unique table fails. |
| DMN-DT-04 | If the hit policy is First or Rule order, are the rules explicitly numbered in sequence? | blocking | 8.2.1, 8.3.1 | Confirm consecutive rule numbers from 1, since meaning depends on order. Unordered First or Rule order tables fail. |
| DMN-DT-05 | If the hit policy is Priority or Output order, is an ordered list of output values provided to set the priority? | blocking | 8.2.5, 8.3.1 | Confirm the output values list exists and is ordered. Priority or Output order with no ordered output values fails. |
| DMN-DT-06 | Is the table complete (an output for every possible input combination), or does it declare a default output for unmatched inputs? | advisory | 5.3, 8.2.11 | Completeness is required only for full automation; check coverage or a declared default output. Flag gaps. |
| DMN-DT-07 | Are input entries valid against the input expression and its input values, with "-" used only to mean irrelevant? | advisory | 8.2.4, 8.2.7 | Spot-check entries against the allowed input values. Advisory. |

### Provenance, decision-requirements-diagram

- DRD-01. S: An implementation that creates and displays decision model diagrams SHALL use the graphical elements, shapes, and markers illustrated in this specification; the element shapes are defined in clause 6.2.1 and Table 1 (Decision rectangle, Business Knowledge Model rectangle with two clipped corners, Decision Service rounded heavy border, etc.) (6.2.1, Table 1, and clause 5.4 statement at line beginning "An implementation that creates and displays"). I: We apply the shape rules to the delivered diagram.
- DRD-02. S: The Name of a Decision (and of a Business Knowledge Model, Decision Service, etc.) MUST be displayed inside the shape unless overridden by the associated DMNDI:DMNLabel, which MUST be displayed instead (6.2.1). I: none.
- DRD-03. S: The rules for connecting elements with requirements are given in Table 2; no requirements may terminate in Input Data; the type of the requirement is uniquely determined by the types of the two elements connected (6.2.2, 6.2.3). I: We gate on connections matching the allowed pairs and on nothing pointing into Input Data.
- DRD-04. S: The Decision Service border SHALL enclose all encapsulated decisions and no other decisions or input data; if the output set is smaller than the encapsulated set, the Decision Service SHALL be divided into two parts (6.2.5). I: Blocking only when a decision service is present.
- DRD-05. S: The same decision service MUST NOT be rendered both expanded and collapsed within the same DRD; the same DMN element may not appear twice in one diagram (6.2.5). I: Advisory diagram hygiene.
- DRD-06. S: A DRG is self-contained, holding all requirements for each Decision; a DRD may present a partial or filtered view (6.2.3, 6.2.4). I: A partial view is legitimate, so advisory; we flag only unlabelled partial views.

### Provenance, decision-table

- DT-01. S: A DecisionTable contains a list of rules (DecisionRule), a list of inputs (InputClause), and a list of outputs (OutputClause) (8.3.1). I: We gate on all three being present.
- DT-02. S: If rules overlap, the hit policy indicator is required to recognize the table type; the hit policy is summarized by a single character in a defined cell; the hit policy SHALL default to Unique, where the indicator is optional; the table type SHALL be clear so the indication is mandatory except for default unique tables (8.2.10). I: none.
- DT-03. S: Decision tables with the Unique hit policy SHALL NOT contain overlapping rules (8.2.10). I: none.
- DT-04. S: If the hitPolicy is FIRST or RULE ORDER, the rules SHALL be ordered, represented by explicit rule numbering; rule numbering is required for F and R tables because meaning depends on sequence (8.2.1, 8.3.1). I: none.
- DT-05. S: For Priority and Output order, the ordered list of output values determines the result (decreasing priority) (8.2.5, 8.3.1). I: We gate on the ordered output-values list being present for these policies.
- DT-06. S: For full automation of decisions, the decision logic must be complete, capable of providing a result for any possible set of input values; tables may specify a default output (5.3 introduction, 8.2.11). I: Completeness is stated as needed for automation, not universally, so advisory; a default output satisfies the unmatched case.
- DT-07. S: The input cell entry "-" means irrelevant; input entries are drawn from the input values (8.2.4, 8.2.7). I: Advisory validity check.

## Not-testable obligations

| Obligation (paraphrase) | Locator | Why not testable on a finished artefact |
| --- | --- | --- |
| An implementation claiming Conformance Level 1, 2, or 3 SHALL comply with clauses 6, 7, 8 (and 9 or 10 for higher levels) and interpret expressions accordingly. | 5.2 (conformance levels) | These constrain a software implementation that executes DMN, not a delivered diagram or table. |
| Implementations SHALL provide facilities for specifying and displaying metamodel properties, and MAY offer partial-view or Listed Input Data options. | 6.2.1, 6.2.4 | Requirements on tool capability, not properties of the artefact under review. |
| The value of a DecisionTable is determined according to the FEEL semantics. | 10.3.2 | Execution semantics of a decision, tested by running it, not by inspecting the static artefact. |

## Coverage

- `decision-requirements-diagram`: 4 blocking checks (DRD-01 to DRD-04), 2 advisory (DRD-05, DRD-06).
- `decision-table`: 5 blocking checks (DT-01 to DT-05), 2 advisory (DT-06, DT-07).

Both constrained artefact types carry at least one blocking check (forward cross-check satisfied). Every check maps to a declared artefact type, no orphans. No other normative source constrains these two types, so no conflict.
