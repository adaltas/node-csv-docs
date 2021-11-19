---
title: Examples
description: Examples on how to generate CSV data sets and streams
keywords: ['csv','generate', 'example', 'sample', 'stream', 'pipe', 'callback', 'sync', 'async']
sort: 6
---

# CSV Generate examples

This package proposes different API flavors. Every example is available on [GitHub](https://github.com/adaltas/node-csv-generate/tree/master/samples).

## Using the pipe function

One useful function part of the Stream API is `pipe` to interact between
multiple streams. You may use this function to pipe a `stream.Readable`
source to a `stream.Writable` destination.

The [pipe example](https://github.com/adaltas/node-csv/blob/master/packages/csv-generate/samples/pipe.js), generates a dataset of 2 rows with 2 columns. The first columns contains integer values and the second column contains boolean values. It prints the generated dataset to stdout. the function `generate` return a readable stream which is then piped to `process.stdout` which is a writable stream.

`embed:packages/csv-generate/samples/pipe.js`
