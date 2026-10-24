# User Stories

## 1. Coin Management
- **US-01 — Create Coin Configuration:** As an administrator, I want to add a cryptocurrency with its minimum and maximum price so that the system can monitor it.
- **US-02 — View Coin Configurations:** As an administrator, I want to list stored cryptocurrency configurations so that I can review the coins being monitored.
- **US-03 — Update Coin Configuration:** As an administrator, I want to update a cryptocurrency's price range so that I can change its monitoring conditions.
- **US-04 — Delete Coin Configuration:** As an administrator, I want to remove a cryptocurrency configuration so that the system no longer monitors that coin.

## 2. Email Recipient Management
- **US-05 — Add Email Recipient:** As an administrator, I want to add an email address so that the recipient can receive cryptocurrency price notifications.
- **US-06 — View Email Recipients:** As an administrator, I want to list registered email recipients so that I can review who receives notifications.
- **US-07 — Update Email Recipient:** As an administrator, I want to update a stored email address so that notifications are sent to the correct address.
- **US-08 — Delete Email Recipient:** As an administrator, I want to remove an email address so that the recipient no longer receives notifications.

## 3. Input Validation
- **US-09 — Validate Configuration Inputs:** As an administrator, I want the system to validate inputs before saving changes so that invalid coin configurations and email addresses are not stored.

## 4. Cryptocurrency Price Monitoring
- **US-10 — Retrieve Current Prices:** As a notification recipient, I want the system to retrieve current prices for configured cryptocurrencies so that I can receive notifications based on current market prices.
- **US-11 — Check Price Ranges:** As a notification recipient, I want the system to compare current cryptocurrency prices against configured minimum and maximum prices so that notifications are triggered when the configured condition is met.
- **US-12 — Apply Updated Configurations:** As an administrator, I want changes to coin configurations and email recipients to apply to subsequent monitoring runs so that the system uses the latest stored settings.

## 5. Email Notifications
- **US-13 — Receive Price Notifications:** As a notification recipient, I want to receive an email when a monitored cryptocurrency's price meets its configured condition so that I know when the price reaches my target range.

## 6. Scheduled Execution and Error Handling
- **US-14 — Automatic Monitoring:** As an administrator, I want the monitoring worker to run automatically on a configured schedule so that cryptocurrency prices are checked without manual execution.
- **US-15 — Identify Execution Failures:** As an administrator, I want database, API, and email delivery failures to be logged and reported so that I can identify and investigate problems.
- **US-16 — Review Monitoring Results:** As an administrator, I want each monitoring run to record its progress and outcome so that I can determine whether the process completed successfully.