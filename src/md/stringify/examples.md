---
title: Examples
keywords: ['csv','stringify', 'example', 'sample', 'stream', 'pipe', 'callback', 'sync', 'async']
sort: 4
---

# CSV Stringify examples

## Introduction

This package proposes different API flavours. Every example is available on [GitHub](https://github.com/adaltas/node-csv-stringify/tree/master/samples).

## Using the pipe function

One useful function part of the Stream API is `pipe`. It is used to connect
multiple `stream.Readable` sources to `stream.Writable` destinations.

The [pipe example](https://github.com/adaltas/node-csv-stringify/blob/master/samples/api.pipe.js) generates object records, stringifies them and print the generated CSV to the standard output.

This example is available with the command `node samples/api.pipe.js`.

```js
const stringify = require('csv-stringify')
const generate = require('csv-generate')

generate({
  objectMode: true,
  seed: 1,
  headers: 2
})
.pipe(stringify({
  header: true,
  columns: {
   year: 'birthYear',
   phone: 'phone'
  }
}))
.pipe(process.stdout)
```
_Run this example with the command `node samples/api.pipe.js`._
