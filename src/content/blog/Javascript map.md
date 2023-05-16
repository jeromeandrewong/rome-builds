---
title: Javascript Maps
author: Jerome
pubDatetime: 2023-05-16T02:05:51Z
featured: false
draft: false
tags:
  - javascript
  - dsa
ogImage: ""
description: "HashMap, for javascript"
---

# Map

- new data structure introduced in ES6
- similar to HashMap in Java
- allows storing k-v pairs
- O(1) for accessing elements

## Creating a map

```typescript
let myMap = new Map<String, number>();
```

## common operations

1. myMap.set(k,v)
2. myMap.get(k)
3. myMap.has(k)
4. myMap.size
5. myMap.delete(k)

```typescript
let myMap = new Map<string, number>();

//1. Add entries
myMap.set("foo", 10);
myMap.set("boo", 5);
myMap.set("fizz", 9);

//2. Get entries
let val = myMap.get("foo"); // age = 10

//3. Check entry by Key
myMap.has("foo"); // true
myMap.has("foobar"); // false

//4. Size of the Map
let count = myMap.size; // count = 3

//5. Delete an entry
let isDeleted = myMap.delete("foo"); // isDeleted = true

//6. Clear whole Map
myMap.clear();
```

## Iterating over maps

1. myMap.keys()

```typescript
for (let key in myMap.keys) {
  // do something
}
```

2. myMap.values()

```typescript
for (let value in myMap.values) {
  // do something
}
```

3. myMap.entries()

```typescript
for (let entry in myMap.entries) {
  // do something
}
```

4. myMap

```typescript
for (let [k, v] in myMap) {
  // do something
}
```
