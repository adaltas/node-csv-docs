---
title: API
description: Stream Transform - stream, callback and sync APIs
keywords: ['stream', 'transform', 'csv', 'api', 'callback', 'stream', 'sync', 'promise']
sort: 3
---

# Stream Transform API

This package proposes different API flavors available through different modules. Under the hood, they are all based on the same implementation.

* [Stream API](/transform/api/stream/)   
  The stream API is scalable and is the default implemention upon witch other API are created. It is verbose but flexible.
* [Callback API](/transform/api/callback/)   
  If the transformed dataset fit into memory, you can obtains the records from a user defined function. It is implemented in the same function as the stream API. It is easy and handlers can be written asynchronously.
* [Stream + callback API](/transform/api/mixed/)  
  The stream and callback APIs can be combined toguether if you need to.
* [Sync API](/transform/api/sync/)   
  The sync API provides simplicity, readability and convenience. However, both the input and output datasets must fit into memory and only synchronous handlers are supported.

## Additionnal information

Both modules target ECMAScript Edition 6 (ES6 or ES2015), Node.js version 7.6 and above. For older version of JavaScript, every module is transpiled into ECMAScript Edition 5 (ES5) inside the folder "lib/es5". The ES5 modules share the exact same API with their ES6 counterpart. For example, the `sync` module compatible with ES5 is located available using `require('stream-transform/lib/es5/sync')`.

For additional usages and examples, you may refer to:

* [the Option page](/transform/option/)
* [the "samples" folder](https://github.com/adaltas/node-stream-transform/tree/master/samples)
* [the "test" folder](https://github.com/adaltas/node-stream-transform/tree/master/test).
