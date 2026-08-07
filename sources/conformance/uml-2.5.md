# Conformance checks: uml-2.5

Source id: `uml-2.5`
Standard: OMG Unified Modeling Language (UML).
Edition held: Version 2.5, OMG document formal/2015-03-01.
Publisher: Object Management Group (OMG).
Authority: normative.
Identity: confirmed from the title page on 2026-08-07. UML 2.5, formal/2015-03-01.
Licence: OMG specification; paraphrase only.
Extraction note: this is a 780-page specification. Full-text extraction was delegated to a subagent working from a pdftotext dump, so the raw text stayed out of the main working context. The subagent returned obligations with clause locators, several tied to named OCL invariants; the checks are authored here.
Modality note: UML states many well-formedness rules as OCL invariants or prose constraints (mandatory) and others as notation. Mandatory rules that are testable on a diagram are blocking; notation rules are advisory.
Artefact types constrained: `class-model`, `sequence-diagram`, `system-diagram`.
Owning skills: `visual-modelling` (primary), `data-modelling` (class-model).
Locator style: UML 2.5 clause `<n>`.

## How to read this file

Three layers, kept separate: Source (S) with locator, labelled Inference (I), and the Check (C), answerable yes or no from the finished diagram. UML's tool and interchange (XMI) conformance, and its execution and trace semantics, are not testable on a static diagram and are recorded as not-testable.

## Checks: class-model

Applies to a UML class diagram.

| Check id | Question (yes = pass) | Severity | Locator | How the reviewer confirms |
| --- | --- | --- | --- | --- |
| UML-CM-01 | For every multiplicity, is the lower bound non-negative and not greater than the upper bound? | blocking | 7.5.3 | Read each `[lo..hi]`; a `[3..1]` or negative lower bound fails. |
| UML-CM-02 | Is the generalization hierarchy acyclic, with no classifier among its own ancestors? | blocking | 9.2.3 | Trace each inheritance chain; a loop fails. |
| UML-CM-03 | Does each generalization connect classifiers of the same kind (class to class, interface to interface)? | blocking | 9.2.3 | Check both ends of every generalization are the same metaclass. |
| UML-CM-04 | For composite aggregation, is a part owned by at most one whole, and is the whole end's multiplicity at most one? | blocking | 9.5.3 | For each filled-diamond association, confirm the whole end shows 0..1 or 1 and the part is not composed into two wholes. |
| UML-CM-05 | Does aggregation (shared or composite) appear only on a binary association, with a diamond on at most one end? | blocking | 11.5.3 | Confirm diamonds sit on binary associations and only one end is marked. |
| UML-CM-06 | Are the members of each namespace (class, package) distinguishable, with no two same-kind members sharing a name? | blocking | 7.4 | Check for duplicate attribute, operation, or member names within one class or package. |
| UML-CM-07 | Are classifiers drawn as name-compartment rectangles, with abstract classifiers shown in italics or tagged {abstract}? | advisory | 9.2.4 | Notation check on class boxes and abstract marking. |
| UML-CM-08 | Do generalization, aggregation, and navigability use the correct notation (hollow triangle to the parent; filled diamond for composite and hollow for shared at the whole end; arrowheads or x for navigability)? | advisory | 9.2.4, 11.5.4 | Notation check on relationship adornments. |
| UML-CM-09 | Are interface realization and dependency drawn correctly (ball and socket or dashed hollow-triangle realization; dashed open arrow from client to supplier for dependency)? | advisory | 7.7.4, 10.4.4 | Notation check on interface and dependency lines. |

## Checks: sequence-diagram

Applies to a UML sequence (interaction) diagram.

| Check id | Question (yes = pass) | Severity | Locator | How the reviewer confirms |
| --- | --- | --- | --- | --- |
| UML-SD-01 | Is every message sent before it is received, with its send occurrence at or above its receive occurrence? | blocking | 17.4.3 | Confirm each message's tail is not below its head. |
| UML-SD-02 | Does each reply pair with a preceding synchronous call on the same execution, and is each Signal message asynchronous? | blocking | 17.4.3 | Trace each dashed reply to its call; confirm signal messages use open (async) arrowheads. |
| UML-SD-03 | Does each execution specification (activation bar) start and finish on the same lifeline? | blocking | 17.12.8 | Confirm no activation bar spans two lifelines. |
| UML-SD-04 | Do the opt, loop, break, assert, and neg combined fragments each have exactly one operand? | blocking | 17.12.3 | Confirm these frames have no operand divider. |
| UML-SD-05 | Does a break fragment cover all lifelines covered by its enclosing fragment? | blocking | 17.12.3 | Confirm a break frame spans every lifeline of its container. |
| UML-SD-06 | After a destruction occurrence (the X on a lifeline), are there no further events below it on that lifeline? | blocking | 17.12.6 | Confirm nothing is drawn below a lifeline's terminating X. |
| UML-SD-07 | Are events on each lifeline read top to bottom in order, except within par or a coregion? | advisory | 17.4.4 | Notation and ordering check. |
| UML-SD-08 | Do alt, opt, and loop operands carry their interaction constraints (guards) in square brackets? | advisory | 17.6.4 | Notation check for guards on operands. |

## Checks: system-diagram

Applies to a UML structure diagram showing a system (component, package, or deployment diagram). UML spreads these rules across clauses 7, 11.6, 12, and 19, and most are prose constraints or notation rather than OCL. The clearest checkable rules are below.

