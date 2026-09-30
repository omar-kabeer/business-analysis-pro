# Business Architecture Playbook

How to build the enterprise-level views (capabilities, value streams, organisation, information, and motivation) that show where a change sits in the business and what it touches beyond the initiative. This playbook applies the BABOK Business Architecture Perspective (11.4), with Business Capability Analysis (10.6), Organizational Modelling (10.32), and Business Model Canvas (10.8), in support of Analyze Current State (6.1), Define Future State (6.2), and Define Change Strategy (6.4). Motivation modelling follows the OMG Business Motivation Model (`bmm-1.3`); process taxonomy follows the APQC Process Classification Framework (`apqc-pcf`); architecture method context comes from `opengroup-togaf-presentation-2003`, a conference deck rather than the TOGAF standard.

## When this playbook applies

Use it when the question is enterprise-wide rather than initiative-wide: which capabilities a strategy depends on, where investment should go, how value flows to customers, who owns what, or how several initiatives fit together. Use the architecture skill for solution-level structure and the process-modelling skill for detailed flows.

## Step 1: Model the motivation

Start with why. The Business Motivation Model separates ends from means:

| Kind | Elements | Example |
| --- | --- | --- |
| Ends | Vision, goals, objectives | Goal: be a customer suppliers want. Objective: 95 percent of invoices paid on terms by March 2027 |
| Means | Mission, strategies, tactics, directives (policies and rules) | Strategy: automate approval routing. Directive: segregation of duties |
| Influencers | Internal and external forces, assessed for their effect | Supplier holds; prompt payment reporting |

BMM's definitional rules make a good test (see `sources/conformance/bmm-1.3.md`):

- every goal is quantified by at least one objective (BMM-MM-02);
- every objective is time-targeted and measurable (BMM-BO-01, BO-02);
- every desired result is supported by at least one means (BMM-MM-04);
- every business rule derives from a business policy (BMM-MM-03).

A motivation model that fails these is a wish list.

## Step 2: Map capabilities

A capability is what the business does, independent of who does it or how (Business Capability Analysis, 10.6). Build a capability map in levels: level 1 for broad areas (for example, "Manage finance"), level 2 for capabilities within them ("Pay suppliers"), and level 3 where a change needs detail ("Approve supplier invoices"). Name capabilities as noun phrases or verb-object phrases that stay stable when processes, systems, or organisations change. Use `templates/business-capability-map.md`.

Where the enterprise has no capability map, anchor naming in a reference taxonomy. APQC's PCF gives a numbered process hierarchy that can seed capability names; its licence requires the APQC attribution statement on any derivative (check APQC-PT-04).

## Step 3: Assess capabilities

Rate each relevant capability for performance (how well it works today) and strategic importance (how much the strategy depends on it). The combination directs investment: important and weak capabilities are where change pays; unimportant and strong ones are candidates for cost reduction. Base each rating on evidence (measures, incidents, audit findings), not opinion.

## Step 4: Draw the value streams

A value stream shows the stages through which the enterprise delivers value to a stakeholder, end to end: for example, "Invoice to payment" for a supplier. For each stage, record the value delivered, the capabilities that enable it, and the measure of how well it performs. Value streams connect the customer's view to the capability map, so a weak capability can be shown to hurt a specific outcome.

## Step 5: Map organisation and information

Show who owns each capability (Organizational Modelling, 10.32) and which information each stage creates and uses. Gaps are findings: a capability with no owner, two units that each think they own it, or information that a stage needs and no one produces.

## Step 6: Plan transitions

Where the target architecture differs from today, describe one or more transition states: what the business looks like after each step, which capabilities change, and what must be true before the next step. Transition states turn a target into a roadmap that can be funded and governed, and they feed Define Change Strategy (6.4).

## Stop rules

The architecture is enough when the motivation model passes BMM's definitional rules, the capabilities in scope are mapped and assessed on evidence, the relevant value stream shows which capabilities enable each stage, owners and information are clear, and any target has transition states. Do not map the whole enterprise for a change that touches one value stream.

## Common failures

- Capabilities named after departments or systems, so the map breaks at the next reorganisation.
- Goals with no objectives, and objectives with no measure or date.
- Capability ratings based on opinion.
- Value streams that describe internal activity, not value to a stakeholder.
- A target state with no path to it.

## Worked example

Supplier invoice approval, placed in the enterprise.

Motivation: vision "suppliers want to work with us"; goal "be a customer suppliers want"; objectives OBJ-001 (approval in 5 days by December 2026) and OBJ-002 (95 percent paid on terms by March 2027), both time-targeted and measurable; strategy "automate approval routing"; directive "segregation of duties (FIN-POL-07)", with business rule BR-015 derived from it; influencer "two supplier holds this year", assessed as a threat to the goal.

Capability map extract, level 3 under "Manage finance > Pay suppliers": capture invoices, match invoices, approve invoices, run payments, report payment performance.

Assessment: "Approve invoices" is high importance and low performance (14 days against a 5-day target); "Match invoices" is high importance and medium performance (22 percent fail matching). Investment goes first to approval, second to matching.

Value stream "Invoice to payment" for the supplier: receive, match, approve, pay, confirm. The approve stage delivers "the supplier's invoice is accepted for payment", is enabled by "Approve invoices", and is measured by days to approval. It is the stage that breaks the stream.

Transition states: state 1 (release 1, UK): approval routed by rule in the ERP. State 2 (release 2): EU entities and supplier status self-service. Each state is funded and governed separately.

## Sources

- `babok-3.0-2015`: the Business Architecture Perspective (11.4) and techniques 10.6, 10.8, and 10.32, with tasks 6.1, 6.2, and 6.4.
- `bmm-1.3`: ends, means, and influencers, with the definitional checks in its conformance note.
- `apqc-pcf`: a reference taxonomy for naming, with its attribution condition.
- `opengroup-togaf-presentation-2003`: architecture method context. It is a 2003 conference deck, not the TOGAF standard.
