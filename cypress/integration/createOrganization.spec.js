///<reference types = "cypress"/>

import loginPage from "../fixtures/loginModule.json"
import data  from "../fixtures/data.json"
import sidebar from "../fixtures/sidebar.json"
import organization  from "../fixtures/createOrganization.json"
import updateOrgg from "../fixtures/updateOrganization.json"
import board from "../fixtures/createNewBoard.json"
import boardUpdate from "../fixtures/boardUpdate.json"

describe("vivifyScrum functionality", () => {
    it("new organization creation with valid data", () => {
        cy.visit("/");
        cy.get(loginPage.emailField).clear().type(data.user.email);
        cy.get(loginPage.passwordField).clear().type(data.user.password);
        cy.get(loginPage.loginButtonSubmit).click();
        cy.wait(3000)
        cy.get(sidebar.addNewButton).click({force:true});
        cy.get(sidebar.addNewOrganization).click({force:true});
        cy.get(organization.enterNameField).type(data.organization.name);
        cy.get(organization.nextButton).click();
        cy.get(organization.createButton).click({force:true});
    }); 
    it("new board creation", () => {
        cy.get(board.addNewBoard).click({force:true});
        cy.get(board.boardTitleField).type(data.board.boardName);
        cy.get(board.nextButton).eq(0).click({force:true});
        cy.get(board.boardTypeScrum).click({force:true}),
        cy.get(board.nextButton).click({force:true});
        cy.get(board.nextButton).click({force:true}),
        cy.get(board.nextButton).click({force:true});
    });
    it("new column and task creation and delete", () => {
        cy.wait(3000)
        cy.get(board.okBoardButton).click({force:true})
        cy.get(board.createColumn).click({force:true});
        cy.get(board.createColumn).type(data.newColumn.columnName);
        cy.get(board.newColumn).eq(1).click({force:true});
        cy.get(board.createTask).click({force:true});
        cy.get(board.textArea).type(data.newColumn.taskName);
        cy.get(board.saveTaskButton).click({force:true});
        cy.get(board.moreButton).click({force:true});
        cy.get(board.deleteTask).click({force:true});
        cy.get(board.deleteSprint).click({force:true});
        cy.get(board.confirmButton).click({forse:true});
    });
    it("start sprint", () => {
        cy.get(board.sprintMoreButton).click({force:true}),
        cy.get(board.startSprint).click({force:true});
        cy.get(board.startSprintButton).click({force:true});
    })
    it("board name update and board delete", () => {
        cy.wait(3000);
        cy.get(boardUpdate.boardConfiguration).click({force:true});
        cy.get(boardUpdate.boardTitle).clear().type(data.board.boardNewName);
        cy.get(boardUpdate.boardDescription).type(data.board.boardDescription);
        cy.get(boardUpdate.updateButton).click({force:true});
        cy.get(boardUpdate.deleteButton).click({force:true});
        cy.get(boardUpdate.confirmButton).click({force:true});
    })
    it("organization name update", () => {
        cy.wait(3000)
        cy.get(sidebar.organizationButton).eq(-1).click({force:true});
        cy.get(board.okBoardButton).click({force:true})
        cy.get(sidebar.configurationButton).click({force:true});
        cy.wait(3000)
        cy.get(updateOrgg.updateNameField).click().clear().type(data.organization.newName2);
        cy.get(updateOrgg.updateButton).eq(0).click({force:true});
        cy.get(updateOrgg.daysCheckbox).eq(5).click({force:true});
        cy.get(updateOrgg.startDayButton).click({force:true});
        cy.get(updateOrgg.startDay).eq(0).click({force:true});
        cy.get(updateOrgg.vacationDay).clear().type(data.organization.newVacationDays);
        cy.get(updateOrgg.updateButton).eq(1).click();
        cy.get(updateOrgg.deleteOrganization).click({force:true});
        cy.get(updateOrgg.currentPasswordField).type(data.user.password);
        cy.get(updateOrgg.yesButton).click();   
    })
    
})


