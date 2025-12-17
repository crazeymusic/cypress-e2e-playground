import { dynamicPaginationTablePage } from '../support/pageObjects/DynamicPaginationTablePage';
import {
  dynamicPaginationTableActions,
  DYNAMIC_PAGINATION_INFO_TEXT,
  DYNAMIC_PAGINATION_STUDENTS,
  DYNAMIC_PAGINATION_SEARCH,
} from '../support/appActions/dynamicPaginationTableActions';

// Helpers

const expectInfoTextToBe = (text: string): void => {
  dynamicPaginationTablePage.infoText.should('have.text', text);
};

const expectRowsCountToBe = (count: number): void => {
  dynamicPaginationTablePage.tableRows.should('have.length', count);
};

const expectActivePageToBe = (page: number): void => {
  dynamicPaginationTablePage.activePageButton.find('a.page-link').should('have.text', String(page));
};

const expectPreviousDisabled = (): void => {
  dynamicPaginationTablePage.previousButton.should('have.class', 'disabled');
};

const expectPreviousEnabled = (): void => {
  dynamicPaginationTablePage.previousButton.should('not.have.class', 'disabled');
};

const expectNextDisabled = (): void => {
  dynamicPaginationTablePage.nextButton.should('have.class', 'disabled');
};

const expectNumericPageButtonsCountToBe = (count: number): void => {
  dynamicPaginationTablePage.pageButtons.should('have.length', count);
};

const expectSingleFilteredRowForAlice = (): void => {
  expectRowsCountToBe(1);
  dynamicPaginationTablePage.studentNameCells.eq(0).should('have.text', DYNAMIC_PAGINATION_STUDENTS.FIRST_PAGE_FIRST_ROW);
  expectInfoTextToBe(DYNAMIC_PAGINATION_INFO_TEXT.FILTER_ALICE);
  expectActivePageToBe(1);
  expectNumericPageButtonsCountToBe(1);
  expectPreviousDisabled();
  expectNextDisabled();
};

describe('Dynamic pagination Table page for Automation Testing Practice /dynamic-pagination-table', () => {
  beforeEach(() => {
    dynamicPaginationTableActions.openPage();
  });

  it('renders initial page with default page size and state', () => {
    dynamicPaginationTablePage.pageSizeSelect.should('have.value', '3');
    expectRowsCountToBe(3);
    expectInfoTextToBe(DYNAMIC_PAGINATION_INFO_TEXT.PAGE1_SIZE3);
    expectActivePageToBe(1);
    expectPreviousDisabled();
  });

  it('navigates between pages using Next and Previous buttons', () => {
    dynamicPaginationTableActions.goToNextPage();

    // Page 2
    expectActivePageToBe(2);
    expectRowsCountToBe(3);
    expectInfoTextToBe(DYNAMIC_PAGINATION_INFO_TEXT.PAGE2_SIZE3);
    expectPreviousEnabled();
    dynamicPaginationTablePage.studentNameCells.eq(0).should('have.text', DYNAMIC_PAGINATION_STUDENTS.SECOND_PAGE_FIRST_ROW);

    dynamicPaginationTableActions.goToPreviousPage();

    // Back to page 1
    expectActivePageToBe(1);
    expectRowsCountToBe(3);
    expectInfoTextToBe(DYNAMIC_PAGINATION_INFO_TEXT.PAGE1_SIZE3);
    dynamicPaginationTablePage.studentNameCells.eq(0).should('have.text', DYNAMIC_PAGINATION_STUDENTS.FIRST_PAGE_FIRST_ROW);
  });

  it('updates visible rows and total pages when page size changes', () => {
    dynamicPaginationTableActions.setPageSize('5');

    dynamicPaginationTablePage.pageSizeSelect.should('have.value', '5');
    expectRowsCountToBe(5);
    expectInfoTextToBe(DYNAMIC_PAGINATION_INFO_TEXT.PAGE1_SIZE5);
    expectActivePageToBe(1);
    expectNumericPageButtonsCountToBe(2); // 10 entries / 5 per page
  });

  it('filters rows by search and adjusts pagination', () => {
    dynamicPaginationTableActions.searchFor(DYNAMIC_PAGINATION_SEARCH.ALICE);

    expectRowsCountToBe(1);
    dynamicPaginationTablePage.studentNameCells.eq(0).should('have.text', DYNAMIC_PAGINATION_STUDENTS.FIRST_PAGE_FIRST_ROW);
    expectInfoTextToBe(DYNAMIC_PAGINATION_INFO_TEXT.FILTER_ALICE);
    expectNumericPageButtonsCountToBe(1);
    expectNextDisabled();
    expectPreviousDisabled();
  });

  it('resets pagination correctly when filter reduces rows below current page', () => {
    dynamicPaginationTableActions.openPage();
    dynamicPaginationTableActions.goToPage(4);

    expectActivePageToBe(4);
    expectRowsCountToBe(1);
    expectInfoTextToBe(DYNAMIC_PAGINATION_INFO_TEXT.PAGE_LAST_SIZE3);

    dynamicPaginationTableActions.searchFor(DYNAMIC_PAGINATION_SEARCH.ALICE);
    expectSingleFilteredRowForAlice();

    dynamicPaginationTableActions.clearSearch();
    expectActivePageToBe(1);
    expectRowsCountToBe(3);
    expectInfoTextToBe(DYNAMIC_PAGINATION_INFO_TEXT.PAGE1_SIZE3);
    expectNumericPageButtonsCountToBe(4);
  });
});
