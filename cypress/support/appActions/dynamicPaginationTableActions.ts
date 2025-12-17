import { dynamicPaginationTablePage, PageSizeOption } from '../pageObjects/DynamicPaginationTablePage';

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
