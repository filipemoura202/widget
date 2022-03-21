const APP_URL = process.env.APP_URL || 'http://localhost:8080'

describe('Home', () => {
  it('Visits the main page and should render a standy by button', () => {
    cy.visit(APP_URL)
    cy.wait(200)
    cy.get('#standy-button')
  })
})
