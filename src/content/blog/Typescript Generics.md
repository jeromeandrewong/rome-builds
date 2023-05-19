---
title: Typescript Generics
author: Jerome
pubDatetime: 2023-05-14T02:05:51Z
featured: false
draft: false
tags:
  - Typescript
ogImage: ""
description: "Explaining Generics in Typescript"
---

# Generics?

- pretty clear definition taken from official TS docs
  ![](/assets/blogimages/genericsdef.png)

## The T Generic

- generic type parameter, represents <i>Type</i>
- can be replaced with any valid name

### Example

```typescript
// defining function
function example<T>(value: T): T {
  return value;
}

//calling function
console.log(example<string>("foo")); //returns 'foo'
```

- In this example, we are chaining the generic type T to both the return value type and the parameter type
- when calling the function I chose to explicitly specify the actual type of the generic parameter: 'string' (you don't have to if you want to rely on type inferences)

### Another Example

```typescript
// defining function
function example2<T, U>(param1: T, param2: U): T {
  return param1;
}

// calling funcition
console.log(example<number, string>(5, "foo")); //returns 5
```

- This example shows that we can define more than one type parameter
