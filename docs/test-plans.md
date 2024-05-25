# Test Plan

The images above summarize the planning to manual test in WATER CUSTOMERS APP.

## Environment

![Environment](https://github.com/1freitas/klir_test/blob/main/docs/Environment-v2.png)

## Planning
![Environment](https://github.com/1freitas/klir_test/blob/main/docs/test-plans.png)

See more details the drawing in https://excalidraw.com/ and upload [test-plans-v2.excalidraw](https://github.com/1freitas/klir_test/blob/main/docs/test-plans-v2.excalidraw)

## Manual testing

The requirements were checked and a list below was produced:

- verify the app access with a user Name
- check an alert 'Please provide your name.", showing when a blank input of user Name
- verify the list of customers showing in Customer List Screen
- verify in the Customer List Screen the details of customers registry
- check the rules size Company and contact information
- When a customer doesn't have contact info, the message No contact info available should be presented.
- if number of Employees is less than or equal to 2500, size is Small; if # of Employees is greater then 2500 and less then or equal to 5000, Medium; otherwise, its Big
- navigate between Customer List Screen and Contacts Detail Screen, using a Back to the list button

# Expect results

The result expect are:
- Access app with a user name
- Navigate from Welcome Screen to Customer List Screen
- Navigate from Customer List Screen to Contacts Detail Screen and returned to origin.
- Show the customers details with contact information and correct category of size enterprise
	
## Automated testing

For creation the automated test was used the Javascript stack, when Cypress the principal technology choiced.

The list of package dependency are:
- "@eslint/eslintrc": "^3.1.0",
- "@testing-library/cypress": "^10.0.1",
- "cypress": "^13.10.0",
- "eslint": "^9.3.0",
- "eslint-plugin-cypress": "^3.2.0",
- "eslint-plugin-mocha": "^10.4.3"

The techniques used to develop test are:
- App Actions 
- Custom Commands
- Test UI elements and responsiveness
- Using a library "Testing Library" and apply a strategy to find elements in DOM direct by texts.
- Using a TypeScript to document the custom commands
- Mocha style to organize e structure the tests
- Cypress Implicit and explicit assertions
- Applying a verification with Eslint to cypress and mocha syntax
- Creating a script (shell script) to prepare an linux environment to download and up  services the application (WATER CUSTOMERS APP) and testing it


## Mapping the files of automation

### ui-test:
- customers-fixture.spec.cy.js 
- customers-random.spec.cy.js
- responsive-screens.spec.cy.js
- ui-elements.spec.cy.js
### api-test:
- api-customers.spec.cy.js


# Results of testing 

## UI non-compliant scenarios

1. Customer Las Vegas Water is showing with a size Big, but isn't correct, the right classification is medium, because 3200 is less than 5000 and bigger than 2500
2. Customer Denver's Water not showing in Contacts Detail Screen and the Back to the list don’t exist.
3. When a customer don't have contact information registre, don't showing a message "No contact info available" in Contacts Detail Screen
4. When try access with a blank text to “name” it’s possible and the Welcome message appear like this “Hi . It is now “timestamp” and here is our customer list. Click on each of them to view their contact details.”


## UI non-compliant scenarios

1. The size return of customer id=1 (Las Vegas Water) isn't correct, a information registered is Big, but a right classification is medium, because 3200 is less than 5000 and bigger than 2500
2. The customer id=4 (New York's Water) isn't correct, miss a information of name in contact information
3. The data "name" of request body don't has type checking, because the API endpoint schema the type of "name" is string, but is possible sent a others data types, for example a number

### Automated tests summary
```
       Spec                                              Tests  Passing  Failing  Pending  Skipped  
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✖  api-tests/api-customers.spec.cy.js       573ms        4        2        2        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✖  e2e/ui-tests/customers-fixture.spec      00:22       12        7        5        -        - │
  │    .cy.js                                                                                      │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  e2e/ui-tests/customers-random.spec.      00:05        8        8        -        -        - │
  │    cy.js                                                                                       │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✖  e2e/ui-tests/responsive-screens.spe      00:29       10        3        7        -        - │
  │    c.cy.js                                                                                     │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  e2e/ui-tests/ui-elements.spec.cy.js      00:03        6        6        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✖  3 of 5 failed (60%)                      01:02       40       26       14        -        -  
```


