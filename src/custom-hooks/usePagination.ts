import { useState } from "react";

function usePagination(
  totalItems: number,
  itemsPerPage: number,
  initialPage: number = 1
) {
  // 1. State (the only thing that actually changes)
  const [currentPage, setCurrentPage] = useState(initialPage);

  // 2. Derived Values (no useState)
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const itemsOnCurrentPage = endIndex - startIndex;
  const canPrevPage = currentPage > 1;
  const canNextPage = currentPage < totalPages;

  // Event handlers that update state
  const setPage = (pageNumber: number) => {
    const clampedPage = Math.max(1, Math.min(pageNumber, totalPages));
    setCurrentPage(clampedPage);
  };
  const nextPage = () => {
    if(canNextPage) {
        setCurrentPage((p) => p + 1);
    }
  };

  const prevPage = () => {
   if(canPrevPage) {
    setCurrentPage((p) => p - 1);
   }
  };

  return {
    currentPage,
    totalPages,
    startIndex,
    endIndex,
    itemsOnCurrentPage,
    setPage,
    nextPage,
    prevPage,
    canNextPage,
    canPrevPage,
  };
}

export default usePagination;

// totalItems: The total number of items to be paginated.
// itemsPerPage: The number of items to display per page (default to 10).
// initialPage: The page to start on (default to 1).

// currentPage: The current active page number. (CHANGES DURING PAGINATION)
// totalPages: The total number of pages calculated based on totalItems and itemsPerPage. (DERIVED VALUE == not state because it never changes and is calculated from inputs)
// totalPages = totalItems / itemsPerPage
// startIndex: The starting index of items for the current page (0-based).(NO STATE CHANGE)
// endIndex: The ending index of items for the current page (0-based). (NO STATE CHANGE)
// itemsOnCurrentPage: The actual number of items on the current page (useful for the last page). (CHANGES DURING PAGINATION BASED ON USER INPUT)
// setPage(pageNumber): A function to jump to a specific page number. (CHANGES DURING PAGINATION)
// nextPage(): A function to go to the next page. (EVENT HANDLER: HOW STATE WILL CHANGE)
// prevPage(): A function to go to the previous page. (EVENT HANDLER: HOW STATE WILL CHANGE)
// canNextPage: Boolean indicating if there is a next page. (CHANGES DURING PAGINATION: TRUE OR FALSE)
// canPrevPage: Boolean indicating if there is a previous page. (CHANGES DURING PAGINATION: TRUE OR FALSE)