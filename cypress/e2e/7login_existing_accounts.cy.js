describe('Has log in options for different social accounts', () => {
  it('Shows log in buttons for other social accounts', () => {
    cy.visit('https://hudl.com/login')
    cy.get("#btn-facebook-login")
    cy.get("#btn-google-login")
    cy.get("#btn-apple-login")
  })

  it('Takes user to facebook', () => {
    cy.visit('https://hudl.com/login')
    cy.get("#btn-facebook-login").click()
    
  })
})