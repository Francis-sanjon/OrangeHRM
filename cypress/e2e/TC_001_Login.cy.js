const { Given, When, And, Then } = require("@badeball/cypress-cucumber-preprocessor");
import login from './PageObjects/Login.spec'
const lp = new login();

Given('User is at the login page', () => {
    cy.visit('/')
})

When('User enters username as {string} and password as {string}', (username, password) => {
    lp.userName().type(username)
    lp.password().type(password)
})

And('User clicks on login button', () => {
    lp.loginBtn().click()
})

Then('User is able to successfully login to the Website', () => {
    cy.url().should('include', 'viewEmployeeList')
})
/*
Then('User unable to login to the Website', () => {
    cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
})*/


