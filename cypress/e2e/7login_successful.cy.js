const lgnpage = () => {
  cy.visit('/')
  cy.request('/').its('status').should('eq', 200)
  
}

describe('Enters account details and has a successful log in', () => {
  it('enters account details', () => {

    cy.fixture('login.json').then(function(login) {
      lgnpage()
      cy.get('#username-container').type(login.valid_username)
      cy.get('#password-container').type(login.valid_password)
    })
  })
  it('Log in is successful', () => {
    cy.fixture('login.json').then(function(login) {
      lgnpage()
      cy.get('#username-container').type(login.valid_username)
      cy.get('#password-container').type(login.valid_password)
      cy.get("#logIn").click()
    })
  })
})