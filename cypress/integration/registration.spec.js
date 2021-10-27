///<reference types = "cypress"/>



const register = require("../fixtures/signUpModul.json")
const newUser = require("../fixtures/data.json")
import errors from "../fixtures/error.json"
import errorsData from "../fixtures/errors_data.json"


describe("registration", () => {
    // it("regular registration 1", () => {
    //     cy.visit("https://cypress-api.vivifyscrum-stage.com/pricing");
    //     cy.get(register.signUpStandardButton).click({force:true});
    //     cy.get(register.emailField).type(newUser.newUser.email);
    //     cy.get(register.passwordField).eq(0).type(newUser.newUser.password);
    //     cy.get(register.numberOfUsersField).type(newUser.newUser.users);
    //     cy.get(register.submitButton).click();
    // })

    it("registration without email", () => {
        cy.visit("https://cypress-api.vivifyscrum-stage.com/pricing");
        cy.get(register.signUpStandardButton).click({force:true});
        cy.get(register.emailField);
        cy.get(register.passwordField).eq(0).type(newUser.newUser.password);
        cy.get(register.numberOfUsersField).type(newUser.newUser.users);
        cy.get(register.submitButton).click();
        cy.get(errors.noEmailError).should('contain', errorsData.noEmail)
        cy.get(register.submitButton).should('exist')
        cy.get(register.googleButton).should('exist')
        cy.get(register.facebookButton).should('exist')
        cy.get(register.twitterButton).should('exist')
        cy.get(register.regzenButton).should('exist')
    })
    it("registration with only name in mail ", () => {
        cy.visit("https://cypress-api.vivifyscrum-stage.com/pricing");
        cy.get(register.signUpStandardButton).click({force:true});
        cy.get(register.emailField).type(newUser.newUserNegativ.email2);
        cy.get(register.passwordField).eq(0).type(newUser.newUser.password);
        cy.get(register.numberOfUsersField).type(newUser.newUser.users);
        cy.get(register.submitButton).click();
        cy.get(errors.noEmailError).should('contain', errorsData.noEmail)
        cy.get(register.submitButton).should('exist')
        cy.get(register.googleButton).should('exist')
        cy.get(register.facebookButton).should('exist')
        cy.get(register.twitterButton).should('exist')
        cy.get(register.regzenButton).should('exist')
    })
    it("registration with only name@ in mail ", () => {
        cy.visit("https://cypress-api.vivifyscrum-stage.com/pricing");
        cy.get(register.signUpStandardButton).click({force:true});
        cy.get(register.emailField).type(newUser.newUserNegativ.email3);
        cy.get(register.passwordField).eq(0).type(newUser.newUser.password);
        cy.get(register.numberOfUsersField).type(newUser.newUser.users);
        cy.get(register.submitButton).click();
        cy.get(errors.noEmailError).should('contain', errorsData.noEmail)
        cy.get(register.submitButton).should('exist')
        cy.get(register.googleButton).should('exist')
        cy.get(register.facebookButton).should('exist')
        cy.get(register.twitterButton).should('exist')
        cy.get(register.regzenButton).should('exist')
    })
    it("registration without .com in mail ", () => {
        cy.visit("https://cypress-api.vivifyscrum-stage.com/pricing");
        cy.get(register.signUpStandardButton).click({force:true});
        cy.get(register.emailField).type(newUser.newUserNegativ.email4);
        cy.get(register.passwordField).eq(0).type(newUser.newUser.password);
        cy.get(register.numberOfUsersField).type(newUser.newUser.users);
        cy.get(register.submitButton).click();
        cy.get(errors.noEmailError).should('contain', errorsData.noEmail)
        cy.get(register.submitButton).should('exist')
        cy.get(register.googleButton).should('exist')
        cy.get(register.facebookButton).should('exist')
        cy.get(register.twitterButton).should('exist')
        cy.get(register.regzenButton).should('exist')
    })
    it("registration with only @yahoo.com in mail ", () => {
        cy.visit("https://cypress-api.vivifyscrum-stage.com/pricing");
        cy.get(register.signUpStandardButton).click({force:true});
        cy.get(register.emailField).type(newUser.newUserNegativ.email5);
        cy.get(register.passwordField).eq(0).type(newUser.newUser.password);
        cy.get(register.numberOfUsersField).type(newUser.newUser.users);
        cy.get(register.submitButton).click();
        cy.get(errors.noEmailError).should('contain', errorsData.noEmail)
        cy.get(register.submitButton).should('exist')
        cy.get(register.googleButton).should('exist')
        cy.get(register.facebookButton).should('exist')
        cy.get(register.twitterButton).should('exist')
        cy.get(register.regzenButton).should('exist')
    })
    it("registration with only .com in mail ", () => {
        cy.visit("https://cypress-api.vivifyscrum-stage.com/pricing");
        cy.get(register.signUpStandardButton).click({force:true});
        cy.get(register.emailField).type(newUser.newUserNegativ.email6);
        cy.get(register.passwordField).eq(0).type(newUser.newUser.password);
        cy.get(register.numberOfUsersField).type(newUser.newUser.users);
        cy.get(register.submitButton).click();
        cy.get(errors.noEmailError).should('contain', errorsData.noEmail)
        cy.get(register.submitButton).should('exist')
        cy.get(register.googleButton).should('exist')
        cy.get(register.facebookButton).should('exist')
        cy.get(register.twitterButton).should('exist')
        cy.get(register.regzenButton).should('exist')
        
    })
    it("registration without password", () => {
        cy.visit("https://cypress-api.vivifyscrum-stage.com/pricing");
        cy.get(register.signUpStandardButton).click({force:true});
        cy.get(register.emailField).type(newUser.newUser.email);
        cy.get(register.passwordField).eq(0);
        cy.get(register.numberOfUsersField).type(newUser.newUser.users);
        cy.get(register.submitButton).click();
        cy.get(errors.noPasswordError).should('contain', errorsData.noPassword)
        cy.get(register.submitButton).should('exist')
        cy.get(register.googleButton).should('exist')
        cy.get(register.facebookButton).should('exist')
        cy.get(register.twitterButton).should('exist')
        cy.get(register.regzenButton).should('exist')
    })
    it("registration with only space in password", () => {
        cy.visit("https://cypress-api.vivifyscrum-stage.com/pricing");
        cy.get(register.signUpStandardButton).click({force:true});
        cy.get(register.emailField).type(newUser.newUser.email);
        cy.get(register.passwordField).eq(0).type(newUser.newUserNegativ.passwordNegativ)
        cy.get(register.numberOfUsersField).type(newUser.newUser.users);
        cy.get(register.submitButton).click();
        cy.get(errors.noPasswordError).should('contain', errorsData.noPassword)
        cy.get(register.submitButton).should('exist')
        cy.get(register.googleButton).should('exist')
        cy.get(register.facebookButton).should('exist')
        cy.get(register.twitterButton).should('exist')
        cy.get(register.regzenButton).should('exist')
    })
    it("registration without number of users", () => {
        cy.visit("https://cypress-api.vivifyscrum-stage.com/pricing");
        cy.get(register.signUpStandardButton).click({force:true});
        cy.get(register.emailField).type(newUser.newUser.email);
        cy.get(register.passwordField).eq(0).type(newUser.newUser.password)
        cy.get(register.numberOfUsersField);
        cy.get(register.submitButton).click();
        cy.get(errors.noUsersError).should('contain', errorsData.noUsers)
        cy.get(register.submitButton).should('exist')
        cy.get(register.googleButton).should('exist')
        cy.get(register.facebookButton).should('exist')
        cy.get(register.twitterButton).should('exist')
        cy.get(register.regzenButton).should('exist')
    })
    it("registration with 10 users", () => {
        cy.visit("https://cypress-api.vivifyscrum-stage.com/pricing");
        cy.get(register.signUpStandardButton).click({force:true});
        cy.get(register.emailField).type(newUser.newUser.email);
        cy.get(register.passwordField).eq(0).type(newUser.newUser.password)
        cy.get(register.numberOfUsersField).type(newUser.newUserNegativ.usersNegativ1);
        cy.get(register.submitButton).click();
        cy.get(errors.noUsersError).should('contain', errorsData.incorrectNumberOfUsers)
        cy.get(register.submitButton).should('exist')
        cy.get(register.googleButton).should('exist')
        cy.get(register.facebookButton).should('exist')
        cy.get(register.twitterButton).should('exist')
        cy.get(register.regzenButton).should('exist')
    })
    it("registration with 45 users", () => {
        cy.visit("https://cypress-api.vivifyscrum-stage.com/pricing");
        cy.get(register.signUpStandardButton).click({force:true});
        cy.get(register.emailField).type(newUser.newUser.email);
        cy.get(register.passwordField).eq(0).type(newUser.newUser.password)
        cy.get(register.numberOfUsersField).type(newUser.newUserNegativ.userNegativ2);
        cy.get(register.submitButton).click();
        cy.get(errors.noUsersError).should('contain', errorsData.incorrectNumberOfUsers)
        cy.get(register.submitButton).should('exist')
        cy.get(register.googleButton).should('exist')
        cy.get(register.facebookButton).should('exist')
        cy.get(register.twitterButton).should('exist')
        cy.get(register.regzenButton).should('exist')
    })
    it("registration with the same email", () => {
        cy.visit("https://cypress-api.vivifyscrum-stage.com/pricing");
        cy.get(register.signUpStandardButton).click({force:true});
        cy.get(register.emailField).type(newUser.newUser.email);
        cy.get(register.passwordField).eq(0).type(newUser.newUser.password)
        cy.get(register.numberOfUsersField).type(newUser.newUser.users);
        cy.get(register.submitButton).click();
        cy.wait(300)
        cy.get(errors.theSameEmail).should('exist')
        cy.get(register.submitButton).should('exist')
        cy.get(register.googleButton).should('exist')
        cy.get(register.facebookButton).should('exist')
        cy.get(register.twitterButton).should('exist')
        cy.get(register.regzenButton).should('exist')
    })

})
