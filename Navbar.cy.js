/// <reference types="cypress" />

describe('Navbar Test',()=>{
    before(()=>{
        cy.visit('http://zero.webappsecurity.com/index.html')

    });

    it('should display online banking content',()=>{
        cy.get('#onlineBankingMenu').click()
        cy.url().should('include','online-banking.html')
        cy.get('h1').should('be.visible')
    });

    it('should display feedback content',()=>{
        cy.contains('Feedback').click()
        cy.url().should('include','feedback.html')
    });

    it('should display homepage content',()=>{
        cy.contains('Zero Bank').click()
        cy.url().should('include','index.html')
    });

    it('should display online statements',()=>{
        cy.contains('#online_statements_link').click()
        cy.url().should('include','login.html')
    });
});