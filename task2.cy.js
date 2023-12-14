describe('should verify popular cities in different countries', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })

    it('should verify popular cities in different countries for UNITED KINGDOM', () => {
        cy.viewport(1680, 900);
        // Visit the website
        cy.visit('https://amberstudent.com');
        cy.get('.amber-bcbsjz > .amber-36vqpf.amber-ActionIcon-root.amber-UnstyledButton-root').click();
        cy.get('img[alt="flag-uk"]').click();
        cy.get('div:nth-of-type(3) > .amber-1avyp1d')
            .find('.amber-1z0x9lj') // Assuming each item in the flex container has a class "flex-item"
            .then(($flexItems) => {
                // Extract text content of each flex item into an array
                const cities = $flexItems.map((index, item) => Cypress.$(item).text()).get();

                // Check for duplicate countries
                const hasDuplicates = new Set(cities).size !== cities.length;

                // Log the result
                if (hasDuplicates) {
                    const duplicateCountries = findDuplicates(cities);
                    cy.log('Duplicate Countries Found:', duplicateCountries.join(', '));
                } else {
                    cy.log('No duplicate countries found.');
                }
            });
    });

    // Helper function to find duplicate entries in an array
    function findDuplicates(array) {
        const counts = {};
        const duplicates = [];

        for (const value of array) {
            counts[value] = (counts[value] || 0) + 1;
            if (counts[value] === 2) {
                duplicates.push(value);
            }
        }

        return duplicates;
    }

    it('should verify popular cities in different countries for AUSTRALIA', () => {
        cy.viewport(1680, 900);
        // Visit the website
        cy.visit('https://amberstudent.com');
        cy.get('.amber-bcbsjz > .amber-36vqpf.amber-ActionIcon-root.amber-UnstyledButton-root').click();
        cy.get('img[alt="flag-aus"]').click();
        cy.get('div:nth-of-type(3) > .amber-1avyp1d')
            .find('.amber-1z0x9lj') // Assuming each item in the flex container has a class "flex-item"
            .then(($flexItems) => {
                // Extract text content of each flex item into an array
                const cities = $flexItems.map((index, item) => Cypress.$(item).text()).get();

                // Check for duplicate countries
                const hasDuplicates = new Set(cities).size !== cities.length;

                // Log the result
                if (hasDuplicates) {
                    const duplicateCountries = findDuplicates(cities);
                    cy.log('Duplicate Countries Found:', duplicateCountries.join(', '));
                } else {
                    cy.log('No duplicate countries found.');
                }
            });
    });
    function findDuplicates(array) {
        const counts = {};
        const duplicates = [];

        for (const value of array) {
            counts[value] = (counts[value] || 0) + 1;
            if (counts[value] === 2) {
                duplicates.push(value);
            }
        }

        return duplicates;
    }
    it('should verify popular cities in different countries for IRELAND', () => {
        cy.viewport(1680, 900);
        // Visit the website
        cy.visit('https://amberstudent.com');
        cy.get('.amber-bcbsjz > .amber-36vqpf.amber-ActionIcon-root.amber-UnstyledButton-root').click();
        cy.get('img[alt="flag-ire"]').click();
        cy.get('div:nth-of-type(3) > .amber-1avyp1d')
            .find('.amber-1z0x9lj') // Assuming each item in the flex container has a class "flex-item"
            .then(($flexItems) => {
                // Extract text content of each flex item into an array
                const cities = $flexItems.map((index, item) => Cypress.$(item).text()).get();

                // Check for duplicate countries
                const hasDuplicates = new Set(cities).size !== cities.length;

                // Log the result
                if (hasDuplicates) {
                    const duplicateCountries = findDuplicates(cities);
                    cy.log('Duplicate Countries Found:', duplicateCountries.join(', '));
                } else {
                    cy.log('No duplicate countries found.');
                }
            });
    });
    function findDuplicates(array) {
        const counts = {};
        const duplicates = [];

        for (const value of array) {
            counts[value] = (counts[value] || 0) + 1;
            if (counts[value] === 2) {
                duplicates.push(value);
            }
        }

        return duplicates;
    }
    it('should verify popular cities in different countries for United States', () => {
        cy.viewport(1680, 900);
        // Visit the website
        cy.visit('https://amberstudent.com');
        cy.get('.amber-bcbsjz > .amber-36vqpf.amber-ActionIcon-root.amber-UnstyledButton-root').click();
        cy.get('img[alt="United States flag"]').click();
        cy.get('div:nth-of-type(3) > .amber-1avyp1d')
            .find('.amber-1z0x9lj') // Assuming each item in the flex container has a class "flex-item"
            .then(($flexItems) => {
                // Extract text content of each flex item into an array
                const cities = $flexItems.map((index, item) => Cypress.$(item).text()).get();

                // Check for duplicate countries
                const hasDuplicates = new Set(cities).size !== cities.length;

                // Log the result
                if (hasDuplicates) {
                    const duplicateCountries = findDuplicates(cities);
                    cy.log('Duplicate Countries Found:', duplicateCountries.join(', '));
                } else {
                    cy.log('No duplicate countries found.');
                }
            });
    });
    function findDuplicates(array) {
        const counts = {};
        const duplicates = [];

        for (const value of array) {
            counts[value] = (counts[value] || 0) + 1;
            if (counts[value] === 2) {
                duplicates.push(value);
            }
        }

        return duplicates;
    }
    it('should verify popular cities in different countries for CANADA', () => {
        cy.viewport(1680, 900);
        // Visit the website
        cy.visit('https://amberstudent.com');
        cy.get('.amber-bcbsjz > .amber-36vqpf.amber-ActionIcon-root.amber-UnstyledButton-root').click();
        cy.get('img[alt="flag-can"]').click();
        cy.get('div:nth-of-type(3) > .amber-1avyp1d')
            .find('.amber-1z0x9lj') // Assuming each item in the flex container has a class "flex-item"
            .then(($flexItems) => {
                // Extract text content of each flex item into an array
                const cities = $flexItems.map((index, item) => Cypress.$(item).text()).get();

                // Check for duplicate countries
                const hasDuplicates = new Set(cities).size !== cities.length;

                // Log the result
                if (hasDuplicates) {
                    const duplicateCountries = findDuplicates(cities);
                    cy.log('Duplicate Countries Found:', duplicateCountries.join(', '));
                } else {
                    cy.log('No duplicate countries found.');
                }
            });
    });
    function findDuplicates(array) {
        const counts = {};
        const duplicates = [];

        for (const value of array) {
            counts[value] = (counts[value] || 0) + 1;
            if (counts[value] === 2) {
                duplicates.push(value);
            }
        }

        return duplicates;
    }
    it('should verify popular cities in different countries for GERMANY', () => {
        cy.viewport(1680, 900);
        // Visit the website
        cy.visit('https://amberstudent.com');
        cy.get('.amber-bcbsjz > .amber-36vqpf.amber-ActionIcon-root.amber-UnstyledButton-root').click();
        cy.get('img[alt="flag-ger"]').click();
        cy.get('div:nth-of-type(3) > .amber-1avyp1d')
            .find('.amber-1z0x9lj') // Assuming each item in the flex container has a class "flex-item"
            .then(($flexItems) => {
                // Extract text content of each flex item into an array
                const cities = $flexItems.map((index, item) => Cypress.$(item).text()).get();

                // Check for duplicate countries
                const hasDuplicates = new Set(cities).size !== cities.length;

                // Log the result
                if (hasDuplicates) {
                    const duplicateCountries = findDuplicates(cities);
                    cy.log('Duplicate Countries Found:', duplicateCountries.join(', '));
                } else {
                    cy.log('No duplicate countries found.');
                }
            });
    });
    function findDuplicates(array) {
        const counts = {};
        const duplicates = [];

        for (const value of array) {
            counts[value] = (counts[value] || 0) + 1;
            if (counts[value] === 2) {
                duplicates.push(value);
            }
        }

        return duplicates;
    }
    it('should verify popular cities in different countries for SPAIN', () => {
        cy.viewport(1680, 900);
        // Visit the website
        cy.visit('https://amberstudent.com');
        cy.get('.amber-bcbsjz > .amber-36vqpf.amber-ActionIcon-root.amber-UnstyledButton-root').click();
        cy.get('img[alt="flag-esp"]').click();
        cy.get('div:nth-of-type(3) > .amber-1avyp1d')
            .find('.amber-1z0x9lj') // Assuming each item in the flex container has a class "flex-item"
            .then(($flexItems) => {
                // Extract text content of each flex item into an array
                const cities = $flexItems.map((index, item) => Cypress.$(item).text()).get();

                // Check for duplicate countries
                const hasDuplicates = new Set(cities).size !== cities.length;

                // Log the result
                if (hasDuplicates) {
                    const duplicateCountries = findDuplicates(cities);
                    cy.log('Duplicate Countries Found:', duplicateCountries.join(', '));
                } else {
                    cy.log('No duplicate countries found.');
                }
            });
    });
    function findDuplicates(array) {
        const counts = {};
        const duplicates = [];

        for (const value of array) {
            counts[value] = (counts[value] || 0) + 1;
            if (counts[value] === 2) {
                duplicates.push(value);
            }
        }

        return duplicates;
    }
})
