# Requirements Specification

## 1. Functional Requirements

### 1.1 Coin Management
- **FR-01 — Store Coin Configurations:** The system shall store the cryptocurrencies to monitor in PostgreSQL.
- **FR-02 — Configure Price Ranges:** The system shall store a minimum and maximum price for each monitored coin.
- **FR-03 — Create Coin Records:** The system shall allow an administrator to create coin configurations using command-line scripts.
- **FR-04 — List Coin Records:** The system shall allow an administrator to list stored coin configurations using command-line scripts.
- **FR-05 — Update Coin Records:** The system shall allow an administrator to update stored coin configurations using command-line scripts.
- **FR-06 — Delete Coin Records:** The system shall allow an administrator to delete stored coin configurations using command-line scripts.

### 1.2 Email Recipient Management
- **FR-07 — Store Email Recipients:** The system shall store email addresses that can receive notifications.
- **FR-08 — Create Email Recipients:** The system shall allow an administrator to add email recipients using command-line scripts.
- **FR-09 — List Email Recipients:** The system shall allow an administrator to list stored email recipients using command-line scripts.
- **FR-10 — Update Email Recipients:** The system shall allow an administrator to update stored email recipients using command-line scripts.
- **FR-11 — Delete Email Recipients:** The system shall allow an administrator to remove stored email recipients using command-line scripts.

### 1.3 Input Validation
- **FR-12 — Validate Inputs:** The system shall validate applicable inputs for create and update scripts using Zod before performing database changes.

### 1.4 Price Monitoring
- **FR-13 — Retrieve Current Prices:** During each monitoring run, the worker shall retrieve current prices for configured coins through the CoinLore REST API.
- **FR-14 — Compare Prices:** The worker shall compare each successfully retrieved price with the corresponding coin's configured minimum and maximum prices.
- **FR-15 — Use Stored Configuration:** The worker shall load coin configurations and email recipients from the database for each monitoring run, allowing administrators' changes to affect subsequent runs.

### 1.5 Email Notifications
- **FR-16 — Send Notifications:** When a coin's current price satisfies its configured price condition, the worker shall request an email notification through the notification service.

### 1.6 Scheduled Execution and Error Handling
- **FR-17 — Run Automatically:** GitHub Actions shall execute the worker according to the configured schedule without requiring manual initiation of each run.
- **FR-18 — Handle Failures:** The system shall handle database, API, and email errors in a controlled manner and report relevant failures through logs and workflow results.

## 2. Non-Functional Requirements

### 2.1 Technology Requirements
- **NFR-01 — Technology Stack:** The application shall use Node.js, PostgreSQL hosted on Neon, and Sequelize as its ORM.
- **NFR-02 — Price Data Integration:** The application shall retrieve cryptocurrency price information through the CoinLore REST API.
- **NFR-03 — Email Delivery:** The application shall use Nodemailer with Gmail SMTP to send email notifications.
- **NFR-04 — Input Validation:** The application shall use Zod to validate applicable inputs before database writes.

### 2.2 Security
- **NFR-05 — Credential Security:** Database credentials, SMTP credentials, and other sensitive values shall not be committed to the repository. GitHub Actions shall receive required workflow secrets through GitHub Secrets or an equivalent secure configuration mechanism.

### 2.3 Reliability and Data Integrity
- **NFR-06 — Error Handling:** Expected failures involving external APIs, the database, or email delivery shall be handled explicitly rather than causing uncontrolled application errors.
- **NFR-07 — Data Correctness:** Invalid price ranges, invalid prices, and malformed API responses shall not be silently interpreted as valid price matches.

### 2.4 Maintainability and Code Quality
- **NFR-08 — Modular Structure:** The application shall separate configuration, data models, business operations, external API integration, notification delivery, and command-line scripts into understandable modules.
- **NFR-09 — Code Consistency:** ESLint and Prettier shall be used to enforce the project's configured linting and formatting rules.

### 2.5 Testability
- **NFR-10 — Testable Core Logic:** Core behavior, particularly input validation, price-range matching, API response handling, and notification decisions, should be independently testable where practical.

### 2.6 Operational Requirements
- **NFR-11 — Scheduled Execution:** The worker shall be suitable for execution as a finite scheduled job on a GitHub Actions runner rather than requiring a permanently running process.
- **NFR-12 — Operational Logging:** Each monitoring run shall produce sufficient logs to determine whether it started, processed configured coins, encountered errors, and completed or failed. Logs shall not expose credentials or other secrets.