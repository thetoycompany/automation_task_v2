// same function 
const lgnpage = () => {
  cy.visit('/')
  cy.request('/').its('status').should('eq', 200)
}

// using my account email
var valid_username = 'toyinm4rtins@gmail.com'
// fake password
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
    // check when no info added can you click log in
    cy.get('#logIn').click()
    // fields show required below inputs - using qa id's here which i would prefer to do across all front end elements as ids and classes can change
    cy.get("#username-container").get('[data-qa-id="undefined-help-text"]').contains("Required")
    cy.get("#password-container").get('[data-qa-id="undefined-help-text"]').contains("Required")
   // error messaging check
    cy.get('p').contains('Please fill in all of the required fields')
    // log in button disabled ones information not asserted
    cy.get("#logIn").should('have.attr', 'disabled');

  })

  it('Shows error message when entering only valid user name in credentials', () => {
    lgnpage()
    // same checks but for when a user name is entered
    cy.get('#username-container').type(valid_username)
    cy.get('#logIn').click()
    cy.get("#password-container").get('[data-qa-id="undefined-help-text"]').contains("Required")
    cy.get('p').contains('Please fill in all of the required fields')
    cy.get("#logIn").should('have.attr', 'disabled');
  })

  it('Shows error message when only entering valid password', () => {
    lgnpage()
    // when only a password is entered - pw not real for security reasons
    cy.get('#password-container').type(fake_password)
    cy.get('#logIn').click()
    cy.get("#username-container").get('[data-qa-id="undefined-help-text"]').contains("Required")
    cy.get('p').contains('Please fill in all of the required fields')
    cy.get("#logIn").should('have.attr', 'disabled');
  })
})