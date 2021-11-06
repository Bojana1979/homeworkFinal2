///<reference types = "cypress"/>

import sidebar from "../fixtures/sidebar.json"
import organization from "../fixtures/createOrganization.json"
import logout from "../fixtures/logout.json"
import board from "../fixtures/createNewBoard.json"
import boardUpdate from "../fixtures/boardUpdate.json"
import updateOrgg from "../fixtures/updateOrganization.json"
import data from "../fixtures/data.json"
import authModule from "../models/authModule"
import newOrganisation from "../models/newOrganizationModule"
import deleteModule from "../models/newDeleteModule"
import boardModule from "../models/boardModule"


describe("assertations", () => {
    before(() => {
        cy.visit("/")
        authModule.login({})
        cy.wait(3000)
        cy.get(logout.userName).should('be.visible')
        cy.get(logout.userName).should('contain', data.user.name)
    })
    after(() => {
        deleteModule.brisanje()
        cy.get(board.okBoardButton).click({force:true})
        authModule.logout()
    })
    it("create new organization", () => {
        cy.wait(3000)
        newOrganisation.createOrg({})
        cy.get(organization.assertTitle).should('contain', data.organization.name)
        cy.get(organization.assertCreatedOrg).should("contain", data.organization.name)
        cy.get(board.okBoardButton).click({force:true})
        
    })
    it("create new board", () => {
        boardModule.createBoard({})
        cy.get(board.assertBoaardTitle).should('contain', data.board.boardName)
        cy.get(board.assertBoardList).should('have.length', 2)
    })
    it("column and task creation", () => {
        cy.wait(3000)
        boardModule.createColumns()
        cy.get(board.assertColumnTitle).should('contain', data.newColumn.columnName);
        // cy.get(board.assertColumnList).should("have.length", 3)
        boardModule.createTasks()
        cy.get(board.assertCreatedTask).should('have.length', 2)
        cy.get(board.assertCreatedTask).should('contain', data.newColumn.taskName)
        boardModule.deleteColTask()
        cy.get(board.assertBoardList).should('have.length', 2)
        cy.get(board.assertColumnTitle).should('not.exist')
    })
    it("start sprint", () => {
        boardModule.createSprint()
        cy.get(board.assertSprintTitle).should('contain', data.newColumn.sprintName)
        cy.get(board.assertBoardList).should('have.length', 3)
    })
    it("board delete", () => {
        cy.wait(3000);
        boardModule.boardDelete()
        cy.get(board.assertBoard).should('not.exist')
    })
})