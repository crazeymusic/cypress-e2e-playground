// cypress/support/commands.ts
/* eslint-disable @typescript-eslint/ban-ts-comment */
import 'cypress-wait-until';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getBySelector = (selector: string, ...args: any[]) => {
  return cy.get(`[data-cy="${selector}"]`, ...args);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getBySelectorLike = (selector: string, ...args: any[]) => {
  return cy.get(`[data-cy*="${selector}"]`, ...args);
};

export const getBySelectorWithPath = (
  selector: string,
  path: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ...args: any[]
) => {
  return cy.get(`[data-cy*="${selector}"] ${path}`, ...args);
};

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      getBySelector: typeof getBySelector;

      /**
       * Shortcut for cy.get(`[data-cy*="${selector}"]`, ...args)
       */
      getBySelectorLike: typeof getBySelectorLike;

      /**
       * Shortcut for cy.get(`[data-cy*="${selector}"] ${path}`, ...args)
       */
      getBySelectorWithPath: typeof getBySelectorWithPath;
    }
  }
}

Cypress.Commands.add('getBySelector', getBySelector);
Cypress.Commands.add('getBySelectorLike', getBySelectorLike);
Cypress.Commands.add('getBySelectorWithPath', getBySelectorWithPath);

require('@4tw/cypress-drag-drop');
