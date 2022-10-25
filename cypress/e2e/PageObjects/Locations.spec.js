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
    return cy.get('[class="oxd-input oxd-input--active"]').eq(1)
}
State(){
    return cy.get('[class="oxd-input oxd-input--active"]').eq(2)
}/*
state(){
    return cy.get('[class="oxd-input oxd-input--active"]').eq(4)
}*/
zip(){
    return cy.get('[class="oxd-input oxd-input--active"]').eq(3)
}
phone(){
    return cy.get('[class="oxd-input oxd-input--active"]').eq(5)
}
address(){
    return cy.get('[class="oxd-textarea oxd-textarea--active oxd-textarea--resize-vertical"]').eq(0)
}
notes(){
    return cy.get('[class="oxd-textarea oxd-textarea--active oxd-textarea--resize-vertical"]').eq(1)
}
save(){
    return cy.get('[type="submit"]')
}


}
export default Locations