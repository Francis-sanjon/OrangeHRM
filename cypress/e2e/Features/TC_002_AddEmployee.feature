Feature: Add Employee

    Scenario: Adding new Employee in OrangeHRM webpage

        Given User is at the login page
        When User enters username and password
        And User clicks on login button
        Then User is able to successfully login to the Website
        And User clicks Add Employee open
        Then User enters First Name,Middle Name,Last Name ane EmployeeID
        And User clicks save Button