# Market Analysis Playbook

How to size a market, understand competitors, and scan the environment rigorously enough that product and strategy decisions can rely on the result. This playbook applies BABOK Benchmarking and Market Analysis (10.4), SWOT Analysis (10.46), and the external influencers element of Analyze Current State (6.1), feeding Define Future State (6.2) and Analyze Potential Value and Recommend Solution (7.6).

## When this playbook applies

Use it when a decision depends on how big an opportunity is, who else serves it, how the environment is changing, or which customer segment to target: new products, market entry, pricing, investment cases, and win and loss reviews. Use the strategy skill when the question is the organisation's own change strategy, and the product-manager skill when it is what to build.

## Step 1: Frame the decision and the market definition

State the decision the research will inform and define the market precisely: the customer, the need, the geography, and the time horizon. "The supplier payment visibility market" is not a definition; "UK suppliers with under 50 staff who invoice large manufacturers, over the next three years" is. A loose definition makes every later number arguable.

## Step 2: Size the market two ways

Estimate the total addressable market (TAM), the serviceable addressable market (SAM) within reach of the offer, and the serviceable obtainable market (SOM) the organisation can realistically win. Do it twice:

| Approach | Method | Strength |
| --- | --- | --- |
| Top down | Start from a published total and narrow by segment shares | Fast, anchored to external data |
| Bottom up | Count customers and multiply by what each would buy | Grounded in the offer and the price |

Reconcile the two. A gap of more than about a factor of two means an assumption is wrong; find it before quoting either figure. Record every input with its source and date, and give SOM as a range with the adoption assumption stated.

## Step 3: Map the competition

List direct competitors, indirect alternatives (including doing nothing and in-house workarounds), and likely entrants. For each, record how they answer the customer's need, their price, their strengths and weaknesses, and the evidence behind each claim (Benchmarking and Market Analysis, 10.4). The alternative customers use today, often a spreadsheet or a phone call, is usually the real competitor.

## Step 4: Scan the environment

Use PESTLE to scan political, economic, social, technological, legal, and environmental forces. Keep only forces that plausibly change the decision, and for each state the direction, the expected timing, and the effect. Use Porter's five forces when the question is how attractive or defensible a market is: supplier power, buyer power, threat of substitutes, threat of entrants, and rivalry.

## Step 5: Segment the customers

Divide the market into segments that differ in need, behaviour, or value, not only in demographics. For each segment, estimate size, need intensity, willingness to pay, and access. Pick a target segment with a reason. Personas and journey maps from the ux skill can make a segment concrete, but they rest on this sizing.

## Step 6: Synthesise into a position

Combine the findings into a SWOT (10.46): strengths and weaknesses from the organisation's side, opportunities and threats from the market scan. Then state the implication: where to play, what advantage to rely on, and what would have to be true. Separate evidence from inference throughout, and grade confidence in each claim.

## Step 7: Keep it current

Markets move. Record when each finding was gathered and when it should be refreshed. Win and loss reviews (`templates/win-loss-report.md`) feed evidence back into the competitive map and the sizing assumptions.

## Stop rules

The analysis is enough when the market is defined precisely, sizing is triangulated with sourced inputs and a stated range, competitors and alternatives are mapped with evidence, the relevant environmental forces are named with their effect, and a target segment and position are recommended with the assumptions that would change them.

## Common failures

- A market defined so broadly that the TAM is meaningless.
- One sizing method, unchecked.
- Competitor lists that leave out the do-nothing alternative.
- PESTLE tables filled in for completeness rather than relevance.
- Opinions presented as market evidence.

## Worked example

Supplier payment status portal: is an external offer worth pursuing beyond our own suppliers? The external figures below are illustrative, to show the method; in real work each one is cited to its published source and date.

Market definition: UK suppliers with under 50 staff that invoice manufacturers with annual revenue over 100 million pounds, over three years.

Sizing:
- Top down: take the published count of UK small businesses that sell to other businesses (illustratively 1.4 million) and the share that invoice large manufacturers (illustratively 8 percent), giving about 110,000 suppliers.
- Bottom up: our own 1,800 active suppliers are 70 percent small; if about 60 UK manufacturers of our size have similar supplier bases (an assumption to verify), that gives about 76,000 small suppliers.
- Reconciliation: the two differ by a factor of 1.4, within tolerance. SAM taken as 76,000 to 110,000; SOM over three years as 2 to 5 percent, depending on adoption by the manufacturers who pay them.

Competition: AP suite supplier portals (need login, per-seat pricing), e-invoicing networks (strong on submission, weak on status), and the real incumbent, phoning AP.

Implication: the internal portal is worth building for our own suppliers; an external product depends on manufacturers adopting it, which is an assumption to test before any investment case.

## Sources

- `babok-3.0-2015`: techniques 10.4 and 10.46 and tasks 6.1, 6.2, and 7.6.
- The source library does not yet hold curated market research references (for example on sizing methods or competitive strategy). Curating at least two is part of the source work in `docs/world-class-content-plan.md` (task 3.3); until then, cite each market figure to its own primary source.
