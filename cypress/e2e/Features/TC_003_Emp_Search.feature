Feature: TC_003_Emp_Search

    Scenario: Searching Employee in OrangeHRM webpage

        Given User is at the login page
        When User enters username and password
        And User clicks on login button
        Then User is able to successfully login to the Website
        And User clicks EmployeeList option
        Then User verify the EmployeeList page
        And User enters Employee Name,Employee ID