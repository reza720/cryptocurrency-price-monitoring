# Cryptocurrency Price Monitoring and Email Notification System
## Product Backlog

**Product Owner:** Product Owner  
**Course:** Software Engineering  
**Project:** Cryptocurrency Price Monitoring and Email Notification System  
**Last Updated:** October 21, 2026

## 1. Introduction

The Product Backlog is the prioritized list of work required to build the Cryptocurrency Price Monitoring and Email Notification System. It includes user stories and technical stories covering coin management, email subscriptions, cryptocurrency price retrieval, price-range monitoring, email notifications, automation, testing, and documentation.

The backlog is expected to change as the team learns more and receives feedback. Sprint assignments are planning targets, not guarantees. The Product Owner may reorder items based on value, risk, dependencies, and feedback.

**Project technology:** Node.js, PostgreSQL hosted on Neon, Sequelize ORM, CoinLore REST API, Gmail SMTP, Zod validation, and GitHub Actions.

## 2. Functional Backlog Items (User Stories)

| ID | User Story | Acceptance Criteria | Priority | Acceptance Criteria | Planned Sprint | Responsible Role |
|---|---|---|---|---:|---|---|
| US-001 | As an Administrator, I want to configure the application environment so that required services can connect securely | Required variables are checked at startup; missing configuration produces a clear error; secrets are not printed in logs. | High | Required environment variables are documented; missing required settings produce a clear error; secrets are not stored in source control. | Sprint 1 | Backend Developer  Reza Panahi |
| US-002 | As a Administrator, I want the application to connect to the Neon PostgreSQL database so data can be stored reliably. | Connection succeeds with valid settings; connection failure is handled clearly; credentials are kept outside source code. | High | A valid connection succeeds; a failed connection is reported clearly; database credentials are read from environment variables.| Sprint 1 | Backend Developer Reza Panahi |
| US-003 | As a Administrator, I want Coin and Email database models so coin monitoring settings and email addresses can be stored. | Sequelize models match the agreed fields; primary keys and required constraints are defined; models can be synchronized or migrated as planned. | High | The Coin model contains the agreed fields; records persist after a new run; required fields are validated. | Sprint 1 | Backend Developer Auinullha Amery  |
| US-004 | As a user, I want to register a cryptocurrency to monitor so I can track its price. | Coin record is saved; required fields are validated; duplicate or invalid entries are rejected with a useful message. | High | 5 | Sprint 2 | Backend Developer |
| US-005 | As a user, I want to view registered cryptocurrencies so I can see what the system monitors. | A list of saved coins is returned; each item shows its identifier and configured price range; empty results are handled. | High | 3 | Sprint 2 | Backend Developer Auinullha Amery  |
| US-006 | As a user, I want to update a coin's monitoring settings so I can change the price range or coin details. | Existing record is updated; input is validated; unknown coin IDs return a clear error. | Medium | 3 | Sprint 2 | Backend Developer |
| US-007 | As a user, I want to remove a cryptocurrency from monitoring so unwanted alerts stop. | Correct record is removed or disabled; unknown IDs are handled; remaining coin records are unaffected. | Medium | 3 | Sprint 2 | Backend Developer |
| US-008 | As a user, I want to register an email address so I can receive price notifications. | Valid email is stored; invalid email is rejected; duplicate email handling is consistent and documented. | High | 5 | Sprint 2 | Backend Developer |
| US-009 | As a user, I want to retrieve registered email addresses so I can verify notification recipients. | The service returns registered addresses without exposing credentials or unrelated sensitive data; empty results are handled. | Medium | 3 | Sprint 2 | Backend Developer |
| US-010 | As a user, I want to update a registered email address so notifications go to the correct recipient. | Valid address is saved; invalid address is rejected; missing record produces a clear error. | Medium | 3 | Sprint 2 | Backend Developer |
| US-011 | As a user, I want to remove a registered email address so I no longer receive notifications at that address. | Correct address is removed or disabled; missing address is handled; unrelated subscriptions remain unchanged. | Medium | 3 | Sprint 2 | Backend Developer |
| US-012 | As a user, I want the system to retrieve current cryptocurrency prices from CoinLore so monitoring uses current market data. | API response is parsed correctly; requested coin is matched reliably; timeout, invalid response, and API errors are handled. | High | 8 | Sprint 3 | API/Backend Developer |
| US-013 | As a user, I want the system to compare current prices with configured minimum and maximum values so it can detect when a price leaves the range. | Price is compared against the saved boundaries; below-range and above-range cases are detected; in-range prices do not trigger an out-of-range alert. | High | 5 | Sprint 3 | Backend Developer |
| US-014 | As a user, I want to receive an email when a monitored coin moves outside its configured range so I can respond to price changes. | Email contains coin name, current price, configured range, and alert reason; send failures are handled and logged without exposing secrets. | High | 8 | Sprint 3 | Email/Backend Developer |
| US-015 | As a admin, I want notification emails to use configured Gmail SMTP settings so the application can send alerts. | SMTP configuration is read from environment variables; a test message can be sent; authentication or delivery errors are reported safely. | High | 5 | Sprint 3 | Email/Backend Developer |
| US-016 | As a admin, I want the monitoring process to run automatically on a schedule so prices are checked without manual execution. | The monitoring command runs successfully when invoked; schedule is configured in GitHub Actions; failures are visible in workflow logs. | High | 8 | Sprint 4 | DevOps/Backend Developer |
| US-017 | As a user, I want notification emails to be understandable and consistent so I can quickly identify an alert. | Email subject identifies a price alert; body includes the relevant coin and price details; content is readable on common email clients. | Medium | 3 | Sprint 4 | Email/Backend Developer |
| US-018 | As a admin, I want errors and monitoring results logged so I can investigate problems. | Logs record useful success/failure context; passwords, tokens, and full secrets are never logged; API and email failures are distinguishable. | High | 5 | Sprint 4 | Backend Developer |
| US-019 | As a admin, I want setup and usage instructions so another team member can run and maintain the project. | README explains prerequisites, environment variables, installation, database configuration, and how to run monitoring; no real secrets are included. | Medium | 3 | Sprint 4 | Product Owner + Team |
| US-020 | As a admin, I want a reliable end-to-end check so the team can verify the main monitoring workflow. | Test covers saved coin settings, price retrieval or a controlled mock, range comparison, and notification behavior; test instructions are documented. | High | 8 | Sprint 4 | QA/Team |

