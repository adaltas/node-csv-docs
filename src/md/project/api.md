---
title: API
description: CSV - stream, callback and sync APIs
keywords: ['csv', 'parse', 'parser', 'api', 'callback', 'stream', 'sync', 'promise']
sort: 3
---

# CSV API

There are multiple APIs and styles available, each with their own advantages and disadvantages. Under the hood, they are all based on the same implementation.

* [Sync API](/parse/api/sync/)   
  The sync API provides simplicity, readability and convenience. Like for the callback API, it is meant for small dataset which fit in memory.
* [Stream API](/parse/api/stream/)   
  The stream API might not be the most pleasant API to use but is scalable.
* [Callback API](/parse/api/callback/)   
  The callback API buffers all the emitted data from the stream API into a single object which is passed to a user provided function. Passing a function is easier than implementing the stream events function but it implies that the all dataset must fit into the available memory and it will only be available after the last record has been processed. This is usually not recommanded, use the Sync API instead.
  
For additional usages and examples, you may refer to:

* [the parser API pages](/parse/api/),
* [the stringifier API pages](/stringify/api/),
* [the "samples" folder](https://github.com/adaltas/node-csv/tree/master/packages/csv/samples)
* [the "test" folder](https://github.com/adaltas/node-csv/tree/master/packages/csv/test).
