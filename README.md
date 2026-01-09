# cypress-e2e-playground

Cypress E2E playground in TypeScript against https://practice.expandtesting.com.

This repository focuses on practicing clean, minimal UI test architecture with a clear split between Page Objects, user flows and specs.

## Recruiter notes

What this repo demonstrates:

- E2E test design: readable specs, small local assertion helpers, positive and edge cases
- Separation of concerns: Page Objects vs app actions vs specs (clean layering, no mixed responsibilities)
- Consistent naming and conventions for future features/pages

Selectors / testability note:

- The system under test is a public demo app and does not provide dedicated test ids (e.g. `data-cy`, `data-testid`). For that reason, selectors are based on stable attributes/structure and are encapsulated inside thin Page Objects.
- In commercial projects, I strongly advocate for a testability contract: dedicated test ids, selector stability guidelines, and PR checks to reduce flakiness and maintenance cost.
- Folder `cypress/templates/example` contains a reference/template showing the preferred Page Object + Actions + Spec approach when the team controls the UI and can introduce test ids.

## Tech stack

- Cypress (E2E, browser-based UI tests)
- TypeScript

## System under test

Public demo app: https://practice.expandtesting.com

## Architecture (PO / Actions / Spec)

- **Page Objects** (`cypress/support/pageObjects`)
  - Thin objects per page/component
  - Hold selectors and low-level UI actions only (e.g. `typeNumber`, `clickDisplay`)
  - No assertions, no test data, no user flows

- **App Actions** (`cypress/support/appActions`)
  - Describe user flows and test data per feature
  - Use Page Objects under the hood
  - Define data models (e.g. `InputsData`, `IsoDate`)
  - No selectors and no assertions

- **Specs** (`cypress/e2e/.../*.cy.ts`)
  - Contain test cases and assertions
  - Use Page Objects + appActions
  - May define small local assertion helpers
  - No selectors, no low-level UI, no flow logic

Conventions:

- `describe`: fragment of page title + `/<url>`  
  e.g. `Web inputs page for Automation Testing Practice /inputs`
- `<input>` elements: `should('have.value', ...)`
- Text outputs (e.g. `<strong>`): `should('have.text', ...)`
- Elements removed from DOM (e.g. after Clear): `should('not.exist')`

## Setup

Install dependencies:

```bash
npm install
```

## Run tests

Open Cypress runner:

```bash
npx cypress open
```

Run headless:

```bash
npx cypress run
```
