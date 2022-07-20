---
title: Combining the stream and callback APIs
navtitle: Stream + callback
description: Replace the writable stream with a string or buffer and the readable stream with a callback function.
keywords: ['csv', 'parse', 'api', 'stream', 'callback', 'function', 'mixin']
sort: 3.3
---

# Combining the stream and callback APIs

The main module exported by the package leverages the Node.js [stream transform API](https://nodejs.org/api/stream.html). However, the input doesn't have to be a readable stream. Instead, it could be a CSV string and a Buffer. Also, the output doesn't have to be a writable stream, it could be a user callback function.

Uses it for convenience in case you are already interacting with a readable stream or a writable stream. It is not scalable because it implies that you either have all CSV dataset in memory and wish to pipe the generated records into a stream writer or that you have a stream reader generating a CSV data stream and wish to obtain a full dataset with all the records.

The signature of the [output stream example](https://github.com/adaltas/node-csv/blob/master/packages/csv-parse/samples/mixed.output_stream.js) is `const stream = parse(input, options)`. It takes an input string and an options object as arguments and return a readable stream.

`embed:packages/csv-parse/samples/mixed.output_stream.js`

Inversely, the signature of the [input stream example](https://github.com/adaltas/node-csv/blob/master/packages/csv-parse/samples/mixed.input_stream.js) is `const stream = parse(options, callback)`. It takes an options object and a callback function as arguments and return a writable stream.

`embed:packages/csv-parse/samples/mixed.input_stream.js`
