class Locations{
organization(){
    return  cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click
}
Location(){
    return cy.contains('Locations')
}
add(){
    return cy.get('[class="oxd-button oxd-button--medium oxd-button--secondary"]')
}
organization(){
    return cy.get('')
}

}
export default Locations