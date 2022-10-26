class Structure{
structure(){
    return cy.contains('Structure')
}
DownArrow1(){
    return cy.get('[class="oxd-tree-node-toggle"]').eq(0)
}
DownArrow2(){
    return cy.get('[class="oxd-tree-node-toggle"]').eq(1)
}
DownArrow3(){
    return cy.get('[class="oxd-tree-node-toggle"]').eq(2)
}


}
export default Structure