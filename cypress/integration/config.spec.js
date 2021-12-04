
describe('Example of BaseUrl', () => {
    it('Example of Baseurl', () => {
        let url = Cypress.config().baseUrl;
        cy.visit(url);
    });
});