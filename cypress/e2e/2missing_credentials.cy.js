//import valid_username from '../fixtures/login.json'
//import valid_password from '../fixtures/login.json'

const lgnpage = () => {
  cy.visit('/')
  cy.request('/').its('status').should('eq', 200)
}

var valid_username = 'toyinm4rtins@gmail.com'
var fake_password = 'Testing'

describe('Checking Log in button is enabled', () => {
  it('Log in button is enabled before user interaction', () => {
    lgnpage()
    //ensure log in button is enabled
    cy.get("#logIn").should('be.enabled');
  })
})

describe('Check that a user cannot login, when there is missing information', () => {
  it('Shows error message when entering no log in credentials', () => {
    lgnpage()
    cy.get('#logIn').click()
    cy.get("#username-container")cy.get("#logIn")..contains("Required")
    cy.get("#password-container").get('[data-qa-id="undefined-help-text"]').contains("Required")
    cy.get('p').contains('Please fill in all of the required fields')
    cy.get("#logIn").should('have.attr', 'disabled');

  })

  it('Shows error message when entering only valid user name in credentials', () => {
    lgnpage()
    cy.get('#username-container').type(valid_username)
    cy.get('#logIn').click()
    cy.get("#password-container").get('[data-qa-id="undefined-help-text"]').contains("Required")
    cy.get('p').contains('Please fill in all of the required fields')
    cy.get("#logIn").should('have.attr', 'disabled');
  })

  it('Shows error message when only entering valid password', () => {
    lgnpage()
    cy.get('#password-container').type(fake_password)
    cy.get('#logIn').click()
    cy.get("#username-container").get('[data-qa-id="undefined-help-text"]').contains("Required")
    cy.get('p').contains('Please fill in all of the required fields')
    cy.get("#logIn").should('have.attr', 'disabled');
  })
})