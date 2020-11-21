import { CypressServer } from '../../server/server';
import { createdPresentation } from '../../fixtures/createdPresentation';

describe('Registration page', () => {
    beforeEach(() => {
        CypressServer.startServer();
        cy.visit('/registration', {timeout: 3000});
    });

    const fillForm = () => {
        cy.get('#title').type(createdPresentation.title);
        cy.get('#type').type(createdPresentation.type);
        cy.get('#duration').type(createdPresentation.duration);
        cy.get('#description').type(createdPresentation.description);
        cy.get('#author').type(createdPresentation.author);
        cy.get('#reason').type(createdPresentation.reason);
    };

    it('should be able to visit registration page', () => {
        cy.url().should('include', '/registration');
    });

    it('should be able to register a presentation', () => {
        fillForm();
        cy.get('.submit-btn').click();
        cy.wait('@createPresentationEntry')
            .then((req) => {
                expect(req.request.body).to.deep.equal(createdPresentation);
            });
    });

    it('should display loading spinner after submission', () => {
        fillForm();
        cy.get('.submit-btn').click();
        cy.get('.mat-spinner').should('be.visible');
        cy.wait('@createPresentationEntry')
            .then(() => {
                cy.get('.mat-spinner').should('not.be.visible');
            });
    });

    it('should not be able to submit form if one or more fields are missing', () => {
        fillForm();
        cy.get('#title').clear();
        cy.get('.register-container').click();
        cy.get('.mat-form-field-invalid').should('be.visible');
        cy.get('.submit-btn').should('be.disabled');
    });
});


