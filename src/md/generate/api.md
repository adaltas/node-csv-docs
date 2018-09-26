---
title: API
description: CSV Generate - stream, callback and sync APIs
keywords: ['intro','page']
sort: 2
---

# CSV Generate API

## Introduction

There are multiple APIs available. Under the hood, they are all based on the same implementation. The stream API might not be the most pleasant API to use but is scalable. Use the callback style API or the sync API for simplicity if you are sure that the generated dataset fit in memory.

## [Node.js Stream API][stream]

It implements the native Node.js [readable stream API](http://nodejs.org/api/stream.html#stream_class_stream_transform). This is the 
recommended approach if you need a maximum of power. It ensures scalability 
by treating your data as an input stream.

```
const generate = require('csv-generate')
const readable_stream = generate([options])
```   

For additional usage and example, you may refer to
[the example page](/generate/examples/),
[the "samples" folder](https://github.com/adaltas/node-csv-generate/tree/master/samples) and [the "test" folder](https://github.com/adaltas/node-csv-generate/tree/master/test).

## Callback API

The generated output is passed to the callback in the second argument. This mode
implies that the overall dataset will be stored in memory.

```
const generate = require('csv-generate')
generate([options], callback)
```

## Sync API

The generated output is returned. Like with the callback API, this mode
implies that the overall dataset will be stored in memory.

```
const generate = require('csv-generate/lib/sync')
const data = generate([options])
```
