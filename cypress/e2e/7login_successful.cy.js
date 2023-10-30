const lgnpage = () => {
  cy.visit('/')
  cy.request('/').its('status').should('eq', 200)
  
}

describe('Enters account details and has a successful log in', () => {
  it('enters account details', () => {
// using fixtures this time for more sensitive information, but would not keep information like this in a public repo which is publically accessible, more details in read.me
// fixture can be found in /cypress/fixtures/login.json
    cy.fixture('login.json').then(function(login) {
      lgnpage()
      // get data from fixture
      cy.get('#username-container').type(login.valid_username)
      cy.get('#password-container').type(login.valid_password)
    })
  })
  it('Log in is successful', () => {
    cy.fixture('login.json').then(function(login) {
      lgnpage()
// fixtures again
      cy.get('#username-container').type(login.valid_username)
      cy.get('#password-container').type(login.valid_password)
      cy.get("#logIn").click()
    })
  })
})