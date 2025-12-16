#  React Lab – Custom Hooks

##  Overview
In modern React development, abstracting reusable logic into custom Hooks is a fundamental practice for building maintainable and scalable applications. This lab focuses on creating two common custom Hooks: `usePagination` and `useDebounce`, and demonstrates how they can be applied in real components.


##  Workplace Context
You’ve been tasked with developing reusable custom Hooks to handle common UI patterns: managing client-side pagination and debouncing rapidly changing input values. These Hooks should be designed for reusability, clarity, and efficiency in any React application.

##  Learning Objectives
Upon successful completion of this lab, you will be able to:

* Design and implement reusable custom React Hooks from scratch.
* Encapsulate complex logic and state management within a custom Hook.
* Effectively manage dependencies and side effects within custom Hooks.
* Understand how to return values and functions from custom Hooks for use in components.
* Apply custom Hooks to solve common problems like pagination and debouncing input.
* Consider basic performance aspects, such as memoization, where applicable.

##  Description

This lab focuses on:

* Implementing a `usePagination` Hook to manage pagination logic.
* Implementing a `useDebounce` Hook to debounce rapidly changing values.
* Creating example components to demonstrate the usage of both Hooks.
* Understanding and applying best practices for state management, effects, and reusable hook design.

### usePagination Hook
**Objective:** Manage pagination logic for a list of items.

**Inputs:**
* `totalItems`: Total number of items.
* `itemsPerPage`: Items per page (default: 10).
* `initialPage`: Starting page (default: 1).

**Return Values:**
* `currentPage`: Current active page number.
* `totalPages`: Total number of pages.
* `startIndex`: Start index for current page (0-based).
* `endIndex`: End index for current page (0-based).
* `itemsOnCurrentPage`: Number of items on current page.
* `setPage(pageNumber)`: Jump to a specific page.
* `nextPage()`: Go to next page.
* `prevPage()`: Go to previous page.
* `canNextPage`: Boolean if next page exists.
* `canPrevPage`: Boolean if previous page exists.

**Example Usage Component:** `PaginationDemo.tsx`

* Simulates a list of 100 items.
* Displays the current page, total pages, and items on the current page.
* Includes "Previous", "Next", and page jump buttons.
* Disables navigation buttons when appropriate.

### useDebounce Hook
**Objective:** Debounce a rapidly changing value, often used for search inputs.

**Inputs:**
* `value`: The value to debounce.
* `delay`: Debounce delay in milliseconds (default: 500ms).

**Return Value:**
* `debouncedValue`: Value after debounce delay.

**Example Usage Component:** `DebounceSearchDemo.tsx`

* Contains an input field that updates its value in real time.
* Shows the debounced value after the specified delay.
* Simulates API calls or filtering based on the debounced value.

##  Resources

*  React Docs — https://react.dev
*  TypeScript Handbook — https://www.typescriptlang.org/docs
*  React Hooks Guide — Official Documentation
*  TypeScript + React Cheatsheets (recommended)
*  https://react-tutorial.app/
* https://www.freecodecamp.org/learn/front-end-development-libraries-v9/

##  Getting Started

##  Requirements

*  Node.js v24+
*  npm
*  Git
*  A code editor (VS Code recommended)
*  TypeScript
*  React

##  OS Compatibility

This lab works on:

*  Windows
*  macOS
*  Linux

##  Installation

1. Clone the repository:

git clone [<repository-url>](https://github.com/KaeTheDev/Custom-Hooks.git)

2. Navigate into the project folder:

cd custom-hooks

##  Setup

1. Install dependencies:

npm install

2. Run the project:

npm run dev

##  Project Structure
* components/ — Contains all React components used in the app.
* hooks/ — Contains usePagination and useDebounce hooks.
* types/ — Shared TypeScript types/interfaces used across components.
* pages/ — Example demo pages for each hook.


*  components/ — Contains all React components used in the app.
*  types/ — Shared TypeScript types/interfaces used across components.