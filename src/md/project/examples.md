---
title: Examples
keywords: ['csv', 'example', 'sample', 'stream', 'pipe', 'callback', 'sync', 'async']
sort: 5
---

# CSV Examples

## Introduction

This package proposes different API flavors. Every example is available on [GitHub](https://github.com/adaltas/node-csv/tree/master/samples).

## Using the stream API

The Node.js stream API is scalable and offers the greatest control over the data flow. It comes at the cost of being more verbose and harder to write. Data is consumed inside the `readable` event with the `stream.read` function. It is then written by calling the `stream.write` function. The [stream example](https://github.com/adaltas/node-csv/blob/master/packages/csv/samples/stream.js) illustrates how to initialize each packages and how to plug them.

`embed:packages/csv/samples/stream.js`

## Using the pipe API

Piping in Node.js is part of the stream API and behave just like Unix pipes where the output of a process, here a function, is redirected as the input of the following process. A [pipe example](https://github.com/adaltas/node-csv/blob/master/packages/csv/samples/pipe.funny.js) is provided with an unconventional syntax:

`embed:packages/csv/samples/pipe.funny.js`

A [more conventional pipe example](https://github.com/adaltas/node-csv/blob/master/packages/csv/samples/pipe.js) is:

`embed:packages/csv/samples/pipe.js`

## Using the callback API

Also available in the `csv` module is the callback API. The all dataset is available in the second callback argument. Thus it will not scale with large dataset. The [callback example](https://github.com/adaltas/node-csv/blob/master/packages/csv/samples/callback.js) initialize each CSV function sequentially, with the output of the previous one. Note, for the sake of clarity, the example doesn't deal with error management. It is enough spaghetti code.

`embed:packages/csv/samples/callback.js`

## Using the sync API

The sync API behave like [pure functions](https://en.wikipedia.org/wiki/Pure_function). For a given input, it always produce the same output.

Because of its simplicity, this is the recommended approach if you don't need scalability and if your dataset fit in memory. 

The module to import is `csv/sync`. The [sync example](https://github.com/adaltas/node-csv/blob/master/packages/csv/samples/sync.js) illustrate its usage.

```embed:packages/csv/samples/sync.js```
