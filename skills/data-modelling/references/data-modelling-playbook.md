# Data Modelling Playbook

How to model the information a business uses, from shared vocabulary to a logical model and a data dictionary, so requirements, design, and reporting all mean the same thing by the same words. This playbook applies BABOK Concept Modelling (10.11), Data Dictionary (10.12), Data Flow Diagrams (10.13), and Data Modelling (10.15), within Specify and Model Requirements (7.1) and Define Requirements Architecture (7.4). Class notation follows UML (`uml-2.5`); analytical structures follow Kimball (`kimball-dimensional-modelling`).

## When this playbook applies

Use it when the structure or meaning of data is the question: agreeing business terms, modelling entities and relationships, writing a data dictionary, drawing where data flows, or mapping one model to another. Use the business-intelligence skill for reporting structures and the information-management skill for how analysis artefacts themselves are stored.

## Step 1: Agree the vocabulary with a concept model

Before any entity diagram, build a concept model (10.11): the business terms, their definitions, and how they relate, in the business's own language. "An invoice is a supplier's request for payment for goods or services received against a purchase order." Resolve synonyms (bill, invoice) and homonyms (two teams' different "approval") here. A concept model is cheap, and it prevents the most expensive data defect: two systems that store the same word with different meanings.

## Step 2: Choose the level of the model

| Level | Audience | Contains |
| --- | --- | --- |
| Conceptual | Business stakeholders | Main things of interest and how they relate |
| Logical | Analysts and designers | Entities, attributes, keys, relationships, and cardinality, independent of technology |
| Physical | Developers and DBAs | Tables, columns, types, and indexes for a specific database |

The analyst owns the conceptual and logical levels. Leave physical design to the designers, but check it still honours the logical model.

## Step 3: Build the logical model

For each entity, state its definition, its identifier, and its attributes. For each relationship, state it in words both ways with cardinality: "one invoice has one or more approval decisions; each approval decision belongs to exactly one invoice." Normalise to third normal form to remove redundancy, then note any deliberate denormalisation with its reason. Use UML class notation or crow's foot consistently; do not mix them in one model. Use `templates/logical-data-model.md`.

## Step 4: Write the data dictionary

For each attribute, record the name, definition, type, format, allowed values or range, whether it is mandatory, the source, the owner, and the sensitivity (Data Dictionary, 10.12). Definitions must be precise enough that two people would record the same value: "Approval date: the date and time, in UK time, when the approver's decision was saved." Use `templates/data-dictionary.md`.

## Step 5: Show where data moves

Draw a data flow diagram (10.13) for the processes that create, change, or move key data: external entities, processes, data stores, and labelled flows. Complement it with a CRUD matrix showing which process creates, reads, updates, and deletes each entity. A gap in the matrix (an entity nobody creates, or everybody updates) is usually a missing requirement or a missing owner.

## Step 6: Map between models

When data moves between systems, or into a warehouse, record the mapping field by field: source, target, transformation, and rule. Where the target is analytical, shape it dimensionally (declared grain, conformed dimensions) following Kimball, and hand the detailed design to the business-intelligence skill.

## Step 7: Capture data quality and privacy requirements

For each critical attribute, state the quality rules (completeness, validity, uniqueness, timeliness) as testable requirements. Classify personal and sensitive data and record retention and access needs. These become non-functional and compliance requirements, and they are far cheaper to specify in the model than to retrofit.

## Stop rules

The model is enough when the key terms are defined and agreed, every entity has a definition and an identifier, every relationship reads correctly in both directions with cardinality, every attribute in scope is in the dictionary with an owner, and data flows and CRUD responsibilities have no unexplained gaps.

## Common failures

- Jumping to tables before agreeing what the words mean.
- Relationships with no cardinality, or cardinality nobody has read aloud.
- Dictionary definitions that restate the name ("Approval date: the date of approval").
- Physical details (column types, indexes) mixed into a logical model.
- Personal data identified only after the system is built.

## Worked example

Supplier invoice approval: logical model for the approval workflow.

Concept model agreements: "invoice" means the supplier's request for payment; "approval decision" is one approver's recorded choice on one invoice; "delegate" is a person authorised to decide in another's absence. The AP team's old word "sign-off" was retired as a synonym for approval decision.

Entities and relationships:
- Invoice (identifier: invoice ID) has one or more Approval decisions; each Approval decision belongs to exactly one Invoice.
- Approver (identifier: employee ID) makes zero or more Approval decisions; each Approval decision is made by exactly one Approver.
- Approver may have zero or one current Delegate, who is also an Approver.

Dictionary extract:

| Attribute | Definition | Type | Rule | Owner | Sensitivity |
| --- | --- | --- | --- | --- | --- |
| Decision | The approver's choice on the invoice | Code | One of Approved, Rejected | AP manager | Internal |
| Decision reason | Why the invoice was rejected | Text, 500 characters | Mandatory when Decision is Rejected | AP manager | Internal |
| Decided at | When the decision was saved, UK time | Date and time | Not in the future | ERP team | Internal |

CRUD check: the matching engine creates Invoice; the workflow creates Approval decision; nothing deletes Approval decision, which meets the seven-year retention requirement OR-001.

## Sources

- `babok-3.0-2015`: techniques 10.11, 10.12, 10.13, and 10.15 and tasks 7.1 and 7.4.
- `uml-2.5`: class diagram notation for logical models.
- `kimball-dimensional-modelling`: dimensional shaping when data feeds analytics.
