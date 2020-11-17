export class CypressServer {
    static createStub(method: string, url: string, response: string): Cypress.Chainable {
        return cy.route({method, url, response});
    }
    static startServer(): void {
        cy.server();
        this.createStub('GET', '/api/presentations', 'fx:presentations.json');
    }
}
