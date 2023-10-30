
// function to retrieve log in page and check status
const lgnpage = () => {
    cy.visit('/')
    cy.request('/').its('status').should('eq', 200)
  }

  // forgot password element available
  describe('User has forgotten their password', () => {
    it('access log in page and see forgot password cta', () => {
      lgnpage()
      cy.get("#forgot-password")
    })
 // forgot password clicked and able to take user back to log in page
    it('Can click back to log in and I am taken back to the log in page', () => {
        lgnpage()
        cy.get("#forgot-password").click()
        // check page includes forgot password title
        cy.contains("Forgot Password")
        // select back to log in
        cy.get(".btn-back-login").contains("Back to Log In").click()
        // check back to log in has happened by checking title element
        cy.get("#login-box").get(".page-title").contains('Log In')
      })

    it('click forgot password cta and redirected to new page', () => {
        lgnpage()
        // full forgotten password flow - however would be good in the future to be able to do the email aspect of this, check email is triggered in backend etc
        cy.get("#forgot-password").click()
        cy.contains("Forgot Password")
        cy.get("#nav-btn-logo-hudl")
        cy.contains("button", "Log In")
        cy.get("#email-reset-help").contains("We need to verify it's you. You'll receive an email with a verification code to reset your password.")
        cy.contains("Email")
        cy.get('#email-reset').type("email@hudl.com")
        cy.get(".btn-back-login")
        cy.get("#btn-reset").contains("Continue").click()
        // wait to enable page to load before test is run
        cy.wait(500)
        cy.contains("Check Your Email")
      })
  

  })