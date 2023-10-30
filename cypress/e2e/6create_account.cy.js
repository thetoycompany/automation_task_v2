const lgnpage = () => {
  cy.visit('/')
  cy.request('/').its('status').should('eq', 200)
  
}

// create account details, using js random number to generate unique values each time the test is run ** sorry for creating lots of users **
var first_name = "Testing"
var last_name = "Martins"
var email = 'toyinm4rtins' + Math.random() + '@hudl.com'
var fake_password = 'Testing100!' + Math.random()

describe('User can Create new account', () => {
  it("Creates new account and redirects user to fan.hudl page", () => {
    lgnpage()
    cy.get("#nav-btn-logo-hudl")
// straight to create account
    cy.contains("button", "Create Account").click()
    cy.get("#nav-btn-logo-hudl")
    // create account page front end checks
    cy.get(".page-title").contains("Create Account")
    cy.get(".login-form")
    cy.get(".name-container").get("#first-name-container")
    // fill in information from variables defined earlier
    cy.get("#first-name-container").type(first_name)
    cy.get(".name-container").get("#last-name-container")
    cy.get("#last-name-container").type(last_name)
    cy.get("#email-signup-container").type(email)
    cy.get("#password-signup-container").type(fake_password)
    cy.get("#password-confirm-container").type(fake_password)
    // submit account creation
    cy.get("#btn-signup").click()
    // wait for page to load
    cy.wait(500)
    // check correct url has loaded 
    cy.url().should('eq', 'https://fan.hudl.com/')
  })


})

