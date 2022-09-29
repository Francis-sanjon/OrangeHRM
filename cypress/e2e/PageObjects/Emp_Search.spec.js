class SearchEmp {
    employeeList() {
        return cy.get('.--visited')
    }
    empName() {
        return cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input')
    }
    empID() {

        return cy.get(':nth-child(2) > .oxd-input')
    }
    empStatus() {
        return cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text')
    }
    include() {
        return cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text')
    }
    searchBtn() {
        return cy.get('.oxd-form-actions > .oxd-button--secondary')
    }


}

export default SearchEmp