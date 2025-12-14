export const PaginationDemo = () => {
    return(
        <div className="flex flex-col px-4 py-4 mx-auto bg-black p-4 border rounded max-w-2xl mt-4">
            <p className="text-2xl text-white text-center">Pagination Demo</p>
            <div className="flex flex-row justify-between mb-4">
                <p className="text-white">Items per page: Picker here</p>
                <p className="text-white">Total Items: 123</p>
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
                <button className="text-white">Previous</button>
                <p className="text-white">Page 1 of 13(Picker)</p>
                <button className="text-white">Next</button>
            </div>
            <div className="flex flex-row justify-center">
                <p className="text-white mb-2">Showing Items 1 - 10 (Total on this page: 10)</p>
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