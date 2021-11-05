///<reference types = "cypress"/>



const register = require("../fixtures/signUpModul.json")
const newUser = require("../fixtures/data.json")
import errors from "../fixtures/error.json"
import errorsData from "../fixtures/errors_data.json"
import signUpModule from "../models/signUpModule"


describe("registration", () => {
    it("regular registration 1", () => {
        cy.visit("/");
        signUpModule.signUp({})
    //     cy.get(register.signUpStandardButton).click({force:true});
    //     cy.get(register.emailField).type(newUser.newUser.email);
    //     cy.get(register.passwordField).eq(0).type(newUser.newUser.password);
    //     cy.get(register.numberOfUsersField).type(newUser.newUser.users);
    //     cy.get(register.submitButton).click();
    })


    it("registration without email", () => {
        cy.visit("/");
        signUpModule.signUp({email: ""})
        // cy.get(register.signUpStandardButton).click({force:true});
        // cy.get(register.emailField);
        // cy.get(register.passwordField).eq(0).type(newUser.newUser.password);
        // cy.get(register.numberOfUsersField).type(newUser.newUser.users);
        // cy.get(register.submitButton).click();
        cy.get(errors.noEmailError).should('contain', errorsData.noEmail)
        cy.get(register.submitButton).should('be.visible')
        cy.get(register.googleButton).should('be.visible')
        cy.get(register.facebookButton).should('be.visible')
        cy.get(register.twitterButton).should('be.visible')
        cy.get(register.regzenButton).should('be.visible')
    })
    it("registration with only name in mail ", () => {
        cy.visit("/");
        // cy.get(register.signUpStandardButton).click({force:true});
        // cy.get(register.emailField).type(newUser.newUserNegativ.email2);
        // cy.get(register.passwordField).eq(0).type(newUser.newUser.password);
        // cy.get(register.numberOfUsersField).type(newUser.newUser.users);
        // cy.get(register.submitButton).click();
        signUpModule.signUp({email: newUser.newUserNegativ.email2})
        cy.get(errors.noEmailError).should('contain', errorsData.noEmail)
        cy.get(register.submitButton).should('be.visible')
        cy.get(register.googleButton).should('be.visible')
        cy.get(register.facebookButton).should('be.visible')
        cy.get(register.twitterButton).should('be.visible')
        cy.get(register.regzenButton).should('be.visible')
    })
    it("registration with only name@ in mail ", () => {
        cy.visit("/");
        // cy.get(register.signUpStandardButton).click({force:true});
        // cy.get(register.emailField).type(newUser.newUserNegativ.email3);
        // cy.get(register.passwordField).eq(0).type(newUser.newUser.password);
        // cy.get(register.numberOfUsersField).type(newUser.newUser.users);
        // cy.get(register.submitButton).click();
        signUpModule.signUp({email: newUser.newUserNegativ.email3})
        cy.get(errors.noEmailError).should('contain', errorsData.noEmail)
        cy.get(register.submitButton).should('be.visible')
        cy.get(register.googleButton).should('be.visible')
        cy.get(register.facebookButton).should('be.visible')
        cy.get(register.twitterButton).should('be.visible')
        cy.get(register.regzenButton).should('be.visible')
    })
    it("registration without .com in mail ", () => {
        cy.visit("/");
        // cy.get(register.signUpStandardButton).click({force:true});
        // cy.get(register.emailField).type(newUser.newUserNegativ.email4);
        // cy.get(register.passwordField).eq(0).type(newUser.newUser.password);
        // cy.get(register.numberOfUsersField).type(newUser.newUser.users);
        // cy.get(register.submitButton).click();
        signUpModule.signUp({email: newUser.newUserNegativ.email4})
        cy.get(errors.noEmailError).should('contain', errorsData.noEmail)
        cy.get(register.submitButton).should('be.visible')
        cy.get(register.googleButton).should('be.visible')
        cy.get(register.facebookButton).should('be.visible')
        cy.get(register.twitterButton).should('be.visible')
        cy.get(register.regzenButton).should('be.visible')
    })
    it("registration with only @yahoo.com in mail ", () => {
        cy.visit("/");
        // cy.get(register.signUpStandardButton).click({force:true});
        // cy.get(register.emailField).type(newUser.newUserNegativ.email5);
        // cy.get(register.passwordField).eq(0).type(newUser.newUser.password);
        // cy.get(register.numberOfUsersField).type(newUser.newUser.users);
        // cy.get(register.submitButton).click();
        signUpModule.signUp({email: newUser.newUserNegativ.email5})
        cy.get(errors.noEmailError).should('contain', errorsData.noEmail)
        cy.get(register.submitButton).should('be.visible')
        cy.get(register.googleButton).should('be.visible')
        cy.get(register.facebookButton).should('be.visible')
        cy.get(register.twitterButton).should('be.visible')
        cy.get(register.regzenButton).should('be.visible')
    })
    it("registration with only .com in mail ", () => {
        cy.visit("/");
        // cy.get(register.signUpStandardButton).click({force:true});
        // cy.get(register.emailField).type(newUser.newUserNegativ.email6);
        // cy.get(register.passwordField).eq(0).type(newUser.newUser.password);
        // cy.get(register.numberOfUsersField).type(newUser.newUser.users);
        // cy.get(register.submitButton).click();
        signUpModule.signUp({email: newUser.newUserNegativ.email6})
        cy.get(errors.noEmailError).should('contain', errorsData.noEmail)
        cy.get(register.submitButton).should('be.visible')
        cy.get(register.googleButton).should('be.visible')
        cy.get(register.facebookButton).should('be.visible')
        cy.get(register.twitterButton).should('be.visible')
        cy.get(register.regzenButton).should('be.visible')
        
    })
    it("registration without password", () => {
        cy.visit("/");
        // cy.get(register.signUpStandardButton).click({force:true});
        // cy.get(register.emailField).type(newUser.newUser.email);
        // cy.get(register.passwordField).eq(0);
        // cy.get(register.numberOfUsersField).type(newUser.newUser.users);
        // cy.get(register.submitButton).click();
        signUpModule.signUp({password: ""})
        cy.get(errors.noPasswordError).should('contain', errorsData.noPassword)
        cy.get(register.submitButton).should('be.visible')
        cy.get(register.googleButton).should('be.visible')
        cy.get(register.facebookButton).should('be.visible')
        cy.get(register.twitterButton).should('be.visible')
        cy.get(register.regzenButton).should('be.visible')
    })
    it("registration with only space in password", () => {
        cy.visit("/");
        // cy.get(register.signUpStandardButton).click({force:true});
        // cy.get(register.emailField).type(newUser.newUser.email);
        // cy.get(register.passwordField).eq(0).type(newUser.newUserNegativ.passwordNegativ)
        // cy.get(register.numberOfUsersField).type(newUser.newUser.users);
        // cy.get(register.submitButton).click();
        signUpModule.signUp({password: newUser.newUserNegativ.passwordNegativ})
        cy.get(errors.noPasswordError).should('contain', errorsData.noPassword)
        cy.get(register.submitButton).should('be.visible')
        cy.get(register.googleButton).should('be.visible')
        cy.get(register.facebookButton).should('be.visible')
        cy.get(register.twitterButton).should('be.visible')
        cy.get(register.regzenButton).should('be.visible')
    })
    it("registration without number of users", () => {
        cy.visit("/");
        // cy.get(register.signUpStandardButton).click({force:true});
        // cy.get(register.emailField).type(newUser.newUser.email);
        // cy.get(register.passwordField).eq(0).type(newUser.newUser.password)
        // cy.get(register.numberOfUsersField);
        // cy.get(register.submitButton).click();
        signUpModule.signUp({userNumber: ""})
        cy.get(errors.noUsersError).should('contain', errorsData.noUsers)
        cy.get(register.submitButton).should('be.visible')
        cy.get(register.googleButton).should('be.visible')
        cy.get(register.facebookButton).should('ebe.visible')
        cy.get(register.twitterButton).should('be.visible')
        cy.get(register.regzenButton).should('be.visible')
    })
    it("registration with 10 users", () => {
        cy.visit("/");
        // cy.get(register.signUpStandardButton).click({force:true});
        // cy.get(register.emailField).type(newUser.newUser.email);
        // cy.get(register.passwordField).eq(0).type(newUser.newUser.password)
        // cy.get(register.numberOfUsersField).type(newUser.newUserNegativ.usersNegativ1);
        // cy.get(register.submitButton).click();
        signUpModule.signUp({userNumber: newUser.newUserNegativ.usersNegativ1})
        cy.get(errors.noUsersError).should('contain', errorsData.incorrectNumberOfUsers)
        cy.get(register.submitButton).should('be.visible')
        cy.get(register.googleButton).should('be.visible')
        cy.get(register.facebookButton).should('be.visible')
        cy.get(register.twitterButton).should('be.visible')
        cy.get(register.regzenButton).should('be.visible')
    })
    it.only("registration with 45 users", () => {
        cy.visit("/");
        // cy.get(register.signUpStandardButton).click({force:true});
        // cy.get(register.emailField).type(newUser.newUser.email);
        // cy.get(register.passwordField).eq(0).type(newUser.newUser.password)
        // cy.get(register.numberOfUsersField).type(newUser.newUserNegativ.userNegativ2);
        // cy.get(register.submitButton).click();
        signUpModule.signUp({userNumber: newUser.newUserNegativ.userNegativ2})
        cy.get(errors.noUsersError).should('contain', errorsData.incorrectNumberOfUsers)
        cy.get(register.submitButton).should('be.visible')
        cy.get(register.googleButton).should('be.visible')
        cy.get(register.facebookButton).should('be.visible')
        cy.get(register.twitterButton).should('be.visible')
        cy.get(register.regzenButton).should('be.visible')
    })
    it.only("registration with the same email", () => {
        cy.visit("/");
        // cy.get(register.signUpStandardButton).click({force:true});
        // cy.get(register.emailField).type(newUser.newUser.email);
        // cy.get(register.passwordField).eq(0).type(newUser.newUser.password)
        // cy.get(register.numberOfUsersField).type(newUser.newUser.users);
        // cy.get(register.submitButton).click();
        cy.wait(300)
        signUpModule.signUp({email: newUser.user.email})
        cy.get(errors.theSameEmail).should('be.visible')
        cy.get(register.submitButton).should('be.visible')
        cy.get(register.googleButton).should('be.visible')
        cy.get(register.facebookButton).should('be.visible')
        cy.get(register.twitterButton).should('be.visible')
        cy.get(register.regzenButton).should('be.visible')
    })

})
