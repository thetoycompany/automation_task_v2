const lgnpage = () => {
  cy.visit('/')
  cy.request('/').its('status').should('eq', 200)
  
}

// credentials with a valid username and fake password
var valid_username = 'toyinm4rtins@gmail.com'
var fake_password = 'Testing'


describe('Throws error message to user when incorrect password entered', () => {
  it('Enters credentials and clicks continue, then an error message is shown', () => {
    lgnpage()
    cy.get("#logIn").should('be.enabled');
    // enter crendentials
    cy.get('#username-container').type(valid_username)
    cy.get('#password-container').type(fake_password)
    cy.get("#logIn").click()
    // wait for enable communication between back and front end
    cy.wait(500)
    // use qa id and see error messaging 
    cy.get('[data-qa-id="undefined-text"]').contains("We don't recognize that email and/or password")
  })
})

