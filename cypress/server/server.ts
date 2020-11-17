export class CypressServer {
    static createStub(method: string, url: string, response: string, delay?: number): Cypress.Chainable {
        return cy.route({method, url, response, delay});
    }

    static startServer(): void {
        cy.server();
        this.createStub('GET', '/api/presentations', 'fx:presentations.json').as('getPresentations');
        this.createStub('POST', '/api/presentation', '', 2000).as('createPresentationEntry');
    }
}
