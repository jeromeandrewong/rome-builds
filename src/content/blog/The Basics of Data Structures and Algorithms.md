---
title: The Basics of Data Structures and Algorithms
author: Jerome
pubDatetime: 2023-05-03T02:05:51Z
featured: false
draft: false
tags:
  - dsa
ogImage: ""
description: "Important concepts of Big O"
---

# The Basics of Data Structures and Algorithms

## Big O (time and space complexity)

- a way to categorise an algorithm's time or memory requirements based on input
- as your input grows, how fast does computation or memory grow
- not an exact measurement; meant to generalise growth of your algorithm
- helps us make decisions on what data structure and algorithms to use, knowing how they perfom will greately help create great programs

### Example

```typescript
function sum_char_codes(n: string): number {
  let sum = 0;
  for (let i = 0; i < n.length; ++i) {
    sum += n.charCodeAt(i);
  }

  return sum;
}

// O(N) Time Complexity
```

### Simple Trick

Look for loops...

### Practical vs Theoretical differences

Just because N is faster than N^2 does't mean its always faster for smaller inputs

### Important Concepts

1. Growth is wrt the input
2. Constants are dropped, because Big O is meant to describe the upper bound of the algo (its growth)
   - O(2N) -> O(N)
3. Worst case is usually the way we measure

### Common Complexities

![](/public/complexity.png)
