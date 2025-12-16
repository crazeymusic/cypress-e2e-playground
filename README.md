# Cypress E2E Playground

Minimal training repo for Cypress E2E tests in TypeScript against https://practice.expandtesting.com.

## Stack

- Cypress (E2E)
- TypeScript

## Architecture (PO / Actions / Spec)

- **Page Objects**
  - Thin objects per page/component
  - Hold selectors and low-level UI actions only
  - No assertions, no test data, no user flows

- **App Actions**
  - Describe user flows and test data per feature
  - Use Page Objects under the hood
  - Define data models (e.g. InputsData, IsoDate)
  - No selectors and no assertions

- **Specs**
  - Contain test cases and assertions
  - Use Page Objects + App Actions
  - May define small local assertion helpers
  - No selectors, no low-level UI, no flow logic

## Conventions

- `describe`: fragment of page title + `/<url>`  
  e.g. `Web inputs page for Automation Testing Practice /inputs`
- `<input>` elements: `should('have.value', ...)`
- Text outputs (e.g. `<strong>`): `should('have.text', ...)`
- Elements removed from DOM: `should('not.exist')`

## Running tests

Install dependencies and run Cypress:

npm install
npx cypress open
# or
npx cypress run
