class AddJobTitles{
jobBtn(){
   return cy.get('.oxd-topbar-body-nav > ul > :nth-child(2)')
}
    addBtn(){
      return cy.get('[class="oxd-button oxd-button--medium oxd-button--secondary"]')
    }
jobTitle(){
   return cy.get('[class="oxd-input oxd-input--active"]').last()
}
 
jobDescribtion(){
   return cy.get('[placeholder="Type description here"]')
} 
 
note(){
   return cy.get('[placeholder="Add note"]')
} 
save(){
   return cy.get('[type="submit"]')
} 



}
export default AddJobTitles