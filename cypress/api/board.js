import faker from "faker"
import color from "../support/consoleColor"

module.exports = {
    post({
        boardName = faker.animal.fish(),
        token = "",
        statusCode = 201,
        testMessage = "",
        organization_id = ""
    }) {
        return cy.request({
            failOnStatusCode : false,
            method : "POST",
            url : "https://cypress-api.vivifyscrum-stage.com/api/v2/boards",
            body : {
                configuration_board_id: null,
                name: boardName,
                organization_id: organization_id,
                team_members_board_id: null,
                type: "scrum_board"
            },
            headers: {
                Authorization: "Bearer " + token,
            },
        }).then(response => {
            typeof response.status !== "undefined" && response.status === statusCode
            ? color.log(`${testMessage} - Pass`, "success")
            : color.log(`${testMessage} - Fail - ${JSON.stringify(response)}`, "error");
            console.log(response)
            expect(response.status).to.eql(statusCode)
            return response.body
        })
    },
    update({
        boardID = "",
        newName = faker.animal.crocodilia(),
        token = "",
        statusCode = 200,
        // organization_id= "",
        boardCode = "",
        description = "",
        testMessage = ""
    }){
        return cy.request({
            // failOnStatusCode : false,
           method : "PUT",
           url : `https://cypress-api.vivifyscrum-stage.com/api/v2/boards/${boardID}`,
           body : {
               name : newName,
               description : null,
               boardCode : boardCode,
               task_units : "points"
           },
           headers: {
            Authorization: "Bearer " + token,
        },
    }).then((response) => {
        typeof response.status !== "undefined" && response.status === statusCode
        ? color.log(`${testMessage} - Pass`, "success")
        : color.log(`${testMessage} - Fail - ${JSON.stringify(response)}`, "error");
        console.log(response)
        expect(response.status).to.eql(statusCode)
        console.log(response);
        return response.body;
        })
    },
    get({
        token = "",
        statusCode = 200 
    }){
        return cy.request({
            method : "GET",
            url : "https://cypress-api.vivifyscrum-stage.com/api/v2/boards",
            headers: {
                Authorization: "Bearer " + token
            }
        }).then((response) => {
            console.log(response);
            return response.body;
        })
    },
    delete({
        token = "",
        statusCode = 200,
        boardID = "",
        testMessage = ""
    }){
        return cy.request({
            method : "DELETE",
            url : `https://cypress-api.vivifyscrum-stage.com/api/v2/boards/${boardID}`,
            headers: {
                Authorization: "Bearer " + token
            }
        }).then((response) => {
            typeof response.status !== "undefined" && response.status === statusCode
            ? color.log(`${testMessage} - Pass`, "success")
            : color.log(`${testMessage} - Fail - ${JSON.stringify(response)}`, "error");
            console.log(response)
            expect(response.status).to.eql(statusCode)
            return response.body;
        })
    }
}