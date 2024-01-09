---
title: Stream
description: CSV - learn how to leverage the Node.js stream pipe API with CSV
keywords: ['csv', 'parse', 'parser', 'example', 'recipe', 'stream', 'async', 'pipe', 'read', 'write']
sort: 3.1
---

# Node.js stream API

The Node.js stream API is scalable and offers the greatest control over the data flow.

## Using the pipe API

Pipes in Node.js is a native functionnality provided by the [stream API](https://nodejs.org/api/stream.html). It behave just like Unix pipes where the output of a process, here a stream reader, is redirected as the input of the following process, here a stream writer.

The [pipe example](https://github.com/adaltas/node-csv/blob/master/packages/csv/samples/pipe.js) is quite readable while also scalable:

`embed:packages/csv/samples/pipe.js` 

## Using the native stream functions

The native stream functions provide flexibity but comes at the cost of being more verbose and harder to write. Data is consumed inside the `readable` event with the `stream.read` function. It is then written by calling the `stream.write` function. The [stream example](https://github.com/adaltas/node-csv/blob/master/packages/csv/samples/stream.js) illustrates how to initialize each packages and how to plug them.

`embed:packages/csv/samples/stream.js`
