Feature: TC_009_Checking the Structure

    Scenario: Checking the Structure in OrangeHRM webpage

        Given User is at the login page
        When User enters username and password
        And User clicks on login button
        Then User is able to successfully login to the Website
        And User clicks Admin option
        And User clicks Organization option
        And User clicks Structure option
        And User clicks DwonArrow nearby Engineer option
        And User clicks DwonArrow nearby Sales & Marketing option
        And User clicks DwonArrow nearby Client Services option
