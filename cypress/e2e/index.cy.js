const {Given, When,And, Then } = require("@badeball/cypress-cucumber-preprocessor");

//import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('User1 is at the login page', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
})

When('User1 enters username as {string} and password as {string}', (username, password) => {
  cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(username)
  cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(password)
})

And('User1 clicks on login button', () => {
  cy.get('.oxd-button').click()
})

Then('User1 is able to successfully login to the Website', () => {
    cy.url().should('include','viewEmployeeList')
})