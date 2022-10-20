class PayGrades{
jobs(){
    return cy.get('.oxd-topbar-body-nav > ul > :nth-child(2)')
}
payGrade(){
    return cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-link')
}
addBtn(){
    return cy.get('.oxd-button')
}
nameTxt(){
    return cy.get('[class="oxd-input oxd-input--active"]').last()
}
saveBtn(){
    return cy.get('[type="submit"]')
}

}
export default PayGrades