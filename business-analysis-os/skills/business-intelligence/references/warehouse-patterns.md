# Warehouse and Pipeline Patterns Reference

## Layers

- Staging: raw landing, no transformation, retained for replay and audit.
- Integration: conformed, deduplicated, historised. The place where business rules are applied once.
- Presentation: marts shaped for consumption, denormalised for query speed.

Keep business logic in the integration layer. Logic that lives in the reporting tool ends up copied and diverging.

## Dimensional design

- Facts hold measures at a stated grain. One grain per fact table, always written down.
- Dimensions hold the context you filter and group by. Conform dimensions across marts so "customer" means the same thing everywhere.
- Slowly changing dimensions: type 1 overwrites and loses history, type 2 adds a row and keeps it, type 3 keeps one prior value. Choose per attribute, not per table, and state why.
- Degenerate dimensions (an order number sitting in the fact) are fine and often correct.
- Additive, semi-additive, and non-additive measures behave differently when rolled up. Mark which is which; balances do not sum across time.

## Load patterns

| Pattern | Use when | Watch for |
| --- | --- | --- |
| Full reload | Small, no reliable change marker | Cost grows silently with volume |
| Incremental by timestamp | Source has a reliable modified date | Late-arriving and backdated records |
| Change data capture | High volume, low latency need, source supports it | Schema drift, delete handling |
| Snapshot | Point-in-time state matters (balances, headcount) | Storage growth, snapshot timing consistency |

Always define: the watermark, what happens to deletes, how a failed run is re-run safely (idempotency), and how late-arriving data is corrected.

## ELT versus ETL

Transform after load when the target platform is cheap and elastic and lineage tooling is good. Transform before load when the target is expensive, when data must not land in raw form for compliance reasons, or when the source is the only place a rule can be applied correctly.

## Data quality dimensions

| Dimension | Test | Example threshold |
| --- | --- | --- |
| Completeness | Null rate on critical fields | Under 0.5 percent |
| Validity | Conforms to format or reference list | 100 percent for currency codes |
| Uniqueness | Duplicate rate on the business key | Zero |
| Consistency | Cross-system agreement on the same fact | Within tolerance, stated |
| Timeliness | Arrival within the load window | 99 percent of runs |
| Accuracy | Agreement with an authoritative source on a sample | Stated sample size and pass rate |

For each rule state the threshold, the check frequency, who is alerted, and whether a breach blocks the load or only warns. A quality rule with no consequence is a comment.

## Entity matching

When the same customer or product arrives from several systems: define the match key hierarchy (exact identifier first, then deterministic composite, then probabilistic), the confidence threshold for an automatic merge, the survivorship rule for conflicting attributes, and the manual review queue for the middle band. Record every merge so it can be reversed.

## Reconciliation

Every mart carries at least one reconciliation control: row counts and a control total against the source, per load, stored and visible. Users trust a warehouse that can prove itself and abandon one that cannot.
