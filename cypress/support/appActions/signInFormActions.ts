// signInFormActions: user flows + test data for the sign-in form (uses SignInFormPage).
// No selectors, no assertions – only composed actions.

import { signInFormPage } from '../pageObjects/SignInFormPage';

export const signInFormActions = {
  expectFormIsVisible() {
    signInFormPage.exist();
  },

  fillEmail(email: string) {
    signInFormPage.emailInput().clear().type(email);
  },

  fillPassword(password: string) {
    signInFormPage.passwordInput().clear().type(password);
  },

  submit() {
    signInFormPage.submitLoginForm();
  },

  loginWith(email: string, password: string) {
    this.fillEmail(email);
    this.fillPassword(password);
    this.submit();
  },
};
