class Workingshift {
    wShift() {
        return cy.contains('Work Shifts')
    }
    assignEmp() {
        return cy.get('[placeholder="Type for hints..."]')
    }
    addButton() {
        return cy.get('.oxd-button')
    }
    shiftName() {
        return cy.get(':nth-child(2) > .oxd-input')
    }
    saveBtn() {
        return cy.get('[type="submit"]')
    }
    checkBox() {
        return cy.get('.oxd-table-header > .oxd-table-row > :nth-child(1)')
    }
    delete() {
        return cy.get('.orangehrm-horizontal-padding > div > .oxd-button')
    }
    yesToDelete() {
        return cy.get('.orangehrm-modal-footer > .oxd-button--label-danger')
    }
}
export default Workingshift