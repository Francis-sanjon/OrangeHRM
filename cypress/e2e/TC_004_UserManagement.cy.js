import { And, Then, When } from '@badeball/cypress-cucumber-preprocessor';

import UserManagement from './PageObjects/UserManagement.spec'

const UserManage = new UserManagement();

And('User clicks Admin option', () => {
    UserManage.admin().click()
})

And('User clicks User Management option', () => {
    UserManage.UserManagementbtn().click()
    //cy.get('[class="oxd-topbar-body-nav-tab-link"]').click()
})
And('User clicks user option', () => {
    UserManage.users().click()

})
And('User clicks +Add option', () => {
    UserManage.add().click()
})

Then('User verifies the user Add page', () => {
    cy.url().should('include', 'saveSystemUser')

})
When('User enters User Role,Employee name,Status,Username,password,confirm password', () => {
    UserManage.userRole().type('{downArrow}{enter}').click()
    UserManage.empName().type('Jadine{downArrow}{downArrow}{enter}')
    UserManage.status().type('{downArrow}{enter}').click()
    UserManage.userName().type('Francis1')
    UserManage.password().type('Welcome*123')
    UserManage.confirmPassword().type('Welcome*123')
    //cy.get('.oxd-button--secondary').click()
    //UserManage.saveBtn()
})
