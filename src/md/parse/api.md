---
title: API
description: CSV Parse - stream, callback and sync APIs
keywords: ['csv', 'parse', 'parser', 'api', 'callback', 'stream', 'sync', 'promise']
sort: 3
---

# CSV Parse API

There are multiple APIs available, each with their own advantages and disadvantages. Under the hood, they are all based on the same implementation.

* [Stream API](/parse/api/stream/)   
  The stream API might not be the most pleasant API to use but is scalable. It
  is the one upon which all the other implementation are based.
* [Callback API](/parse/api/callback/)   
  The callback API buffers all the emitted data from the stream API into a single
  object which is passed to a user provided function. Passing a function is
  easier than implementing the stream events function but it implies that the
  all dataset must fit into the available memory and it will only be available
  after the last record has been processed.
* [Stream + callback API](/parse/api/stream_callback/)  
  Replace the writable stream with a string or buffer and the readable stream with a callback function.
* [Sync API](/parse/api/sync/)   
  The sync API provides simplicity, readability and convenience. Like for the
  callback API, it is meant for small dataset which fit in memory and which
  usage tolerates waiting for the last record.
* [Async iterator API](/parse/api/async_iterator/)   
  The Async iterator API is both scalable and elegant. It takes advantage of
  the native Readable Stream API upon which the parser is build to iterate
  over the parsed records.
  
For additional usages and examples, you may refer to:

* [the API page](/parse/api/),
* [the "samples" folder](https://github.com/adaltas/node-csv/tree/master/packages/csv-parse/samples)
* [the "test" folder](https://github.com/adaltas/node-csv/tree/master/packages/csv-parse/test).
