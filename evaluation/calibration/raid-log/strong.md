# RAID Log (extract)

## Risks

Uncertain future events that could affect the outcome. Write each as cause, event, and effect. Rate probability and impact, choose a response, and name the trigger that would turn the risk into an issue. Carry high-scoring risks into the risk register for detailed scoring.

| ID | Risk (cause, event, effect) | Probability | Impact | Response | Trigger | Owner | Due | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| R-001 | Because approvers are not trained on the new tool, they may keep approving by email, so invoices bypass the workflow and the cycle-time target is missed | Medium | High | Reduce: role-based training and email approvals switched off at go-live | More than 10 percent of approvals by email in pilot week 1 | Priya Shah | 2026-07-01 | Open |

Probability and impact use High, Medium, or Low. Response is Avoid, Reduce, Transfer, or Accept.

## Assumptions

Things taken as true that the plan depends on. Record why each is believed, the impact if it proves wrong, who can confirm it, and by when.

| ID | Assumption | Basis | Impact if wrong | Confirmed by | Confirm by | Validation status |
| --- | --- | --- | --- | --- | --- | --- |
| A-001 | The ERP API supports posting approval status in real time | Vendor documentation v12 | Integration redesign, about 4 weeks | Tom Reyes, ERP architect | 2026-06-20 | Unconfirmed |

Validation status is Unconfirmed, Confirmed, or Invalidated. An invalidated assumption links to the risk or issue raised from it.

## Issues

Problems that have already happened and need action now. State the impact, the action being taken, and when it will be resolved.

| ID | Issue | Impact | Action | Owner | Target date | Status |
| --- | --- | --- | --- | --- | --- | --- |
| I-001 | Test environment ERP data is 6 months old, so three-way match tests fail on closed purchase orders | UAT start at risk by one week | Refresh test data from the June production snapshot | Tom Reyes | 2026-06-18 | In progress |

## Dependencies

Reliance on another team, system, supplier, or event. State the direction, the other party, what is needed, and when.

| ID | Dependency | Direction | Other party | Needed by | Status |
| --- | --- | --- | --- | --- | --- |
| D-001 | Single sign-on configured for the workflow tool | We depend on them | Identity team | 2026-06-25 | At risk |

Direction is "We depend on them" or "They depend on us". A dependency at risk of missing its date is also raised as a risk.