## 3. Enhancement Tasks

| ID | Enhancement | Acceptance Criteria | Priority | Story Points | Planned Sprint | Responsible Role |
|---|---|---|---|---:|---|---|
| ENH-001 | Improve alert email formatting | Email is clearly formatted and includes all relevant alert details. | Medium | 3 | Sprint 4 | Email/Backend Developer |
| ENH-002 | Improve monitoring summary logs | Each run provides a concise summary of checked coins, alerts, and errors without exposing secrets. | Medium | 3 | Sprint 4 | Backend Developer |
| ENH-003 | Add duplicate-alert protection | Repeated checks do not unnecessarily send the same alert continuously; behavior is documented and tested. | Medium | 5 | Sprint 4 / Future | Backend Developer |
| ENH-004 | Add extra API resilience | Retries or backoff are used where appropriate; repeated API failures stop safely and are logged. | Medium | 5 | Future | Backend Developer |

## 4. Non-Functional Backlog Items (Technical Stories)

| ID | Technical Story | Acceptance Criteria | Priority | Story Points | Planned Sprint | Responsible Role |
|---|---|---|---|---:|---|---|
| NFR-001 | As a system, I must keep database and SMTP credentials outside the code. | Secrets are supplied through environment variables or GitHub Actions secrets; `.env` is excluded from Git; no real credentials appear in repository history or logs. | High | 5 | Sprint 1 | All Developers |
| NFR-002 | As a system, I must validate inputs consistently. | Zod schemas validate coin and email inputs; invalid data is rejected before database operations; errors are understandable. | High | 5 | Sprint 2 | Backend Developer |
| NFR-003 | As a system, I must handle external API failures safely. | Timeouts, unavailable service, malformed responses, and rate-limit responses do not crash the whole run unexpectedly; errors are logged. | High | 5 | Sprint 3 | API/Backend Developer |
| NFR-004 | As a system, I must handle email delivery failures safely. | SMTP failures are caught and logged; one failed message does not silently appear successful; sensitive information is not logged. | High | 3 | Sprint 3 | Email/Backend Developer |
| NFR-005 | As a system, I must use maintainable modular code. | Coin, email, API, notification, configuration, and database responsibilities are separated; names and functions are understandable. | Medium | 5 | Sprint 4 | Backend Developer |
| NFR-006 | As a system, I must provide repeatable automated checks. | Available tests run using documented commands; CI workflow reports failures; tests do not require real user credentials. | High | 5 | Sprint 4 | QA/Team |
| NFR-007 | As a system, I must keep the monitoring workflow reliable and observable. | Scheduled workflow status is visible; failures have actionable logs; the workflow does not report success after a failed monitoring run. | High | 5 | Sprint 4 | DevOps/Backend Developer |
| NFR-008 | As a system, I must document installation and configuration clearly. | A new team member can follow the README; required environment variable names are documented without secret values. | Medium | 3 | Sprint 4 | Product Owner + Team |

