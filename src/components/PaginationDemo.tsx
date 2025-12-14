import { useState } from "react";
import usePagination from "../custom-hooks/usePagination";
import type { PaginationDemoProps } from "../types";

export const PaginationDemo: React.FC<PaginationDemoProps> = ({
  totalItems = 100,
  itemsPerPage: defaultItemsPerPage = 10,
  initialPage = 1,
}) => {
  // Keep track of itemsPerPage locally so the user can change it
  const [itemsPerPage, setItemsPerPage] = useState(defaultItemsPerPage);

  // Call the hook
  const {
    currentPage,
    totalPages,
    startIndex,
    endIndex,
    itemsOnCurrentPage,
    nextPage,
    prevPage,
    setPage,
    canNextPage,
    canPrevPage,
  } = usePagination(totalItems, itemsPerPage, initialPage);

  const pageSizeOptions = [5, 10, 20, 50];

  return (
    <div className="flex flex-col px-4 py-4 mx-auto bg-black p-4 border rounded max-w-2xl mt-4">
      <p className="text-2xl text-white text-center">Pagination Demo</p>

      <div className="flex flex-row justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="text-white">Items per page: {itemsPerPage}</span>
          <select
            className="p-1 rounded"
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(Number(e.target.value))}
          >
            {pageSizeOptions.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
        <p className="text-white">Total Items: {totalItems}</p>
      </div>
      <div className="flex flex-col mb-5">
        {Array.from({ length: itemsOnCurrentPage }).map((_, index) => (
          <p key={startIndex + index} className="text-white">
            {startIndex + index + 1}. Item {startIndex + index + 1}
          </p>
        ))}
      </div>

      <div className="flex flex-row justify-between mb-5">
        <button
          className="text-white"
          onClick={prevPage}
          disabled={!canPrevPage}
        >
          Previous
        </button>
        <div className="flex items-center gap-2">
          <button
            className="px-2 py-1 bg-gray-200 rounded"
            onClick={() => setPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            -
          </button>

          <span className="text-white px-2">{currentPage}</span>

          <button
            className="px-2 py-1 bg-gray-200 rounded"
            onClick={() => setPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            +
          </button>
        </div>

        <button
          className="text-white"
          onClick={nextPage}
          disabled={!canNextPage}
        >
          Next
        </button>
      </div>
      <div className="flex flex-row justify-center">
        <p className="text-white mb-2">
          Showing Items {startIndex + 1} - {endIndex} (Total on this page:{" "}
          {itemsOnCurrentPage})
        </p>
      </div>
      <div className="flex flex-row justify-center flex-wrap gap-2">
        {Array.from({ length: totalPages }, (_, i) => {
          const pageNum = i + 1; // pages start at 1
          return (
            <button
              key={pageNum}
              className={`px-3 py-1 border-2 ${
                currentPage === pageNum ? "bg-blue-500" : "bg-white"
              }`}
              onClick={() => setPage(pageNum)}
            >
              {pageNum}
            </button>
          );
        })}
      </div>
    </div>
  );
};
