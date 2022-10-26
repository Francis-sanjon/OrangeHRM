import { And, When } from "@badeball/cypress-cucumber-preprocessor";
import Locations from './PageObjects/Locations.spec'
const l = new Locations();

And('User clicks Organization option', () => {
    cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').should('be.visible').click()

})
And('User clicks Location option', () => {
    l.Location().click()

})
And('User clicks check box to clear previous details', () => {
    cy.get('[class="oxd-table"]').click()

})
And('User clicks delete1 button', () => {
    l.CheckBox().check({ force: true })
    l.Delete().click()

})

And('User clicks Yes delete button', () => {
    l.yesDelete().click()

})
And('User clicks Add butting in Location', () => {
    l.add().click()

})
When('User enters Name, City,Zip Code,Phone,Address,State,Country,Fax, Notes', () => {
    l.name().type('Santhosh')
    l.State().type('Tamil nadu')
    l.zip().type(600000)
    l.phone().type(9898982828)
    l.fax().type(445566)
    l.country().type('{downArrow}{downArrow}{downArrow}{enter}').click()
    l.address().type("No:10 chennai , tamil nadu, india")
    l.notes().should('be.visible').type('Details has been updated')
})
And('User clicks save button iN Location', () => {

    l.save().click()
})