# Business Rules and Decisions

How to find, state, and manage the business rules and decisions that requirements depend on, separately from the requirements that enforce them, so a rule can change without rewriting the system description. This reference applies BABOK Business Rules Analysis (10.9) and Decision Modelling (10.17), within Specify and Model Requirements (7.1). Decision tables follow DMN 1.3 (`dmn-1.3`).

## Why rules are kept apart

A requirement says what the solution does ("The system routes each invoice to an approver"). A business rule says what the business has decided must be true or must happen ("Invoices of 5,000 pounds or more also need the department head"). Rules change more often than requirements, and for business reasons: policy updates, reorganisations, new regulation. If a rule is written inside every requirement that uses it, each change becomes a hunt through the specification. Kept in a catalogue with an identifier, a rule changes in one place and every requirement that references it follows.

## Kinds of rule

BABOK distinguishes two families (10.9):

| Kind | What it does | Example |
| --- | --- | --- |
| Definitional | Defines what something is, or how it is computed or classified | "An invoice matches when its price is within 2 percent of the purchase order price" |
| Behavioural | Constrains what people or systems may or must do | "Nobody may approve an invoice for a purchase order they raised" |

Definitional rules cannot be broken, only applied wrongly; they belong in the data dictionary or a decision model. Behavioural rules can be broken, so each needs to say what happens when it is: block, warn, escalate, or log.

## Finding rules

Rules hide in policies, procedures, contracts, regulations, system configuration, and people's heads. Good prompts in elicitation:

- "When would you refuse this?" and "When does the normal process not apply?"
- "Who is allowed to do this, and who is not?"
- "What number or threshold decides it?"
- "Where is that written down?"

Every rule found needs a source (a policy clause, a regulation, a named decision maker) and an owner who can change it. A rule with no owner is an opinion.

## Stating rules well

State each rule atomically, in business language, with no reference to screens or systems:

- One rule per statement. "Invoices over 5,000 pounds need the department head and must be approved within 5 days" is two rules.
- Use precise terms from the glossary or concept model ("purchase order", not "the PO thing").
- Make thresholds explicit, with the unit and whether the boundary is included ("5,000 pounds or more").
- For behavioural rules, state the enforcement: "If the approver raised the purchase order, the approval is blocked and routed to the next approver."

Record each rule in `templates/business-rules-catalogue.md` with its identifier, statement, kind, source, owner, and the requirements that reference it.

## Decisions and decision tables

When several rules combine to reach one outcome (which approver, what price, whether to accept), model the decision rather than listing rules (Decision Modelling, 10.17). A DMN decision table has input columns, output columns, and one rule per row, with a hit policy that says how rows combine:

| Hit policy | Meaning | Use when |
| --- | --- | --- |
| Unique (U) | Exactly one row applies to any input | Most business decisions; rows must not overlap |
| First (F) | The first matching row, in order, wins | Rules have a deliberate priority order |
| Collect (C) | Every matching row applies | Several outcomes can accumulate, such as required checks |

Check every table for completeness (every possible input is covered by some row) and, under the Unique policy, for overlap (no input matches two rows). Gaps and overlaps are the most common decision defects, and a table makes them visible in a way prose never does.

For decisions that depend on other decisions, draw a decision requirements diagram (DRD) showing which decisions and input data feed which, so the dependency order is clear.

## Linking rules and decisions to requirements

Functional requirements reference rules and decisions by identifier rather than restating them: "FR-021: The system routes each matched invoice to the approvers determined by decision DT-001 (approval routing)." Tests then verify the requirement once and the decision table row by row. When a rule changes, the change assessment starts from the catalogue and follows the references to the affected requirements and tests.

## Common failures

- Rules buried inside requirements, so a policy change means rewriting the specification.
- Compound rules that bundle two decisions.
- Thresholds with no unit or no boundary condition.
- Decision tables with gaps or overlaps nobody checked.
- Rules with no source or owner.

## Worked example

Supplier invoice approval: routing approvals.

Rules found in elicitation and policy:
- BR-015 (behavioural): nobody may approve an invoice for a purchase order they raised. Source: FIN-POL-07. Enforcement: block and route to the next approver.
- BR-016 (behavioural): invoices of 5,000 pounds or more also need the department head. Source: delegated authority policy DAP-02.
- BR-017 (definitional): an invoice's cost centre is the cost centre on its purchase order.

Decision table DT-001, approval routing, hit policy Unique (exactly one row applies to any invoice, and each row lists every approver needed):

| Rule | Amount (pounds) | Raised by the budget holder? | Approvers required |
| --- | --- | --- | --- |
| 1 | Under 5,000 | No | Budget holder for the cost centre |
| 2 | Under 5,000 | Yes | Budget holder's manager |
| 3 | 5,000 or more | No | Budget holder, and department head |
| 4 | 5,000 or more | Yes | Budget holder's manager, and department head |

Completeness and overlap check: every combination of the two inputs is covered by exactly one row, and the boundary (exactly 5,000) falls in rows 3 and 4 as the policy says. The table replaces four paragraphs that had been spread across three requirements, and FR-021 now references DT-001 by identifier.

## Sources

- `babok-3.0-2015`: Business Rules Analysis (10.9), Decision Modelling (10.17), and Specify and Model Requirements (7.1).
- `dmn-1.3`: decision tables, hit policies, and decision requirements diagrams.
