module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    baseUrl: 'https://example.cypress.io/commands',
    env: {
      "navbarText": "cypress.io"
    }
  },

};
