import { And, When } from '@badeball/cypress-cucumber-preprocessor';
import PayGrades from './PageObjects/TC_006_PayGrades.spec'
const payG = new PayGrades();

And('User clicks job1 option', () => {
    payG.jobs().click()
})
And('User clicks Pay Greade option', () => {
    payG.payGrade().click()
})
And('User clicks +Add button from Pay Greade', () => {
payG.addBtn().click()
})
When('User enters the Grade', () => {
payG.nameTxt().type('Grade 25')
})
And('User clicks on save button', () => {
    payG.saveBtn().click()
    })
