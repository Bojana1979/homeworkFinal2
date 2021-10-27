///<reference types = "cypress"/>

import loginPage from "../fixtures/loginModule.json"
import data from "../fixtures/data.json"
import sidebar from "../fixtures/sidebar.json"
import organization from "../fixtures/createOrganization.json"
import logout from "../fixtures/logout.json"
import board from "../fixtures/createNewBoard.json"
import boardUpdate from "../fixtures/boardUpdate.json"
import updateOrgg from "../fixtures/updateOrganization.json"

describe("assertations", () => {
    before(() => {
        cy.intercept('POST', "/https://cypress-api.vivifyscrum-stage.com/api/v2/login").as("login")
        cy.visit("/")
        cy.get(loginPage.emailField).clear().type(data.user.email);
        cy.get(loginPage.passwordField).clear().type(data.user.password);
        cy.get(loginPage.loginButtonSubmit).click();
        cy.wait(3000)
        // cy.wait('@login').then((interception) => {
        //     console.log(interception)
        // })
        //asserts user name
        cy.get(logout.userName).should('be.visible')
        cy.get(logout.userName).should('contain', 'Bojana Bojanic')
    })
    after(() => {
        cy.intercept('POST', 'https://cypress-api.vivifyscrum-stage.com/api/v2/logout').as('logout')
        cy.get(logout.userName).click({force:true})
        cy.get(logout.profile).click({force:true})
        cy.wait(3000)
        cy.get(logout.logoutButton).should('be.visible')
        cy.get(logout.logoutButton).should('be.visible').click({force:true})
        cy.get(".vs-c-auth-modal__body").should('be.visible')
        cy.wait('@logout').then((interception) => {
            console.log(interception)
            expect(interception.response.body.message).to.eq("Successfully logged out")
            expect(interception.response.statusCode).to.eq(201)
        })
    })
    it("create new organization", () => {
        cy.wait(3000)
        cy.get(sidebar.addNewButton).click({force:true});
        cy.get(sidebar.addNewOrganization).click({force:true});
        cy.get(organization.enterNameField).type(data.organization.name);
        cy.get(organization.nextButton).click();
        cy.get(organization.createButton).click({force:true});
        cy.get(board.okBoardButton).click({force:true})
        //asserts created organization
        cy.get(".vs-l-organization__title").should('contain', 'My organization')
        cy.get(".vs-c-list__oragnisation-item > :nth-child(2)").should("contain", 'My organization')
        cy.get(".vs-c-list__oragnisation-item").should('have.length', 1)
    })
    it("create new board", () => {
        cy.get(".vs-c-list__oragnisation-item > :nth-child(2)").click()
        // cy.get(board.okBoardButton).click({force:true})
        cy.get(board.addNewBoard).click({force:true});
        cy.get(board.boardTitleField).type(data.board.boardName);
        cy.get(board.nextButton).eq(0).click({force:true});
        cy.get(board.boardTypeScrum).click({force:true}),
        cy.get(board.nextButton).click({force:true});
        cy.get(board.nextButton).click({force:true}),
        cy.get(board.nextButton).click({force:true});
        cy.get(".vs-l-project__title").should('contain', "prvi board")
        cy.get(".vs-c-col__head").should('have.length', 2)
    })
    it("column and task creation", () => {
        cy.wait(3000)
        cy.get(board.createColumn).click({force:true});
        cy.get(board.createColumn).type(data.newColumn.columnName);
        cy.get(board.newColumn).eq(1).click({force:true});
        cy.get(":nth-child(3) > .vs-c-col__head").should('contain', 'To Do');
        cy.get(".vs-c-col__head").should("have.length", 3)
        cy.get(board.createTask).click({force:true});
        cy.get(board.textArea).type(data.newColumn.taskName);
        cy.get(board.saveTaskButton).click({force:true});
        cy.get(".vs-u-padding--sm").should('have.length', 2)
        cy.get(".vs-u-padding--sm").should('contain', 'prvi task')
        cy.get(board.moreButton).click({force:true});
        cy.get(board.deleteTask).click({force:true});
        cy.get(board.deleteSprint).click({force:true});
        cy.get(board.confirmButton).click({forse:true});
        cy.get('.vs-c-col__head').should('have.length', 2)
        cy.get(':nth-child(3) > .vs-c-col__head').should('not.exist')
    })
    it("start sprint", () => {
        cy.get(board.sprintMoreButton).click({force:true}),
        cy.get(board.startSprint).click({force:true});
        cy.get(board.startSprintButton).click({force:true});
        cy.get(".vs-l-sprint__name").should('contain', "Sprint 1")
        cy.get(".vs-c-col__head").should('have.length', 3)
        cy.get(":nth-child(1) > .vs-c-col__head").should('contain', 'To do')
        cy.get(":nth-child(2) > .vs-c-col__head").should('contain', 'In progress')
        cy.get(':nth-child(3) > .vs-c-col__head').should('contain', 'Done')
    })
    it("board name update and board delete", () => {
        cy.wait(3000);
        cy.get(boardUpdate.boardConfiguration).click({force:true});
        cy.get(boardUpdate.boardTitle).clear().type(data.board.boardNewName);
        cy.get(boardUpdate.boardDescription).type(data.board.boardDescription);
        cy.get(boardUpdate.updateButton).click({force:true});
        cy.get(".vs-c-list__btn > :nth-child(3)").should('contain', "novo ime")
        cy.get(boardUpdate.deleteButton).click({force:true});
        cy.get(boardUpdate.confirmButton).click({force:true});
        cy.get('.vs-c-list__btn > :nth-child(3)').should('not.exist')
    })
    it("organization name update", () => {
        cy.wait(3000)
        cy.get(board.okBoardButton).click({force:true})
        cy.get(sidebar.organizationButton).eq(-1).click({force:true});
        cy.get(sidebar.configurationButton).click({force:true});
        cy.wait(3000)
        cy.get(updateOrgg.updateNameField).click().clear().type(data.organization.newName2);
        cy.get(updateOrgg.updateButton).eq(0).click({force:true});
        cy.get(updateOrgg.daysCheckbox).eq(5).click({force:true});
        cy.get(updateOrgg.startDayButton).click({force:true});
        cy.get(updateOrgg.startDay).eq(0).click({force:true});
        cy.get(updateOrgg.vacationDay).clear().type(data.organization.newVacationDays);
        cy.get(updateOrgg.updateButton).eq(1).click();
        cy.get(".vs-c-list__oragnisation-item > :nth-child(2)").should('contain', 'Third name')
        cy.get(updateOrgg.deleteOrganization).click({force:true});
        cy.get(updateOrgg.currentPasswordField).type(data.user.password);
        cy.get(updateOrgg.yesButton).click(); 
        cy.get('.vs-c-list__oragnisation-item > :nth-child(2)').should('not.exist')  
    })
})