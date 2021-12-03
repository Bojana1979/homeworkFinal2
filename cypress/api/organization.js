import faker from "faker"
import color from "../support/consoleColor"

module.exports = {
    get({token = ""}) {
        return cy.request({
            method : "GET",
            url : `https://cypress-api.vivifyscrum-stage.com/api/v2/organizations-data`,
            headers: {
                Authorization: "Bearer " + token,
            },
        }).then((response) => {
            expect(response.status).to.eq(200)
            return response.body
        })
    },
    post({
        orgName = faker.animal.crocodilia(),
        token = "",
        statusCode =200,
        testMessage = ""
    }) {
        return cy.request({
            failOnStatusCode: false,
            method: 'POST',
            url: `https://cypress-api.vivifyscrum-stage.com/api/v2/organizations`,
            body: {
                name: orgName
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
    
            expect(response.status).to.eql(statusCode)
            return response.body
        })
    },
    delete({
                orgID = "",
                token = "",
                statusCode =201,
                testMessage = "",
                password = "Ognjen2013"
            }) {
                cy.request({
                    failOnStatusCode: false,
                    method: 'POST',
                    url: `https://cypress-api.vivifyscrum-stage.com/api/v2/organizations/${orgID}`,
                    body: {
                        passwordOrEmail : password
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
            
                    expect(response.status).to.eql(statusCode)
                    return response.body
                })
            },
        update({
            orgID = "",
            newName = faker.animal.crocodilia(),
            token = "",
            statusCode = 200

        }) {
            return cy.request({
                method : "PUT",
                url : `https://cypress-api.vivifyscrum-stage.com/api/v2/organizations/${orgID}`,
                body :  {
                    name : newName
                },
                headers: {
                    Authorization: "Bearer " + token,
                },
            }).then((response) => {
                console.log(response)
                return response.body
            })
        }
        
        
        }









