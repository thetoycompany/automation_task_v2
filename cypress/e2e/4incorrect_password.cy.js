const lgnpage = () => {
  cy.visit('/')
  cy.request('/').its('status').should('eq', 200)
}


var valid_username = 'toyinm4rtins@gmail.com'
var fake_password = 'Testing'


describe('template spec', () => {
  it('passes', () => {
    lgnpage

  })
})

