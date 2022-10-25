import { And, Given, When } from "@badeball/cypress-cucumber-preprocessor";
import Workingshift from './PageObjects/WorkingShift.spec'

const ws = new Workingshift();

And('User clicks Work Shifts option', () => {
    ws.wShift().click()
})
And('User clicks checkbox to clear the previous shift timing', () => {
    ws.checkBox().click()
})
And('User clicks delete button', () => {
    ws.delete().click()

})
And('User clicks confirm delete button', () => {

    ws.yesToDelete().click()
})

And('User clicks add button', () => {
    ws.addButton().click()
})
When('User clicks Shift Name, Assigned Employee', () => {
    ws.shiftName().type('General Shift')
    ws.assignEmp().type('Francis')
})
And('User clicks Save in work shift button', () => {
    ws.saveBtn().click()
})