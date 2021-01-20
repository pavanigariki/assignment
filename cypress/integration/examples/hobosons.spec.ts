/// <reference types="cypress" />
import Base from "../../Pages/hobosonspage"
const Page = new Base();

describe('Coderbyte Assignment', () => {

    before(() => {
        cy.visit("http://hobsons.com/");
    });
    it('Cheking Title of the application', () => {
        Page.checkTitle();
    })
    it('clicking on each State of the US country and validate the Tooltip', () => {
        Page.checkHomescreenHeader();
        Page.validateMap();
        Page.checkEachStateAndValidateTooltip();
    })
});
