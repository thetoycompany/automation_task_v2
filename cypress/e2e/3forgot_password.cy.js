const lgnpage = () => {
    cy.visit('/')
    cy.request('/').its('status').should('eq', 200)
  }

  describe('User has forgotten their password', () => {
    it('access log in page and see forgot password cta', () => {
      lgnpage()
      cy.get("#forgot-password")
    })
 
    it('Can click back to log in and I am taken back to the log in page', () => {
        lgnpage()
        cy.get("#forgot-password").click()
        cy.contains("Forgot Password")
        cy.get(".btn-back-login").contains("Back to Log In").click()
        cy.get("#login-box").get(".page-title").contains('Log In')
      })

    it('click forgot password cta and redirected to new page', () => {
        lgnpage()
        cy.get("#forgot-password").click()
        cy.contains("Forgot Password")
        cy.get("#nav-btn-logo-hudl")
        cy.contains("button", "Log In")
        cy.get("#email-reset-help").contains("We need to verify it's you. You'll receive an email with a verification code to reset your password.")
        cy.contains("Email")
        cy.get('#email-reset').type("email@hudl.com")
        cy.get(".btn-back-login")
        cy.get("#btn-reset").contains("Continue").click()
        cy.wait(500)
        cy.contains("Check Your Email")
      })
  

  })