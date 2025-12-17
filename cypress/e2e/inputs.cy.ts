import { inputsPage } from '../support/pageObjects/InputsPage';
import { inputsActions, defaultInputsData, numberAndDateOnlyInputsData, InputsData } from '../support/appActions/inputsActions';

// Helpers

const expectEmptyInputs = (): void => {
  inputsPage.numberInput.should('have.value', '');
  inputsPage.textInput.should('have.value', '');
  inputsPage.passwordInput.should('have.value', '');
  inputsPage.dateInput.should('have.value', '');
};

const expectInputsToMatchData = (data: InputsData): void => {
  inputsPage.numberInput.should('have.value', String(data.number));
  inputsPage.textInput.should('have.value', data.text);
  inputsPage.passwordInput.should('have.value', data.password);
  inputsPage.dateInput.should('have.value', data.date);
};

const expectNoOutputsRendered = (): void => {
  inputsPage.numberOutput.should('not.exist');
  inputsPage.textOutput.should('not.exist');
  inputsPage.passwordOutput.should('not.exist');
  inputsPage.dateOutput.should('not.exist');
};

const expectOutputsToMatchData = (data: InputsData): void => {
  inputsPage.numberOutput.should('have.text', String(data.number));
  inputsPage.textOutput.should('have.text', data.text);
  inputsPage.passwordOutput.should('have.text', data.password);
  inputsPage.dateOutput.should('have.text', data.date);
};

describe('Web inputs page for Automation Testing Practice /inputs', () => {
  beforeEach(() => {
    inputsActions.openPage();
  });

  it('renders empty inputs and no outputs on initial load', () => {
    expectEmptyInputs();
    expectNoOutputsRendered();
  });

  it('renders outputs matching entered values', () => {
    inputsActions.displayDefaultInputs();

    expectInputsToMatchData(defaultInputsData);
    expectOutputsToMatchData(defaultInputsData);
  });

  it('renders outputs only for filled inputs', () => {
    inputsActions.displayNumberAndDateOnlyInputs();

    expectInputsToMatchData(numberAndDateOnlyInputsData);
    expectOutputsToMatchData(numberAndDateOnlyInputsData);
  });

  it('clears inputs and removes outputs on clear action', () => {
    inputsActions.displayDefaultInputs();
    inputsActions.clearAll();

    expectEmptyInputs();
    expectNoOutputsRendered();
  });
});
