---
title: Debounce Function
author: Jerome
pubDatetime: 2023-05-17T02:05:51Z
featured: true
draft: false
tags:
  - javascript
ogImage: ""
description: "Implementing the classic debounce function in Javascript"
---

# Writing debounce function

## Thought process for creating debounce function

- `setTimeout` is the first thing that comes to mind when there's a duration to wait before invoking a function
- need to return a function that does two things:
  1. invoke debounce (`setTimeout()`, `clearTimeout()`)
  2. calls callback function with the correct parameters

## Invoking debounce

- we need to reset the timer everytime the debounce function is called again while there's a pending invocation, so we need to track a reference to the timeout and clear it when function is called again
- init `timeoutID` reference -> `clearTimeout` everytime we call debounce function -> start timer using `setTimeout`

```javascript
export default function debounce(func, wait = 0) {
  let timeoutID;
  return function (...args) {
    clearTimeout(timeoutID);
    timeoutID = setTimeout(func(), wait);
  };
}
```

## Passing correct parameters to callback function

- debounce functions are used like the original functions, so we need to pass the value of `this` and its arguments
- have to use `.apply()` to retain the value of `this`, instead of just `func(...arg)`
- The value of `this` within arrow functions is bound to the context in which the function is created, not to the environment in which the function is called.

### `this` with regular functions

```javascript
export default function debounce(func, wait = 0) {
  let timeoutID;
  return function (...args) {
    clearTimeout(timeoutID);
    // keeping a reference to 'this' so that func.apply() can access it
    const context = this;
    timeoutID = setTimeout(function () {
      func.apply(context, args);
    }, wait);
  };
}
```

### `this` with arrow functions

```javascript
export default function debounce(func, wait = 0) {
  let timeoutID;
  return function (...args) {
    clearTimeout(timeoutID);
    // arrow functions has context of the outer function
    timeoutID = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}
```

## Learning Points / Concepts to create this function

1. using `setTimeout`
2. Closures
3. understanding `this`
4. `.apply()` and `.call()`
