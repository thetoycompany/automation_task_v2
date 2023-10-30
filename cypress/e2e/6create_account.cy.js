const lgnpage = () => {
  cy.visit('/')
  cy.request('/').its('status').should('eq', 200)
  
}


var first_name = "Testing"
var last_name = "Martins"
var email = 'toyinm4rtins' + Math.random() + '@hudl.com'
var fake_password = 'Testing100!' + Math.random()


describe('User can Create new account', () => {
  it("Creates new account and redirects user to fan.hudl page", () => {
    lgnpage()

    cy.get("#nav-btn-logo-hudl")
    cy.contains("button", "Create Account").click()
    cy.get("#nav-btn-logo-hudl")
    cy.get(".page-title").contains("Create Account")
    cy.get(".login-form")
    cy.get(".name-container").get("#first-name-container")
    cy.get("#first-name-container").type(first_name)
    cy.get(".name-container").get("#last-name-container")
    cy.get("#last-name-container").type(last_name)
    cy.get("#email-signup-container").type(email)
    cy.get("#password-signup-container").type(fake_password)
    cy.get("#password-confirm-container").type(fake_password)
    cy.get("#btn-signup").click()
    cy.wait(500)
    cy.url().should('eq', 'https://fan.hudl.com/')
  })


})

