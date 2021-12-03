import userApi from "../api/user"
// import color from "../support/cosoleColor"
import orgApi from "../api/organization"
import boardApi from "../api/board"

describe('happy', () => {
    let userToken
    let organizationId
    let boardId
    let boardCode
    before(() => {
        userApi.login({testMessage: "Login before tests"}).then((token) => {
        userToken =token
        })
    })
    after(() => {
        boardApi.get({token:userToken}).then((allBoards) => {
            allBoards.forEach((board) => {
                boardApi.delete({token:userToken, boardID:board.id})
            })
        })
        orgApi.get({token:userToken}).then((allOrg)=>{
            allOrg.forEach((organization)=>{
                 orgApi.delete({token:userToken, orgID:organization.id})
                     })
        })
    })
    it('create organization', () => {
        orgApi.post({
            token: userToken, 
            testMessage: "Survival"}).then((organizationObject) => {
                organizationId = organizationObject.id
                console.log(organizationId)
            })
     })
     it('organization update', () => {
        orgApi.update({
            token : userToken,
            newName : "Updated",
            orgID : organizationId
        })
     })
     it('create new board', () => {
        boardApi.post({
            token : userToken,
            organization_id : organizationId
        }).then((boardObject) => {
            console.log(boardObject)
            boardId = boardObject.id
            boardCode = boardObject.code
            console.log(boardId)
            console.log(boardCode)
        })
     })
     it('update board', () => {
         boardApi.update({
             boardID : boardId,
             token : userToken,
            //  organization_id : organizationId,
             newName : "Updated",
            //  description : "this is updated board",
             boardCode : boardCode
         })
     })
     it('get all boards', () => {
         boardApi.get({
             token : userToken
         }).then((boards) => {
             console.log(boards)
         })
     })
    // it('Delete organization', () => {
    //     orgApi.delete({
    //         token: userToken, 
    //         // testMessage: "Survival",
    //         orgID : organizationId
    //     });
    // })
    // it("get all organizations", () => {
    //     orgApi.get({token : userToken}).then((allOrganizations) => {
    //         console.log(allOrganizations)
    //     })
    // })
});