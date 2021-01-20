/// <reference types="cypress" />
import locators from "../../cypress/fixtures/locators/hobosons.json"
class Base {
    checkTitle() {
        cy.title().should('include', 'Hobsons');
    }
    checkHomescreenHeader() {
        cy.get(locators.header).should('be.visible').and('have.text', locators.headerText);
        cy.xpath(locators.intersectCard).click();
        cy.scrollTo(0, 3800);
    }
    validateMap() {
        cy.get(locators.mapHeader).should('be.visible').and('have.text', locators.mapHeaderText);
        cy.get(locators.map).should('be.visible');
    }
    checkEachStateAndValidateTooltip() {
        /**
        * iterating over each state using loop(each)
        */
        cy.get(" div:nth-child(1) > div > svg > g > g > g").each(($el) => {

            /**
             * wrapped the jQuery elements to perform Cypress commands like trigger and click
             */

            cy.wrap($el).trigger('mouseover', { force: true }).click({ force: true });
            /**
             * Asserted the tooltip 
             */


            cy.xpath(locators.popover).should("contain.text", "% of Students")
        })

    }

}


export default Base;