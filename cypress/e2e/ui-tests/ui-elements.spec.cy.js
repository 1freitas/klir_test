// import the fixture with the data for new tests
import { users } from "../../fixtures/users.json"
describe("Test suite of user interface", () => {
  const appName = 'Welcome to Water Customer App'
  const instructions = 'Please provide your name:'
  context("Ui elements in Welcome Screen", () => {
    beforeEach(() => {
      cy.visit("/")
    })
    it("Titles elements", () => {
      cy.findByText(appName).should("exist").and("be.visible")
      cy.findByText(instructions).should("exist").and("be.visible")
    })
    it("Button and Input Elements", () => {
      cy.findByRole("button", { name: /Submit/i })
        .should("exist")
        .and("be.visible")
      cy.get("#name").should("exist").and("be.visible").and("have.value", "")
    })
  })
  context("Ui elements in Others Screens", () => {
    let nameOfUser
    beforeEach(() => {
      cy.shuffleUser().then((name) => {
        nameOfUser = name
        cy.login(name)
      })
    })
    context("Ui elements in Customer Screen", () => {
      it("Title elements", () => {
        cy.findByText(appName).should("exist").and("be.visible")
        const timestamp = new Date().toDateString()
        const phrase =
          "It is now timestamp and here is our customer list. Click on each of them to view their contact details."
        const phraseFinal = phrase.replace("timestamp", timestamp)
        const phraseToValided = `Hi ${nameOfUser}. ${phraseFinal}`
        cy.log(phraseToValided)
        cy.findByText(nameOfUser).should("be.visible")
        cy.findByText(timestamp).should("be.visible")
        cy.findByText(
          /Click on each of them to view their contact details./i
        ).should("be.visible")
        cy.findByText(/Hi /i).should("be.visible")
        cy.findByText(/It is now/i).should("be.visible")
        cy.findByText(/and here is our customer list./i).should("be.visible")
      })
      it("Table elements", () => {
        const getTexts = ($el) => {
          return Cypress._.map($el, "innerText")
        }
        const headings = ["Name", "# of Employees", "Size"]
        cy.get("table").should("be.visible")
        cy.get("table thead th")
          .then(getTexts)
          // confirm each column title we need is present
          // and they are in the expected order
          .should("deep.equal", headings)
      })
    })
    context("Ui elements in Contacts Detail Screen", () => {
      it("Title elements", () => {
        cy.findByText(appName).should("exist").and("be.visible")
        const timestamp = new Date().toDateString()
        const phrase =
          "It is now timestamp and here is our customer list. Click on each of them to view their contact details."
        const phraseFinal = phrase.replace("timestamp", timestamp)
        const phraseToValided = `Hi ${nameOfUser}. ${phraseFinal}`
        cy.log(phraseToValided)
        cy.findByText(nameOfUser).should("be.visible")
        cy.findByText(timestamp).should("be.visible")
        cy.findByText(
          /Click on each of them to view their contact details./i
        ).should("be.visible")
        cy.findByText(/Hi /i).should("be.visible")
        cy.findByText(/It is now/i).should("be.visible")
        cy.findByText(/and here is our customer list./i).should("be.visible")
      })
      it("Detail List elements", () => {
        cy.findByText(appName).should("exist").and("be.visible")
        cy.get("table").find("tbody > tr > td").first().click()
        cy.findByText(/Customer Details/i).should("be.visible")
        cy.findByText(/Name/i).should("be.visible")
        cy.findByText(/# of Employees/i).should("be.visible")
        cy.findByText(/Size/i).should("be.visible")
        cy.findAllByText(/Contact/i).should("have.length", 2)
        cy.findByRole("button", { name: /Back to the List/i })
          .should("exist")
          .and("be.visible")
      })
    })
  })
})
