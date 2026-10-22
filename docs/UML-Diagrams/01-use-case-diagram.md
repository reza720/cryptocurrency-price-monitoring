# Figure 1. Use-Case Diagram — Cryptocurrency Price Monitoring System

```mermaid
flowchart LR
    Admin([Administrator])
    Scheduler([GitHub Actions<br/>Scheduler])
    API[CoinLore REST API]
    SMTP[Gmail SMTP]

    subgraph System["Cryptocurrency Price Monitoring System"]
        UC1([Manage coins<br/>Create / Read / Update / Delete])
        UC2([Manage email recipients<br/>Create / Read / Update / Delete])
        UC3([Configure coin price range<br/>Minimum / Maximum])
        UC4([Run scheduled price monitoring])
        UC5([Retrieve current coin prices])
        UC6([Compare price with configured range])
        UC7([Send email notification])
    end

    Admin --- UC1
    Admin --- UC2
    Admin --- UC3
    Admin --- UC4
    Scheduler --- UC4
    UC4 -.-> UC5
    UC4 -.-> UC6
    UC5 --- API
    UC6 -. "condition met" .-> UC7
    UC7 --- SMTP
```

**Description:** The administrator manages coins, configured price ranges, and email recipients. GitHub Actions starts scheduled monitoring. The system retrieves prices from CoinLore, compares them with configured ranges, and uses Gmail SMTP to send notifications when the condition is met.

**Verification note:** Confirm the exact workflow schedule, price-range comparison rule, and notification behavior against the current `README.md` and source code.
