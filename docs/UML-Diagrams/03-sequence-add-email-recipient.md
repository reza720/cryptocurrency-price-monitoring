# Figure 3. Sequence Diagram — Add Email Recipient

```mermaid
sequenceDiagram
    actor Admin as Administrator
    participant Register as registerEmail.js
    participant Zod as Zod validation
    participant Service as emailService.js
    participant DB as Email model / PostgreSQL

    Admin->>Register: Submit recipient details
    alt Input is valid
        Register->>Zod: Validate email/input schema
        Zod-->>Register: Validation result
        Register->>Service: Create request with valid data
        Service->>DB: Persist recipient record
        DB-->>Service: Database result
        Service-->>Register: Operation result
        Register-->>Admin: Show success
    else Input is invalid
        Register->>Zod: Validate email/input schema
        Zod-->>Register: Validation errors
        Register-->>Admin: Show error
    end
```

**Description:** The administrator submits recipient information. `registerEmail.js` validates the input with Zod and calls `emailService.js` to save the recipient through the Email model and PostgreSQL database.

**Note:** Validate recipient data before saving. Match the exact schema and stored fields to the source code.
