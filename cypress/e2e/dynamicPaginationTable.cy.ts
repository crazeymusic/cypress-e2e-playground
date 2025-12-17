import { dynamicPaginationTablePage } from '../support/pageObjects/DynamicPaginationTablePage';
import { dynamicPaginationTableActions } from '../support/appActions/dynamicPaginationTableActions';

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
  dynamicPaginationTablePage.studentNameCells.eq(0).should('have.text', 'Alice Johnson');
  expectInfoTextToBe('Showing 1 to 1 of 1 entries (filtered from 10 total entries)');
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
    expectInfoTextToBe('Showing 1 to 3 of 10 entries');
    expectActivePageToBe(1);
    expectPreviousDisabled();
  });

  it('navigates between pages using Next and Previous buttons', () => {
    dynamicPaginationTableActions.goToNextPage();

    // Page 2
    expectActivePageToBe(2);
    expectRowsCountToBe(3);
    expectInfoTextToBe('Showing 4 to 6 of 10 entries');
    expectPreviousEnabled();
    dynamicPaginationTablePage.studentNameCells.eq(0).should('have.text', 'Emma Brown');

    dynamicPaginationTableActions.goToPreviousPage();

    // Back to page 1
    expectActivePageToBe(1);
    expectRowsCountToBe(3);
    expectInfoTextToBe('Showing 1 to 3 of 10 entries');
    dynamicPaginationTablePage.studentNameCells.eq(0).should('have.text', 'Alice Johnson');
  });

  it('updates visible rows and total pages when page size changes', () => {
    dynamicPaginationTableActions.setPageSize('5');

    dynamicPaginationTablePage.pageSizeSelect.should('have.value', '5');
    expectRowsCountToBe(5);
    expectInfoTextToBe('Showing 1 to 5 of 10 entries');
    expectActivePageToBe(1);
    expectNumericPageButtonsCountToBe(2); // 10 entries / 5 per page
  });

  it('filters rows by search and adjusts pagination', () => {
    dynamicPaginationTableActions.searchFor('Alice');

    expectRowsCountToBe(1);
    dynamicPaginationTablePage.studentNameCells.eq(0).should('have.text', 'Alice Johnson');
    expectInfoTextToBe('Showing 1 to 1 of 1 entries (filtered from 10 total entries)');
    expectNumericPageButtonsCountToBe(1);
    expectNextDisabled();
    expectPreviousDisabled();
  });

  it('resets pagination correctly when filter reduces rows below current page', () => {
  dynamicPaginationTableActions.openPage();
  dynamicPaginationTableActions.goToPage(4);

  expectActivePageToBe(4);
  expectRowsCountToBe(1);
  expectInfoTextToBe('Showing 10 to 10 of 10 entries');

  dynamicPaginationTableActions.searchFor('Alice');
  expectSingleFilteredRowForAlice();

  dynamicPaginationTableActions.clearSearch();
  expectActivePageToBe(1);
  expectRowsCountToBe(3);
  expectInfoTextToBe('Showing 1 to 3 of 10 entries');
  expectNumericPageButtonsCountToBe(4);
});

});