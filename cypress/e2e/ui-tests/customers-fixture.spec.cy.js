/* eslint-disable mocha/no-setup-in-describe */
/* eslint-disable mocha/consistent-spacing-between-blocks */
import { customers } from "../../fixtures/customers.json"

describe("Test suite - Customers Verification using data by fixture", () => {
  let nameOfUser
  beforeEach(() => {
    cy.shuffleUser().then((name) => {
      nameOfUser = name
      cy.login(name)
    })
  })
  customers.forEach((item, k) => {
    it(`Verification in Customer List - id: ${item.id} | Customer: ${item.name}`, () => {
      cy.findByText(item.name).should("be.visible").and("have.attr", "href")
      cy.get("table")
        .cell(item.id - 1, 0)
        .should("have.text", item.name)
      cy.get("table")
        .cell(item.id - 1, 1)
        .should("have.text", item.employees)
      cy.get("table")
        .cell(item.id - 1, 2)
        .should("have.text", item.size)
    })
    it(`Verifications of Size Requeriments - id: ${item.id} | Customer: ${item.name}`, () => {
      const employeesSizeRule =
        item.employees <= 2500
          ? "Small"
          : item.employees < 5000
          ? "Medium"
          : "Big"
      cy.get("table")
        .cell(item.id - 1, 0)
        .should("have.text", item.name)
      cy.get("table")
        .cell(item.id - 1, 1)
        .should("have.text", item.employees)
      cy.get("table")
        .cell(item.id - 1, 2)
        .should("have.text", employeesSizeRule)
    })
    it(`Verifications in Contacts Detail - id: ${item.id} | Customer: ${item.name}`, () => {
      cy.get("table")
        .cell(item.id - 1, 0)
        .click()
      console.log(`Selected Customer is ${item}`)
      cy.verificationsContactsDetails(item)
    })
  })
})
