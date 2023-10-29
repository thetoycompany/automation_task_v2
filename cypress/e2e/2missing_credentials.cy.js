const lgnpage = () => {
  cy.visit('/')
  cy.request('/').its('status').should('eq', 200)
  
}

var valid_username = 'toyinm4rtins@gmail.com'
var valid_password = 'Testing'

describe('Checking Log in button is enabled', () => {
  it('Log in button is enabled before user interaction', () => {
    lgnpage()
    //ensure log in button is enabled
    cy.get("#logIn").should('not.have.attr', 'disabled');
  })
})

describe('Check that a user cannot login, when there is missing information', () => {
  it('Shows error message when entering no log in credentials', () => {
    lgnpage()
    cy.get('#logIn').click()
    cy.get("#username-container").get('[data-qa-id="undefined-help-text"]').contains("Required")
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
    cy.get('#password-container').type(valid_password)
    cy.get('#logIn').click()
    cy.get("#username-container").get('[data-qa-id="undefined-help-text"]').contains("Required")
    cy.get('p').contains('Please fill in all of the required fields')
    cy.get("#logIn").should('have.attr', 'disabled');
  })
})