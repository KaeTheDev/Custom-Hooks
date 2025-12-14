// import { useState, useEffect } from "react";
// import useDebounce from "../custom-hooks/useDebounce";
// import type { DebounceDemoProps } from "../types";

export const DebounceDemo = () => {
    return(
        <div className="flex flex-col px-4 py-4 mx-auto bg-black p-4 border rounded max-w-2xl mt-4">
            <p className="text-2xl text-center text-white">Debounce Search Demo</p>
            <p className="text-white mb-3">Debounce Delay(ms): 500 (PICKER)</p>
            <input className="text-white border-2 px-3 py-3 mb-3"  type="text" placeholder="Type to search" />
            <p className="text-white">Current Input: 23</p>
            <p className="text-white mb-5">Debounced Value (after 400ms): 23</p>
            <p className="text-white">Simulated Search Results:</p>
            <ul>
                <li><p className="text-white">Result for "23": Item 1</p></li>
                <li><p className="text-white">Result for "23": Item 2</p></li>
                <li><p className="text-white">Result for "23": Item 3</p></li>
            </ul>
        </div>
    )
}