/// <reference types="Cypress" />

describe("Test contact us form via Automation test store", () => {
    it("Should be able to submit a successful submission via contact us form", () => {
        //cypress code
        cy.visit('https://automationteststore.com/');
        // Document assertion
        // Use and to append another assertion
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        // Assertion against page title
        cy.title().should('include', 'A place to practice your automation skills!')
        // URL assertion
        cy.url().should('include', 'automationteststore')
        // CSS selector just like Selenium
        cy.get('a[href$="contact"]').click().then(function(contactButton){
            cy.log("Clicked the Button: " + contactButton.text())
        })
        // ID uses hashtag 
        cy.get('#ContactUsFrm_first_name').type('Bob');
        // Chai assertion
        cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email');
        cy.get('#ContactUsFrm_email').type('Johnson@mail.com');
        cy.get('#ContactUsFrm_enquiry').type('stinks');
        cy.get('button[title="Submit"]').click();
        cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!')
        // Using contains
        cy.get('.mb40 > :nth-child(3)').contains('enquiry');


    })
})