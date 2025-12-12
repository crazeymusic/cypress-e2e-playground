// This spec uses app actions instead of raw selectors.
//
// Flow in tests should read like a story:
// - visit page (cy.visit(...))
// - call app actions: signInFormActions.expectFormIsVisible(), signInFormActions.loginWith(...)
// - assert outcome on the next screen / state
//
// Tests talk mainly to app actions (and maybe Page Objects for rare, custom asserts),
// not directly to [data-cy="..."] selectors.


import { signInFormActions } from '../support/appActions/signInFormActions';

describe('Sign in form', () => {
  it('pozwala się zalogować poprawnymi danymi', () => {
    cy.visit('/login');

    signInFormActions.expectFormIsVisible();
    signInFormActions.loginWith('user@example.com', 'SuperSecret123');

    cy.getBySelector('dashboard_WelcomeText').should('be.visible');
  });
});