| Check id | Question (yes = pass) | Severity | Locator | How the reviewer confirms |
| --- | --- | --- | --- | --- |
| UML-SY-01 | Is each element owned by exactly one container (one package or namespace), except top-level packages? | blocking | 7.2.2 | Confirm no classifier sits in two packages at once. |
| UML-SY-02 | Does no package merge a package that it directly or indirectly contains? | blocking | 12.3 | Confirm merge arrows never point from an outer package into its own nested package. |
| UML-SY-03 | In a deployment diagram, do communication-path (network) links connect only nodes, not artifacts, and do only nodes nest inside a node? | blocking | 19.5.2, 19.4.3 | Confirm network links join node symbols and only nodes nest in nodes. |
| UML-SY-04 | Are deployment specifications attached only to execution-environment nodes? | blocking | 19.2.3 | Confirm deployment-spec elements sit only on execution-environment nodes. |
| UML-SY-05 | Do components expose their provided and required interfaces (ball and socket or ports), hiding internals? | advisory | 11.6.3 | Notation check on component interfaces. |
| UML-SY-06 | Are package import or access shown as dashed open arrows labelled import or access, and artifacts deployed onto nodes via nesting or a deploy dependency? | advisory | 7.4.4, 19.4.4 | Notation check on import and deployment links. |

### Provenance

- CM-01. S: A multiplicity's lower bound must be non-negative and not exceed its upper bound (7.5.3, prose constraint). I: none.
- CM-02. S: Generalization hierarchies are acyclic; a classifier does not include itself among all parents (9.2.3, OCL invariant no cycles in generalization). I: none.
- CM-03. S: A classifier may only specialize classifiers of a compatible kind (9.2.3, OCL maySpecializeType). I: We read this as same-metaclass generalization on a diagram.
- CM-04. S: A part in a composite aggregation is in at most one composite at a time, and a composite end's opposite (whole) upper bound is at most one (9.5.3, prose and OCL isComposite implies opposite.upperBound <= 1). I: none.
- CM-05. S: Aggregation applies only to a binary association, with at most one end marked (11.5.3). I: none.
- CM-06. S: The members of a namespace must be distinguishable by name and metaclass (7.4, OCL members distinguishable). I: none.
- CM-07 to CM-09. S: Notation for classifiers, abstract classes, generalization, aggregation, navigability, interfaces, and dependency (9.2.4, 11.5.4, 7.7.4, 10.4.4). I: Notation guidance, so advisory.
- SD-01. S: A message is sent before it is received; the send event orders before the receive event (17.4.3). I: none.
- SD-02. S: A reply message represents the return of a synchronous call and pairs it; a message with a Signal signature is an asynchronous signal message (17.4.3). I: none.
- SD-03. S: An execution specification's start and finish occurrences are on the same lifeline (17.12.8, OCL start.covered = finish.covered). I: none.
- SD-04. S: The opt, loop, break, assert, and neg combined fragments have exactly one operand (17.12.3, OCL). I: none.
- SD-05. S: A break operand covers all lifelines covered by its enclosing fragment (17.12.3, OCL). I: none.
- SD-06. S: No occurrence specifications appear below a destruction occurrence on its lifeline (17.12.6, OCL). I: none.
- SD-07, SD-08. S: Events on a lifeline are ordered top to bottom except within par or a coregion; interaction operands show guards in brackets (17.4.4, 17.6.4). I: Notation, so advisory.
- SY-01. S: An element is owned by exactly one owner, top packages excepted (7.2.2, prose constraint). I: none.
- SY-02. S: A package cannot merge a package it directly or indirectly contains (12.3, package merge rule). I: none.
- SY-03. S: A communication path's ends must be deployment targets (nodes); a node's internal structure may consist only of other nodes (19.5.2, 19.4.3, prose constraints). I: We combine the two deployment structural rules into one check.
- SY-04. S: Deployment specifications may associate only with execution-environment targets (19.2.3, prose constraint). I: none.
- SY-05, SY-06. S: Component provided and required interfaces notation; package import and deployment notation (11.6.3, 7.4.4, 19.4.4). I: Notation, so advisory.

## Not-testable obligations

| Obligation (paraphrase) | Locator | Why not testable on a static diagram |
| --- | --- | --- |
| Multiplicity isOrdered and isUnique collection semantics. | 7.5.3 | Runtime collection typing, not a drawable adornment. |
| Generalization isSubstitutable and execution-trace superset semantics. | 9.9.7 | About instance execution traces, not the diagram. |
| Interaction trace semantics (weak sequencing, valid versus invalid traces) and gate matching invariants. | 17.1, 17.6.3, 17.12.9 | Define the set of legal event traces and message-end pairing in the model, not a visual property. |
| Package merge result equivalence (semantically equivalent XMI). | 12.2, 12.3 | A conceptual model transformation; the merged result is not drawn. |
| Manifestation and deployment-specification runtime parameterization. | 19.2.3, 19.3.3 | Metamodel and runtime semantics, not a static mark. |
| Tool conformance: abstract syntax, concrete syntax, model interchange (XMI), diagram interchange. | 2 | About tools and serialization, not an individual diagram. |

## Coverage

- `class-model`: 6 blocking checks (CM-01 to CM-06), 3 advisory (CM-07 to CM-09).
- `sequence-diagram`: 6 blocking checks (SD-01 to SD-06), 2 advisory (SD-07, SD-08).
- `system-diagram`: 4 blocking checks (SY-01 to SY-04), 2 advisory (SY-05, SY-06). See the scope note above: UML's structural rules for system diagrams are diffuse; these are the clearest testable ones.

All three constrained artefact types carry blocking checks (forward cross-check satisfied). Every check maps to a declared artefact type, no orphans. No other normative source constrains these three types, so no conflict.
