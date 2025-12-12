import { inputsPage } from '../../support/pageObjects/InputsPage';
import {
  inputsActions,
  defaultInputsData,
} from '../../support/appActions/inputsActions';

describe('Web inputs page for Automation Testing Practice /inputs', () => {
  beforeEach(() => {
    inputsActions.openPage();
  });

  it('displays entered values in outputs', () => {
    inputsActions.displayDefaultInputs();

    inputsPage.numberOutput.should('have.text', String(defaultInputsData.number));
    inputsPage.textOutput.should('have.text', defaultInputsData.text);
    inputsPage.passwordOutput.should('have.text', defaultInputsData.password);
    inputsPage.dateOutput.should('have.text', defaultInputsData.date);
  });

  it('clears all input and output fields', () => {
    inputsActions.displayDefaultInputs();
    inputsActions.clearAll();

    inputsPage.numberInput.should('have.value', '');
    inputsPage.textInput.should('have.value', '');
    inputsPage.passwordInput.should('have.value', '');
    inputsPage.dateInput.should('have.value', '');

    inputsPage.numberOutput.should('not.exist');
    inputsPage.textOutput.should('not.exist');
    inputsPage.passwordOutput.should('not.exist');
    inputsPage.dateOutput.should('not.exist');
  });
});