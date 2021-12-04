///<reference types = "cypress"/>
import data from "../fixtures/data.json"

describe("login with CustomCommands", () => {
    it('valid login', () => {
        cy.visit('/');
        cy.login({email: data.user.email, password: data.user.password})
    })
    it('login without credentials', () => {
        cy.visit('/');
        cy.login({email: '', password: ''});
    })
    it('login with incorrect mail', () => {
        cy.visit('/');
        cy.login({email: data.negativeData.negativEmail, password: data.user.password})
    })
    it('login with incorrect password', () => {
        cy.visit('/');
        cy.login({email: data.user.email, password: data.negativeData.negativPassword})
    })
})