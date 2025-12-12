import { inputsPage } from '../pageObjects/InputsPage';

export type IsoDate =
  `${number}${number}${number}${number}-${number}${number}-${number}${number}`;

export interface InputsData {
  number: number;
  text: string;
  password: string;
  date: IsoDate; // 'YYYY-MM-DD'
}

export const defaultInputsData: InputsData = {
  number: 123,
  text: 'Hello world',
  password: 'Secret123!',
  date: '2025-12-24',
};

export const inputsActions = {
  openPage(): void {
    inputsPage.visit();
  },

  fillAllInputs(data: InputsData): void {
    inputsPage.typeNumber(data.number);
    inputsPage.typeText(data.text);
    inputsPage.typePassword(data.password);
    inputsPage.typeDate(data.date);
  },

  displayInputs(data: InputsData): void {
    this.fillAllInputs(data);
    inputsPage.clickDisplay();
  },

  displayDefaultInputs(): void {
    this.displayInputs(defaultInputsData);
  },

  clearAll(): void {
    inputsPage.clickClear();
  },
};