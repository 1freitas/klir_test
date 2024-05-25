/// <reference types="cypress" />
declare namespace Cypress {
  interface Chainable {
    /**
     * Description: 
     * 
     * @param customer Object
     * @example
     * cy.appActionContactsDetailScreen(customer).then(() => {
     *  // todo
     * })
     */
    appActionContactsDetailScreen( customer: Object ): Cypress.Chainable<JQuery<HTMLElement>>
    /**
     * Description: Use jQuery methods to find the row
     * and then access the cell jQuery .find and .eq 
     * methods are very close to the Cypress commands.
     * This code is adapted by
     * https://glebbahmutov.com/cypress-examples/recipes/table-cell-by-column-heading.html#find-all-rows-with-certain-cell-values 
     * 
     * @param row number
     * @param column number
     * @return cell selected to verification
     * @example
     * cy.get("table")
     *  .cell( 0, 0)
     *  .should("have.text", "text");
     */
    cell( row: number, column: number): Cypress.Chainable<JQuery<HTMLElement>>
    /**
     * Description: 
     * 
     * @param name string
     * @example
     * cy.login(name); 
     * cy.login('Sr. Spock')
     * cy.login('Kathryn Janeway')
     */
    login(): Cypress.Chainable<JQuery<HTMLElement>>
    /**
     * Description: 
     * 
     * @return one object of array shunflled (one customer)
     * @example
     * cy.selectOneCustomer().then((customer) => {
     *  //todo
     * }) 
     */
    selectOneCustomer(): Cypress.Chainable<JQuery<HTMLElement>>
    /**
     * Description: 
     * 
     * @param array Object
     * @example
     *
     */
    shuffleCustomers(array: Object): Cypress.Chainable<JQuery<HTMLElement>>
    /**
     * Shunffle users fixture and select one access.
     * 
     * @return name string
     * @example
     * cy.shuffleUser().then((name) => {
     *  // todo
     * })
     */
    shuffleUser(): Cypress.Chainable<JQuery<HTMLElement>>
    /**
     * Description:
     * @param customer Objetct
     * @example
     * cy.verificationsContactsDetails(customer)
     */
    verificationsContactsDetails(customer: Object): Cypress.Chainable<JQuery<HTMLElement>>

    
  }
}