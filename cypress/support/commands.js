import register from "../fixtures/signUpModul.json"
import newUser from "../fixtures/data.json"
import loginPage from "../fixtures/loginModule.json"
import organization from '../fixtures/createOrganization.json'
import sidebar from "../fixtures/sidebar.json"
import logout from "../fixtures/logout.json"
import updateOrg from "../fixtures/updateOrganization.json"
import data from "../fixtures/data.json"

Cypress.Commands.add('registration', (user) => {
    // var email = newUser.newUser1.email
    // var password = newUser.newUser1.password
    // var users = newUser.newUser1.users
    if(user.email==''|| user.password=='' || user.users==''){
        cy.get(loginPage.signUpButton).click(),
        cy.get(register.signUpStandardButton).click({force:true}),
        cy.get(register.submitButton).click({force:true})
    }else{
        cy.get(login.signUpButton).click(),
        cy.get(register.signUpStandardButton).click({force:true}),
        cy.get(register.emailField).type(user.email),
        cy.get(register.passwordField).eq(0).type(user.password),
        cy.get(register.numberOfUsersField).type(user.users),
        cy.get(register.submitButton).click()
    }
    
})
Cypress.Commands.add('login', (user) => {
    if(user.email == "" || user.password == "") {
        cy.get(loginPage.loginButtonSubmit).click();
      } else {
          cy.intercept('POST', "**/api/v2/login").as("login");
            cy.get(loginPage.emailField).type(user.email);
            cy.get(loginPage.passwordField).type(user.password);
            cy.get(loginPage.loginButtonSubmit).click();
            if (user.email == newUser.user.email && user.password == newUser.user.password) {
                cy.wait("@login").then((intercept) => {
                    expect(intercept.response.statusCode).to.eql(200);
                });
            }
      }
})
Cypress.Commands.add('logout', () => {
        cy.intercept('POST', "**/api/v2/logout").as('logout')
            cy.get(sidebar.accountButton).should('be.visible').eq(0).click({force:true})
            cy.get(sidebar.configurationButton).should('be.visible').click({force:true})
            cy.get(logout.logoutButton).should('be.visible').click()
        cy.wait('@logout').then((intercept) => {
            expect(intercept.response.statusCode).to.eq(201)
            expect(intercept.response.body.message).to.eq("Successfully logged out")
        });
})
Cypress.Commands.add('createOrganization', (organizationName) => {
    // createOrg({organizationName = data.organization.name}) {
        if (organizationName == "") {
            cy.get(sidebar.addNewButton).should('be.visible').click({force:true});
            cy.get(sidebar.addNewOrganization).should('be.visible').click();
            cy.get(organization.enterNameField).should('be.visible').type(organizationName);
            cy.get(organization.nextButton).should('be.disabled');
        } else {
            cy.intercept('POST', "**/api/v2/organizations").as('createOrganization');
                cy.get(sidebar.addNewButton).should('be.visible').click({force:true});
                cy.get(sidebar.addNewOrganization).should('be.visible').click();
                cy.get(organization.enterNameField).should('be.visible').type(organizationName);
                cy.get(organization.nextButton).should('be.visible').click();
                cy.get(organization.createButton).should('be.visible').click();
            if(organizationName == data.organization.name) {
                cy.wait('@createOrganization').then((interception) => {
                    // console.log(interception)
                    expect(interception.response.statusCode).to.eq(200)
                    expect(interception.response.statusMessage).to.eq('OK')
                    expect(interception.response.body.name).to.eq(organizationName)
                    expect(interception.response.body.users.length).to.eq(1)

            });
        }
        };
})
Cypress.Commands.add('deleteOrganization', (user) => {
    cy.get(sidebar.organizationButton).click({force:true});
    cy.get(sidebar.configurationButton).click({force:true});
    cy.get(updateOrg.deleteOrganization).click({force:true});
    cy.get(updateOrg.currentPasswordField).type(user.password);
    cy.get(updateOrg.yesButton).click({force:true});
})