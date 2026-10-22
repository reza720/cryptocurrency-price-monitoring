# Figure 5. Sequence Diagram — Send Email Notification

```mermaid
sequenceDiagram
    participant Worker as worker.js
    participant Notify as notificationService.js
    participant EmailService as emailService.js / DB
    participant SMTP as Gmail SMTP
    actor Recipient as Recipient

    Worker->>Notify: Request notification after price match
    Notify->>EmailService: Retrieve configured recipients
    EmailService-->>Notify: Return recipient addresses
    Notify->>SMTP: Send email message
    SMTP->>Recipient: Deliver email
    Recipient-->>SMTP: Delivery / failure outcome
    SMTP-->>Notify: SMTP success or error
    Notify-->>Worker: Return notification result
```

**Description:** After a price condition is met, `worker.js` calls `notificationService.js`. The notification service retrieves configured recipients through `emailService.js` and sends the message through Gmail SMTP.

**Note:** This represents the intended notification path. Confirm exact recipient lookup and error-handling behavior against `notificationService.js` and `emailService.js`.
