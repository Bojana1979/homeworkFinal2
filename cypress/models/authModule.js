import data from "../fixtures/data.json"
import sidebar from "../models/sideBarModule"
import logout from "../models/logoutModule"

module.exports = {
    get email() {
        return cy.get(
            "input[name='email']"
        );
    },
    get password() {
        return cy.get(
            "input[type='password']"
        );
    },
    get loginButtonSubmit() {
        return cy.get(
            "button[type='submit']"
        );
    },
    get forgotPasswordButton() {
        return cy.get(
            "a[href='/forgot-password']"
        );
    },
    // login({
    //     email = data.user.email,
    //     password = data.user.password
    // }) {
    //     cy.intercept('POST','**api/v2/login').as('login')
    //     this.email.should('be.visible').type(email)
    //     this.password.should('be.visible').type(password)
    //     this.loginButtonSubmit.click()
    //     if(email ==  data.user.email && password == data.user.password) {
    //         cy.wait('@login').then((intercept) => {
    //             expect(intercept.response.statusCode).to.eq(200)
    //         })
    //     }
    // },
    login({ email = data.user.email, password = data.user.password }) {
        if(email == "" || password == "") {
          this.loginButtonSubmit.click();
        } else {
             cy.intercept("POST", "**/api/v2/login").as("login");
              this.email.should("be.visible").type(email);
              this.password.should("be.visible").type(password);
              this.loginButtonSubmit.click();
              if (email == data.user.email && password == data.user.password) {
              cy.wait("@login").then((intercept) => {
                  expect(intercept.response.statusCode).to.eql(200);
              });
              }
        }
    },
    logout() {
        cy.intercept('POST', "**/api/v2/logout").as('logout')
        sidebar.accountButton.should('be.visible').eq(0).click({force:true})
        sidebar.configurationButton.should('be.visible').click({force:true})
        logout.logoutButton.should('be.visible').click()
        cy.wait('@logout').then((intercept) => {
            expect(intercept.response.statusCode).to.eq(201)
            expect(intercept.response.body.message).to.eq("Successfully logged out")
        })
    }
}