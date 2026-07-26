---
type: deliverable
domain: finance
status: draft
version: 1.0.0
---

# Business Case: Supplier Invoice Approval Automation

## Executive Summary

Manual invoice handling in accounts payable is slow, error-prone, and a fraud risk, and it costs the business early-payment discounts. This case recommends funding a workflow automation that captures invoices, matches them to purchase orders, routes approvals by amount, and posts to the existing finance system. Over three years the option delivers a positive net present value with payback inside the second year. The decision required is approval of the build budget, with audit controls treated as mandatory.

## Need Assessment

Accounts payable keys invoices by hand and chases approvals by email. The impact today: high processing cost per invoice, slow approval, missed early-payment discounts, and duplicate or fraudulent payments passing unchecked. The cost of doing nothing is continued leakage on discounts and fraud plus rising staff cost as volume grows. The need aligns with the finance goal of stronger controls and lower cost to process.

## Desired Outcomes

| ID | Desired outcome | Measure | Baseline | Target |
| --- | --- | --- | --- | --- |
| OUT-001 | Faster approval | Average approval cycle time | 6 days | Under 1 day |
| OUT-002 | Fewer errors and bad payments | Duplicate or erroneous payment rate | Current rate | 90 percent reduction |
| OUT-003 | Capture early-payment discounts | Share of eligible discounts captured | Low | Most eligible discounts captured |
| OUT-004 | Lower processing cost | Cost per invoice processed | Current cost | 50 percent reduction |

## Options Considered

| Option | Scope | Feasibility | Key risks and assumptions | Indicative cost | Indicative benefit |
| --- | --- | --- | --- | --- | --- |
| Do nothing | No change | n/a | Leakage and cost continue to grow | 0 | Negative |
| Workflow automation in front of finance system | Capture, match, route, post | Good; finance system has an API | Depends on API access and clean PO data | Moderate | High |
| Replace the finance system | New finance platform | Costly and risky | Long, expensive, out of proportion to the need | High | High but delayed |

## Financial Analysis (base case)

Assumptions: discount rate 10 percent, three-year horizon, benefits from staff time saved, discounts captured, and reduced bad payments.

| Line | Year 0 | Year 1 | Year 2 | Year 3 |
| --- | --- | --- | --- | --- |
| Total benefits | 0 | 180000 | 260000 | 280000 |
| Total costs | 220000 | 60000 | 60000 | 60000 |
| Net benefit | -220000 | 120000 | 200000 | 220000 |
| Cumulative net benefit | -220000 | -100000 | 100000 | 320000 |

| Metric | Result | Interpretation |
| --- | --- | --- |
| NPV | Positive (about 210000 at 10 percent) | Beats the discount rate |
| Payback | During year 2 | Cumulative net benefit turns positive |
| ROI over 3 years | About 120 percent | Strong return |

Sensitivity: if benefits are 25 percent lower, NPV stays positive and payback slips into early year 3. Break-even on adoption is roughly half the assumed discount capture.

Non-financial value: stronger controls and audit trail, lower fraud exposure, and better supplier relationships from on-time payment.

## Recommended Solution

Fund the workflow automation in front of the existing finance system. It meets the outcomes, is feasible given the finance system API, and is far lower risk and cost than replacement. Estimated build of one quarter with a phased rollout.

## Risks and Mitigations

| ID | Risk | Impact | Response | Owner |
| --- | --- | --- | --- | --- |
| RSK-001 | Finance system API access is limited | Cost and schedule rise | Technical spike before build | IT |
| RSK-002 | Poor PO data breaks matching | Manual fallback, less benefit | Data cleanse and matching tolerance | Finance |
| RSK-003 | Weak controls fail audit | Compliance gap | Design controls with audit up front | Audit |

## Decision Required

Approve the build budget for the workflow automation, with the audit controls as a mandatory condition. Approver: Finance Director.
