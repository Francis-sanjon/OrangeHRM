import { And, Then, When } from "@badeball/cypress-cucumber-preprocessor"
import SearchEmp from './PageObjects/Emp_Search.spec'
const es = new SearchEmp();

describe('', () => {
    And('User clicks EmployeeList option', () => {
        es.employeeList().click()
    })
    Then('User verify the EmployeeList page', () => {
        cy.title().should('eq', 'OrangeHRM')
    })
    Then('User enters Employee Name,Employee ID', () => {
        es.empName().type('Francis')
        es.empID().type(555)
        es.empStatus().type('{downArrow}{upArrow}{downArrow}{enter}')


    })

})