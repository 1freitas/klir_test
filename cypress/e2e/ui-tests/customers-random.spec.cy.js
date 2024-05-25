/* eslint-disable mocha/no-setup-in-describe */

describe('Test suite - Select random Customers to verification', () => {
  context('Verification in Welcome Screen', () => {
    it('Submit with blank text in Name', () => {
      cy.visit("/");
      cy.get("#name").type(` `);
      cy.get('[type="button"]').click();
    });
    it('Submit without text ', (done) => {
      const alertMessage='Please provide your name'
      cy.visit("/");
      cy.get("#name").should('have.value', '');
      cy.on ('window:alert', (text) => {
        expect(text).to.eq(alertMessage)
        done()                             
      })
      cy.get('[type="button"]').click()
    });
  })

  context('Verification in Others Screens', () => {
    let nameOfUser
    beforeEach(() => {
      cy.shuffle().then((name) => {
        nameOfUser = name
        cy.login(name)
      })
    })
    it('Verifications in List Screen', () => {
      cy.selectOneCustomer().then((customer) => {
        console.log(`Selected Customer is ${customer}`)
        cy.findByText(customer.name)
          .should('be.visible')
          .and('have.attr', 'href')
        cy.get('table')
          .cell(customer.id - 1, 0)
          .should('have.text', customer.name)
        cy.get('table')
          .cell(customer.id - 1, 1)
          .should('have.text', customer.employees)
        cy.get('table')
          .cell(customer.id - 1, 2)
          .should('have.text', customer.size)
      })
    })
    Cypress._.times(5, () => {
      it('Verifications in Contacts Detail Screen', () => {
        cy.selectOneCustomer().then((customer) => {
          console.log(`Selected Customer is ${customer}`)
          cy.appActionContactsDetailScreen(customer).then(() => {
            console.log(`Selected Customer is ${customer}`)
            cy.verificationsContactsDetails(customer)
          })
        })
      })
    })
  })
})
