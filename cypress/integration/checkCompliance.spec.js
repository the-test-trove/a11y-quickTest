/*This file is used to drive the accessibility compliance check with appropriate actions.
such as login-->test or login-->go to home page-->test*/ 

/// <reference types="cypress"/>

import {beautifulLogger}  from "../utils/beautifullLogger"              //importing class
//import {loginPage}  from "../page-objects/loginPage"                  

const logger= new beautifulLogger
//const login= new loginPage                       //placeholder for creating object of the class

describe("Running a quick accessibility compliance check", () => {

  beforeEach(()=>{
    cy.visit(Cypress.env('appURL'))
                                
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
    //one can add additional conditions/behavior based on Cypress.env('authTye') if application require Authentication.
    cy.url().should('eq',Cypress.env('appURL'))
    cy.injectAxe()                          //injecting cypress-Axe core method 
  })

  it('should comply with Accessibility standards',()=>{
                
    if (Cypress.env('rules')===null)
    {
      cy.checkA11y(null,null,logger.terminalLog,true);      //Running accessibility test
    }
    else
    {
      cy.checkA11y(null,{
        runOnly: [Cypress.env('rules')]
      },logger.terminalLog,true);
  
    }   
        
  });
});
