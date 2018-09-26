---
title: API
description: CSV Parse - stream, callback and sync APIs
keywords: ['intro','page']
sort: 2
---

# CSV Parse API

## Introduction

There are multiple APIs available. Under the hood, they are all based on the same implementation. The stream API might not be the most pleasant API to use but is scalable. Use the callback style API or the sync API for simplicity if you are sure that the generated dataset fit in memory.

### Stream API

It implements the native Node.js [transform stream](http://nodejs.org/api/stream.html#stream_class_stream_transform) which is both readable and writable.

This is the recommended approach if you need a maximum of power. It ensures scalability by treating your data as a stream from the source to the destination.

```
const parse = require('csv-parse')
parse([options]);
```

### Mixed API

It leverages the stream transform API but input doesn't have to be an readable
stream and output doesn't have to be a writable stream. Input may be a string
passed as first argument. Output may be obtained in the callback passed as last
argument.

Uses it for convenience in case you are already interacting with a readable
stream or a writable stream. It is not scalable because it implies that you
either have all CSV dataset in memory and wish to pipe the generated
records into a stream writer or that you have a stream reader generating a CSV
data stream and wish to obtain an object representing all the records.

```
const parse = require('csv-parse')
parse([data], [options], [callback])
```

### Sync API

It accepts a full data set as text and returns the full result set as an array
or an object.

This represent a regular direct synchronous call to a function: you pass records
and it return a CSV text. Because of its simplicity, this is the recommended
approach if you don't need scalability and if your dataset fit in memory.

```
const parse = require('csv-parse/lib/sync')
parse(records, [options])
```

## Internal properties

Those properties are for internal usage but may be considered useful to the
final user in some situations. They are accessible from the intance returned by
the `parse` function.

* `count` (number)   
  Internal counter of records being processed.
* `empty_line_count` (number)   
  Internal counter of empty lines
* `skipped_line_count` (number)   
  Number of non uniform lines skipped when `relax_column_count` is true.
* `lines` (number)   
  The number of lines encountered in the source dataset, start at 1 for the
  first line.
* `is_int` (regexp, function)   
  The regular expression or function used to determine if a value should be
  cast to an integer.
* `is_float` (regexp, function)   
  The regular expression or function used to determine if a value should be
  cast to a float.
