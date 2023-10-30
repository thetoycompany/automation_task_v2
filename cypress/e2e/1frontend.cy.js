// login page function so that visiting the url and checking the status is not written more than once, in future i would prefer this to be somewhere where i can access it globally for my project

const lgnpage = () => {
  cy.visit('/')
  cy.request('/').its('status').should('eq', 200)
}

// front end elements test
describe('Check front end elements are available', () => {
// describing what this part does
  it("shows hudl logo and create acount in navbar", () => {
    // calling page load function
    lgnpage()
    // checking nav bar for elements
    cy.get("#nav-btn-logo-hudl")
    cy.contains("button", "Create Account")
  })
  it('shows the front end elements required for a user to enter their log in credentials and select the log in button', () => {
    lgnpage()
    //find log in modal
    cy.get("#login-box")
    // check log in is present on poage as title
    cy.get("#login-box").get(".page-title").contains('Log In')
    //find username input
    cy.get("#username-container")
    //find password input
    cy.get("#password-container")
    //continue button enabled at log in
    cy.get("#forgot-password")
    // log in cta(continue) should be enabled - but could also recommend that it isnt enabled until all details are filled out
    cy.get("#logIn").should('be.enabled');
    // checking paragraohs are present, could add to visit links in future
    cy.get("p").contains('By continuing, you agree to our ')
  })

    it("Contains social login buttons", () => {
      lgnpage()
      // social login checks
      cy.contains("Or continue with")
      // facebook
      cy.get("#btn-facebook-login")
      // google
      cy.get("#btn-google-login")
      // apple
      cy.get("#btn-apple-login")
    })
    
    it("Allows those who do not have an account to crete one", () => {
      lgnpage()
      // dont have an account link present
      cy.get('p').get('.no-account-text').contains("Don't have an account?")
      // create account link available
      cy.get("#btn-show-signup").contains("Create Account")
    })

   

})