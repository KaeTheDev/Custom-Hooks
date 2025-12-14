import { useState, useEffect } from "react";


function useDebounce(value: string, delay: number = 500) {
    // 1. State
const [debouncedValue, setDebouncedValue] = useState(value);

    // 2. Effect: runs when value or delay changes
    useEffect(() => {
        // Set up the debounce timer
        const timerId = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        // Cleanup: cancel the timer if value/delay changes
        return () => {
            clearTimeout(timerId);
        };
    }, [value, delay]);

    return {
        debouncedValue
};
}


export default useDebounce;


// INPUTS
// value: The value to debounce (e.g., a search string from an input field).
// delay: The debounce delay in milliseconds (default to 500ms).

// RETURN VALUES
// debouncedValue: The value after the debounce delay has passed without value changing.

// Implementation Details:
// Use useState to store the debouncedValue.
// Use useEffect to set up a timer (setTimeout) whenever the input value or delay changes.
// The effect should clear the timer (using clearTimeout) if value or delay changes before the timer fires (this is the core of debouncing).
// When the timer finally fires, update the debouncedValue state.