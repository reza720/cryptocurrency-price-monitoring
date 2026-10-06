# Project Structure

```text
cryptocurrency-price-monitoring/
|
|-- .github/
|   `-- workflows/
|       `-- monitor.yml
|
|-- scripts/
|   |-- email/
|   |   |-- registerEmail.js
|   |   |-- retrieveEmails.js
|   |   |-- updateEmail.js
|   |   `-- deleteEmail.js
|   |
|   `-- coin/
|       |-- registerCoin.js
|       |-- retrieveCoins.js
|       |-- updateCoin.js
|       `-- deleteCoin.js
|
|-- src/
|   |-- config/
|   |   |-- env.js
|   |   `-- database.js
|   |
|   |-- models/
|   |   |-- Email.js
|   |   `-- Coin.js
|   |
|   |-- services/
|   |   |-- coinLoreService.js       # Consume CoinLore REST API
|   |   |-- coinService.js           # CRUD operations for coins
|   |   |-- emailService.js          # CRUD operations for emails
|   |   `-- notificationService.js   # Uses Nodemailer to send notifications
|   |
|   `-- worker.js                    # Checks coins, gets prices from CoinLore, checks price conditions, and sends notifications
|                                    
|
|-- docs/
|   |-- requirements/
|   |   |-- requirement-specification.md
|   |   `-- user-stories.md
|   |
|   |-- uml/
|   |   |-- use-case-diagram.png
|   |   |-- sequence-add-coin.png
|   |   |-- sequence-add-email.png
|   |   |-- sequence-monitor-price.png
|   |   `-- sequence-send-notification.png
|   |
|   |-- scrum/
|   |   |-- product-backlog.xlsx
|   |   |
|   |   |-- sprint-backlogs/
|   |   |   |-- sprint-1.xlsx
|   |   |   |-- sprint-2.xlsx
|   |   |   `-- sprint-3.xlsx
|   |   |
|   |   |-- burndown-charts/
|   |   |   |-- sprint-1.png
|   |   |   |-- sprint-2.png
|   |   |   `-- sprint-3.png
|   |   |
|   |   |-- meeting-minutes/
|   |   |   |-- sprint-1/
|   |   |   |   |-- sprint-planning.md
|   |   |   |   |-- daily-standup-1.md
|   |   |   |   |-- daily-standup-2.md
|   |   |   |   |-- daily-standup-3.md
|   |   |   |   |-- daily-standup-4.md
|   |   |   |   |-- sprint-review.md
|   |   |   |   `-- retrospective.md
|   |   |   |
|   |   |   |-- sprint-2/
|   |   |   |   |-- sprint-planning.md
|   |   |   |   |-- daily-standup-1.md
|   |   |   |   |-- daily-standup-2.md
|   |   |   |   |-- daily-standup-3.md
|   |   |   |   |-- daily-standup-4.md
|   |   |   |   |-- sprint-review.md
|   |   |   |   `-- retrospective.md
|   |   |   |
|   |   |   `-- sprint-3/
|   |   |       |-- sprint-planning.md
|   |   |       |-- daily-standup-1.md
|   |   |       |-- daily-standup-2.md
|   |   |       |-- daily-standup-3.md
|   |   |       |-- daily-standup-4.md
|   |   |       |-- sprint-review.md
|   |   |       `-- retrospective.md
|   |   |
|   |-- reviews/
|   |   |-- sprint-1-review.md
|   |   |-- sprint-2-review.md
|   |   `-- sprint-3-review.md
|   |
|   `-- project/
|       |-- project-overview.md
|       `-- team-structure.md
|
|-- .gitignore
|-- package.json
|-- package-lock.json
`-- README.md
```