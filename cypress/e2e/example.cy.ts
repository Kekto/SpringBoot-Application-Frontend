// https://on.cypress.io/api

describe('My First Test', () => {
  it('visits the app root url', () => {
    cy.visit('/home')
    cy.contains('div', 'Strona główna')
  })
})
