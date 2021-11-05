import sidebar from "../fixtures/sidebar.json"

module.exports = {
    get accountButton() {
        return cy.get(".el-dropdown-link")
    },
    get configurationButton() {
        return cy.get("[data-cy=account-profile] > span > div > .vs-c-site-logo")
    },
    get addNewButton() {
        return cy.get(".el-tooltip.vs-c-list-btn--new-workspace.vs-c-list__btn > span")
    },
    get addNewOrganization() {
        return cy.get("li:nth-of-type(1) > a > span")
    }
}