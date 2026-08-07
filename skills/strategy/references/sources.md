# Normative sources for the strategy skill

Conformance authorities, not citation sources. Judge an artefact by whether it passes the checks, not by whether it cites the standard. Do not quote the standards in deliverables.

Resolve each source id against `sources/manifest.json` and read its checks in `sources/conformance/<source-id>.md`.

## business-objective

- `bmm-1.3`. OMG Business Motivation Model 1.3. A business objective must pass the BMM-BO blocking checks: it is time-targeted (carries a deadline), measurable (carries explicit yes-or-no or metric criteria), and linked to the goal it quantifies. Advisory checks cover attainability and the recommended time-phrase-then-target form.

## motivation-model

- `bmm-1.3`. OMG Business Motivation Model 1.3. A motivation model must pass the BMM-MM blocking checks: elements are typed to BMM concepts (Ends vs Means); every Goal is quantified by at least one Objective; every Business Rule is derived from a Business Policy; and every Desired Result is supported by at least one Means. Advisory checks cover Vision, Influencers and Assessments, Mission form, and audit trail. Two of the blocking checks (goals unquantified by objectives, rules not derived from a policy) are analyses BMM itself names. Also relevant to `business-architecture`.
