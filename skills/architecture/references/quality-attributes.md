# Quality Attributes and Non-Functional Requirements

## The taxonomy worth using

ISO/IEC 25010:2023 gives nine product quality characteristics. Use it as a checklist against which to ask "does anyone care about this, and how much", because the characteristic nobody mentioned is usually the one that fails.

| Characteristic | Sub-characteristics | The question to ask the business |
| --- | --- | --- |
| Functional suitability | Completeness, correctness, appropriateness | Does it do the right things, correctly, in a way that fits the task |
| Performance efficiency | Time behaviour, resource utilisation, capacity | How fast, at what volume, and what happens at the peak |
| Compatibility | Co-existence, interoperability | What else must it live alongside or exchange data with |
| Interaction capability | Recognisability, learnability, operability, user error protection, accessibility | Who uses it, how much training is acceptable, what accessibility conformance applies |
| Reliability | Maturity, availability, fault tolerance, recoverability | What uptime, and how long may recovery take |
| Security | Confidentiality, integrity, non-repudiation, accountability, authenticity | What must not leak, what must be provable, who must be identifiable |
| Maintainability | Modularity, reusability, analysability, modifiability, testability | How often will this change, and how fast must a change land |
| Flexibility | Adaptability, installability, replaceability, scalability | What environments, and how easily is it replaced |
| Safety | Operational constraint, risk identification, fail-safe, hazard warning | Can this harm anyone or anything, and what is the safe failure |

Three of these are widened in the 2023 revision and are commonly missed by anyone working from an older mental model. Interaction capability now explicitly carries accessibility, which makes it a conformance obligation rather than a nice-to-have. Flexibility now carries scalability, which used to float between characteristics. Safety is a first-class characteristic rather than a footnote of reliability.

## Making a non-functional requirement testable

A quality attribute is a category. A requirement is a measurable claim. Convert every one using the same three-part shape.

**Stimulus.** What happens, and who or what causes it. **Environment.** The condition under which it happens, including load, time of day, and degraded states. **Response.** The measurable outcome, with the measure and the threshold.

Compare these two.

> The system must be highly available.

> During the published service window, the quoting service is available 99.9 percent of each calendar month measured at the API gateway, and a single availability zone failure causes no more than 60 seconds of unavailability.

The second can be designed for, costed, and tested. The first cannot be any of those, and it will be interpreted differently by everyone who reads it.

Add one more thing that specifications usually omit: the business consequence of missing the threshold. "99.9 percent" and "99.99 percent" differ by roughly four hours of downtime a year and often by an order of magnitude in cost. The business can only choose between them if it knows what an hour of downtime costs. Ask, and record the answer next to the number.

## Where the numbers come from

Do not invent thresholds, and do not accept them from an architect without provenance. Legitimate sources are a contractual service level, a regulatory obligation, a measurement of the current system, a competitor or market expectation, or an explicit business decision with a named owner. Anything else is a guess wearing a decimal point, and it will be defended for years because it is written down.

Where the number comes from a contract, route it to `procurement-contracts` so the internal target and the contractual commitment do not drift apart. Where it comes from regulation, route the obligation to `regulatory-compliance`.

## Security as a design input

Security requirements are not a section at the end. Three questions shape the architecture itself.

**What is the data, and how is it classified.** Classification drives encryption, residency, retention, and who may see it in a test environment. Establish it before designing the data flows, because retrofitting classification means redesigning them.

**Who is the actor, and how is that established at each hop.** In a distributed system, identity has to survive every boundary crossing. The recurring failure is a service trusting a caller because the caller is inside the network, which stops being safe the moment anything in the network is compromised. Each service should verify identity itself rather than inheriting trust from position.

**What is the least privilege each component needs.** Broad standing access granted for convenience is the finding auditors reliably produce.

Treat network location as no evidence of trustworthiness, verify explicitly at each request, and grant the minimum access for the shortest useful period. Where an obligation follows from a named framework, route it to `regulatory-compliance` rather than paraphrasing the control here.

## Accessibility

Where the solution has a human interface, accessibility is a stated conformance target, normally WCAG 2.2 Level AA, not an aspiration. It belongs in the non-functional set with the level named, because "accessible" is unbuildable and untestable while "conforms to WCAG 2.2 AA" is both. Retrofitting is materially more expensive than designing for it, so the requirement has to exist before the interface does. Hand the interaction design itself to `ux` and the conformance testing to `acceptance-testing`.

## Handing over

Every quality attribute scenario becomes a non-functional requirement owned by `requirements`. Every threshold becomes an acceptance test owned by `acceptance-testing`, which is why the threshold must be measurable at a stated point in the system. Say where it is measured. "Response under 200 milliseconds" measured at the service and measured at the user's browser are different requirements, and the gap between them is where arguments happen at acceptance.
