# Klir test

A project to klir interview process. The project contains a documents, instructions, drawing of environment, test plan and a [Cypress](https://cypress.io) automation.

## Pre-requirements

You need to have a test environment such as explained the instructions in [Klir Test Environment](https://github.com/vardhinikumar2023/Klir_interview/blob/master/TestEnvironment.md).

You also need to have [Node.js](https://nodejs.org/) , nvm and npm installed on your computer.

For this project, the following versions of Node.js and npm were used:

```sh
$ npm -v
v20.13.1 
```
Use a easy way to prepare the environment if your SO is GNU/Linux, execute the script scripts/setup-environment-linux.sh.

## Tests

The details of planning can be seen in [docs/test-plans.md](https://github.com/1freitas/klir_test/blob/main/docs/test-plans.md).

### Running cypress automation

Afer run the application in [local enviroment](https://github.com/vardhinikumar2023/Klir_interview/blob/master/TestEnvironment.md#how-to-run-it) and wait for the environment to be up and running (this might take a minute or so).

All should be ok if, when access de app in your browser http://localhost:3000/. 

The next step is install a dependencies of cypress projext and run the tests.

### Structure of cypress project
```
.
├── cypress
│   ├── api-tests
│   ├── downloads
│   ├── e2e
│   │   └── ui-tests
│   ├── fixtures
│   ├── screenshots
│   ├── support
│   └── tests
├── docs
└── scripts
```

## Installation

Run `npm i` to install the dependencies.

Use linter to maintein a good pratices to write code with cypress and mocha, running before commit `npm run lint` and `npm run fixALL` and fix the errors of syntax and code smells.

### Headless mode

Run `npm run test:stg ` to run all tests in headless mode in staging configuration.

Run `npm run test` to run all tests in headless mode in local configuration.

Run `npm run test:api` to run only the API tests in headless mode.

Run `npm run test:firefoxAll` or `npm run test:chromeALl` to run a respective Browsers Firefox 🦊 or Chrome.

### Interactive mode

1. Run `npm run cy:open` to open the Cypress App;
2. Select E2E Testing;
3. Select one of the available browsers (e.g., Firefox), and click the Start button;
4. **Run the [`ui.spec.cy.js`](cypress/e2e/ui-tests/ui-elements.spec.cy.js) test;**
5. Finally, click on the test file you want to run and wait for it to finish.

