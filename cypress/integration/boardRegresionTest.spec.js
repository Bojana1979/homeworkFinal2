import userApi from "../api/user"
import orgApi from "../api/organization"
import boardApi from "../api/board"

describe('board regresion testing', () => {
    let userToken
    let organization_id
    let board_id
    before(() => {
        userApi.login({testMessage : "Login before tests"}).then((token) => {
            console.log(token)
            userToken = token
        })
    })
    it('create organization', () => {
        orgApi.post({token : userToken, testMessage : "Created"}).then((organizatinObject) => {
            organization_id = organizatinObject.id
        })
    })
    it('create board with valid name', () => {
        boardApi.post({token : userToken, organization_id : organization_id}).then((boardObject) => {
            board_id = boardObject.id
        })
    })
    it('create board without name', () => {
        boardApi.post({
            token : userToken, 
            boardName : "", 
            organization_id : organization_id, 
            statusCode : 400, 
            testMessage : "The name field is required."}).then((boardObject) => {
            board_id = boardObject.id
        })
    })
    it('create board with only blanco space', () => {
        boardApi.post({
            token : userToken, 
            boardName : "          ", 
            organization_id : organization_id, 
            statusCode : 400, 
            testMessage : "The name field is required."}).then((boardObject) => {
            board_id = boardObject.id
        })
    })
    it('create board with special characters', () => {
        boardApi.post({
            token : userToken, 
            boardName : "//?!!##--", 
            organization_id : organization_id,  
            }).then((boardObject) => {
            board_id = boardObject.id
        })
    })
})