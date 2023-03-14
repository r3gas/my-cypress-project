/// <reference types="Cypress" />

describe("Verifying variables, cypress commands and jquery commands", () => {
    it("Navigating to specific product pages", () => {

        // Store part of href as variable
        // Check that selector contains text
        cy.visit('https://automationteststore.com/');
        cy.get("a[href*='product/category&path=']").contains("Makeup").click()
        
        // Use then to return promis with parameter
        // Use jquery with const for parameter
        cy.get("h1 .maintext").then(($headerText) => {
            const headerText = $headerText.text()
            cy.log("Found header text: "+ headerText)
            // Chai expect block
            expect(headerText).is.eq('Makeup')
        })

    })

    it.only("Validate properties of the Contact Us Page", () => {
        cy.visit('https://automationteststore.com/index.php?rt=content/contact');

        // Uses cypress commands and chaining
        // ID uses #
        // Verfy Element contains text Contact Us Form
        // Within result find element with id of field_11
        cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain', 'First name:')
        // Jquery approach
        cy.contains('#ContactUsFrm', 'Contact Us Form').then(text => {
            const firstNameText = text.find('#field_11').text()
            // Chai assertion
            expect(firstNameText).to.contain('First name:')
             // Embedded commands (Closure)
             cy.get('#field_11').then(fnText => {
                cy.log(fnText.text())
                cy.log(fnText)
             })
        
        })
 
        })

    })