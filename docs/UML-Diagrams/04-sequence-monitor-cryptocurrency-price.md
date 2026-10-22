# Figure 4. Sequence Diagram — Monitor Cryptocurrency Price

```mermaid
sequenceDiagram
    participant Actions as GitHub Actions
    participant Worker as worker.js
    participant CoinService as coinService.js / DB
    participant PriceService as coinLoreService.js / CoinLore API
    participant Notify as notificationService.js

    Actions->>Worker: Trigger scheduled workflow
    Worker->>CoinService: Retrieve configured coins and ranges
    CoinService-->>Worker: Return configured coin list
    Worker->>PriceService: Request current price data
    PriceService-->>Worker: Return price data or API error

    alt Price condition is met
        Worker->>Worker: Compare current price against configured range
        Worker->>Notify: Request notification
        Notify-->>Worker: Notification result / error
    else Price condition is not met
        Worker->>Worker: Skip notification
    end
```

**Description:** GitHub Actions triggers `worker.js`. The worker loads configured coins and ranges, requests price data through `coinLoreService.js`, compares the price with the configured condition, and requests notification only when that condition is met.

**Verification note:** Confirm the exact schedule, price-range rule, and repeat-notification behavior in `monitor.yml` and the source code.
