import updateOrg from "../fixtures/updateOrganization.json"
import data from "../fixtures/data.json"

module.exports = {
    get organizationButton() {
        return cy.get(".vs-c-list__oragnisation-item > :nth-child(2)");
    },
    get configurationButton() {
        // return cy.get(":nth-child(8) > span > div > .vs-c-site-logo");
        return cy.get("[data-cy=organization-configuration] > span > div > .vs-c-site-logo")
    },
    get deleteOrganization() {
        return cy.get(".vs-c-btn.vs-c-btn--spaced.vs-c-btn--warning > span:nth-of-type(2)");
    },
    get currentPasswordField() {
        return cy.get("div.el-input > input[type='password']");
    },
    get yesButton() {
        return cy.get("button[name='save-btn']");
    },
    brisanje() {
        this.organizationButton.click({force:true});
        this.configurationButton.click({force:true});
        this.deleteOrganization.click({force:true});
        this.currentPasswordField.type(data.user.password);
        this.yesButton.click({force:true});
    }
}