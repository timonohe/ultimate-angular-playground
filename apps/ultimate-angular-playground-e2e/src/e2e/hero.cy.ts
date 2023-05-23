describe('Hero', () => {
  const heroNames = ['Dr. IQ', 'Magneta', 'Bombasto'];
  const masterName = 'Master';

  beforeEach(() => cy.visit('/component-interaction'));

  it('should pass properties to children property', async () => {
    cy.contains('Pass data from parent to child').click();

    heroNames.forEach(name => {
      cy.contains(`${name} says:`);
      cy.contains(`I, ${name}, am at your service, ${masterName}.`);
    });
  });
});
