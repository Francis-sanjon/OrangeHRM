Feature: TC_005_AddJobTitles

    Scenario: adding Job Titles in OrangeHRM webpage

        Given User is at the login page
        When User enters username and password
        And User clicks on login button
        Then User is able to successfully login to the Website
        And User clicks Admin option
        And User clicks job option
        And User clicks +Add button
        When User enters Job Title, Job Description, Note
        And User clicks Save button
