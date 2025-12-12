class InputsPage {
  visit(): void {
    cy.visit('/inputs');
  }

  // INPUTS

  get numberInput() {
    return cy.get('#input-number');
  }

  get textInput() {
    return cy.get('#input-text');
  }

  get passwordInput() {
    return cy.get('#input-password');
  }

  get dateInput() {
    return cy.get('#input-date');
  }

  // OUTPUTS

  get numberOutput() {
    return cy.get('#output-number');
  }

  get textOutput() {
    return cy.get('#output-text');
  }

  get passwordOutput() {
    return cy.get('#output-password');
  }

  get dateOutput() {
    return cy.get('#output-date');
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
    this.textInput.clear().type(value);
  }

  typePassword(value: string): void {
    this.passwordInput.clear().type(value);
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