///<reference types = "cypress"/>
import data from '../fixtures/data.json'
import logout from '../fixtures/logout.json'

describe('Vivify Scrum organization and board creation', () => {
    before(() => {
        cy.visit('/');
        cy.login({email: data.user.email, password: data.user.password});
        cy.get(logout.userName).should('be.visible')
        cy.get(logout.userName).should('contain', data.user.name)
    })
    // after(() => {
    //     cy.deleteOrganization({})
    //     // cy.get(board.okBoardButton).click({force:true})
    //     cy.logout({password: data.user.password})
    // })
    it('create organization', () => {
        cy.createOrganization(data.organization.name)
    })
})