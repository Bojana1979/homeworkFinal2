///<reference types = "cypress"/>
import data from "../fixtures/data.json"
const faker = require("faker");
var user = {
    email: faker.internet.email()
}


describe('registration with Custom.Commands', () => {
    it('valid registration', () => {
        cy.visit('/');
        cy.registration({email: user.email, password: data.newUser1.password, users: data.newUser1.users});
    })
    it("registration without user data", () => {
        cy.visit('/');
        cy.registration({email: '', password: '', users: ''});
    })
    it("registration with the same mail", () => {
        cy.visit('/');
        cy.registration({email: data.newUser1.email, password: data.newUser1.password, users: data.newUser1.users});
    })
})