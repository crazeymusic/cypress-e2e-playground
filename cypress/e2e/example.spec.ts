import { signInFormActions } from '../support/app-actions/signInFormActions';

describe('Sign in form', () => {
  it('pozwala się zalogować poprawnymi danymi', () => {
    cy.visit('/login');

    signInFormActions.expectFormIsVisible();
    signInFormActions.loginWith('user@example.com', 'SuperSecret123');

    cy.getBySelector('dashboard_WelcomeText').should('be.visible');
  });
});
