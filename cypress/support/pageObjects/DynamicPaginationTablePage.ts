export enum EPaginationSelector {
  PAGE_SIZE_SELECT = 'select[name="example_length"]',
  TABLE_ROWS = '#example tbody tr',
  STUDENT_NAME_CELLS = '#example tbody tr td:nth-child(1)',
  SEARCH_INPUT = '#example_filter input[type="search"]',
  INFO_TEXT = '#example_info',
  PAGINATION_CONTAINER = '#example_paginate',
  PREVIOUS_BUTTON = '#example_previous',
  NEXT_BUTTON = '#example_next',
  PAGE_BUTTONS = '#example_paginate li.paginate_button.page-item:not(.previous):not(.next)',
  ACTIVE_PAGE_BUTTON = '#example_paginate li.paginate_button.page-item.active',
}

type PageSizeOption = '3' | '5' | '10' | 'All';

class DynamicPaginationTablePage {
  visit(): void {
    cy.visit('/dynamic-pagination-table');
  }

  get pageSizeSelect() {
    return cy.get(EPaginationSelector.PAGE_SIZE_SELECT);
  }

  get tableRows() {
    return cy.get(EPaginationSelector.TABLE_ROWS);
  }

  get studentNameCells() {
    return cy.get(EPaginationSelector.STUDENT_NAME_CELLS);
  }

  get searchInput() {
    return cy.get(EPaginationSelector.SEARCH_INPUT);
  }

  get infoText() {
    return cy.get(EPaginationSelector.INFO_TEXT);
  }

  get previousButton() {
    return cy.get(EPaginationSelector.PREVIOUS_BUTTON);
  }

  get nextButton() {
    return cy.get(EPaginationSelector.NEXT_BUTTON);
  }

  get pageButtons() {
    return cy.get(EPaginationSelector.PAGE_BUTTONS);
  }

  get activePageButton() {
    return cy.get(EPaginationSelector.ACTIVE_PAGE_BUTTON);
  }

  // LOW-LEVEL ACTIONS

  selectPageSize(option: PageSizeOption): void {
    this.pageSizeSelect.select(option);
  }

  typeSearch(query: string): void {
    this.searchInput.clear();
    if (query !== '') {
      this.searchInput.type(query);
    }
  }

  clearSearch(): void {
    this.searchInput.clear();
  }

  clickPageNumber(page: number): void {
    this.pageButtons.contains('a.page-link', String(page)).click();
  }

  clickNext(): void {
    this.nextButton.click();
  }

  clickPrevious(): void {
    this.previousButton.click();
  }
}

export const dynamicPaginationTablePage = new DynamicPaginationTablePage();
export type { PageSizeOption };