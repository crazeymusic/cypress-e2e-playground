import { signInFormPage } from '../page-object/SignInFormPage';

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
