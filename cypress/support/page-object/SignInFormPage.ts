// SignInFormPage = thin Page Object for the sign in form.
//
// Responsibility:
// - define scopeName + selector enum (ESignInFormSelector)
// - expose low level helpers for the UI: emailInput(), passwordInput(), submitButton(), submitLoginForm(), exist()
//
// No business logic or full flows here (like “login as X”) – those live in app actions (signInFormActions).

import PageObjectClass from "../utils/PageObjectClass";

export enum ESignInFormSelector {
  EMAIL = 'EmailInput',
  PASSWORD = 'PasswordInput',
  LOGIN = 'SubmitButton',
  SIGNUP = 'SignUpLink',
}

class SignInFormPage extends PageObjectClass {
  protected scopeName = 'login';

  exist() {
    this.shouldAllBeVisible([
      ESignInFormSelector.EMAIL,
      ESignInFormSelector.PASSWORD,
      ESignInFormSelector.SIGNUP,
      ESignInFormSelector.LOGIN,
    ]);
  }

  emailInput() {
    return this.getElement(ESignInFormSelector.EMAIL);
  }

  passwordInput() {
    return this.getElement(ESignInFormSelector.PASSWORD);
  }

  submitButton() {
    return this.getElement(ESignInFormSelector.LOGIN);
  }

  submitLoginForm() {
    this.submitButton().click();
  }
}

export const signInFormPage = new SignInFormPage();

export default SignInFormPage;
