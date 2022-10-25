Feature: TC_007_WorkingShift

  Scenario: adding Pay Grades in OrangeHRM webpage

    Given User is at the login page
    When User enters username and password
    And User clicks on login button
    Then User is able to successfully login to the Website
    And User clicks Admin option
    And User clicks job1 option
    And User clicks Work Shifts option
    And User clicks checkbox to clear the previous shift timing
    And User clicks delete button
    And User clicks confirm delete button
    And User clicks add button
    When User clicks Shift Name, Assigned Employee
    And User clicks Save in work shift button
