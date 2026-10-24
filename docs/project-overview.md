# Cryptocurrency Price Monitoring System — Product Overview

## 1. Product Summary
**Product name:** Cryptocurrency Price Monitoring System  
**Product type:** Automated Node.js script / scheduled background worker  
**Primary purpose:** Monitor configured cryptocurrency prices and send email notifications when a coin's current price falls within its configured price range.

The system runs automatically at a configured interval through GitHub Actions. During each run, a Node.js worker retrieves configured coins and email recipients from a PostgreSQL database hosted on Neon, requests current cryptocurrency prices from the CoinLore REST API, compares each retrieved price with the configured range, and sends email notifications through Gmail SMTP when a configured condition is satisfied.

The system is a script-based application, not a web API. Administrators manage coins and email recipients by running command-line scripts. GitHub Actions provides scheduled execution of the monitoring worker.

### Product statement
An automated cryptocurrency price monitoring system that periodically checks CoinLore, compares current prices against configured price ranges, and emails notifications when the configured conditions are met.

## 2. Product Vision and Objectives
### Vision
Provide a simple, automated way to monitor selected cryptocurrencies against administrator-defined price ranges without requiring the administrator to check prices manually.

### Objectives
- Store the cryptocurrencies to monitor and their configured price ranges.
- Store the email addresses that should receive notifications.
- Retrieve current cryptocurrency prices from CoinLore's free REST API.
- Compare retrieved prices with the configured ranges.
- Send email notifications when a configured range condition is met.
- Run the monitoring process automatically on a schedule.
- Provide scripts for creating, listing, updating, and deleting coins and email recipients.
- Validate script inputs and handle external-service and database failures predictably.
- Keep credentials outside the source code and repository.

### Intended users
**Administrator:** Configures which coins are monitored, defines their minimum and maximum prices, and manages notification recipients using command-line scripts.
**Notification recipient:** Receives email notifications when a monitored coin meets its configured price condition. A recipient does not need to operate the scripts or access the database.

## 3. Product Scope
### In scope
- Node.js-based scripting and scheduled worker execution.
- PostgreSQL database hosted on Neon.
- Sequelize ORM for database access.
- Coin and email-recipient data models.
- CRUD scripts for coin records.
- CRUD scripts for email-recipient records.
- Zod validation for applicable create and update script inputs.
- CoinLore REST API integration for retrieving cryptocurrency prices.
- Comparison of current prices with configured minimum and maximum values.
- Email notification delivery through Gmail SMTP using Nodemailer.
- Scheduled execution through GitHub Actions.
- Environment-variable configuration and GitHub Secrets for sensitive credentials.
- Error handling, logging, code formatting, linting, and testing as required by the project.

### Out of scope unless added later
The following are not part of the currently defined product:
- A web frontend, dashboard, or public REST API.
- User registration, login, roles, or multi-user access control.
- Buying, selling, or trading cryptocurrency.
- Automatic trading or financial advice.
- Real-time, continuous market streaming.
- SMS, push, or in-app notifications.
- Machine-learning price predictions.
- A guarantee that an email will arrive immediately or that market prices will never be delayed.
- Advanced alert history, configurable alert cooldowns, or alert deduplication unless explicitly added as requirements.

## 4. Technology Stack
| Component | Technology | Responsibility |
|---|---|---|
| Runtime and scripting | Node.js | Runs CRUD scripts and the monitoring worker |
| Database | PostgreSQL on Neon | Persists monitored coins and email recipients |
| ORM | Sequelize | Defines models and performs database operations |
| Input validation | Zod | Validates data supplied to create and update scripts |
| Price data provider | CoinLore REST API | Supplies cryptocurrency market-price data |
| Email library | Nodemailer | Creates and sends email messages |
| Email transport | Gmail SMTP | Delivers notification emails |
| Scheduler and automation | GitHub Actions | Starts the worker on a configured schedule |
| Repository and source control | Git and GitHub | Stores source code and workflow configuration |
| Linting and formatting | ESLint and Prettier | Helps maintain consistent code quality |
| Automated testing | Test framework selected by the project | Verifies relevant application behavior |

## 5. System Architecture
### High-level architecture

```text
                    GitHub Actions
                         |
                  Scheduled workflow
                         |
                         v
                  Node.js worker
                         |
             +-----------+-----------+
             |                       |
             v                       v
       Neon PostgreSQL          CoinLore REST API
       - Coins                  - Current prices
       - Email recipients             |
             |                       |
             +-----------+-----------+
                         |
                         v
                 Price-range checker
                         |
                  Range condition met?
                     /         \
                   No           Yes
                   |             |
                   v             v
                  End       Notification service
                                  |
                                  v
                             Gmail SMTP
                                  |
                                  v
                          Email recipients
```

### 6. Main components
**GitHub Actions workflow (`monitor.yml`)**
- Starts the monitoring worker according to the configured schedule.
- Provides the runtime environment and required secrets to the job.
- Runs the configured Node.js command.
- Reports workflow success or failure through GitHub Actions.
**Node.js worker (`src/worker.js`)**
- Acts as the entry point for a monitoring run.
- Loads configured coins and recipients through the application services.
- Requests current prices from CoinLore.
- evaluates each coin's configured price condition.
- Requests notification delivery when a condition is satisfied.
- Handles or propagates failures according to the worker's error-handling policy.
**Database**
- Persists coin configuration and email recipient records.
- Is accessed through Sequelize models and service functions.
- Is hosted by Neon rather than by the GitHub Actions runner.
**CoinLore service (`coinLoreService.js`)**
- Encapsulates requests to the CoinLore REST API.
- Parses and returns the relevant market-price data.
- Handles unsuccessful responses, invalid data, and request failures.
**Coin service (`coinService.js`)**
- Provides operations for listing, creating, updating, and deleting coin records.
- Is used by the coin-management scripts and, where appropriate, the worker.
**Email service (`emailService.js`)**
- Provides operations for listing, creating, updating, and deleting recipient records.
- Is used by the email-management scripts and the worker.
**Notification service (`notificationService.js`)**
- Uses Nodemailer with Gmail SMTP to send notification messages.
- Separates email delivery from price retrieval and database CRUD operations.

## 7. Main Workflows
1. GitHub Actions starts `monitor.yml` according to its schedule.
2. The workflow checks out the repository and prepares the Node.js environment.
3. Dependencies are installed using the lockfile.
4. Required environment variables and secrets are supplied to the process.
5. The workflow runs `src/worker.js` using the configured Node.js command.
6. The worker connects to Neon PostgreSQL through Sequelize.
7. The worker loads configured coins and email recipients.
8. For each configured coin, the worker requests the corresponding current price from CoinLore.
9. The worker validates that the returned price is usable.
10. The worker compares the price with that coin's configured range.
11. If the condition is met, the worker asks the notification service to send an email to the configured recipients.
12. The worker logs relevant outcomes and errors.
13. The process ends, and GitHub Actions records the job result.
