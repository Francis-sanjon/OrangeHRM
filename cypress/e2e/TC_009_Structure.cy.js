import { And } from '@badeball/cypress-cucumber-preprocessor'
import Structure from './PageObjects/TC_009_Structure.spec'
const str=new Structure()

And('User clicks Structure option',()=>{
   str.structure().click()
})
And('User clicks DwonArrow nearby Engineer option',()=>{
    str.DownArrow1().click()
 })
 And('User clicks DwonArrow nearby Sales & Marketing option',()=>{
    str.DownArrow2().click()
 })
 And('User clicks DwonArrow nearby Client Services option',()=>{
    str.DownArrow3().click()
    cy.url().should('include','viewCompanyStructure')
 })
 