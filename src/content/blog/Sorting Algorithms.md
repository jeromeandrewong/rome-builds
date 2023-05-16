---
title: Sorting Algorithms
author: Jerome
pubDatetime: 2023-05-14T02:05:51Z
featured: false
draft: false
tags:
  - dsa
  - sorting
ogImage: ""
description: "Some sort algorithms I've learnt"
---

# Sort

## Bubble Sort

- start at zeroth to end, check next item if larger ? swap : remain
- in a single iteration, largest item will be in nth spot
- in each iteration after, we will only have to check till n-1th spot since the nth position is already sorted correctly
- O(N^2)

### Example

```typescript
function bubble_sort(arr: number[]): void {
  for (let i = 0; i < arr.length; ++i) {
    for (let j = 0; j < arr.length - i - 1; ++j) {
      if (arr[j] > arr[j + 1]) {
        // swap
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}
```
