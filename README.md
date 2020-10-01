# A11y_QuickTest
Automated Accessibility Test for web-applications

## Description
This Project is MVP/Boilerplate for automated Accessibility testing.
One can use this for performaing quick accessibility test on any Page, or can further extend for their project specific needs by using placeholder classes/methods.
Note: Currently authentication is disabled and can be enabled by uncommenting the login placeholder class

## Getting Started

### Prerequisites

* [NodeJs](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions-enterprise-linux-fedora-and-snap-packages)

## Installing

`npm install`

## Running the tests


* **CLI Mode:** It gives flexibility to run from anywhere/any cli.

`npm run A11y-cli <appURL=https://test.com,authType=internall,username=test,password=password,rules=wcag2a>`


* **GUI Mode:** It gives very interective UI with reach features such as select browsers & locate the element where violation/error ocuured

`npm run A11y-gui <appURL=https://test.com,authType=internall,username=test,password=password>`

`click 'Run all specs'`


## Arguments

* appURL    : This will be the complete applicaiton url with http/https.
* authType  : If you application requires authentication, use this argument to specify authType by default value will be None.
* username  : If authentication is required provide the username here.
* password  : If authentication is required provide the password here.
* rules     : Accessibility standard rule set. valid values are - wcag2a,wcag2aa,section508. Default value will be all

### TestResult
Detaild Accessibility violations Report will be generated inside **/cypress/reports** folder in simple json format.
Which can be further use to share/integrate in ci-cd.


## Built With

* [NodeJs](https://nodejs.org/) - Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
* [Cypress](https://www.cypress.io/) - E2E Testing Framework
* [axe-core](https://github.com/dequelabs/axe-core#philosophy) - Axe is an accessibility testing engine for websites and other HTML-based user interfaces