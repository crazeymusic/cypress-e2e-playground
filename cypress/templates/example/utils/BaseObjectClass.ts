abstract class BaseObjectClass {
  /**
   * A unique prefix for this object selector scope (e.g. "login", "header").
   * Concrete classes must provide it, e.g.:
   *   protected scopeName = "login";
   */
  protected abstract scopeName: string;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  protected getElement(selector: string, ...args: any[]): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.getBySelector(`${this.scopeName}_${selector}`, ...args);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  protected getElementLike(selector: string, ...args: any[]): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.getBySelectorLike(`${this.scopeName}_${selector}`, ...args);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  protected getElementWithPath(selector: string, path: string, ...args: any[]): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.getBySelectorWithPath(`${this.scopeName}_${selector}`, path, ...args);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  protected checkVisibilityByText(text: string, ...args: any[]): void {
    cy.contains(text, ...args).should('be.visible');
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  protected shouldBeVisible(selector: string, ...args: any[]): void {
    this.getElement(selector, ...args).should('exist').should('be.visible');
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  protected shouldExist(selector: string, ...args: any[]): void {
    this.getElement(selector, ...args).should('exist');
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  protected shouldNotExist(selector: string, ...args: any[]): void {
    this.getElement(selector, ...args).should('not.exist');
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  protected shouldAllBeVisible(selectors: string[], ...args: any[]): void {
    selectors.forEach(selector => this.shouldBeVisible(selector, ...args));
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  protected shouldAllExist(selectors: string[], ...args: any[]): void {
    selectors.forEach(selector => this.shouldExist(selector, ...args));
  }

  /**
   * Contract: a concrete page/component must define what it means for this object to "exist".
   * In this template, it is typically expressed as a visibility check for a minimal UI set.
   */
  abstract exist(): void;
}

export default BaseObjectClass;
