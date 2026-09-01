# Capabilities, Rules, Vocabulary, and Structure

The foundational technique set. These artefacts are cheap to produce early and extremely expensive to retrofit, because everything downstream is written in their terms.

## Business capability analysis

BABOK technique 10.6. A capability is what the organisation can do, stated independently of who does it, how, or with what system. That independence is the whole point: capabilities are stable while org charts and systems churn, so they are the right unit for gap analysis and for sequencing change.

Name capabilities as a noun phrase, not a verb or a department. "Claims adjudication" is a capability. "Process claims faster" is an objective and "Claims team" is an organisational unit; neither belongs on a capability map.

Decompose to three levels at most for an initiative. Level one is a broad domain, level two is a distinct capability within it, level three is where measurement and ownership become concrete. Going deeper produces a taxonomy nobody maintains.

Assess each relevant capability on four dimensions and you get a heat map that drives investment: current performance, importance to the strategy, gap size, and the cost or difficulty of closing it. The interesting quadrant is high importance with low performance; the trap is investing in high performance and high importance, which feels productive and changes nothing.

Enterprise-wide capability maps, value streams, and the target operating model belong to `business-architecture`. This skill produces the capability view scoped to the initiative. Where both exist, this one must reuse that one's names rather than inventing parallel vocabulary, which is the most common way two capability maps end up contradicting each other.

## Business rules

BABOK technique 10.9. Two kinds, and confusing them causes real damage.

**Definitional rules** say what something is. "A customer is high value when their trailing twelve month revenue exceeds 50,000." They cannot be violated; they constitute the meaning. If the number changes, the definition changes.

**Behavioural rules** govern what may or must happen. "A refund above 50,000 requires two approvers." They can be violated, which means each one needs a stated consequence and an enforcement point.

Every rule needs an identifier, a statement, its classification, its source, an owner, and its enforcement point. The source is what people skip, and it is the field that matters most: a rule enforced for eleven years whose originating policy was withdrawn in year three is common, expensive, and only discoverable if you asked for sources.

Write rules declaratively, one rule per statement, in business vocabulary, without describing implementation. "The system shall check that..." is a requirement, not a rule. The rule is the thing being checked, and it holds whether or not a system exists.

Where several conditions combine, a decision table is the right form: it makes gaps and contradictions visible in a way prose cannot, since an empty cell is a question nobody has answered. Build the table here where the logic is business rules; hand weighted option scoring and decision analysis under uncertainty to `decision-analysis`.

## Concept model and glossary

BABOK techniques 10.11 and 10.23. The cheapest high-value artefacts in analysis, and the most frequently skipped.

A glossary defines terms. A concept model defines terms and the relationships between them, and is worth building when the relationships are themselves contested, which is usually when the same word means different things in two departments.

The diagnostic is easy: when two stakeholders describe the same thing incompatibly, ask each to define the central noun. In one insurer, "claim" meant the customer's notification to one team and the individual payable item to another, so a customer with three damaged items had one claim or three depending on who you asked. Every count, every report, and every requirement built on that word inherited the ambiguity.

A glossary entry needs the term, the agreed definition, who owns it, what it is not, and any known synonyms in use. The "what it is not" line resolves more disputes than the definition does.

Fix vocabulary before requirements are written, not after. Retrofitting a definition means revisiting every artefact that used the word, and in practice it does not happen, so both meanings survive in different documents.

## Functional decomposition

BABOK technique 10.22. Breaking a whole into parts, whether that whole is a scope, a capability, a process, or a deliverable set.

Decompose on one principle at a time. Mixing organisational units with process stages with system components in a single breakdown produces a structure that is neither complete nor exclusive, and it will be quietly wrong in ways nobody notices.

Test each level for mutual exclusivity and collective exhaustiveness, and say which one you are claiming. Claiming both when only one holds is worse than claiming neither. Stop decomposing when the parts can be estimated, assigned, or measured; further detail past that point is unmaintained precision.

Where the decomposition is of work to be done rather than of the problem, it becomes a work breakdown structure and the estimating method belongs to `estimation`.

## Organisational modelling

BABOK technique 10.32. Roles, responsibilities, and reporting relationships, used to find where accountability is absent or duplicated.

The useful output is rarely the org chart. It is the answer to two questions: which decisions have no single accountable owner, and which handoffs cross a boundary where the two sides have conflicting objectives. Both are structural causes of problems that present as process or behaviour problems, and neither is fixable by process redesign.

Model the informal structure as well as the formal one where they differ, because the informal one is what actually determines whether work gets done. Enterprise-level organisational maps belong to `business-architecture`; the initiative-scoped view sits here.

## Connecting capabilities to delivery

Where the change is substantial and the delivery is software, capability boundaries and system boundaries should agree. A capability split across three systems, or a system spanning four capabilities, is a predictor of integration cost and of ownership disputes later.

A collaborative session that walks the domain in events, then identifies the commands that cause them, the entities that hold the state, and the boundaries within which the vocabulary stays consistent, will produce those boundaries faster than analysis in isolation and with better buy-in from the people who will build it. The shared vocabulary that session produces is the same artefact as the glossary above, which is the point: one vocabulary, used by the business and the build.

Hand the resulting technical boundaries to `architecture`, and keep the vocabulary here.
