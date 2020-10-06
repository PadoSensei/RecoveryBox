describe('Login test', () => {
  it('stuff works', () => {

    cy.visit('http://localhost:19006/')
    cy.get('input')
      .eq(0)
      .type('user')
    cy.get('input')
      .eq(1)
      .type(`123`)
    cy.get('div')
      .contains('LOGIN')
      .click()
    cy.url().should('include', '/Home')
    // cy.contains('type').click()

    // cy.url()
    //   .should('include', '/commands/actions')
    // cy.get('.action-email')
    //   .type('fake@email.com')
    //   .should('have.value', 'fake@email.com')
  })
})