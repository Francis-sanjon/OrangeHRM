class Locations{
organization(){
    cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').should('be.visible').click()
    return this
}
Location(){
    return cy.contains('Locations')
}
add(){
    return cy.get('[class="oxd-button oxd-button--medium oxd-button--secondary"]')
    
}
CheckBox(){
    return cy.get('[type="checkbox"]').first()
}
Delete(){
    return cy.get('[class="oxd-button oxd-button--medium oxd-button--label-danger orangehrm-horizontal-margin"]')
}
yesDelete(){
    return cy.get('[class="oxd-button oxd-button--medium oxd-button--label-danger orangehrm-button-margin"]')
}
name(){
    return cy.get('[class="oxd-input oxd-input--active"]').eq(1) //correct
}
State(){
    return cy.get('[class="oxd-input oxd-input--active"]').eq(2) //correct
}
city(){
    return cy.get('[class="oxd-input oxd-input--active"]').eq(6) 
}
zip(){
    return cy.get('[class="oxd-input oxd-input--active"]').eq(3) //correct
}
phone(){
    return cy.get('[class="oxd-input oxd-input--active"]').eq(4) //correct
}
fax(){
    return cy.get('[class="oxd-input oxd-input--active"]').eq(5) //correct
}
country(){
    return cy.get('[class="oxd-select-text oxd-select-text--active"]')//correct
}
address(){
    return cy.get('[class="oxd-textarea oxd-textarea--active oxd-textarea--resize-vertical"]').eq(0)
}
notes(){
    return cy.get(':nth-child(8) > .oxd-input-group > :nth-child(2) > .oxd-textarea')
}
save(){
    return cy.get('.orangehrm-left-space')
}


}
export default Locations