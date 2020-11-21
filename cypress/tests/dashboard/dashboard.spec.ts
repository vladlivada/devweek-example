import { CypressServer } from '../../server/server';

describe('Dashboard page', () => {

    before(() => {
        CypressServer.startServer();
        cy.visit('/dashboard', {timeout: 3000});
    });
    it('should be able to visit dashboard page', () => {
        cy.url().should('include', '/dashboard');
    });
    it('should populate table with requested data', () => {
        cy.get('tr').should('have.length', 4);
    });
    it('table should have the correct headers', () => {
        cy.get('.mat-column-title').contains('Title');
        cy.get('.mat-column-type').contains('Type');
        cy.get('.mat-column-duration').contains('Duration');
        cy.get('.mat-column-description').contains('Description');
        cy.get('.mat-column-author').contains('Author');
        cy.get('.mat-column-reason').contains('Reason');
    });
    it('should go to register page if selected from top menu', () => {
        cy.get('[routerlink="registration"]').click();
        cy.url().should('include', '/registration');
    });
});
