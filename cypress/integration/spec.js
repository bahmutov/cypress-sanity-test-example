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
