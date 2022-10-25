import { And, When } from "@badeball/cypress-cucumber-preprocessor";
import Locations from './PageObjects/Locations.spec'
const l=new Locations();

And('User clicks Organization option',()=>{
    cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').should('be.visible').click()
    
})
And('User clicks Location option',()=>{
l.Location().click()
    
})
And('User clicks check box to clear previous details',()=>{
cy.get('[class="oxd-table"]').click()
    
})
And('User clicks delete1 button',()=>{
l.CheckBox().check({force:true})
l.Delete().click()
    
})

And('User clicks Yes delete button',()=>{
    l.yesDelete().click()
    
})
And('User clicks Add butting in Location',()=>{
l.add().click()
    
})
When('User enters Name, City,Zip Code,Phone,Address,State,Country,Fax, Notes',()=>{
l.name().type('Francis')
l.city().type('Chennai')
    
})
And('User clicks save button iN Location',()=>{

    
})