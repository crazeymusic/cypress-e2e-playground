// TEMPLATE SPEC (not executed by Cypress in this repo):
// This file demonstrates how the Page Object + App Actions + Spec layers work together
// when the application provides dedicated test ids (e.g. data-cy / data-testid).
//
// In this repository, the real E2E specs live under: cypress/e2e/**/*.cy.ts

import { signInFormActions } from '../appActions/signInFormActions';
import { signInFormPage } from '../pageObjects/SignInFormPage';

describe('Sign in form (template example)', () => {
  const expectSignInFormVisible = () => {
    signInFormPage.exist();
  };

  it.skip('allows the user to log in with valid credentials', () => {
    signInFormActions.open();

    expectSignInFormVisible();
    signInFormActions.loginWith('user@example.com', 'SuperSecret123');

    cy.getBySelector('dashboard_WelcomeText').should('be.visible');
  });
});
