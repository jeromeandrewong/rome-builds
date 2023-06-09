---
title: Javascript's Event Loop
author: Jerome
pubDatetime: 2023-06-09T02:05:51Z
featured: True
draft: false
tags:
  - Javascript
ogImage: ""
description: "Understanding Javascript's runtime model"
---

## TLDR

The event loop is a single-threaded loop that monitors the call staack and checks if there is any work to be done in the task queue. If the call stack is empty and there are callback functions in the task queue, a function is dequeued and pushed onto the call stack to be executed.

## Components of an event loop

![](/eventloop.png)

- Call Stack
- Web API
- Macrotask Queue
- Microtask Queue

## Call Stack

Stack that keeps track of the sequence of function calls and their execution context. So everytime we create a function or a global context it creates an execution context (everything it needs to execute the code)

## Web API

API that enables web features like

- DOM manipulation
- Timers (setTimeout)
- Networking (fetch)

## Macrotask Queue

task queue which contains all the

- setTimout and setInterval functions
- UI rendering tasks
- User input events
- Network Events

## Microtask Queue

task queue which contains all the

- Promise callbacks
- queueMicrotask callbacks
- async/await
- MutationObserver callbacks

## Order of execution:

1. functions pushed to Call Stack
2. Web API handles specific functions
3. functions queued in macrotask or microtask queue
4. once Call stack empty, Event Loop will first dequeue callbacks from microtask queue and push to Call Stack
5. then it will dequeue callbacks in Macrotask queue and push to Call Stack
