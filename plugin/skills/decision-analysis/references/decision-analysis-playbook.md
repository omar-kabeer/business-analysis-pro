# Decision Analysis Playbook

How to make a choice between options defensible, and how to capture repeatable business decision logic so it is complete and consistent. This playbook applies BABOK Decision Analysis (10.16) and Decision Modelling (10.17), in support of Define Design Options (7.5), Analyze Potential Value and Recommend Solution (7.6), and Define Change Strategy (6.4). Decision tables and decision requirements diagrams follow DMN 1.3 (`dmn-1.3`); treating uncertainty follows the guidance of ISO 31000 (`iso-31000-2018`). Both notes are in `sources/conformance/`.

## When this playbook applies

Use it for two different jobs. A one-off choice (which vendor, which design option, which change strategy) needs decision analysis. A decision the business makes over and over (who approves, what price applies, whether a claim is accepted) needs decision modelling. Record choices in the decision log with the governance skill.

## Part A: One-off decisions

### Step 1: Frame the decision

State the decision in one sentence, who makes it, by when, and what is out of bounds. List the real options, including doing nothing. A decision framed as "whether to buy tool X" has already excluded its alternatives.

### Step 2: Set criteria and weights before scoring

Choose criteria that reflect the objectives, such as outcome fit, cost, risk, time, and strategic fit. Weight them, and have the decision maker agree the weights before any option is scored, so the weights cannot be tuned to favour a preferred option. Define what each score means on each criterion.

### Step 3: Score with evidence

Score each option on each criterion, citing the evidence: a demo result, a reference call, an estimate. Record who scored and how disagreements were settled. Use `templates/decision-matrix.md`.

### Step 4: Treat uncertainty explicitly

Where outcomes are uncertain, estimate the consequences and their likelihood, and compare options on expected value, or with a decision tree where choices come in sequence. Following ISO 31000's guidance, analyse the risk of each option against agreed criteria and evaluate it before deciding, rather than treating risk as a footnote. Test how sensitive the ranking is: which weight or score would have to change for a different option to win, and by how much.

### Step 5: Recommend and record

Recommend the option, say why it wins and what would reverse the decision, and record the decision with its options, rationale, decision maker, and reversal conditions.

## Part B: Repeatable decisions

### Step 6: Model the decision logic

For a decision made repeatedly, model it with DMN. Draw a decision requirements diagram (DRD) showing the decision, the input data it uses, the business knowledge it applies, and the sources of authority for that knowledge. DMN's rules for the diagram are checks (`sources/conformance/dmn-1.3.md`): each element uses its DMN shape (DMN-DRD-01), shows its name (DRD-02), and connects only in the permitted ways, with no requirement ending at input data (DRD-03).

### Step 7: Build the decision tables

Give each table defined input clauses, output clauses, and rules (DMN-DT-01). Choose the hit policy deliberately and mark it (DT-02): the marker may be omitted only for a Unique table. Then check:

- under Unique, no two rules overlap (DT-03);
- under First or Rule order, rules are numbered in sequence (DT-04);
- under Priority or Output order, the output values are ranked (DT-05);
- the table is complete, with an output for every combination of inputs or a declared default (DT-06).

The requirements skill's reference `business-rules-and-decisions.md` shows how requirements reference a table by identifier.

## Stop rules

A one-off decision is ready when the options include doing nothing, criteria and weights were agreed before scoring, scores cite evidence, uncertainty and sensitivity are shown, and the recommendation and its reversal conditions are recorded. A repeatable decision is ready when its DRD and tables pass the DMN checks and each table is complete.

## Common failures

- Weights set after scoring, to fit a preferred option.
- No do-nothing option.
- Scores with no evidence.
- Risk mentioned but not analysed.
- Decision tables with overlapping or missing rules.

## Worked example

Supplier invoice approval: choosing the workflow solution.

Frame: the sponsor decides by 2 June which approach delivers approval routing for release 1. Options: the ERP's workflow module, a standalone workflow tool, or an in-house build; doing nothing is included as the baseline.

Criteria, weighted and agreed with the sponsor before scoring: outcome fit 50 percent, three-year cost 30 percent, delivery risk 20 percent, each scored 1 to 5.

| Option | Fit (50%) | Cost (30%) | Risk (20%) | Weighted |
| --- | --- | --- | --- | --- |
| ERP workflow module | 4 | 4 | 3 | 3.8 |
| Standalone tool | 5 | 2 | 3 | 3.7 |
| In-house build | 4 | 2 | 2 | 3.0 |
| Do nothing | 1 | 5 | 4 | 2.8 |

Evidence: fit from the vendor demonstrations against 12 criteria (VA-003); cost from quotes and the estimation basis; risk from the risk register.

Sensitivity: keeping cost and risk in their 3 to 2 ratio, the standalone tool wins if outcome fit is weighted above about 55 percent. The sponsor confirmed 50 percent reflects the objectives, so the ERP module was chosen, recorded as DEC-007, to be reversed if the module fails the load test at three times peak volume.

Repeatable decision: the approval routing itself was modelled as decision table DT-001 with a Unique hit policy, four rules, no overlaps, and full coverage of amount and raiser combinations.

## Sources

- `babok-3.0-2015`: Decision Analysis (10.16) and Decision Modelling (10.17), within 6.4, 7.5, and 7.6.
- `dmn-1.3`: decision requirements diagrams and decision tables, with their conformance checks.
- `iso-31000-2018`: analysing and evaluating risk against criteria before deciding, as guidance.
