describe("Test Suite - Verification API", () => {
  it("Basic Checking - Listing Customers", () => {
    cy.shuffleUser().then((name) => {
      cy.request("POST", "http://localhost:3001/", { name: name }).then(
        (response) => {
          console.log(response.body)
          expect(response.status).to.be.oneOf([200, 201])
          expect(response).to.have.property("headers")
          expect(response).to.have.property("duration")
          expect(response.body.customers).to.have.length(7)
          expect(response.body).to.have.property("name", name)
          expect(response.body.name).to.be.a("string")
          expect(response.body).to.have.property(
            "timestamp",
            new Date().toDateString()
          )
        }
      )
    })
  })

  it("Size Checking - Listing Customers", () => {
    const name = "Sr. Spock"
    cy.request("POST", "http://localhost:3001/", { name: name }).then(
      (response) => {
        let customers = response.body.customers
        customers.forEach((item) => {
          console.log(item)
          const employeesSizeRule =
            item.employees <= 2500
              ? "Small"
              : item.employees < 5000
              ? "Medium"
              : "Big"
          cy.log(item.employees, employeesSizeRule)
          expect(employeesSizeRule).to.eq(item.size)
        })
      }
    )
  })

  it("Fails with 404 (Not Found) status code when url does not exist", () => {
    cy.request({
      method: "GET",
      url: "http://localhost:3001/invalid-123",
      failOnStatusCode: false,
    }).should(({ status, statusText }) => {
      expect(status).to.equal(404)
      expect(statusText).to.equal("Not Found")
    })
  })

  it("POST body.name is string?", () => {
    const nameOfUser = 9555555559
    cy.request("POST", "http://localhost:3001/", { name: nameOfUser }).should(
      ({ name, status }) => {
        expect(status).to.be.oneOf([400, 401, 402, 403, 404])
        expect(name).to.be.a("string")
      }
    )
  })
})
