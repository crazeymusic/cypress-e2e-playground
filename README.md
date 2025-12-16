# cypress-e2e-playground

Cypress E2E playground in TypeScript against https://practice.expandtesting.com.

This repository focuses on practicing clean, minimal UI test architecture with a clear split between Page Objects, user flows and specs.

## Recruiter notes

What this repo demonstrates:

- E2E test design: readable specs, small assertion helpers, positive and edge cases
- Separation of concerns: Page Objects vs app actions vs specs
- Consistent naming and conventions for future features/pages

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
