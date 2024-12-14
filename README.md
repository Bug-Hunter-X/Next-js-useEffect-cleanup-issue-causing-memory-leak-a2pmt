# Next.js useEffect Cleanup Issue

This repository demonstrates a common issue in Next.js applications related to the improper use of the `useEffect` hook, leading to memory leaks and performance degradation.

The `bug.js` file showcases the problematic code, where an event listener is added without proper cleanup.  The `bugSolution.js` provides the corrected implementation.

## Problem

The `useEffect` hook in the original code adds an event listener to the `window` object for scroll events.  Crucially, it does this without specifying any dependencies, meaning the effect runs on every render. This results in multiple event listeners being added, causing unnecessary function calls and ultimately leading to memory leaks.

## Solution

The solution involves correctly managing the cleanup function returned by the `useEffect` hook.  The updated code ensures that the event listener is removed when the component unmounts, preventing memory leaks and improving performance.

## How to Reproduce

1. Clone this repository.
2. Navigate to the repository directory.
3. Run `npm install` to install the dependencies.
4. Run `npm run dev` to start the development server.
5. Observe the console logs to verify the solution's effect.