Feature: User Management

    Scenario: adding user in OrangeHRM webpage

        Given User is at the login page
        When User enters username and password
        And User clicks on login button
        Then User is able to successfully login to the Website
        And User clicks Admin option
        And User clicks User Management option
        And User clicks user option
        And User clicks +Add option
        Then User verifies the user Add page
        When User enters User Role,Employee name,Status,Username,password,confirm password