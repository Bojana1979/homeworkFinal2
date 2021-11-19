///<reference types = "cypress"/>

const loginPage = require("../fixtures/loginModule.json")
const data = require("../fixtures/data.json")
const profile = require("../fixtures/sidebar.json")
const logout = require("../fixtures/navigation.Board.json")
import errors from "../fixtures/error.json"
import errorData from "../fixtures/errors_data.json"
import logoutNew from "../fixtures/logout.json"
import authModule from "../models/authModule.js"



describe("login", () => {
    it("negativ login_1", () => {
        cy.visit("/");
        // cy.get(loginPage.passwordField).type(data.negativeData.negativEmail);
        // cy.get(loginPage.passwordField).type(data.user.password);
        // cy.get(loginPage.loginButtonSubmit).click();
        authModule.login({email:""})
        cy.get(errors.noEmailError).should('contain', errorData.noEmail)
        cy.get(loginPage.loginButtonSubmit).should('be.visible')
        cy.get(loginPage.googleButton).should('exist')
        cy.get(loginPage.facebookButton).should('exist')
        cy.get(loginPage.twitterButton).should('exist')
        cy.get(loginPage.regzenButton).should('exist')
    })
    it("negativ login 1", () => {
        cy.visit("/");
        // cy.get(loginPage.emailField).clear().type(data.user.email);
        // cy.get(loginPage.passwordField).clear().type(data.negativeData.negativPassword);
        // cy.get(loginPage.loginButtonSubmit).click();
        authModule.login({password: data.negativeData.negativPassword })
        cy.get(errors.inncorectCredentials).should('exist')
        cy.get(errors.inncorectCredentials).should('contain', errorData.wrongData)
        cy.get(loginPage.loginButtonSubmit).should('be.visible')
        cy.get(loginPage.googleButton).should('exist')
        cy.get(loginPage.facebookButton).should('exist')
        cy.get(loginPage.twitterButton).should('exist')
        cy.get(loginPage.regzenButton).should('exist')

    });
    it("negati login without .com", () => {
        cy.visit("/");
        // cy.get(loginPage.emailField).clear().type(data.negativeData.negativEmail2);
        // cy.get(loginPage.passwordField).clear().type(data.user.password);
        // cy.get(loginPage.loginButtonSubmit).click();
        authModule.login({email: data.newUserNegativ.email4})
        cy.get(errors.noEmailError).should('contain', errorData.noEmail)
        cy.get(loginPage.loginButtonSubmit).should('be.visible')
        cy.get(loginPage.googleButton).should('exist')
        cy.get(loginPage.facebookButton).should('exist')
        cy.get(loginPage.twitterButton).should('exist')
        cy.get(loginPage.regzenButton).should('exist')
    });
    it("negati login without name", () => {
        cy.visit("/");
        // cy.get(loginPage.emailField).clear().type(data.negativeData.negativEmail3);
        // cy.get(loginPage.passwordField).clear().type(data.user.password);
        // cy.get(loginPage.loginButtonSubmit).click();
        authModule.login({email: data.newUserNegativ.email3})
        cy.get(errors.noEmailError).should('contain', errorData.noEmail)
        cy.get(loginPage.loginButtonSubmit).should('be.visible')
        cy.get(loginPage.googleButton).should('be.visible')
        cy.get(loginPage.facebookButton).should('be.visible')
        cy.get(loginPage.twitterButton).should('be.visible')
        cy.get(loginPage.regzenButton).should('be.visible')
    });
    it("negati login only .com", () => {
        cy.visit("/");
        // cy.get(loginPage.emailField).clear().type(data.negativeData.negativEmail4);
        // cy.get(loginPage.passwordField).clear().type(data.user.password);
        // cy.get(loginPage.loginButtonSubmit).click();
        authModule.login({email: data.newUserNegativ.email6})
        cy.get(errors.noEmailError).should('contain', errorData.noEmail)
        cy.get(loginPage.loginButtonSubmit).should('be.visible')
        cy.get(loginPage.googleButton).should('be.visible')
        cy.get(loginPage.facebookButton).should('be.visible')
        cy.get(loginPage.twitterButton).should('be.visible')
        cy.get(loginPage.regzenButton).should('be.visible')
    });

    it("valid login", () => {
        cy.visit("/");
        // cy.get(loginPage.emailField).clear().type(data.user.email);
        // cy.get(loginPage.passwordField).clear().type(data.user.password);
        // cy.get(loginPage.loginButtonSubmit).click();
        authModule.login({})
        cy.get(logoutNew.userName).should('be.visible')
        cy.get(logoutNew.userName).should('contain', 'Bojana Bojanic')
        cy.get(profile.accountButton).click({force:true});
        cy.get(profile.profileButton).click({force:true});
        cy.get(logout.logoutButton).click({force:true});
        cy.get(loginPage.loginButtonSubmit).should('be.visible')
    }); 
    it('valid login with POM', () => {
        cy.visit("/")
        authModule.login({})
        authModule.logout()
    }) 
})