## 5. Prioritization Strategy

- **High priority:** Database foundation, secure configuration, input validation, price retrieval, range comparison, email notifications, scheduled execution, and essential testing.
- **Medium priority:** Update/delete operations, readable email formatting, improved logs, documentation, and resilience enhancements.
- **Future enhancements:** Duplicate-alert suppression and additional retry/backoff improvements if not completed within the planned sprint.

Priority can change based on implementation dependencies, project risks, and team feedback.

## 6. Sprint Planning Guidance

The following is a proposed plan based on the project roadmap. Confirm the status and story points with the team during sprint planning and review.

| Sprint | Planned Focus | Main Backlog Items | Expected Outcome |
|---|---|---|---|
| Sprint 1 | Foundation and database | US-001–US-003, NFR-001 | Configuration, database connection, and core models are ready. |
| Sprint 2 | Coin and email management | US-004–US-011, NFR-002 | CRUD operations and input validation are working. |
| Sprint 3 | Price monitoring and alerts | US-012–US-015, NFR-003–NFR-004 | API prices are checked against configured ranges and alerts can be sent. |
| Sprint 4 | Automation, quality, and release readiness | US-016–US-020, ENH-001–ENH-002, NFR-005–NFR-008 | Scheduled workflow, logs, tests, and documentation are ready for demonstration. |
| Future / stretch | Reliability improvements | ENH-003–ENH-004 | Duplicate-alert protection and extra API resilience are added if time permits. |

**Sprint capacity note:** Story points are relative estimates, not hours. The team should select work based on actual capacity and dependencies. Do not claim a sprint is complete until its acceptance criteria have been verified.

## 7. What Changed and Why

The backlog may be reprioritized as implementation progresses. For example:

- If database setup or environment configuration blocks several stories, resolve that foundation before adding features.
- If the CoinLore API or SMTP service is unreliable, prioritize error handling and observable logs.
- If the scheduled workflow is not dependable, prioritize it before optional enhancements.
- Keep duplicate-alert protection as a follow-up unless repeated alerts become a major stakeholder concern.

Any change to sprint scope should be discussed with the team and recorded during planning or review. Do not report a change as already completed unless the team has actually agreed to and implemented it.

## 8. Definition of Done

A backlog item is considered Done when:

1. The implementation meets its acceptance criteria.
2. Input validation and error handling are included where relevant.
3. Tests or a documented verification step pass.
4. Code is reviewed by a team member where the workflow allows.
5. Documentation is updated when behavior or configuration changes.
6. No credentials or secrets are committed to GitHub.
7. Changes are committed to the project repository.
8. The Product Owner or designated reviewer accepts the result.

## 9. Product Owner Review Checklist

- Are the highest-value items at the top of the backlog?
- Are acceptance criteria specific and testable?
- Are story points estimated by the team?
- Are dependencies and risks visible?
- Does the planned sprint fit the team's real capacity?
- Are completed items supported by test or demonstration evidence?
- Have decisions and scope changes been recorded?

---

**Prepared by:** Product Owner  Atifa Rahimi
**Project:** Cryptocurrency Price Monitoring and Email Notification System  
**Document:** Product Backlog
