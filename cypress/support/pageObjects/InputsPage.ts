// InputsPage: thin Page Object for external /inputs page.
// We don't control the HTML, so we map stable CSS selectors into an enum and use simple Cypress commands.
// Only low-level UI actions here – flows and test data live in inputsActions.

export enum EInputsSelector {
  NUMBER_INPUT = '#input-number',
  TEXT_INPUT = '#input-text',
  PASSWORD_INPUT = '#input-password',
  DATE_INPUT = '#input-date',
  NUMBER_OUTPUT = '#output-number',
  TEXT_OUTPUT = '#output-text',
  PASSWORD_OUTPUT = '#output-password',
  DATE_OUTPUT = '#output-date',
}

class InputsPage {
  visit(): void {
    cy.visit('/inputs');
  }

  // INPUTS

  get numberInput() {
    return cy.get(EInputsSelector.NUMBER_INPUT);
  }

  get textInput() {
    return cy.get(EInputsSelector.TEXT_INPUT);
  }

  get passwordInput() {
    return cy.get(EInputsSelector.PASSWORD_INPUT);
  }

  get dateInput() {
    return cy.get(EInputsSelector.DATE_INPUT);
  }

  // OUTPUTS

  get numberOutput() {
    return cy.get(EInputsSelector.NUMBER_OUTPUT);
  }

  get textOutput() {
    return cy.get(EInputsSelector.TEXT_OUTPUT);
  }

  get passwordOutput() {
    return cy.get(EInputsSelector.PASSWORD_OUTPUT);
  }

  get dateOutput() {
    return cy.get(EInputsSelector.DATE_OUTPUT);
  }

  // BUTTONS

  get displayButton() {
    return cy.contains('button', 'Display Inputs');
  }

  get clearButton() {
    return cy.contains('button', 'Clear Inputs');
  }

  // LOW-LEVEL ACTIONS

  typeNumber(value: number | string): void {
    this.numberInput.clear().type(String(value));
  }

  typeText(value: string): void {
    this.textInput.clear();
    if (value !== '') {
      this.textInput.type(value);
    }
  }

  typePassword(value: string): void {
    this.passwordInput.clear();
    if (value !== '') {
      this.passwordInput.type(value);
    }
  }

  typeDate(value: string): void {
    this.dateInput.clear().type(value);
  }

  clickDisplay(): void {
    this.displayButton.click();
  }

  clickClear(): void {
    this.clearButton.click();
  }
}

export const inputsPage = new InputsPage();