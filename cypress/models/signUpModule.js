import signUp from "../fixtures/signUpModul.json"
import login from "../fixtures/loginModule.json"
import faker from "faker"

var user = {
    email: faker.internet.email(),
    password: "12345678",
    userNumber: "20"
}
    


module.exports = {
    get signUpButton() {
        return cy.get(
            "[data-cy=login-sign-up-link]"
        );
    },
    get signUpStandardButton() {
        return cy.get(
            ".vsp-c-pricing-plan-list.vsp-c-pricing-plan-list--annual > li:nth-of-type(2) > a[title='Standard']"
        );
    },
    get emailField() {
        return cy.get(
            "input[name='email']"
        );
    },
    get passwordField() {
        return cy.get(
            "input[name='password']"
        );
    },
    get numberOfUsersField() {
        return cy.get(
            "input[name='number_of_users']"
        );
    },
    get termsAndConditionsCheckbox() {
        return cy.get(
            ".vs-c-checkbox-check"
        );
    },
    get submitButton() {
        return cy.get(
            "[data-cy=sign-up-submit-button]"
        );
    },
    signUp({ email = user.email, password = user.password, userNumber = user.userNumber}) {
        if (email == "" || password == "" || userNumber == "") {
            this.signUpButton.should('be.visible').click({force:true});
            this.signUpStandardButton.should('be.visible').click({force:true});
            this.submitButton.click({force:true});
        }else {cy.intercept('POST', '**/api/v2/register').as('registration');
            this.signUpButton.should('be.visible').click();
            this.signUpStandardButton.should('be.visible').click({force:true});
            this.emailField.should('be.visible').type(email);
            this.passwordField.should('be.visible').eq(0).type(password);
            this.numberOfUsersField.should('be.visible').type(userNumber);
            // this.termsAndConditionsCheckbox.should('be.visible').click()
            this.submitButton.should('be.visible').click();
            if (email == user.email && password == user.password && userNumber == user.userNumber){
            cy.wait('@registration').then((interception) => {
                expect(interception.response.statusCode).to.eq(200)
                console.log(interception)
                expect(interception.request.body.email).to.eq(user.email)
                expect(interception.request.url).to.eq(interception.response.url)
                expect(interception.response.statusMessage).to.eq("OK")
            });
        }}
    }

    // email: faker.internet.email()
    }