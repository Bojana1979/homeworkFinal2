import logout from "../fixtures/logout.json"

module.exports = {
    get logoutButton() {
        return cy.get(".vs-c-logout > .vs-c-btn > span")
    }
}