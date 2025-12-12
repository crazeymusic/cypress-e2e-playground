// signInFormActions = app actions for the sign in form.
//
// Responsibility:
// - describe user behaviour / flows on top of the UI
// - small helpers + one higher–level flow: expectFormIsVisible(), fillEmail(), fillPassword(), submit(), loginWith()
//
// Uses the Page Object (signInFormPage) under the hood and composes low–level steps into business actions.
// No raw selectors here – they live in Page Objects. Tests should talk mostly to these actions.

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
