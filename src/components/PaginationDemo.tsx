import usePagination from "../custom-hooks/usePagination";
import type { PaginationDemoProps } from "../types";

export const PaginationDemo: React.FC<PaginationDemoProps> = ({
totalItems,
itemsPerPage = 10,
initialPage

}) => {
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
        canPrevPage
    } = usePagination(totalItems, itemsPerPage)
    return(
        <div className="flex flex-col px-4 py-4 mx-auto bg-black p-4 border rounded max-w-2xl mt-4">
            <p className="text-2xl text-white text-center">Pagination Demo</p>
            <div className="flex flex-row justify-between mb-4">
                <p className="text-white">Items per page: {itemsPerPage}</p>
                <p className="text-white">Total Items: {totalItems}</p>
            </div>
            <div className="flex flex-col mb-5">
                <p className="text-white">1. Item 1</p>
                <p className="text-white">2. Item 2</p>
                <p className="text-white">3. Item 3</p>
                <p className="text-white">4. Item 4</p>
                <p className="text-white">5. Item 5</p>
                <p className="text-white">6. Item 6</p>
                <p className="text-white">7. Item 7</p>
                <p className="text-white">8. Item 8</p>
                <p className="text-white">9. Item 9</p>
                <p className="text-white">10. Item 10</p>
            </div>
            <div className="flex flex-row justify-between mb-5">
                <button className="text-white" onClick={prevPage} disabled={!canPrevPage}>Previous</button>
                <p className="text-white">Page {currentPage} of {totalPages}(Picker)</p>
                <button className="text-white" onClick={nextPage} disabled={!canNextPage}>Next</button>
            </div>
            <div className="flex flex-row justify-center">
                <p className="text-white mb-2">Showing Items {startIndex + 1} - {endIndex} (Total on this page: {itemsOnCurrentPage})</p>
            </div>
            <div className="flex flex-row justify-center">
            <button className="bg-white text-center mr-2 px-3 py-1 border-2">1</button>
            <button className="bg-white text-center mr-2 px-3 py-1 border-2">2</button>
            <button className="bg-white text-center mr-2 px-3 py-1 border-2">3</button>
            <button className="bg-white text-center mr-2 px-3 py-1 border-2">4</button>
            <button className="bg-white text-center mr-2 px-3 py-1 border-2">5</button>
            <button className="bg-white text-center mr-2 px-3 py-1 border-2">6</button>
            <button className="bg-white text-center mr-2 px-3 py-1 border-2">7</button>
            <button className="bg-white text-center mr-2 px-3 py-1 border-2">8</button>
            <button className="bg-white text-center mr-2 px-3 py-1 border-2">9</button>
            <button className="bg-white text-center mr-2 px-3 py-1 border-2">10</button>
            <button className="bg-white text-center mr-2 px-3 py-1 border-2">11</button>
            <button className="bg-white text-center mr-2 px-3 py-1 border-2">12</button>
            <button className="bg-white text-center mr-2 px-3 py-1 border-2">13</button>
            </div>
        </div>
    )
}