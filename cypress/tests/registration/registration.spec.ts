import { CypressServer } from '../../server/server';
import { createdPresentation } from '../../fixtures/createdPresentation';

describe('Registration page', () => {
    beforeEach(() => {
        CypressServer.startServer();
        cy.visit('/registration', {timeout: 3000});
    });
    it('should be able to visit registration page', () => {
        cy.url().should('include', '/registration');
    });

    it('should be able to register a presentation', () => {
        cy.get('#title').type(createdPresentation.title);
        cy.get('#type').type(createdPresentation.type);
        cy.get('#duration').type(createdPresentation.duration);
        cy.get('#description').type(createdPresentation.description);
        cy.get('#author').type(createdPresentation.author);
        cy.get('#reason').type(createdPresentation.reason);
        cy.get('.submit-btn').click();
        cy.get('@createPresentationEntry');
        cy.wait('@createPresentationEntry')
            .then((req) => {
                expect(req.request.body).to.deep.equal(createdPresentation);
            });
    });
});
