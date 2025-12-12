// SignInFormPage: selectors + low-level UI actions for the sign-in form.
// No flows, no assertions – flows live in signInFormActions.

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
