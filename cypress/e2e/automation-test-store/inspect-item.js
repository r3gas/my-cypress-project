/// <reference types="Cypress" />

describe("Inspect Automation Test Store Items using chain commands", () => {
    it("Should be able to click on first item using item header", () => {
        cy.visit('https://automationteststore.com/');
        // Class Name usaes period
        // Chain get on class name with contains Text, then chain click()
        // Using THEN to log variable itemHeaderText to console
        // Use jquery to print text
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click().then(function(itemHeaderText){
            console.log("Selected the following item: " + itemHeaderText.text())
        })

    })

    it("Should be able to click on first item using index", () => {
        cy.visit('https://automationteststore.com/');
        // Use get to locate fixed_wrapper class
        // Search inside Class for prdocutname class
        // Chain EQ to find 0 index
        // Chain click
        cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click()

    })
})