class Login {
    userName() {
        return cy.get('[placeholder=Username]')
    }
    password() {
        return cy.get('[placeholder=Password]')
    }
    loginBtn() {
        return cy.get('[type="submit"]')
    }
}
export default Login