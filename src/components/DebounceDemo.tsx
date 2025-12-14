import { useState, useEffect } from "react";
import useDebounce from "../custom-hooks/useDebounce";
import type { DebounceDemoProps } from "../types";

export const DebounceDemo: React.FC<DebounceDemoProps> = ({ value }) => {
  // Keep track of input
  const [inputValue, setInputValue] = useState<string>(String(value ?? ""));
  // Keep track of delay
  const [delay, setDelay] = useState<number>(500);
  // Call the hook
  const { debouncedValue } = useDebounce(inputValue, delay);

  return (
    <div className="flex flex-col px-4 py-4 mx-auto bg-black p-4 border rounded max-w-2xl mt-4">
      <p className="text-2xl text-center text-white">Debounce Search Demo</p>
<div className="flex flex-row">
<span className="text-white mb-3">Debounce Delay(ms): {delay}</span>
       <button
          className="px-3 py-2 bg-gray-200 rounded"
          onClick={() => setDelay(prev => Math.max(prev - 100, 0))} // can't go below 0
        >
          -
        </button>
        <button
          className="px-3 py-2 bg-gray-200 rounded"
          onClick={() => setDelay(prev => prev + 100)} // increase by 100ms
        >
          +
        </button>
</div>
      <input
        className="text-white border-2 px-3 py-3 mb-3"
        type="text"
        placeholder="Type to search"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p className="text-white">Current Input: {inputValue}</p>
      <p className="text-white mb-5">
        Debounced Value (after {delay}ms): {debouncedValue}
      </p>
      <p className="text-white">Simulated Search Results:</p>
      <ul>
        {debouncedValue &&
          Array.from({ length: 3 }).map((_, i) => (
            <li key={i}>
              <p className="text-white">
                Result for "{debouncedValue}": Item {i + 1}
              </p>
            </li>
          ))}
      </ul>
    </div>
  );
};
