---
title: API
description: CSV Generate - stream, callback and sync APIs
keywords: ['csv', 'generate', 'api', 'callback', 'stream', 'sync', 'promise']
sort: 3
---

# CSV Generate API

## Introduction

There are multiple APIs available. Under the hood, they are all based on the same implementation. The stream API might not be the most pleasant API to use but is scalable. Use the callback style API or the sync API for simplicity, readability and convenience if you are sure that your datasets fit in memory.

## Stream API

The main module of this package implements the native Node.js [readable stream API](http://nodejs.org/api/stream.html#stream_class_stream_transform). This is the recommended approach if you need a maximum of power. It ensures scalability by treating your data as an input stream. It is however more verbose and harder to use.

The signature is `const stream = generate([options])`.

The [stream example](https://github.com/adaltas/node-csv/blob/master/packages/csv-generate/samples/api.stream.js) illustrates the various events to listen.

`embed:packages/csv-generate/samples/api.stream.js`

## Callback API

The generated output is passed to the callback in the second argument. This mode
implies that the overall dataset will be stored in memory.

The signature is `const stream = generate([options], callback)`.

The [callback example](https://github.com/adaltas/node-csv/blob/master/packages/csv-generate/samples/api.callback.js) generate a dataset with 2 records.

`embed:packages/csv-generate/samples/api.callback.js`

## Sync API

The generated output is returned. Like with the callback API, this mode
implies that the overall dataset will be stored in memory.

The module to import or require is `csv-generate/sync` and the signature is `const records = generate([options])`.

The [sync example](https://github.com/adaltas/node-csv/blob/master/packages/csv-generate/samples/api.sync.js) returns an array of 2 records.


`embed:packages/csv-generate/samples/api.sync.js`
