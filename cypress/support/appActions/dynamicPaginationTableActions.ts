import { dynamicPaginationTablePage, PageSizeOption } from '../pageObjects/DynamicPaginationTablePage';

export const DYNAMIC_PAGINATION_INFO_TEXT = {
  PAGE1_SIZE3: 'Showing 1 to 3 of 10 entries',
  PAGE2_SIZE3: 'Showing 4 to 6 of 10 entries',
  PAGE_LAST_SIZE3: 'Showing 10 to 10 of 10 entries',
  PAGE1_SIZE5: 'Showing 1 to 5 of 10 entries',
  FILTER_ALICE: 'Showing 1 to 1 of 1 entries (filtered from 10 total entries)',
} as const;

export const DYNAMIC_PAGINATION_STUDENTS = {
  FIRST_PAGE_FIRST_ROW: 'Alice Johnson',
  SECOND_PAGE_FIRST_ROW: 'Emma Brown',
} as const;

export const DYNAMIC_PAGINATION_SEARCH = {
  ALICE: 'Alice',
} as const;

export const dynamicPaginationTableActions = {
  openPage(): void {
    dynamicPaginationTablePage.visit();
  },

  setPageSize(option: PageSizeOption): void {
    dynamicPaginationTablePage.selectPageSize(option);
  },

  goToPage(page: number): void {
    dynamicPaginationTablePage.clickPageNumber(page);
  },

  goToNextPage(): void {
    dynamicPaginationTablePage.clickNext();
  },

  goToPreviousPage(): void {
    dynamicPaginationTablePage.clickPrevious();
  },

  searchFor(query: string): void {
    dynamicPaginationTablePage.typeSearch(query);
  },

  clearSearch(): void {
    dynamicPaginationTablePage.clearSearch();
  },
};
