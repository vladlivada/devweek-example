import { CypressServer } from '../../server/server';

describe('Dashboard page', () => {

    before(() => {
        CypressServer.startServer();
    });
    it('should be able to visit dashboard page', () => {
        cy.visit('/dashboard');
        cy.url().should('include', '/dashboard');
    });
});
