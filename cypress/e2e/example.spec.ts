// example.spec.ts: test cases + assertions for <sign in form - example>.
// Uses Page Objects + app actions. No selectors, no low-level UI, no flow logic defined here.
// Local assertion helpers allowed.

import { signInFormActions } from '../support/appActions/exampleActions';

describe('Sign in form', () => {
  it('pozwala się zalogować poprawnymi danymi', () => {
    cy.visit('/login');

    signInFormActions.expectFormIsVisible();
    signInFormActions.loginWith('user@example.com', 'SuperSecret123');

    cy.getBySelector('dashboard_WelcomeText').should('be.visible');
  });
});
