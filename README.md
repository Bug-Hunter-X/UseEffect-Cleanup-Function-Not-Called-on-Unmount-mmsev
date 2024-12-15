# React useEffect Cleanup Function Issue

This repository demonstrates a common issue with React's `useEffect` hook where the cleanup function doesn't seem to be called when the component unmounts.  The provided code includes a minimal example of the problem and a solution.

## Problem

The `useEffect` hook is designed to perform side effects, and the cleanup function is crucial for properly handling resources (like timers, subscriptions, or event listeners) that need to be released when the component is no longer needed. In this case, we expect to see the 'Component unmounted' message in the console when the component is unmounted, but it's not appearing.

## Solution

The solution involves ensuring that the component is actually unmounting and that there are no unexpected re-renders preventing the cleanup function from executing.