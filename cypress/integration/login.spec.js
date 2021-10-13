///<reference types = "cypress"/>

const loginPage = require("../fixtures/loginModule.json")
const data = require("../fixtures/data.json")
const profile = require("../fixtures/sidebar.json")
const logout = require("../fixtures/navigation.Board.json")

describe("first cypress block", () => {
    // it("first test", () => {
    //     expect(true).to.eq(true);
    // });

    // it("first test", () => {
    //     expect(true).to.eq(false);
    // });
    // it("visit vivfy scrum", () => {
    //     cy.visit("/", {timeout: 30000});
    //})
    it("negativ login_1", () => {
        cy.visit("/");
        cy.get(loginPage.passwordField).type(data.negativeData.negativEmail);
        cy.get(loginPage.passwordField).type(data.user.password);
        cy.get(loginPage.loginButtonSubmit).click();
    })
    it("negati login 1", () => {
        cy.visit("/");
        cy.get(loginPage.emailField).clear().type(data.user.email);
        cy.get(loginPage.passwordField).clear().type(data.negativeData.negativPassword);
        cy.get(loginPage.loginButtonSubmit).click();
    });
    it("negativ login_3", () => {
        cy.visit("/");
        cy.get(loginPage.emailField).clear().type(data.user.email);
        cy.get(loginPage.passwordField).clear().type(data.user.password);
        cy.get(loginPage.loginButtonSubmit)
    });
    it("negati login without .com", () => {
        cy.visit("/");
        cy.get(loginPage.emailField).clear().type(data.negativeData.negativEmail2);
        cy.get(loginPage.passwordField).clear().type(data.user.password);
        cy.get(loginPage.loginButtonSubmit).click();
    });
    it("negati login without without name", () => {
        cy.visit("/");
        cy.get(loginPage.emailField).clear().type(data.negativeData.negativEmail3);
        cy.get(loginPage.passwordField).clear().type(data.user.password);
        cy.get(loginPage.loginButtonSubmit).click();
    });
    it("negati login only .com", () => {
        cy.visit("/");
        cy.get(loginPage.emailField).clear().type(data.negativeData.negativEmail4);
        cy.get(loginPage.passwordField).clear().type(data.user.password);
        cy.get(loginPage.loginButtonSubmit).click();
    });

    it.only("valid login", () => {
        cy.visit("/");
        cy.get(loginPage.emailField).clear().type(data.user.email);
        cy.get(loginPage.passwordField).clear().type(data.user.password);
        cy.get(loginPage.loginButtonSubmit).click();
        cy.get(profile.accountButton).click({force:true});
        cy.get(profile.profileButton).click({force:true});
        cy.get(logout.logoutButton).click({force:true});
    });  
})