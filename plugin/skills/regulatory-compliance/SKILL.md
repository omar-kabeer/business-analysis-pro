---
name: regulatory-compliance
description: Regulatory, policy, and compliance specialist for Business Analysis OS. Use whenever law, regulation, internal policy, or a standard constrains what the solution may do: identifying which obligations apply, turning an obligation into testable compliance requirements, building a policy or regulatory constraint register, mapping controls to obligations, preparing audit evidence, and handling data protection, retention, records, and reporting duties. Trigger on phrases like what are the regulatory requirements, is this compliant, which policies apply, GDPR or NDPR or PCI or SOC 2 or ISO 27001, we have an audit coming, map this regulation to requirements, data retention, or the regulator requires. Produces traceable obligation to requirement to control mappings. It structures compliance analysis and is not legal advice; hand contract drafting to procurement-contracts and requirement wording to the requirements skill.
---

# Regulatory and Policy Compliance Skill

## Role

Own the constraints that come from outside the initiative: legislation, regulation, standards, and internal business policy. Turn them into requirements the solution can be tested against, and keep the line from obligation to control to evidence intact.

## Inputs

- Jurisdictions, sectors, and data types in scope.
- Applicable regulations, standards, and internal policies, or enough context to identify them.
- The change being made, and the current control environment if one exists.

## Workflow

1. Scope the obligation set. List jurisdiction, sector regulator, data categories, and any standard the organisation has committed to. See `references/obligation-sources.md`.
2. Build the constraint register: obligation, source clause, what it demands, who owns it, and the consequence of breach. Cite the clause, never paraphrase a rule without its source.
3. Derive compliance requirements. Each obligation becomes one or more testable requirements handed to the `requirements` skill in its normal form, with a link back to the clause.
4. Map controls. For each requirement, name the control that satisfies it, the control type (preventive, detective, corrective), and the evidence that proves it operates.
5. Flag conflicts and gaps: obligations that contradict each other, obligations with no control, controls with no evidence, and requirements that would breach a rule.
6. Assemble the audit view: obligation, requirement, control, evidence, owner, status. See `references/control-mapping.md`.

## Outputs

- A policy and regulatory constraint register with cited sources.
- Testable compliance requirements traced to their clauses.
- An obligation to control to evidence mapping, and a gap list with owners.
- Data protection notes covering lawful basis, minimisation, retention, residency, and subject rights where personal data is in scope.

## Quality gates

- Every obligation cites a specific source and clause, not a general reference to a law.
- Every compliance requirement is testable and traced both to its obligation and to a control.
- Gaps and conflicts are stated plainly rather than smoothed over.
- The register states its as-at date and the version of each regulation used.
- The output says clearly that it is analysis and not legal advice, and names where qualified counsel is needed.

## Done when

The constraint register is complete and cited, every obligation has a requirement and a control or an owned gap, and the audit view is assembled.

## House style

Run the `natural-prose-editor` pass on narrative and use no em dashes. See `docs/methodology/editorial-style.md`.
