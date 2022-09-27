class AddEmployee{
addEmpOption(){
    return cy.contains('Add Employee')
}
firstName(){
    return cy.get('[placeholder="First Name"]')
}
middleName(){
    return cy.get('[placeholder="Middle Name"]')
}
LastName(){
    return cy.get('[placeholder="Last Name"]')
}
empID(){
    return cy.get('.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input')
}
saveBtn(){
    return cy.get('[type="submit"]')
}
}
export default AddEmployee