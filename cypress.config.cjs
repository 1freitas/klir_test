const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/**/**/*cy.js",
    setupNodeEvents(on, config) {
      const version = config.env.VERSION || 'local'
      const urls = {
        local: "http://localhost:3000",
        staging: "https://staging.example.com",
        prod: "https://example.com"
      }
      config.baseUrl = urls[version]
      retries = { "runMode": 3, "openMode": 1 } 
      return config
    },
  },
})
