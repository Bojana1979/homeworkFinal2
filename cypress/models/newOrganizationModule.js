import sidebar from "./sideBarModule"
import data from "../fixtures/data.json"

var organization_id

module.exports ={
    get enterNameField() {
        return cy.get("input[name='name']")
    },
    get nextButton() {
        return cy.get("button[name='next_btn']")
    },
    get createButton() {
        return cy.get("[name='next_btn']")
    },
    // createOrg({organizationName = data.organization.name}) {
    //     cy.intercept('POST', "**/api/v2/organizations").as('createOrganization');
    //     sidebar.addNewButton.should('be.visible').click({force:true});
    //     sidebar.addNewOrganization.should('be.visible').click();
    //     this.enterNameField.should('be.visible').type(organizationName);
    //     this.nextButton.should('be.visible').click();
    //     this.createButton.should('be.visible').click();
    //     if(organizationName == data.organization.name) {
    //         cy.wait('@createOrganization').then((interception) => {
    //             console.log(interception)
    //             expect(interception.response.statusCode).to.eq(200)
    //             expect(interception.response.statusMessage).to.eq('OK')
    //             expect(interception.response.body.name).to.eq(data.organization.name)
    //             expect(interception.response.body.users.length).to.eq(1)
    //             expect(interception.response.body.users[0].id).to.eq(interception.response.body.owner_id)
    //             expect(interception.response.body.users[0].first_name).to.eq('Bojana')

    //         });
    //     };
    // },
    createOrg({organizationName = data.organization.name}) {
        if (organizationName == "") {
            sidebar.addNewButton.should('be.visible').click({force:true});
            sidebar.addNewOrganization.should('be.visible').click();
            this.enterNameField.should('be.visible').type(organizationName);
            this.nextButton.should('be.disabled');
        } else {
            cy.intercept('POST', "**/api/v2/organizations").as('createOrganization');
            sidebar.addNewButton.should('be.visible').click({force:true});
            sidebar.addNewOrganization.should('be.visible').click();
            this.enterNameField.should('be.visible').type(organizationName);
            this.nextButton.should('be.visible').click();
            this.createButton.should('be.visible').click();
            if(organizationName == data.organization.name) {
                cy.wait('@createOrganization').then((interception) => {
                    console.log(interception)
                    organization_id = interception.response.body.id
                    cy.log(organization_id)
                    expect(interception.response.statusCode).to.eq(200)
                    expect(interception.response.statusMessage).to.eq('OK')
                    expect(interception.response.body.name).to.eq(data.organization.name)
                    expect(interception.response.body.users.length).to.eq(1)
                    expect(interception.response.body.users[0].id).to.eq(interception.response.body.owner_id)
                    expect(interception.response.body.users[0].first_name).to.eq('Bojana')

            });
        };
        }
        
    }
}