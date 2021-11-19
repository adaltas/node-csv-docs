---
title: Options
description: Options relative to the csv-generate package
keywords: ['csv', 'generate', 'options', 'duration', 'columns', 'seed', 'object', 'string']
sort: 4
---

# CSV Generate options

All options are optional. The [Node.js Stream Writable](https://nodejs.org/api/stream.html#stream_constructor_new_stream_writable_options) options are supported as well.

## Available options

* `columns` (integer|array|function)   
  Define the number of generated fields and the generation method. If columns is an integer, it corresponds to the number of fields. If it is an array, each element correspond to a field. If the field is a function, the function is expected to return a value, if a string, it call the registered function of the same name (eg `Generator.int` for the value "int"), current values are "ascii", "int" and "bool", more could be added by the user or on demand by opening a [pull request](https://github.com/adaltas/node-csv-generate/issues/new). Default to 8 ascii columns.
* `delimiter` (string)   
  Set the field delimiter. One or multiple character. Defaults to "," (comma).
* `duration` (integer)   
  Period to run in milliseconds, default to 4 minutes.
* `encoding` (string)   
  If specified, then buffers will be decoded to strings using the specified encoding; see [the documentation page](https://nodejs.org/api/buffer.html#buffer_buffers_and_character_encodings) to see all the encodings supported by Buffer; default to `null`.
* `end` (integer|date)   
  When to stop the generation; could be a numeric value and a date object; default is null.
* `eof` (boolean|string)   
  One or multiple characters to print at the end of the file; only apply when `objectMode` is disabled; default to `false` or the value of `row_delimiter` if `true`.
* `fixed_size`, `fixedSize` (boolean)   
  Generate buffers equals length as defined by the `highWaterMark` option; only apply when `objectMode` is disabled; first record is twice the `highWaterMark` option; default is `false`.
* `high_water_mark`, `highWaterMark` (integer)   
  The maximum amount of bytes to store in the internal buffer before ceasing to read from the underlying resource; for streams operating in object mode, the highWaterMark specifies a total number of objects; default value is 16384 (16kb), or 16 for objectMode streams.
* `length` (integer)   
  Number of lines or records to generate. The default value is `-1` which is infinite.   
* `max_word_length` (integer)   
  Maximum number of characters per word. Default to 16.
* `object_mode`, `objectMode` (boolean)   
  Whether this stream should behave as a stream of objects. Meaning that stream.read(n) returns a single value instead of a Buffer of size n. The default value is `false`. 
* `row_delimiter`, `rowDelimiter` (string)   
  One or multiple characters used to delimit records; only apply when `objectMode` is disabled; default to `\n`, the Unix line ending.
* `seed` (integer)   
  Generate idempotent random characters if a number provided. The default value is `false` which disable the feature.
* `sleep` (number)   
  The time to wait between the generation of each records; since v3.1.0; default to "0" (no wait).

## Choose your style

The code uses snake case as the conventional style for function and variable names. In snake case, all letters are lowercase and underscores separate words. It is however accepted to provide options in camel case. Thus, `record_delimiter` and `recordDelimiter` are equivalent when initialising a new generation. The option will be converted into snake case and exposed as such. For example, in case you need to access the `record_delimiter` option, use `generate().options.record_delimiter` and not `generate().options.recordDelimiter`. Choose the case which best fit your coding style.

## Option `objectMode`

By the default, the generator will generate a CSV dataset in the form of a string. It is however possible to generate objects but passing the [`objectMode` option](https://nodejs.org/api/stream.html#stream_constructor_new_stream_writable_options) native to the writable stream.

In the [stream example](https://github.com/adaltas/node-csv/blob/master/packages/csv-generate/samples/options.objectmode.stream.js), each record is returned by the `read` function in the form of an array.

`embed:packages/csv-generate/samples/options.objectmode.stream.js`

In the [callback example](https://github.com/adaltas/node-csv/blob/master/packages/csv-generate/samples/options.objectmode.callback.js), the dataset is passed in the callback an array of array.

`embed:packages/csv-generate/samples/options.objectmode.callback.js`
