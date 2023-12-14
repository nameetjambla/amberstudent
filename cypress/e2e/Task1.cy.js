describe('Filter Tests', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })

    it('Search Via Filters and Verify the information ', () => {
        cy.viewport(1680, 900)
        // Visit the website
        cy.visit('https://amberstudent.com');
        cy.get('.amber-bcbsjz').type('London')
        cy.get('li:nth-of-type(1) > .amber-4md24s').click()
        cy.wait(3000)
        cy.get('button:nth-of-type(4)  .amber-1rstnhj.amber-Button-label').click()
        cy.window().then(function (modal) {
            cy.stub(modal, "prompt").returns('willwork')
            cy.get(':nth-child(1) > .amber-InputWrapper-root > .amber-Group-root > .amber-Grid-root > :nth-child(2) > .amber-Checkbox-root > .amber-Checkbox-body > .amber-Checkbox-labelWrapper > .amber-Checkbox-label').click()
            cy.get(':nth-child(2) > .amber-InputWrapper-root > .amber-Group-root > .amber-Grid-root > :nth-child(2) > .amber-Checkbox-root > .amber-Checkbox-body > .amber-Checkbox-labelWrapper > .amber-Checkbox-label').click()
            cy.get('.amber-soin5r > :nth-child(2) > .amber-UnstyledButton-root > .amber-3xbgk5').click() // This will submit the filter result
            cy.wait(3000)

        })
        //const linkSelector = 'a[href="/places/east-central-house-london-1710100016395"]';
        cy.get('div:nth-of-type(2) > .amber-n8y7xk > .amber-zih4zw > .amber-a6075h > .amber-1u1u4a5 > .amber-Group-root.amber-qm34fq > .amber-1ynp4p5 > .amber-5elmvi.amber-Text-root.amber-Title-root').invoke('attr', 'href').then((href) => {
            // Visit the link in the same tab
            cy.visit('https://amberstudent.com/places/student-living-heights-london-1710109418732');

            // Add any verification steps if needed
            cy.title().should('include', 'Student Living Heights, London');
        })

    })
})
