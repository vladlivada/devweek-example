import { CypressServer } from '../../server/server';

describe('Dashboard page', () => {

    before(() => {
        CypressServer.startServer();
        cy.visit('/dashboard', {timeout: 3000});
    });
    it('should be able to visit dashboard page', () => {
        cy.url().should('include', '/dashboard');
    });
});
