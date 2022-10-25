Feature: TC_006_PayGrades

    Scenario: adding Pay Grades in OrangeHRM webpage

        Given User is at the login page
        When User enters username and password
        And User clicks on login button
        Then User is able to successfully login to the Website
        And User clicks Admin option
        And User clicks job1 option
        And User clicks Pay Greade option
        And User clicks +Add button from Pay Greade
        When User enters the Grade
        And User clicks on save button
