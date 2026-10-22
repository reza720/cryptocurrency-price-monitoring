# Figure 2. Sequence Diagram — Add Coin

```mermaid
sequenceDiagram
    actor Admin as Administrator
    participant Register as registerCoin.js
    participant Zod as Zod validation
    participant Service as coinService.js
    participant DB as Coin model / PostgreSQL

    Admin->>Register: Submit coin details
    alt Input is valid
        Register->>Zod: Validate input schema
        Zod-->>Register: Validation result
        Register->>Service: Create/update request with valid data
        Service->>DB: Persist coin record
        DB-->>Service: Database result
        Service-->>Register: Operation result
        Register-->>Admin: Show success
    else Input is invalid
        Register->>Zod: Validate input schema
        Zod-->>Register: Validation errors
        Register-->>Admin: Show error
    end
```

**Description:** The administrator submits coin information. `registerCoin.js` sends the input through Zod validation, then calls `coinService.js` to persist the coin using the Coin model and PostgreSQL database. Validation and database failures must not be reported as successful saves.

**Note:** Success is returned only after the database operation succeeds. Invalid input or a database failure should produce an error result.
