class UserManagement {
    admin() {
        return cy.contains('Admin')
    }
    UserManagementbtn() {
        return cy.get('[class="oxd-topbar-body-nav-tab --parent --visited"]')
    }
    users() {
        return cy.get('.oxd-dropdown-menu > li', { timeout: 8000 })
    }
    add() {
        return cy.contains(' Add ')
    }
    userRole() {
        return cy.get('.oxd-select-text--active').first()
    }
    empName() {
        return cy.get('.oxd-autocomplete-text-input--active')
    }
    status() {
        return cy.get('.oxd-select-text--active').last()
    }
    userName() {
        return cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input')
    }
    password() {
        return cy.get('[type="password"]').first()
    }
    confirmPassword() {
        return cy.get('[type="password"]').last()
    }
    saveBtn(){
       cy.get('[type="submit"]').click()
    }
}
export default UserManagement