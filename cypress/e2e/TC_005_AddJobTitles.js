
import { And, When } from '@badeball/cypress-cucumber-preprocessor';
import AddJobTitles from './PageObjects/AddJobTitles.spec'
const AddJobTitle=new AddJobTitles();

And('User clicks job option',()=>{
   AddJobTitle.jobBtn().click();
   cy.get('.oxd-dropdown-menu > :nth-child(1)').click()
})
And('User clicks +Add button',()=>{
 AddJobTitle.addBtn().click()
})
When('User enters Job Title, Job Description, Note',()=>{
   AddJobTitle.jobTitle().type('Software Test Engineer')
   AddJobTitle.jobDescribtion().type('Test a software product to delivery bug free product')
   AddJobTitle.note().type('Software Testing')
  })
  And('User clicks Save button',()=>{
   AddJobTitle.save().click()
  })