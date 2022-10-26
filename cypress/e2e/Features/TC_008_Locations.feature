Feature: TC_008_Adding Location

    Scenario: Adding Location in OrangeHRM webpage

        Given User is at the login page
        When User enters username and password
        And User clicks on login button
        Then User is able to successfully login to the Website
        And User clicks Admin option
        And User clicks Organization option
        And User clicks Location option
        And User clicks check box to clear previous details
        And User clicks delete1 button
        And User clicks Yes delete button
        And User clicks Add butting in Location
        When User enters Name, City,Zip Code,Phone,Address,State,Country,Fax, Notes
        And User clicks save button iN Location