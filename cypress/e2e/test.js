///<reference types="cypress"/>
describe('this is  a test for', () => {
    it.skip('check_box', () => {
        cy.visit("https://codenboxautomationlab.com/practice/")
        // to check all boxes
        cy.get('input[type="checkbox"]').check()
        //assetion
        cy.get('input[type="checkbox"]').should("be.checked")
        // to remove checked
        cy.get('input[type="checkbox"]').uncheck()
        //choose specfic  box base cy selector to check(option1 and option 2).note option is the name
        cy.get('input[type="checkbox"]').check(["option1","option3"])
        // to remove checked
        cy.get('input[type="checkbox"]').uncheck()
        //select the first box
        cy.get('input[type="checkbox"]').first().check()
        //select the last box
        cy.get('input[type="checkbox"]').last().check()
        // select specific box base on index of the box
        cy.get('input[type="checkbox"]').eq(1).check()
    });
    it.skip('Radio', () => {
        cy.visit("https://codenboxautomationlab.com/practice/")
        // to check the element base on index
        cy.get("#radio-btn-example").find('input[type="radio"]').eq(0).check()
        //check the first elemnt
        cy.get("#radio-btn-example").find('input[type="radio"]').first().check()
        //check the last element
        cy.get("#radio-btn-example").find('input[type="radio"]').last().check()
    });
    it.skip('static dropdown', () => {
        cy.visit("https://codenboxautomationlab.com/practice/")
        //to select the item depend on index
        cy.get('#dropdown-class-example').select("API")

        
    });
    it('Dynamic dropdown', () => {
        cy.visit("https://codenboxautomationlab.com/practice/")
        cy.get('#autocomplete').type('HU').then((element)=>{
            cy.get(".ui-menu-item").each((el,index,list)=>{
        
                if(el.text().includes("Hungary")){
                    cy.wrap(el).click()
                }

            })
        })
    });
    
});