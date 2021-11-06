
import createBoard from "../fixtures/createNewBoard.json"
import data from "../fixtures/data.json"
import boardUpdate from '../fixtures/boardUpdate.json'
let board_id
module.exports = {
    get okBoardButton() {
        return cy.get(".vs-c-modal--features-button > .vs-c-btn")
    },
    get organizationButton() {
        return cy.get(".vs-c-list__oragnisation-item > :nth-child(2)");
    },
    get addNewBoard() {
        return cy.get(".vs-c-organization-boards strong");
    },
    get boardTitleField() {
        return cy.get("input[name='name']");
    },
    get nextButton() {
        return cy.get("button[name='next_btn']");
    },
    get boardTypeScrum() {
        return cy.get("span[name='type_scrum']");
    },
    get createColumn() {
        return cy.get(".vs-add-column-btn-gap > .vs-add-new-task")
    },
    get newColumn() {
        return cy.get(" .vs-c-task-list.vs-is-empty")
    },
    get createTask() {
        return cy.get("div:nth-of-type(3) > .vs-c-task-list.vs-is-empty > .vs-add-new-task.vs-c-btn.vs-c-btn--round.vs-c-btn--sm.vs-c-btn--themify-primary")
    },
    get textArea() {
        return cy.get("textarea[name='item_name']")
    },
    get saveTaskButton() {
        return cy.get("button[name='new_item_save'] > span")
    },
    get moreButton() {
        return cy.get(":nth-child(3) > .vs-c-col__head > .vs-u-actions > .vs-c-dropdown-wrapper > .vs-c-btn")
    },
    get deleteTask() {
        return cy.get(":nth-child(1) > .vs-c-dropdown-item-column-limit")
    },
    get deleteSprint() {
        return cy.get(":nth-child(3) > .el-col > .el-radio > .el-radio__input > .el-radio__inner")
    },
    get confirmButton() {
        return cy.get(".el-button--success")
    },
    get sprintMoreButton() {
        return cy.get(":nth-child(2) > .vs-c-col__head > .vs-u-actions > .vs-c-dropdown-wrapper > .vs-c-btn")
    },
    get startSprint() {
        return cy.get(":nth-child(3) > .vs-c-dropdown-item-column-limit")
    },
    get startSprintButton() {
        return cy.get(".el-button--success")
    },
    get boardConfiguration() {
        return cy.get(":nth-child(12) > [effect='dark'] > :nth-child(2) > .vs-c-site-logo")
    },
    get boardTitle() {
        return cy.get(":nth-child(1) > .el-form-item__content > .el-input > .el-input__inner")
    },
    get boardDescription() {
        return cy.get(":nth-child(1) > .vs-c-settings-section > .vs-c-settings-section-form > .el-form > :nth-child(3) > .el-form-item__content > .el-input > .el-input__inner")
    },
    get updateButton() {
        return cy.get(".vs-u-text--left > .vs-c-btn")
    },
    get deleteButton() {
        return cy.get(".vs-c-btn.vs-c-btn--spaced.vs-c-btn--warning > span:nth-of-type(2)")
    },
    get confirmButton() {
        return cy.get("button[name='save-btn']")
    },
    createBoard() {
        cy.intercept('POST', "**/api/v2/boards").as('createBoard')
        this.organizationButton.should('be.visible').click({force:true});
        this.addNewBoard.should('be.visible').click();
        this.boardTitleField.should('be.visible').type(data.board.boardName);
        this.nextButton.should('be.visible').click();
        this.boardTypeScrum.should('be.visible').click();
        this.nextButton.should('be.visible').click();
        this.nextButton.should('be.visible').click();
        this.nextButton.should('be.visible').click();
        cy.wait('@createBoard').then((interception) => {
            console.log(interception)
            board_id = interception.response.body.id 
            cy.log(board_id)
            expect(interception.response.statusCode).to.eq(201)
            expect(interception.response.statusMessage).to.eq('Created')
        })
    },
    createColumns() {
        cy.intercept('POST', `**/api/v2/boards/${board_id}/sprints`).as('createdColumn')
        this.createColumn.should('be.visible').click();
        this.createColumn.type(data.newColumn.columnName);
        this.newColumn.last().should('be.visible').click()
        cy.wait('@createdColumn').then((interception) => {
            console.log(interception)
            expect(interception.response.statusCode).to.eq(201)
            expect(interception.response.statusMessage).to.eq('Created')
        })
    },
    createTasks() {
        cy.intercept('POST', "**/api/v2/tasks").as('createdTask')
        this.createTask.click({force:true});
        this.textArea.should('be.visible').type(data.newColumn.taskName)
        this.saveTaskButton.should('be.visible').click()
        cy.wait('@createdTask').then((interception) => {
            console.log(interception)
            expect(interception.response.statusCode).to.eq(201)
            expect(interception.response.statusMessage).to.eq('Created')
        })
    },
    deleteColTask() {
        this.moreButton.should('be.visible').click()
        this.deleteTask.should('be.visible').click()
        this.deleteSprint.should('be.visible').click()
        this.confirmButton.should('be.visible').click()
    },
    createSprint() {
        this.sprintMoreButton.should('be.visible').click()
        this.startSprint.should('be.visible').click()
        this.startSprintButton.should('be.visible').click()
    },
    boardDelete() {
        this.boardConfiguration.should('be.visible').click()
        this.boardTitle.clear().type(data.board.boardNewName)
        this.boardDescription.type(data.board.boardDescription)
        this.updateButton.click()
        this.deleteButton.click()
        this.confirmButton.click()
    }


}