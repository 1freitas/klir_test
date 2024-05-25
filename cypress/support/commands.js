import "@testing-library/cypress/add-commands";
import { users } from "../fixtures/users.json";

const shuffle = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

Cypress.Commands.add("appActionContactsDetailScreen", (customer) => {
  cy.get("table")
    .cell(customer.id - 1, 0)
    .click();
});

Cypress.Commands.addQuery("cell", (row, column) => {
  return ($table) => {

    return $table.find("tbody tr").eq(row).find("td").eq(column);
  };
});

Cypress.Commands.add("login", (name) => {
  cy.visit("/");
  cy.get("#name").type(`${name}`);
  cy.get('[type="button"]').click();
});

Cypress.Commands.add("selectOneCustomer", () => {
  cy.shuffleUser().then((name) => {
    cy.request("POST", "http://localhost:3001/", { name: name }).then(
      (response) => {
        const customers = response.body.customers;
        console.log(customers);
        cy.shuffleCustomers(customers)
      }
    );
  });
});

// remover
Cypress.Commands.add("shuffle", () => {
  const randUser = shuffle(users);
  const name = randUser[0].name;
  return name;
});

Cypress.Commands.add("shuffleCustomers", (array) => {
  const randCustomer = shuffle(array);
  const customer = randCustomer[0];
  return customer;
});

Cypress.Commands.add("shuffleUser", () => {
  const randUser = shuffle(users);
  const name = randUser[0].name;
  return name;
});

Cypress.Commands.add("verificationsContactsDetails", (customer) => {
  const message = "No contact info available";
  cy.log(customer.name);
  let isContactInfo = true;
  if (customer.contactInfo.name === "" && customer.contactInfo.email === "") {
    isContactInfo = false;
    cy.log(`Is exist ContactInfo? ${isContactInfo}`);
    cy.contains(message).should("be.visible");
  } else {
    cy.findByText(customer.name).should("be.visible");
    cy.findByText(customer.employees).should("be.visible");
    cy.findByText(customer.size).should("be.visible");
    cy.contains(customer.contactInfo.name).should("be.visible");
    cy.contains(customer.contactInfo.email).should("be.visible");
    cy.findByRole("button", { name: /Back to the List/i })
      .should("be.visible")
      .click();
  }
});
