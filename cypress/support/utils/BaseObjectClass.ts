abstract class BaseObjectClass {
  /**
   * Unique prefix for selectors of a given object (e.g. "login", "header").
   * In specific classes, e.g.:
   *   protected scopeName = 'login';
   */
  protected abstract scopeName: string;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  protected getElement(selector: string, ...args: any[]) {
    return cy.getBySelector(`${this.scopeName}_${selector}`, ...args);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  protected getElementLike(selector: string, ...args: any[]) {
    return cy.getBySelectorLike(`${this.scopeName}_${selector}`, ...args);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  protected getElementWithPath(selector: string, path: string, ...args: any[]) {
    return cy.getBySelectorWithPath(
      `${this.scopeName}_${selector}`,
      path,
      ...args
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  protected checkVisibility(text: string, ...args: any[]) {
    cy.contains(text, ...args).should('be.visible');
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  protected shouldBeVisible(selector: string, ...args: any[]) {
    this.getElement(selector, ...args)
      .should('exist')
      .should('be.visible');
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  protected shouldExist(selector: string, ...args: any[]) {
    this.getElement(selector, ...args).should('exist');
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  protected shouldNotExist(selector: string, ...args: any[]) {
    this.getElement(selector, ...args).should('not.exist');
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  protected shouldAllBeVisible(selectors: string[], ...args: any[]) {
    selectors.forEach(selector => {
      this.shouldBeVisible(selector, ...args);
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  protected shouldAllExist(selectors: string[], ...args: any[]) {
    selectors.forEach(selector => {
      this.shouldExist(selector, ...args);
    });
  }

  /**
   * Kontrakt: konkretna strona/komponent musi zdefiniować,
   * co znaczy "ten obiekt istnieje".
   */
  abstract exist(): void;
}

export default BaseObjectClass;
