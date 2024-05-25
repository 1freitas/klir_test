/* eslint-disable mocha/no-setup-in-describe */
describe("Suite of Test that check on screen responsiveness", () => {
  const deviceViewports = [
    'macbook-15',
    'macbook-13',
    'macbook-11',
    'ipad-2',
    'ipad-mini',
    'iphone-6+',
    'iphone-6',
    'iphone-5',
    'iphone-4',
    'iphone-3',
  ]

  beforeEach(() => {
    let nameOfUser
    cy.shuffle().then((name) => {
      nameOfUser = name
      cy.login(name)
    })
  })
  
  deviceViewports.forEach((resolution) => {  
    it(`Using a diferente viewport ${resolution}`, () => {
      cy.viewport(resolution)
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
