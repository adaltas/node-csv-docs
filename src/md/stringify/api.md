---
title: API
description: CSV Stringify - stream, callback and sync APIs
keywords: ['intro','page']
sort: 2
---

# CSV Stringify API

## Introduction

There are multiple APIs available. Under the hood, they are all based on the same implementation. The stream API might not be the most pleasant API to use but is scalable. Use the callback style API or the sync API for simplicity if you are sure that the generated dataset fit in memory.

### Stream API

It implement the native Node.js [transform stream][stream] which is both
readable and writable.

This is the recommended approach if you need a maximum of power. It ensure
scalability by treating your data as a stream from the source to the destination.

```
const stringify = require('csv-stringify')
stringify([options]);
```

### Mixed API

It leverages the stream transform API but input doesn't have to be an readable
stream and output doesn't have to be a writable stream. Input may be a string
passed as first argument. Output may be obtained in the callback passed as last
argument.

Uses it for convenience in case you are already interacting with a readable
stream or a writable stream. It is not scalable because it implies that you
either have all your records in memory and wish to pipe the generated
CSV into a stream writer or that you have a stream reader generated records and
wish to obtain a string representing the full CSV text.

```
const stringify = require('csv-stringify')
stringify([data], [options], [callback])
```

### Sync API

It accepts a full data set of records and returns the full result set.

This represent a regular direct synchronous call to a function: you pass records
and it return a CSV text. Because of its simplicity, this is the recommended
approach if you don't need scalability and if your dataset fit in memory. 

```
const stringify = require('csv-stringify/lib/sync')
stringify(records, [options])
```
