//This class is used to Parse the axe-core accessibility violation report and customize it as per needs.
export class beautifulLogger {
   terminalLog(violations) {
    cy.task(
      'log',
      `\n${violations.length} accessibility violation${
        violations.length === 1 ? '' : 's'
      } ${violations.length === 1 ? 'was' : 'were'} detected\n`
    )
    cy.task('log',"\ncomplete set of rules against this test ran,can be found here: https://github.com/dequelabs/axe-core/blob/master/doc/rule-descriptions.md\n")

      const violationDetailed = violations.map(
        ({ id, impact, description, nodes }) => ({
          id,
          impact,
          description,
          nodes:nodes.map(node=>node.html)
        })
      )
      const violationCompressed = violations.map(
        ({ id, impact, description, nodes }) => ({
          id,
          impact,
          description,
          nodes:nodes.length
        })
      )
      const seriousFlag = violations.some(item => item.impact === 'serious');
      
      if(seriousFlag==true)
      {
        cy.task('log',"\nPrinting Detailed report as result includes Serious violations\n");
        cy.task('log',violationDetailed)
        cy.writeFile('cypress/reports/AccessibilityReport_'+Cypress.moment().format()+'.json', JSON.stringify(violations) + '\n')
      }
      else
      {
        cy.task('log',"\nPrinting Compressed report as result does not include any Serious violations\n");
        cy.task('table', violationCompressed)
        cy.writeFile('cypress/reports/AccessibilityReport_'+Cypress.moment().format()+'.json', JSON.stringify(violations) + '\n')
      }
        
    }
  }