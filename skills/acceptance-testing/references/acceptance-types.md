# Acceptance Types and Architecture Fit

Acceptance is not a single event called UAT. It is a set of distinct decisions, each with a different question, owner, and evidence. Selecting the wrong set is the most common structural failure in an acceptance plan, because the release passes the tests it ran and fails on the dimension nobody tested.

## Selecting the types in scope

| Type | The question it answers | Accountable owner | Evidence that closes it |
| --- | --- | --- | --- |
| Business acceptance (BAT) | Does the solution execute the business process end to end and realise the intended value? | Principal business analyst | Critical path scenarios passed, financial or volumetric reconciliation clean |
| User acceptance (UAT) | Can real users complete real tasks without help, and will they adopt it? | Product manager, with business users executing | Task completion rate, time on task, usability score, unassisted execution records |
| Functional acceptance (FAT) | Do features, calculations, and business logic branches behave as specified? | Business analyst with QA support | Case results against functional requirements and rules |
| Non-functional acceptance (NFAT) | Does it hold up under load, and meet availability, recovery, and accessibility targets? | QA or performance lead | Measured results against stated thresholds, not "felt fast" |
| Integration acceptance (IAT) | Do the interfaces and contracts between systems hold, including error and retry paths? | Solution architect with BA | Contract test results, failure and reconciliation evidence |
| Data acceptance (DAT) | Is migrated or interfaced data complete, accurate, and reconciled? | Data owner | Row and value reconciliation, exception log with dispositions |
| Security acceptance (SAT) | Are the security controls present and effective? | Security lead | Scan attestations and control verification against a named baseline |
| Operational acceptance (OAT) | Can it be run, monitored, backed up, restored, and rolled back? | Operations or SRE lead | Runbook execution, restore test, rollback rehearsal in a production-like environment |
| Compliance acceptance (CAT) | Does it satisfy the statutory and regulatory obligations that apply? | Compliance lead with BA | Obligation to control to test evidence chain, retained and dated |
| AI acceptance | Does the probabilistic component behave safely and usefully within bounds? | AI or data lead | Statistical results across an evaluation set, not single-run assertions |
| Continuous and production acceptance | Does it keep behaving acceptably once live? | Release owner | Canary and synthetic monitoring results against the same criteria |

Scope the set explicitly, and record any type ruled out with the reason. A type omitted silently reads as a type forgotten.

## Fitting the architecture

The architecture decides where acceptance evidence can credibly be gathered.

**Monolith.** A single cohesive environment makes end-to-end acceptance straightforward but slow, with environment contention and a wide regression blast radius. Budget for build and refresh time, and reduce the regression set by risk rather than by convenience.

**Microservices.** Full end-to-end suites are expensive and flaky at this granularity. Push interface verification to consumer-driven contract tests, and reserve business acceptance for a small number of genuinely cross-service journeys. If your end-to-end suite needs eleven services deployed together, it is testing the environment, not the solution.

**Serverless.** Verify function execution, event triggers, cold-start latency against a stated budget, and permission boundaries. Local emulators cover behaviour; production canaries cover the parts emulators lie about.

**SaaS and configured packages.** Acceptance is mostly configuration validation, tenant data isolation, identity integration, vendor service level conformance, and resilience to vendor-driven updates. Route the service level terms and the remedies to `procurement-contracts`, and test against those terms rather than against a general sense of performance.

**Event-driven.** Test schema evolution, idempotent reprocessing, out-of-order and duplicate events, dead-letter handling, and the maximum acceptable window for eventual consistency. State that window as a number; "eventually consistent" is not an acceptance criterion.

**AI-native and agentic.** Binary assertion of a probabilistic output is the defining error here. Accept against distributions: score a fixed evaluation set, set thresholds on grounding, relevance, and refusal behaviour, bound hallucination rate, and test tool-calling boundaries and authorisation. Record the model version, prompt version, and evaluation set version with the result, because a result without those three is not reproducible.

## Fitting the lifecycle

**Predictive.** Acceptance is a gated phase late in the plan. Risk is back-loaded and rework is expensive, so invest in inspection of requirements before build and in early environment and data readiness.

**Agile.** Acceptance decomposes into story-level criteria checked within the iteration, with a thin release-level acceptance covering cross-story journeys and non-functional dimensions. The failure mode is running sprints while deferring all business acceptance to one phase before release, which buys the cost profile of predictive delivery while paying the coordination cost of agile.

**Continuous delivery.** Acceptance criteria become automated gates in the pipeline, and part of acceptance moves into production behind feature flags and progressive rollout. This only works if the criteria were machine-checkable to begin with, which is a constraint on how they are written, not an afterthought.

## Manual against automated

Automate where the check is repeated, deterministic, and cheap to assert: regression of functional and non-functional invariants, contract and schema conformance, high-volume transaction paths, and security and load gates in the pipeline.

Keep humans where judgement is the point: usability and visual coherence, exploratory work on evolving processes, edge-case exception handling that needs domain intuition, and any decision involving a trade-off between stakeholders.

Automating a badly specified case does not make it a good case. It makes it a fast, brittle, and confidently wrong case that will be maintained for years.
