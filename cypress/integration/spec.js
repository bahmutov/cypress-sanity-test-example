/// <reference types="cypress" />

it('catches page exceptions', () => {
  // will fail because the page throws an error
  cy.visit('/')
})

it('ignores all page errors', () => {
  // https://on.cypress.io/catalog-of-events#Uncaught-Exceptions
  cy.on('uncaught:exception', () => false)
  cy.visit('/')
})

it('ignores specific error', () => {
  cy.on('uncaught:exception', (e) => {
    // https://on.cypress.io/catalog-of-events#Uncaught-Exceptions
    return !e.message.includes('ScrollReveal is not defined')
  })
  cy.visit('/')
})

it('detects a single 404', () => {
  // we are not interested in app's errors
  cy.on('uncaught:exception', () => false)
  // https://on.cypress.io/intercept
  cy.intercept('**/scrollreveal.min.js').as('resource')
  cy.visit('/')
  cy.wait('@resource').its('response.statusCode').should('be.lt', 400)
})

it.only('detects any 404', () => {
  // we are not interested in app's errors
  cy.on('uncaught:exception', () => false)
  // https://on.cypress.io/intercept
  cy.intercept('*', (req) =>
    // assert the response
    req.continue((res) => expect(res.statusCode, req.url).to.be.lt(400)),
  )
  cy.visit('/')
})
