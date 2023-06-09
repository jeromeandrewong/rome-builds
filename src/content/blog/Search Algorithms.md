---
title: Search Algorithms
author: Jerome
pubDatetime: 2023-05-04T02:05:51Z
featured: false
draft: false
tags:
  - dsa
  - search
ogImage: ""
description: "Some search algorithms I've learnt"
---

# Search

## Linear Search

- simplest form of search
- O(N)

### Example

```typescript
function linear_search(haystack: number[], needle: number): boolean {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle) {
      return true;
    }
  }

  return false;
}
```

## Binary Search

- on ordered arrays
- halves input at each step
- O(LogN)

### Example

```typescript
function bs_list(haystack: number[], needle: number): boolean {
  let lo = 0;
  let hi = haystack.length;
  do {
    const m = Math.floor(lo + (hi - lo) / 2);
    const v = haystack[m];
    if (v === needle) {
      return true;
    } else if (v > needle) {
      hi = m;
    } else {
      lo = m + 1;
    }
  } while (lo < hi);
  {
    return false;
  }
}
```

## Two Crystal Balls Problem

- binary search twist
- O(√N)

> Given two crystal balls that will break if dropped from high enough distance, determine the exact spot in which it will break in the most optimized way.

```typescript
function two_crystal_balls(breaks: boolean[]): number {
  const jumpDist = Math.floor(Math.sqrt(breaks.length));
  let currentFloor = jumpDist;
  for (; currentFloor < breaks.length; currentFloor += jumpDist) {
    //check for breaks
    if (breaks[currentFloor]) {
      break;
    }
  }
  //jump back by a sqrt and linearly walk up
  currentFloor -= jumpDist;
  for (
    let j = 0;
    j <= jumpDist && currentFloor < breaks.length;
    ++j, ++currentFloor
  ) {
    if (breaks[currentFloor]) {
      return currentFloor;
    }
  }
  return -1;
}
```
