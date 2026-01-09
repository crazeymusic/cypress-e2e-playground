import { signInFormPage } from '../pageObjects/SignInFormPage';

export const signInFormActions = {
  open(): void {
    cy.visit('/login');
  },

  fillEmail(email: string): void {
    signInFormPage.typeEmail(email);
  },

  fillPassword(password: string): void {
    signInFormPage.typePassword(password);
  },

  submit(): void {
    signInFormPage.submit();
  },

  loginWith(email: string, password: string): void {
    this.fillEmail(email);
    this.fillPassword(password);
    this.submit();
  },
};
