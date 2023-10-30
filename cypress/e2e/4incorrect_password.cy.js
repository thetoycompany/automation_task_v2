const lgnpage = () => {
  cy.visit('/')
  cy.request('/').its('status').should('eq', 200)
  
}


var valid_username = 'toyinm4rtins@gmail.com'
var fake_password = 'Testing'


describe('template spec', () => {
  it('passes', () => {
    lgnpage()
    cy.get("#logIn").should('be.enabled');
    cy.get('#username-container').type(valid_username)
    cy.get('#password-container').type(fake_password)
    cy.get("#logIn").click()
    cy.wait(500)
    cy.get('[data-qa-id="undefined-text"]').contains("We don't recognize that email and/or password")
  })
})

