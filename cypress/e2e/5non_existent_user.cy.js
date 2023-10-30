const lgnpage = () => {
    cy.visit('/')
    cy.request('/').its('status').should('eq', 200)
    
  }
  

  // credentials using an email not yet in existence - cant check back end but working on that assumption
  var invalid_username = 'toyinm4rtins@hudl.org'
  var fake_password = 'Testing'
  
  
  describe('Throws error message to user when non-existent email account entered', () => {
    it('Enters credentials and clicks continue, then an error message is shown', () => {
      lgnpage()
      cy.get("#logIn").should('be.enabled');
      cy.get('#username-container').type(invalid_username)
      cy.get('#password-container').type(fake_password)
      cy.get("#logIn").click()
      cy.wait(500)
      // same error messaging raised for this problem to protect password security
      cy.get('[data-qa-id="undefined-text"]').contains("We don't recognize that email and/or password")
    })
  })
  
  