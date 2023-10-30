const lgnpage = () => {
  cy.visit('/')
  cy.request('/').its('status').should('eq', 200)
}

describe('Check front end elements are available', () => {
  it("shows hudl logo and create acount in navbar", () => {
    lgnpage()
    cy.get("#nav-btn-logo-hudl")
    cy.contains("button", "Create Account")
  })
  it('shows the front end elements required for a user to enter their log in credentials and select the log in button', () => {
    lgnpage()
    //find log in modal
    cy.get("#login-box")
    cy.get("#login-box").get(".page-title").contains('Log In')
    //find username input
    cy.get("#username-container")
    //find password input
    cy.get("#password-container")
    //continue button enabled at log in
    cy.get("#forgot-password")
    cy.get("#logIn").should('be.enabled');
    cy.get("p").contains('By continuing, you agree to our ')
  })

    it("Contains social login buttons", () => {
      lgnpage()
      cy.contains("Or continue with")
      cy.get("#btn-facebook-login")
      cy.get("#btn-google-login")
      cy.get("#btn-apple-login")
    })
    
    it("Allows those who do not have an account to crete one", () => {
      lgnpage()
      cy.get('p').get('.no-account-text').contains("Don't have an account?")
      cy.get("#btn-show-signup").contains("Create Account")
    })

   

})