import { And, Given, Then, When } from "@badeball/cypress-cucumber-preprocessor"

import login from './PageObjects/Login.spec'
import AddEmployee from './PageObjects/AddEmployee.spec'
const lp = new login();
const ae = new AddEmployee();

Given('User enters username and password', () => {
    lp.userName().type('Admin')
    lp.password().type('admin123')

})
And('User clicks Add Employee open', () => {
    ae.addEmpOption().click()
})
Then('User enters First Name,Middle Name,Last Name ane EmployeeID', () => {
    ae.firstName().type('Francis')
    ae.middleName().type('s')
    ae.LastName().type('Sanjon')
    ae.empID().type(12345)
})
And('User clicks save Button',()=>{
    ae.saveBtn().click()
    cy.get('.oxd-topbar-body-nav > ul > :nth-child(2)').click()
    cy.get('.orangehrm-container').each(($el,index,$list)=>{
const val=$list.val()
cy.log(val)

    })
})


