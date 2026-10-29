# Product Owner Sprint 2 Report

**Product Owner:** Atifa Rahimi\
**Project:** Cryptocurrency Price Monitoring System\
**Sprint:** Sprint 2\
**Report Date:** October 16, 2026

## 1. Achievement of Sprint Goal

### Sprint 2 Goal

As the Product Owner, my goal for Sprint 2 is to ensure that the
development team implements the main cryptocurrency monitoring and email
notification features and prepares the system for automated execution.

During this sprint, the developers are expected to integrate the
CoinLore REST API, retrieve cryptocurrency prices, check configured
price ranges, configure email notifications, and prepare the automated
monitoring workflow.

### Sprint 2 Activities

-   Continue development based on the project backlog.
-   Integrate the CoinLore REST API.
-   Implement cryptocurrency price retrieval and price-range checking.
-   Configure Gmail SMTP and implement email notifications.
-   Develop the main worker script.
-   Configure environment variables and secrets securely.
-   Create the GitHub Actions workflow and configure scheduled
    execution.
-   Review and test the completed features.

**Status:** Planned / In progress. The nine tasks below are the team's
Sprint 2 targets. Their final completion must be verified during the
sprint review.

## 2. Sprint 2 Backlog and Task Status

  -------------------------------------------------------------------------
                No. Sprint Backlog Task Assigned To       Status
  ----------------- ------------------- ----------------- -----------------
                 10 Integrate CoinLore  Ghulam Mahfoz     To be completed
                    REST API            Osmani            

                 11 Retrieve coin       Development Team  To be completed
                    prices                                

                 12 Implement           Development Team  To be completed
                    price-range                           
                    checking                              

                 13 Integrate Gmail     Ghulam Mahfoz     To be completed
                    SMTP                Osmani            

                 14 Implement email     Development Team  To be completed
                    notifications                         

                 15 Create main worker  Development Team  To be completed
                    script                                

                 16 Configure           Development Team  To be completed
                    environment                           
                    variables/secrets                     

                 17 Create GitHub       Development Team  To be completed
                    Actions workflow                      

                 18 Configure scheduled Development Team  To be completed
                    execution                             
  -------------------------------------------------------------------------

*The specific developers responsible for tasks not individually assigned
above should be confirmed with the team.*

## 3. Team Organization and Responsibilities

During Sprint 2, the development team will work on the nine assigned
tasks. These tasks depend on one another, so the team must coordinate
the API, monitoring, notification, and automation components.

### Product Owner Responsibilities

-   Explain the requirements and expected outcomes.
-   Prioritize the Sprint Backlog with the team.
-   Clarify acceptance criteria.
-   Monitor task progress and identify unfinished work.
-   Review completed features and provide feedback.
-   Confirm that the system meets the project requirements.

### Developer Responsibilities

-   Integrate the CoinLore REST API and retrieve cryptocurrency prices.
-   Implement price-range checking.
-   Configure Gmail SMTP and develop email notifications.
-   Create and test the main worker script.
-   Configure environment variables and protect secrets.
-   Set up GitHub Actions and scheduled execution.
-   Test the components and resolve technical issues.

## 4. Product Vision and Sprint Contribution

### Product Vision

Develop a Cryptocurrency Price Monitoring System that retrieves
cryptocurrency prices, checks configured price ranges, and sends email
notifications when specified conditions are met.

### Sprint 2 Contribution

The planned work will move the project toward its main purpose by
connecting cryptocurrency data retrieval with price monitoring and email
alerts. The worker script and GitHub Actions workflow will also prepare
the application to run automatically.

## 5. Sprint Metrics

  ------------------------------------------------------------------------
  Metric                                      Target Actual
  --------------------- ---------------------------- ---------------------
  Tasks Planned                                    9 9

  Tasks Completed                                  9 To be confirmed

  Tasks Remaining                0 at sprint closure To be confirmed

  Team Responsibilities                     Assigned To be confirmed

  Sprint Goal Achieved     Monitoring and automation To be confirmed
                                    features working 
  ------------------------------------------------------------------------

## 6. Issues and Challenges

The development team should pay attention to the following potential
challenges:

-   CoinLore API errors, timeouts, or unexpected responses.
-   Correctly matching retrieved prices with registered
    cryptocurrencies.
-   Ensuring price-range conditions trigger the correct alerts.
-   Gmail SMTP authentication and email delivery problems.
-   Keeping database and email credentials outside the source code.
-   Ensuring that the main worker script handles errors safely.
-   Confirming that GitHub Actions runs on the configured schedule.
-   Avoiding a successful workflow status when monitoring has failed.

**Blockers:** To be confirmed during team meetings.

## 7. Product Backlog Updates

The Sprint 2 priorities are tasks 10--18 from the project backlog. I
will review each task with the developers and update its status based on
implementation and testing results.

Tasks that are unfinished at the end of the sprint will be reviewed and
reprioritized for Sprint 3 or a later sprint, depending on their
importance and dependencies.

## 8. Sprint 3 Priorities

After reviewing Sprint 2 results, I will prepare Sprint 3 priorities
based on the remaining backlog.

### Proposed Priorities

1.  Complete any unfinished monitoring or automation tasks.
2.  Improve error handling and logging.
3.  Add unit tests and verify the complete workflow.
4.  Improve email formatting and monitoring summaries.
5.  Complete project documentation.
6.  Review code quality and system reliability.
7.  Verify that the system meets its acceptance criteria.

### Proposed Sprint 3 Goal

Improve the reliability and quality of the Cryptocurrency Price
Monitoring System, complete unfinished work from Sprint 2, and prepare
the project for end-to-end testing and demonstration.

## 9. Product Owner Assessment

Sprint 2 is focused on implementing the system's core monitoring,
notification, and automation functionality. The nine tasks form a
connected workflow: the application retrieves cryptocurrency prices,
checks configured ranges, sends notifications, and runs automatically.

As Product Owner, I will monitor the developers' progress, clarify
requirements, review test results, and confirm that each task meets its
acceptance criteria before it is marked as completed.

## 10. Product Owner Approval

**Sprint 2 Status:** In progress until all nine tasks have been
verified.

I have identified tasks 10--18 as the development team's Sprint 2
targets. Final acceptance will depend on reviewing the implementation
and confirming that the required functionality works correctly.

**Product Owner:** Atifa Rahimi\
**Signature:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\
**Date:** October 22, 2026\
**Next Review:** Sprint 2 Review / Sprint 3 Planning

## References

-   Product Backlog: `backlog/product-backlog.md`
-   Sprint Backlog: `docs/Sprint-Backlog/`
-   Scrum Documentation: `docs/scrum/`
-   Project Repository: Cryptocurrency Price Monitoring System

------------------------------------------------------------------------

**Prepared by:** Atifa Rahimi, Product Owner\
**Report Date:** October 16, 2026
