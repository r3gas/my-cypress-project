/// <reference types="Cypress" />

describe("Test contact us form via WebdriverUni", () => {
    it("Should be able to submit a successful submission via contact us form", () => {
        //cypress code
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
        // cy.get('#contact-us > .thumbnail').click()
        cy.get('[name="first_name"]').type('Yours')
        cy.get('[name="last_name"]').type('Truly')
        cy.get('[name="email"]').type('Truly@gmail.com')
        cy.get('[name="message"]').type('This is a message')
        cy.get('[type="submit"]').click()
    });

    it("Should not be able to submit a successful submission via contact us form without required field", () => {
        //cypress code
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type('Yours')
        cy.get('[name="last_name"]').type('Truly')
        cy.get('[name="message"]').type('This is a message')
        cy.get('[type="submit"]').click()
    });

})