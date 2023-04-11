---
title: API
description: CSV Stringify - stream, callback and sync APIs
keywords: ['csv', 'stringify', 'api', 'callback', 'stream', 'sync', 'promise']
sort: 3
---

# CSV Stringify API

## Introduction

There are multiple APIs available, each with their own advantages and disadvantages. Under the hood, they are all based on the same implementation.

* [Sync API](/stringify/api/sync/)   
  The sync API provides simplicity, readability and convenience. Like for the callback API, it is meant for small dataset which fit in memory and which usage tolerates waiting for the last record.
* [Stream API](/stringify/api/stream/)   
  The stream API might not be the most pleasant API to use but is scalable.
* [Callback API](/stringify/api/callback/)   
  The callback API buffers all the emitted records from the stream API into a single array which is passed to a user provided function. Passing a function is easier than implementing the stream events function but it implies that the all dataset must fit into the available memory and it will only be available after the last record has been processed. This is usually not recommanded, use the Sync API instead.
* [Stream API + dataset](/stringify/api/stream_callback/)  
  Replace the writable stream with records or the readable stream with a callback function.
* [Async iterator API](/stringify/api/async_iterator/)   
  The Async iterator API is both scalable and elegant. It takes advantage of the native Readable Stream API upon which the parser is build to iterate over the stringified chunks of data.
  
For additional usages and examples, you may refer to:

* [the API page](/stringify/api/),
* [the "samples" folder](https://github.com/adaltas/node-csv/tree/master/packages/csv-stringify/samples)
* [the "test" folder](https://github.com/adaltas/node-csv/tree/master/packages/csv-stringify/test).
