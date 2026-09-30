# PRD: Supplier Payment Status Portal, Release 1

Problem: suppliers cannot see whether an invoice is approved or when it will be paid, so they phone AP. Status queries are 40 percent of AP calls (2,600 in March to May); 9 of 12 interviewed suppliers named "no visibility" as their top frustration.
Users: small supplier finance contacts (PER-002). Job: when an invoice is outstanding, I want its status and payment date so I can plan cash without chasing.
Goals: G-001 self-service share of status queries 0 to 60 percent by June 2027 (primary). G-002 status calls 210 to 90 a week. Non-goals: invoice submission; disputes (release 3).
Scope: R1 status lookup and payment date for the top 200 suppliers; R2 all suppliers and notices.
PR-001 Look up an invoice by invoice number and supplier reference (Must, G-001). Given a valid pair, status shows within 2 seconds; given an unknown pair, a neutral "not found" with no data leak.
PR-002 Show the expected payment date for approved invoices (Must, G-001). Equals the next payment run; shown as a range until accuracy is proven.
Flows: on-hold invoices show "On hold: we will contact you" and the AP email (Figma frame 12).
NFR-002 95th percentile under 2 seconds at 150 users; NFR-007 WCAG 2.2 AA.
DEP-001 ERP status API (Tom Reyes, by 15 August). A-061 payment run dates are reliable; tested over 8 weeks. RSK-011 data exposure, mitigated by two-factor match and a penetration test (Tom Reyes).
Rollout: top 200 suppliers behind a flag; lookup events and call tagging instrumented; go when the penetration test passes and dates are within a day for 90 percent of invoices over 4 weeks.
