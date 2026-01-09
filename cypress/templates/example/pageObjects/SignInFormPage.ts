import PageObjectClass from '../utils/PageObjectClass';

export enum ESignInFormSelector {
  EmailInput = 'EmailInput',
  PasswordInput = 'PasswordInput',
  SubmitButton = 'SubmitButton',
  SignUpLink = 'SignUpLink',
}

class SignInFormPage extends PageObjectClass {
  protected scopeName = 'login';

  exist(): void {
    // Minimal UI contract for "page exists" in this template
    this.shouldAllBeVisible([
      ESignInFormSelector.EmailInput,
      ESignInFormSelector.PasswordInput,
      ESignInFormSelector.SignUpLink,
      ESignInFormSelector.SubmitButton,
    ]);
  }

  emailInput(): Cypress.Chainable<JQuery<HTMLElement>> {
    return this.getElement(ESignInFormSelector.EmailInput);
  }

  passwordInput(): Cypress.Chainable<JQuery<HTMLElement>> {
    return this.getElement(ESignInFormSelector.PasswordInput);
  }

  submitButton(): Cypress.Chainable<JQuery<HTMLElement>> {
    return this.getElement(ESignInFormSelector.SubmitButton);
  }

  signUpLink(): Cypress.Chainable<JQuery<HTMLElement>> {
    return this.getElement(ESignInFormSelector.SignUpLink);
  }

  // LOW-LEVEL ACTIONS
  typeEmail(email: string): void {
    this.emailInput().clear().type(email);
  }

  typePassword(password: string): void {
    this.passwordInput().clear().type(password);
  }

  submit(): void {
    this.submitButton().click();
  }
}

export const signInFormPage = new SignInFormPage();
