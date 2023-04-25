---
title: Async and Await in Javascript
author: Jerome
pubDatetime: 2023-04-25T02:05:51Z
featured: false
draft: false
tags:
  - TypeScript
  - Javascript
ogImage: ""
description: "Finally understanding Async/Await"
---

## Table of Contents

0. [What is Async/Await?](#-0-what-is-async/await?)
1. [What are Promises?](#-1-what-are-promises)
2. [Async](#-2-async)
3. [Await](#-3-await)
4. [Extracting Data](#-4-extracting-data)
5. [Error Handling](#-5-error-handling)

## 0. What is Async/Await

A special Javascript specific syntax to work with promises.

## 1. What are Promises

A Javascript promise, simply put, is an unknown value now that might be known in the future. It manages a single async vlue that can be handled in the future.

### 1.1 States of a Promise

A pending promise can either be fulfilled with a value or rejected with a reason (error).

<b>Pending</b>: intial state, neither fulfilled nor rejected
<b>Fulfilled</b>: when the operation has been completed successfully
<b>Rejected</b>: when the operation has failed

## 2. Async

```tsx
async function example()=>{
//  do something
}
```

Placing an `async` before a function ensures that the function returns a promise, and wraps non-promises around it.

## 3. Await

```tsx
async function example()=>{

  const res = await fetch('/api/example')

}
```

The `await` keyword makes Javascript wait until the promise settles and returns its result.

`await` suspends the function's execution until the promise settles, and then resumes it with the promise result. This does not cost any extra CPU resources as Javascript can still execute other jobs in the meantime.

## 4. Extracting Data

```tsx
async function example()=>{

  const res = await fetch('/api/example')

  const exampleData = await res.json()
}
```

`exampleData` is the data extracted as a JSON object from the response.

## 5. Error Handling

```tsx
async function example()=>{

  const res = await fetch('/api/example')

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
	}

  const exampleData = await res.json()
}
```

If API request fails, we should handle the error, perhaps by displaying it. With `async`/ `await`, we need not use `try`/`catch` blocks or `.then()`. We can use `.ok()` if using Fetch or `.catch()` if using axios.

> Or we can just use [TanStack Query](https://tanstack.com/query/latest) and forget about all these async-spaghetti code...
