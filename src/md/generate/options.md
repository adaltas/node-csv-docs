---
title: Options
description: Options relative to the csv-generate package
keywords: ['csv', 'generate', 'options', 'duration', 'columns', 'seed', 'object', 'string']
sort: 3
---

# CSV Generate options

All options are optional. All the options from the [Node.js Stream Writable](https://nodejs.org/api/stream.html#stream_constructor_new_stream_writable_options) are supported and passed as is.

## Available options

* `duration` (integer)   
  Period to run in milliseconds, default to 4 minutes.
* `columns` (integer|array|function)   
  Define the number of generated fields and the generation method. If columns is an integer, it corresponds to the number of fields. If it is an array, each element correspond to a field. If the field is a function, the function is expected to return a value, if a string, it call the registered function of the same name (eg `Generator.int` for the value "int"), current values are "ascii", "int" and "bool", more could be added by the user or on demand by opending a [pull request](https://github.com/adaltas/node-csv-generate/issues/new). Default to 8 ascii columns.
* `encoding` (string)   
   If specified, then buffers will be decoded to strings using the specified encoding. The default value is `null`.
* `max_word_length` (integer)   
  Maximum number of characters per word. Default to 16.
* `seed` (integer)   
  Generate idempotent random characters if a number provided. The default value is `false` which disable the feature.
* `length` (integer)   
  Number of lines or records to generate. The default value is `-1` which is infinite.   
* `objectMode` (boolean)   
  Whether this stream should behave as a stream of objects. Meaning that stream.read(n) returns a single value instead of a Buffer of size n. The default value is `false`.   
* `highWaterMark` (integer)   
  The maximum number of bytes to store in the internal buffer before ceasing to read from the underlying resource. The default value is 16384 (16kb), or 16 for objectMode streams.
