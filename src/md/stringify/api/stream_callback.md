---
title: Combining the stream API with a entire dataset
navtitle: Stream + dataset
description: Replace the writable stream with a string or buffer and the readable stream with a callback function.
keywords: ['csv', 'stringify', 'api', 'stream', 'callback', 'function', 'mixin']
sort: 3.3
---

# Combining a stream with a entire dataset

It leverages the stream transform API but input doesn't have to be an readable
stream and output doesn't have to be a writable stream. Input may be a string
passed as first argument. Output may be obtained in the callback passed as last
argument.

Uses it for convenience in case you are already interacting with a readable
stream or a writable stream. It is not scalable because it implies that you
either have all your records in memory and wish to pipe the generated
CSV into a stream writer or that you have a stream reader generated records and
wish to obtain a string representing the full CSV text.

The signature of the [output stream example](https://github.com/adaltas/node-csv/blob/master/packages/csv-stringify/samples/mixed.output_stream.js) is `const stream = stringify(input, [options])`. It takes an input string and an options object as arguments and return a readable stream.

`embed:packages/csv-stringify/samples/mixed.output_stream.js`

Inversely, the signature of the [input stream example](https://github.com/adaltas/node-csv/blob/master/packages/csv-stringify/samples/mixed.input_stream.js) is `const stream = stringify([options], callback)`. It takes an options object and a callback function as arguments and return a writable stream.

`embed:packages/csv-stringify/samples/mixed.input_stream.js`
