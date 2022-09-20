---
title: Examples
keywords: ['csv', 'stringify', 'example', 'sample', 'stream', 'pipe', 'callback', 'sync', 'async']
sort: 5
---

# CSV Stringify examples

## Introduction

This package proposes different API flavors. Every example is available on [GitHub](https://github.com/adaltas/node-csv/tree/master/packages/csv-stringify/samples).

## Using the pipe function

One useful function part of the Stream API is `pipe`. It is used to connect
multiple `stream.Readable` sources to `stream.Writable` destinations.

The [pipe example](https://github.com/adaltas/node-csv/blob/master/packages/csv-stringify/samples/api.pipe.js) generates object records, stringifies them and print the generated CSV to the standard output.

`embed:packages/csv-stringify/samples/api.pipe.js`

_Run this example with the command `node samples/api.pipe.js`._
